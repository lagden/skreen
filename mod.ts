import process from "node:process";
import { render_html, render_html_pdf } from "./wasm/skreen.js";

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

function isUrl(s: string): boolean {
	return (
		s.startsWith("http://") ||
		s.startsWith("https://") ||
		s.startsWith("file://")
	);
}

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
	return render_html(html, width, height, scale, fonts ?? null);
}

/**
 * Renders an HTML document to a PDF file using the WASM-based Blitz/Vello renderer.
 *
 * The page dimensions match the viewport size (`width` × computed height) in CSS pixels,
 * converted to PDF points (72 pt/inch at 96 px/inch). The rendered bitmap is embedded
 * as an image covering the full page.
 *
 * ```ts
 * import { skreenPdf } from "@tadashi/skreen";
 * const pdf = await skreenPdf({ data: "<h1>Hello</h1>" });
 * await Deno.writeFile("output.pdf", pdf);
 * ```
 */
export async function skreenPdf({
	data,
	width = 1200,
	height = 800,
	scale = 2.0,
	fonts,
}: SkreenOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;
	return render_html_pdf(html, width, height, scale, fonts ?? null);
}

/**
 * Pre-processes an HTML string with Tailwind CSS v4, replacing the
 * `@tailwindcss/browser` CDN script tag (or injecting before `</head>`) with a
 * `<style>` block that contains only the CSS classes actually used in the markup.
 *
 * The WASM renderer does not execute JavaScript, so the browser CDN build cannot
 * generate styles at runtime. This helper uses PostCSS + Tailwind CSS v4 on the
 * host and inlines the result before the HTML reaches the renderer.
 *
 * Requires: `--allow-read`, `--allow-write`, `--allow-env`, `--allow-net` (first run only, to cache npm packages)
 */
export async function withTailwind(html: string): Promise<string> {
	const [{ default: postcss }, { default: tailwindcss }] = await Promise.all(
		[
			import("postcss"),
			import("@tailwindcss/postcss"),
			import("tailwindcss"), // ensures Deno/JSR exposes tailwindcss as a direct dep for consumers
		] as const,
	);

	// Extract unique class names from the HTML to avoid filesystem scanning
	const classes = [...html.matchAll(/class="([^"]+)"/g)]
		.flatMap((m) => m[1].trim().split(/\s+/))
		.filter(Boolean);
	const unique = [...new Set(classes)].join(" ");

	// @source inline(...) generates only the needed utilities without scanning files,
	// preventing Tailwind v4's automatic source detection from hanging on large repos
	const cssInput = `@import "tailwindcss";\n@source inline("${unique}");`;
	const result = await postcss([tailwindcss()]).process(cssInput, {
		// from: new URL(".", import.meta.url).pathname + "virtual.css",
		from: `${process.cwd()}/virtual.css`,
	});

	const style = `<style>${result.css}</style>`;
	return html.replace("</head>", `${style}\n</head>`);
}
