import { render_html } from "./wasm/skreen.js";

export interface SkreenOptions {
	data: string;
	width?: number;
	height?: number;
	scale?: number;
}

function isUrl(s: string): boolean {
	return (
		s.startsWith("http://") ||
		s.startsWith("https://") ||
		s.startsWith("file://")
	);
}

export async function skreen({
	data,
	width = 1200,
	height = 800,
	scale = 2.0,
}: SkreenOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;
	return render_html(html, width, height, scale);
}

/**
 * Pre-processes an HTML string with Tailwind CSS v4, replacing the
 * `@tailwindcss/browser` CDN script tag (or injecting before `</head>`) with a
 * `<style>` block that contains only the CSS classes actually used in the markup.
 *
 * The WASM renderer does not execute JavaScript, so the browser CDN build cannot
 * generate styles at runtime. This helper uses PostCSS + @tailwindcss/postcss on
 * the host and inlines the result before the HTML reaches the renderer.
 *
 * Requires: `--allow-read`, `--allow-write`, `--allow-env`, `--allow-net` (first run only, to cache npm packages)
 */
export async function withTailwind(html: string): Promise<string> {
	const [{ default: postcss }, { default: tailwindcss }] = await Promise.all([
		import("postcss"),
		import("@tailwindcss/postcss"),
	]);

	// Extract unique class names from the HTML to avoid filesystem scanning
	const classes = [...html.matchAll(/class="([^"]+)"/g)]
		.flatMap((m) => m[1].trim().split(/\s+/))
		.filter(Boolean);
	const unique = [...new Set(classes)].join(" ");

	// @source inline(...) generates only the needed utilities without scanning files,
	// preventing Tailwind v4's automatic source detection from hanging on large repos
	const cssInput = `@import "tailwindcss";\n@source inline("${unique}");`;
	const result = await postcss([tailwindcss()]).process(cssInput, {
		from: new URL(".", import.meta.url).pathname + "virtual.css",
	});

	const style = `<style>${result.css}</style>`;
	return html.replace("</head>", `${style}\n</head>`);
}
