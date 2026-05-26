use anyrender::{PaintScene as _, render_to_buffer};
use anyrender_vello_cpu::VelloCpuImageRenderer;
use base64::{Engine as _, engine::general_purpose};
use blitz_dom::{DocumentConfig, FontContext};
use blitz_html::HtmlDocument;
use blitz_paint::paint_scene;
use blitz_traits::net::{Bytes, NetHandler, NetProvider, Request};
use blitz_traits::shell::{ColorScheme, Viewport};
use kurbo::Rect;
use linebender_resource_handle::Blob;
use parley::fontique::{Collection, CollectionOptions, GenericFamily};
use peniko::{Color, Fill};
use percent_encoding::percent_decode;
use std::sync::Arc;
use wasm_bindgen::prelude::*;

// Fonts are compiled into the WASM binary at build time; no filesystem access at runtime.
const FONT_REGULAR: &[u8] = include_bytes!("../fonts/Inter-Regular.ttf");
const FONT_BOLD: &[u8] = include_bytes!("../fonts/Inter-Bold.ttf");

/// A [`NetProvider`] that resolves `data:` URIs synchronously.
///
/// All other URL schemes are silently dropped (no network access in WASM).
/// Without this, `<img src="data:...">` elements render as blank boxes because
/// the default `DummyNetProvider` ignores every fetch request.
struct DataUriNetProvider;

impl NetProvider for DataUriNetProvider {
    fn fetch(&self, _doc_id: usize, request: Request, handler: Box<dyn NetHandler>) {
        let url = request.url;
        if url.scheme() != "data" {
            return;
        }

        // data:[<mediatype>][;base64],<data>
        let url_str = url.as_str();
        let rest = &url_str["data:".len()..];

        let Some(comma) = rest.find(',') else { return };
        let header = &rest[..comma];
        let payload = &rest[comma + 1..];

        let bytes: Bytes = if header.ends_with(";base64") {
            match general_purpose::STANDARD.decode(payload)
                .or_else(|_| general_purpose::STANDARD_NO_PAD.decode(payload))
            {
                Ok(decoded) => Bytes::from(decoded),
                Err(_) => return,
            }
        } else {
            Bytes::from(percent_decode(payload.as_bytes()).collect::<Vec<u8>>())
        };

        handler.bytes(url_str.to_string(), bytes);
    }
}

/// Builds a [`FontContext`] with the embedded Inter typeface and any caller-supplied fonts.
///
/// System fonts are disabled (`system_fonts: false`) so the output is identical across
/// all environments — the renderer has no access to the host OS font directories in WASM.
///
/// Generic CSS families (`sans-serif`, `serif`, `monospace`, …) are mapped to the first
/// registered family so that HTML that relies on generic names still renders predictably.
/// When `extra_fonts` are provided they take priority; otherwise Inter is used for all
/// generic families.
fn make_font_ctx(extra_fonts: &[Vec<u8>]) -> FontContext {
	// Disable system fonts and shared cache: output must be hermetic and reproducible.
	let collection = Collection::new(CollectionOptions {
		system_fonts: false,
		shared: false,
	});
	let mut font_ctx = FontContext {
		collection,
		..Default::default()
	};

	// Always register both Inter weights; `regular` IDs are kept as the fallback mapping.
	let regular = font_ctx
		.collection
		.register_fonts(Blob::new(Arc::new(FONT_REGULAR) as _), None);
	font_ctx
		.collection
		.register_fonts(Blob::new(Arc::new(FONT_BOLD) as _), None);

	// If custom fonts are provided, register them and use their family IDs for
	// generic CSS family mapping so they take priority over the embedded Inter fonts.
	// Otherwise fall back to Inter's IDs.
	let generic_ids: Vec<_> = if extra_fonts.is_empty() {
		regular.into_iter().map(|(id, _)| id).collect()
	} else {
		let mut ids = Vec::new();
		for bytes in extra_fonts {
			let registered = font_ctx
				.collection
				.register_fonts(Blob::new(Arc::new(bytes.clone()) as _), None);
			ids.extend(registered.into_iter().map(|(id, _)| id));
		}
		ids
	};

	// Map every CSS generic family to the chosen font so that `font-family: sans-serif`
	// (and similar) always resolves instead of falling back to a missing system font.
	for generic in [
		GenericFamily::SansSerif,
		GenericFamily::SystemUi,
		GenericFamily::Serif,
		GenericFamily::Monospace,
		GenericFamily::Cursive,
		GenericFamily::Fantasy,
		GenericFamily::UiSansSerif,
		GenericFamily::UiSerif,
		GenericFamily::UiMonospace,
		GenericFamily::UiRounded,
	] {
		font_ctx
			.collection
			.set_generic_families(generic, generic_ids.iter().copied());
	}

	font_ctx
}

/// Renders an HTML document to a PNG image and returns the encoded bytes.
///
/// # Parameters
/// - `html`         — Raw HTML string to render.
/// - `width`        — Viewport width in logical (CSS) pixels.
/// - `height`       — Minimum viewport height in logical pixels. Pass `0` to expand to content height.
/// - `scale`        — Device-pixel ratio (e.g. `2.0` for HiDPI). The physical pixel dimensions of
///                    the output are `width * scale` × `computed_height * scale`.
/// - `custom_fonts` — Optional JS array of `Uint8Array` font files to register alongside Inter.
///
/// The final image height is the document's computed content height clamped to 4 000 logical pixels,
/// then multiplied by `scale`. The color scheme is fixed to Light; dark mode is not supported.
#[wasm_bindgen]
pub fn render_html(
	html: &str,
	width: u32,
	height: u32,
	scale: f32,
	custom_fonts: Option<js_sys::Array>,
) -> Vec<u8> {
	// Deserialize font bytes from the JS side; non-Uint8Array entries are silently dropped.
	let extra_fonts: Vec<Vec<u8>> = custom_fonts
		.map(|arr| {
			arr.iter()
				.map(|v| js_sys::Uint8Array::from(v).to_vec())
				.collect()
		})
		.unwrap_or_default();

	// Parse HTML and apply CSS layout at the scaled physical resolution.
	let mut document = HtmlDocument::from_html(
		html,
		DocumentConfig {
			viewport: Some(Viewport::new(
				(width as f32 * scale) as u32,
				(height as f32 * scale) as u32,
				scale,
				ColorScheme::Light,
			)),
			font_ctx: Some(make_font_ctx(&extra_fonts)),
			net_provider: Some(Arc::new(DataUriNetProvider)),
			..Default::default()
		},
	);

	// Resolve layout (0.0 = no scroll offset).
	document.as_mut().resolve(0.0);

	// Compute physical render dimensions.
	// Height expands to content but is capped at 4 000 logical px to prevent runaway allocations.
	let computed_height = document.as_ref().root_element().final_layout.size.height;
	let scale_f64 = scale as f64;
	let rw = (width as f64 * scale_f64) as u32;
	let rh = ((computed_height as f64)
		.max(height as f64)
		.min(4000.0) * scale_f64) as u32;

	// Render the scene to a raw RGBA pixel buffer via the Vello CPU backend.
	let buffer = render_to_buffer::<VelloCpuImageRenderer, _>(
		|scene| {
			// Fill the background with white before painting the document.
			scene.fill(
				Fill::NonZero,
				Default::default(),
				Color::WHITE,
				None,
				&Rect::new(0.0, 0.0, rw as f64, rh as f64),
			);
			paint_scene(scene, document.as_mut(), scale_f64, rw, rh, 0, 0);
		},
		rw,
		rh,
	);

	encode_png(&buffer, rw, rh)
}

/// Encodes a raw RGBA pixel buffer as a PNG file.
///
/// The buffer must be exactly `width * height * 4` bytes in RGBA8 order.
fn encode_png(buffer: &[u8], width: u32, height: u32) -> Vec<u8> {
	let mut out = Vec::new();
	let mut enc = png::Encoder::new(&mut out, width, height);
	enc.set_color(png::ColorType::Rgba);
	enc.set_depth(png::BitDepth::Eight);
	let mut writer = enc.write_header().unwrap();
	writer.write_image_data(buffer).unwrap();
	writer.finish().unwrap();
	out
}
