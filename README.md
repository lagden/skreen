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
