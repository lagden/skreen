import { createRequire } from "node:module";
import { render_html } from "./wasm/skreen.js";
// Static import so Deno tracks @fulgur-rs/cli as a dependency and installs it (with platform
// binaries) in node_modules. Uses package.json to avoid executing any binary entry point.
import "npm:@fulgur-rs/cli@0.16.0/package.json" with { type: "json" };

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
	/** Page margins in mm. Accepts CSS shorthand: `"20"`, `"20 30"`, `"10 20 30"`, `"10 20 30 40"`. Defaults to `20`. */
	marginMm?: number | string;
	/** Document title written into PDF metadata. */
	title?: string;
	/** Document author written into PDF metadata. */
	author?: string;
	/** Document language tag (BCP 47, e.g. `"en"`, `"pt-BR"`). Required for PDF/UA-1. */
	language?: string;
	/** Font files to bundle (absolute paths). Passed to fulgur via `--font` (repeatable). */
	fonts?: string[];
	/** CSS files to include (absolute paths). Passed to fulgur via `--css` (repeatable). */
	css?: string[];
	/** Generate PDF bookmarks (outline) from `h1`–`h6` headings. */
	bookmarks?: boolean;
	/** Enable Tagged PDF output (structure tree for accessibility). */
	tagged?: boolean;
	/** Enable PDF/UA-1 conformance (implies `tagged` and `bookmarks`). */
	pdfUa?: boolean;
	/**
	 * Prepend the built-in Inter Regular + Bold fonts to the font list.
	 * Defaults to `true` — ensures text is visible in environments without system fonts (e.g. Docker Alpine).
	 * Set to `false` to rely solely on system fonts or your own `fonts` list.
	 */
	useBuiltinFonts?: boolean;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function isUrl(s: string): boolean {
	return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("file://");
}

/**
 * Detects musl libc on Linux by scanning the process memory map.
 * Falls back to false (glibc) on any read error (non-Linux, permission denied, etc.).
 */
function isMusl(): boolean {
	try {
		return Deno.readTextFileSync("/proc/self/maps").includes("musl");
	} catch {
		return false;
	}
}

/**
 * Resolves the absolute path to the platform-specific `fulgur` binary.
 *
 * `@fulgur-rs/cli` distributes the native binary via npm optionalDependencies
 * (`@fulgur-rs/cli-darwin-arm64`, etc.). Deno's scoped node_modules layout
 * nests those optional deps under the parent package's own `node_modules/`,
 * not at the root. We therefore resolve in two steps:
 *   1. Find `@fulgur-rs/cli` from the root context.
 *   2. Create a new `require` anchored at that package to reach the platform dep.
 */
function resolveBinaryPath(): string {
	const { os, arch } = Deno.build;
	let pkg: string;
	let bin: string;
	if (os === "darwin" && arch === "aarch64") {
		pkg = "@fulgur-rs/cli-darwin-arm64";
		bin = "fulgur";
	} else if (os === "darwin" && arch === "x86_64") {
		pkg = "@fulgur-rs/cli-darwin-x64";
		bin = "fulgur";
	} else if (os === "linux" && arch === "x86_64") {
		pkg = isMusl() ? "@fulgur-rs/cli-linux-x64-musl" : "@fulgur-rs/cli-linux-x64";
		bin = "fulgur";
	} else if (os === "linux" && arch === "aarch64") {
		pkg = "@fulgur-rs/cli-linux-arm64";
		bin = "fulgur";
	} else if (os === "windows" && arch === "x86_64") {
		pkg = "@fulgur-rs/cli-win32-x64";
		bin = "fulgur.exe";
	} else throw new Error(`skreenPdf: unsupported platform ${os}/${arch}`);

	// createRequire only accepts file:// URLs or absolute paths; JSR remote URLs are rejected.
	// When loaded via JSR, import.meta.url is https://jsr.io/... so we fall back to cwd.
	const anchor = import.meta.url.startsWith("file://") ? import.meta.url : `file://${Deno.cwd()}/`;
	const require = createRequire(anchor);
	try {
		const cliPkgJson: string = require.resolve("@fulgur-rs/cli/package.json");
		const cliRequire = createRequire(`file://${cliPkgJson}`);
		const platformPkgJson: string = cliRequire.resolve(`${pkg}/package.json`);
		return platformPkgJson.replace(/[/\\]package\.json$/, `/bin/${bin}`);
	} catch {
		throw new Error(
			`skreenPdf: platform package ${pkg} not installed. Ensure nodeModulesDir is enabled and run 'deno install'.`,
		);
	}
}

let _builtinFontCache: string[] | null = null;

async function getBuiltinFontPaths(): Promise<string[]> {
	if (_builtinFontCache) return _builtinFontCache;

	const base = new URL("./fonts/", import.meta.url);

	if (base.protocol === "file:") {
		_builtinFontCache = [
			new URL("Inter-Regular.ttf", base).pathname,
			new URL("Inter-Bold.ttf", base).pathname,
		];
		return _builtinFontCache;
	}

	// Remote (JSR CDN): fetch once and cache to disk so fulgur can read the files.
	const cacheDir = `${Deno.env.get("HOME") ?? "/tmp"}/.cache/skreen-fonts`;
	await Deno.mkdir(cacheDir, { recursive: true });
	const names = ["Inter-Regular.ttf", "Inter-Bold.ttf"];
	const paths: string[] = [];
	for (const name of names) {
		const dest = `${cacheDir}/${name}`;
		try {
			await Deno.stat(dest);
		} catch {
			const bytes = await fetch(new URL(name, base)).then((r) => r.arrayBuffer());
			await Deno.writeFile(dest, new Uint8Array(bytes));
		}
		paths.push(dest);
	}
	_builtinFontCache = paths;
	return _builtinFontCache;
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
	return render_html(html, width, height, scale, fonts ?? null);
}

/**
 * Renders an HTML document to a selectable-text, multi-page PDF via the
 * [`@fulgur-rs/cli`](https://www.npmjs.com/package/@fulgur-rs/cli) native binary.
 *
 * Requires `--allow-run` permission and `nodeModulesDir: "auto"` in `deno.jsonc`
 * so the platform binary is installed by Deno as an npm optional dependency.
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
	landscape,
	marginMm = 20,
	title,
	author,
	language,
	fonts,
	css,
	bookmarks,
	tagged,
	pdfUa,
	useBuiltinFonts = true,
}: SkreenPdfOptions): Promise<Uint8Array> {
	const html = isUrl(data) ? await fetch(data).then((r) => r.text()) : data;

	const binaryPath = resolveBinaryPath();

	// fulgur CLI: HTML via stdin, PDF to stdout (-o -)
	const args = ["render", "--stdin", "-o", "-", "--size", pageSize, "--margin", String(marginMm)];
	if (title !== undefined) args.push("--title", title);
	if (author !== undefined) args.push("--author", author);
	if (language !== undefined) args.push("--language", language);
	if (landscape) args.push("--landscape");
	if (bookmarks) args.push("--bookmarks");
	if (tagged) args.push("--tagged");
	if (pdfUa) args.push("--pdf-ua");

	const allFonts = useBuiltinFonts ? [...(await getBuiltinFontPaths()), ...(fonts ?? [])] : (fonts ?? []);
	for (const f of allFonts) args.push("--font", f);
	for (const c of (css ?? [])) args.push("--css", c);

	const cmd = new Deno.Command(binaryPath, {
		args,
		stdin: "piped",
		stdout: "piped",
		stderr: "piped",
	});
	const child = cmd.spawn();

	const writer = child.stdin.getWriter();
	await writer.write(new TextEncoder().encode(html));
	await writer.close();

	const { code, stdout, stderr } = await child.output();
	if (code !== 0) {
		const errMsg = new TextDecoder().decode(stderr);
		throw new Error(`fulgur exited with code ${code}: ${errMsg}`);
	}

	return stdout;
}
