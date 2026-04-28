import { assert, assertEquals, assertInstanceOf } from "@std/assert";
import { skreen } from "./mod.ts";

const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

function assertPng(result: Uint8Array): void {
	assertInstanceOf(result, Uint8Array);
	PNG_MAGIC.forEach((byte, i) => assertEquals(result[i], byte, `PNG magic byte [${i}] mismatch`));
	assert(result.length > 8, "PNG output too small");
}

Deno.test("renders minimal HTML to valid PNG", async () => {
	const result = await skreen({
		data: "<html><body><h1>Hello</h1></body></html>",
		width: 400,
		height: 300,
		scale: 1.0,
	});
	assertPng(result);
});

Deno.test("renders with default options", async () => {
	const result = await skreen({ data: "<p>Test</p>" });
	assertPng(result);
	assert(result.length > 100);
});

Deno.test("scale factor increases output size", async () => {
	const opts = { data: "<p>x</p>", width: 400, height: 300 };
	const r1 = await skreen({ ...opts, scale: 1.0 });
	const r2 = await skreen({ ...opts, scale: 2.0 });
	assertPng(r1);
	assertPng(r2);
	assert(r2.length > r1.length, "2× scale should produce a larger PNG");
});

Deno.test("renders styled HTML", async () => {
	const result = await skreen({
		data: `<html><head><style>body{background:red}</style></head><body><h1>Styled</h1></body></html>`,
		width: 200,
		height: 200,
		scale: 1.0,
	});
	assertPng(result);
});

Deno.test("renders empty body without panic", async () => {
	const result = await skreen({
		data: "<html><body></body></html>",
		width: 100,
		height: 100,
		scale: 1.0,
	});
	assertPng(result);
});
