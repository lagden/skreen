use base64::{Engine as _, engine::general_purpose};
use fulgur::asset::AssetBundle;
use fulgur::config::{Margin, PageSize};
use fulgur::engine::Engine;
use serde::Deserialize;
use std::io::{self, Read, Write};

#[derive(Deserialize)]
struct Input {
	html: String,
	#[serde(default = "default_page_size")]
	page_size: String,
	#[serde(default = "default_margin")]
	margin_mm: f32,
	title: Option<String>,
	author: Option<String>,
}

fn default_page_size() -> String {
	"A4".to_string()
}

fn default_margin() -> f32 {
	20.0
}

// blitz-html writes non-fatal parse errors via println!() (fd 1). Redirect fd 1
// to /dev/null around render_html so those messages don't corrupt the PDF output.
// After rendering, restore fd 1 to write the PDF bytes to the caller.
#[cfg(unix)]
fn with_stdout_suppressed<F, T>(f: F) -> T
where
	F: FnOnce() -> T,
{
	use std::ffi::CString;
	use std::os::unix::io::RawFd;

	unsafe fn dup(fd: RawFd) -> RawFd {
		libc::dup(fd)
	}
	unsafe fn dup2(from: RawFd, to: RawFd) {
		libc::dup2(from, to);
	}
	unsafe fn close(fd: RawFd) {
		libc::close(fd);
	}
	unsafe fn open_devnull() -> RawFd {
		let path = CString::new("/dev/null").unwrap();
		libc::open(path.as_ptr(), libc::O_WRONLY)
	}

	let saved = unsafe { dup(1) };
	let devnull = unsafe { open_devnull() };
	unsafe { dup2(devnull, 1) };
	unsafe { close(devnull) };

	let result = f();

	unsafe { dup2(saved, 1) };
	unsafe { close(saved) };

	result
}

#[cfg(not(unix))]
fn with_stdout_suppressed<F, T>(f: F) -> T
where
	F: FnOnce() -> T,
{
	f()
}

/// Process `data:image/…;base64,…` URIs embedded in HTML.
///
/// fulgur resolves `<img>` elements from its `AssetBundle`, not from the
/// `NetProvider` (which only handles CSS). `ImageRender::detect_format` only
/// supports PNG / JPEG / GIF, so SVGs must be inlined instead.
///
/// - **Raster (PNG / JPEG / GIF / WebP)**: decoded bytes are registered in
///   the returned `AssetBundle` under the original `data:` URI as key. The
///   HTML is unchanged, so `bundle.get_image(src)` finds them by their raw
///   attribute value.
/// - **SVG**: the entire `<img src="data:image/svg+xml;…">` tag is replaced
///   with the decoded SVG markup so fulgur renders it via its inline-SVG path.
fn process_data_uri_images(html: &str) -> (String, AssetBundle) {
	let mut bundle = AssetBundle::new();
	let mut result = String::with_capacity(html.len());
	let mut remaining = html;

	loop {
		let Some(data_pos) = remaining.find("data:image/") else {
			break;
		};

		let before = &remaining[..data_pos];
		let quote = if before.ends_with('"') {
			'"'
		} else if before.ends_with('\'') {
			'\''
		} else {
			result.push_str(&remaining[..data_pos + 11]);
			remaining = &remaining[data_pos + 11..];
			continue;
		};

		let after_data = &remaining[data_pos..];
		let Some(close_pos) = after_data.find(quote) else {
			break;
		};
		let data_uri = &after_data[..close_pos];

		let Some(comma_pos) = data_uri.find(',') else {
			result.push_str(&remaining[..data_pos + 11]);
			remaining = &remaining[data_pos + 11..];
			continue;
		};

		let header = &data_uri[..comma_pos];
		let payload = &data_uri[comma_pos + 1..];

		if !header.contains(";base64") {
			result.push_str(&remaining[..data_pos + 11]);
			remaining = &remaining[data_pos + 11..];
			continue;
		}

		let Ok(bytes) = general_purpose::STANDARD
			.decode(payload)
			.or_else(|_| general_purpose::STANDARD_NO_PAD.decode(payload))
		else {
			result.push_str(&remaining[..data_pos + 11]);
			remaining = &remaining[data_pos + 11..];
			continue;
		};

		if header.contains("svg") {
			// Find the <img tag that owns this src attribute.
			let before_data = &remaining[..data_pos];
			let Some(img_start) = before_data
				.rfind("<img")
				.or_else(|| before_data.rfind("<IMG"))
			else {
				result.push_str(&remaining[..data_pos + 11]);
				remaining = &remaining[data_pos + 11..];
				continue;
			};

			// Find the closing > of the img tag (after the data URI's closing quote).
			let after_close_quote = &remaining[data_pos + close_pos + 1..];
			let Some(tag_end_offset) = after_close_quote.find('>') else {
				result.push_str(&remaining[..data_pos + 11]);
				remaining = &remaining[data_pos + 11..];
				continue;
			};

			result.push_str(&remaining[..img_start]);
			if let Ok(svg_str) = std::str::from_utf8(&bytes) {
				result.push_str(svg_str);
			}

			let tag_end = data_pos + close_pos + 1 + tag_end_offset + 1;
			remaining = &remaining[tag_end..];
		} else {
			// Raster: register in AssetBundle under the original data: URI.
			// fulgur calls bundle.get_image(src) with the raw attribute value,
			// so the key must match exactly.
			bundle.add_image(data_uri.to_string(), bytes);
			result.push_str(&remaining[..data_pos + close_pos]);
			remaining = &remaining[data_pos + close_pos..];
		}
	}

	result.push_str(remaining);
	(result, bundle)
}

fn main() {
	let mut input_str = String::new();
	io::stdin().read_to_string(&mut input_str).unwrap_or_else(|e| {
		eprintln!("error reading stdin: {e}");
		std::process::exit(1);
	});

	let input: Input = serde_json::from_str(&input_str).unwrap_or_else(|e| {
		eprintln!("error parsing JSON input: {e}");
		std::process::exit(1);
	});

	let page_size = match input.page_size.as_str() {
		"A4" => PageSize::A4,
		"A3" => PageSize::A3,
		"Letter" => PageSize::LETTER,
		other => {
			eprintln!("unknown page_size: \"{other}\". supported: A4, A3, Letter");
			std::process::exit(1);
		}
	};

	let (html, bundle) = process_data_uri_images(&input.html);

	let mut builder = Engine::builder()
		.page_size(page_size)
		.margin(Margin::uniform_mm(input.margin_mm))
		.assets(bundle);

	if let Some(title) = input.title {
		builder = builder.title(title);
	}
	if let Some(author) = input.author {
		builder = builder.author(author);
	}

	let engine = builder.build();

	let pdf = with_stdout_suppressed(|| engine.render_html(&html)).unwrap_or_else(|e| {
		eprintln!("render failed: {e}");
		std::process::exit(1);
	});

	io::stdout().write_all(&pdf).unwrap_or_else(|e| {
		eprintln!("error writing PDF to stdout: {e}");
		std::process::exit(1);
	});
}
