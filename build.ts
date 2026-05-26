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

console.log("\nWASM build complete → ./wasm/");

// ── Native PDF binary build ───────────────────────────────────────────────────
//
// The PDF binary lives in pdf-bin/ (a separate Cargo project) to avoid a
// dependency conflict: fulgur and the main skreen crate both depend on
// blitz-dom but require incompatible versions of `stylo`.
//
// Prerequisites for Linux cross-compilation:
//   rustup target add x86_64-unknown-linux-gnu aarch64-unknown-linux-gnu
//   cargo install cargo-zigbuild
//   brew install zig   (or system zig)

// All targets use cargo-zigbuild for consistent cross-compilation on any host.
const TARGETS: [string, "cargo" | "zigbuild"][] = [
	["aarch64-apple-darwin", "zigbuild"],
	["x86_64-apple-darwin", "zigbuild"],
	["x86_64-unknown-linux-gnu", "zigbuild"],
	["aarch64-unknown-linux-gnu", "zigbuild"],
];

const PDF_BIN_DIR = "./pdf-bin";

await Deno.mkdir("bin", { recursive: true });

for (const [target, toolchain] of TARGETS) {
	console.log(`\nBuilding skreen_pdf for ${target}...`);

	const subcommand = toolchain === "zigbuild" ? "zigbuild" : "build";
	await run("cargo", [subcommand, "--release", "--target", target], PDF_BIN_DIR);

	const src = `${PDF_BIN_DIR}/target/${target}/release/skreen_pdf`;
	const dst = `./bin/skreen_pdf-${target}`;
	await Deno.copyFile(src, dst);
	await Deno.chmod(dst, 0o755);
	console.log(`  → ${dst}`);
}

console.log("\nBuild complete → ./wasm/ and ./bin/");
