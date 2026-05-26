import { render_html } from "./wasm/skreen.js";

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
	/** Uniform margin in millimetres. Defaults to `20`. */
	marginMm?: number;
	/** Document title written into PDF metadata. */
	title?: string;
	/** Document author written into PDF metadata. */
	author?: string;
}

function isUrl(s: string): boolean {
	return (
		s.startsWith("http://") ||
		s.startsWith("https://") ||
		s.startsWith("file://")
	);
}

function resolveBinaryPath(): string {
	const { os, arch } = Deno.build;
	let suffix: string;
	if (os === "darwin" && arch === "aarch64") suffix = "aarch64-apple-darwin";
	else if (os === "darwin" && arch === "x86_64") suffix = "x86_64-apple-darwin";
	else if (os === "linux" && arch === "x86_64") suffix = "x86_64-unknown-linux-gnu";
	else if (os === "linux" && arch === "aarch64") suffix = "aarch64-unknown-linux-gnu";
	else throw new Error(`skreenPdf: unsupported platform ${os}/${arch}`);
	return new URL(`./bin/skreen_pdf-${suffix}`, import.meta.url).pathname;
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
 * Renders an HTML document to a selectable-text, multi-page PDF using a native Fulgur renderer.
 *
 * Requires `--allow-run` permission for Deno. The binary is resolved automatically based on
 * the current OS and CPU architecture (`aarch64`/`x86_64` on macOS and Linux).
 *
 * ```ts
 * import { skreenPdf } from "@tadashi/skreen";
 * const pdf = await skreenPdf({ data: "<h1>Hello</h1>", pageSize: "A4" });
 * await Deno.writeFile("output.pdf", pdf);
 * ```
 */
export async function skreenPdf({
	data,
	pageSize = "A4",
	marginMm = 20,
	title,
	author,
}: SkreenPdfOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;

	const binaryPath = resolveBinaryPath();

	try {
		await Deno.stat(binaryPath);
	} catch {
		throw new Error(
			`skreen_pdf binary not found at ${binaryPath}. Run 'deno task build' to compile it.`,
		);
	}

	const input = JSON.stringify({
		html,
		page_size: pageSize,
		margin_mm: marginMm,
		...(title !== undefined ? { title } : {}),
		...(author !== undefined ? { author } : {}),
	});

	const cmd = new Deno.Command(binaryPath, {
		stdin: "piped",
		stdout: "piped",
		stderr: "piped",
	});
	const child = cmd.spawn();

	const writer = child.stdin.getWriter();
	await writer.write(new TextEncoder().encode(input));
	await writer.close();

	const { code, stdout, stderr } = await child.output();
	if (code !== 0) {
		const errMsg = new TextDecoder().decode(stderr);
		throw new Error(`skreen_pdf exited with code ${code}: ${errMsg}`);
	}

	return stdout;
}
