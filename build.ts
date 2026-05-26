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

console.log("\nBuild complete → ./wasm/");
