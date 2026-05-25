import { skreen } from "../../mod.ts";
import { html } from "./template.ts";

const roboto = await Deno.readFile(
	new URL("./Roboto-VariableFont.ttf", import.meta.url),
);

const png = await skreen({
	data: html,
	width: 320,
	height: 0,
	scale: 4,
	fonts: [roboto],
});

await Deno.writeFile("example/custom-font/sample-font.png", png);

console.log(`sample-font.png gerado (${png.length} bytes)`);
