use anyrender::{PaintScene as _, render_to_buffer};
use anyrender_vello_cpu::VelloCpuImageRenderer;
use base64::{Engine as _, engine::general_purpose};
use blitz_dom::{DocumentConfig, FontContext};
use blitz_dom::net::Resource;
use blitz_html::HtmlDocument;
use blitz_paint::paint_scene;
use blitz_traits::net::{Bytes, BoxedHandler, NetProvider, Request, SharedCallback};
use blitz_traits::shell::{ColorScheme, Viewport};
use kurbo::Rect;
use linebender_resource_handle::Blob;
use parley::fontique::{Collection, CollectionOptions, GenericFamily};
use peniko::{Color, Fill};
use percent_encoding::percent_decode;
use serde::Deserialize;
use std::sync::{Arc, Mutex};
use wasm_bindgen::prelude::*;

const FONT_REGULAR: &[u8] = include_bytes!("../fonts/Inter-Regular.ttf");
const FONT_BOLD: &[u8] = include_bytes!("../fonts/Inter-Bold.ttf");

/// Resolves `data:` URIs synchronously and accumulates parsed resources in a shared buffer.
///
/// All other URL schemes are silently dropped (no network access in WASM).
struct DataUriNetProvider {
    pending: Arc<Mutex<Vec<Resource>>>,
}

impl DataUriNetProvider {
    fn new() -> (Self, Arc<Mutex<Vec<Resource>>>) {
        let pending = Arc::new(Mutex::new(Vec::new()));
        (Self { pending: pending.clone() }, pending)
    }
}

impl NetProvider<Resource> for DataUriNetProvider {
    fn fetch(&self, doc_id: usize, request: Request, handler: BoxedHandler<Resource>) {
        let url = &request.url;
        if url.scheme() != "data" {
            return;
        }

        let url_str = url.as_str();
        let rest = &url_str["data:".len()..];

        let Some(comma) = rest.find(',') else { return };
        let header = &rest[..comma];
        let payload = &rest[comma + 1..];

        let bytes: Bytes = if header.ends_with(";base64") {
            match general_purpose::STANDARD
                .decode(payload)
                .or_else(|_| general_purpose::STANDARD_NO_PAD.decode(payload))
            {
                Ok(decoded) => Bytes::from(decoded),
                Err(_) => return,
            }
        } else {
            Bytes::from(percent_decode(payload.as_bytes()).collect::<Vec<u8>>())
        };

        let pending = self.pending.clone();
        let callback: SharedCallback<Resource> = Arc::new(
            move |_doc_id: usize, result: Result<Resource, Option<String>>| {
                if let Ok(resource) = result {
                    pending.lock().unwrap().push(resource);
                }
            },
        );

        handler.bytes(doc_id, bytes, callback);
    }
}

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
pub fn render_png(
    html: &str,
    width: u32,
    height: u32,
    scale: f32,
    custom_fonts: Option<js_sys::Array>,
) -> Vec<u8> {
    let extra_fonts: Vec<Vec<u8>> = custom_fonts
        .map(|arr| {
            arr.iter()
                .map(|v| js_sys::Uint8Array::from(v).to_vec())
                .collect()
        })
        .unwrap_or_default();

    let rw = (width as f32 * scale) as u32;
    let rh = (height as f32 * scale) as u32;
    let scale_f64 = scale as f64;

    let (net_provider, pending_resources) = DataUriNetProvider::new();

    let mut document = HtmlDocument::from_html(
        html,
        DocumentConfig {
            viewport: Some(Viewport::new(rw, rh, scale, ColorScheme::Light)),
            font_ctx: Some(make_font_ctx(&extra_fonts)),
            net_provider: Some(Arc::new(net_provider)),
            ..Default::default()
        },
    );

    // Apply data: URI resources (images decoded during HTML parsing)
    for resource in std::mem::take(&mut *pending_resources.lock().unwrap()) {
        document.as_mut().load_resource(resource);
    }

    document.as_mut().resolve(0.0);

    let computed_height = document.as_ref().root_element().final_layout.size.height;
    let actual_rh = ((computed_height as f64)
        .max(height as f64)
        .min(4000.0)
        * scale_f64) as u32;

    let buffer = render_to_buffer::<VelloCpuImageRenderer, _>(
        |scene| {
            scene.fill(
                Fill::NonZero,
                Default::default(),
                Color::WHITE,
                None,
                &Rect::new(0.0, 0.0, rw as f64, actual_rh as f64),
            );
            paint_scene(scene, document.as_ref(), scale_f64, rw, actual_rh);
        },
        rw,
        actual_rh,
    );

    encode_png(&buffer, rw, actual_rh)
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct PdfOptions {
    #[serde(default)]
    page_size: Option<String>,
    #[serde(default)]
    margin_mm: Option<f64>,
    #[serde(default)]
    landscape: bool,
    #[serde(default)]
    title: Option<String>,
    #[serde(default)]
    language: Option<String>,
}

#[wasm_bindgen]
pub fn render_pdf(html: &str, options: JsValue) -> Result<Vec<u8>, JsValue> {
    let opts: PdfOptions = serde_json::from_str(
        &js_sys::JSON::stringify(&options)
            .map_err(|e| JsValue::from_str(&format!("{e:?}")))?
            .as_string()
            .unwrap_or_default(),
    )
    .map_err(|e| JsValue::from_str(&e.to_string()))?;

    let mut builder = fulgur::Engine::builder();

    if let Some(size) = opts.page_size.as_deref() {
        let page_size = match size {
            "A3" => fulgur::PageSize::A3,
            "Letter" | "letter" => fulgur::PageSize::LETTER,
            _ => fulgur::PageSize::A4,
        };
        builder = builder.page_size(page_size);
    }
    if let Some(mm) = opts.margin_mm {
        builder = builder.margin(fulgur::Margin::uniform_mm(mm as f32));
    }
    if opts.landscape {
        builder = builder.landscape(true);
    }
    if let Some(title) = opts.title {
        builder = builder.title(title);
    }
    if let Some(lang) = opts.language {
        builder = builder.lang(lang);
    }

    let engine = builder.build();
    engine
        .render_html(html)
        .map_err(|e| JsValue::from_str(&e.to_string()))
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
