import { skreen, withTailwind } from "../../mod.ts";
import { html } from "./template.ts";

const roboto = await Deno.readFile(
	new URL("./Roboto-VariableFont.ttf", import.meta.url),
);

const processed = await withTailwind(html);
const png = await skreen({
	data: processed,
	width: 320,
	height: 0,
	scale: 2,
	fonts: [roboto],
});

await Deno.writeFile("example/custom-font/receipt.png", png);

console.log(`receipt.png gerado (${png.length} bytes)`);
