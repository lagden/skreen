/* @ts-self-types="./skreen.d.ts" */
import * as skreenBgWasm from "./skreen_bg.wasm";

/**
 * Renders an HTML document to a PNG image and returns the encoded bytes.
 *
 * # Parameters
 * - `html`         — Raw HTML string to render.
 * - `width`        — Viewport width in logical (CSS) pixels.
 * - `height`       — Minimum viewport height in logical pixels. Pass `0` to expand to content height.
 * - `scale`        — Device-pixel ratio (e.g. `2.0` for HiDPI). The physical pixel dimensions of
 *                    the output are `width * scale` × `computed_height * scale`.
 * - `custom_fonts` — Optional JS array of `Uint8Array` font files to register alongside Inter.
 *
 * The final image height is the document's computed content height clamped to 4 000 logical pixels,
 * then multiplied by `scale`. The color scheme is fixed to Light; dark mode is not supported.
 * @param {string} html
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 * @param {Array<any> | null} [custom_fonts]
 * @returns {Uint8Array}
 */
export function render_html(html, width, height, scale, custom_fonts) {
    const ptr0 = passStringToWasm0(html, skreenBgWasm.__wbindgen_malloc, skreenBgWasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = skreenBgWasm.render_html(ptr0, len0, width, height, scale, isLikeNone(custom_fonts) ? 0 : addToExternrefTable0(custom_fonts));
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    skreenBgWasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

function addToExternrefTable0(obj) {
    const idx = skreenBgWasm.__externref_table_alloc();
    skreenBgWasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}


let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(skreenBgWasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}


const cachedTextEncoder = new TextEncoder();

let WASM_VECTOR_LEN = 0;
skreenBgWasm.__wbindgen_start();
