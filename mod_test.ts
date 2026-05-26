import { assert, assertEquals, assertInstanceOf } from "@std/assert";
import { skreen, skreenPdf } from "./mod.ts";

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

// PDF_MAGIC: "%PDF"
const PDF_MAGIC = [0x25, 0x50, 0x44, 0x46];

function assertPdf(result: Uint8Array): void {
	assertInstanceOf(result, Uint8Array);
	PDF_MAGIC.forEach((byte, i) => assertEquals(result[i], byte, `PDF magic byte [${i}] mismatch`));
	assert(result.length > 4, "PDF output too small");
}

Deno.test("renders minimal HTML to valid PDF", async () => {
	const result = await skreenPdf({
		data: "<html><body><h1>Hello PDF</h1></body></html>",
	});
	assertPdf(result);
});

Deno.test("renders PDF with default options", async () => {
	const result = await skreenPdf({ data: "<p>Test</p>" });
	assertPdf(result);
	assert(result.length > 100);
});

Deno.test("renders styled HTML to PDF", async () => {
	const result = await skreenPdf({
		data: `<html><head><style>body{background:red}</style></head><body><h1>Styled</h1></body></html>`,
		pageSize: "A4",
		marginMm: 15,
	});
	assertPdf(result);
});

Deno.test("renders multi-page PDF", async () => {
	const items = Array.from(
		{ length: 60 },
		(_, i) => `<p>Parágrafo ${i + 1}: conteúdo de teste para forçar quebra de página automática.</p>`,
	).join("");
	const result = await skreenPdf({
		data: `<html><body>${items}</body></html>`,
		pageSize: "A4",
	});
	assertPdf(result);
	assert(result.length > 1000, "multi-page PDF should be larger");
});
