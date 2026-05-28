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

Use `skreenPdf` to produce a multi-page PDF with **selectable text**. It uses
[`@fulgur-rs/cli`](https://www.npmjs.com/package/@fulgur-rs/cli) (installed automatically as an npm dependency) and
requires the `--allow-run` Deno permission.

Add `"nodeModulesDir": "auto"` to your `deno.jsonc` so Deno installs the platform-specific binary.

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

#### Fonts in Docker / Alpine environments

By default, `skreenPdf` prepends the built-in **Inter Regular** and **Inter Bold** fonts to every render
(`useBuiltinFonts: true`). This ensures text is always visible even in minimal environments like Alpine Linux that ship
without system fonts.

```ts
// Default — Inter fonts are included automatically, no extra config needed.
const pdf = await skreenPdf({ data: html });

// Opt out if you rely on system fonts or supply your own.
const pdf = await skreenPdf({ data: html, useBuiltinFonts: false });

// Supply additional fonts alongside the built-in ones.
const pdf = await skreenPdf({
	data: html,
	fonts: ["/usr/share/fonts/NotoSansCJK.ttf"],
});
```

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

| Option            | Type               | Default | Description                                                                                    |
| ----------------- | ------------------ | ------- | ---------------------------------------------------------------------------------------------- |
| `data`            | `string`           | —       | **Required.** A URL (`http://`, `https://`, `file://`) or an HTML string.                      |
| `pageSize`        | `string`           | `"A4"`  | Page size: `"A4"`, `"A3"`, or `"Letter"`.                                                      |
| `landscape`       | `boolean`          | —       | Landscape orientation.                                                                         |
| `marginMm`        | `number \| string` | `20`    | Page margins in mm. Accepts CSS shorthand: `"20"`, `"20 30"`, `"10 20 30"`, `"10 20 30 40"`.   |
| `title`           | `string`           | —       | Document title written into PDF metadata.                                                      |
| `author`          | `string`           | —       | Document author written into PDF metadata.                                                     |
| `language`        | `string`           | —       | Document language tag (BCP 47, e.g. `"en"`, `"pt-BR"`). Required for PDF/UA-1.                 |
| `fonts`           | `string[]`         | —       | Absolute paths to font files to bundle. Added after the built-in Inter fonts.                  |
| `css`             | `string[]`         | —       | Absolute paths to CSS files to include.                                                        |
| `bookmarks`       | `boolean`          | —       | Generate PDF bookmarks (outline) from `h1`–`h6` headings.                                      |
| `tagged`          | `boolean`          | —       | Enable Tagged PDF output (structure tree for accessibility).                                   |
| `pdfUa`           | `boolean`          | —       | Enable PDF/UA-1 conformance (implies `tagged` and `bookmarks`).                                |
| `useBuiltinFonts` | `boolean`          | `true`  | Prepend built-in Inter Regular + Bold fonts. Disable to rely solely on system or custom fonts. |

The PDF contains real, selectable text and supports automatic multi-page layout via CSS pagination. Supported platforms:
macOS (Apple Silicon and Intel), Linux (x86\_64, ARM64, and musl), and Windows (x86\_64). The correct binary is selected
automatically at runtime via the `@fulgur-rs/cli` npm package.

## Building from source

Prerequisites: Rust, `wasm-bindgen-cli`, and Deno.

```sh
# Add the required Rust target (once)
rustup target add wasm32-unknown-unknown

# Install wasm-bindgen-cli (once)
cargo install wasm-bindgen-cli

# Compile WASM bindings
deno task build

# Run tests
deno task test
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

[MIT](https://opensource.org/licenses/MIT) © Thiago Lagden
