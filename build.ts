async function run(cmd: string, args: string[]): Promise<void> {
	console.log(`$ ${cmd} ${args.join(" ")}`);
	const p = new Deno.Command(cmd, {
		args,
		stdout: "inherit",
		stderr: "inherit",
	});
	const { code } = await p.output();
	if (code !== 0) {
		throw new Error(`'${cmd}' exited with code ${code}`);
	}
}

await run("cargo", [
	"build",
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
