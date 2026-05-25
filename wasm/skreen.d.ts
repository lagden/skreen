/* tslint:disable */
/* eslint-disable */

/**
 * Renders an HTML document to a PNG image and returns the encoded bytes.
 *
 * # Parameters
 * - `html`         — Raw HTML string to render.
 * - `width`        — Viewport width in logical (CSS) pixels.
 * - `height`       — Minimum viewport height in logical pixels. Pass `0` to expand to content height.
 * - `scale`        — Device-pixel ratio (e.g. `2.0` for HiDPI). The physical pixel dimensions of
 *                    the output are `width * scale` × `computed_height * scale`.
 * - `custom_fonts` — Optional JS array of `Uint8Array` font files to register alongside Inter.
 *
 * The final image height is the document's computed content height clamped to 4 000 logical pixels,
 * then multiplied by `scale`. The color scheme is fixed to Light; dark mode is not supported.
 */
export function render_html(html: string, width: number, height: number, scale: number, custom_fonts?: Array<any> | null): Uint8Array;

/**
 * Renders an HTML document to a PDF file and returns the encoded bytes.
 *
 * Uses the same Blitz + Vello rendering pipeline as [`render_html`], then embeds the
 * resulting RGBA bitmap into a single-page PDF via [Krilla](https://crates.io/crates/krilla).
 *
 * # Parameters
 * - `html`         — Raw HTML string to render.
 * - `width`        — Viewport width in logical (CSS) pixels; also sets the PDF page width.
 * - `height`       — Minimum viewport height in logical pixels. Pass `0` to expand to content height.
 * - `scale`        — Device-pixel ratio applied to the rendered bitmap. The PDF page size is
 *                    derived from the *CSS* dimensions, not the scaled physical pixels, so
 *                    the document prints at the correct physical size regardless of `scale`.
 * - `custom_fonts` — Optional JS array of `Uint8Array` font files to register alongside Inter.
 *
 * # Note
 * The embedded bitmap is raster, so text in the PDF is not searchable or selectable.
 */
export function render_html_pdf(html: string, width: number, height: number, scale: number, custom_fonts?: Array<any> | null): Uint8Array;
