import { skreen } from "../../mod.ts";
import { html } from "./template.ts";

const png = await skreen({
	data: html,
	width: 320,
	height: 0,
	scale: 2,
	fonts: [
		new URL("../../fonts/Roboto-VariableFont.ttf", import.meta.url).pathname,
	],
});

await Deno.writeFile("example/basic/sample.png", png);

console.log(`sample.png gerado (${png.length} bytes)`);
