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

// Patch the WASM loader in the generated skreen.js.
const wasmUrlEnv = Deno.env.get("WASM_URL");
const jsPath = "./wasm/skreen.js";
let js = await Deno.readTextFile(jsPath);

if (wasmUrlEnv) {
	// Legacy: fetch from an absolute remote URL (e.g. GitHub Releases).
	js = js
		.replace(
			"new URL('skreen_bg.wasm', import.meta.url)",
			`new URL('${wasmUrlEnv}')`,
		)
		.replace(
			"await WebAssembly.instantiateStreaming(fetch(wasmUrl), __wbg_get_imports())",
			"await WebAssembly.instantiate(await (await fetch(wasmUrl)).arrayBuffer(), __wbg_get_imports())",
		);
	console.log(`Patched WASM URL → ${wasmUrlEnv}`);
} else {
	// Default: use pathToFileURL (node:url) so the WASM is always loaded from
	// the local filesystem. Works when deps are vendored (e.g. `deno vendor`
	// during docker build), keeping import.meta.url as a file:// path.
	js = js.replace(
		"const wasmUrl = new URL('skreen_bg.wasm', import.meta.url);\n" +
			"const wasmInstantiated = await WebAssembly.instantiateStreaming(fetch(wasmUrl), __wbg_get_imports());",
		"const { pathToFileURL } = await import('node:url');\n" +
			"const wasmUrl = pathToFileURL(new URL('skreen_bg.wasm', import.meta.url).pathname);\n" +
			"const wasmInstantiated = await WebAssembly.instantiateStreaming(fetch(wasmUrl), __wbg_get_imports());",
	);
	console.log("Patched WASM loader → pathToFileURL (node:url)");
}

await Deno.writeTextFile(jsPath, js);

console.log("\nBuild complete → ./wasm/");
