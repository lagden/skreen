import { skreen, withTailwind } from "../mod.ts";
import { html } from "./template.ts";

const processed = await withTailwind(html);
// console.log(processed);
const png = await skreen({ data: processed, width: 320, height: 0, scale: 2 });

await Deno.writeFile("example/receipt.png", png);

console.log(`receipt.png gerado (${png.length} bytes)`);
