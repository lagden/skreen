import { skreenPdf } from "../../mod.ts";
import { html } from "./template.ts";

const pdf = await skreenPdf({ data: html, width: 794, height: 1123 });

await Deno.writeFile("example/basic-pdf/sample.pdf", pdf);

console.log(`sample.pdf gerado (${pdf.length} bytes)`);
