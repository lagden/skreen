import { skreen } from "../../mod.ts";
import { html } from "./template.ts";

const png = await skreen({
	data: html,
	width: 320,
	height: 0,
	scale: 4,
	fonts: [
		new URL("../../fonts/Roboto-VariableFont.ttf", import.meta.url).pathname,
		new URL("../../fonts/Caveat-VariableFont_wght.ttf", import.meta.url).pathname,
	],
});

await Deno.writeFile("example/custom-font/sample-font.png", png);

console.log(`sample-font.png gerado (${png.length} bytes)`);
