# @tadashi/skreen

A Deno/JSR library that renders HTML to a **PNG screenshot** or a **selectable-text PDF** using a single Rust/WASM core.

| Output | Engine                                                                                                     |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| PNG    | [Blitz](https://github.com/DioxusLabs/blitz) + [Vello](https://github.com/linebender/vello) (CPU renderer) |
| PDF    | [fulgur](https://github.com/fulgur-rs/fulgur) (Blitz-based, multi-page, selectable text)                   |

Both paths run entirely inside the WASM module — no native binaries, no `--allow-run`, no npm dependencies.

The input can be a URL (fetched by the TypeScript layer) or a raw HTML string. The output is a `Uint8Array` containing
the encoded PNG or PDF bytes.

> **JavaScript is not executed.** The WASM renderer is a pure layout engine. Tailwind CSS and similar frameworks must be
> pre-processed and inlined before rendering.

---

## ⚠️ Fonts are required

**No fonts are embedded in the library.** If no fonts are supplied, text will be invisible in the output.

Always pass at least one font via the `fonts` option:

```ts
const pdf = await skreenPdf({
	data: html,
	fonts: ["/usr/share/fonts/Inter-Regular.ttf"],
});
```

The `fonts` option accepts **file paths** (`string`) or **raw bytes** (`Uint8Array`) — or a mix of both:

```ts
const customFont = await Deno.readFile("./MyFont.ttf");

const png = await skreen({
	data: html,
	fonts: [
		"/usr/share/fonts/Inter-Regular.ttf", // resolved by Deno at runtime
		customFont, // already in memory
	],
});
```

Fonts registered via `fonts` are available by their **embedded family name** (the name stored inside the TTF/OTF file).
Reference them in your CSS with `font-family`:

```css
/* This works — "Inter" is the family name embedded in Inter-Regular.ttf */
body {
	font-family: "Inter", sans-serif;
}
```

> No `@font-face` declarations are needed when passing fonts through the `fonts` option. For PDF,
> `@font-face { src: url('file://...') }` also works and lets fulgur load fonts directly by path.

---

## Usage

### PNG

```ts
import { skreen } from "jsr:@tadashi/skreen";

const png = await skreen({
	data: "<html><body><h1>Hello World</h1></body></html>",
	width: 800,
	height: 600,
	scale: 2.0,
	fonts: ["/usr/share/fonts/Inter-Regular.ttf"],
});

await Deno.writeFile("screenshot.png", png);
```

`data` can also be a URL — the HTML is fetched before being passed to the WASM renderer:

```ts
const png = await skreen({ data: "https://example.com", fonts: ["/path/to/font.ttf"] });
```

### PDF

`skreenPdf` produces a multi-page PDF with **selectable text**. Page breaks are controlled by standard CSS
(`break-before`, `break-after`, `break-inside`). Long documents paginate automatically.

```ts
import { skreenPdf } from "jsr:@tadashi/skreen";

const pdf = await skreenPdf({
	data: "<html><body><h1>Hello World</h1></body></html>",
	pageSize: "A4",
	marginMm: 20,
	title: "My Document",
	author: "Thiago",
	fonts: [
		"/usr/share/fonts/Inter-Regular.ttf",
		"/usr/share/fonts/Inter-Bold.ttf",
	],
});

await Deno.writeFile("output.pdf", pdf);
```

> **Note:** Inline SVGs (including those converted from `data:` URIs) may not render on pages that begin via automatic
> pagination. Use `break-before: page` on any section containing SVG images to ensure they always start on an explicit
> new page.

### With custom fonts

```ts
import { skreen } from "jsr:@tadashi/skreen";

const roboto = await Deno.readFile("./Roboto-VariableFont.ttf");

const png = await skreen({
	data: `<html><head><style>body { font-family: Roboto, sans-serif; }</style></head>
         <body><h1>The quick brown fox</h1></body></html>`,
	width: 600,
	height: 0,
	scale: 2,
	fonts: [roboto],
});

await Deno.writeFile("screenshot.png", png);
```

See the full working examples in [example/basic/](example/basic/), [example/basic-pdf/](example/basic-pdf/), and
[example/custom-font/](example/custom-font/).

---

## API

### `skreen(options): Promise<Uint8Array>`

Returns a PNG image as a `Uint8Array`.

| Option   | Type                          | Default | Description                                                                                                             |
| -------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`   | `string`                      | —       | **Required.** A URL (`http://`, `https://`, `file://`) or an HTML string.                                               |
| `width`  | `number`                      | `1200`  | Viewport width in logical pixels.                                                                                       |
| `height` | `number`                      | `800`   | Minimum viewport height in logical pixels. Use `0` to expand to content.                                                |
| `scale`  | `number`                      | `2.0`   | Device pixel ratio. Use `2.0` for HiDPI/retina output.                                                                  |
| `fonts`  | `Array<string \| Uint8Array>` | —       | Font files to embed. Strings are treated as file paths; `Uint8Array` as raw bytes. **Text is invisible without fonts.** |

The final image height is determined by the rendered document height (capped at 4000 logical pixels).

### `skreenPdf(options): Promise<Uint8Array>`

Returns a PDF file as a `Uint8Array`.

| Option      | Type                          | Default | Description                                                                                                             |
| ----------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`      | `string`                      | —       | **Required.** A URL (`http://`, `https://`, `file://`) or an HTML string.                                               |
| `pageSize`  | `string`                      | `"A4"`  | Page size: `"A4"`, `"A3"`, or `"Letter"`.                                                                               |
| `landscape` | `boolean`                     | —       | Landscape orientation.                                                                                                  |
| `marginMm`  | `number \| string`            | —       | Page margins in mm. Accepts CSS shorthand: `"20"`, `"20 30"`, `"10 20 30"`, `"10 20 30 40"`.                            |
| `title`     | `string`                      | —       | Document title written into PDF metadata.                                                                               |
| `author`    | `string`                      | —       | Document author written into PDF metadata.                                                                              |
| `language`  | `string`                      | —       | Document language tag (BCP 47, e.g. `"en"`, `"pt-BR"`). Required for PDF/UA-1.                                          |
| `fonts`     | `Array<string \| Uint8Array>` | —       | Font files to embed. Strings are treated as file paths; `Uint8Array` as raw bytes. **Text is invisible without fonts.** |
| `css`       | `string[]`                    | —       | CSS strings to inject into the document.                                                                                |
| `bookmarks` | `boolean`                     | —       | Generate PDF bookmarks (outline) from `h1`–`h6` headings.                                                               |
| `tagged`    | `boolean`                     | —       | Enable Tagged PDF output (structure tree for accessibility).                                                            |
| `pdfUa`     | `boolean`                     | —       | Enable PDF/UA-1 conformance (implies `tagged` and `bookmarks`).                                                         |

---

## Building from source

Prerequisites: Rust, `wasm-bindgen-cli`, `wasm-opt` (Binaryen), and Deno.

```sh
# Add the required Rust target (once)
rustup target add wasm32-unknown-unknown

# Install wasm-bindgen-cli (once)
cargo install wasm-bindgen-cli

# Install Binaryen for wasm-opt (once)
brew install binaryen        # macOS
# apt install binaryen       # Debian/Ubuntu

# Compile WASM + run wasm-opt
deno task build

# Run tests
deno task test
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

[MIT](https://opensource.org/licenses/MIT) © Thiago Lagden
