import { skreen } from "../../mod.ts";
import { html } from "./template.ts";

const png = await skreen({ data: html, width: 320, height: 0, scale: 2 });

await Deno.writeFile("example/basic/sample.png", png);

console.log(`sample.png gerado (${png.length} bytes)`);
