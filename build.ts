async function run(cmd: string, args: string[], cwd?: string): Promise<void> {
	console.log(`$ ${cmd} ${args.join(" ")}${cwd ? ` (cwd: ${cwd})` : ""}`);
	const p = new Deno.Command(cmd, {
		args,
		stdout: "inherit",
		stderr: "inherit",
		...(cwd ? { cwd } : {}),
	});
	const { code } = await p.output();
	if (code !== 0) {
		throw new Error(`'${cmd}' exited with code ${code}`);
	}
}

// ── WASM build ────────────────────────────────────────────────────────────────

await run("cargo", [
	"build",
	"--lib",
	"--target",
	"wasm32-unknown-unknown",
	"--release",
]);

await run("wasm-bindgen", [
	"--target",
	"deno",
	"--out-dir",
	"./wasm",
	"./target/wasm32-unknown-unknown/release/skreen.wasm",
]);

// Patch skreen.js to load the WASM via Deno.readFile when running from a local file://
// path (e.g. deno vendor / "vendor": true), falling back to fetch for remote URLs.
// This avoids network requests at runtime in sandboxed environments (e.g. ECS Fargate).
// Deno's vendor tool recognises new URL('...', import.meta.url) and includes the .wasm
// file in the vendor directory, so Deno.readFile will find it there at runtime.
{
	const jsPath = "./wasm/skreen.js";
	let js = await Deno.readTextFile(jsPath);
	js = js.replace(
		`const wasmUrl = new URL('skreen_bg.wasm', import.meta.url);\nconst wasmInstantiated = await WebAssembly.instantiateStreaming(fetch(wasmUrl), __wbg_get_imports());`,
		`const wasmUrl = new URL('skreen_bg.wasm', import.meta.url);\n` +
			`const _wasmBytes = wasmUrl.protocol === 'file:'\n` +
			`  ? await Deno.readFile(wasmUrl)\n` +
			`  : await (await fetch(wasmUrl)).arrayBuffer();\n` +
			`const wasmInstantiated = await WebAssembly.instantiate(_wasmBytes, __wbg_get_imports());`,
	);
	await Deno.writeTextFile(jsPath, js);
	console.log("Patched wasm/skreen.js → Deno.readFile for file:// URLs");
}

// Patch the WASM URL for remote hosting (e.g. GitHub Releases).
// Set WASM_URL to an absolute URL before running the build.
const wasmUrlEnv = Deno.env.get("WASM_URL");
if (wasmUrlEnv) {
	const jsPath = "./wasm/skreen.js";
	let js = await Deno.readTextFile(jsPath);
	js = js.replace(
		"new URL('skreen_bg.wasm', import.meta.url)",
		`new URL('${wasmUrlEnv}')`,
	);
	await Deno.writeTextFile(jsPath, js);
	console.log(`Patched WASM URL → ${wasmUrlEnv}`);
}

// ── Font base64 modules ───────────────────────────────────────────────────────
// Embed font bytes as TypeScript constants so Deno downloads them at install
// time (as part of module resolution) rather than fetching lazily at runtime.

const { encodeBase64 } = await import("jsr:@std/encoding@1/base64");
const fontMap: [string, string][] = [
	["fonts/Inter-Regular.ttf", "fonts/inter_regular.ts"],
	["fonts/Inter-Bold.ttf", "fonts/inter_bold.ts"],
];
for (const [src, dest] of fontMap) {
	const bytes = await Deno.readFile(src);
	const srcName = src.split("/").pop()!;
	await Deno.writeTextFile(
		dest,
		`// Auto-generated from ${srcName} — do not edit manually\nexport const data = "${encodeBase64(bytes)}";\n`,
	);
	console.log(`Generated ${dest} (${bytes.length} bytes → ${(await Deno.stat(dest)).size} chars)`);
}

console.log("\nBuild complete → ./wasm/");
