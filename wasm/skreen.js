/* @ts-self-types="./skreen.d.ts" */
import * as skreenBgWasm from "./skreen_bg.wasm";

/**
 * @param {string} html
 * @param {any} options
 * @returns {Uint8Array}
 */
export function render_pdf(html, options) {
    const ptr0 = passStringToWasm0(html, skreenBgWasm.__wbindgen_malloc, skreenBgWasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = skreenBgWasm.render_pdf(ptr0, len0, options);
    if (ret[3]) {
        throw takeFromExternrefTable0(ret[2]);
    }
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    skreenBgWasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {string} html
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 * @param {Array<any> | null} [custom_fonts]
 * @returns {Uint8Array}
 */
export function render_png(html, width, height, scale, custom_fonts) {
    const ptr0 = passStringToWasm0(html, skreenBgWasm.__wbindgen_malloc, skreenBgWasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = skreenBgWasm.render_png(ptr0, len0, width, height, scale, isLikeNone(custom_fonts) ? 0 : addToExternrefTable0(custom_fonts));
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    skreenBgWasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

function addToExternrefTable0(obj) {
    const idx = skreenBgWasm.__externref_table_alloc();
    skreenBgWasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== skreenBgWasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(skreenBgWasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}


let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(skreenBgWasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        skreenBgWasm.__wbindgen_exn_store(idx);
    }
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

function takeFromExternrefTable0(idx) {
    const value = skreenBgWasm.__wbindgen_externrefs.get(idx);
    skreenBgWasm.__externref_table_dealloc(idx);
    return value;
}


const cachedTextEncoder = new TextEncoder();

let WASM_VECTOR_LEN = 0;
skreenBgWasm.__wbindgen_start();
