import {
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import {
  __require
} from "./chunk-F3UQABQJ.js";

// fonts/wasm/woff2.bindings.ts
init_define_import_meta_env();
var Module = function() {
  const _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
  return function(Module2) {
    Module2 = Module2 || {};
    "use strict";
    var Module2 = typeof Module2 !== "undefined" ? Module2 : {};
    let moduleOverrides = {};
    let key;
    for (key in Module2) {
      if (Module2.hasOwnProperty(key)) {
        moduleOverrides[key] = Module2[key];
      }
    }
    let arguments_ = [];
    let thisProgram = "./this.program";
    let quit_ = function(status, toThrow) {
      throw toThrow;
    };
    let ENVIRONMENT_IS_WEB = false;
    let ENVIRONMENT_IS_WORKER = false;
    let ENVIRONMENT_IS_NODE = false;
    let ENVIRONMENT_HAS_NODE = false;
    let ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_HAS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module2.ENVIRONMENT) {
      throw new Error(
        "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)"
      );
    }
    let scriptDirectory = "";
    function locateFile(path) {
      if (Module2.locateFile) {
        return Module2.locateFile(path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    let read_;
    let readAsync;
    let readBinary;
    let setWindowTitle;
    if (ENVIRONMENT_IS_NODE) {
      scriptDirectory = `${__dirname}/`;
      let nodeFS;
      let nodePath;
      read_ = function shell_read(filename, binary) {
        let ret;
        if (!nodeFS) {
          nodeFS = __require(["fs"].join());
        }
        if (!nodePath) {
          nodePath = __require(["path"].join());
        }
        filename = nodePath.normalize(filename);
        ret = nodeFS.readFileSync(filename);
        return binary ? ret : ret.toString();
      };
      readBinary = function readBinary2(filename) {
        let ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process.argv.length > 1) {
        thisProgram = process.argv[1].replace(/\\/g, "/");
      }
      arguments_ = process.argv.slice(2);
      process.on("uncaughtException", (ex) => {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process.on("unhandledRejection", abort);
      quit_ = function(status) {
        process.exit(status);
      };
      Module2.inspect = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary2(f) {
        let data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs;
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments;
      }
      if (typeof quit === "function") {
        quit_ = function(status) {
          quit(status);
        };
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined") {
          console = {};
        }
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(
          0,
          scriptDirectory.lastIndexOf("/") + 1
        );
      } else {
        scriptDirectory = "";
      }
      read_ = function shell_read(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send(null);
        return xhr.responseText;
      };
      if (ENVIRONMENT_IS_WORKER) {
        readBinary = function readBinary2(url) {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.responseType = "arraybuffer";
          xhr.send(null);
          return new Uint8Array(xhr.response);
        };
      }
      readAsync = function readAsync2(url, onload, onerror) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }
          onerror();
        };
        xhr.onerror = onerror;
        xhr.send(null);
      };
      setWindowTitle = function(title) {
        document.title = title;
      };
    } else {
      throw new Error("environment detection error");
    }
    let out = Module2.print || function() {
    };
    let err = Module2.printErr || function() {
    };
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module2[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module2.arguments) {
      arguments_ = Module2.arguments;
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "arguments")) {
      Object.defineProperty(Module2, "arguments", {
        configurable: true,
        get() {
          abort("Module.arguments has been replaced with plain arguments_");
        }
      });
    }
    if (Module2.thisProgram) {
      thisProgram = Module2.thisProgram;
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "thisProgram")) {
      Object.defineProperty(Module2, "thisProgram", {
        configurable: true,
        get() {
          abort("Module.thisProgram has been replaced with plain thisProgram");
        }
      });
    }
    if (Module2.quit) {
      quit_ = Module2.quit;
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "quit")) {
      Object.defineProperty(Module2, "quit", {
        configurable: true,
        get() {
          abort("Module.quit has been replaced with plain quit_");
        }
      });
    }
    assert(
      typeof Module2.memoryInitializerPrefixURL === "undefined",
      "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"
    );
    assert(
      typeof Module2.pthreadMainPrefixURL === "undefined",
      "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"
    );
    assert(
      typeof Module2.cdInitializerPrefixURL === "undefined",
      "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"
    );
    assert(
      typeof Module2.filePackagePrefixURL === "undefined",
      "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"
    );
    assert(
      typeof Module2.read === "undefined",
      "Module.read option was removed (modify read_ in JS)"
    );
    assert(
      typeof Module2.readAsync === "undefined",
      "Module.readAsync option was removed (modify readAsync in JS)"
    );
    assert(
      typeof Module2.readBinary === "undefined",
      "Module.readBinary option was removed (modify readBinary in JS)"
    );
    assert(
      typeof Module2.setWindowTitle === "undefined",
      "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"
    );
    if (!Object.getOwnPropertyDescriptor(Module2, "read")) {
      Object.defineProperty(Module2, "read", {
        configurable: true,
        get() {
          abort("Module.read has been replaced with plain read_");
        }
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "readAsync")) {
      Object.defineProperty(Module2, "readAsync", {
        configurable: true,
        get() {
          abort("Module.readAsync has been replaced with plain readAsync");
        }
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "readBinary")) {
      Object.defineProperty(Module2, "readBinary", {
        configurable: true,
        get() {
          abort("Module.readBinary has been replaced with plain readBinary");
        }
      });
    }
    stackSave = stackRestore = stackAlloc = function() {
      abort(
        "cannot use the stack before compiled code is ready to run, and has provided stack access"
      );
    };
    function warnOnce(text) {
      if (!warnOnce.shown) {
        warnOnce.shown = {};
      }
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }
    const asm2wasmImports = {
      "f64-rem"(x, y) {
        return x % y;
      },
      debugger() {
        debugger;
      }
    };
    const functionPointers = new Array(0);
    let tempRet0 = 0;
    const setTempRet0 = function(value) {
      tempRet0 = value;
    };
    let wasmBinary;
    if (Module2.wasmBinary) {
      wasmBinary = Module2.wasmBinary;
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "wasmBinary")) {
      Object.defineProperty(Module2, "wasmBinary", {
        configurable: true,
        get() {
          abort("Module.wasmBinary has been replaced with plain wasmBinary");
        }
      });
    }
    let noExitRuntime;
    if (Module2.noExitRuntime) {
      noExitRuntime = Module2.noExitRuntime;
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "noExitRuntime")) {
      Object.defineProperty(Module2, "noExitRuntime", {
        configurable: true,
        get() {
          abort(
            "Module.noExitRuntime has been replaced with plain noExitRuntime"
          );
        }
      });
    }
    if (typeof WebAssembly !== "object") {
      abort(
        "No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead."
      );
    }
    let wasmMemory;
    const wasmTable = new WebAssembly.Table({
      initial: 352,
      maximum: 352,
      element: "anyfunc"
    });
    let ABORT = false;
    let EXITSTATUS = 0;
    function assert(condition, text) {
      if (!condition) {
        abort(`Assertion failed: ${text}`);
      }
    }
    function getCFunc(ident) {
      const func = Module2[`_${ident}`];
      assert(
        func,
        `Cannot call unknown function ${ident}, make sure it is exported`
      );
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      const toC = {
        string(str) {
          let ret2 = 0;
          if (str !== null && str !== void 0 && str !== 0) {
            const len = (str.length << 2) + 1;
            ret2 = stackAlloc(len);
            stringToUTF8(str, ret2, len);
          }
          return ret2;
        },
        array(arr) {
          const ret2 = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret2);
          return ret2;
        }
      };
      function convertReturnValue(ret2) {
        if (returnType === "string") {
          return UTF8ToString(ret2);
        }
        if (returnType === "boolean") {
          return Boolean(ret2);
        }
        return ret2;
      }
      const func = getCFunc(ident);
      const cArgs = [];
      let stack = 0;
      assert(returnType !== "array", 'Return type should not be "array".');
      if (args) {
        for (let i = 0; i < args.length; i++) {
          const converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) {
              stack = stackSave();
            }
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      let ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0) {
        stackRestore(stack);
      }
      return ret;
    }
    function cwrap(ident, returnType, argTypes, opts) {
      return function() {
        return ccall(ident, returnType, argTypes, arguments, opts);
      };
    }
    const UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      const endIdx = idx + maxBytesToRead;
      let endPtr = idx;
      while (u8Array[endPtr] && !(endPtr >= endIdx)) {
        ++endPtr;
      }
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      }
      let str = "";
      while (idx < endPtr) {
        let u0 = u8Array[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        const u1 = u8Array[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        const u2 = u8Array[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          if ((u0 & 248) != 240) {
            warnOnce(
              `Invalid UTF-8 leading byte 0x${u0.toString(
                16
              )} encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!`
            );
          }
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          const ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) {
        return 0;
      }
      const startIdx = outIdx;
      const endIdx = outIdx + maxBytesToWrite - 1;
      for (let i = 0; i < str.length; ++i) {
        let u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          const u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx) {
            break;
          }
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) {
            break;
          }
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) {
            break;
          }
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) {
            break;
          }
          if (u >= 2097152) {
            warnOnce(
              `Invalid Unicode code point 0x${u.toString(
                16
              )} encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).`
            );
          }
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(
        typeof maxBytesToWrite == "number",
        "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
      );
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      let len = 0;
      for (let i = 0; i < str.length; ++i) {
        let u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        }
        if (u <= 127) {
          ++len;
        } else if (u <= 2047) {
          len += 2;
        } else if (u <= 65535) {
          len += 3;
        } else {
          len += 4;
        }
      }
      return len;
    }
    const UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
    function writeArrayToMemory(array, buffer2) {
      assert(
        array.length >= 0,
        "writeArrayToMemory array must have a length (should be an array or typed array)"
      );
      HEAP8.set(array, buffer2);
    }
    const WASM_PAGE_SIZE = 65536;
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    let buffer;
    let HEAP8;
    let HEAPU8;
    let HEAP16;
    let HEAPU16;
    let HEAP32;
    let HEAPU32;
    let HEAPF32;
    let HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module2.HEAP8 = HEAP8 = new Int8Array(buf);
      Module2.HEAP16 = HEAP16 = new Int16Array(buf);
      Module2.HEAP32 = HEAP32 = new Int32Array(buf);
      Module2.HEAPU8 = HEAPU8 = new Uint8Array(buf);
      Module2.HEAPU16 = HEAPU16 = new Uint16Array(buf);
      Module2.HEAPU32 = HEAPU32 = new Uint32Array(buf);
      Module2.HEAPF32 = HEAPF32 = new Float32Array(buf);
      Module2.HEAPF64 = HEAPF64 = new Float64Array(buf);
    }
    const STACK_BASE = 434112;
    const STACK_MAX = 5676992;
    const DYNAMIC_BASE = 5676992;
    const DYNAMICTOP_PTR = 433920;
    assert(STACK_BASE % 16 === 0, "stack must start aligned");
    assert(DYNAMIC_BASE % 16 === 0, "heap must start aligned");
    const TOTAL_STACK = 5242880;
    if (Module2.TOTAL_STACK) {
      assert(
        TOTAL_STACK === Module2.TOTAL_STACK,
        "the stack size can no longer be determined at runtime"
      );
    }
    let INITIAL_TOTAL_MEMORY = Module2.TOTAL_MEMORY || 16777216;
    if (!Object.getOwnPropertyDescriptor(Module2, "TOTAL_MEMORY")) {
      Object.defineProperty(Module2, "TOTAL_MEMORY", {
        configurable: true,
        get() {
          abort(
            "Module.TOTAL_MEMORY has been replaced with plain INITIAL_TOTAL_MEMORY"
          );
        }
      });
    }
    assert(
      INITIAL_TOTAL_MEMORY >= TOTAL_STACK,
      `TOTAL_MEMORY should be larger than TOTAL_STACK, was ${INITIAL_TOTAL_MEMORY}! (TOTAL_STACK=${TOTAL_STACK})`
    );
    assert(
      typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== void 0 && Int32Array.prototype.set !== void 0,
      "JS engine does not provide full typed array support"
    );
    if (Module2.wasmMemory) {
      wasmMemory = Module2.wasmMemory;
    } else {
      wasmMemory = new WebAssembly.Memory({
        initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE
      });
    }
    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }
    INITIAL_TOTAL_MEMORY = buffer.byteLength;
    assert(INITIAL_TOTAL_MEMORY % WASM_PAGE_SIZE === 0);
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
    function writeStackCookie() {
      assert((STACK_MAX & 3) == 0);
      HEAPU32[(STACK_MAX >> 2) - 1] = 34821223;
      HEAPU32[(STACK_MAX >> 2) - 2] = 2310721022;
      HEAP32[0] = 1668509029;
    }
    function checkStackCookie() {
      const cookie1 = HEAPU32[(STACK_MAX >> 2) - 1];
      const cookie2 = HEAPU32[(STACK_MAX >> 2) - 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort(
          `Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x${cookie2.toString(
            16
          )} ${cookie1.toString(16)}`
        );
      }
      if (HEAP32[0] !== 1668509029) {
        abort(
          "Runtime error: The application has corrupted its heap memory area (address zero)!"
        );
      }
    }
    function abortStackOverflow(allocSize) {
      abort(
        `Stack overflow! Attempted to allocate ${allocSize} bytes on the stack, but stack has only ${STACK_MAX - stackSave() + allocSize} bytes available!`
      );
    }
    (function() {
      const h16 = new Int16Array(1);
      const h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99) {
        throw "Runtime error: expected the system to be little-endian!";
      }
    })();
    function abortFnPtrError(ptr, sig) {
      abort(
        `Invalid function pointer ${ptr} called with signature '${sig}'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.`
      );
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        const callback = callbacks.shift();
        if (typeof callback == "function") {
          callback();
          continue;
        }
        const func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === void 0) {
            Module2.dynCall_v(func);
          } else {
            Module2.dynCall_vi(func, callback.arg);
          }
        } else {
          func(callback.arg === void 0 ? null : callback.arg);
        }
      }
    }
    const __ATPRERUN__ = [];
    const __ATINIT__ = [];
    const __ATMAIN__ = [];
    const __ATPOSTRUN__ = [];
    let runtimeInitialized = false;
    let runtimeExited = false;
    function preRun() {
      if (Module2.preRun) {
        if (typeof Module2.preRun == "function") {
          Module2.preRun = [Module2.preRun];
        }
        while (Module2.preRun.length) {
          addOnPreRun(Module2.preRun.shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      checkStackCookie();
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      checkStackCookie();
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      checkStackCookie();
      runtimeExited = true;
    }
    function postRun() {
      checkStackCookie();
      if (Module2.postRun) {
        if (typeof Module2.postRun == "function") {
          Module2.postRun = [Module2.postRun];
        }
        while (Module2.postRun.length) {
          addOnPostRun(Module2.postRun.shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    assert(
      Math.imul,
      "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
    );
    assert(
      Math.fround,
      "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
    );
    assert(
      Math.clz32,
      "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
    );
    assert(
      Math.trunc,
      "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
    );
    let runDependencies = 0;
    let runDependencyWatcher = null;
    let dependenciesFulfilled = null;
    const runDependencyTracking = {};
    function addRunDependency(id) {
      runDependencies++;
      if (Module2.monitorRunDependencies) {
        Module2.monitorRunDependencies(runDependencies);
      }
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
          runDependencyWatcher = setInterval(() => {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            let shown = false;
            for (const dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err("still waiting on run dependencies:");
              }
              err(`dependency: ${dep}`);
            }
            if (shown) {
              err("(end of list)");
            }
          }, 1e4);
        }
      } else {
        err("warning: run dependency added without ID");
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module2.monitorRunDependencies) {
        Module2.monitorRunDependencies(runDependencies);
      }
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err("warning: run dependency removed without ID");
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          const callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module2.preloadedImages = {};
    Module2.preloadedAudios = {};
    function abort(what) {
      if (Module2.onAbort) {
        Module2.onAbort(what);
      }
      what += "";
      out(what);
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      const extra = "";
      const output = `abort(${what}) at ${stackTrace()}${extra}`;
      throw output;
    }
    var FS = {
      error() {
        abort(
          "Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1"
        );
      },
      init() {
        FS.error();
      },
      createDataFile() {
        FS.error();
      },
      createPreloadedFile() {
        FS.error();
      },
      createLazyFile() {
        FS.error();
      },
      open() {
        FS.error();
      },
      mkdev() {
        FS.error();
      },
      registerDevice() {
        FS.error();
      },
      analyzePath() {
        FS.error();
      },
      loadFilesFromDB() {
        FS.error();
      },
      ErrnoError: function ErrnoError() {
        FS.error();
      }
    };
    Module2.FS_createDataFile = FS.createDataFile;
    Module2.FS_createPreloadedFile = FS.createPreloadedFile;
    const dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }
    let wasmBinaryFile = "woff2.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary() {
      try {
        if (wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(wasmBinaryFile);
        }
        throw "both async and sync fetching of the wasm failed";
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then((response) => {
          if (!response.ok) {
            throw `failed to load wasm binary file at '${wasmBinaryFile}'`;
          }
          return response.arrayBuffer();
        }).catch(() => {
          return getBinary();
        });
      }
      return new Promise((resolve, reject) => {
        resolve(getBinary());
      });
    }
    function createWasm() {
      const info = {
        env: asmLibraryArg,
        wasi_unstable: asmLibraryArg,
        global: { NaN: NaN, Infinity: Infinity },
        "global.Math": Math,
        asm2wasm: asm2wasmImports
      };
      function receiveInstance(instance, module) {
        const exports = instance.exports;
        Module2.asm = exports;
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      let trueModule = Module2;
      function receiveInstantiatedSource(output) {
        assert(
          Module2 === trueModule,
          "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"
        );
        trueModule = null;
        receiveInstance(output.instance);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then((binary) => {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, (reason) => {
          err(`failed to asynchronously prepare wasm: ${reason}`);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function" && typeof process === "object" && process.versions && process.versions.node && +process.versions.node.split(".")[0] < 17) {
          fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
            (response) => {
              const result = WebAssembly.instantiateStreaming(response, info);
              return result.then(receiveInstantiatedSource, (reason) => {
                err(`wasm streaming compile failed: ${reason}`);
                err("falling back to ArrayBuffer instantiation");
                instantiateArrayBuffer(receiveInstantiatedSource);
              });
            }
          );
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module2.instantiateWasm) {
        try {
          const exports = Module2.instantiateWasm(info, receiveInstance);
          return exports;
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          return false;
        }
      }
      instantiateAsync();
      return {};
    }
    Module2.asm = createWasm;
    __ATINIT__.push({
      func() {
        globalCtors();
      }
    });
    const tempDoublePtr = 434096;
    assert(tempDoublePtr % 8 == 0);
    function demangle(func) {
      const __cxa_demangle_func = Module2.___cxa_demangle || Module2.__cxa_demangle;
      assert(__cxa_demangle_func);
      try {
        let s = func;
        if (s.startsWith("__Z")) {
          s = s.substr(1);
        }
        const len = lengthBytesUTF8(s) + 1;
        var buf = _malloc(len);
        stringToUTF8(s, buf, len);
        var status = _malloc(4);
        var ret = __cxa_demangle_func(buf, 0, 0, status);
        if (HEAP32[status >> 2] === 0 && ret) {
          return UTF8ToString(ret);
        }
      } catch (e) {
      } finally {
        if (buf) {
          _free(buf);
        }
        if (status) {
          _free(status);
        }
        if (ret) {
          _free(ret);
        }
      }
      return func;
    }
    function demangleAll(text) {
      const regex = /\b__Z[\w\d_]+/g;
      return text.replace(regex, (x) => {
        const y = demangle(x);
        return x === y ? x : `${y} [${x}]`;
      });
    }
    function jsStackTrace() {
      let err2 = new Error();
      if (!err2.stack) {
        try {
          throw new Error(0);
        } catch (e) {
          err2 = e;
        }
        if (!err2.stack) {
          return "(no stack trace available)";
        }
      }
      return err2.stack.toString();
    }
    function stackTrace() {
      let js = jsStackTrace();
      if (Module2.extraStackTrace) {
        js += `
${Module2.extraStackTrace()}`;
      }
      return demangleAll(js);
    }
    function ___assert_fail(condition, filename, line, func) {
      abort(
        `Assertion failed: ${UTF8ToString(condition)}, at: ${[
          filename ? UTF8ToString(filename) : "unknown filename",
          line,
          func ? UTF8ToString(func) : "unknown function"
        ]}`
      );
    }
    function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
    const ___exception_infos = {};
    let ___exception_last = 0;
    function ___cxa_throw(ptr, type, destructor) {
      ___exception_infos[ptr] = {
        ptr,
        adjusted: [ptr],
        type,
        destructor,
        refcount: 0,
        caught: false,
        rethrown: false
      };
      ___exception_last = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exceptions++;
      }
      throw `${ptr} - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.`;
    }
    function ___lock() {
    }
    function ___unlock() {
    }
    var PATH = {
      splitPath(filename) {
        const splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray(parts, allowAboveRoot) {
        let up = 0;
        for (let i = parts.length - 1; i >= 0; i--) {
          const last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize(path) {
        const isAbsolute = path.charAt(0) === "/";
        const trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(
          path.split("/").filter((p) => {
            return !!p;
          }),
          !isAbsolute
        ).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname(path) {
        const result = PATH.splitPath(path);
        const root = result[0];
        let dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename(path) {
        if (path === "/") {
          return "/";
        }
        const lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) {
          return path;
        }
        return path.substr(lastSlash + 1);
      },
      extname(path) {
        return PATH.splitPath(path)[3];
      },
      join() {
        const paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"));
      },
      join2(l, r) {
        return PATH.normalize(`${l}/${r}`);
      }
    };
    var SYSCALLS = {
      buffers: [null, [], []],
      printChar(stream, curr) {
        const buffer2 = SYSCALLS.buffers[stream];
        assert(buffer2);
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
          buffer2.length = 0;
        } else {
          buffer2.push(curr);
        }
      },
      varargs: 0,
      get(varargs) {
        SYSCALLS.varargs += 4;
        const ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret;
      },
      getStr() {
        const ret = UTF8ToString(SYSCALLS.get());
        return ret;
      },
      get64() {
        const low = SYSCALLS.get();
        const high = SYSCALLS.get();
        if (low >= 0) {
          assert(high === 0);
        } else {
          assert(high === -1);
        }
        return low;
      },
      getZero() {
        assert(SYSCALLS.get() === 0);
      }
    };
    function _fd_close(fd) {
      try {
        abort(
          "it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM"
        );
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) {
          abort(e);
        }
        return e.errno;
      }
    }
    function ___wasi_fd_close() {
      return _fd_close.apply(null, arguments);
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      try {
        abort(
          "it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM"
        );
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) {
          abort(e);
        }
        return e.errno;
      }
    }
    function ___wasi_fd_seek() {
      return _fd_seek.apply(null, arguments);
    }
    function flush_NO_FILESYSTEM() {
      const fflush = Module2._fflush;
      if (fflush) {
        fflush(0);
      }
      const buffers = SYSCALLS.buffers;
      if (buffers[1].length) {
        SYSCALLS.printChar(1, 10);
      }
      if (buffers[2].length) {
        SYSCALLS.printChar(2, 10);
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        let num = 0;
        for (let i = 0; i < iovcnt; i++) {
          const ptr = HEAP32[iov + i * 8 >> 2];
          const len = HEAP32[iov + (i * 8 + 4) >> 2];
          for (let j = 0; j < len; j++) {
            SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
          }
          num += len;
        }
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) {
          abort(e);
        }
        return e.errno;
      }
    }
    function ___wasi_fd_write() {
      return _fd_write.apply(null, arguments);
    }
    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError(`Unknown type size: ${size}`);
      }
    }
    function embind_init_charCodes() {
      const codes = new Array(256);
      for (let i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
    var embind_charCodes = void 0;
    function readLatin1String(ptr) {
      let ret = "";
      let c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
    const awaitingDependencies = {};
    const registeredTypes = {};
    const typeDependencies = {};
    const char_0 = 48;
    const char_9 = 57;
    function makeLegalFunctionName(name) {
      if (void 0 === name) {
        return "_unknown";
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      const f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return `_${name}`;
      }
      return name;
    }
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function(
        "body",
        `return function ${name}() {
    "use strict";    return body.apply(this, arguments);
};
`
      )(body);
    }
    function extendError(baseErrorType, errorName) {
      const errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        const stack = new Error(message).stack;
        if (stack !== void 0) {
          this.stack = `${this.toString()}
${stack.replace(
            /^Error(:[^\n]*)?\n/,
            ""
          )}`;
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
        if (this.message === void 0) {
          return this.name;
        }
        return `${this.name}: ${this.message}`;
      };
      return errorClass;
    }
    let BindingError = void 0;
    function throwBindingError(message) {
      throw new BindingError(message);
    }
    let InternalError = void 0;
    function throwInternalError(message) {
      throw new InternalError(message);
    }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach((type) => {
        typeDependencies[type] = dependentTypes;
      });
      function onComplete(typeConverters2) {
        const myTypeConverters = getTypeConverters(typeConverters2);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }
        for (let i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      const typeConverters = new Array(dependentTypes.length);
      const unregisteredTypes = [];
      let registered = 0;
      dependentTypes.forEach((dt, i) => {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(() => {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    }
    function registerType(rawType, registeredInstance, options) {
      options = options || {};
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance"
        );
      }
      const name = registeredInstance.name;
      if (!rawType) {
        throwBindingError(
          `type "${name}" must have a positive integer typeid pointer`
        );
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        }
        throwBindingError(`Cannot register type '${name}' twice`);
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        const callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach((cb) => {
          cb();
        });
      }
    }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      const shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType(wt) {
          return !!wt;
        },
        toWireType(destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: 8,
        readValueFromPointer(pointer) {
          let heap;
          if (size === 1) {
            heap = HEAP8;
          } else if (size === 2) {
            heap = HEAP16;
          } else if (size === 4) {
            heap = HEAP32;
          } else {
            throw new TypeError(`Unknown boolean type size: ${name}`);
          }
          return this.fromWireType(heap[pointer >> shift]);
        },
        destructorFunction: null
      });
    }
    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }
      if (!(other instanceof ClassHandle)) {
        return false;
      }
      let leftClass = this.$$.ptrType.registeredClass;
      let left = this.$$.ptr;
      let rightClass = other.$$.ptrType.registeredClass;
      let right = other.$$.ptr;
      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }
      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }
      return leftClass === rightClass && left === right;
    }
    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      };
    }
    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(`${getInstanceTypeName(obj)} instance already deleted`);
    }
    let finalizationGroup = false;
    function detachFinalizer(handle) {
    }
    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
    function releaseClassHandle($$) {
      $$.count.value -= 1;
      const toDelete = 0 === $$.count.value;
      if (toDelete) {
        runDestructor($$);
      }
    }
    function attachFinalizer(handle) {
      if ("undefined" === typeof FinalizationGroup) {
        attachFinalizer = function(handle2) {
          return handle2;
        };
        return handle;
      }
      finalizationGroup = new FinalizationGroup((iter) => {
        for (let result = iter.next(); !result.done; result = iter.next()) {
          const $$ = result.value;
          if (!$$.ptr) {
            console.warn(`object already deleted: ${$$.ptr}`);
          } else {
            releaseClassHandle($$);
          }
        }
      });
      attachFinalizer = function(handle2) {
        finalizationGroup.register(handle2, handle2.$$, handle2.$$);
        return handle2;
      };
      detachFinalizer = function(handle2) {
        finalizationGroup.unregister(handle2.$$);
      };
      return attachFinalizer(handle);
    }
    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      }
      const clone = attachFinalizer(
        Object.create(Object.getPrototypeOf(this), {
          $$: { value: shallowCopyInternalPointer(this.$$) }
        })
      );
      clone.$$.count.value += 1;
      clone.$$.deleteScheduled = false;
      return clone;
    }
    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      detachFinalizer(this);
      releaseClassHandle(this.$$);
      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = void 0;
        this.$$.ptr = void 0;
      }
    }
    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
    let delayFunction = void 0;
    const deletionQueue = [];
    function flushPendingDeletes() {
      while (deletionQueue.length) {
        const obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj.delete();
      }
    }
    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
    function init_ClassHandle() {
      ClassHandle.prototype.isAliasOf = ClassHandle_isAliasOf;
      ClassHandle.prototype.clone = ClassHandle_clone;
      ClassHandle.prototype.delete = ClassHandle_delete;
      ClassHandle.prototype.isDeleted = ClassHandle_isDeleted;
      ClassHandle.prototype.deleteLater = ClassHandle_deleteLater;
    }
    function ClassHandle() {
    }
    const registeredPointers = {};
    function ensureOverloadTable(proto, methodName, humanName) {
      if (void 0 === proto[methodName].overloadTable) {
        const prevFunc = proto[methodName];
        proto[methodName] = function() {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError(
              `Function '${humanName}' called with an invalid number of arguments (${arguments.length}) - expects one of (${proto[methodName].overloadTable})!`
            );
          }
          return proto[methodName].overloadTable[arguments.length].apply(
            this,
            arguments
          );
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
    function exposePublicSymbol(name, value, numArguments) {
      if (Module2.hasOwnProperty(name)) {
        if (void 0 === numArguments || void 0 !== Module2[name].overloadTable && void 0 !== Module2[name].overloadTable[numArguments]) {
          throwBindingError(`Cannot register public name '${name}' twice`);
        }
        ensureOverloadTable(Module2, name, name);
        if (Module2.hasOwnProperty(numArguments)) {
          throwBindingError(
            `Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`
          );
        }
        Module2[name].overloadTable[numArguments] = value;
      } else {
        Module2[name] = value;
        if (void 0 !== numArguments) {
          Module2[name].numArguments = numArguments;
        }
      }
    }
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError(
            `Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`
          );
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(
          `Cannot pass "${_embind_repr(handle)}" as a ${this.name}`
        );
      }
      if (!handle.$$.ptr) {
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`
        );
      }
      const handleClass = handle.$$.ptrType.registeredClass;
      const ptr = upcastPointer(
        handle.$$.ptr,
        handleClass,
        this.registeredClass
      );
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      let ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(
          `Cannot pass "${_embind_repr(handle)}" as a ${this.name}`
        );
      }
      if (!handle.$$.ptr) {
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`
        );
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError(
          `Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`
        );
      }
      const handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (void 0 === handle.$$.smartPtr) {
          throwBindingError("Passing raw pointer to smart pointer is illegal");
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError(
                `Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`
              );
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              const clonedHandle = handle.clone();
              ptr = this.rawShare(
                ptr,
                __emval_register(() => {
                  clonedHandle.delete();
                })
              );
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(
          `Cannot pass "${_embind_repr(handle)}" as a ${this.name}`
        );
      }
      if (!handle.$$.ptr) {
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`
        );
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError(
          `Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`
        );
      }
      const handleClass = handle.$$.ptrType.registeredClass;
      const ptr = upcastPointer(
        handle.$$.ptr,
        handleClass,
        this.registeredClass
      );
      return ptr;
    }
    function simpleReadValueFromPointer(pointer) {
      return this.fromWireType(HEAPU32[pointer >> 2]);
    }
    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }
    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle.delete();
      }
    }
    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (void 0 === desiredClass.baseClass) {
        return null;
      }
      const rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    }
    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
    function getLiveInheritedInstances() {
      const rv = [];
      for (const k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    }
    function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }
    function init_embind() {
      Module2.getInheritedInstanceCount = getInheritedInstanceCount;
      Module2.getLiveInheritedInstances = getLiveInheritedInstances;
      Module2.flushPendingDeletes = flushPendingDeletes;
      Module2.setDelayFunction = setDelayFunction;
    }
    var registeredInstances = {};
    function getBasestPointer(class_, ptr) {
      if (ptr === void 0) {
        throwBindingError("ptr should not be undefined");
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    }
    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }
      const hasSmartPtrType = !!record.smartPtrType;
      const hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified");
      }
      record.count = { value: 1 };
      return attachFinalizer(
        Object.create(prototype, { $$: { value: record } })
      );
    }
    function RegisteredPointer_fromWireType(ptr) {
      const rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      const registeredInstance = getInheritedInstance(
        this.registeredClass,
        rawPointer
      );
      if (void 0 !== registeredInstance) {
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance.clone();
        }
        const rv = registeredInstance.clone();
        this.destructor(ptr);
        return rv;
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        }
        return makeClassHandle(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr
        });
      }
      const actualType = this.registeredClass.getActualType(rawPointer);
      const registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      let toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      const dp = downcastPointer(
        rawPointer,
        this.registeredClass,
        toType.registeredClass
      );
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      }
      return makeClassHandle(toType.registeredClass.instancePrototype, {
        ptrType: toType,
        ptr: dp
      });
    }
    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype.argPackAdvance = 8;
      RegisteredPointer.prototype.readValueFromPointer = simpleReadValueFromPointer;
      RegisteredPointer.prototype.deleteObject = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype.fromWireType = RegisteredPointer_fromWireType;
    }
    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === void 0) {
        if (isConst) {
          this.toWireType = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this.toWireType = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this.toWireType = genericPointerToWireType;
      }
    }
    function replacePublicSymbol(name, value, numArguments) {
      if (!Module2.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
      }
      if (void 0 !== Module2[name].overloadTable && void 0 !== numArguments) {
        Module2[name].overloadTable[numArguments] = value;
      } else {
        Module2[name] = value;
        Module2[name].argCount = numArguments;
      }
    }
    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
      function makeDynCaller(dynCall) {
        const args = [];
        for (let i = 1; i < signature.length; ++i) {
          args.push(`a${i}`);
        }
        const name = `dynCall_${signature}_${rawFunction}`;
        let body = `return function ${name}(${args.join(", ")}) {
`;
        body += `    return dynCall(rawFunction${args.length ? ", " : ""}${args.join(", ")});
`;
        body += "};\n";
        return new Function("dynCall", "rawFunction", body)(
          dynCall,
          rawFunction
        );
      }
      let fp;
      if (Module2[`FUNCTION_TABLE_${signature}`] !== void 0) {
        fp = Module2[`FUNCTION_TABLE_${signature}`][rawFunction];
      } else if (typeof FUNCTION_TABLE !== "undefined") {
        fp = FUNCTION_TABLE[rawFunction];
      } else {
        let dc = Module2[`dynCall_${signature}`];
        if (dc === void 0) {
          dc = Module2[`dynCall_${signature.replace(/f/g, "d")}`];
          if (dc === void 0) {
            throwBindingError(`No dynCall invoker for signature: ${signature}`);
          }
        }
        fp = makeDynCaller(dc);
      }
      if (typeof fp !== "function") {
        throwBindingError(
          `unknown function pointer with signature ${signature}: ${rawFunction}`
        );
      }
      return fp;
    }
    let UnboundTypeError = void 0;
    function getTypeName(type) {
      const ptr = ___getTypeName(type);
      const rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
    function throwUnboundTypeError(message, types) {
      const unboundTypes = [];
      const seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(
        `${message}: ${unboundTypes.map(getTypeName).join([", "])}`
      );
    }
    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(
        getActualTypeSignature,
        getActualType
      );
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(
        destructorSignature,
        rawDestructor
      );
      const legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, () => {
        throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [
          baseClassRawType
        ]);
      });
      whenDependentTypesAreResolved(
        [rawType, rawPointerType, rawConstPointerType],
        baseClassRawType ? [baseClassRawType] : [],
        (base) => {
          base = base[0];
          let baseClass;
          let basePrototype;
          if (baseClassRawType) {
            baseClass = base.registeredClass;
            basePrototype = baseClass.instancePrototype;
          } else {
            basePrototype = ClassHandle.prototype;
          }
          const constructor = createNamedFunction(
            legalFunctionName,
            function() {
              if (Object.getPrototypeOf(this) !== instancePrototype) {
                throw new BindingError(`Use 'new' to construct ${name}`);
              }
              if (void 0 === registeredClass.constructor_body) {
                throw new BindingError(`${name} has no accessible constructor`);
              }
              const body = registeredClass.constructor_body[arguments.length];
              if (void 0 === body) {
                throw new BindingError(
                  `Tried to invoke ctor of ${name} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(
                    registeredClass.constructor_body
                  ).toString()}) parameters instead!`
                );
              }
              return body.apply(this, arguments);
            }
          );
          var instancePrototype = Object.create(basePrototype, {
            constructor: { value: constructor }
          });
          constructor.prototype = instancePrototype;
          var registeredClass = new RegisteredClass(
            name,
            constructor,
            instancePrototype,
            rawDestructor,
            baseClass,
            getActualType,
            upcast,
            downcast
          );
          const referenceConverter = new RegisteredPointer(
            name,
            registeredClass,
            true,
            false,
            false
          );
          const pointerConverter = new RegisteredPointer(
            `${name}*`,
            registeredClass,
            false,
            false,
            false
          );
          const constPointerConverter = new RegisteredPointer(
            `${name} const*`,
            registeredClass,
            false,
            true,
            false
          );
          registeredPointers[rawType] = {
            pointerType: pointerConverter,
            constPointerType: constPointerConverter
          };
          replacePublicSymbol(legalFunctionName, constructor);
          return [referenceConverter, pointerConverter, constPointerConverter];
        }
      );
    }
    function heap32VectorToArray(count, firstElement) {
      const array = [];
      for (let i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
    function runDestructors(destructors) {
      while (destructors.length) {
        const ptr = destructors.pop();
        const del = destructors.pop();
        del(ptr);
      }
    }
    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      const rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        const humanName = `constructor ${classType.name}`;
        if (void 0 === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }
        if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError(
            `Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`
          );
        }
        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError(
            `Cannot construct ${classType.name} due to unbound types`,
            rawArgTypes
          );
        };
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(
                `${humanName} called with ${arguments.length} arguments, expected ${argCount - 1}`
              );
            }
            const destructors = [];
            const args = new Array(argCount);
            args[0] = rawConstructor;
            for (let i = 1; i < argCount; ++i) {
              args[i] = argTypes[i].toWireType(destructors, arguments[i - 1]);
            }
            const ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0].fromWireType(ptr);
          };
          return [];
        });
        return [];
      });
    }
    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError(
          `new_ called with constructor type ${typeof constructor} which is not a function`
        );
      }
      const dummy = createNamedFunction(
        constructor.name || "unknownFunctionName",
        () => {
        }
      );
      dummy.prototype = constructor.prototype;
      const obj = new dummy();
      const r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      const argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError(
          "argTypes array size mismatch! Must at least get return value and 'this' types!"
        );
      }
      const isClassMethodFunc = argTypes[1] !== null && classType !== null;
      let needsDestructorStack = false;
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
          needsDestructorStack = true;
          break;
        }
      }
      const returns = argTypes[0].name !== "void";
      let argsList = "";
      let argsListWired = "";
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += `${i !== 0 ? ", " : ""}arg${i}`;
        argsListWired += `${i !== 0 ? ", " : ""}arg${i}Wired`;
      }
      let invokerFnBody = `return function ${makeLegalFunctionName(humanName)}(${argsList}) {
if (arguments.length !== ${argCount - 2}) {
throwBindingError('function ${humanName} called with ' + arguments.length + ' arguments, expected ${argCount - 2} args!');
}
`;
      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n";
      }
      const dtorStack = needsDestructorStack ? "destructors" : "null";
      const args1 = [
        "throwBindingError",
        "invoker",
        "fn",
        "runDestructors",
        "retType",
        "classParam"
      ];
      const args2 = [
        throwBindingError,
        cppInvokerFunc,
        cppTargetFunc,
        runDestructors,
        argTypes[0],
        argTypes[1]
      ];
      if (isClassMethodFunc) {
        invokerFnBody += `var thisWired = classParam.toWireType(${dtorStack}, this);
`;
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += `var arg${i}Wired = argType${i}.toWireType(${dtorStack}, arg${i}); // ${argTypes[i + 2].name}
`;
        args1.push(`argType${i}`);
        args2.push(argTypes[i + 2]);
      }
      if (isClassMethodFunc) {
        argsListWired = `thisWired${argsListWired.length > 0 ? ", " : ""}${argsListWired}`;
      }
      invokerFnBody += `${returns ? "var rv = " : ""}invoker(fn${argsListWired.length > 0 ? ", " : ""}${argsListWired});
`;
      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          const paramName = i === 1 ? "thisWired" : `arg${i - 2}Wired`;
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += `${paramName}_dtor(${paramName}); // ${argTypes[i].name}
`;
            args1.push(`${paramName}_dtor`);
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }
      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
      } else {
      }
      invokerFnBody += "}\n";
      args1.push(invokerFnBody);
      const invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
      const rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        const humanName = `${classType.name}.${methodName}`;
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError(
            `Cannot call ${humanName} due to unbound types`,
            rawArgTypes
          );
        }
        const proto = classType.registeredClass.instancePrototype;
        const method = proto[methodName];
        if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          const memberFunction = craftInvokerFunction(
            humanName,
            argTypes,
            classType,
            rawInvoker,
            context
          );
          if (void 0 === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    }
    const emval_free_list = [];
    const emval_handle_array = [
      {},
      { value: void 0 },
      { value: null },
      { value: true },
      { value: false }
    ];
    function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = void 0;
        emval_free_list.push(handle);
      }
    }
    function count_emval_handles() {
      let count = 0;
      for (let i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          ++count;
        }
      }
      return count;
    }
    function get_first_emval() {
      for (let i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          return emval_handle_array[i];
        }
      }
      return null;
    }
    function init_emval() {
      Module2.count_emval_handles = count_emval_handles;
      Module2.get_first_emval = get_first_emval;
    }
    function __emval_register(value) {
      switch (value) {
        case void 0: {
          return 1;
        }
        case null: {
          return 2;
        }
        case true: {
          return 3;
        }
        case false: {
          return 4;
        }
        default: {
          const handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
          emval_handle_array[handle] = { refcount: 1, value };
          return handle;
        }
      }
    }
    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType(handle) {
          const rv = emval_handle_array[handle].value;
          __emval_decref(handle);
          return rv;
        },
        toWireType(destructors, value) {
          return __emval_register(value);
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: null
      });
    }
    function _embind_repr(v) {
      if (v === null) {
        return "null";
      }
      const t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      }
      return `${v}`;
    }
    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function(pointer) {
            return this.fromWireType(HEAPF32[pointer >> 2]);
          };
        case 3:
          return function(pointer) {
            return this.fromWireType(HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError(`Unknown float type: ${name}`);
      }
    }
    function __embind_register_float(rawType, name, size) {
      const shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType(value) {
          return value;
        },
        toWireType(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError(
              `Cannot convert "${_embind_repr(value)}" to ${this.name}`
            );
          }
          return value;
        },
        argPackAdvance: 8,
        readValueFromPointer: floatReadValueFromPointer(name, shift),
        destructorFunction: null
      });
    }
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
      const argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(
        name,
        () => {
          throwUnboundTypeError(
            `Cannot call ${name} due to unbound types`,
            argTypes
          );
        },
        argCount - 1
      );
      whenDependentTypesAreResolved([], argTypes, (argTypes2) => {
        const invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
        replacePublicSymbol(
          name,
          craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn),
          argCount - 1
        );
        return [];
      });
    }
    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          } : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };
        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          } : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };
        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          } : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };
        default:
          throw new TypeError(`Unknown integer type: ${name}`);
      }
    }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      const shift = getShiftFromSize(size);
      let fromWireType = function(value) {
        return value;
      };
      if (minRange === 0) {
        const bitshift = 32 - 8 * size;
        fromWireType = function(value) {
          return value << bitshift >>> bitshift;
        };
      }
      const isUnsignedType = name.indexOf("unsigned") != -1;
      registerType(primitiveType, {
        name,
        fromWireType,
        toWireType(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError(
              `Cannot convert "${_embind_repr(value)}" to ${this.name}`
            );
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError(
              `Passing a number "${_embind_repr(
                value
              )}" from JS side to C/C++ side to an argument of type "${name}", which is outside the valid range [${minRange}, ${maxRange}]!`
            );
          }
          return isUnsignedType ? value >>> 0 : value | 0;
        },
        argPackAdvance: 8,
        readValueFromPointer: integerReadValueFromPointer(
          name,
          shift,
          minRange !== 0
        ),
        destructorFunction: null
      });
    }
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      const typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ];
      const TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        handle = handle >> 2;
        const heap = HEAPU32;
        const size = heap[handle];
        const data = heap[handle + 1];
        return new TA(heap.buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(
        rawType,
        {
          name,
          fromWireType: decodeMemoryView,
          argPackAdvance: 8,
          readValueFromPointer: decodeMemoryView
        },
        { ignoreDuplicateRegistrations: true }
      );
    }
    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      const stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name,
        fromWireType(value) {
          const length = HEAPU32[value >> 2];
          let str;
          if (stdStringIsUTF8) {
            const endChar = HEAPU8[value + 4 + length];
            let endCharSwap = 0;
            if (endChar != 0) {
              endCharSwap = endChar;
              HEAPU8[value + 4 + length] = 0;
            }
            let decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              const currentBytePtr = value + 4 + i;
              if (HEAPU8[currentBytePtr] == 0) {
                const stringSegment = UTF8ToString(decodeStartPtr);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
            if (endCharSwap != 0) {
              HEAPU8[value + 4 + length] = endCharSwap;
            }
          } else {
            const a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }
            str = a.join("");
          }
          _free(value);
          return str;
        },
        toWireType(destructors, value) {
          if (Object.prototype.toString.call(value) === "[object ArrayBuffer]") {
            value = new Uint8Array(value);
          }
          let getLength;
          const valueIsOfTypeString = typeof value === "string";
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function() {
              return lengthBytesUTF8(value);
            };
          } else {
            getLength = function() {
              return value.length;
            };
          }
          const length = getLength();
          const ptr = _malloc(4 + length + 1);
          HEAPU32[ptr >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else if (valueIsOfTypeString) {
            for (var i = 0; i < length; ++i) {
              const charCode = value.charCodeAt(i);
              if (charCode > 255) {
                _free(ptr);
                throwBindingError(
                  "String has UTF-16 code units that do not fit in 8 bits"
                );
              }
              HEAPU8[ptr + 4 + i] = charCode;
            }
          } else {
            for (var i = 0; i < length; ++i) {
              HEAPU8[ptr + 4 + i] = value[i];
            }
          }
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      let getHeap;
      let shift;
      if (charSize === 2) {
        getHeap = function() {
          return HEAPU16;
        };
        shift = 1;
      } else if (charSize === 4) {
        getHeap = function() {
          return HEAPU32;
        };
        shift = 2;
      }
      registerType(rawType, {
        name,
        fromWireType(value) {
          const HEAP = getHeap();
          const length = HEAPU32[value >> 2];
          const a = new Array(length);
          const start = value + 4 >> shift;
          for (let i = 0; i < length; ++i) {
            a[i] = String.fromCharCode(HEAP[start + i]);
          }
          _free(value);
          return a.join("");
        },
        toWireType(destructors, value) {
          const length = value.length;
          const ptr = _malloc(4 + length * charSize);
          const HEAP = getHeap();
          HEAPU32[ptr >> 2] = length;
          const start = ptr + 4 >> shift;
          for (let i = 0; i < length; ++i) {
            HEAP[start + i] = value.charCodeAt(i);
          }
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name,
        argPackAdvance: 0,
        fromWireType() {
          return void 0;
        },
        toWireType(destructors, o) {
          return void 0;
        }
      });
    }
    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }
    function requireRegisteredType(rawType, humanName) {
      const impl = registeredTypes[rawType];
      if (void 0 === impl) {
        throwBindingError(
          `${humanName} has unknown type ${getTypeName(rawType)}`
        );
      }
      return impl;
    }
    function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, "_emval_take_value");
      const v = type.readValueFromPointer(argv);
      return __emval_register(v);
    }
    function _abort() {
      abort();
    }
    function _emscripten_get_heap_size() {
      return HEAP8.length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
        console.error(
          `emscripten_realloc_buffer: Attempted to grow heap from ${buffer.byteLength} bytes to ${size} bytes, but got error: ${e}`
        );
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      const oldSize = _emscripten_get_heap_size();
      assert(requestedSize > oldSize);
      const PAGE_MULTIPLE = 65536;
      const LIMIT = 2147483648 - PAGE_MULTIPLE;
      if (requestedSize > LIMIT) {
        err(
          `Cannot enlarge memory, asked to go up to ${requestedSize} bytes, but the limit is ${LIMIT} bytes!`
        );
        return false;
      }
      const MIN_TOTAL_MEMORY = 16777216;
      let newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);
      while (newSize < requestedSize) {
        if (newSize <= 536870912) {
          newSize = alignUp(2 * newSize, PAGE_MULTIPLE);
        } else {
          newSize = Math.min(
            alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE),
            LIMIT
          );
        }
        if (newSize === oldSize) {
          warnOnce(
            `Cannot ask for more memory since we reached the practical limit in browsers (which is just below 2GB), so the request would have failed. Requesting only ${HEAP8.length}`
          );
        }
      }
      const replacement = emscripten_realloc_buffer(newSize);
      if (!replacement) {
        err(
          `Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`
        );
        return false;
      }
      return true;
    }
    function _exit(status) {
      exit(status);
    }
    function _llvm_log2_f32(x) {
      return Math.log(x) / Math.LN2;
    }
    function _llvm_log2_f64(a0) {
      return _llvm_log2_f32(a0);
    }
    function _llvm_trap() {
      abort("trap!");
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    }
    embind_init_charCodes();
    BindingError = Module2.BindingError = extendError(Error, "BindingError");
    InternalError = Module2.InternalError = extendError(Error, "InternalError");
    init_ClassHandle();
    init_RegisteredPointer();
    init_embind();
    UnboundTypeError = Module2.UnboundTypeError = extendError(
      Error,
      "UnboundTypeError"
    );
    init_emval();
    function nullFunc_i(x) {
      abortFnPtrError(x, "i");
    }
    function nullFunc_ii(x) {
      abortFnPtrError(x, "ii");
    }
    function nullFunc_iidiiii(x) {
      abortFnPtrError(x, "iidiiii");
    }
    function nullFunc_iii(x) {
      abortFnPtrError(x, "iii");
    }
    function nullFunc_iiii(x) {
      abortFnPtrError(x, "iiii");
    }
    function nullFunc_iiiii(x) {
      abortFnPtrError(x, "iiiii");
    }
    function nullFunc_jiji(x) {
      abortFnPtrError(x, "jiji");
    }
    function nullFunc_v(x) {
      abortFnPtrError(x, "v");
    }
    function nullFunc_vi(x) {
      abortFnPtrError(x, "vi");
    }
    function nullFunc_vii(x) {
      abortFnPtrError(x, "vii");
    }
    function nullFunc_viii(x) {
      abortFnPtrError(x, "viii");
    }
    function nullFunc_viiii(x) {
      abortFnPtrError(x, "viiii");
    }
    function nullFunc_viiiii(x) {
      abortFnPtrError(x, "viiiii");
    }
    function nullFunc_viiiiii(x) {
      abortFnPtrError(x, "viiiiii");
    }
    const asmGlobalArg = {};
    var asmLibraryArg = {
      ___assert_fail,
      ___cxa_allocate_exception,
      ___cxa_throw,
      ___lock,
      ___unlock,
      ___wasi_fd_close,
      ___wasi_fd_seek,
      ___wasi_fd_write,
      __embind_register_bool,
      __embind_register_class,
      __embind_register_class_constructor,
      __embind_register_class_function,
      __embind_register_emval,
      __embind_register_float,
      __embind_register_function,
      __embind_register_integer,
      __embind_register_memory_view,
      __embind_register_std_string,
      __embind_register_std_wstring,
      __embind_register_void,
      __emval_decref,
      __emval_incref,
      __emval_take_value,
      __memory_base: 1024,
      __table_base: 0,
      _abort,
      _emscripten_get_heap_size,
      _emscripten_memcpy_big,
      _emscripten_resize_heap,
      _exit,
      _llvm_log2_f64,
      _llvm_trap,
      abortStackOverflow,
      memory: wasmMemory,
      nullFunc_i,
      nullFunc_ii,
      nullFunc_iidiiii,
      nullFunc_iii,
      nullFunc_iiii,
      nullFunc_iiiii,
      nullFunc_jiji,
      nullFunc_v,
      nullFunc_vi,
      nullFunc_vii,
      nullFunc_viii,
      nullFunc_viiii,
      nullFunc_viiiii,
      nullFunc_viiiiii,
      setTempRet0,
      table: wasmTable
    };
    const asm = Module2.asm(asmGlobalArg, asmLibraryArg, buffer);
    Module2.asm = asm;
    var __ZSt18uncaught_exceptionv = Module2.__ZSt18uncaught_exceptionv = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.__ZSt18uncaught_exceptionv.apply(null, arguments);
    };
    const ___cxa_demangle = Module2.___cxa_demangle = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.___cxa_demangle.apply(null, arguments);
    };
    const ___embind_register_native_and_builtin_types = Module2.___embind_register_native_and_builtin_types = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.___embind_register_native_and_builtin_types.apply(
        null,
        arguments
      );
    };
    var ___getTypeName = Module2.___getTypeName = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.___getTypeName.apply(null, arguments);
    };
    const _fflush = Module2._fflush = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm._fflush.apply(null, arguments);
    };
    var _free = Module2._free = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm._free.apply(null, arguments);
    };
    var _malloc = Module2._malloc = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm._malloc.apply(null, arguments);
    };
    const establishStackSpace = Module2.establishStackSpace = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.establishStackSpace.apply(null, arguments);
    };
    var globalCtors = Module2.globalCtors = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.globalCtors.apply(null, arguments);
    };
    var stackAlloc = Module2.stackAlloc = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.stackAlloc.apply(null, arguments);
    };
    var stackRestore = Module2.stackRestore = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.stackRestore.apply(null, arguments);
    };
    var stackSave = Module2.stackSave = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.stackSave.apply(null, arguments);
    };
    const dynCall_i = Module2.dynCall_i = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_i.apply(null, arguments);
    };
    const dynCall_ii = Module2.dynCall_ii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_ii.apply(null, arguments);
    };
    const dynCall_iidiiii = Module2.dynCall_iidiiii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_iidiiii.apply(null, arguments);
    };
    const dynCall_iii = Module2.dynCall_iii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_iii.apply(null, arguments);
    };
    const dynCall_iiii = Module2.dynCall_iiii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_iiii.apply(null, arguments);
    };
    const dynCall_iiiii = Module2.dynCall_iiiii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_iiiii.apply(null, arguments);
    };
    const dynCall_jiji = Module2.dynCall_jiji = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_jiji.apply(null, arguments);
    };
    const dynCall_v = Module2.dynCall_v = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_v.apply(null, arguments);
    };
    const dynCall_vi = Module2.dynCall_vi = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_vi.apply(null, arguments);
    };
    const dynCall_vii = Module2.dynCall_vii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_vii.apply(null, arguments);
    };
    const dynCall_viii = Module2.dynCall_viii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_viii.apply(null, arguments);
    };
    const dynCall_viiii = Module2.dynCall_viiii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_viiii.apply(null, arguments);
    };
    const dynCall_viiiii = Module2.dynCall_viiiii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_viiiii.apply(null, arguments);
    };
    const dynCall_viiiiii = Module2.dynCall_viiiiii = function() {
      assert(
        runtimeInitialized,
        "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"
      );
      assert(
        !runtimeExited,
        "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
      );
      return Module2.asm.dynCall_viiiiii.apply(null, arguments);
    };
    Module2.asm = asm;
    if (!Object.getOwnPropertyDescriptor(Module2, "intArrayFromString")) {
      Module2.intArrayFromString = function() {
        abort(
          "'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "intArrayToString")) {
      Module2.intArrayToString = function() {
        abort(
          "'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    Module2.ccall = ccall;
    Module2.cwrap = cwrap;
    if (!Object.getOwnPropertyDescriptor(Module2, "setValue")) {
      Module2.setValue = function() {
        abort(
          "'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getValue")) {
      Module2.getValue = function() {
        abort(
          "'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "allocate")) {
      Module2.allocate = function() {
        abort(
          "'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getMemory")) {
      Module2.getMemory = function() {
        abort(
          "'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "AsciiToString")) {
      Module2.AsciiToString = function() {
        abort(
          "'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stringToAscii")) {
      Module2.stringToAscii = function() {
        abort(
          "'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "UTF8ArrayToString")) {
      Module2.UTF8ArrayToString = function() {
        abort(
          "'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "UTF8ToString")) {
      Module2.UTF8ToString = function() {
        abort(
          "'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stringToUTF8Array")) {
      Module2.stringToUTF8Array = function() {
        abort(
          "'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    Module2.stringToUTF8 = stringToUTF8;
    if (!Object.getOwnPropertyDescriptor(Module2, "lengthBytesUTF8")) {
      Module2.lengthBytesUTF8 = function() {
        abort(
          "'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "UTF16ToString")) {
      Module2.UTF16ToString = function() {
        abort(
          "'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stringToUTF16")) {
      Module2.stringToUTF16 = function() {
        abort(
          "'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "lengthBytesUTF16")) {
      Module2.lengthBytesUTF16 = function() {
        abort(
          "'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "UTF32ToString")) {
      Module2.UTF32ToString = function() {
        abort(
          "'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stringToUTF32")) {
      Module2.stringToUTF32 = function() {
        abort(
          "'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "lengthBytesUTF32")) {
      Module2.lengthBytesUTF32 = function() {
        abort(
          "'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "allocateUTF8")) {
      Module2.allocateUTF8 = function() {
        abort(
          "'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stackTrace")) {
      Module2.stackTrace = function() {
        abort(
          "'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addOnPreRun")) {
      Module2.addOnPreRun = function() {
        abort(
          "'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addOnInit")) {
      Module2.addOnInit = function() {
        abort(
          "'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addOnPreMain")) {
      Module2.addOnPreMain = function() {
        abort(
          "'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addOnExit")) {
      Module2.addOnExit = function() {
        abort(
          "'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addOnPostRun")) {
      Module2.addOnPostRun = function() {
        abort(
          "'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "writeStringToMemory")) {
      Module2.writeStringToMemory = function() {
        abort(
          "'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "writeArrayToMemory")) {
      Module2.writeArrayToMemory = function() {
        abort(
          "'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "writeAsciiToMemory")) {
      Module2.writeAsciiToMemory = function() {
        abort(
          "'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addRunDependency")) {
      Module2.addRunDependency = function() {
        abort(
          "'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "removeRunDependency")) {
      Module2.removeRunDependency = function() {
        abort(
          "'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "ENV")) {
      Module2.ENV = function() {
        abort(
          "'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS")) {
      Module2.FS = function() {
        abort(
          "'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createFolder")) {
      Module2.FS_createFolder = function() {
        abort(
          "'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createPath")) {
      Module2.FS_createPath = function() {
        abort(
          "'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createDataFile")) {
      Module2.FS_createDataFile = function() {
        abort(
          "'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createPreloadedFile")) {
      Module2.FS_createPreloadedFile = function() {
        abort(
          "'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createLazyFile")) {
      Module2.FS_createLazyFile = function() {
        abort(
          "'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createLink")) {
      Module2.FS_createLink = function() {
        abort(
          "'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_createDevice")) {
      Module2.FS_createDevice = function() {
        abort(
          "'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "FS_unlink")) {
      Module2.FS_unlink = function() {
        abort(
          "'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "GL")) {
      Module2.GL = function() {
        abort(
          "'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "dynamicAlloc")) {
      Module2.dynamicAlloc = function() {
        abort(
          "'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "loadDynamicLibrary")) {
      Module2.loadDynamicLibrary = function() {
        abort(
          "'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "loadWebAssemblyModule")) {
      Module2.loadWebAssemblyModule = function() {
        abort(
          "'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getLEB")) {
      Module2.getLEB = function() {
        abort(
          "'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getFunctionTables")) {
      Module2.getFunctionTables = function() {
        abort(
          "'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "alignFunctionTables")) {
      Module2.alignFunctionTables = function() {
        abort(
          "'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "registerFunctions")) {
      Module2.registerFunctions = function() {
        abort(
          "'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "addFunction")) {
      Module2.addFunction = function() {
        abort(
          "'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "removeFunction")) {
      Module2.removeFunction = function() {
        abort(
          "'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getFuncWrapper")) {
      Module2.getFuncWrapper = function() {
        abort(
          "'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "prettyPrint")) {
      Module2.prettyPrint = function() {
        abort(
          "'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "makeBigInt")) {
      Module2.makeBigInt = function() {
        abort(
          "'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "dynCall")) {
      Module2.dynCall = function() {
        abort(
          "'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getCompilerSetting")) {
      Module2.getCompilerSetting = function() {
        abort(
          "'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stackSave")) {
      Module2.stackSave = function() {
        abort(
          "'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stackRestore")) {
      Module2.stackRestore = function() {
        abort(
          "'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "stackAlloc")) {
      Module2.stackAlloc = function() {
        abort(
          "'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "establishStackSpace")) {
      Module2.establishStackSpace = function() {
        abort(
          "'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "print")) {
      Module2.print = function() {
        abort(
          "'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "printErr")) {
      Module2.printErr = function() {
        abort(
          "'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "getTempRet0")) {
      Module2.getTempRet0 = function() {
        abort(
          "'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "setTempRet0")) {
      Module2.setTempRet0 = function() {
        abort(
          "'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "callMain")) {
      Module2.callMain = function() {
        abort(
          "'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "abort")) {
      Module2.abort = function() {
        abort(
          "'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "Pointer_stringify")) {
      Module2.Pointer_stringify = function() {
        abort(
          "'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "warnOnce")) {
      Module2.warnOnce = function() {
        abort(
          "'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
        );
      };
    }
    Module2.writeStackCookie = writeStackCookie;
    Module2.checkStackCookie = checkStackCookie;
    Module2.abortStackOverflow = abortStackOverflow;
    if (!Object.getOwnPropertyDescriptor(Module2, "ALLOC_NORMAL")) {
      Object.defineProperty(Module2, "ALLOC_NORMAL", {
        configurable: true,
        get() {
          abort(
            "'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
          );
        }
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "ALLOC_STACK")) {
      Object.defineProperty(Module2, "ALLOC_STACK", {
        configurable: true,
        get() {
          abort(
            "'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
          );
        }
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "ALLOC_DYNAMIC")) {
      Object.defineProperty(Module2, "ALLOC_DYNAMIC", {
        configurable: true,
        get() {
          abort(
            "'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
          );
        }
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "ALLOC_NONE")) {
      Object.defineProperty(Module2, "ALLOC_NONE", {
        configurable: true,
        get() {
          abort(
            "'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"
          );
        }
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module2, "calledRun")) {
      Object.defineProperty(Module2, "calledRun", {
        configurable: true,
        get() {
          abort(
            "'calledRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
          );
        }
      });
    }
    let calledRun;
    Module2.then = function(func) {
      if (calledRun) {
        func(Module2);
      } else {
        const old = Module2.onRuntimeInitialized;
        Module2.onRuntimeInitialized = function() {
          if (old) {
            old();
          }
          func(Module2);
        };
      }
      return Module2;
    };
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) {
        run();
      }
      if (!calledRun) {
        dependenciesFulfilled = runCaller;
      }
    };
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      writeStackCookie();
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) {
          return;
        }
        calledRun = true;
        if (ABORT) {
          return;
        }
        initRuntime();
        preMain();
        if (Module2.onRuntimeInitialized) {
          Module2.onRuntimeInitialized();
        }
        assert(
          !Module2._main,
          'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'
        );
        postRun();
      }
      if (Module2.setStatus) {
        Module2.setStatus("Running...");
        setTimeout(() => {
          setTimeout(() => {
            Module2.setStatus("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }
    Module2.run = run;
    function checkUnflushedContent() {
      const print2 = out;
      const printErr2 = err;
      let has = false;
      out = err = function(x) {
        has = true;
      };
      try {
        const flush = flush_NO_FILESYSTEM;
        if (flush) {
          flush(0);
        }
      } catch (e) {
      }
      out = print2;
      err = printErr2;
      if (has) {
        warnOnce(
          "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc."
        );
        warnOnce(
          "(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)"
        );
      }
    }
    function exit(status, implicit) {
      checkUnflushedContent();
      if (implicit && noExitRuntime && status === 0) {
        return;
      }
      if (noExitRuntime) {
        if (!implicit) {
          err(
            `program exited (with status: ${status}), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)`
          );
        }
      } else {
        ABORT = true;
        EXITSTATUS = status;
        exitRuntime();
        if (Module2.onExit) {
          Module2.onExit(status);
        }
      }
      quit_(status, new ExitStatus(status));
    }
    if (Module2.preInit) {
      if (typeof Module2.preInit == "function") {
        Module2.preInit = [Module2.preInit];
      }
      while (Module2.preInit.length > 0) {
        Module2.preInit.pop()();
      }
    }
    noExitRuntime = true;
    run();
    return Module2;
  };
}();
var woff2_bindings_default = Module;
export {
  woff2_bindings_default as default
};
//# sourceMappingURL=woff2.bindings-ZLISHLUN.js.map
