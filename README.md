# @tadashi/skreen

A Deno/JSR library that renders HTML to a PNG screenshot using a Rust/WebAssembly core powered by
[Blitz](https://github.com/DioxusLabs/blitz).

The input can be a URL (fetched by the TypeScript layer) or a raw HTML string. The output is a `Uint8Array` containing
the encoded PNG bytes.

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

### With Tailwind CSS

Use `withTailwind` to pre-process HTML that uses Tailwind CSS v4 utility classes before passing it to the renderer. The
WASM renderer does not execute JavaScript, so the browser CDN build cannot generate styles at runtime — this helper
inlines only the CSS classes actually used in the markup.

```ts
import { skreen, withTailwind } from "jsr:@tadashi/skreen";
import { html } from "./template.ts";

const processed = await withTailwind(html);
const png = await skreen({ data: processed, width: 320, height: 0, scale: 2 });

await Deno.writeFile("receipt.png", png);
```

> **Note:** `withTailwind` requires the Deno permissions `--allow-read`, `--allow-write`, `--allow-env`, and
> `--allow-net` (first run only, to cache npm packages).

See the full working example in [example/receipt.ts](example/receipt.ts) and [example/template.ts](example/template.ts).

## API

### `skreen(options): Promise<Uint8Array>`

Returns a PNG image as a `Uint8Array`.

| Option   | Type     | Default | Description                                                               |
| -------- | -------- | ------- | ------------------------------------------------------------------------- |
| `data`   | `string` | —       | **Required.** A URL (`http://`, `https://`, `file://`) or an HTML string. |
| `width`  | `number` | `1200`  | Viewport width in logical pixels.                                         |
| `height` | `number` | `800`   | Minimum viewport height in logical pixels.                                |
| `scale`  | `number` | `2.0`   | Device pixel ratio. Use `2.0` for HiDPI/retina output.                    |

When `data` is a URL, the HTML is fetched before being passed to the WASM renderer. The final image height is determined
by the rendered document height (capped at 4000 logical pixels).

### `withTailwind(html): Promise<string>`

Pre-processes an HTML string with Tailwind CSS v4, replacing the `@tailwindcss/browser` CDN script tag (or injecting
before `</head>`) with a `<style>` block containing only the CSS classes actually used in the markup.

| Parameter | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| `html`    | `string` | **Required.** HTML string with Tailwind classes. |

Returns the HTML string with an inlined `<style>` block ready to be passed to `skreen`.

## Building from source

Prerequisites: Rust, `wasm-bindgen-cli`, and Deno.

```sh
# Add the wasm32 target (once)
rustup target add wasm32-unknown-unknown

# Install wasm-bindgen CLI (once)
cargo install wasm-bindgen-cli

# Compile and generate bindings
deno task build

# Run tests
deno task test
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

[MIT](https://opensource.org/licenses/MIT) © Thiago Lagden
