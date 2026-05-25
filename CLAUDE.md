## Project Overview

`@tadashi/skreen` is a hybrid Rust + Deno/JSR library that renders HTML to PNG screenshots.

**Architecture:**

- `src/lib.rs` — Rust/WASM core: parses HTML with Blitz, renders via `anyrender_vello_cpu`, encodes PNG
- `mod.ts` — Deno/TypeScript public API: wraps WASM, handles URL fetching, exposes `skreen()` and `skreenPdf()`
- `wasm/` — Generated WASM bindings (output of `deno task build`; do not edit manually)
- `build.ts` — Build script: runs `cargo build --target wasm32-unknown-unknown --release` then
  `wasm-bindgen --target deno`
- `fonts/` — Embedded fonts (Inter Regular + Bold); compiled into the WASM binary via `include_bytes!`

**Key design constraints:**

- Color scheme is fixed to `Light`; there is no dark mode support in the renderer
- Height is capped at 4000 logical pixels (enforced in `render_html()`)
- `height=0` is valid: the renderer expands to fit document content
- The WASM renderer does not execute JavaScript — Tailwind CSS must be pre-processed and inlined before rendering
- Fonts are embedded at compile time; no system fonts are loaded

## Prerequisites

```sh
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
# Deno installed separately
```

## Running Tools

### Rust (WASM crate)

- Build (check only): `cargo check --color=never -q --message-format=short`
- Build (native, for IDE): `cargo build --color=never -q`
- Tests: `cargo test --color=never -q -- --color=never`
- Tests (single): `cargo test --color=never -q test_name -- --color=never`
- Tests (nextest): `cargo nextest run --color=never --cargo-quiet --failure-output=immediate --success-output=never`
- Lint: `cargo clippy --color=never -q --message-format=short -- -Dwarnings`
- Lint fix: `cargo clippy --fix --allow-dirty --color=never`
- Format check: `cargo fmt --check --message-format=short -- --color=never`
- Format fix: `cargo fmt`
- Audit: `cargo audit --format=json --color=never`
- Deny: `cargo deny --format=json --color=never check`

### Deno (TypeScript layer + full build)

- Full build (Rust → WASM → bindings): `deno task build`
- Tests (requires built WASM): `deno task test`
- Format check: `deno task fmt:chk`
- Format fix: `deno fmt`
- Lint: `deno lint mod.ts build.ts`

## Key Files

| File          | Purpose                                                          |
| ------------- | ---------------------------------------------------------------- |
| `src/lib.rs`  | WASM entry point — `render_html()` is the sole exported function |
| `mod.ts`      | Public TS API — `skreen()` and `skreenPdf()`                     |
| `mod_test.ts` | Deno integration tests (run against built WASM)                  |
| `build.ts`    | Build pipeline script                                            |
| `deno.jsonc`  | Deno config, tasks, imports, fmt/lint rules                      |
| `Cargo.toml`  | Rust crate config and dependencies                               |
| `example/`    | End-to-end usage examples                                        |
