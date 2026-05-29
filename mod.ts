// ── Types ─────────────────────────────────────────────────────────────────────

/** Options for {@linkcode skreen}. */
export interface SkreenOptions {
	/** HTML string or URL (`http://`, `https://`, `file://`) to render. */
	data: string;
	/** Viewport width in logical pixels. Defaults to `1200`. */
	width?: number;
	/** Viewport height in logical pixels. Use `0` to expand to content height (max 4000). Defaults to `800`. */
	height?: number;
	/** Device-pixel ratio applied to the output bitmap. Defaults to `2.0`. */
	scale?: number;
	/** Additional font files to embed (raw bytes). Augments the built-in Inter Regular + Bold. */
	fonts?: Uint8Array[];
}

/** Options for {@linkcode skreenPdf}. */
export interface SkreenPdfOptions {
	/** HTML string or URL (`http://`, `https://`, `file://`) to render. */
	data: string;
	/** Page size. Defaults to `"A4"`. */
	pageSize?: "A4" | "A3" | "Letter";
	/** Landscape orientation. */
	landscape?: boolean;
	/** Page margins in mm (uniform). Defaults to `20`. */
	marginMm?: number;
	/** Document title written into PDF metadata. */
	title?: string;
	/** Document language tag (BCP 47, e.g. `"en"`, `"pt-BR"`). */
	language?: string;
}

// @ts-types="./wasm/skreen.d.ts"
import { render_pdf, render_png } from "./wasm/skreen.js";

// ── Helpers ───────────────────────────────────────────────────────────────────

function isUrl(s: string): boolean {
	return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("file://");
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Renders an HTML document to a PNG image using the WASM-based Blitz/Vello renderer.
 *
 * ```ts
 * import { skreen } from "@tadashi/skreen";
 * const png = await skreen({ data: "<h1>Hello</h1>" });
 * await Deno.writeFile("output.png", png);
 * ```
 */
export async function skreen({
	data,
	width = 1200,
	height = 800,
	scale = 2.0,
	fonts,
}: SkreenOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;
	return render_png(html, width, height, scale, fonts ?? null);
}

/**
 * Renders an HTML document to a selectable-text, multi-page PDF via the
 * fulgur WASM renderer.
 *
 * ```ts
 * import { skreenPdf } from "@tadashi/skreen";
 * const pdf = await skreenPdf({ data: "<h1>Hello</h1>", pageSize: "A4" });
 * await Deno.writeFile("output.pdf", pdf);
 * ```
 */
export async function skreenPdf({
	data,
	pageSize,
	landscape,
	marginMm,
	title,
	language,
}: SkreenPdfOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;
	return render_pdf(html, {
		pageSize,
		marginMm,
		landscape: landscape ?? false,
		title,
		language,
	});
}
