# @tadashi/skreen

A Deno/JSR library that renders HTML to a **PNG screenshot** or a **selectable-text PDF** using a Rust core powered by
[Blitz](https://github.com/DioxusLabs/blitz).

The input can be a URL (fetched by the TypeScript layer) or a raw HTML string. The output is a `Uint8Array` containing
the encoded PNG or PDF bytes.

## Usage

```ts
import { skreen } from "jsr:@tadashi/skreen";

// From a URL
const png = await skreen({ data: "https://example.com" });

// From an HTML string
const png = await skreen({
	data: "<html><body><h1>Hello World</h1></body></html>",
	width: 800,
	height: 600,
	scale: 2.0,
});

await Deno.writeFile("screenshot.png", png);
```

### As PDF

Use `skreenPdf` to produce a multi-page PDF with **selectable text**. It uses a native Rust binary
([fulgur](https://github.com/fulgur-rs/fulgur)) and requires the `--allow-run` Deno permission.

Images embedded as `data:` URIs (`<img src="data:image/png;base64,...">`) are supported.

```ts
import { skreenPdf } from "jsr:@tadashi/skreen";

const pdf = await skreenPdf({
	data: "<html><body><h1>Hello World</h1></body></html>",
	pageSize: "A4",
	marginMm: 20,
	title: "My Document",
	author: "Thiago",
});

await Deno.writeFile("output.pdf", pdf);
```

Page breaks are controlled by standard CSS (`break-before`, `break-after`, `break-inside`). Long documents paginate
automatically.

> **Note:** Inline SVGs (including those converted from `data:` URIs) may not render on pages that begin via automatic
> pagination. Use `break-before: page` on any section containing SVG images to ensure they always start on an explicit
> new page.

### With custom fonts

Pass additional font files as `Uint8Array` via the `fonts` option. These fonts are registered with the renderer
alongside the built-in Inter typeface and can be referenced by `font-family` in the HTML/CSS.

```ts
import { skreen } from "jsr:@tadashi/skreen";
import { html } from "./template.ts"; // HTML with pre-processed CSS

const roboto = await Deno.readFile("./Roboto-VariableFont.ttf");

const png = await skreen({
	data: html,
	width: 320,
	height: 0,
	scale: 2,
	fonts: [roboto],
});

await Deno.writeFile("screenshot.png", png);
```

See the full working examples in [example/basic/](example/basic/), [example/basic-pdf/](example/basic-pdf/), and
[example/custom-font/](example/custom-font/).

## API

### `skreen(options): Promise<Uint8Array>`

Returns a PNG image as a `Uint8Array`.

| Option   | Type           | Default | Description                                                               |
| -------- | -------------- | ------- | ------------------------------------------------------------------------- |
| `data`   | `string`       | —       | **Required.** A URL (`http://`, `https://`, `file://`) or an HTML string. |
| `width`  | `number`       | `1200`  | Viewport width in logical pixels.                                         |
| `height` | `number`       | `800`   | Minimum viewport height in logical pixels. Use `0` to expand to content.  |
| `scale`  | `number`       | `2.0`   | Device pixel ratio. Use `2.0` for HiDPI/retina output.                    |
| `fonts`  | `Uint8Array[]` | —       | Additional font files (TTF/OTF) registered alongside the built-in Inter.  |

When `data` is a URL, the HTML is fetched before being passed to the WASM renderer. The final image height is determined
by the rendered document height (capped at 4000 logical pixels).

### `skreenPdf(options): Promise<Uint8Array>`

Returns a PDF file as a `Uint8Array`. Uses a native binary — requires `--allow-run`.

| Option     | Type     | Default | Description                                                               |
| ---------- | -------- | ------- | ------------------------------------------------------------------------- |
| `data`     | `string` | —       | **Required.** A URL (`http://`, `https://`, `file://`) or an HTML string. |
| `pageSize` | `string` | `"A4"`  | Page size: `"A4"`, `"A3"`, or `"Letter"`.                                 |
| `marginMm` | `number` | `20`    | Uniform page margin in millimetres.                                       |
| `title`    | `string` | —       | Document title written into PDF metadata.                                 |
| `author`   | `string` | —       | Document author written into PDF metadata.                                |

The PDF contains real, selectable text and supports automatic multi-page layout via CSS pagination. Supported platforms:
macOS (Apple Silicon and Intel) and Linux (x86\_64 and ARM64). The correct binary is selected automatically at runtime.

## Building from source

Prerequisites: Rust, `wasm-bindgen-cli`, Deno, and (for Linux cross-compilation) `cargo-zigbuild` + `zig`.

```sh
# Add the required Rust targets (once)
rustup target add wasm32-unknown-unknown
rustup target add x86_64-apple-darwin
rustup target add x86_64-unknown-linux-gnu aarch64-unknown-linux-gnu

# Install tooling (once)
cargo install wasm-bindgen-cli
cargo install cargo-zigbuild
brew install zig  # macOS

# Compile WASM bindings + all native PDF binaries
deno task build

# Run tests
deno task test
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

[MIT](https://opensource.org/licenses/MIT) © Thiago Lagden
