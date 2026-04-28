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

const FONT_REGULAR: &[u8] = include_bytes!("../fonts/Inter-Regular.ttf");
const FONT_BOLD: &[u8] = include_bytes!("../fonts/Inter-Bold.ttf");

fn make_font_ctx() -> FontContext {
	let collection = Collection::new(CollectionOptions {
		system_fonts: false,
		shared: false,
	});
	let mut font_ctx = FontContext {
		collection,
		..Default::default()
	};

	let regular = font_ctx
		.collection
		.register_fonts(Blob::new(Arc::new(FONT_REGULAR) as _), None);
	font_ctx
		.collection
		.register_fonts(Blob::new(Arc::new(FONT_BOLD) as _), None);

	// Map Inter as the fallback for all generic families so any CSS font-family resolves to it
	let ids: Vec<_> = regular.into_iter().map(|(id, _)| id).collect();
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
			.set_generic_families(generic, ids.iter().copied());
	}

	font_ctx
}

#[wasm_bindgen]
pub fn render_html(html: &str, width: u32, height: u32, scale: f32) -> Vec<u8> {
	let mut document = HtmlDocument::from_html(
		html,
		DocumentConfig {
			viewport: Some(Viewport::new(
				(width as f32 * scale) as u32,
				(height as f32 * scale) as u32,
				scale,
				ColorScheme::Light,
			)),
			font_ctx: Some(make_font_ctx()),
			..Default::default()
		},
	);

	document.as_mut().resolve(0.0);

	let computed_height = document.as_ref().root_element().final_layout.size.height;
	let scale_f64 = scale as f64;
	let rw = (width as f64 * scale_f64) as u32;
	let rh = ((computed_height as f64)
		.max(height as f64)
		.min(4000.0) * scale_f64) as u32;

	let buffer = render_to_buffer::<VelloCpuImageRenderer, _>(
		|scene| {
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
