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

const FONT_REGULAR: &[u8] = include_bytes!("../fonts/Inter-Regular.ttf");
const FONT_BOLD: &[u8] = include_bytes!("../fonts/Inter-Bold.ttf");

fn make_font_ctx(extra_fonts: &[Vec<u8>]) -> FontContext {
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

#[wasm_bindgen]
pub fn render_html(
	html: &str,
	width: u32,
	height: u32,
	scale: f32,
	custom_fonts: Option<js_sys::Array>,
) -> Vec<u8> {
	let extra_fonts: Vec<Vec<u8>> = custom_fonts
		.map(|arr| {
			arr.iter()
				.filter_map(|v| js_sys::Uint8Array::try_from(v).ok().map(|u| u.to_vec()))
				.collect()
		})
		.unwrap_or_default();

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

#[wasm_bindgen]
pub fn render_html_pdf(
	html: &str,
	width: u32,
	height: u32,
	scale: f32,
	custom_fonts: Option<js_sys::Array>,
) -> Vec<u8> {
	let extra_fonts: Vec<Vec<u8>> = custom_fonts
		.map(|arr| {
			arr.iter()
				.filter_map(|v| js_sys::Uint8Array::try_from(v).ok().map(|u| u.to_vec()))
				.collect()
		})
		.unwrap_or_default();

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

	// css_height: use actual rendered height in CSS px (un-scaled) for page size
	let css_h = (rh as f32 / scale) as u32;
	encode_pdf(buffer, rw, rh, width, css_h)
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

fn encode_pdf(buffer: Vec<u8>, render_width: u32, render_height: u32, css_width: u32, css_height: u32) -> Vec<u8> {
	// PDF uses points: 72 pt/inch at 96 px/inch → 1 CSS px = 0.75 pt
	let page_w = css_width as f32 * 72.0 / 96.0;
	let page_h = css_height as f32 * 72.0 / 96.0;

	let mut doc = krilla::Document::new();
	let settings = krilla::page::PageSettings::from_wh(page_w, page_h).unwrap();
	let mut page = doc.start_page_with(settings);
	let mut surface = page.surface();

	let image = krilla::image::Image::from_rgba8(buffer, render_width, render_height);
	let size = krilla::geom::Size::from_wh(page_w, page_h).unwrap();
	surface.draw_image(image, size);

	drop(surface);
	drop(page);
	doc.finish().unwrap()
}
