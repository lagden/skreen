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
	/** Font files to embed — file path (`string`) or raw bytes (`Uint8Array`). */
	fonts?: Array<string | Uint8Array>;
}

/** Options for {@linkcode skreenPdf}. */
export interface SkreenPdfOptions {
	/** HTML string or URL (`http://`, `https://`, `file://`) to render. */
	data: string;
	/** Page size. Defaults to `"A4"`. */
	pageSize?: "A4" | "A3" | "Letter";
	/** Landscape orientation. */
	landscape?: boolean;
	/** Page margins in mm. Accepts CSS shorthand: `"20"`, `"20 30"`, `"10 20 30"`, `"10 20 30 40"`. Defaults to `20`. */
	marginMm?: number | string;
	/** Document title written into PDF metadata. */
	title?: string;
	/** Document author written into PDF metadata. */
	author?: string;
	/** Document language tag (BCP 47, e.g. `"en"`, `"pt-BR"`). Required for PDF/UA-1. */
	language?: string;
	/** Font files to embed — file path (`string`) or raw bytes (`Uint8Array`). */
	fonts?: Array<string | Uint8Array>;
	/** CSS strings to inject into the document. */
	css?: string[];
	/** Generate PDF bookmarks (outline) from `h1`–`h6` headings. */
	bookmarks?: boolean;
	/** Enable Tagged PDF output (structure tree for accessibility). */
	tagged?: boolean;
	/** Enable PDF/UA-1 conformance (implies `tagged` and `bookmarks`). */
	pdfUa?: boolean;
}

// @ts-types="./wasm/skreen.d.ts"
import { render_pdf, render_png } from "./wasm/skreen.js";

// ── Helpers ───────────────────────────────────────────────────────────────────

function isUrl(s: string): boolean {
	return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("file://");
}

function toBase64(bytes: Uint8Array): string {
	let binary = "";
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}

async function resolveFont(font: string | Uint8Array): Promise<Uint8Array> {
	return typeof font === "string" ? await Deno.readFile(font) : font;
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
	const resolvedFonts = fonts ? await Promise.all(fonts.map(resolveFont)) : null;
	return render_png(html, width, height, scale, resolvedFonts);
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
	author,
	language,
	fonts,
	css,
	bookmarks,
	tagged,
	pdfUa,
}: SkreenPdfOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;
	const resolvedFonts = fonts ? await Promise.all(fonts.map(resolveFont)) : [];
	return render_pdf(html, {
		pageSize,
		marginMm,
		landscape: landscape ?? false,
		title,
		author,
		language,
		fonts: resolvedFonts.map(toBase64),
		css: css ?? [],
		bookmarks: bookmarks ?? false,
		tagged: tagged ?? false,
		pdfUa: pdfUa ?? false,
	});
}
