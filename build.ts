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

// Patch the WASM URL for remote hosting (e.g. GitHub Releases).
// Set WASM_URL to an absolute URL before running the build.
const wasmUrlEnv = Deno.env.get("WASM_URL");
if (wasmUrlEnv) {
	const jsPath = "./wasm/skreen.js";
	let js = await Deno.readTextFile(jsPath);
	js = js
		.replace(
			"new URL('skreen_bg.wasm', import.meta.url)",
			`new URL('${wasmUrlEnv}')`,
		)
		.replace(
			"await WebAssembly.instantiateStreaming(fetch(wasmUrl), __wbg_get_imports())",
			"await WebAssembly.instantiate(await (await fetch(wasmUrl)).arrayBuffer(), __wbg_get_imports())",
		);
	await Deno.writeTextFile(jsPath, js);
	console.log(`Patched WASM URL → ${wasmUrlEnv}`);
}

console.log("\nBuild complete → ./wasm/");
