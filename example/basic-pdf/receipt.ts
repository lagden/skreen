import { skreenPdf, withTailwind } from "../../mod.ts";
import { html } from "./template.ts";

const processed = await withTailwind(html);
// console.log(processed);
const pdf = await skreenPdf({ data: processed, width: 320, height: 0, scale: 2 });

await Deno.writeFile("example/basic-pdf/receipt.pdf", pdf);

console.log(`receipt.pdf gerado (${pdf.length} bytes)`);
