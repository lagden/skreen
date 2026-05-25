use anyrender::{PaintScene as _, render_to_buffer};
use anyrender_vello_cpu::VelloCpuImageRenderer;
use blitz_dom::{DocumentConfig, FontContext};
use blitz_html::HtmlDocument;
use blitz_paint::paint_scene;
use blitz_traits::shell::{ColorScheme, Viewport};
use kurbo::Rect;
use linebender_resource_handle::Blob;
use parley::fontique::{Collection, CollectionOptions, GenericFamily};
use peniko::{Color, Fill};
use std::sync::Arc;
use wasm_bindgen::prelude::*;
use js_sys;

// Fonts are compiled into the WASM binary at build time; no filesystem access at runtime.
const FONT_REGULAR: &[u8] = include_bytes!("../fonts/Inter-Regular.ttf");
const FONT_BOLD: &[u8] = include_bytes!("../fonts/Inter-Bold.ttf");

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
				.filter_map(|v| js_sys::Uint8Array::try_from(v).ok().map(|u| u.to_vec()))
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
			paint_scene(scene, document.as_ref(), scale_f64, rw, rh, 0, 0);
		},
		rw,
		rh,
	);

	encode_png(&buffer, rw, rh)
}

/// Renders an HTML document to a PDF file and returns the encoded bytes.
///
/// Uses the same Blitz + Vello rendering pipeline as [`render_html`], then embeds the
/// resulting RGBA bitmap into a single-page PDF via [Krilla](https://crates.io/crates/krilla).
///
/// # Parameters
/// - `html`         — Raw HTML string to render.
/// - `width`        — Viewport width in logical (CSS) pixels; also sets the PDF page width.
/// - `height`       — Minimum viewport height in logical pixels. Pass `0` to expand to content height.
/// - `scale`        — Device-pixel ratio applied to the rendered bitmap. The PDF page size is
///                    derived from the *CSS* dimensions, not the scaled physical pixels, so
///                    the document prints at the correct physical size regardless of `scale`.
/// - `custom_fonts` — Optional JS array of `Uint8Array` font files to register alongside Inter.
///
/// # Note
/// The embedded bitmap is raster, so text in the PDF is not searchable or selectable.
#[wasm_bindgen]
pub fn render_html_pdf(
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
				.filter_map(|v| js_sys::Uint8Array::try_from(v).ok().map(|u| u.to_vec()))
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
			paint_scene(scene, document.as_ref(), scale_f64, rw, rh, 0, 0);
		},
		rw,
		rh,
	);

	// Derive the PDF page height from the un-scaled CSS pixels so the page size is
	// independent of `scale` (a 2× bitmap should not produce a 2× larger page).
	let css_h = (rh as f32 / scale) as u32;
	encode_pdf(buffer, rw, rh, width, css_h)
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

/// Wraps a raw RGBA pixel buffer in a single-page PDF using Krilla.
///
/// `render_width` / `render_height` are the physical pixel dimensions of `buffer`.
/// `css_width` / `css_height` are the logical CSS pixel dimensions used to set the PDF
/// page size: 1 CSS px = 0.75 PDF points (72 pt/inch ÷ 96 px/inch).
/// The bitmap is scaled to fill the page exactly.
fn encode_pdf(buffer: Vec<u8>, render_width: u32, render_height: u32, css_width: u32, css_height: u32) -> Vec<u8> {
	// PDF coordinate space uses points: 72 pt = 1 inch, 96 px = 1 inch → 1 px = 0.75 pt.
	let page_w = css_width as f32 * 72.0 / 96.0;
	let page_h = css_height as f32 * 72.0 / 96.0;

	let mut doc = krilla::Document::new();

	// Create a page with the correct CSS-derived dimensions.
	let settings = krilla::page::PageSettings::from_wh(page_w, page_h).unwrap();
	let mut page = doc.start_page_with(settings);
	let mut surface = page.surface();

	// Embed the high-resolution RGBA bitmap and stretch it to fill the page.
	let image = krilla::image::Image::from_rgba8(buffer, render_width, render_height);
	let size = krilla::geom::Size::from_wh(page_w, page_h).unwrap();
	surface.draw_image(image, size);

	// surface and page must be dropped before doc.finish() to flush pending state.
	drop(surface);
	drop(page);
	doc.finish().unwrap()
}
