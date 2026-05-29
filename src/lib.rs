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

    let mut generic_ids = Vec::new();
    for bytes in extra_fonts {
        let registered = font_ctx
            .collection
            .register_fonts(Blob::new(Arc::new(bytes.clone()) as _), None);
        generic_ids.extend(registered.into_iter().map(|(id, _)| id));
    }

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
    margin_mm: Option<serde_json::Value>,
    #[serde(default)]
    landscape: bool,
    #[serde(default)]
    title: Option<String>,
    #[serde(default)]
    author: Option<String>,
    #[serde(default)]
    language: Option<String>,
    #[serde(default)]
    fonts: Vec<String>,
    #[serde(default)]
    css: Vec<String>,
    #[serde(default)]
    bookmarks: bool,
    #[serde(default)]
    tagged: bool,
    #[serde(default)]
    pdf_ua: bool,
}

fn parse_margin_mm(v: &serde_json::Value) -> Option<fulgur::Margin> {
    let mm_pt = |mm: f32| mm * 72.0 / 25.4;
    match v {
        serde_json::Value::Number(n) => Some(fulgur::Margin::uniform_mm(n.as_f64()? as f32)),
        serde_json::Value::String(s) => {
            let parts: Vec<f32> = s.split_whitespace().filter_map(|p| p.parse().ok()).collect();
            Some(match parts.as_slice() {
                [a] => fulgur::Margin::uniform_mm(*a),
                [v, h] => fulgur::Margin {
                    top: mm_pt(*v),
                    right: mm_pt(*h),
                    bottom: mm_pt(*v),
                    left: mm_pt(*h),
                },
                [t, h, b] => fulgur::Margin {
                    top: mm_pt(*t),
                    right: mm_pt(*h),
                    bottom: mm_pt(*b),
                    left: mm_pt(*h),
                },
                [t, r, b, l] => fulgur::Margin {
                    top: mm_pt(*t),
                    right: mm_pt(*r),
                    bottom: mm_pt(*b),
                    left: mm_pt(*l),
                },
                _ => return None,
            })
        }
        _ => None,
    }
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
    if let Some(margin_val) = opts.margin_mm.as_ref() {
        if let Some(margin) = parse_margin_mm(margin_val) {
            builder = builder.margin(margin);
        }
    }
    if opts.landscape {
        builder = builder.landscape(true);
    }
    if let Some(title) = opts.title {
        builder = builder.title(title);
    }
    if let Some(author) = opts.author {
        builder = builder.author(author);
    }
    if let Some(lang) = opts.language {
        builder = builder.lang(lang);
    }
    if opts.bookmarks {
        builder = builder.bookmarks(true);
    }
    if opts.tagged {
        builder = builder.tagged(true);
    }
    if opts.pdf_ua {
        builder = builder.pdf_ua(true);
    }

    if !opts.fonts.is_empty() || !opts.css.is_empty() {
        let mut assets = fulgur::AssetBundle::new();
        for b64 in &opts.fonts {
            let bytes = general_purpose::STANDARD
                .decode(b64)
                .or_else(|_| general_purpose::STANDARD_NO_PAD.decode(b64))
                .map_err(|e| JsValue::from_str(&e.to_string()))?;
            assets
                .add_font_bytes(bytes)
                .map_err(|e| JsValue::from_str(&e.to_string()))?;
        }
        for css_str in &opts.css {
            assets.add_css(css_str);
        }
        builder = builder.assets(assets);
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
