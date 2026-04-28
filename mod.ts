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
