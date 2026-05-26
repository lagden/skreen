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
