import {
  define_import_meta_env_default,
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import {
  __commonJS,
  __toESM
} from "./chunk-F3UQABQJ.js";

// ../../node_modules/crc-32/crc32.js
var require_crc32 = __commonJS({
  "../../node_modules/crc-32/crc32.js"(exports) {
    init_define_import_meta_env();
    var CRC32;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_CRC === "undefined") {
        if ("object" === typeof exports) {
          factory(exports);
        } else if ("function" === typeof define && define.amd) {
          define(function() {
            var module2 = {};
            factory(module2);
            return module2;
          });
        } else {
          factory(CRC32 = {});
        }
      } else {
        factory(CRC32 = {});
      }
    })(function(CRC322) {
      CRC322.version = "0.3.0";
      function signed_crc_table() {
        var c = 0, table2 = new Array(256);
        for (var n2 = 0; n2 != 256; ++n2) {
          c = n2;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table2[n2] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table2) : table2;
      }
      var table = signed_crc_table();
      var use_buffer = typeof Buffer !== "undefined";
      function crc32_bstr(bstr) {
        if (bstr.length > 32768) {
          if (use_buffer)
            return crc32_buf_8(new Buffer(bstr));
        }
        var crc = -1, L2 = bstr.length - 1;
        for (var i2 = 0; i2 < L2; ) {
          crc = table[(crc ^ bstr.charCodeAt(i2++)) & 255] ^ crc >>> 8;
          crc = table[(crc ^ bstr.charCodeAt(i2++)) & 255] ^ crc >>> 8;
        }
        if (i2 === L2)
          crc = crc >>> 8 ^ table[(crc ^ bstr.charCodeAt(i2)) & 255];
        return crc ^ -1;
      }
      function crc32_buf(buf) {
        if (buf.length > 1e4)
          return crc32_buf_8(buf);
        for (var crc = -1, i2 = 0, L2 = buf.length - 3; i2 < L2; ) {
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
        }
        while (i2 < L2 + 3)
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
        return crc ^ -1;
      }
      function crc32_buf_8(buf) {
        for (var crc = -1, i2 = 0, L2 = buf.length - 7; i2 < L2; ) {
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
        }
        while (i2 < L2 + 7)
          crc = crc >>> 8 ^ table[(crc ^ buf[i2++]) & 255];
        return crc ^ -1;
      }
      function crc32_str(str) {
        for (var crc = -1, i2 = 0, L2 = str.length, c, d; i2 < L2; ) {
          c = str.charCodeAt(i2++);
          if (c < 128) {
            crc = crc >>> 8 ^ table[(crc ^ c) & 255];
          } else if (c < 2048) {
            crc = crc >>> 8 ^ table[(crc ^ (192 | c >> 6 & 31)) & 255];
            crc = crc >>> 8 ^ table[(crc ^ (128 | c & 63)) & 255];
          } else if (c >= 55296 && c < 57344) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i2++) & 1023;
            crc = crc >>> 8 ^ table[(crc ^ (240 | c >> 8 & 7)) & 255];
            crc = crc >>> 8 ^ table[(crc ^ (128 | c >> 2 & 63)) & 255];
            crc = crc >>> 8 ^ table[(crc ^ (128 | d >> 6 & 15 | c & 3)) & 255];
            crc = crc >>> 8 ^ table[(crc ^ (128 | d & 63)) & 255];
          } else {
            crc = crc >>> 8 ^ table[(crc ^ (224 | c >> 12 & 15)) & 255];
            crc = crc >>> 8 ^ table[(crc ^ (128 | c >> 6 & 63)) & 255];
            crc = crc >>> 8 ^ table[(crc ^ (128 | c & 63)) & 255];
          }
        }
        return crc ^ -1;
      }
      CRC322.table = table;
      CRC322.bstr = crc32_bstr;
      CRC322.buf = crc32_buf;
      CRC322.str = crc32_str;
    });
  }
});

// ../../node_modules/png-chunks-extract/index.js
var require_png_chunks_extract = __commonJS({
  "../../node_modules/png-chunks-extract/index.js"(exports, module) {
    init_define_import_meta_env();
    var crc32 = require_crc32();
    module.exports = extractChunks;
    var uint8 = new Uint8Array(4);
    var int32 = new Int32Array(uint8.buffer);
    var uint32 = new Uint32Array(uint8.buffer);
    function extractChunks(data) {
      if (data[0] !== 137)
        throw new Error("Invalid .png file header");
      if (data[1] !== 80)
        throw new Error("Invalid .png file header");
      if (data[2] !== 78)
        throw new Error("Invalid .png file header");
      if (data[3] !== 71)
        throw new Error("Invalid .png file header");
      if (data[4] !== 13)
        throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
      if (data[5] !== 10)
        throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
      if (data[6] !== 26)
        throw new Error("Invalid .png file header");
      if (data[7] !== 10)
        throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
      var ended = false;
      var chunks = [];
      var idx = 8;
      while (idx < data.length) {
        uint8[3] = data[idx++];
        uint8[2] = data[idx++];
        uint8[1] = data[idx++];
        uint8[0] = data[idx++];
        var length = uint32[0] + 4;
        var chunk2 = new Uint8Array(length);
        chunk2[0] = data[idx++];
        chunk2[1] = data[idx++];
        chunk2[2] = data[idx++];
        chunk2[3] = data[idx++];
        var name = String.fromCharCode(chunk2[0]) + String.fromCharCode(chunk2[1]) + String.fromCharCode(chunk2[2]) + String.fromCharCode(chunk2[3]);
        if (!chunks.length && name !== "IHDR") {
          throw new Error("IHDR header missing");
        }
        if (name === "IEND") {
          ended = true;
          chunks.push({
            name,
            data: new Uint8Array(0)
          });
          break;
        }
        for (var i2 = 4; i2 < length; i2++) {
          chunk2[i2] = data[idx++];
        }
        uint8[3] = data[idx++];
        uint8[2] = data[idx++];
        uint8[1] = data[idx++];
        uint8[0] = data[idx++];
        var crcActual = int32[0];
        var crcExpect = crc32.buf(chunk2);
        if (crcExpect !== crcActual) {
          throw new Error(
            "CRC values for " + name + " header do not match, PNG file is likely corrupted"
          );
        }
        var chunkData = new Uint8Array(chunk2.buffer.slice(4));
        chunks.push({
          name,
          data: chunkData
        });
      }
      if (!ended) {
        throw new Error(".png file ended prematurely: no IEND header was found");
      }
      return chunks;
    }
  }
});

// ../../node_modules/png-chunk-text/encode.js
var require_encode = __commonJS({
  "../../node_modules/png-chunk-text/encode.js"(exports, module) {
    init_define_import_meta_env();
    module.exports = encode2;
    function encode2(keyword, content) {
      keyword = String(keyword);
      content = String(content);
      if (!/^[\x00-\xFF]+$/.test(keyword) || !/^[\x00-\xFF]+$/.test(content)) {
        throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");
      }
      if (keyword.length >= 80) {
        throw new Error('Keyword "' + keyword + '" is longer than the 79-character limit imposed by the PNG specification');
      }
      var totalSize = keyword.length + content.length + 1;
      var output = new Uint8Array(totalSize);
      var idx = 0;
      var code;
      for (var i2 = 0; i2 < keyword.length; i2++) {
        if (!(code = keyword.charCodeAt(i2))) {
          throw new Error("0x00 character is not permitted in tEXt keywords");
        }
        output[idx++] = code;
      }
      output[idx++] = 0;
      for (var j = 0; j < content.length; j++) {
        if (!(code = content.charCodeAt(j))) {
          throw new Error("0x00 character is not permitted in tEXt content");
        }
        output[idx++] = code;
      }
      return {
        name: "tEXt",
        data: output
      };
    }
  }
});

// ../../node_modules/png-chunk-text/decode.js
var require_decode = __commonJS({
  "../../node_modules/png-chunk-text/decode.js"(exports, module) {
    init_define_import_meta_env();
    module.exports = decode2;
    function decode2(data) {
      if (data.data && data.name) {
        data = data.data;
      }
      var naming = true;
      var text = "";
      var name = "";
      for (var i2 = 0; i2 < data.length; i2++) {
        var code = data[i2];
        if (naming) {
          if (code) {
            name += String.fromCharCode(code);
          } else {
            naming = false;
          }
        } else {
          if (code) {
            text += String.fromCharCode(code);
          } else {
            throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content");
          }
        }
      }
      return {
        keyword: name,
        text
      };
    }
  }
});

// ../../node_modules/png-chunk-text/index.js
var require_png_chunk_text = __commonJS({
  "../../node_modules/png-chunk-text/index.js"(exports) {
    init_define_import_meta_env();
    exports.encode = require_encode();
    exports.decode = require_decode();
  }
});

// ../../node_modules/sliced/index.js
var require_sliced = __commonJS({
  "../../node_modules/sliced/index.js"(exports, module) {
    init_define_import_meta_env();
    module.exports = function(args, slice, sliceEnd) {
      var ret = [];
      var len = args.length;
      if (0 === len)
        return ret;
      var start2 = slice < 0 ? Math.max(0, slice + len) : slice || 0;
      if (sliceEnd !== void 0) {
        len = sliceEnd < 0 ? sliceEnd + len : sliceEnd;
      }
      while (len-- > start2) {
        ret[len - start2] = args[len];
      }
      return ret;
    };
  }
});

// ../../node_modules/png-chunks-encode/index.js
var require_png_chunks_encode = __commonJS({
  "../../node_modules/png-chunks-encode/index.js"(exports, module) {
    init_define_import_meta_env();
    var sliced = require_sliced();
    var crc32 = require_crc32();
    module.exports = encodeChunks;
    var uint8 = new Uint8Array(4);
    var int32 = new Int32Array(uint8.buffer);
    var uint32 = new Uint32Array(uint8.buffer);
    function encodeChunks(chunks) {
      var totalSize = 8;
      var idx = totalSize;
      var i2;
      for (i2 = 0; i2 < chunks.length; i2++) {
        totalSize += chunks[i2].data.length;
        totalSize += 12;
      }
      var output = new Uint8Array(totalSize);
      output[0] = 137;
      output[1] = 80;
      output[2] = 78;
      output[3] = 71;
      output[4] = 13;
      output[5] = 10;
      output[6] = 26;
      output[7] = 10;
      for (i2 = 0; i2 < chunks.length; i2++) {
        var chunk2 = chunks[i2];
        var name = chunk2.name;
        var data = chunk2.data;
        var size = data.length;
        var nameChars = [
          name.charCodeAt(0),
          name.charCodeAt(1),
          name.charCodeAt(2),
          name.charCodeAt(3)
        ];
        uint32[0] = size;
        output[idx++] = uint8[3];
        output[idx++] = uint8[2];
        output[idx++] = uint8[1];
        output[idx++] = uint8[0];
        output[idx++] = nameChars[0];
        output[idx++] = nameChars[1];
        output[idx++] = nameChars[2];
        output[idx++] = nameChars[3];
        for (var j = 0; j < size; ) {
          output[idx++] = data[j++];
        }
        var crcCheck = nameChars.concat(sliced(data));
        var crc = crc32.buf(crcCheck);
        int32[0] = crc;
        output[idx++] = uint8[3];
        output[idx++] = uint8[2];
        output[idx++] = uint8[1];
        output[idx++] = uint8[0];
      }
      return output;
    }
  }
});

// ../../node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "../../node_modules/pako/lib/utils/common.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    exports.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    exports.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i2 = 0; i2 < len; i2++) {
          dest[dest_offs + i2] = src[src_offs + i2];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i2, l2, len, pos, chunk2, result;
        len = 0;
        for (i2 = 0, l2 = chunks.length; i2 < l2; i2++) {
          len += chunks[i2].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i2 = 0, l2 = chunks.length; i2 < l2; i2++) {
          chunk2 = chunks[i2];
          result.set(chunk2, pos);
          pos += chunk2.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        for (var i2 = 0; i2 < len; i2++) {
          dest[dest_offs + i2] = src[src_offs + i2];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports.setTyped = function(on) {
      if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };
    exports.setTyped(TYPED_OK);
  }
});

// ../../node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "../../node_modules/pako/lib/zlib/trees.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var utils = require_common();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    );
    var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    function put_short(s2, w) {
      s2.pending_buf[s2.pending++] = w & 255;
      s2.pending_buf[s2.pending++] = w >>> 8 & 255;
    }
    function send_bits(s2, value, length) {
      if (s2.bi_valid > Buf_size - length) {
        s2.bi_buf |= value << s2.bi_valid & 65535;
        put_short(s2, s2.bi_buf);
        s2.bi_buf = value >> Buf_size - s2.bi_valid;
        s2.bi_valid += length - Buf_size;
      } else {
        s2.bi_buf |= value << s2.bi_valid & 65535;
        s2.bi_valid += length;
      }
    }
    function send_code(s2, c, tree) {
      send_bits(
        s2,
        tree[c * 2],
        tree[c * 2 + 1]
        /*.Len*/
      );
    }
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    function bi_flush(s2) {
      if (s2.bi_valid === 16) {
        put_short(s2, s2.bi_buf);
        s2.bi_buf = 0;
        s2.bi_valid = 0;
      } else if (s2.bi_valid >= 8) {
        s2.pending_buf[s2.pending++] = s2.bi_buf & 255;
        s2.bi_buf >>= 8;
        s2.bi_valid -= 8;
      }
    }
    function gen_bitlen(s2, desc) {
      var tree = desc.dyn_tree;
      var max_code = desc.max_code;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var extra = desc.stat_desc.extra_bits;
      var base = desc.stat_desc.extra_base;
      var max_length = desc.stat_desc.max_length;
      var h;
      var n2, m;
      var bits;
      var xbits;
      var f;
      var overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s2.bl_count[bits] = 0;
      }
      tree[s2.heap[s2.heap_max] * 2 + 1] = 0;
      for (h = s2.heap_max + 1; h < HEAP_SIZE; h++) {
        n2 = s2.heap[h];
        bits = tree[tree[n2 * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n2 * 2 + 1] = bits;
        if (n2 > max_code) {
          continue;
        }
        s2.bl_count[bits]++;
        xbits = 0;
        if (n2 >= base) {
          xbits = extra[n2 - base];
        }
        f = tree[n2 * 2];
        s2.opt_len += f * (bits + xbits);
        if (has_stree) {
          s2.static_len += f * (stree[n2 * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s2.bl_count[bits] === 0) {
          bits--;
        }
        s2.bl_count[bits]--;
        s2.bl_count[bits + 1] += 2;
        s2.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n2 = s2.bl_count[bits];
        while (n2 !== 0) {
          m = s2.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s2.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n2--;
        }
      }
    }
    function gen_codes(tree, max_code, bl_count) {
      var next_code = new Array(MAX_BITS + 1);
      var code = 0;
      var bits;
      var n2;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = code + bl_count[bits - 1] << 1;
      }
      for (n2 = 0; n2 <= max_code; n2++) {
        var len = tree[n2 * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n2 * 2] = bi_reverse(next_code[len]++, len);
      }
    }
    function tr_static_init() {
      var n2;
      var bits;
      var length;
      var code;
      var dist;
      var bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n2 = 0; n2 < 1 << extra_lbits[code]; n2++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n2 = 0; n2 < 1 << extra_dbits[code]; n2++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n2 = 0; n2 < 1 << extra_dbits[code] - 7; n2++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n2 = 0;
      while (n2 <= 143) {
        static_ltree[n2 * 2 + 1] = 8;
        n2++;
        bl_count[8]++;
      }
      while (n2 <= 255) {
        static_ltree[n2 * 2 + 1] = 9;
        n2++;
        bl_count[9]++;
      }
      while (n2 <= 279) {
        static_ltree[n2 * 2 + 1] = 7;
        n2++;
        bl_count[7]++;
      }
      while (n2 <= 287) {
        static_ltree[n2 * 2 + 1] = 8;
        n2++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n2 = 0; n2 < D_CODES; n2++) {
        static_dtree[n2 * 2 + 1] = 5;
        static_dtree[n2 * 2] = bi_reverse(n2, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }
    function init_block(s2) {
      var n2;
      for (n2 = 0; n2 < L_CODES; n2++) {
        s2.dyn_ltree[n2 * 2] = 0;
      }
      for (n2 = 0; n2 < D_CODES; n2++) {
        s2.dyn_dtree[n2 * 2] = 0;
      }
      for (n2 = 0; n2 < BL_CODES; n2++) {
        s2.bl_tree[n2 * 2] = 0;
      }
      s2.dyn_ltree[END_BLOCK * 2] = 1;
      s2.opt_len = s2.static_len = 0;
      s2.last_lit = s2.matches = 0;
    }
    function bi_windup(s2) {
      if (s2.bi_valid > 8) {
        put_short(s2, s2.bi_buf);
      } else if (s2.bi_valid > 0) {
        s2.pending_buf[s2.pending++] = s2.bi_buf;
      }
      s2.bi_buf = 0;
      s2.bi_valid = 0;
    }
    function copy_block(s2, buf, len, header) {
      bi_windup(s2);
      if (header) {
        put_short(s2, len);
        put_short(s2, ~len);
      }
      utils.arraySet(s2.pending_buf, s2.window, buf, len, s2.pending);
      s2.pending += len;
    }
    function smaller(tree, n2, m, depth) {
      var _n2 = n2 * 2;
      var _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n2] <= depth[m];
    }
    function pqdownheap(s2, tree, k) {
      var v = s2.heap[k];
      var j = k << 1;
      while (j <= s2.heap_len) {
        if (j < s2.heap_len && smaller(tree, s2.heap[j + 1], s2.heap[j], s2.depth)) {
          j++;
        }
        if (smaller(tree, v, s2.heap[j], s2.depth)) {
          break;
        }
        s2.heap[k] = s2.heap[j];
        k = j;
        j <<= 1;
      }
      s2.heap[k] = v;
    }
    function compress_block(s2, ltree, dtree) {
      var dist;
      var lc;
      var lx = 0;
      var code;
      var extra;
      if (s2.last_lit !== 0) {
        do {
          dist = s2.pending_buf[s2.d_buf + lx * 2] << 8 | s2.pending_buf[s2.d_buf + lx * 2 + 1];
          lc = s2.pending_buf[s2.l_buf + lx];
          lx++;
          if (dist === 0) {
            send_code(s2, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s2, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s2, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s2, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s2, dist, extra);
            }
          }
        } while (lx < s2.last_lit);
      }
      send_code(s2, END_BLOCK, ltree);
    }
    function build_tree(s2, desc) {
      var tree = desc.dyn_tree;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems = desc.stat_desc.elems;
      var n2, m;
      var max_code = -1;
      var node;
      s2.heap_len = 0;
      s2.heap_max = HEAP_SIZE;
      for (n2 = 0; n2 < elems; n2++) {
        if (tree[n2 * 2] !== 0) {
          s2.heap[++s2.heap_len] = max_code = n2;
          s2.depth[n2] = 0;
        } else {
          tree[n2 * 2 + 1] = 0;
        }
      }
      while (s2.heap_len < 2) {
        node = s2.heap[++s2.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s2.depth[node] = 0;
        s2.opt_len--;
        if (has_stree) {
          s2.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n2 = s2.heap_len >> 1; n2 >= 1; n2--) {
        pqdownheap(s2, tree, n2);
      }
      node = elems;
      do {
        n2 = s2.heap[
          1
          /*SMALLEST*/
        ];
        s2.heap[
          1
          /*SMALLEST*/
        ] = s2.heap[s2.heap_len--];
        pqdownheap(
          s2,
          tree,
          1
          /*SMALLEST*/
        );
        m = s2.heap[
          1
          /*SMALLEST*/
        ];
        s2.heap[--s2.heap_max] = n2;
        s2.heap[--s2.heap_max] = m;
        tree[node * 2] = tree[n2 * 2] + tree[m * 2];
        s2.depth[node] = (s2.depth[n2] >= s2.depth[m] ? s2.depth[n2] : s2.depth[m]) + 1;
        tree[n2 * 2 + 1] = tree[m * 2 + 1] = node;
        s2.heap[
          1
          /*SMALLEST*/
        ] = node++;
        pqdownheap(
          s2,
          tree,
          1
          /*SMALLEST*/
        );
      } while (s2.heap_len >= 2);
      s2.heap[--s2.heap_max] = s2.heap[
        1
        /*SMALLEST*/
      ];
      gen_bitlen(s2, desc);
      gen_codes(tree, max_code, s2.bl_count);
    }
    function scan_tree(s2, tree, max_code) {
      var n2;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n2 = 0; n2 <= max_code; n2++) {
        curlen = nextlen;
        nextlen = tree[(n2 + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          s2.bl_tree[curlen * 2] += count;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s2.bl_tree[curlen * 2]++;
          }
          s2.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) {
          s2.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s2.bl_tree[REPZ_11_138 * 2]++;
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function send_tree(s2, tree, max_code) {
      var n2;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n2 = 0; n2 <= max_code; n2++) {
        curlen = nextlen;
        nextlen = tree[(n2 + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          do {
            send_code(s2, curlen, s2.bl_tree);
          } while (--count !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s2, curlen, s2.bl_tree);
            count--;
          }
          send_code(s2, REP_3_6, s2.bl_tree);
          send_bits(s2, count - 3, 2);
        } else if (count <= 10) {
          send_code(s2, REPZ_3_10, s2.bl_tree);
          send_bits(s2, count - 3, 3);
        } else {
          send_code(s2, REPZ_11_138, s2.bl_tree);
          send_bits(s2, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function build_bl_tree(s2) {
      var max_blindex;
      scan_tree(s2, s2.dyn_ltree, s2.l_desc.max_code);
      scan_tree(s2, s2.dyn_dtree, s2.d_desc.max_code);
      build_tree(s2, s2.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s2.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s2.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }
    function send_all_trees(s2, lcodes, dcodes, blcodes) {
      var rank;
      send_bits(s2, lcodes - 257, 5);
      send_bits(s2, dcodes - 1, 5);
      send_bits(s2, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s2, s2.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s2, s2.dyn_ltree, lcodes - 1);
      send_tree(s2, s2.dyn_dtree, dcodes - 1);
    }
    function detect_data_type(s2) {
      var black_mask = 4093624447;
      var n2;
      for (n2 = 0; n2 <= 31; n2++, black_mask >>>= 1) {
        if (black_mask & 1 && s2.dyn_ltree[n2 * 2] !== 0) {
          return Z_BINARY;
        }
      }
      if (s2.dyn_ltree[9 * 2] !== 0 || s2.dyn_ltree[10 * 2] !== 0 || s2.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n2 = 32; n2 < LITERALS; n2++) {
        if (s2.dyn_ltree[n2 * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    }
    var static_init_done = false;
    function _tr_init(s2) {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s2.l_desc = new TreeDesc(s2.dyn_ltree, static_l_desc);
      s2.d_desc = new TreeDesc(s2.dyn_dtree, static_d_desc);
      s2.bl_desc = new TreeDesc(s2.bl_tree, static_bl_desc);
      s2.bi_buf = 0;
      s2.bi_valid = 0;
      init_block(s2);
    }
    function _tr_stored_block(s2, buf, stored_len, last) {
      send_bits(s2, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      copy_block(s2, buf, stored_len, true);
    }
    function _tr_align(s2) {
      send_bits(s2, STATIC_TREES << 1, 3);
      send_code(s2, END_BLOCK, static_ltree);
      bi_flush(s2);
    }
    function _tr_flush_block(s2, buf, stored_len, last) {
      var opt_lenb, static_lenb;
      var max_blindex = 0;
      if (s2.level > 0) {
        if (s2.strm.data_type === Z_UNKNOWN) {
          s2.strm.data_type = detect_data_type(s2);
        }
        build_tree(s2, s2.l_desc);
        build_tree(s2, s2.d_desc);
        max_blindex = build_bl_tree(s2);
        opt_lenb = s2.opt_len + 3 + 7 >>> 3;
        static_lenb = s2.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s2, buf, stored_len, last);
      } else if (s2.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s2, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s2, static_ltree, static_dtree);
      } else {
        send_bits(s2, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s2, s2.l_desc.max_code + 1, s2.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s2, s2.dyn_ltree, s2.dyn_dtree);
      }
      init_block(s2);
      if (last) {
        bi_windup(s2);
      }
    }
    function _tr_tally(s2, dist, lc) {
      s2.pending_buf[s2.d_buf + s2.last_lit * 2] = dist >>> 8 & 255;
      s2.pending_buf[s2.d_buf + s2.last_lit * 2 + 1] = dist & 255;
      s2.pending_buf[s2.l_buf + s2.last_lit] = lc & 255;
      s2.last_lit++;
      if (dist === 0) {
        s2.dyn_ltree[lc * 2]++;
      } else {
        s2.matches++;
        dist--;
        s2.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s2.dyn_dtree[d_code(dist) * 2]++;
      }
      return s2.last_lit === s2.lit_bufsize - 1;
    }
    exports._tr_init = _tr_init;
    exports._tr_stored_block = _tr_stored_block;
    exports._tr_flush_block = _tr_flush_block;
    exports._tr_tally = _tr_tally;
    exports._tr_align = _tr_align;
  }
});

// ../../node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "../../node_modules/pako/lib/zlib/adler32.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    function adler32(adler, buf, len, pos) {
      var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n2 = 0;
      while (len !== 0) {
        n2 = len > 2e3 ? 2e3 : len;
        len -= n2;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n2);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    }
    module.exports = adler32;
  }
});

// ../../node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS({
  "../../node_modules/pako/lib/zlib/crc32.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    function makeTable() {
      var c, table = [];
      for (var n2 = 0; n2 < 256; n2++) {
        c = n2;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n2] = c;
      }
      return table;
    }
    var crcTable = makeTable();
    function crc32(crc, buf, len, pos) {
      var t2 = crcTable, end = pos + len;
      crc ^= -1;
      for (var i2 = pos; i2 < end; i2++) {
        crc = crc >>> 8 ^ t2[(crc ^ buf[i2]) & 255];
      }
      return crc ^ -1;
    }
    module.exports = crc32;
  }
});

// ../../node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "../../node_modules/pako/lib/zlib/messages.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    module.exports = {
      2: "need dictionary",
      /* Z_NEED_DICT       2  */
      1: "stream end",
      /* Z_STREAM_END      1  */
      0: "",
      /* Z_OK              0  */
      "-1": "file error",
      /* Z_ERRNO         (-1) */
      "-2": "stream error",
      /* Z_STREAM_ERROR  (-2) */
      "-3": "data error",
      /* Z_DATA_ERROR    (-3) */
      "-4": "insufficient memory",
      /* Z_MEM_ERROR     (-4) */
      "-5": "buffer error",
      /* Z_BUF_ERROR     (-5) */
      "-6": "incompatible version"
      /* Z_VERSION_ERROR (-6) */
    };
  }
});

// ../../node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "../../node_modules/pako/lib/zlib/deflate.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var utils = require_common();
    var trees = require_trees();
    var adler32 = require_adler32();
    var crc32 = require_crc322();
    var msg = require_messages();
    var Z_NO_FLUSH = 0;
    var Z_PARTIAL_FLUSH = 1;
    var Z_FULL_FLUSH = 3;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_BUF_ERROR = -5;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_FILTERED = 1;
    var Z_HUFFMAN_ONLY = 2;
    var Z_RLE = 3;
    var Z_FIXED = 4;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_UNKNOWN = 2;
    var Z_DEFLATED = 8;
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    function rank(f) {
      return (f << 1) - (f > 4 ? 9 : 0);
    }
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    function flush_pending(strm) {
      var s2 = strm.state;
      var len = s2.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      utils.arraySet(strm.output, s2.pending_buf, s2.pending_out, len, strm.next_out);
      strm.next_out += len;
      s2.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s2.pending -= len;
      if (s2.pending === 0) {
        s2.pending_out = 0;
      }
    }
    function flush_block_only(s2, last) {
      trees._tr_flush_block(s2, s2.block_start >= 0 ? s2.block_start : -1, s2.strstart - s2.block_start, last);
      s2.block_start = s2.strstart;
      flush_pending(s2.strm);
    }
    function put_byte(s2, b2) {
      s2.pending_buf[s2.pending++] = b2;
    }
    function putShortMSB(s2, b2) {
      s2.pending_buf[s2.pending++] = b2 >>> 8 & 255;
      s2.pending_buf[s2.pending++] = b2 & 255;
    }
    function read_buf(strm, buf, start2, size) {
      var len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      utils.arraySet(buf, strm.input, strm.next_in, len, start2);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start2);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start2);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }
    function longest_match(s2, cur_match) {
      var chain_length = s2.max_chain_length;
      var scan = s2.strstart;
      var match;
      var len;
      var best_len = s2.prev_length;
      var nice_match = s2.nice_match;
      var limit = s2.strstart > s2.w_size - MIN_LOOKAHEAD ? s2.strstart - (s2.w_size - MIN_LOOKAHEAD) : 0;
      var _win = s2.window;
      var wmask = s2.w_mask;
      var prev = s2.prev;
      var strend = s2.strstart + MAX_MATCH;
      var scan_end1 = _win[scan + best_len - 1];
      var scan_end = _win[scan + best_len];
      if (s2.prev_length >= s2.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s2.lookahead) {
        nice_match = s2.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s2.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s2.lookahead) {
        return best_len;
      }
      return s2.lookahead;
    }
    function fill_window(s2) {
      var _w_size = s2.w_size;
      var p, n2, m, more, str;
      do {
        more = s2.window_size - s2.lookahead - s2.strstart;
        if (s2.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          utils.arraySet(s2.window, s2.window, _w_size, _w_size, 0);
          s2.match_start -= _w_size;
          s2.strstart -= _w_size;
          s2.block_start -= _w_size;
          n2 = s2.hash_size;
          p = n2;
          do {
            m = s2.head[--p];
            s2.head[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n2);
          n2 = _w_size;
          p = n2;
          do {
            m = s2.prev[--p];
            s2.prev[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n2);
          more += _w_size;
        }
        if (s2.strm.avail_in === 0) {
          break;
        }
        n2 = read_buf(s2.strm, s2.window, s2.strstart + s2.lookahead, more);
        s2.lookahead += n2;
        if (s2.lookahead + s2.insert >= MIN_MATCH) {
          str = s2.strstart - s2.insert;
          s2.ins_h = s2.window[str];
          s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[str + 1]) & s2.hash_mask;
          while (s2.insert) {
            s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[str + MIN_MATCH - 1]) & s2.hash_mask;
            s2.prev[str & s2.w_mask] = s2.head[s2.ins_h];
            s2.head[s2.ins_h] = str;
            str++;
            s2.insert--;
            if (s2.lookahead + s2.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s2.lookahead < MIN_LOOKAHEAD && s2.strm.avail_in !== 0);
    }
    function deflate_stored(s2, flush) {
      var max_block_size = 65535;
      if (max_block_size > s2.pending_buf_size - 5) {
        max_block_size = s2.pending_buf_size - 5;
      }
      for (; ; ) {
        if (s2.lookahead <= 1) {
          fill_window(s2);
          if (s2.lookahead === 0 && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s2.lookahead === 0) {
            break;
          }
        }
        s2.strstart += s2.lookahead;
        s2.lookahead = 0;
        var max_start = s2.block_start + max_block_size;
        if (s2.strstart === 0 || s2.strstart >= max_start) {
          s2.lookahead = s2.strstart - max_start;
          s2.strstart = max_start;
          flush_block_only(s2, false);
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        if (s2.strstart - s2.block_start >= s2.w_size - MIN_LOOKAHEAD) {
          flush_block_only(s2, false);
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s2.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s2, true);
        if (s2.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s2.strstart > s2.block_start) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_NEED_MORE;
    }
    function deflate_fast(s2, flush) {
      var hash_head;
      var bflush;
      for (; ; ) {
        if (s2.lookahead < MIN_LOOKAHEAD) {
          fill_window(s2);
          if (s2.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s2.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s2.lookahead >= MIN_MATCH) {
          s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH - 1]) & s2.hash_mask;
          hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
          s2.head[s2.ins_h] = s2.strstart;
        }
        if (hash_head !== 0 && s2.strstart - hash_head <= s2.w_size - MIN_LOOKAHEAD) {
          s2.match_length = longest_match(s2, hash_head);
        }
        if (s2.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s2, s2.strstart - s2.match_start, s2.match_length - MIN_MATCH);
          s2.lookahead -= s2.match_length;
          if (s2.match_length <= s2.max_lazy_match && s2.lookahead >= MIN_MATCH) {
            s2.match_length--;
            do {
              s2.strstart++;
              s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH - 1]) & s2.hash_mask;
              hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
              s2.head[s2.ins_h] = s2.strstart;
            } while (--s2.match_length !== 0);
            s2.strstart++;
          } else {
            s2.strstart += s2.match_length;
            s2.match_length = 0;
            s2.ins_h = s2.window[s2.strstart];
            s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + 1]) & s2.hash_mask;
          }
        } else {
          bflush = trees._tr_tally(s2, 0, s2.window[s2.strstart]);
          s2.lookahead--;
          s2.strstart++;
        }
        if (bflush) {
          flush_block_only(s2, false);
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s2.insert = s2.strstart < MIN_MATCH - 1 ? s2.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s2, true);
        if (s2.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s2.last_lit) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_slow(s2, flush) {
      var hash_head;
      var bflush;
      var max_insert;
      for (; ; ) {
        if (s2.lookahead < MIN_LOOKAHEAD) {
          fill_window(s2);
          if (s2.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s2.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s2.lookahead >= MIN_MATCH) {
          s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH - 1]) & s2.hash_mask;
          hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
          s2.head[s2.ins_h] = s2.strstart;
        }
        s2.prev_length = s2.match_length;
        s2.prev_match = s2.match_start;
        s2.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s2.prev_length < s2.max_lazy_match && s2.strstart - hash_head <= s2.w_size - MIN_LOOKAHEAD) {
          s2.match_length = longest_match(s2, hash_head);
          if (s2.match_length <= 5 && (s2.strategy === Z_FILTERED || s2.match_length === MIN_MATCH && s2.strstart - s2.match_start > 4096)) {
            s2.match_length = MIN_MATCH - 1;
          }
        }
        if (s2.prev_length >= MIN_MATCH && s2.match_length <= s2.prev_length) {
          max_insert = s2.strstart + s2.lookahead - MIN_MATCH;
          bflush = trees._tr_tally(s2, s2.strstart - 1 - s2.prev_match, s2.prev_length - MIN_MATCH);
          s2.lookahead -= s2.prev_length - 1;
          s2.prev_length -= 2;
          do {
            if (++s2.strstart <= max_insert) {
              s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[s2.strstart + MIN_MATCH - 1]) & s2.hash_mask;
              hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
              s2.head[s2.ins_h] = s2.strstart;
            }
          } while (--s2.prev_length !== 0);
          s2.match_available = 0;
          s2.match_length = MIN_MATCH - 1;
          s2.strstart++;
          if (bflush) {
            flush_block_only(s2, false);
            if (s2.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s2.match_available) {
          bflush = trees._tr_tally(s2, 0, s2.window[s2.strstart - 1]);
          if (bflush) {
            flush_block_only(s2, false);
          }
          s2.strstart++;
          s2.lookahead--;
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s2.match_available = 1;
          s2.strstart++;
          s2.lookahead--;
        }
      }
      if (s2.match_available) {
        bflush = trees._tr_tally(s2, 0, s2.window[s2.strstart - 1]);
        s2.match_available = 0;
      }
      s2.insert = s2.strstart < MIN_MATCH - 1 ? s2.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s2, true);
        if (s2.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s2.last_lit) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_rle(s2, flush) {
      var bflush;
      var prev;
      var scan, strend;
      var _win = s2.window;
      for (; ; ) {
        if (s2.lookahead <= MAX_MATCH) {
          fill_window(s2);
          if (s2.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s2.lookahead === 0) {
            break;
          }
        }
        s2.match_length = 0;
        if (s2.lookahead >= MIN_MATCH && s2.strstart > 0) {
          scan = s2.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s2.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s2.match_length = MAX_MATCH - (strend - scan);
            if (s2.match_length > s2.lookahead) {
              s2.match_length = s2.lookahead;
            }
          }
        }
        if (s2.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s2, 1, s2.match_length - MIN_MATCH);
          s2.lookahead -= s2.match_length;
          s2.strstart += s2.match_length;
          s2.match_length = 0;
        } else {
          bflush = trees._tr_tally(s2, 0, s2.window[s2.strstart]);
          s2.lookahead--;
          s2.strstart++;
        }
        if (bflush) {
          flush_block_only(s2, false);
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s2.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s2, true);
        if (s2.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s2.last_lit) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_huff(s2, flush) {
      var bflush;
      for (; ; ) {
        if (s2.lookahead === 0) {
          fill_window(s2);
          if (s2.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s2.match_length = 0;
        bflush = trees._tr_tally(s2, 0, s2.window[s2.strstart]);
        s2.lookahead--;
        s2.strstart++;
        if (bflush) {
          flush_block_only(s2, false);
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s2.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s2, true);
        if (s2.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s2.last_lit) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    var configuration_table;
    configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
    ];
    function lm_init(s2) {
      s2.window_size = 2 * s2.w_size;
      zero(s2.head);
      s2.max_lazy_match = configuration_table[s2.level].max_lazy;
      s2.good_match = configuration_table[s2.level].good_length;
      s2.nice_match = configuration_table[s2.level].nice_length;
      s2.max_chain_length = configuration_table[s2.level].max_chain;
      s2.strstart = 0;
      s2.block_start = 0;
      s2.lookahead = 0;
      s2.insert = 0;
      s2.match_length = s2.prev_length = MIN_MATCH - 1;
      s2.match_available = 0;
      s2.ins_h = 0;
    }
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
      this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new utils.Buf16(MAX_BITS + 1);
      this.heap = new utils.Buf16(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new utils.Buf16(2 * L_CODES + 1);
      zero(this.depth);
      this.l_buf = 0;
      this.lit_bufsize = 0;
      this.last_lit = 0;
      this.d_buf = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    function deflateResetKeep(strm) {
      var s2;
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      s2 = strm.state;
      s2.pending = 0;
      s2.pending_out = 0;
      if (s2.wrap < 0) {
        s2.wrap = -s2.wrap;
      }
      s2.status = s2.wrap ? INIT_STATE : BUSY_STATE;
      strm.adler = s2.wrap === 2 ? 0 : 1;
      s2.last_flush = Z_NO_FLUSH;
      trees._tr_init(s2);
      return Z_OK;
    }
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }
    function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      var wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      var s2 = new DeflateState();
      strm.state = s2;
      s2.strm = strm;
      s2.wrap = wrap;
      s2.gzhead = null;
      s2.w_bits = windowBits;
      s2.w_size = 1 << s2.w_bits;
      s2.w_mask = s2.w_size - 1;
      s2.hash_bits = memLevel + 7;
      s2.hash_size = 1 << s2.hash_bits;
      s2.hash_mask = s2.hash_size - 1;
      s2.hash_shift = ~~((s2.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s2.window = new utils.Buf8(s2.w_size * 2);
      s2.head = new utils.Buf16(s2.hash_size);
      s2.prev = new utils.Buf16(s2.w_size);
      s2.lit_bufsize = 1 << memLevel + 6;
      s2.pending_buf_size = s2.lit_bufsize * 4;
      s2.pending_buf = new utils.Buf8(s2.pending_buf_size);
      s2.d_buf = 1 * s2.lit_bufsize;
      s2.l_buf = (1 + 2) * s2.lit_bufsize;
      s2.level = level;
      s2.strategy = strategy;
      s2.method = method;
      return deflateReset(strm);
    }
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    function deflate2(strm, flush) {
      var old_flush, s2;
      var beg, val;
      if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      s2 = strm.state;
      if (!strm.output || !strm.input && strm.avail_in !== 0 || s2.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      s2.strm = strm;
      old_flush = s2.last_flush;
      s2.last_flush = flush;
      if (s2.status === INIT_STATE) {
        if (s2.wrap === 2) {
          strm.adler = 0;
          put_byte(s2, 31);
          put_byte(s2, 139);
          put_byte(s2, 8);
          if (!s2.gzhead) {
            put_byte(s2, 0);
            put_byte(s2, 0);
            put_byte(s2, 0);
            put_byte(s2, 0);
            put_byte(s2, 0);
            put_byte(s2, s2.level === 9 ? 2 : s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2 ? 4 : 0);
            put_byte(s2, OS_CODE);
            s2.status = BUSY_STATE;
          } else {
            put_byte(
              s2,
              (s2.gzhead.text ? 1 : 0) + (s2.gzhead.hcrc ? 2 : 0) + (!s2.gzhead.extra ? 0 : 4) + (!s2.gzhead.name ? 0 : 8) + (!s2.gzhead.comment ? 0 : 16)
            );
            put_byte(s2, s2.gzhead.time & 255);
            put_byte(s2, s2.gzhead.time >> 8 & 255);
            put_byte(s2, s2.gzhead.time >> 16 & 255);
            put_byte(s2, s2.gzhead.time >> 24 & 255);
            put_byte(s2, s2.level === 9 ? 2 : s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2 ? 4 : 0);
            put_byte(s2, s2.gzhead.os & 255);
            if (s2.gzhead.extra && s2.gzhead.extra.length) {
              put_byte(s2, s2.gzhead.extra.length & 255);
              put_byte(s2, s2.gzhead.extra.length >> 8 & 255);
            }
            if (s2.gzhead.hcrc) {
              strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending, 0);
            }
            s2.gzindex = 0;
            s2.status = EXTRA_STATE;
          }
        } else {
          var header = Z_DEFLATED + (s2.w_bits - 8 << 4) << 8;
          var level_flags = -1;
          if (s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2) {
            level_flags = 0;
          } else if (s2.level < 6) {
            level_flags = 1;
          } else if (s2.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= level_flags << 6;
          if (s2.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - header % 31;
          s2.status = BUSY_STATE;
          putShortMSB(s2, header);
          if (s2.strstart !== 0) {
            putShortMSB(s2, strm.adler >>> 16);
            putShortMSB(s2, strm.adler & 65535);
          }
          strm.adler = 1;
        }
      }
      if (s2.status === EXTRA_STATE) {
        if (s2.gzhead.extra) {
          beg = s2.pending;
          while (s2.gzindex < (s2.gzhead.extra.length & 65535)) {
            if (s2.pending === s2.pending_buf_size) {
              if (s2.gzhead.hcrc && s2.pending > beg) {
                strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s2.pending;
              if (s2.pending === s2.pending_buf_size) {
                break;
              }
            }
            put_byte(s2, s2.gzhead.extra[s2.gzindex] & 255);
            s2.gzindex++;
          }
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          if (s2.gzindex === s2.gzhead.extra.length) {
            s2.gzindex = 0;
            s2.status = NAME_STATE;
          }
        } else {
          s2.status = NAME_STATE;
        }
      }
      if (s2.status === NAME_STATE) {
        if (s2.gzhead.name) {
          beg = s2.pending;
          do {
            if (s2.pending === s2.pending_buf_size) {
              if (s2.gzhead.hcrc && s2.pending > beg) {
                strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s2.pending;
              if (s2.pending === s2.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s2.gzindex < s2.gzhead.name.length) {
              val = s2.gzhead.name.charCodeAt(s2.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s2, val);
          } while (val !== 0);
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          if (val === 0) {
            s2.gzindex = 0;
            s2.status = COMMENT_STATE;
          }
        } else {
          s2.status = COMMENT_STATE;
        }
      }
      if (s2.status === COMMENT_STATE) {
        if (s2.gzhead.comment) {
          beg = s2.pending;
          do {
            if (s2.pending === s2.pending_buf_size) {
              if (s2.gzhead.hcrc && s2.pending > beg) {
                strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s2.pending;
              if (s2.pending === s2.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s2.gzindex < s2.gzhead.comment.length) {
              val = s2.gzhead.comment.charCodeAt(s2.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s2, val);
          } while (val !== 0);
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          if (val === 0) {
            s2.status = HCRC_STATE;
          }
        } else {
          s2.status = HCRC_STATE;
        }
      }
      if (s2.status === HCRC_STATE) {
        if (s2.gzhead.hcrc) {
          if (s2.pending + 2 > s2.pending_buf_size) {
            flush_pending(strm);
          }
          if (s2.pending + 2 <= s2.pending_buf_size) {
            put_byte(s2, strm.adler & 255);
            put_byte(s2, strm.adler >> 8 & 255);
            strm.adler = 0;
            s2.status = BUSY_STATE;
          }
        } else {
          s2.status = BUSY_STATE;
        }
      }
      if (s2.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s2.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s2.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (strm.avail_in !== 0 || s2.lookahead !== 0 || flush !== Z_NO_FLUSH && s2.status !== FINISH_STATE) {
        var bstate = s2.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s2, flush) : s2.strategy === Z_RLE ? deflate_rle(s2, flush) : configuration_table[s2.level].func(s2, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s2.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s2.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            trees._tr_align(s2);
          } else if (flush !== Z_BLOCK) {
            trees._tr_stored_block(s2, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero(s2.head);
              if (s2.lookahead === 0) {
                s2.strstart = 0;
                s2.block_start = 0;
                s2.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s2.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s2.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s2.wrap === 2) {
        put_byte(s2, strm.adler & 255);
        put_byte(s2, strm.adler >> 8 & 255);
        put_byte(s2, strm.adler >> 16 & 255);
        put_byte(s2, strm.adler >> 24 & 255);
        put_byte(s2, strm.total_in & 255);
        put_byte(s2, strm.total_in >> 8 & 255);
        put_byte(s2, strm.total_in >> 16 & 255);
        put_byte(s2, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s2, strm.adler >>> 16);
        putShortMSB(s2, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s2.wrap > 0) {
        s2.wrap = -s2.wrap;
      }
      return s2.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    function deflateEnd(strm) {
      var status;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      status = strm.state.status;
      if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    function deflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var s2;
      var str, n2;
      var wrap;
      var avail;
      var next;
      var input;
      var tmpDict;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      s2 = strm.state;
      wrap = s2.wrap;
      if (wrap === 2 || wrap === 1 && s2.status !== INIT_STATE || s2.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s2.wrap = 0;
      if (dictLength >= s2.w_size) {
        if (wrap === 0) {
          zero(s2.head);
          s2.strstart = 0;
          s2.block_start = 0;
          s2.insert = 0;
        }
        tmpDict = new utils.Buf8(s2.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s2.w_size, s2.w_size, 0);
        dictionary = tmpDict;
        dictLength = s2.w_size;
      }
      avail = strm.avail_in;
      next = strm.next_in;
      input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s2);
      while (s2.lookahead >= MIN_MATCH) {
        str = s2.strstart;
        n2 = s2.lookahead - (MIN_MATCH - 1);
        do {
          s2.ins_h = (s2.ins_h << s2.hash_shift ^ s2.window[str + MIN_MATCH - 1]) & s2.hash_mask;
          s2.prev[str & s2.w_mask] = s2.head[s2.ins_h];
          s2.head[s2.ins_h] = str;
          str++;
        } while (--n2);
        s2.strstart = str;
        s2.lookahead = MIN_MATCH - 1;
        fill_window(s2);
      }
      s2.strstart += s2.lookahead;
      s2.block_start = s2.strstart;
      s2.insert = s2.lookahead;
      s2.lookahead = 0;
      s2.match_length = s2.prev_length = MIN_MATCH - 1;
      s2.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s2.wrap = wrap;
      return Z_OK;
    }
    exports.deflateInit = deflateInit;
    exports.deflateInit2 = deflateInit2;
    exports.deflateReset = deflateReset;
    exports.deflateResetKeep = deflateResetKeep;
    exports.deflateSetHeader = deflateSetHeader;
    exports.deflate = deflate2;
    exports.deflateEnd = deflateEnd;
    exports.deflateSetDictionary = deflateSetDictionary;
    exports.deflateInfo = "pako deflate (from Nodeca project)";
  }
});

// ../../node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "../../node_modules/pako/lib/utils/strings.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var utils = require_common();
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (__) {
      STR_APPLY_OK = false;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new utils.Buf8(256);
    for (q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    var q;
    _utf8len[254] = _utf8len[254] = 1;
    exports.string2buf = function(str) {
      var buf, c, c2, m_pos, i2, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new utils.Buf8(buf_len);
      for (i2 = 0, m_pos = 0; i2 < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i2++] = c;
        } else if (c < 2048) {
          buf[i2++] = 192 | c >>> 6;
          buf[i2++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i2++] = 224 | c >>> 12;
          buf[i2++] = 128 | c >>> 6 & 63;
          buf[i2++] = 128 | c & 63;
        } else {
          buf[i2++] = 240 | c >>> 18;
          buf[i2++] = 128 | c >>> 12 & 63;
          buf[i2++] = 128 | c >>> 6 & 63;
          buf[i2++] = 128 | c & 63;
        }
      }
      return buf;
    };
    function buf2binstring(buf, len) {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
        }
      }
      var result = "";
      for (var i2 = 0; i2 < len; i2++) {
        result += String.fromCharCode(buf[i2]);
      }
      return result;
    }
    exports.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    exports.binstring2buf = function(str) {
      var buf = new utils.Buf8(str.length);
      for (var i2 = 0, len = buf.length; i2 < len; i2++) {
        buf[i2] = str.charCodeAt(i2);
      }
      return buf;
    };
    exports.buf2string = function(buf, max) {
      var i2, out, c, c_len;
      var len = max || buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i2 = 0; i2 < len; ) {
        c = buf[i2++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i2 += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i2 < len) {
          c = c << 6 | buf[i2++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    exports.utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
  }
});

// ../../node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "../../node_modules/pako/lib/zlib/zstream.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    module.exports = ZStream;
  }
});

// ../../node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "../../node_modules/pako/lib/deflate.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var Z_NO_FLUSH = 0;
    var Z_FINISH = 4;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_SYNC_FLUSH = 2;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_DEFLATED = 8;
    function Deflate(options) {
      if (!(this instanceof Deflate))
        return new Deflate(options);
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        var dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        this._dict_set = true;
      }
    }
    Deflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status, _mode;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_deflate.deflate(strm, _mode);
        if (status !== Z_STREAM_END && status !== Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
      if (_mode === Z_FINISH) {
        status = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK;
      }
      if (_mode === Z_SYNC_FLUSH) {
        this.onEnd(Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk2) {
      this.chunks.push(chunk2);
    };
    Deflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function deflate2(input, options) {
      var deflator = new Deflate(options);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate2(input, options);
    }
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate2(input, options);
    }
    exports.Deflate = Deflate;
    exports.deflate = deflate2;
    exports.deflateRaw = deflateRaw;
    exports.gzip = gzip;
  }
});

// ../../node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "../../node_modules/pako/lib/zlib/inffast.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    var BAD = 30;
    var TYPE = 12;
    module.exports = function inflate_fast(strm, start2) {
      var state;
      var _in;
      var last;
      var _out;
      var beg;
      var end;
      var dmax;
      var wsize;
      var whave;
      var wnext;
      var s_window;
      var hold;
      var bits;
      var lcode;
      var dcode;
      var lmask;
      var dmask;
      var here;
      var op;
      var len;
      var dist;
      var from3;
      var from_source;
      var input, output;
      state = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start2 - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state.dmax;
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state.sane) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                          }
                        }
                        from3 = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from3 += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from3++];
                            } while (--op);
                            from3 = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from3 += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from3++];
                            } while (--op);
                            from3 = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from3++];
                              } while (--op);
                              from3 = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from3 += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from3++];
                            } while (--op);
                            from3 = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from3++];
                          output[_out++] = from_source[from3++];
                          output[_out++] = from_source[from3++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from3++];
                          if (len > 1) {
                            output[_out++] = from_source[from3++];
                          }
                        }
                      } else {
                        from3 = _out - dist;
                        do {
                          output[_out++] = output[from3++];
                          output[_out++] = output[from3++];
                          output[_out++] = output[from3++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from3++];
                          if (len > 1) {
                            output[_out++] = output[from3++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
              }
              break;
            }
        } while (_in < last && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state.hold = hold;
      state.bits = bits;
      return;
    };
  }
});

// ../../node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "../../node_modules/pako/lib/zlib/inftrees.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    var utils = require_common();
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES2 = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = [
      /* Length codes 257..285 base */
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ];
    var lext = [
      /* Length codes 257..285 extra */
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ];
    var dbase = [
      /* Distance codes 0..29 base */
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ];
    var dext = [
      /* Distance codes 0..29 extra */
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
    module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
      var bits = opts.bits;
      var len = 0;
      var sym = 0;
      var min = 0, max = 0;
      var root = 0;
      var curr = 0;
      var drop = 0;
      var left = 0;
      var used = 0;
      var huff = 0;
      var incr;
      var fill;
      var low;
      var mask;
      var next;
      var base = null;
      var base_index = 0;
      var end;
      var count = new utils.Buf16(MAXBITS + 1);
      var offs = new utils.Buf16(MAXBITS + 1);
      var extra = null;
      var extra_index = 0;
      var here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES2 || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES2) {
        base = extra = work;
        end = 19;
      } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
      } else {
        base = dbase;
        extra = dext;
        end = -1;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          }
          low = huff & mask;
          table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
      }
      if (huff !== 0) {
        table[next + huff] = len - drop << 24 | 64 << 16 | 0;
      }
      opts.bits = root;
      return 0;
    };
  }
});

// ../../node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "../../node_modules/pako/lib/zlib/inflate.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var utils = require_common();
    var adler32 = require_adler32();
    var crc32 = require_crc322();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES2 = 0;
    var LENS = 1;
    var DISTS = 2;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_TREES = 6;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_NEED_DICT = 2;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_MEM_ERROR = -4;
    var Z_BUF_ERROR = -5;
    var Z_DEFLATED = 8;
    var HEAD = 1;
    var FLAGS = 2;
    var TIME = 3;
    var OS = 4;
    var EXLEN = 5;
    var EXTRA = 6;
    var NAME = 7;
    var COMMENT = 8;
    var HCRC = 9;
    var DICTID = 10;
    var DICT = 11;
    var TYPE = 12;
    var TYPEDO = 13;
    var STORED = 14;
    var COPY_ = 15;
    var COPY = 16;
    var TABLE = 17;
    var LENLENS = 18;
    var CODELENS = 19;
    var LEN_ = 20;
    var LEN = 21;
    var LENEXT = 22;
    var DIST = 23;
    var DISTEXT = 24;
    var MATCH = 25;
    var LIT = 26;
    var CHECK = 27;
    var LENGTH = 28;
    var DONE = 29;
    var BAD = 30;
    var MEM = 31;
    var SYNC = 32;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    function zswap32(q) {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    }
    function InflateState() {
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new utils.Buf16(320);
      this.work = new utils.Buf16(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    function inflateResetKeep(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = "";
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
      state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    }
    function inflateReset(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    }
    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }
    function inflateInit2(strm, windowBits) {
      var ret;
      var state;
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      state = new InflateState();
      strm.state = state;
      state.window = null;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    var virgin = true;
    var lenfix;
    var distfix;
    function fixedtables(state) {
      if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        }
        while (sym < 256) {
          state.lens[sym++] = 9;
        }
        while (sym < 280) {
          state.lens[sym++] = 7;
        }
        while (sym < 288) {
          state.lens[sym++] = 8;
        }
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        }
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
      }
      if (copy >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        utils.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
          utils.arraySet(state.window, src, end - copy, copy, 0);
          state.wnext = copy;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          }
          if (state.whave < state.wsize) {
            state.whave += dist;
          }
        }
      }
      return 0;
    }
    function inflate2(strm, flush) {
      var state;
      var input, output;
      var next;
      var put;
      var have, left;
      var hold;
      var bits;
      var _in, _out;
      var copy;
      var from3;
      var from_source;
      var here = 0;
      var here_bits, here_op, here_val;
      var last_bits, last_op, last_val;
      var len;
      var ret;
      var hbuf = new utils.Buf8(4);
      var opts;
      var n2;
      var order = (
        /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      );
      if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 2 && hold === 35615) {
                state.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state.mode = FLAGS;
                break;
              }
              state.flags = 0;
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << len;
              strm.adler = state.check = 1;
              state.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
              break;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.flags = hold;
              if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              if (state.flags & 57344) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = TIME;
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc32(state.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = OS;
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = EXLEN;
            case EXLEN:
              if (state.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
              } else if (state.head) {
                state.head.extra = null;
              }
              state.mode = EXTRA;
            case EXTRA:
              if (state.flags & 1024) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      state.head.extra = new Array(state.head.extra_len);
                    }
                    utils.arraySet(
                      state.head.extra,
                      input,
                      next,
                      // extra field is limited to 65536 bytes
                      // - no need for additional size check
                      copy,
                      /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                      len
                    );
                  }
                  if (state.flags & 512) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            case NAME:
              if (state.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            case COMMENT:
              if (state.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            case HCRC:
              if (state.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              strm.adler = state.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state.mode = DICT;
            case DICT:
              if (state.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1;
              state.mode = TYPE;
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            case TYPEDO:
              if (state.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state.mode = STORED;
                  break;
                case 1:
                  fixedtables(state);
                  state.mode = LEN_;
                  if (flush === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  }
                  break;
                case 2:
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
              }
              state.length = hold & 65535;
              hold = 0;
              bits = 0;
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            case COPY_:
              state.mode = COPY;
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                utils.arraySet(output, input, next, copy, put);
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              state.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = LENLENS;
            case LENLENS:
              while (state.have < state.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.lens[order[state.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = { bits: state.lenbits };
              ret = inflate_table(CODES2, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = CODELENS;
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n2 = here_bits + 2;
                    while (bits < n2) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n2 = here_bits + 3;
                    while (bits < n2) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n2 = here_bits + 7;
                    while (bits < n2) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              if (state.mode === BAD) {
                break;
              }
              if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
              }
              state.lenbits = 9;
              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
              }
              state.distbits = 6;
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              state.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
              }
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            case LEN_:
              state.mode = LEN;
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            case LENEXT:
              if (state.extra) {
                n2 = state.extra;
                while (bits < n2) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              state.was = state.length;
              state.mode = DIST;
            case DIST:
              for (; ; ) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            case DISTEXT:
              if (state.extra) {
                n2 = state.extra;
                while (bits < n2) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.offset += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
              state.mode = MATCH;
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break;
                  }
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from3 = state.wsize - copy;
                } else {
                  from3 = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                from_source = output;
                from3 = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from3++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) {
                  strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = "incorrect data check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = LENGTH;
            case LENGTH:
              if (state.wrap && state.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = DONE;
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            default:
              return Z_STREAM_ERROR;
          }
        }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
        state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    function inflateEnd(strm) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    function inflateGetHeader(strm, head) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    }
    function inflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var state;
      var dictid;
      var ret;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
        }
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      return Z_OK;
    }
    exports.inflateReset = inflateReset;
    exports.inflateReset2 = inflateReset2;
    exports.inflateResetKeep = inflateResetKeep;
    exports.inflateInit = inflateInit;
    exports.inflateInit2 = inflateInit2;
    exports.inflate = inflate2;
    exports.inflateEnd = inflateEnd;
    exports.inflateGetHeader = inflateGetHeader;
    exports.inflateSetDictionary = inflateSetDictionary;
    exports.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// ../../node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS({
  "../../node_modules/pako/lib/zlib/constants.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    module.exports = {
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      /* compression levels */
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      /* The deflate compression method */
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// ../../node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "../../node_modules/pako/lib/zlib/gzheader.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    module.exports = GZheader;
  }
});

// ../../node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "../../node_modules/pako/lib/inflate.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var c = require_constants();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    function Inflate(options) {
      if (!(this instanceof Inflate))
        return new Inflate(options);
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
          status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== c.Z_OK) {
            throw new Error(msg[status]);
          }
        }
      }
    }
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var dictionary = this.options.dictionary;
      var status, _mode;
      var next_out_utf8, tail, utf8str;
      var allowBufError = false;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status === c.Z_NEED_DICT && dictionary) {
          status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        }
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
          status = c.Z_OK;
          allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
            if (this.options.to === "string") {
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) {
                utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
              }
              this.onData(utf8str);
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
      if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
      }
      if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk2) {
      this.chunks.push(chunk2);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === c.Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate2(input, options) {
      var inflator = new Inflate(options);
      inflator.push(input, true);
      if (inflator.err) {
        throw inflator.msg || msg[inflator.err];
      }
      return inflator.result;
    }
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate2(input, options);
    }
    exports.Inflate = Inflate;
    exports.inflate = inflate2;
    exports.inflateRaw = inflateRaw;
    exports.ungzip = inflate2;
  }
});

// ../../node_modules/pako/index.js
var require_pako = __commonJS({
  "../../node_modules/pako/index.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    var assign = require_common().assign;
    var deflate2 = require_deflate2();
    var inflate2 = require_inflate2();
    var constants = require_constants();
    var pako = {};
    assign(pako, deflate2, inflate2, constants);
    module.exports = pako;
  }
});

// ../../node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "../../node_modules/lodash.throttle/index.js"(exports, module) {
    init_define_import_meta_env();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle2;
  }
});

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    init_define_import_meta_env();
    module.exports = React;
  }
});

// ../../node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "../../node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    if (true) {
      (function() {
        "use strict";
        var React3 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
                c--;
              }
              for (; s2 >= 1 && c >= 0; s2--, c--) {
                if (sampleLines[s2] !== controlLines[c]) {
                  if (s2 !== 1 || c !== 1) {
                    do {
                      s2--;
                      c--;
                      if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a2) {
          return isArrayImpl(a2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx2 = jsxWithValidationDynamic;
        var jsxs2 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx2;
        exports.jsxs = jsxs2;
      })();
    }
  }
});

// ../../node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_define_import_meta_env();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// ../../node_modules/@braintree/sanitize-url/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@braintree/sanitize-url/dist/index.js"(exports) {
    "use strict";
    init_define_import_meta_env();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sanitizeUrl = void 0;
    var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
    var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    var htmlCtrlEntityRegex = /&(newline|tab);/gi;
    var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    var urlSchemeRegex = /^.+(:|&colon;)/gim;
    var relativeFirstCharacters = [".", "/"];
    function isRelativeUrlWithoutProtocol(url) {
      return relativeFirstCharacters.indexOf(url[0]) > -1;
    }
    function decodeHtmlCharacters(str) {
      return str.replace(htmlEntitiesRegex, function(match, dec) {
        return String.fromCharCode(dec);
      });
    }
    function sanitizeUrl2(url) {
      var sanitizedUrl = decodeHtmlCharacters(url || "").replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
      if (!sanitizedUrl) {
        return "about:blank";
      }
      if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
      }
      var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
      if (!urlSchemeParseResults) {
        return sanitizedUrl;
      }
      var urlScheme = urlSchemeParseResults[0];
      if (invalidProtocolRegex.test(urlScheme)) {
        return "about:blank";
      }
      return sanitizedUrl;
    }
    exports.sanitizeUrl = sanitizeUrl2;
  }
});

// data/image.ts
init_define_import_meta_env();
var import_png_chunks_extract = __toESM(require_png_chunks_extract(), 1);
var import_png_chunk_text = __toESM(require_png_chunk_text(), 1);
var import_png_chunks_encode = __toESM(require_png_chunks_encode(), 1);

// data/encode.ts
init_define_import_meta_env();
var import_pako = __toESM(require_pako(), 1);

// data/encryption.ts
init_define_import_meta_env();

// constants.ts
init_define_import_meta_env();

// css/variables.module.scss
var variables_module_default = {};

// colors.ts
init_define_import_meta_env();

// ../../node_modules/open-color/open-color.json
var open_color_default = {
  white: "#ffffff",
  black: "#000000",
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

// colors.ts
var pick = (source, keys) => {
  return keys.reduce((acc, key) => {
    if (key in source) {
      acc[key] = source[key];
    }
    return acc;
  }, {});
};
var MAX_CUSTOM_COLORS_USED_IN_CANVAS = 5;
var COLORS_PER_ROW = 5;
var DEFAULT_CHART_COLOR_INDEX = 4;
var DEFAULT_ELEMENT_STROKE_COLOR_INDEX = 4;
var DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX = 1;
var ELEMENTS_PALETTE_SHADE_INDEXES = [0, 2, 4, 6, 8];
var getSpecificColorShades = (color, indexArr) => {
  return indexArr.map((index) => open_color_default[color][index]);
};
var COLOR_PALETTE = {
  transparent: "transparent",
  black: "#1e1e1e",
  white: "#ffffff",
  // open-colors
  gray: getSpecificColorShades("gray", ELEMENTS_PALETTE_SHADE_INDEXES),
  red: getSpecificColorShades("red", ELEMENTS_PALETTE_SHADE_INDEXES),
  pink: getSpecificColorShades("pink", ELEMENTS_PALETTE_SHADE_INDEXES),
  grape: getSpecificColorShades("grape", ELEMENTS_PALETTE_SHADE_INDEXES),
  violet: getSpecificColorShades("violet", ELEMENTS_PALETTE_SHADE_INDEXES),
  blue: getSpecificColorShades("blue", ELEMENTS_PALETTE_SHADE_INDEXES),
  cyan: getSpecificColorShades("cyan", ELEMENTS_PALETTE_SHADE_INDEXES),
  teal: getSpecificColorShades("teal", ELEMENTS_PALETTE_SHADE_INDEXES),
  green: getSpecificColorShades("green", ELEMENTS_PALETTE_SHADE_INDEXES),
  yellow: getSpecificColorShades("yellow", ELEMENTS_PALETTE_SHADE_INDEXES),
  orange: getSpecificColorShades("orange", ELEMENTS_PALETTE_SHADE_INDEXES),
  // radix bronze shades 3,5,7,9,11
  bronze: ["#f8f1ee", "#eaddd7", "#d2bab0", "#a18072", "#846358"]
};
var COMMON_ELEMENT_SHADES = pick(COLOR_PALETTE, [
  "cyan",
  "blue",
  "violet",
  "grape",
  "pink",
  "green",
  "teal",
  "yellow",
  "orange",
  "red"
]);
var DEFAULT_ELEMENT_STROKE_PICKS = [
  COLOR_PALETTE.black,
  COLOR_PALETTE.red[DEFAULT_ELEMENT_STROKE_COLOR_INDEX],
  COLOR_PALETTE.green[DEFAULT_ELEMENT_STROKE_COLOR_INDEX],
  COLOR_PALETTE.blue[DEFAULT_ELEMENT_STROKE_COLOR_INDEX],
  COLOR_PALETTE.yellow[DEFAULT_ELEMENT_STROKE_COLOR_INDEX]
];
var DEFAULT_ELEMENT_BACKGROUND_PICKS = [
  COLOR_PALETTE.transparent,
  COLOR_PALETTE.red[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX],
  COLOR_PALETTE.green[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX],
  COLOR_PALETTE.blue[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX],
  COLOR_PALETTE.yellow[DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX]
];
var DEFAULT_CANVAS_BACKGROUND_PICKS = [
  COLOR_PALETTE.white,
  // radix slate2
  "#f8f9fa",
  // radix blue2
  "#f5faff",
  // radix yellow2
  "#fffce8",
  // radix bronze2
  "#fdf8f6"
];
var DEFAULT_ELEMENT_STROKE_COLOR_PALETTE = {
  // 1st row
  transparent: COLOR_PALETTE.transparent,
  white: COLOR_PALETTE.white,
  gray: COLOR_PALETTE.gray,
  black: COLOR_PALETTE.black,
  bronze: COLOR_PALETTE.bronze,
  // rest
  ...COMMON_ELEMENT_SHADES
};
var DEFAULT_ELEMENT_BACKGROUND_COLOR_PALETTE = {
  transparent: COLOR_PALETTE.transparent,
  white: COLOR_PALETTE.white,
  gray: COLOR_PALETTE.gray,
  black: COLOR_PALETTE.black,
  bronze: COLOR_PALETTE.bronze,
  ...COMMON_ELEMENT_SHADES
};
var getAllColorsSpecificShade = (index) => [
  // 2nd row
  COLOR_PALETTE.cyan[index],
  COLOR_PALETTE.blue[index],
  COLOR_PALETTE.violet[index],
  COLOR_PALETTE.grape[index],
  COLOR_PALETTE.pink[index],
  // 3rd row
  COLOR_PALETTE.green[index],
  COLOR_PALETTE.teal[index],
  COLOR_PALETTE.yellow[index],
  COLOR_PALETTE.orange[index],
  COLOR_PALETTE.red[index]
];
var rgbToHex = (r, g, b2) => `#${((1 << 24) + (r << 16) + (g << 8) + b2).toString(16).slice(1)}`;

// constants.ts
var isDarwin = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var isWindows = /^Win/.test(navigator.platform);
var isAndroid = /\b(android)\b/i.test(navigator.userAgent);
var isFirefox = "netscape" in window && navigator.userAgent.indexOf("rv:") > 1 && navigator.userAgent.indexOf("Gecko") > 1;
var isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
var isSafari = !isChrome && navigator.userAgent.indexOf("Safari") !== -1;
var isIOS = /iPad|iPhone/.test(navigator.platform) || // iPadOS 13+
navigator.userAgent.includes("Mac") && "ontouchend" in document;
var isBrave = () => navigator.brave?.isBrave?.name === "isBrave";
var supportsResizeObserver = typeof window !== "undefined" && "ResizeObserver" in window;
var APP_NAME = "Excalidraw";
var TEXT_AUTOWRAP_THRESHOLD = 36;
var DRAGGING_THRESHOLD = 10;
var LINE_CONFIRM_THRESHOLD = 8;
var ELEMENT_SHIFT_TRANSLATE_AMOUNT = 5;
var ELEMENT_TRANSLATE_AMOUNT = 1;
var TEXT_TO_CENTER_SNAP_THRESHOLD = 30;
var SHIFT_LOCKING_ANGLE = Math.PI / 12;
var DEFAULT_LASER_COLOR = "red";
var CURSOR_TYPE = {
  TEXT: "text",
  CROSSHAIR: "crosshair",
  GRABBING: "grabbing",
  GRAB: "grab",
  POINTER: "pointer",
  MOVE: "move",
  AUTO: ""
};
var POINTER_BUTTON = {
  MAIN: 0,
  WHEEL: 1,
  SECONDARY: 2,
  TOUCH: -1,
  ERASER: 5
};
var POINTER_EVENTS = {
  enabled: "all",
  disabled: "none",
  // asserted as any so it can be freely assigned to React Element
  // "pointerEnvets" CSS prop
  inheritFromUI: "var(--ui-pointerEvents)"
};
var YOUTUBE_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var ENV = {
  TEST: "test",
  DEVELOPMENT: "development"
};
var CLASSES = {
  SHAPE_ACTIONS_MENU: "App-menu__left",
  ZOOM_ACTIONS: "zoom-actions",
  SEARCH_MENU_INPUT_WRAPPER: "layer-ui__search-inputWrapper"
};
var FONT_FAMILY = {
  Virgil: 1,
  Helvetica: 2,
  Cascadia: 3,
  // leave 4 unused as it was historically used for Assistant (which we don't use anymore) or custom font (Obsidian)
  Excalifont: 5,
  Nunito: 6,
  "Lilita One": 7,
  "Comic Shanns": 8,
  "Liberation Sans": 9
};
var THEME = {
  LIGHT: "light",
  DARK: "dark"
};
var FRAME_STYLE = {
  strokeColor: "#bbb",
  strokeWidth: 2,
  strokeStyle: "solid",
  fillStyle: "solid",
  roughness: 0,
  roundness: null,
  backgroundColor: "transparent",
  radius: 8,
  nameOffsetY: 3,
  nameColorLightTheme: "#999999",
  nameColorDarkTheme: "#7a7a7a",
  nameFontSize: 14,
  nameLineHeight: 1.25
};
var WINDOWS_EMOJI_FALLBACK_FONT = "Segoe UI Emoji";
var MIN_FONT_SIZE = 1;
var DEFAULT_FONT_SIZE = 20;
var DEFAULT_FONT_FAMILY = FONT_FAMILY.Excalifont;
var DEFAULT_TEXT_ALIGN = "left";
var DEFAULT_VERTICAL_ALIGN = "top";
var DEFAULT_TRANSFORM_HANDLE_SPACING = 2;
var SIDE_RESIZING_THRESHOLD = 2 * DEFAULT_TRANSFORM_HANDLE_SPACING;
var EPSILON = 1e-5;
var DEFAULT_COLLISION_THRESHOLD = 2 * SIDE_RESIZING_THRESHOLD - EPSILON;
var COLOR_WHITE = "#ffffff";
var COLOR_CHARCOAL_BLACK = "#1e1e1e";
var COLOR_VOICE_CALL = "#a2f1a6";
var DEFAULT_GRID_SIZE = 20;
var DEFAULT_GRID_STEP = 5;
var IMAGE_MIME_TYPES = {
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  bmp: "image/bmp",
  ico: "image/x-icon",
  avif: "image/avif",
  jfif: "image/jfif"
};
var ALLOWED_PASTE_MIME_TYPES = ["text/plain", "text/html"];
var MIME_TYPES = {
  json: "application/json",
  // excalidraw data
  excalidraw: "application/vnd.excalidraw+json",
  excalidrawlib: "application/vnd.excalidrawlib+json",
  // image-encoded excalidraw data
  "excalidraw.svg": "image/svg+xml",
  "excalidraw.png": "image/png",
  // binary
  binary: "application/octet-stream",
  // image
  ...IMAGE_MIME_TYPES
};
var EXPORT_IMAGE_TYPES = {
  png: "png",
  svg: "svg",
  clipboard: "clipboard"
};
var EXPORT_DATA_TYPES = {
  excalidraw: "excalidraw",
  excalidrawClipboard: "excalidraw/clipboard",
  excalidrawLibrary: "excalidrawlib",
  excalidrawClipboardWithAPI: "excalidraw-api/clipboard"
};
var EXPORT_SOURCE = window.EXCALIDRAW_EXPORT_SOURCE || window.location.origin;
var IMAGE_RENDER_TIMEOUT = 500;
var TAP_TWICE_TIMEOUT = 300;
var TOUCH_CTX_MENU_TIMEOUT = 500;
var SCROLL_TIMEOUT = 100;
var ZOOM_STEP = 0.1;
var MIN_ZOOM = 0.1;
var MAX_ZOOM = 30;
var HYPERLINK_TOOLTIP_DELAY = 300;
var THEME_FILTER = variables_module_default.themeFilter;
var URL_QUERY_KEYS = {
  addLibrary: "addLibrary"
};
var URL_HASH_KEYS = {
  addLibrary: "addLibrary"
};
var DEFAULT_UI_OPTIONS = {
  canvasActions: {
    changeViewBackgroundColor: true,
    clearCanvas: true,
    export: { saveFileToDisk: true },
    loadScene: true,
    saveToActiveFile: true,
    toggleTheme: null,
    saveAsImage: true
  },
  tools: {
    image: true
  }
};
var MQ_MAX_WIDTH_PORTRAIT = 730;
var MQ_MAX_WIDTH_LANDSCAPE = 1e3;
var MQ_MAX_HEIGHT_LANDSCAPE = 500;
var MQ_RIGHT_SIDEBAR_MIN_WIDTH = 1229;
var LIBRARY_SIDEBAR_WIDTH = parseInt(variables_module_default.rightSidebarWidth);
var MAX_DECIMALS_FOR_SVG_EXPORT = 2;
var EXPORT_SCALES = [1, 2, 3];
var DEFAULT_EXPORT_PADDING = 10;
var DEFAULT_MAX_IMAGE_WIDTH_OR_HEIGHT = 1440;
var MAX_ALLOWED_FILE_BYTES = 4 * 1024 * 1024;
var SVG_NS = "http://www.w3.org/2000/svg";
var VERSIONS = {
  excalidraw: 2,
  excalidrawLibrary: 2
};
var BOUND_TEXT_PADDING = 5;
var ARROW_LABEL_WIDTH_FRACTION = 0.7;
var ARROW_LABEL_FONT_SIZE_TO_MIN_WIDTH_RATIO = 11;
var VERTICAL_ALIGN = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom"
};
var TEXT_ALIGN = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
};
var ELEMENT_READY_TO_ERASE_OPACITY = 20;
var DEFAULT_PROPORTIONAL_RADIUS = 0.25;
var DEFAULT_ADAPTIVE_RADIUS = 32;
var ROUNDNESS = {
  // Used for legacy rounding (rectangles), which currently works the same
  // as PROPORTIONAL_RADIUS, but we need to differentiate for UI purposes and
  // forwards-compat.
  LEGACY: 1,
  // Used for linear elements & diamonds
  PROPORTIONAL_RADIUS: 2,
  // Current default algorithm for rectangles, using fixed pixel radius.
  // It's working similarly to a regular border-radius, but attemps to make
  // radius visually similar across differnt element sizes, especially
  // very large and very small elements.
  //
  // NOTE right now we don't allow configuration and use a constant radius
  // (see DEFAULT_ADAPTIVE_RADIUS constant)
  ADAPTIVE_RADIUS: 3
};
var ROUGHNESS = {
  architect: 0,
  artist: 1,
  cartoonist: 2
};
var STROKE_WIDTH = {
  thin: 1,
  bold: 2,
  extraBold: 4
};
var DEFAULT_ELEMENT_PROPS = {
  strokeColor: COLOR_PALETTE.black,
  backgroundColor: COLOR_PALETTE.transparent,
  fillStyle: "solid",
  strokeWidth: 2,
  strokeStyle: "solid",
  roughness: ROUGHNESS.artist,
  opacity: 100,
  locked: false
};
var LIBRARY_SIDEBAR_TAB = "library";
var CANVAS_SEARCH_TAB = "search";
var DEFAULT_SIDEBAR = {
  name: "default",
  defaultTab: LIBRARY_SIDEBAR_TAB
};
var LIBRARY_DISABLED_TYPES = /* @__PURE__ */ new Set([
  "iframe",
  "embeddable",
  "image"
]);
var TOOL_TYPE = {
  selection: "selection",
  rectangle: "rectangle",
  diamond: "diamond",
  ellipse: "ellipse",
  arrow: "arrow",
  line: "line",
  freedraw: "freedraw",
  text: "text",
  image: "image",
  eraser: "eraser",
  hand: "hand",
  frame: "frame",
  magicframe: "magicframe",
  embeddable: "embeddable",
  laser: "laser"
};
var EDITOR_LS_KEYS = {
  OAI_API_KEY: "excalidraw-oai-api-key",
  // legacy naming (non)scheme
  MERMAID_TO_EXCALIDRAW: "mermaid-to-excalidraw",
  PUBLISH_LIBRARY: "publish-library-data"
};
var DEFAULT_FILENAME = "Untitled";
var STATS_PANELS = { generalStats: 1, elementProperties: 2 };
var MIN_WIDTH_OR_HEIGHT = 1;
var ARROW_TYPE = {
  sharp: "sharp",
  round: "round",
  elbow: "elbow"
};

// data/blob.ts
init_define_import_meta_env();

// node_modules/nanoid/index.browser.js
init_define_import_meta_env();

// node_modules/nanoid/url-alphabet/index.js
init_define_import_meta_env();

// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// appState.ts
init_define_import_meta_env();
var defaultExportScale = EXPORT_SCALES.includes(devicePixelRatio) ? devicePixelRatio : 1;
var getDefaultAppState = () => {
  return {
    showWelcomeScreen: false,
    theme: THEME.LIGHT,
    collaborators: /* @__PURE__ */ new Map(),
    currentChartType: "bar",
    currentItemBackgroundColor: DEFAULT_ELEMENT_PROPS.backgroundColor,
    currentItemEndArrowhead: "arrow",
    currentItemFillStyle: DEFAULT_ELEMENT_PROPS.fillStyle,
    currentItemFontFamily: DEFAULT_FONT_FAMILY,
    currentItemFontSize: DEFAULT_FONT_SIZE,
    currentItemOpacity: DEFAULT_ELEMENT_PROPS.opacity,
    currentItemRoughness: DEFAULT_ELEMENT_PROPS.roughness,
    currentItemStartArrowhead: null,
    currentItemStrokeColor: DEFAULT_ELEMENT_PROPS.strokeColor,
    currentItemRoundness: "round",
    currentItemArrowType: ARROW_TYPE.round,
    currentItemStrokeStyle: DEFAULT_ELEMENT_PROPS.strokeStyle,
    currentItemStrokeWidth: DEFAULT_ELEMENT_PROPS.strokeWidth,
    currentItemTextAlign: DEFAULT_TEXT_ALIGN,
    currentHoveredFontFamily: null,
    cursorButton: "up",
    activeEmbeddable: null,
    newElement: null,
    editingTextElement: null,
    editingGroupId: null,
    editingLinearElement: null,
    activeTool: {
      type: "selection",
      customType: null,
      locked: DEFAULT_ELEMENT_PROPS.locked,
      lastActiveTool: null
    },
    penMode: false,
    penDetected: false,
    errorMessage: null,
    exportBackground: true,
    exportScale: defaultExportScale,
    exportEmbedScene: false,
    exportWithDarkMode: false,
    fileHandle: null,
    gridSize: DEFAULT_GRID_SIZE,
    gridStep: DEFAULT_GRID_STEP,
    gridModeEnabled: false,
    isBindingEnabled: true,
    defaultSidebarDockedPreference: false,
    isLoading: false,
    isResizing: false,
    isRotating: false,
    lastPointerDownWith: "mouse",
    multiElement: null,
    name: null,
    contextMenu: null,
    openMenu: null,
    openPopup: null,
    openSidebar: null,
    openDialog: null,
    pasteDialog: { shown: false, data: null },
    previousSelectedElementIds: {},
    resizingElement: null,
    scrolledOutside: false,
    scrollX: 0,
    scrollY: 0,
    selectedElementIds: {},
    selectedGroupIds: {},
    selectedElementsAreBeingDragged: false,
    selectionElement: null,
    shouldCacheIgnoreZoom: false,
    stats: {
      open: false,
      panels: STATS_PANELS.generalStats | STATS_PANELS.elementProperties
    },
    startBoundElement: null,
    suggestedBindings: [],
    frameRendering: { enabled: true, clip: true, name: true, outline: true },
    frameToHighlight: null,
    editingFrame: null,
    elementsToHighlight: null,
    toast: null,
    viewBackgroundColor: COLOR_PALETTE.white,
    zenModeEnabled: false,
    zoom: {
      value: 1
    },
    viewModeEnabled: false,
    pendingImageElementId: null,
    showHyperlinkPopup: false,
    selectedLinearElement: null,
    snapLines: [],
    originSnapOffset: {
      x: 0,
      y: 0
    },
    objectsSnapModeEnabled: false,
    userToFollow: null,
    followedBy: /* @__PURE__ */ new Set(),
    searchMatches: []
  };
};
var APP_STATE_STORAGE_CONF = /* @__PURE__ */ ((config) => config)({
  showWelcomeScreen: { browser: true, export: false, server: false },
  theme: { browser: true, export: false, server: false },
  collaborators: { browser: false, export: false, server: false },
  currentChartType: { browser: true, export: false, server: false },
  currentItemBackgroundColor: { browser: true, export: false, server: false },
  currentItemEndArrowhead: { browser: true, export: false, server: false },
  currentItemFillStyle: { browser: true, export: false, server: false },
  currentItemFontFamily: { browser: true, export: false, server: false },
  currentItemFontSize: { browser: true, export: false, server: false },
  currentItemRoundness: {
    browser: true,
    export: false,
    server: false
  },
  currentItemArrowType: {
    browser: true,
    export: false,
    server: false
  },
  currentItemOpacity: { browser: true, export: false, server: false },
  currentItemRoughness: { browser: true, export: false, server: false },
  currentItemStartArrowhead: { browser: true, export: false, server: false },
  currentItemStrokeColor: { browser: true, export: false, server: false },
  currentItemStrokeStyle: { browser: true, export: false, server: false },
  currentItemStrokeWidth: { browser: true, export: false, server: false },
  currentItemTextAlign: { browser: true, export: false, server: false },
  currentHoveredFontFamily: { browser: false, export: false, server: false },
  cursorButton: { browser: true, export: false, server: false },
  activeEmbeddable: { browser: false, export: false, server: false },
  newElement: { browser: false, export: false, server: false },
  editingTextElement: { browser: false, export: false, server: false },
  editingGroupId: { browser: true, export: false, server: false },
  editingLinearElement: { browser: false, export: false, server: false },
  activeTool: { browser: true, export: false, server: false },
  penMode: { browser: true, export: false, server: false },
  penDetected: { browser: true, export: false, server: false },
  errorMessage: { browser: false, export: false, server: false },
  exportBackground: { browser: true, export: false, server: false },
  exportEmbedScene: { browser: true, export: false, server: false },
  exportScale: { browser: true, export: false, server: false },
  exportWithDarkMode: { browser: true, export: false, server: false },
  fileHandle: { browser: false, export: false, server: false },
  gridSize: { browser: true, export: true, server: true },
  gridStep: { browser: true, export: true, server: true },
  gridModeEnabled: { browser: true, export: true, server: true },
  height: { browser: false, export: false, server: false },
  isBindingEnabled: { browser: false, export: false, server: false },
  defaultSidebarDockedPreference: {
    browser: true,
    export: false,
    server: false
  },
  isLoading: { browser: false, export: false, server: false },
  isResizing: { browser: false, export: false, server: false },
  isRotating: { browser: false, export: false, server: false },
  lastPointerDownWith: { browser: true, export: false, server: false },
  multiElement: { browser: false, export: false, server: false },
  name: { browser: true, export: false, server: false },
  offsetLeft: { browser: false, export: false, server: false },
  offsetTop: { browser: false, export: false, server: false },
  contextMenu: { browser: false, export: false, server: false },
  openMenu: { browser: true, export: false, server: false },
  openPopup: { browser: false, export: false, server: false },
  openSidebar: { browser: true, export: false, server: false },
  openDialog: { browser: false, export: false, server: false },
  pasteDialog: { browser: false, export: false, server: false },
  previousSelectedElementIds: { browser: true, export: false, server: false },
  resizingElement: { browser: false, export: false, server: false },
  scrolledOutside: { browser: true, export: false, server: false },
  scrollX: { browser: true, export: false, server: false },
  scrollY: { browser: true, export: false, server: false },
  selectedElementIds: { browser: true, export: false, server: false },
  selectedGroupIds: { browser: true, export: false, server: false },
  selectedElementsAreBeingDragged: {
    browser: false,
    export: false,
    server: false
  },
  selectionElement: { browser: false, export: false, server: false },
  shouldCacheIgnoreZoom: { browser: true, export: false, server: false },
  stats: { browser: true, export: false, server: false },
  startBoundElement: { browser: false, export: false, server: false },
  suggestedBindings: { browser: false, export: false, server: false },
  frameRendering: { browser: false, export: false, server: false },
  frameToHighlight: { browser: false, export: false, server: false },
  editingFrame: { browser: false, export: false, server: false },
  elementsToHighlight: { browser: false, export: false, server: false },
  toast: { browser: false, export: false, server: false },
  viewBackgroundColor: { browser: true, export: true, server: true },
  width: { browser: false, export: false, server: false },
  zenModeEnabled: { browser: true, export: false, server: false },
  zoom: { browser: true, export: false, server: false },
  viewModeEnabled: { browser: false, export: false, server: false },
  pendingImageElementId: { browser: false, export: false, server: false },
  showHyperlinkPopup: { browser: false, export: false, server: false },
  selectedLinearElement: { browser: true, export: false, server: false },
  snapLines: { browser: false, export: false, server: false },
  originSnapOffset: { browser: false, export: false, server: false },
  objectsSnapModeEnabled: { browser: true, export: false, server: false },
  userToFollow: { browser: false, export: false, server: false },
  followedBy: { browser: false, export: false, server: false },
  searchMatches: { browser: false, export: false, server: false }
});
var _clearAppStateForStorage = (appState, exportType) => {
  const stateForExport = {};
  for (const key of Object.keys(appState)) {
    const propConfig = APP_STATE_STORAGE_CONF[key];
    if (propConfig?.[exportType]) {
      const nextValue = appState[key];
      stateForExport[key] = nextValue;
    }
  }
  return stateForExport;
};
var cleanAppStateForExport = (appState) => {
  return _clearAppStateForStorage(appState, "export");
};
var clearAppStateForDatabase = (appState) => {
  return _clearAppStateForStorage(appState, "server");
};
var isEraserActive = ({
  activeTool
}) => activeTool.type === "eraser";
var isHandToolActive = ({
  activeTool
}) => {
  return activeTool.type === "hand";
};

// element/index.ts
init_define_import_meta_env();

// element/sizeHelpers.ts
init_define_import_meta_env();

// element/mutateElement.ts
init_define_import_meta_env();

// scene/Scene.ts
init_define_import_meta_env();
var import_lodash = __toESM(require_lodash(), 1);

// element/typeChecks.ts
init_define_import_meta_env();

// utils.ts
init_define_import_meta_env();

// ../math/index.ts
init_define_import_meta_env();

// ../math/arc.ts
init_define_import_meta_env();

// ../math/angle.ts
init_define_import_meta_env();

// ../math/utils.ts
init_define_import_meta_env();
var PRECISION = 1e-4;
var clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
var round = (value, precision, func = "round") => {
  const multiplier = Math.pow(10, precision);
  return Math[func]((value + Number.EPSILON) * multiplier) / multiplier;
};
var roundToStep = (value, step, func = "round") => {
  const factor = 1 / step;
  return Math[func](value * factor) / factor;
};
var average = (a2, b2) => (a2 + b2) / 2;
var isFiniteNumber = (value) => {
  return typeof value === "number" && Number.isFinite(value);
};

// ../math/angle.ts
var normalizeRadians = (angle) => {
  if (angle < 0) {
    return angle + 2 * Math.PI;
  }
  if (angle >= 2 * Math.PI) {
    return angle - 2 * Math.PI;
  }
  return angle;
};
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}
function radiansToDegrees(degrees) {
  return degrees * 180 / Math.PI;
}
function isRightAngleRads(rads) {
  return Math.abs(Math.sin(2 * rads)) < PRECISION;
}

// ../math/curve.ts
init_define_import_meta_env();

// ../math/point.ts
init_define_import_meta_env();

// ../math/vector.ts
init_define_import_meta_env();
function vector(x, y, originX = 0, originY = 0) {
  return [x - originX, y - originY];
}
function vectorFromPoint(p, origin = [0, 0]) {
  return vector(p[0] - origin[0], p[1] - origin[1]);
}
function vectorCross(a2, b2) {
  return a2[0] * b2[1] - b2[0] * a2[1];
}
function vectorAdd(a2, b2) {
  return [a2[0] + b2[0], a2[1] + b2[1]];
}
function vectorSubtract(start2, end) {
  return [start2[0] - end[0], start2[1] - end[1]];
}
function vectorScale(v, scalar) {
  return vector(v[0] * scalar, v[1] * scalar);
}

// ../math/point.ts
function pointFrom(x, y) {
  return [x, y];
}
function pointFromArray(numberArray) {
  return numberArray.length === 2 ? pointFrom(numberArray[0], numberArray[1]) : void 0;
}
function pointFromPair(pair) {
  return pair;
}
function pointFromVector(v) {
  return v;
}
function isPoint(p) {
  return Array.isArray(p) && p.length === 2 && typeof p[0] === "number" && !isNaN(p[0]) && typeof p[1] === "number" && !isNaN(p[1]);
}
function pointsEqual(a2, b2) {
  const abs2 = Math.abs;
  return abs2(a2[0] - b2[0]) < PRECISION && abs2(a2[1] - b2[1]) < PRECISION;
}
function pointRotateRads([x, y], [cx, cy], angle) {
  return pointFrom(
    (x - cx) * Math.cos(angle) - (y - cy) * Math.sin(angle) + cx,
    (x - cx) * Math.sin(angle) + (y - cy) * Math.cos(angle) + cy
  );
}
function pointTranslate(p, v = [0, 0]) {
  return pointFrom(p[0] + v[0], p[1] + v[1]);
}
function pointCenter(a2, b2) {
  return pointFrom((a2[0] + b2[0]) / 2, (a2[1] + b2[1]) / 2);
}
function pointDistance(a2, b2) {
  return Math.hypot(b2[0] - a2[0], b2[1] - a2[1]);
}
function pointDistanceSq(a2, b2) {
  return Math.hypot(b2[0] - a2[0], b2[1] - a2[1]);
}
var pointScaleFromOrigin = (p, mid, multiplier) => pointTranslate(mid, vectorScale(vectorFromPoint(p, mid), multiplier));
var isPointWithinBounds = (p, q, r) => {
  return q[0] <= Math.max(p[0], r[0]) && q[0] >= Math.min(p[0], r[0]) && q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1]);
};

// ../math/curve.ts
function curve(a2, b2, c, d) {
  return [a2, b2, c, d];
}

// ../math/line.ts
init_define_import_meta_env();

// ../math/polygon.ts
init_define_import_meta_env();

// ../math/segment.ts
init_define_import_meta_env();
function lineSegment(a2, b2) {
  return [a2, b2];
}
var segmentsIntersectAt = (a2, b2) => {
  const a0 = vectorFromPoint(a2[0]);
  const a1 = vectorFromPoint(a2[1]);
  const b0 = vectorFromPoint(b2[0]);
  const b1 = vectorFromPoint(b2[1]);
  const r = vectorSubtract(a1, a0);
  const s2 = vectorSubtract(b1, b0);
  const denominator = vectorCross(r, s2);
  if (denominator === 0) {
    return null;
  }
  const i2 = vectorSubtract(vectorFromPoint(b2[0]), vectorFromPoint(a2[0]));
  const u = vectorCross(i2, r) / denominator;
  const t2 = vectorCross(i2, s2) / denominator;
  if (u === 0) {
    return null;
  }
  const p = vectorAdd(a0, vectorScale(r, t2));
  if (t2 >= 0 && t2 < 1 && u >= 0 && u < 1) {
    return pointFromVector(p);
  }
  return null;
};
var pointOnLineSegment = (point2, line2, threshold = PRECISION) => {
  const distance4 = distanceToLineSegment(point2, line2);
  if (distance4 === 0) {
    return true;
  }
  return distance4 < threshold;
};
var distanceToLineSegment = (point2, line2) => {
  const [x, y] = point2;
  const [[x1, y1], [x2, y2]] = line2;
  const A2 = x - x1;
  const B2 = y - y1;
  const C2 = x2 - x1;
  const D = y2 - y1;
  const dot2 = A2 * C2 + B2 * D;
  const len_sq = C2 * C2 + D * D;
  let param = -1;
  if (len_sq !== 0) {
    param = dot2 / len_sq;
  }
  let xx;
  let yy;
  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C2;
    yy = y1 + param * D;
  }
  const dx = x - xx;
  const dy = y - yy;
  return Math.sqrt(dx * dx + dy * dy);
};

// ../math/polygon.ts
function polygon(...points) {
  return polygonClose(points);
}
function polygonFromPoints(points) {
  return polygonClose(points);
}
var polygonIncludesPoint = (point2, polygon3) => {
  const x = point2[0];
  const y = point2[1];
  let inside = false;
  for (let i2 = 0, j = polygon3.length - 1; i2 < polygon3.length; j = i2++) {
    const xi = polygon3[i2][0];
    const yi = polygon3[i2][1];
    const xj = polygon3[j][0];
    const yj = polygon3[j][1];
    if ((yi > y && yj <= y || yi <= y && yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
};
var pointOnPolygon = (p, poly, threshold = PRECISION) => {
  let on = false;
  for (let i2 = 0, l2 = poly.length - 1; i2 < l2; i2++) {
    if (pointOnLineSegment(p, lineSegment(poly[i2], poly[i2 + 1]), threshold)) {
      on = true;
      break;
    }
  }
  return on;
};
function polygonClose(polygon3) {
  return polygonIsClosed(polygon3) ? polygon3 : [...polygon3, polygon3[0]];
}
function polygonIsClosed(polygon3) {
  return pointsEqual(polygon3[0], polygon3[polygon3.length - 1]);
}

// ../math/range.ts
init_define_import_meta_env();
function rangeInclusive(start2, end) {
  return toBrandedType([start2, end]);
}
var rangesOverlap = ([a0, a1], [b0, b1]) => {
  if (a0 <= b0) {
    return a1 >= b0;
  }
  if (a0 >= b0) {
    return b1 >= a0;
  }
  return false;
};
var rangeIntersection = ([a0, a1], [b0, b1]) => {
  const rangeStart = Math.max(a0, b0);
  const rangeEnd = Math.min(a1, b1);
  if (rangeStart <= rangeEnd) {
    return toBrandedType([rangeStart, rangeEnd]);
  }
  return null;
};
var rangeIncludesValue = (value, [min, max]) => {
  return value >= min && value <= max;
};

// ../math/triangle.ts
init_define_import_meta_env();
function triangleIncludesPoint([a2, b2, c], p) {
  const triangleSign = (p1, p2, p3) => (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);
  const d1 = triangleSign(p, a2, b2);
  const d2 = triangleSign(p, b2, c);
  const d3 = triangleSign(p, c, a2);
  const has_neg = d1 < 0 || d2 < 0 || d3 < 0;
  const has_pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(has_neg && has_pos);
}

// ../math/types.ts
init_define_import_meta_env();

// utils.ts
var mockDateTime = null;
var getDateTime = () => {
  if (mockDateTime) {
    return mockDateTime;
  }
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hr = `${date.getHours()}`.padStart(2, "0");
  const min = `${date.getMinutes()}`.padStart(2, "0");
  return `${year}-${month}-${day}-${hr}${min}`;
};
var capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
var isToolIcon = (target) => target instanceof HTMLElement && target.className.includes("ToolIcon");
var isInputLike = (target) => target instanceof HTMLElement && target.dataset.type === "wysiwyg" || target instanceof HTMLBRElement || // newline in wysiwyg
target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
var isInteractive = (target) => {
  return isInputLike(target) || target instanceof Element && !!target.closest("label, button");
};
var isWritableElement = (target) => target instanceof HTMLElement && target.dataset.type === "wysiwyg" || target instanceof HTMLBRElement || // newline in wysiwyg
target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement && (target.type === "text" || target.type === "number" || target.type === "password");
var getFontFamilyString = ({
  fontFamily
}) => {
  for (const [fontFamilyString, id] of Object.entries(FONT_FAMILY)) {
    if (id === fontFamily) {
      return `${fontFamilyString}, ${WINDOWS_EMOJI_FALLBACK_FONT}`;
    }
  }
  return WINDOWS_EMOJI_FALLBACK_FONT;
};
var getFontString = ({
  fontSize,
  fontFamily
}) => {
  return `${fontSize}px ${getFontFamilyString({ fontFamily })}`;
};
var debounce = (fn, timeout) => {
  let handle = 0;
  let lastArgs = null;
  const ret = (...args) => {
    lastArgs = args;
    clearTimeout(handle);
    handle = window.setTimeout(() => {
      lastArgs = null;
      fn(...args);
    }, timeout);
  };
  ret.flush = () => {
    clearTimeout(handle);
    if (lastArgs) {
      const _lastArgs = lastArgs;
      lastArgs = null;
      fn(..._lastArgs);
    }
  };
  ret.cancel = () => {
    lastArgs = null;
    clearTimeout(handle);
  };
  return ret;
};
var throttleRAF = (fn, opts) => {
  let timerId = null;
  let lastArgs = null;
  let lastArgsTrailing = null;
  const scheduleFunc = (args) => {
    timerId = window.requestAnimationFrame(() => {
      timerId = null;
      fn(...args);
      lastArgs = null;
      if (lastArgsTrailing) {
        lastArgs = lastArgsTrailing;
        lastArgsTrailing = null;
        scheduleFunc(lastArgs);
      }
    });
  };
  const ret = (...args) => {
    if (define_import_meta_env_default.MODE === "test") {
      fn(...args);
      return;
    }
    lastArgs = args;
    if (timerId === null) {
      scheduleFunc(lastArgs);
    } else if (opts?.trailing) {
      lastArgsTrailing = args;
    }
  };
  ret.flush = () => {
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
    if (lastArgs) {
      fn(...lastArgsTrailing || lastArgs);
      lastArgs = lastArgsTrailing = null;
    }
  };
  ret.cancel = () => {
    lastArgs = lastArgsTrailing = null;
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
  };
  return ret;
};
var easeOut = (k) => {
  return 1 - Math.pow(1 - k, 4);
};
var easeOutInterpolate = (from3, to, progress) => {
  return (to - from3) * easeOut(progress) + from3;
};
var easeToValuesRAF = ({
  fromValues,
  toValues,
  onStep,
  duration = 250,
  interpolateValue,
  onStart,
  onEnd,
  onCancel
}) => {
  let canceled = false;
  let frameId = 0;
  let startTime;
  function step(timestamp) {
    if (canceled) {
      return;
    }
    if (startTime === void 0) {
      startTime = timestamp;
      onStart?.();
    }
    const elapsed = Math.min(timestamp - startTime, duration);
    const factor = easeOut(elapsed / duration);
    const newValues = {};
    Object.keys(fromValues).forEach((key) => {
      const _key = key;
      const result = (toValues[_key] - fromValues[_key]) * factor + fromValues[_key];
      newValues[_key] = result;
    });
    onStep(newValues);
    if (elapsed < duration) {
      const progress = elapsed / duration;
      const newValues2 = {};
      Object.keys(fromValues).forEach((key) => {
        const _key = key;
        const startValue = fromValues[_key];
        const endValue = toValues[_key];
        let result;
        result = interpolateValue ? interpolateValue(startValue, endValue, progress, _key) : easeOutInterpolate(startValue, endValue, progress);
        if (result == null) {
          result = easeOutInterpolate(startValue, endValue, progress);
        }
        newValues2[_key] = result;
      });
      onStep(newValues2);
      frameId = window.requestAnimationFrame(step);
    } else {
      onStep(toValues);
      onEnd?.();
    }
  }
  frameId = window.requestAnimationFrame(step);
  return () => {
    onCancel?.();
    canceled = true;
    window.cancelAnimationFrame(frameId);
  };
};
var chunk = (array, size) => {
  if (!array.length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = Array(Math.ceil(array.length / size));
  while (index < array.length) {
    result[resIndex++] = array.slice(index, index += size);
  }
  return result;
};
var distance = (x, y) => Math.abs(x - y);
var updateActiveTool = (appState, data) => {
  if (data.type === "custom") {
    return {
      ...appState.activeTool,
      type: "custom",
      customType: data.customType,
      locked: data.locked ?? appState.activeTool.locked
    };
  }
  return {
    ...appState.activeTool,
    lastActiveTool: data.lastActiveToolBeforeEraser === void 0 ? appState.activeTool.lastActiveTool : data.lastActiveToolBeforeEraser,
    type: data.type,
    customType: null,
    locked: data.locked ?? appState.activeTool.locked
  };
};
var getShortcutKey = (shortcut) => {
  shortcut = shortcut.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter");
  if (isDarwin) {
    return shortcut.replace(/\bCtrlOrCmd\b/gi, "Cmd").replace(/\bAlt\b/i, "Option");
  }
  return shortcut.replace(/\bCtrlOrCmd\b/gi, "Ctrl");
};
var viewportCoordsToSceneCoords = ({ clientX, clientY }, {
  zoom,
  offsetLeft,
  offsetTop,
  scrollX,
  scrollY
}) => {
  const x = (clientX - offsetLeft) / zoom.value - scrollX;
  const y = (clientY - offsetTop) / zoom.value - scrollY;
  return { x, y };
};
var sceneCoordsToViewportCoords = ({ sceneX, sceneY }, {
  zoom,
  offsetLeft,
  offsetTop,
  scrollX,
  scrollY
}) => {
  const x = (sceneX + scrollX) * zoom.value + offsetLeft;
  const y = (sceneY + scrollY) * zoom.value + offsetTop;
  return { x, y };
};
var getGlobalCSSVariable = (name) => getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
var RS_LTR_CHARS = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
var RS_RTL_CHARS = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
var RE_RTL_CHECK = new RegExp(`^[^${RS_LTR_CHARS}]*[${RS_RTL_CHARS}]`);
var isRTL = (text) => RE_RTL_CHECK.test(text);
var tupleToCoors = (xyTuple) => {
  const [x, y] = xyTuple;
  return { x, y };
};
var muteFSAbortError = (error) => {
  if (error?.name === "AbortError") {
    console.warn(error);
    return;
  }
  throw error;
};
var findIndex = (array, cb, fromIndex = 0) => {
  if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
  }
  fromIndex = Math.min(array.length, Math.max(fromIndex, 0));
  let index = fromIndex - 1;
  while (++index < array.length) {
    if (cb(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};
var findLastIndex = (array, cb, fromIndex = array.length - 1) => {
  if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
  }
  fromIndex = Math.min(array.length - 1, Math.max(fromIndex, 0));
  let index = fromIndex + 1;
  while (--index > -1) {
    if (cb(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};
var isTransparent = (color) => {
  const isRGBTransparent = color.length === 5 && color.substr(4, 1) === "0";
  const isRRGGBBTransparent = color.length === 9 && color.substr(7, 2) === "00";
  return isRGBTransparent || isRRGGBBTransparent || color === COLOR_PALETTE.transparent;
};
var resolvablePromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
};
var getNearestScrollableContainer = (element) => {
  let parent = element.parentElement;
  while (parent) {
    if (parent === document.body) {
      return document;
    }
    const { overflowY } = window.getComputedStyle(parent);
    const hasScrollableContent = parent.scrollHeight > parent.clientHeight;
    if (hasScrollableContent && (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay")) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document;
};
var focusNearestParent = (element) => {
  let parent = element.parentElement;
  while (parent) {
    if (parent.tabIndex > -1) {
      parent.focus();
      return;
    }
    parent = parent.parentElement;
  }
};
var preventUnload = (event) => {
  event.preventDefault();
  event.returnValue = "";
};
var bytesToHexString = (bytes) => {
  return Array.from(bytes).map((byte) => `0${byte.toString(16)}`.slice(-2)).join("");
};
var getUpdatedTimestamp = () => isTestEnv() ? 1 : Date.now();
var arrayToMap = (items) => {
  if (items instanceof Map) {
    return items;
  }
  return items.reduce((acc, element) => {
    acc.set(typeof element === "string" ? element : element.id, element);
    return acc;
  }, /* @__PURE__ */ new Map());
};
var arrayToMapWithIndex = (elements) => elements.reduce((acc, element, idx) => {
  acc.set(element.id, [element, idx]);
  return acc;
}, /* @__PURE__ */ new Map());
var arrayToObject = (array, groupBy) => array.reduce((acc, value) => {
  acc[groupBy ? groupBy(value) : String(value)] = value;
  return acc;
}, {});
var arrayToList = (array) => array.reduce((acc, curr, index) => {
  const node = { ...curr, prev: null, next: null };
  if (index !== 0) {
    const prevNode = acc[index - 1];
    node.prev = prevNode;
    prevNode.next = node;
    if (index === array.length - 1) {
      const firstNode = acc[0];
      node.next = firstNode;
      firstNode.prev = node;
    }
  }
  acc.push(node);
  return acc;
}, []);
var isTestEnv = () => define_import_meta_env_default.MODE === "test";
var isDevEnv = () => define_import_meta_env_default.MODE === "development";
var wrapEvent = (name, nativeEvent) => {
  return new CustomEvent(name, {
    detail: {
      nativeEvent
    },
    cancelable: true
  });
};
var updateObject = (obj, updates) => {
  let didChange = false;
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      if (obj[key] === value && // if object, always update because its attrs could have changed
      (typeof value !== "object" || value === null)) {
        continue;
      }
      didChange = true;
    }
  }
  if (!didChange) {
    return obj;
  }
  return {
    ...obj,
    ...updates
  };
};
var getFrame = () => {
  try {
    return window.self === window.top ? "top" : "iframe";
  } catch (error) {
    return "iframe";
  }
};
var isPromiseLike = (value) => {
  return !!value && typeof value === "object" && "then" in value && "catch" in value && "finally" in value;
};
var queryFocusableElements = (container) => {
  const focusableElements = container?.querySelectorAll(
    "button, a, input, select, textarea, div[tabindex], label[tabindex]"
  );
  return focusableElements ? Array.from(focusableElements).filter(
    (element) => element.tabIndex > -1 && !element.disabled
  ) : [];
};
var _defaultIsShallowComparatorFallback = (a2, b2) => {
  if (Array.isArray(a2) && Array.isArray(b2) && a2.length === 0 && b2.length === 0) {
    return true;
  }
  return a2 === b2;
};
var isShallowEqual = (objA, objB, comparators, debug = false) => {
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  if (aKeys.length !== bKeys.length) {
    if (debug) {
      console.warn(
        `%cisShallowEqual: objects don't have same properties ->`,
        "color: #8B4000",
        objA,
        objB
      );
    }
    return false;
  }
  if (comparators && Array.isArray(comparators)) {
    for (const key of comparators) {
      const ret = objA[key] === objB[key] || _defaultIsShallowComparatorFallback(objA[key], objB[key]);
      if (!ret) {
        if (debug) {
          console.warn(
            `%cisShallowEqual: ${key} not equal ->`,
            "color: #8B4000",
            objA[key],
            objB[key]
          );
        }
        return false;
      }
    }
    return true;
  }
  return aKeys.every((key) => {
    const comparator = comparators?.[key];
    const ret = comparator ? comparator(objA[key], objB[key]) : objA[key] === objB[key] || _defaultIsShallowComparatorFallback(objA[key], objB[key]);
    if (!ret && debug) {
      console.warn(
        `%cisShallowEqual: ${key} not equal ->`,
        "color: #8B4000",
        objA[key],
        objB[key]
      );
    }
    return ret;
  });
};
var composeEventHandlers = (originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) => {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (!checkForDefaultPrevented || !event?.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
};
var assertNever = (value, message, softAssert) => {
  if (!message) {
    return value;
  }
  if (softAssert) {
    console.error(message);
    return value;
  }
  throw new Error(message);
};
function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
var memoize = (func) => {
  let lastArgs;
  let lastResult;
  const ret = function(opts) {
    const currentArgs = Object.entries(opts);
    if (lastArgs) {
      let argsAreEqual = true;
      for (const [key, value] of currentArgs) {
        if (lastArgs.get(key) !== value) {
          argsAreEqual = false;
          break;
        }
      }
      if (argsAreEqual) {
        return lastResult;
      }
    }
    const result = func(opts);
    lastArgs = new Map(currentArgs);
    lastResult = result;
    return result;
  };
  ret.clear = () => {
    lastArgs = void 0;
    lastResult = void 0;
  };
  return ret;
};
var isMemberOf = (collection, value) => {
  return collection instanceof Set || collection instanceof Map ? collection.has(value) : "includes" in collection ? collection.includes(value) : collection.hasOwnProperty(value);
};
var cloneJSON = (obj) => JSON.parse(JSON.stringify(obj));
var updateStable = (prevValue, nextValue) => {
  if (isShallowEqual(prevValue, nextValue)) {
    return prevValue;
  }
  return nextValue;
};
function addEventListener(target, type, listener, options) {
  if (!target) {
    return () => {
    };
  }
  target?.addEventListener?.(type, listener, options);
  return () => {
    target?.removeEventListener?.(type, listener, options);
  };
}
function getSvgPathFromStroke(points, closed = true) {
  const len = points.length;
  if (len < 4) {
    return ``;
  }
  let a2 = points[0];
  let b2 = points[1];
  const c = points[2];
  let result = `M${a2[0].toFixed(2)},${a2[1].toFixed(2)} Q${b2[0].toFixed(
    2
  )},${b2[1].toFixed(2)} ${average(b2[0], c[0]).toFixed(2)},${average(
    b2[1],
    c[1]
  ).toFixed(2)} T`;
  for (let i2 = 2, max = len - 1; i2 < max; i2++) {
    a2 = points[i2];
    b2 = points[i2 + 1];
    result += `${average(a2[0], b2[0]).toFixed(2)},${average(a2[1], b2[1]).toFixed(
      2
    )} `;
  }
  if (closed) {
    result += "Z";
  }
  return result;
}
var normalizeEOL = (str) => {
  return str.replace(/\r?\n|\r/g, "\n");
};
var toBrandedType = (value) => {
  return value;
};
var promiseTry = async (fn, ...args) => {
  return new Promise((resolve) => {
    resolve(fn(...args));
  });
};
var isAnyTrue = (...args) => Math.max(...args.map((arg) => arg ? 1 : 0)) > 0;

// element/typeChecks.ts
var isInitializedImageElement = (element) => {
  return !!element && element.type === "image" && !!element.fileId;
};
var isImageElement = (element) => {
  return !!element && element.type === "image";
};
var isEmbeddableElement = (element) => {
  return !!element && element.type === "embeddable";
};
var isIframeElement = (element) => {
  return !!element && element.type === "iframe";
};
var isIframeLikeElement = (element) => {
  return !!element && (element.type === "iframe" || element.type === "embeddable");
};
var isTextElement = (element) => {
  return element != null && element.type === "text";
};
var isFrameElement = (element) => {
  return element != null && element.type === "frame";
};
var isMagicFrameElement = (element) => {
  return element != null && element.type === "magicframe";
};
var isFrameLikeElement = (element) => {
  return element != null && (element.type === "frame" || element.type === "magicframe");
};
var isFreeDrawElement = (element) => {
  return element != null && isFreeDrawElementType(element.type);
};
var isFreeDrawElementType = (elementType) => {
  return elementType === "freedraw";
};
var isLinearElement = (element) => {
  return element != null && isLinearElementType(element.type);
};
var isArrowElement = (element) => {
  return element != null && element.type === "arrow";
};
var isElbowArrow = (element) => {
  return isArrowElement(element) && element.elbowed;
};
var isLinearElementType = (elementType) => {
  return elementType === "arrow" || elementType === "line";
};
var isBindingElement = (element, includeLocked = true) => {
  return element != null && (!element.locked || includeLocked === true) && isBindingElementType(element.type);
};
var isBindingElementType = (elementType) => {
  return elementType === "arrow";
};
var isBindableElement = (element, includeLocked = true) => {
  return element != null && (!element.locked || includeLocked === true) && (element.type === "rectangle" || element.type === "diamond" || element.type === "ellipse" || element.type === "image" || element.type === "iframe" || element.type === "embeddable" || element.type === "frame" || element.type === "magicframe" || element.type === "text" && !element.containerId);
};
var isRectanguloidElement = (element) => {
  return element != null && (element.type === "rectangle" || element.type === "diamond" || element.type === "image" || element.type === "iframe" || element.type === "embeddable" || element.type === "frame" || element.type === "magicframe" || element.type === "text" && !element.containerId);
};
var isRectangularElement = (element) => {
  return element != null && (element.type === "rectangle" || element.type === "image" || element.type === "text" || element.type === "iframe" || element.type === "embeddable" || element.type === "frame" || element.type === "magicframe" || element.type === "freedraw");
};
var isTextBindableContainer = (element, includeLocked = true) => {
  return element != null && (!element.locked || includeLocked === true) && (element.type === "rectangle" || element.type === "diamond" || element.type === "ellipse" || isArrowElement(element));
};
var isExcalidrawElement = (element) => {
  const type = element?.type;
  if (!type) {
    return false;
  }
  switch (type) {
    case "text":
    case "diamond":
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "ellipse":
    case "arrow":
    case "freedraw":
    case "line":
    case "frame":
    case "magicframe":
    case "image":
    case "selection": {
      return true;
    }
    default: {
      assertNever(type, null);
      return false;
    }
  }
};
var isFlowchartNodeElement = (element) => {
  return element.type === "rectangle" || element.type === "ellipse" || element.type === "diamond";
};
var hasBoundTextElement = (element) => {
  return isTextBindableContainer(element) && !!element.boundElements?.some(({ type }) => type === "text");
};
var isBoundToContainer = (element) => {
  return element !== null && "containerId" in element && element.containerId !== null && isTextElement(element);
};
var isUsingAdaptiveRadius = (type) => type === "rectangle" || type === "embeddable" || type === "iframe" || type === "image";
var isUsingProportionalRadius = (type) => type === "line" || type === "arrow" || type === "diamond";
var canApplyRoundnessTypeToElement = (roundnessType, element) => {
  if ((roundnessType === ROUNDNESS.ADAPTIVE_RADIUS || // if legacy roundness, it can be applied to elements that currently
  // use adaptive radius
  roundnessType === ROUNDNESS.LEGACY) && isUsingAdaptiveRadius(element.type)) {
    return true;
  }
  if (roundnessType === ROUNDNESS.PROPORTIONAL_RADIUS && isUsingProportionalRadius(element.type)) {
    return true;
  }
  return false;
};
var getDefaultRoundnessTypeForElement = (element) => {
  if (isUsingProportionalRadius(element.type)) {
    return {
      type: ROUNDNESS.PROPORTIONAL_RADIUS
    };
  }
  if (isUsingAdaptiveRadius(element.type)) {
    return {
      type: ROUNDNESS.ADAPTIVE_RADIUS
    };
  }
  return null;
};
var isFixedPointBinding = (binding) => {
  return Object.hasOwn(binding, "fixedPoint") && binding.fixedPoint != null;
};

// scene/selection.ts
init_define_import_meta_env();

// frame.ts
init_define_import_meta_env();

// element/textElement.ts
init_define_import_meta_env();

// element/linearElementEditor.ts
init_define_import_meta_env();

// element/bounds.ts
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/rough.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/canvas.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/generator.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/renderer.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/fillers/filler.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/fillers/hachure-filler.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/fillers/scan-line-hachure.js
init_define_import_meta_env();

// ../../node_modules/hachure-fill/bin/hachure.js
init_define_import_meta_env();
function rotatePoints(points, center, degrees) {
  if (points && points.length) {
    const [cx, cy] = center;
    const angle = Math.PI / 180 * degrees;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    for (const p of points) {
      const [x, y] = p;
      p[0] = (x - cx) * cos - (y - cy) * sin + cx;
      p[1] = (x - cx) * sin + (y - cy) * cos + cy;
    }
  }
}
function rotateLines(lines, center, degrees) {
  const points = [];
  lines.forEach((line2) => points.push(...line2));
  rotatePoints(points, center, degrees);
}
function areSamePoints(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}
function hachureLines(polygons, hachureGap, hachureAngle, hachureStepOffset = 1) {
  const angle = hachureAngle;
  const gap = Math.max(hachureGap, 0.1);
  const polygonList = polygons[0] && polygons[0][0] && typeof polygons[0][0] === "number" ? [polygons] : polygons;
  const rotationCenter = [0, 0];
  if (angle) {
    for (const polygon3 of polygonList) {
      rotatePoints(polygon3, rotationCenter, angle);
    }
  }
  const lines = straightHachureLines(polygonList, gap, hachureStepOffset);
  if (angle) {
    for (const polygon3 of polygonList) {
      rotatePoints(polygon3, rotationCenter, -angle);
    }
    rotateLines(lines, rotationCenter, -angle);
  }
  return lines;
}
function straightHachureLines(polygons, gap, hachureStepOffset) {
  const vertexArray = [];
  for (const polygon3 of polygons) {
    const vertices = [...polygon3];
    if (!areSamePoints(vertices[0], vertices[vertices.length - 1])) {
      vertices.push([vertices[0][0], vertices[0][1]]);
    }
    if (vertices.length > 2) {
      vertexArray.push(vertices);
    }
  }
  const lines = [];
  gap = Math.max(gap, 0.1);
  const edges = [];
  for (const vertices of vertexArray) {
    for (let i2 = 0; i2 < vertices.length - 1; i2++) {
      const p1 = vertices[i2];
      const p2 = vertices[i2 + 1];
      if (p1[1] !== p2[1]) {
        const ymin = Math.min(p1[1], p2[1]);
        edges.push({
          ymin,
          ymax: Math.max(p1[1], p2[1]),
          x: ymin === p1[1] ? p1[0] : p2[0],
          islope: (p2[0] - p1[0]) / (p2[1] - p1[1])
        });
      }
    }
  }
  edges.sort((e1, e2) => {
    if (e1.ymin < e2.ymin) {
      return -1;
    }
    if (e1.ymin > e2.ymin) {
      return 1;
    }
    if (e1.x < e2.x) {
      return -1;
    }
    if (e1.x > e2.x) {
      return 1;
    }
    if (e1.ymax === e2.ymax) {
      return 0;
    }
    return (e1.ymax - e2.ymax) / Math.abs(e1.ymax - e2.ymax);
  });
  if (!edges.length) {
    return lines;
  }
  let activeEdges = [];
  let y = edges[0].ymin;
  let iteration = 0;
  while (activeEdges.length || edges.length) {
    if (edges.length) {
      let ix = -1;
      for (let i2 = 0; i2 < edges.length; i2++) {
        if (edges[i2].ymin > y) {
          break;
        }
        ix = i2;
      }
      const removed = edges.splice(0, ix + 1);
      removed.forEach((edge) => {
        activeEdges.push({ s: y, edge });
      });
    }
    activeEdges = activeEdges.filter((ae2) => {
      if (ae2.edge.ymax <= y) {
        return false;
      }
      return true;
    });
    activeEdges.sort((ae1, ae2) => {
      if (ae1.edge.x === ae2.edge.x) {
        return 0;
      }
      return (ae1.edge.x - ae2.edge.x) / Math.abs(ae1.edge.x - ae2.edge.x);
    });
    if (hachureStepOffset !== 1 || iteration % gap === 0) {
      if (activeEdges.length > 1) {
        for (let i2 = 0; i2 < activeEdges.length; i2 = i2 + 2) {
          const nexti = i2 + 1;
          if (nexti >= activeEdges.length) {
            break;
          }
          const ce2 = activeEdges[i2].edge;
          const ne = activeEdges[nexti].edge;
          lines.push([
            [Math.round(ce2.x), y],
            [Math.round(ne.x), y]
          ]);
        }
      }
    }
    y += hachureStepOffset;
    activeEdges.forEach((ae2) => {
      ae2.edge.x = ae2.edge.x + hachureStepOffset * ae2.edge.islope;
    });
    iteration++;
  }
  return lines;
}

// ../../node_modules/roughjs/bin/fillers/scan-line-hachure.js
function polygonHachureLines(polygonList, o2) {
  var _a;
  const angle = o2.hachureAngle + 90;
  let gap = o2.hachureGap;
  if (gap < 0) {
    gap = o2.strokeWidth * 4;
  }
  gap = Math.max(gap, 0.1);
  let skipOffset = 1;
  if (o2.roughness >= 1) {
    if ((((_a = o2.randomizer) === null || _a === void 0 ? void 0 : _a.next()) || Math.random()) > 0.7) {
      skipOffset = gap;
    }
  }
  return hachureLines(polygonList, gap, angle, skipOffset || 1);
}

// ../../node_modules/roughjs/bin/fillers/hachure-filler.js
var HachureFiller = class {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o2) {
    return this._fillPolygons(polygonList, o2);
  }
  _fillPolygons(polygonList, o2) {
    const lines = polygonHachureLines(polygonList, o2);
    const ops = this.renderLines(lines, o2);
    return { type: "fillSketch", ops };
  }
  renderLines(lines, o2) {
    const ops = [];
    for (const line2 of lines) {
      ops.push(...this.helper.doubleLineOps(line2[0][0], line2[0][1], line2[1][0], line2[1][1], o2));
    }
    return ops;
  }
};

// ../../node_modules/roughjs/bin/fillers/zigzag-filler.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/geometry.js
init_define_import_meta_env();
function lineLength(line2) {
  const p1 = line2[0];
  const p2 = line2[1];
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

// ../../node_modules/roughjs/bin/fillers/zigzag-filler.js
var ZigZagFiller = class extends HachureFiller {
  fillPolygons(polygonList, o2) {
    let gap = o2.hachureGap;
    if (gap < 0) {
      gap = o2.strokeWidth * 4;
    }
    gap = Math.max(gap, 0.1);
    const o22 = Object.assign({}, o2, { hachureGap: gap });
    const lines = polygonHachureLines(polygonList, o22);
    const zigZagAngle = Math.PI / 180 * o2.hachureAngle;
    const zigzagLines = [];
    const dgx = gap * 0.5 * Math.cos(zigZagAngle);
    const dgy = gap * 0.5 * Math.sin(zigZagAngle);
    for (const [p1, p2] of lines) {
      if (lineLength([p1, p2])) {
        zigzagLines.push([
          [p1[0] - dgx, p1[1] + dgy],
          [...p2]
        ], [
          [p1[0] + dgx, p1[1] - dgy],
          [...p2]
        ]);
      }
    }
    const ops = this.renderLines(zigzagLines, o2);
    return { type: "fillSketch", ops };
  }
};

// ../../node_modules/roughjs/bin/fillers/hatch-filler.js
init_define_import_meta_env();
var HatchFiller = class extends HachureFiller {
  fillPolygons(polygonList, o2) {
    const set = this._fillPolygons(polygonList, o2);
    const o22 = Object.assign({}, o2, { hachureAngle: o2.hachureAngle + 90 });
    const set2 = this._fillPolygons(polygonList, o22);
    set.ops = set.ops.concat(set2.ops);
    return set;
  }
};

// ../../node_modules/roughjs/bin/fillers/dot-filler.js
init_define_import_meta_env();
var DotFiller = class {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o2) {
    o2 = Object.assign({}, o2, { hachureAngle: 0 });
    const lines = polygonHachureLines(polygonList, o2);
    return this.dotsOnLines(lines, o2);
  }
  dotsOnLines(lines, o2) {
    const ops = [];
    let gap = o2.hachureGap;
    if (gap < 0) {
      gap = o2.strokeWidth * 4;
    }
    gap = Math.max(gap, 0.1);
    let fweight = o2.fillWeight;
    if (fweight < 0) {
      fweight = o2.strokeWidth / 2;
    }
    const ro = gap / 4;
    for (const line2 of lines) {
      const length = lineLength(line2);
      const dl = length / gap;
      const count = Math.ceil(dl) - 1;
      const offset2 = length - count * gap;
      const x = (line2[0][0] + line2[1][0]) / 2 - gap / 4;
      const minY = Math.min(line2[0][1], line2[1][1]);
      for (let i2 = 0; i2 < count; i2++) {
        const y = minY + offset2 + i2 * gap;
        const cx = x - ro + Math.random() * 2 * ro;
        const cy = y - ro + Math.random() * 2 * ro;
        const el = this.helper.ellipse(cx, cy, fweight, fweight, o2);
        ops.push(...el.ops);
      }
    }
    return { type: "fillSketch", ops };
  }
};

// ../../node_modules/roughjs/bin/fillers/dashed-filler.js
init_define_import_meta_env();
var DashedFiller = class {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o2) {
    const lines = polygonHachureLines(polygonList, o2);
    return { type: "fillSketch", ops: this.dashedLine(lines, o2) };
  }
  dashedLine(lines, o2) {
    const offset2 = o2.dashOffset < 0 ? o2.hachureGap < 0 ? o2.strokeWidth * 4 : o2.hachureGap : o2.dashOffset;
    const gap = o2.dashGap < 0 ? o2.hachureGap < 0 ? o2.strokeWidth * 4 : o2.hachureGap : o2.dashGap;
    const ops = [];
    lines.forEach((line2) => {
      const length = lineLength(line2);
      const count = Math.floor(length / (offset2 + gap));
      const startOffset = (length + gap - count * (offset2 + gap)) / 2;
      let p1 = line2[0];
      let p2 = line2[1];
      if (p1[0] > p2[0]) {
        p1 = line2[1];
        p2 = line2[0];
      }
      const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
      for (let i2 = 0; i2 < count; i2++) {
        const lstart = i2 * (offset2 + gap);
        const lend = lstart + offset2;
        const start2 = [p1[0] + lstart * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha) + startOffset * Math.sin(alpha)];
        const end = [p1[0] + lend * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lend * Math.sin(alpha) + startOffset * Math.sin(alpha)];
        ops.push(...this.helper.doubleLineOps(start2[0], start2[1], end[0], end[1], o2));
      }
    });
    return ops;
  }
};

// ../../node_modules/roughjs/bin/fillers/zigzag-line-filler.js
init_define_import_meta_env();
var ZigZagLineFiller = class {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o2) {
    const gap = o2.hachureGap < 0 ? o2.strokeWidth * 4 : o2.hachureGap;
    const zo = o2.zigzagOffset < 0 ? gap : o2.zigzagOffset;
    o2 = Object.assign({}, o2, { hachureGap: gap + zo });
    const lines = polygonHachureLines(polygonList, o2);
    return { type: "fillSketch", ops: this.zigzagLines(lines, zo, o2) };
  }
  zigzagLines(lines, zo, o2) {
    const ops = [];
    lines.forEach((line2) => {
      const length = lineLength(line2);
      const count = Math.round(length / (2 * zo));
      let p1 = line2[0];
      let p2 = line2[1];
      if (p1[0] > p2[0]) {
        p1 = line2[1];
        p2 = line2[0];
      }
      const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
      for (let i2 = 0; i2 < count; i2++) {
        const lstart = i2 * 2 * zo;
        const lend = (i2 + 1) * 2 * zo;
        const dz = Math.sqrt(2 * Math.pow(zo, 2));
        const start2 = [p1[0] + lstart * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha)];
        const end = [p1[0] + lend * Math.cos(alpha), p1[1] + lend * Math.sin(alpha)];
        const middle = [start2[0] + dz * Math.cos(alpha + Math.PI / 4), start2[1] + dz * Math.sin(alpha + Math.PI / 4)];
        ops.push(...this.helper.doubleLineOps(start2[0], start2[1], middle[0], middle[1], o2), ...this.helper.doubleLineOps(middle[0], middle[1], end[0], end[1], o2));
      }
    });
    return ops;
  }
};

// ../../node_modules/roughjs/bin/fillers/filler.js
var fillers = {};
function getFiller(o2, helper2) {
  let fillerName = o2.fillStyle || "hachure";
  if (!fillers[fillerName]) {
    switch (fillerName) {
      case "zigzag":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new ZigZagFiller(helper2);
        }
        break;
      case "cross-hatch":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new HatchFiller(helper2);
        }
        break;
      case "dots":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new DotFiller(helper2);
        }
        break;
      case "dashed":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new DashedFiller(helper2);
        }
        break;
      case "zigzag-line":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new ZigZagLineFiller(helper2);
        }
        break;
      case "hachure":
      default:
        fillerName = "hachure";
        if (!fillers[fillerName]) {
          fillers[fillerName] = new HachureFiller(helper2);
        }
        break;
    }
  }
  return fillers[fillerName];
}

// ../../node_modules/roughjs/bin/math.js
init_define_import_meta_env();
function randomSeed() {
  return Math.floor(Math.random() * 2 ** 31);
}
var Random = class {
  constructor(seed) {
    this.seed = seed;
  }
  next() {
    if (this.seed) {
      return (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
    } else {
      return Math.random();
    }
  }
};

// ../../node_modules/path-data-parser/lib/index.js
init_define_import_meta_env();

// ../../node_modules/path-data-parser/lib/parser.js
init_define_import_meta_env();
var COMMAND = 0;
var NUMBER = 1;
var EOD = 2;
var PARAMS = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function tokenize(d) {
  const tokens = new Array();
  while (d !== "") {
    if (d.match(/^([ \t\r\n,]+)/)) {
      d = d.substr(RegExp.$1.length);
    } else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
      tokens[tokens.length] = { type: COMMAND, text: RegExp.$1 };
      d = d.substr(RegExp.$1.length);
    } else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
      tokens[tokens.length] = { type: NUMBER, text: `${parseFloat(RegExp.$1)}` };
      d = d.substr(RegExp.$1.length);
    } else {
      return [];
    }
  }
  tokens[tokens.length] = { type: EOD, text: "" };
  return tokens;
}
function isType(token, type) {
  return token.type === type;
}
function parsePath(d) {
  const segments = [];
  const tokens = tokenize(d);
  let mode = "BOD";
  let index = 0;
  let token = tokens[index];
  while (!isType(token, EOD)) {
    let paramsCount = 0;
    const params = [];
    if (mode === "BOD") {
      if (token.text === "M" || token.text === "m") {
        index++;
        paramsCount = PARAMS[token.text];
        mode = token.text;
      } else {
        return parsePath("M0,0" + d);
      }
    } else if (isType(token, NUMBER)) {
      paramsCount = PARAMS[mode];
    } else {
      index++;
      paramsCount = PARAMS[token.text];
      mode = token.text;
    }
    if (index + paramsCount < tokens.length) {
      for (let i2 = index; i2 < index + paramsCount; i2++) {
        const numbeToken = tokens[i2];
        if (isType(numbeToken, NUMBER)) {
          params[params.length] = +numbeToken.text;
        } else {
          throw new Error("Param not a number: " + mode + "," + numbeToken.text);
        }
      }
      if (typeof PARAMS[mode] === "number") {
        const segment = { key: mode, data: params };
        segments.push(segment);
        index += paramsCount;
        token = tokens[index];
        if (mode === "M")
          mode = "L";
        if (mode === "m")
          mode = "l";
      } else {
        throw new Error("Bad segment: " + mode);
      }
    } else {
      throw new Error("Path data ended short");
    }
  }
  return segments;
}

// ../../node_modules/path-data-parser/lib/absolutize.js
init_define_import_meta_env();
function absolutize(segments) {
  let cx = 0, cy = 0;
  let subx = 0, suby = 0;
  const out = [];
  for (const { key, data } of segments) {
    switch (key) {
      case "M":
        out.push({ key: "M", data: [...data] });
        [cx, cy] = data;
        [subx, suby] = data;
        break;
      case "m":
        cx += data[0];
        cy += data[1];
        out.push({ key: "M", data: [cx, cy] });
        subx = cx;
        suby = cy;
        break;
      case "L":
        out.push({ key: "L", data: [...data] });
        [cx, cy] = data;
        break;
      case "l":
        cx += data[0];
        cy += data[1];
        out.push({ key: "L", data: [cx, cy] });
        break;
      case "C":
        out.push({ key: "C", data: [...data] });
        cx = data[4];
        cy = data[5];
        break;
      case "c": {
        const newdata = data.map((d, i2) => i2 % 2 ? d + cy : d + cx);
        out.push({ key: "C", data: newdata });
        cx = newdata[4];
        cy = newdata[5];
        break;
      }
      case "Q":
        out.push({ key: "Q", data: [...data] });
        cx = data[2];
        cy = data[3];
        break;
      case "q": {
        const newdata = data.map((d, i2) => i2 % 2 ? d + cy : d + cx);
        out.push({ key: "Q", data: newdata });
        cx = newdata[2];
        cy = newdata[3];
        break;
      }
      case "A":
        out.push({ key: "A", data: [...data] });
        cx = data[5];
        cy = data[6];
        break;
      case "a":
        cx += data[5];
        cy += data[6];
        out.push({ key: "A", data: [data[0], data[1], data[2], data[3], data[4], cx, cy] });
        break;
      case "H":
        out.push({ key: "H", data: [...data] });
        cx = data[0];
        break;
      case "h":
        cx += data[0];
        out.push({ key: "H", data: [cx] });
        break;
      case "V":
        out.push({ key: "V", data: [...data] });
        cy = data[0];
        break;
      case "v":
        cy += data[0];
        out.push({ key: "V", data: [cy] });
        break;
      case "S":
        out.push({ key: "S", data: [...data] });
        cx = data[2];
        cy = data[3];
        break;
      case "s": {
        const newdata = data.map((d, i2) => i2 % 2 ? d + cy : d + cx);
        out.push({ key: "S", data: newdata });
        cx = newdata[2];
        cy = newdata[3];
        break;
      }
      case "T":
        out.push({ key: "T", data: [...data] });
        cx = data[0];
        cy = data[1];
        break;
      case "t":
        cx += data[0];
        cy += data[1];
        out.push({ key: "T", data: [cx, cy] });
        break;
      case "Z":
      case "z":
        out.push({ key: "Z", data: [] });
        cx = subx;
        cy = suby;
        break;
    }
  }
  return out;
}

// ../../node_modules/path-data-parser/lib/normalize.js
init_define_import_meta_env();
function normalize(segments) {
  const out = [];
  let lastType = "";
  let cx = 0, cy = 0;
  let subx = 0, suby = 0;
  let lcx = 0, lcy = 0;
  for (const { key, data } of segments) {
    switch (key) {
      case "M":
        out.push({ key: "M", data: [...data] });
        [cx, cy] = data;
        [subx, suby] = data;
        break;
      case "C":
        out.push({ key: "C", data: [...data] });
        cx = data[4];
        cy = data[5];
        lcx = data[2];
        lcy = data[3];
        break;
      case "L":
        out.push({ key: "L", data: [...data] });
        [cx, cy] = data;
        break;
      case "H":
        cx = data[0];
        out.push({ key: "L", data: [cx, cy] });
        break;
      case "V":
        cy = data[0];
        out.push({ key: "L", data: [cx, cy] });
        break;
      case "S": {
        let cx1 = 0, cy1 = 0;
        if (lastType === "C" || lastType === "S") {
          cx1 = cx + (cx - lcx);
          cy1 = cy + (cy - lcy);
        } else {
          cx1 = cx;
          cy1 = cy;
        }
        out.push({ key: "C", data: [cx1, cy1, ...data] });
        lcx = data[0];
        lcy = data[1];
        cx = data[2];
        cy = data[3];
        break;
      }
      case "T": {
        const [x, y] = data;
        let x1 = 0, y1 = 0;
        if (lastType === "Q" || lastType === "T") {
          x1 = cx + (cx - lcx);
          y1 = cy + (cy - lcy);
        } else {
          x1 = cx;
          y1 = cy;
        }
        const cx1 = cx + 2 * (x1 - cx) / 3;
        const cy1 = cy + 2 * (y1 - cy) / 3;
        const cx2 = x + 2 * (x1 - x) / 3;
        const cy2 = y + 2 * (y1 - y) / 3;
        out.push({ key: "C", data: [cx1, cy1, cx2, cy2, x, y] });
        lcx = x1;
        lcy = y1;
        cx = x;
        cy = y;
        break;
      }
      case "Q": {
        const [x1, y1, x, y] = data;
        const cx1 = cx + 2 * (x1 - cx) / 3;
        const cy1 = cy + 2 * (y1 - cy) / 3;
        const cx2 = x + 2 * (x1 - x) / 3;
        const cy2 = y + 2 * (y1 - y) / 3;
        out.push({ key: "C", data: [cx1, cy1, cx2, cy2, x, y] });
        lcx = x1;
        lcy = y1;
        cx = x;
        cy = y;
        break;
      }
      case "A": {
        const r1 = Math.abs(data[0]);
        const r2 = Math.abs(data[1]);
        const angle = data[2];
        const largeArcFlag = data[3];
        const sweepFlag = data[4];
        const x = data[5];
        const y = data[6];
        if (r1 === 0 || r2 === 0) {
          out.push({ key: "C", data: [cx, cy, x, y, x, y] });
          cx = x;
          cy = y;
        } else {
          if (cx !== x || cy !== y) {
            const curves = arcToCubicCurves(cx, cy, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
            curves.forEach(function(curve3) {
              out.push({ key: "C", data: curve3 });
            });
            cx = x;
            cy = y;
          }
        }
        break;
      }
      case "Z":
        out.push({ key: "Z", data: [] });
        cx = subx;
        cy = suby;
        break;
    }
    lastType = key;
  }
  return out;
}
function degToRad(degrees) {
  return Math.PI * degrees / 180;
}
function rotate(x, y, angleRad) {
  const X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
  const Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
  return [X, Y];
}
function arcToCubicCurves(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, recursive) {
  const angleRad = degToRad(angle);
  let params = [];
  let f1 = 0, f2 = 0, cx = 0, cy = 0;
  if (recursive) {
    [f1, f2, cx, cy] = recursive;
  } else {
    [x1, y1] = rotate(x1, y1, -angleRad);
    [x2, y2] = rotate(x2, y2, -angleRad);
    const x = (x1 - x2) / 2;
    const y = (y1 - y2) / 2;
    let h = x * x / (r1 * r1) + y * y / (r2 * r2);
    if (h > 1) {
      h = Math.sqrt(h);
      r1 = h * r1;
      r2 = h * r2;
    }
    const sign2 = largeArcFlag === sweepFlag ? -1 : 1;
    const r1Pow = r1 * r1;
    const r2Pow = r2 * r2;
    const left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
    const right = r1Pow * y * y + r2Pow * x * x;
    const k = sign2 * Math.sqrt(Math.abs(left / right));
    cx = k * r1 * y / r2 + (x1 + x2) / 2;
    cy = k * -r2 * x / r1 + (y1 + y2) / 2;
    f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
    f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));
    if (x1 < cx) {
      f1 = Math.PI - f1;
    }
    if (x2 < cx) {
      f2 = Math.PI - f2;
    }
    if (f1 < 0) {
      f1 = Math.PI * 2 + f1;
    }
    if (f2 < 0) {
      f2 = Math.PI * 2 + f2;
    }
    if (sweepFlag && f1 > f2) {
      f1 = f1 - Math.PI * 2;
    }
    if (!sweepFlag && f2 > f1) {
      f2 = f2 - Math.PI * 2;
    }
  }
  let df = f2 - f1;
  if (Math.abs(df) > Math.PI * 120 / 180) {
    const f2old = f2;
    const x2old = x2;
    const y2old = y2;
    if (sweepFlag && f2 > f1) {
      f2 = f1 + Math.PI * 120 / 180 * 1;
    } else {
      f2 = f1 + Math.PI * 120 / 180 * -1;
    }
    x2 = cx + r1 * Math.cos(f2);
    y2 = cy + r2 * Math.sin(f2);
    params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [f2, f2old, cx, cy]);
  }
  df = f2 - f1;
  const c1 = Math.cos(f1);
  const s1 = Math.sin(f1);
  const c2 = Math.cos(f2);
  const s2 = Math.sin(f2);
  const t2 = Math.tan(df / 4);
  const hx = 4 / 3 * r1 * t2;
  const hy = 4 / 3 * r2 * t2;
  const m1 = [x1, y1];
  const m2 = [x1 + hx * s1, y1 - hy * c1];
  const m3 = [x2 + hx * s2, y2 - hy * c2];
  const m4 = [x2, y2];
  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];
  if (recursive) {
    return [m2, m3, m4].concat(params);
  } else {
    params = [m2, m3, m4].concat(params);
    const curves = [];
    for (let i2 = 0; i2 < params.length; i2 += 3) {
      const r12 = rotate(params[i2][0], params[i2][1], angleRad);
      const r22 = rotate(params[i2 + 1][0], params[i2 + 1][1], angleRad);
      const r3 = rotate(params[i2 + 2][0], params[i2 + 2][1], angleRad);
      curves.push([r12[0], r12[1], r22[0], r22[1], r3[0], r3[1]]);
    }
    return curves;
  }
}

// ../../node_modules/roughjs/bin/renderer.js
var helper = {
  randOffset,
  randOffsetWithRange,
  ellipse,
  doubleLineOps: doubleLineFillOps
};
function line(x1, y1, x2, y2, o2) {
  return { type: "path", ops: _doubleLine(x1, y1, x2, y2, o2) };
}
function linearPath(points, close, o2) {
  const len = (points || []).length;
  if (len > 2) {
    const ops = [];
    for (let i2 = 0; i2 < len - 1; i2++) {
      ops.push(..._doubleLine(points[i2][0], points[i2][1], points[i2 + 1][0], points[i2 + 1][1], o2));
    }
    if (close) {
      ops.push(..._doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o2));
    }
    return { type: "path", ops };
  } else if (len === 2) {
    return line(points[0][0], points[0][1], points[1][0], points[1][1], o2);
  }
  return { type: "path", ops: [] };
}
function polygon2(points, o2) {
  return linearPath(points, true, o2);
}
function rectangle(x, y, width, height, o2) {
  const points = [
    [x, y],
    [x + width, y],
    [x + width, y + height],
    [x, y + height]
  ];
  return polygon2(points, o2);
}
function curve2(points, o2) {
  let o1 = _curveWithOffset(points, 1 * (1 + o2.roughness * 0.2), o2);
  if (!o2.disableMultiStroke) {
    const o22 = _curveWithOffset(points, 1.5 * (1 + o2.roughness * 0.22), cloneOptionsAlterSeed(o2));
    o1 = o1.concat(o22);
  }
  return { type: "path", ops: o1 };
}
function ellipse(x, y, width, height, o2) {
  const params = generateEllipseParams(width, height, o2);
  return ellipseWithParams(x, y, o2, params).opset;
}
function generateEllipseParams(width, height, o2) {
  const psq = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) / 2));
  const stepCount = Math.ceil(Math.max(o2.curveStepCount, o2.curveStepCount / Math.sqrt(200) * psq));
  const increment = Math.PI * 2 / stepCount;
  let rx = Math.abs(width / 2);
  let ry = Math.abs(height / 2);
  const curveFitRandomness = 1 - o2.curveFitting;
  rx += _offsetOpt(rx * curveFitRandomness, o2);
  ry += _offsetOpt(ry * curveFitRandomness, o2);
  return { increment, rx, ry };
}
function ellipseWithParams(x, y, o2, ellipseParams) {
  const [ap1, cp1] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1, ellipseParams.increment * _offset(0.1, _offset(0.4, 1, o2), o2), o2);
  let o1 = _curve(ap1, null, o2);
  if (!o2.disableMultiStroke && o2.roughness !== 0) {
    const [ap2] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1.5, 0, o2);
    const o22 = _curve(ap2, null, o2);
    o1 = o1.concat(o22);
  }
  return {
    estimatedPoints: cp1,
    opset: { type: "path", ops: o1 }
  };
}
function arc(x, y, width, height, start2, stop2, closed, roughClosure, o2) {
  const cx = x;
  const cy = y;
  let rx = Math.abs(width / 2);
  let ry = Math.abs(height / 2);
  rx += _offsetOpt(rx * 0.01, o2);
  ry += _offsetOpt(ry * 0.01, o2);
  let strt = start2;
  let stp = stop2;
  while (strt < 0) {
    strt += Math.PI * 2;
    stp += Math.PI * 2;
  }
  if (stp - strt > Math.PI * 2) {
    strt = 0;
    stp = Math.PI * 2;
  }
  const ellipseInc = Math.PI * 2 / o2.curveStepCount;
  const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
  const ops = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o2);
  if (!o2.disableMultiStroke) {
    const o22 = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o2);
    ops.push(...o22);
  }
  if (closed) {
    if (roughClosure) {
      ops.push(..._doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o2), ..._doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o2));
    } else {
      ops.push({ op: "lineTo", data: [cx, cy] }, { op: "lineTo", data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)] });
    }
  }
  return { type: "path", ops };
}
function svgPath(path, o2) {
  const segments = normalize(absolutize(parsePath(path)));
  const ops = [];
  let first = [0, 0];
  let current = [0, 0];
  for (const { key, data } of segments) {
    switch (key) {
      case "M": {
        current = [data[0], data[1]];
        first = [data[0], data[1]];
        break;
      }
      case "L":
        ops.push(..._doubleLine(current[0], current[1], data[0], data[1], o2));
        current = [data[0], data[1]];
        break;
      case "C": {
        const [x1, y1, x2, y2, x, y] = data;
        ops.push(..._bezierTo(x1, y1, x2, y2, x, y, current, o2));
        current = [x, y];
        break;
      }
      case "Z":
        ops.push(..._doubleLine(current[0], current[1], first[0], first[1], o2));
        current = [first[0], first[1]];
        break;
    }
  }
  return { type: "path", ops };
}
function solidFillPolygon(polygonList, o2) {
  const ops = [];
  for (const points of polygonList) {
    if (points.length) {
      const offset2 = o2.maxRandomnessOffset || 0;
      const len = points.length;
      if (len > 2) {
        ops.push({ op: "move", data: [points[0][0] + _offsetOpt(offset2, o2), points[0][1] + _offsetOpt(offset2, o2)] });
        for (let i2 = 1; i2 < len; i2++) {
          ops.push({ op: "lineTo", data: [points[i2][0] + _offsetOpt(offset2, o2), points[i2][1] + _offsetOpt(offset2, o2)] });
        }
      }
    }
  }
  return { type: "fillPath", ops };
}
function patternFillPolygons(polygonList, o2) {
  return getFiller(o2, helper).fillPolygons(polygonList, o2);
}
function patternFillArc(x, y, width, height, start2, stop2, o2) {
  const cx = x;
  const cy = y;
  let rx = Math.abs(width / 2);
  let ry = Math.abs(height / 2);
  rx += _offsetOpt(rx * 0.01, o2);
  ry += _offsetOpt(ry * 0.01, o2);
  let strt = start2;
  let stp = stop2;
  while (strt < 0) {
    strt += Math.PI * 2;
    stp += Math.PI * 2;
  }
  if (stp - strt > Math.PI * 2) {
    strt = 0;
    stp = Math.PI * 2;
  }
  const increment = (stp - strt) / o2.curveStepCount;
  const points = [];
  for (let angle = strt; angle <= stp; angle = angle + increment) {
    points.push([cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)]);
  }
  points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
  points.push([cx, cy]);
  return patternFillPolygons([points], o2);
}
function randOffset(x, o2) {
  return _offsetOpt(x, o2);
}
function randOffsetWithRange(min, max, o2) {
  return _offset(min, max, o2);
}
function doubleLineFillOps(x1, y1, x2, y2, o2) {
  return _doubleLine(x1, y1, x2, y2, o2, true);
}
function cloneOptionsAlterSeed(ops) {
  const result = Object.assign({}, ops);
  result.randomizer = void 0;
  if (ops.seed) {
    result.seed = ops.seed + 1;
  }
  return result;
}
function random(ops) {
  if (!ops.randomizer) {
    ops.randomizer = new Random(ops.seed || 0);
  }
  return ops.randomizer.next();
}
function _offset(min, max, ops, roughnessGain = 1) {
  return ops.roughness * roughnessGain * (random(ops) * (max - min) + min);
}
function _offsetOpt(x, ops, roughnessGain = 1) {
  return _offset(-x, x, ops, roughnessGain);
}
function _doubleLine(x1, y1, x2, y2, o2, filling = false) {
  const singleStroke = filling ? o2.disableMultiStrokeFill : o2.disableMultiStroke;
  const o1 = _line(x1, y1, x2, y2, o2, true, false);
  if (singleStroke) {
    return o1;
  }
  const o22 = _line(x1, y1, x2, y2, o2, true, true);
  return o1.concat(o22);
}
function _line(x1, y1, x2, y2, o2, move, overlay) {
  const lengthSq = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
  const length = Math.sqrt(lengthSq);
  let roughnessGain = 1;
  if (length < 200) {
    roughnessGain = 1;
  } else if (length > 500) {
    roughnessGain = 0.4;
  } else {
    roughnessGain = -16668e-7 * length + 1.233334;
  }
  let offset2 = o2.maxRandomnessOffset || 0;
  if (offset2 * offset2 * 100 > lengthSq) {
    offset2 = length / 10;
  }
  const halfOffset = offset2 / 2;
  const divergePoint = 0.2 + random(o2) * 0.2;
  let midDispX = o2.bowing * o2.maxRandomnessOffset * (y2 - y1) / 200;
  let midDispY = o2.bowing * o2.maxRandomnessOffset * (x1 - x2) / 200;
  midDispX = _offsetOpt(midDispX, o2, roughnessGain);
  midDispY = _offsetOpt(midDispY, o2, roughnessGain);
  const ops = [];
  const randomHalf = () => _offsetOpt(halfOffset, o2, roughnessGain);
  const randomFull = () => _offsetOpt(offset2, o2, roughnessGain);
  const preserveVertices = o2.preserveVertices;
  if (move) {
    if (overlay) {
      ops.push({
        op: "move",
        data: [
          x1 + (preserveVertices ? 0 : randomHalf()),
          y1 + (preserveVertices ? 0 : randomHalf())
        ]
      });
    } else {
      ops.push({
        op: "move",
        data: [
          x1 + (preserveVertices ? 0 : _offsetOpt(offset2, o2, roughnessGain)),
          y1 + (preserveVertices ? 0 : _offsetOpt(offset2, o2, roughnessGain))
        ]
      });
    }
  }
  if (overlay) {
    ops.push({
      op: "bcurveTo",
      data: [
        midDispX + x1 + (x2 - x1) * divergePoint + randomHalf(),
        midDispY + y1 + (y2 - y1) * divergePoint + randomHalf(),
        midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomHalf(),
        midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomHalf(),
        x2 + (preserveVertices ? 0 : randomHalf()),
        y2 + (preserveVertices ? 0 : randomHalf())
      ]
    });
  } else {
    ops.push({
      op: "bcurveTo",
      data: [
        midDispX + x1 + (x2 - x1) * divergePoint + randomFull(),
        midDispY + y1 + (y2 - y1) * divergePoint + randomFull(),
        midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomFull(),
        midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomFull(),
        x2 + (preserveVertices ? 0 : randomFull()),
        y2 + (preserveVertices ? 0 : randomFull())
      ]
    });
  }
  return ops;
}
function _curveWithOffset(points, offset2, o2) {
  const ps = [];
  ps.push([
    points[0][0] + _offsetOpt(offset2, o2),
    points[0][1] + _offsetOpt(offset2, o2)
  ]);
  ps.push([
    points[0][0] + _offsetOpt(offset2, o2),
    points[0][1] + _offsetOpt(offset2, o2)
  ]);
  for (let i2 = 1; i2 < points.length; i2++) {
    ps.push([
      points[i2][0] + _offsetOpt(offset2, o2),
      points[i2][1] + _offsetOpt(offset2, o2)
    ]);
    if (i2 === points.length - 1) {
      ps.push([
        points[i2][0] + _offsetOpt(offset2, o2),
        points[i2][1] + _offsetOpt(offset2, o2)
      ]);
    }
  }
  return _curve(ps, null, o2);
}
function _curve(points, closePoint, o2) {
  const len = points.length;
  const ops = [];
  if (len > 3) {
    const b2 = [];
    const s2 = 1 - o2.curveTightness;
    ops.push({ op: "move", data: [points[1][0], points[1][1]] });
    for (let i2 = 1; i2 + 2 < len; i2++) {
      const cachedVertArray = points[i2];
      b2[0] = [cachedVertArray[0], cachedVertArray[1]];
      b2[1] = [cachedVertArray[0] + (s2 * points[i2 + 1][0] - s2 * points[i2 - 1][0]) / 6, cachedVertArray[1] + (s2 * points[i2 + 1][1] - s2 * points[i2 - 1][1]) / 6];
      b2[2] = [points[i2 + 1][0] + (s2 * points[i2][0] - s2 * points[i2 + 2][0]) / 6, points[i2 + 1][1] + (s2 * points[i2][1] - s2 * points[i2 + 2][1]) / 6];
      b2[3] = [points[i2 + 1][0], points[i2 + 1][1]];
      ops.push({ op: "bcurveTo", data: [b2[1][0], b2[1][1], b2[2][0], b2[2][1], b2[3][0], b2[3][1]] });
    }
    if (closePoint && closePoint.length === 2) {
      const ro = o2.maxRandomnessOffset;
      ops.push({ op: "lineTo", data: [closePoint[0] + _offsetOpt(ro, o2), closePoint[1] + _offsetOpt(ro, o2)] });
    }
  } else if (len === 3) {
    ops.push({ op: "move", data: [points[1][0], points[1][1]] });
    ops.push({
      op: "bcurveTo",
      data: [
        points[1][0],
        points[1][1],
        points[2][0],
        points[2][1],
        points[2][0],
        points[2][1]
      ]
    });
  } else if (len === 2) {
    ops.push(..._doubleLine(points[0][0], points[0][1], points[1][0], points[1][1], o2));
  }
  return ops;
}
function _computeEllipsePoints(increment, cx, cy, rx, ry, offset2, overlap, o2) {
  const coreOnly = o2.roughness === 0;
  const corePoints = [];
  const allPoints = [];
  if (coreOnly) {
    increment = increment / 4;
    allPoints.push([
      cx + rx * Math.cos(-increment),
      cy + ry * Math.sin(-increment)
    ]);
    for (let angle = 0; angle <= Math.PI * 2; angle = angle + increment) {
      const p = [
        cx + rx * Math.cos(angle),
        cy + ry * Math.sin(angle)
      ];
      corePoints.push(p);
      allPoints.push(p);
    }
    allPoints.push([
      cx + rx * Math.cos(0),
      cy + ry * Math.sin(0)
    ]);
    allPoints.push([
      cx + rx * Math.cos(increment),
      cy + ry * Math.sin(increment)
    ]);
  } else {
    const radOffset = _offsetOpt(0.5, o2) - Math.PI / 2;
    allPoints.push([
      _offsetOpt(offset2, o2) + cx + 0.9 * rx * Math.cos(radOffset - increment),
      _offsetOpt(offset2, o2) + cy + 0.9 * ry * Math.sin(radOffset - increment)
    ]);
    const endAngle = Math.PI * 2 + radOffset - 0.01;
    for (let angle = radOffset; angle < endAngle; angle = angle + increment) {
      const p = [
        _offsetOpt(offset2, o2) + cx + rx * Math.cos(angle),
        _offsetOpt(offset2, o2) + cy + ry * Math.sin(angle)
      ];
      corePoints.push(p);
      allPoints.push(p);
    }
    allPoints.push([
      _offsetOpt(offset2, o2) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5),
      _offsetOpt(offset2, o2) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)
    ]);
    allPoints.push([
      _offsetOpt(offset2, o2) + cx + 0.98 * rx * Math.cos(radOffset + overlap),
      _offsetOpt(offset2, o2) + cy + 0.98 * ry * Math.sin(radOffset + overlap)
    ]);
    allPoints.push([
      _offsetOpt(offset2, o2) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5),
      _offsetOpt(offset2, o2) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)
    ]);
  }
  return [allPoints, corePoints];
}
function _arc(increment, cx, cy, rx, ry, strt, stp, offset2, o2) {
  const radOffset = strt + _offsetOpt(0.1, o2);
  const points = [];
  points.push([
    _offsetOpt(offset2, o2) + cx + 0.9 * rx * Math.cos(radOffset - increment),
    _offsetOpt(offset2, o2) + cy + 0.9 * ry * Math.sin(radOffset - increment)
  ]);
  for (let angle = radOffset; angle <= stp; angle = angle + increment) {
    points.push([
      _offsetOpt(offset2, o2) + cx + rx * Math.cos(angle),
      _offsetOpt(offset2, o2) + cy + ry * Math.sin(angle)
    ]);
  }
  points.push([
    cx + rx * Math.cos(stp),
    cy + ry * Math.sin(stp)
  ]);
  points.push([
    cx + rx * Math.cos(stp),
    cy + ry * Math.sin(stp)
  ]);
  return _curve(points, null, o2);
}
function _bezierTo(x1, y1, x2, y2, x, y, current, o2) {
  const ops = [];
  const ros = [o2.maxRandomnessOffset || 1, (o2.maxRandomnessOffset || 1) + 0.3];
  let f = [0, 0];
  const iterations = o2.disableMultiStroke ? 1 : 2;
  const preserveVertices = o2.preserveVertices;
  for (let i2 = 0; i2 < iterations; i2++) {
    if (i2 === 0) {
      ops.push({ op: "move", data: [current[0], current[1]] });
    } else {
      ops.push({ op: "move", data: [current[0] + (preserveVertices ? 0 : _offsetOpt(ros[0], o2)), current[1] + (preserveVertices ? 0 : _offsetOpt(ros[0], o2))] });
    }
    f = preserveVertices ? [x, y] : [x + _offsetOpt(ros[i2], o2), y + _offsetOpt(ros[i2], o2)];
    ops.push({
      op: "bcurveTo",
      data: [
        x1 + _offsetOpt(ros[i2], o2),
        y1 + _offsetOpt(ros[i2], o2),
        x2 + _offsetOpt(ros[i2], o2),
        y2 + _offsetOpt(ros[i2], o2),
        f[0],
        f[1]
      ]
    });
  }
  return ops;
}

// ../../node_modules/points-on-curve/lib/curve-to-bezier.js
init_define_import_meta_env();
function clone(p) {
  return [...p];
}
function curveToBezier(pointsIn, curveTightness = 0) {
  const len = pointsIn.length;
  if (len < 3) {
    throw new Error("A curve must have at least three points.");
  }
  const out = [];
  if (len === 3) {
    out.push(clone(pointsIn[0]), clone(pointsIn[1]), clone(pointsIn[2]), clone(pointsIn[2]));
  } else {
    const points = [];
    points.push(pointsIn[0], pointsIn[0]);
    for (let i2 = 1; i2 < pointsIn.length; i2++) {
      points.push(pointsIn[i2]);
      if (i2 === pointsIn.length - 1) {
        points.push(pointsIn[i2]);
      }
    }
    const b2 = [];
    const s2 = 1 - curveTightness;
    out.push(clone(points[0]));
    for (let i2 = 1; i2 + 2 < points.length; i2++) {
      const cachedVertArray = points[i2];
      b2[0] = [cachedVertArray[0], cachedVertArray[1]];
      b2[1] = [cachedVertArray[0] + (s2 * points[i2 + 1][0] - s2 * points[i2 - 1][0]) / 6, cachedVertArray[1] + (s2 * points[i2 + 1][1] - s2 * points[i2 - 1][1]) / 6];
      b2[2] = [points[i2 + 1][0] + (s2 * points[i2][0] - s2 * points[i2 + 2][0]) / 6, points[i2 + 1][1] + (s2 * points[i2][1] - s2 * points[i2 + 2][1]) / 6];
      b2[3] = [points[i2 + 1][0], points[i2 + 1][1]];
      out.push(b2[1], b2[2], b2[3]);
    }
  }
  return out;
}

// ../../node_modules/points-on-curve/lib/index.js
init_define_import_meta_env();
function distance2(p1, p2) {
  return Math.sqrt(distanceSq(p1, p2));
}
function distanceSq(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
function distanceToSegmentSq(p, v, w) {
  const l2 = distanceSq(v, w);
  if (l2 === 0) {
    return distanceSq(p, v);
  }
  let t2 = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
  t2 = Math.max(0, Math.min(1, t2));
  return distanceSq(p, lerp(v, w, t2));
}
function lerp(a2, b2, t2) {
  return [
    a2[0] + (b2[0] - a2[0]) * t2,
    a2[1] + (b2[1] - a2[1]) * t2
  ];
}
function flatness(points, offset2) {
  const p1 = points[offset2 + 0];
  const p2 = points[offset2 + 1];
  const p3 = points[offset2 + 2];
  const p4 = points[offset2 + 3];
  let ux = 3 * p2[0] - 2 * p1[0] - p4[0];
  ux *= ux;
  let uy = 3 * p2[1] - 2 * p1[1] - p4[1];
  uy *= uy;
  let vx = 3 * p3[0] - 2 * p4[0] - p1[0];
  vx *= vx;
  let vy = 3 * p3[1] - 2 * p4[1] - p1[1];
  vy *= vy;
  if (ux < vx) {
    ux = vx;
  }
  if (uy < vy) {
    uy = vy;
  }
  return ux + uy;
}
function getPointsOnBezierCurveWithSplitting(points, offset2, tolerance, newPoints) {
  const outPoints = newPoints || [];
  if (flatness(points, offset2) < tolerance) {
    const p0 = points[offset2 + 0];
    if (outPoints.length) {
      const d = distance2(outPoints[outPoints.length - 1], p0);
      if (d > 1) {
        outPoints.push(p0);
      }
    } else {
      outPoints.push(p0);
    }
    outPoints.push(points[offset2 + 3]);
  } else {
    const t2 = 0.5;
    const p1 = points[offset2 + 0];
    const p2 = points[offset2 + 1];
    const p3 = points[offset2 + 2];
    const p4 = points[offset2 + 3];
    const q1 = lerp(p1, p2, t2);
    const q2 = lerp(p2, p3, t2);
    const q3 = lerp(p3, p4, t2);
    const r1 = lerp(q1, q2, t2);
    const r2 = lerp(q2, q3, t2);
    const red = lerp(r1, r2, t2);
    getPointsOnBezierCurveWithSplitting([p1, q1, r1, red], 0, tolerance, outPoints);
    getPointsOnBezierCurveWithSplitting([red, r2, q3, p4], 0, tolerance, outPoints);
  }
  return outPoints;
}
function simplify(points, distance4) {
  return simplifyPoints(points, 0, points.length, distance4);
}
function simplifyPoints(points, start2, end, epsilon, newPoints) {
  const outPoints = newPoints || [];
  const s2 = points[start2];
  const e2 = points[end - 1];
  let maxDistSq = 0;
  let maxNdx = 1;
  for (let i2 = start2 + 1; i2 < end - 1; ++i2) {
    const distSq = distanceToSegmentSq(points[i2], s2, e2);
    if (distSq > maxDistSq) {
      maxDistSq = distSq;
      maxNdx = i2;
    }
  }
  if (Math.sqrt(maxDistSq) > epsilon) {
    simplifyPoints(points, start2, maxNdx + 1, epsilon, outPoints);
    simplifyPoints(points, maxNdx, end, epsilon, outPoints);
  } else {
    if (!outPoints.length) {
      outPoints.push(s2);
    }
    outPoints.push(e2);
  }
  return outPoints;
}
function pointsOnBezierCurves(points, tolerance = 0.15, distance4) {
  const newPoints = [];
  const numSegments = (points.length - 1) / 3;
  for (let i2 = 0; i2 < numSegments; i2++) {
    const offset2 = i2 * 3;
    getPointsOnBezierCurveWithSplitting(points, offset2, tolerance, newPoints);
  }
  if (distance4 && distance4 > 0) {
    return simplifyPoints(newPoints, 0, newPoints.length, distance4);
  }
  return newPoints;
}

// ../../node_modules/points-on-path/lib/index.js
init_define_import_meta_env();
function pointsOnPath(path, tolerance, distance4) {
  const segments = parsePath(path);
  const normalized2 = normalize(absolutize(segments));
  const sets = [];
  let currentPoints = [];
  let start2 = [0, 0];
  let pendingCurve = [];
  const appendPendingCurve = () => {
    if (pendingCurve.length >= 4) {
      currentPoints.push(...pointsOnBezierCurves(pendingCurve, tolerance));
    }
    pendingCurve = [];
  };
  const appendPendingPoints = () => {
    appendPendingCurve();
    if (currentPoints.length) {
      sets.push(currentPoints);
      currentPoints = [];
    }
  };
  for (const { key, data } of normalized2) {
    switch (key) {
      case "M":
        appendPendingPoints();
        start2 = [data[0], data[1]];
        currentPoints.push(start2);
        break;
      case "L":
        appendPendingCurve();
        currentPoints.push([data[0], data[1]]);
        break;
      case "C":
        if (!pendingCurve.length) {
          const lastPoint = currentPoints.length ? currentPoints[currentPoints.length - 1] : start2;
          pendingCurve.push([lastPoint[0], lastPoint[1]]);
        }
        pendingCurve.push([data[0], data[1]]);
        pendingCurve.push([data[2], data[3]]);
        pendingCurve.push([data[4], data[5]]);
        break;
      case "Z":
        appendPendingCurve();
        currentPoints.push([start2[0], start2[1]]);
        break;
    }
  }
  appendPendingPoints();
  if (!distance4) {
    return sets;
  }
  const out = [];
  for (const set of sets) {
    const simplifiedSet = simplify(set, distance4);
    if (simplifiedSet.length) {
      out.push(simplifiedSet);
    }
  }
  return out;
}

// ../../node_modules/roughjs/bin/generator.js
var NOS = "none";
var RoughGenerator = class {
  constructor(config) {
    this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: "#000",
      strokeWidth: 1,
      curveTightness: 0,
      curveFitting: 0.95,
      curveStepCount: 9,
      fillStyle: "hachure",
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1,
      dashOffset: -1,
      dashGap: -1,
      zigzagOffset: -1,
      seed: 0,
      disableMultiStroke: false,
      disableMultiStrokeFill: false,
      preserveVertices: false,
      fillShapeRoughnessGain: 0.8
    };
    this.config = config || {};
    if (this.config.options) {
      this.defaultOptions = this._o(this.config.options);
    }
  }
  static newSeed() {
    return randomSeed();
  }
  _o(options) {
    return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
  }
  _d(shape, sets, options) {
    return { shape, sets: sets || [], options: options || this.defaultOptions };
  }
  line(x1, y1, x2, y2, options) {
    const o2 = this._o(options);
    return this._d("line", [line(x1, y1, x2, y2, o2)], o2);
  }
  rectangle(x, y, width, height, options) {
    const o2 = this._o(options);
    const paths = [];
    const outline = rectangle(x, y, width, height, o2);
    if (o2.fill) {
      const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
      if (o2.fillStyle === "solid") {
        paths.push(solidFillPolygon([points], o2));
      } else {
        paths.push(patternFillPolygons([points], o2));
      }
    }
    if (o2.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("rectangle", paths, o2);
  }
  ellipse(x, y, width, height, options) {
    const o2 = this._o(options);
    const paths = [];
    const ellipseParams = generateEllipseParams(width, height, o2);
    const ellipseResponse = ellipseWithParams(x, y, o2, ellipseParams);
    if (o2.fill) {
      if (o2.fillStyle === "solid") {
        const shape = ellipseWithParams(x, y, o2, ellipseParams).opset;
        shape.type = "fillPath";
        paths.push(shape);
      } else {
        paths.push(patternFillPolygons([ellipseResponse.estimatedPoints], o2));
      }
    }
    if (o2.stroke !== NOS) {
      paths.push(ellipseResponse.opset);
    }
    return this._d("ellipse", paths, o2);
  }
  circle(x, y, diameter, options) {
    const ret = this.ellipse(x, y, diameter, diameter, options);
    ret.shape = "circle";
    return ret;
  }
  linearPath(points, options) {
    const o2 = this._o(options);
    return this._d("linearPath", [linearPath(points, false, o2)], o2);
  }
  arc(x, y, width, height, start2, stop2, closed = false, options) {
    const o2 = this._o(options);
    const paths = [];
    const outline = arc(x, y, width, height, start2, stop2, closed, true, o2);
    if (closed && o2.fill) {
      if (o2.fillStyle === "solid") {
        const fillOptions = Object.assign({}, o2);
        fillOptions.disableMultiStroke = true;
        const shape = arc(x, y, width, height, start2, stop2, true, false, fillOptions);
        shape.type = "fillPath";
        paths.push(shape);
      } else {
        paths.push(patternFillArc(x, y, width, height, start2, stop2, o2));
      }
    }
    if (o2.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("arc", paths, o2);
  }
  curve(points, options) {
    const o2 = this._o(options);
    const paths = [];
    const outline = curve2(points, o2);
    if (o2.fill && o2.fill !== NOS && points.length >= 3) {
      if (o2.fillStyle === "solid") {
        const fillShape = curve2(points, Object.assign(Object.assign({}, o2), { disableMultiStroke: true, roughness: o2.roughness ? o2.roughness + o2.fillShapeRoughnessGain : 0 }));
        paths.push({
          type: "fillPath",
          ops: this._mergedShape(fillShape.ops)
        });
      } else {
        const bcurve = curveToBezier(points);
        const polyPoints = pointsOnBezierCurves(bcurve, 10, (1 + o2.roughness) / 2);
        paths.push(patternFillPolygons([polyPoints], o2));
      }
    }
    if (o2.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("curve", paths, o2);
  }
  polygon(points, options) {
    const o2 = this._o(options);
    const paths = [];
    const outline = linearPath(points, true, o2);
    if (o2.fill) {
      if (o2.fillStyle === "solid") {
        paths.push(solidFillPolygon([points], o2));
      } else {
        paths.push(patternFillPolygons([points], o2));
      }
    }
    if (o2.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("polygon", paths, o2);
  }
  path(d, options) {
    const o2 = this._o(options);
    const paths = [];
    if (!d) {
      return this._d("path", paths, o2);
    }
    d = (d || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const hasFill = o2.fill && o2.fill !== "transparent" && o2.fill !== NOS;
    const hasStroke = o2.stroke !== NOS;
    const simplified = !!(o2.simplification && o2.simplification < 1);
    const distance4 = simplified ? 4 - 4 * (o2.simplification || 1) : (1 + o2.roughness) / 2;
    const sets = pointsOnPath(d, 1, distance4);
    const shape = svgPath(d, o2);
    if (hasFill) {
      if (o2.fillStyle === "solid") {
        if (sets.length === 1) {
          const fillShape = svgPath(d, Object.assign(Object.assign({}, o2), { disableMultiStroke: true, roughness: o2.roughness ? o2.roughness + o2.fillShapeRoughnessGain : 0 }));
          paths.push({
            type: "fillPath",
            ops: this._mergedShape(fillShape.ops)
          });
        } else {
          paths.push(solidFillPolygon(sets, o2));
        }
      } else {
        paths.push(patternFillPolygons(sets, o2));
      }
    }
    if (hasStroke) {
      if (simplified) {
        sets.forEach((set) => {
          paths.push(linearPath(set, false, o2));
        });
      } else {
        paths.push(shape);
      }
    }
    return this._d("path", paths, o2);
  }
  opsToPath(drawing, fixedDecimals) {
    let path = "";
    for (const item of drawing.ops) {
      const data = typeof fixedDecimals === "number" && fixedDecimals >= 0 ? item.data.map((d) => +d.toFixed(fixedDecimals)) : item.data;
      switch (item.op) {
        case "move":
          path += `M${data[0]} ${data[1]} `;
          break;
        case "bcurveTo":
          path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
          break;
        case "lineTo":
          path += `L${data[0]} ${data[1]} `;
          break;
      }
    }
    return path.trim();
  }
  toPaths(drawable) {
    const sets = drawable.sets || [];
    const o2 = drawable.options || this.defaultOptions;
    const paths = [];
    for (const drawing of sets) {
      let path = null;
      switch (drawing.type) {
        case "path":
          path = {
            d: this.opsToPath(drawing),
            stroke: o2.stroke,
            strokeWidth: o2.strokeWidth,
            fill: NOS
          };
          break;
        case "fillPath":
          path = {
            d: this.opsToPath(drawing),
            stroke: NOS,
            strokeWidth: 0,
            fill: o2.fill || NOS
          };
          break;
        case "fillSketch":
          path = this.fillSketch(drawing, o2);
          break;
      }
      if (path) {
        paths.push(path);
      }
    }
    return paths;
  }
  fillSketch(drawing, o2) {
    let fweight = o2.fillWeight;
    if (fweight < 0) {
      fweight = o2.strokeWidth / 2;
    }
    return {
      d: this.opsToPath(drawing),
      stroke: o2.fill || NOS,
      strokeWidth: fweight,
      fill: NOS
    };
  }
  _mergedShape(input) {
    return input.filter((d, i2) => {
      if (i2 === 0) {
        return true;
      }
      if (d.op === "move") {
        return false;
      }
      return true;
    });
  }
};

// ../../node_modules/roughjs/bin/canvas.js
var RoughCanvas = class {
  constructor(canvas2, config) {
    this.canvas = canvas2;
    this.ctx = this.canvas.getContext("2d");
    this.gen = new RoughGenerator(config);
  }
  draw(drawable) {
    const sets = drawable.sets || [];
    const o2 = drawable.options || this.getDefaultOptions();
    const ctx = this.ctx;
    const precision = drawable.options.fixedDecimalPlaceDigits;
    for (const drawing of sets) {
      switch (drawing.type) {
        case "path":
          ctx.save();
          ctx.strokeStyle = o2.stroke === "none" ? "transparent" : o2.stroke;
          ctx.lineWidth = o2.strokeWidth;
          if (o2.strokeLineDash) {
            ctx.setLineDash(o2.strokeLineDash);
          }
          if (o2.strokeLineDashOffset) {
            ctx.lineDashOffset = o2.strokeLineDashOffset;
          }
          this._drawToContext(ctx, drawing, precision);
          ctx.restore();
          break;
        case "fillPath": {
          ctx.save();
          ctx.fillStyle = o2.fill || "";
          const fillRule = drawable.shape === "curve" || drawable.shape === "polygon" || drawable.shape === "path" ? "evenodd" : "nonzero";
          this._drawToContext(ctx, drawing, precision, fillRule);
          ctx.restore();
          break;
        }
        case "fillSketch":
          this.fillSketch(ctx, drawing, o2);
          break;
      }
    }
  }
  fillSketch(ctx, drawing, o2) {
    let fweight = o2.fillWeight;
    if (fweight < 0) {
      fweight = o2.strokeWidth / 2;
    }
    ctx.save();
    if (o2.fillLineDash) {
      ctx.setLineDash(o2.fillLineDash);
    }
    if (o2.fillLineDashOffset) {
      ctx.lineDashOffset = o2.fillLineDashOffset;
    }
    ctx.strokeStyle = o2.fill || "";
    ctx.lineWidth = fweight;
    this._drawToContext(ctx, drawing, o2.fixedDecimalPlaceDigits);
    ctx.restore();
  }
  _drawToContext(ctx, drawing, fixedDecimals, rule = "nonzero") {
    ctx.beginPath();
    for (const item of drawing.ops) {
      const data = typeof fixedDecimals === "number" && fixedDecimals >= 0 ? item.data.map((d) => +d.toFixed(fixedDecimals)) : item.data;
      switch (item.op) {
        case "move":
          ctx.moveTo(data[0], data[1]);
          break;
        case "bcurveTo":
          ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
          break;
        case "lineTo":
          ctx.lineTo(data[0], data[1]);
          break;
      }
    }
    if (drawing.type === "fillPath") {
      ctx.fill(rule);
    } else {
      ctx.stroke();
    }
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(x1, y1, x2, y2, options) {
    const d = this.gen.line(x1, y1, x2, y2, options);
    this.draw(d);
    return d;
  }
  rectangle(x, y, width, height, options) {
    const d = this.gen.rectangle(x, y, width, height, options);
    this.draw(d);
    return d;
  }
  ellipse(x, y, width, height, options) {
    const d = this.gen.ellipse(x, y, width, height, options);
    this.draw(d);
    return d;
  }
  circle(x, y, diameter, options) {
    const d = this.gen.circle(x, y, diameter, options);
    this.draw(d);
    return d;
  }
  linearPath(points, options) {
    const d = this.gen.linearPath(points, options);
    this.draw(d);
    return d;
  }
  polygon(points, options) {
    const d = this.gen.polygon(points, options);
    this.draw(d);
    return d;
  }
  arc(x, y, width, height, start2, stop2, closed = false, options) {
    const d = this.gen.arc(x, y, width, height, start2, stop2, closed, options);
    this.draw(d);
    return d;
  }
  curve(points, options) {
    const d = this.gen.curve(points, options);
    this.draw(d);
    return d;
  }
  path(d, options) {
    const drawing = this.gen.path(d, options);
    this.draw(drawing);
    return drawing;
  }
};

// ../../node_modules/roughjs/bin/svg.js
init_define_import_meta_env();

// ../../node_modules/roughjs/bin/core.js
init_define_import_meta_env();
var SVGNS = "http://www.w3.org/2000/svg";

// ../../node_modules/roughjs/bin/svg.js
var RoughSVG = class {
  constructor(svg, config) {
    this.svg = svg;
    this.gen = new RoughGenerator(config);
  }
  draw(drawable) {
    const sets = drawable.sets || [];
    const o2 = drawable.options || this.getDefaultOptions();
    const doc = this.svg.ownerDocument || window.document;
    const g = doc.createElementNS(SVGNS, "g");
    const precision = drawable.options.fixedDecimalPlaceDigits;
    for (const drawing of sets) {
      let path = null;
      switch (drawing.type) {
        case "path": {
          path = doc.createElementNS(SVGNS, "path");
          path.setAttribute("d", this.opsToPath(drawing, precision));
          path.setAttribute("stroke", o2.stroke);
          path.setAttribute("stroke-width", o2.strokeWidth + "");
          path.setAttribute("fill", "none");
          if (o2.strokeLineDash) {
            path.setAttribute("stroke-dasharray", o2.strokeLineDash.join(" ").trim());
          }
          if (o2.strokeLineDashOffset) {
            path.setAttribute("stroke-dashoffset", `${o2.strokeLineDashOffset}`);
          }
          break;
        }
        case "fillPath": {
          path = doc.createElementNS(SVGNS, "path");
          path.setAttribute("d", this.opsToPath(drawing, precision));
          path.setAttribute("stroke", "none");
          path.setAttribute("stroke-width", "0");
          path.setAttribute("fill", o2.fill || "");
          if (drawable.shape === "curve" || drawable.shape === "polygon") {
            path.setAttribute("fill-rule", "evenodd");
          }
          break;
        }
        case "fillSketch": {
          path = this.fillSketch(doc, drawing, o2);
          break;
        }
      }
      if (path) {
        g.appendChild(path);
      }
    }
    return g;
  }
  fillSketch(doc, drawing, o2) {
    let fweight = o2.fillWeight;
    if (fweight < 0) {
      fweight = o2.strokeWidth / 2;
    }
    const path = doc.createElementNS(SVGNS, "path");
    path.setAttribute("d", this.opsToPath(drawing, o2.fixedDecimalPlaceDigits));
    path.setAttribute("stroke", o2.fill || "");
    path.setAttribute("stroke-width", fweight + "");
    path.setAttribute("fill", "none");
    if (o2.fillLineDash) {
      path.setAttribute("stroke-dasharray", o2.fillLineDash.join(" ").trim());
    }
    if (o2.fillLineDashOffset) {
      path.setAttribute("stroke-dashoffset", `${o2.fillLineDashOffset}`);
    }
    return path;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(drawing, fixedDecimalPlaceDigits) {
    return this.gen.opsToPath(drawing, fixedDecimalPlaceDigits);
  }
  line(x1, y1, x2, y2, options) {
    const d = this.gen.line(x1, y1, x2, y2, options);
    return this.draw(d);
  }
  rectangle(x, y, width, height, options) {
    const d = this.gen.rectangle(x, y, width, height, options);
    return this.draw(d);
  }
  ellipse(x, y, width, height, options) {
    const d = this.gen.ellipse(x, y, width, height, options);
    return this.draw(d);
  }
  circle(x, y, diameter, options) {
    const d = this.gen.circle(x, y, diameter, options);
    return this.draw(d);
  }
  linearPath(points, options) {
    const d = this.gen.linearPath(points, options);
    return this.draw(d);
  }
  polygon(points, options) {
    const d = this.gen.polygon(points, options);
    return this.draw(d);
  }
  arc(x, y, width, height, start2, stop2, closed = false, options) {
    const d = this.gen.arc(x, y, width, height, start2, stop2, closed, options);
    return this.draw(d);
  }
  curve(points, options) {
    const d = this.gen.curve(points, options);
    return this.draw(d);
  }
  path(d, options) {
    const drawing = this.gen.path(d, options);
    return this.draw(drawing);
  }
};

// ../../node_modules/roughjs/bin/rough.js
var rough_default = {
  canvas(canvas2, config) {
    return new RoughCanvas(canvas2, config);
  },
  svg(svg, config) {
    return new RoughSVG(svg, config);
  },
  generator(config) {
    return new RoughGenerator(config);
  },
  newSeed() {
    return RoughGenerator.newSeed();
  }
};

// scene/Shape.ts
init_define_import_meta_env();

// renderer/renderElement.ts
init_define_import_meta_env();

// ../../node_modules/perfect-freehand/dist/esm/index.js
init_define_import_meta_env();
function $(e2, t2, u, x = (h) => h) {
  return e2 * x(0.5 - t2 * (0.5 - u));
}
function se(e2) {
  return [-e2[0], -e2[1]];
}
function l(e2, t2) {
  return [e2[0] + t2[0], e2[1] + t2[1]];
}
function a(e2, t2) {
  return [e2[0] - t2[0], e2[1] - t2[1]];
}
function b(e2, t2) {
  return [e2[0] * t2, e2[1] * t2];
}
function he(e2, t2) {
  return [e2[0] / t2, e2[1] / t2];
}
function R(e2) {
  return [e2[1], -e2[0]];
}
function B(e2, t2) {
  return e2[0] * t2[0] + e2[1] * t2[1];
}
function ue(e2, t2) {
  return e2[0] === t2[0] && e2[1] === t2[1];
}
function ge(e2) {
  return Math.hypot(e2[0], e2[1]);
}
function de(e2) {
  return e2[0] * e2[0] + e2[1] * e2[1];
}
function A(e2, t2) {
  return de(a(e2, t2));
}
function G(e2) {
  return he(e2, ge(e2));
}
function ie(e2, t2) {
  return Math.hypot(e2[1] - t2[1], e2[0] - t2[0]);
}
function L(e2, t2, u) {
  let x = Math.sin(u), h = Math.cos(u), y = e2[0] - t2[0], n2 = e2[1] - t2[1], f = y * h - n2 * x, d = y * x + n2 * h;
  return [f + t2[0], d + t2[1]];
}
function K(e2, t2, u) {
  return l(e2, b(a(t2, e2), u));
}
function ee(e2, t2, u) {
  return l(e2, b(t2, u));
}
var { min: C, PI: xe } = Math;
var pe = 0.275;
var V = xe + 1e-4;
function ce(e2, t2 = {}) {
  let { size: u = 16, smoothing: x = 0.5, thinning: h = 0.5, simulatePressure: y = true, easing: n2 = (r) => r, start: f = {}, end: d = {}, last: D = false } = t2, { cap: S = true, easing: j = (r) => r * (2 - r) } = f, { cap: q = true, easing: c = (r) => --r * r * r + 1 } = d;
  if (e2.length === 0 || u <= 0)
    return [];
  let p = e2[e2.length - 1].runningLength, g = f.taper === false ? 0 : f.taper === true ? Math.max(u, p) : f.taper, T = d.taper === false ? 0 : d.taper === true ? Math.max(u, p) : d.taper, te = Math.pow(u * x, 2), _ = [], M = [], H = e2.slice(0, 10).reduce((r, i2) => {
    let o2 = i2.pressure;
    if (y) {
      let s2 = C(1, i2.distance / u), W = C(1, 1 - s2);
      o2 = C(1, r + (W - r) * (s2 * pe));
    }
    return (r + o2) / 2;
  }, e2[0].pressure), m = $(u, h, e2[e2.length - 1].pressure, n2), U, X = e2[0].vector, z = e2[0].point, F = z, O = z, E = F, J = false;
  for (let r = 0; r < e2.length; r++) {
    let { pressure: i2 } = e2[r], { point: o2, vector: s2, distance: W, runningLength: I2 } = e2[r];
    if (r < e2.length - 1 && p - I2 < 3)
      continue;
    if (h) {
      if (y) {
        let v = C(1, W / u), Z = C(1, 1 - v);
        i2 = C(1, H + (Z - H) * (v * pe));
      }
      m = $(u, h, i2, n2);
    } else
      m = u / 2;
    U === void 0 && (U = m);
    let le = I2 < g ? j(I2 / g) : 1, fe = p - I2 < T ? c((p - I2) / T) : 1;
    m = Math.max(0.01, m * Math.min(le, fe));
    let re = (r < e2.length - 1 ? e2[r + 1] : e2[r]).vector, Y = r < e2.length - 1 ? B(s2, re) : 1, be = B(s2, X) < 0 && !J, ne = Y !== null && Y < 0;
    if (be || ne) {
      let v = b(R(X), m);
      for (let Z = 1 / 13, w = 0; w <= 1; w += Z)
        O = L(a(o2, v), o2, V * w), _.push(O), E = L(l(o2, v), o2, V * -w), M.push(E);
      z = O, F = E, ne && (J = true);
      continue;
    }
    if (J = false, r === e2.length - 1) {
      let v = b(R(s2), m);
      _.push(a(o2, v)), M.push(l(o2, v));
      continue;
    }
    let oe = b(R(K(re, s2, Y)), m);
    O = a(o2, oe), (r <= 1 || A(z, O) > te) && (_.push(O), z = O), E = l(o2, oe), (r <= 1 || A(F, E) > te) && (M.push(E), F = E), H = i2, X = s2;
  }
  let P = e2[0].point.slice(0, 2), k = e2.length > 1 ? e2[e2.length - 1].point.slice(0, 2) : l(e2[0].point, [1, 1]), Q = [], N = [];
  if (e2.length === 1) {
    if (!(g || T) || D) {
      let r = ee(P, G(R(a(P, k))), -(U || m)), i2 = [];
      for (let o2 = 1 / 13, s2 = o2; s2 <= 1; s2 += o2)
        i2.push(L(r, P, V * 2 * s2));
      return i2;
    }
  } else {
    if (!(g || T && e2.length === 1))
      if (S)
        for (let i2 = 1 / 13, o2 = i2; o2 <= 1; o2 += i2) {
          let s2 = L(M[0], P, V * o2);
          Q.push(s2);
        }
      else {
        let i2 = a(_[0], M[0]), o2 = b(i2, 0.5), s2 = b(i2, 0.51);
        Q.push(a(P, o2), a(P, s2), l(P, s2), l(P, o2));
      }
    let r = R(se(e2[e2.length - 1].vector));
    if (T || g && e2.length === 1)
      N.push(k);
    else if (q) {
      let i2 = ee(k, r, m);
      for (let o2 = 1 / 29, s2 = o2; s2 < 1; s2 += o2)
        N.push(L(i2, k, V * 3 * s2));
    } else
      N.push(l(k, b(r, m)), l(k, b(r, m * 0.99)), a(k, b(r, m * 0.99)), a(k, b(r, m)));
  }
  return _.concat(N, M.reverse(), Q);
}
function me(e2, t2 = {}) {
  var q;
  let { streamline: u = 0.5, size: x = 16, last: h = false } = t2;
  if (e2.length === 0)
    return [];
  let y = 0.15 + (1 - u) * 0.85, n2 = Array.isArray(e2[0]) ? e2 : e2.map(({ x: c, y: p, pressure: g = 0.5 }) => [c, p, g]);
  if (n2.length === 2) {
    let c = n2[1];
    n2 = n2.slice(0, -1);
    for (let p = 1; p < 5; p++)
      n2.push(K(n2[0], c, p / 4));
  }
  n2.length === 1 && (n2 = [...n2, [...l(n2[0], [1, 1]), ...n2[0].slice(2)]]);
  let f = [{ point: [n2[0][0], n2[0][1]], pressure: n2[0][2] >= 0 ? n2[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], d = false, D = 0, S = f[0], j = n2.length - 1;
  for (let c = 1; c < n2.length; c++) {
    let p = h && c === j ? n2[c].slice(0, 2) : K(S.point, n2[c], y);
    if (ue(S.point, p))
      continue;
    let g = ie(p, S.point);
    if (D += g, c < j && !d) {
      if (D < x)
        continue;
      d = true;
    }
    S = { point: p, pressure: n2[c][2] >= 0 ? n2[c][2] : 0.5, vector: G(a(S.point, p)), distance: g, runningLength: D }, f.push(S);
  }
  return f[0].vector = ((q = f[1]) == null ? void 0 : q.vector) || [0, 0], f;
}
function ae(e2, t2 = {}) {
  return ce(me(e2, t2), t2);
}

// scene/ShapeCache.ts
init_define_import_meta_env();
var ShapeCache = class _ShapeCache {
  static rg = new RoughGenerator();
  static cache = /* @__PURE__ */ new WeakMap();
  /**
   * Retrieves shape from cache if available. Use this only if shape
   * is optional and you have a fallback in case it's not cached.
   */
  static get = (element) => {
    return _ShapeCache.cache.get(
      element
    );
  };
  static set = (element, shape) => _ShapeCache.cache.set(element, shape);
  static delete = (element) => _ShapeCache.cache.delete(element);
  static destroy = () => {
    _ShapeCache.cache = /* @__PURE__ */ new WeakMap();
  };
  /**
   * Generates & caches shape for element if not already cached, otherwise
   * returns cached shape.
   */
  static generateElementShape = (element, renderConfig) => {
    const cachedShape = renderConfig?.isExporting ? void 0 : _ShapeCache.get(element);
    if (cachedShape !== void 0) {
      return cachedShape;
    }
    elementWithCanvasCache.delete(element);
    const shape = _generateElementShape(
      element,
      _ShapeCache.rg,
      renderConfig || {
        isExporting: false,
        canvasBackgroundColor: COLOR_PALETTE.white,
        embedsValidationStatus: null
      }
    );
    _ShapeCache.cache.set(element, shape);
    return shape;
  };
};

// fonts/index.ts
init_define_import_meta_env();

// fonts/metadata.ts
init_define_import_meta_env();

// components/icons.tsx
init_define_import_meta_env();
var import_react = __toESM(require_react(), 1);

// ../../node_modules/clsx/dist/clsx.m.js
init_define_import_meta_env();
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i2 = 0, tmp, x, str = "";
  while (i2 < arguments.length) {
    if (tmp = arguments[i2++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// components/icons.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var iconFillColor = (theme) => "var(--icon-fill-color)";
var handlerColor = (theme) => theme === THEME.LIGHT ? open_color_default.white : "#1e1e1e";
var createIcon = (d, opts = 512) => {
  const {
    width = 512,
    height = width,
    mirror,
    style,
    ...rest
  } = typeof opts === "number" ? { width: opts } : opts;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      viewBox: `0 0 ${width} ${height}`,
      className: clsx_m_default({ "rtl-mirror": mirror }),
      style,
      ...rest,
      children: typeof d === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d }) : d
    }
  );
};
var tablerIconProps = {
  width: 24,
  height: 24,
  fill: "none",
  strokeWidth: 2,
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
var modifiedTablerIconProps = {
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
var PlusPromoIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 3, y: 8, width: 18, height: 4, rx: 1 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 12, y1: 8, x2: 12, y2: 21 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" })
  ] }),
  tablerIconProps
);
var LibraryIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "3", y1: "6", x2: "3", y2: "19" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "6", x2: "12", y2: "19" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "21", y1: "6", x2: "21", y2: "19" })
  ] }),
  tablerIconProps
);
var PlusIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }),
  tablerIconProps
);
var DotsIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "19", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "5", r: "1" })
  ] }),
  tablerIconProps
);
var PinIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "21" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "8", y1: "4", x2: "16", y2: "4" })
  ] }),
  tablerIconProps
);
var UnlockedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M13.542 8.542H6.458a2.5 2.5 0 0 0-2.5 2.5v3.75a2.5 2.5 0 0 0 2.5 2.5h7.084a2.5 2.5 0 0 0 2.5-2.5v-3.75a2.5 2.5 0 0 0-2.5-2.5Z",
        stroke: "currentColor",
        strokeWidth: "1.25"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M10 13.958a1.042 1.042 0 1 0 0-2.083 1.042 1.042 0 0 0 0 2.083Z",
        stroke: "currentColor",
        strokeWidth: "1.25"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "mask",
      {
        id: "UnlockedIcon",
        style: { maskType: "alpha" },
        maskUnits: "userSpaceOnUse",
        x: 6,
        y: 1,
        width: 9,
        height: 9,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            stroke: "none",
            d: "M6.399 9.561V5.175c0-.93.401-1.823 1.116-2.48a3.981 3.981 0 0 1 2.693-1.028c1.01 0 1.98.37 2.694 1.027.715.658 1.116 1.55 1.116 2.481",
            fill: "#fff"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#UnlockedIcon)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        stroke: "none",
        d: "M5.149 9.561v1.25h2.5v-1.25h-2.5Zm5.06-7.894V.417v1.25Zm2.559 3.508v1.25h2.5v-1.25h-2.5ZM7.648 8.51V5.175h-2.5V8.51h2.5Zm0-3.334c0-.564.243-1.128.713-1.561L6.668 1.775c-.959.883-1.52 2.104-1.52 3.4h2.5Zm.713-1.561a2.732 2.732 0 0 1 1.847-.697v-2.5c-1.31 0-2.585.478-3.54 1.358L8.36 3.614Zm1.847-.697c.71 0 1.374.26 1.847.697l1.694-1.839a5.231 5.231 0 0 0-3.54-1.358v2.5Zm1.847.697c.47.433.713.997.713 1.561h2.5c0-1.296-.56-2.517-1.52-3.4l-1.693 1.839Z",
        fill: "currentColor"
      }
    ) })
  ] }),
  modifiedTablerIconProps
);
var LockedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.542 8.542H6.458a2.5 2.5 0 0 0-2.5 2.5v3.75a2.5 2.5 0 0 0 2.5 2.5h7.084a2.5 2.5 0 0 0 2.5-2.5v-3.75a2.5 2.5 0 0 0-2.5-2.5Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13.958a1.042 1.042 0 1 0 0-2.083 1.042 1.042 0 0 0 0 2.083Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.667 8.333V5.417C6.667 3.806 8.159 2.5 10 2.5c1.841 0 3.333 1.306 3.333 2.917v2.916" })
  ] }),
  modifiedTablerIconProps
);
var WelcomeScreenMenuArrow = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M38.5 83.5c-14-2-17.833-10.473-21-22.5C14.333 48.984 12 22 12 12.5",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m12.005 10.478 7.905 14.423L6 25.75l6.005-15.273Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M12.005 10.478c1.92 3.495 3.838 7 7.905 14.423m-7.905-14.423c3.11 5.683 6.23 11.368 7.905 14.423m0 0c-3.68.226-7.35.455-13.91.85m13.91-.85c-5.279.33-10.566.647-13.91.85m0 0c1.936-4.931 3.882-9.86 6.005-15.273M6 25.75c2.069-5.257 4.135-10.505 6.005-15.272",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round"
      }
    )
  ] }),
  { width: 41, height: 94, fill: "none" }
);
var WelcomeScreenHelpArrow = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M18.026 1.232c-5.268 13.125-5.548 33.555 3.285 42.311 8.823 8.75 33.31 12.304 42.422 13.523",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m72.181 59.247-13.058-10-2.948 13.62 16.006-3.62Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M72.181 59.247c-3.163-2.429-6.337-4.856-13.058-10m13.058 10c-5.145-3.936-10.292-7.882-13.058-10m0 0c-.78 3.603-1.563 7.196-2.948 13.62m2.948-13.62c-1.126 5.168-2.24 10.346-2.948 13.62m0 0c5.168-1.166 10.334-2.343 16.006-3.62m-16.006 3.62c5.51-1.248 11.01-2.495 16.006-3.62",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round"
      }
    )
  ] }),
  { width: 85, height: 71, fill: "none" }
);
var WelcomeScreenTopToolbarArrow = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M1 77c14-2 31.833-11.973 35-24 3.167-12.016-6-35-9.5-43.5",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m24.165 1.093-2.132 16.309 13.27-4.258-11.138-12.05Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M24.165 1.093c-.522 3.953-1.037 7.916-2.132 16.309m2.131-16.309c-.835 6.424-1.68 12.854-2.13 16.308m0 0c3.51-1.125 7.013-2.243 13.27-4.257m-13.27 4.257c5.038-1.608 10.08-3.232 13.27-4.257m0 0c-3.595-3.892-7.197-7.777-11.14-12.05m11.14 12.05c-3.837-4.148-7.667-8.287-11.14-12.05",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round"
      }
    )
  ] }),
  { width: 38, height: 78, fill: "none" }
);
var ExcalLogo = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M39.9 32.889a.326.326 0 0 0-.279-.056c-2.094-3.083-4.774-6-7.343-8.833l-.419-.472a.212.212 0 0 0-.056-.139.586.586 0 0 0-.167-.111l-.084-.083-.056-.056c-.084-.167-.28-.278-.475-.167-.782.39-1.507.973-2.206 1.528-.92.722-1.842 1.445-2.708 2.25a8.405 8.405 0 0 0-.977 1.028c-.14.194-.028.361.14.444-.615.611-1.23 1.223-1.843 1.861a.315.315 0 0 0-.084.223c0 .083.056.166.111.194l1.09.833v.028c1.535 1.528 4.244 3.611 7.12 5.861.418.334.865.667 1.284 1 .195.223.39.473.558.695.084.11.28.139.391.055.056.056.14.111.196.167a.398.398 0 0 0 .167.056.255.255 0 0 0 .224-.111.394.394 0 0 0 .055-.167c.029 0 .028.028.056.028a.318.318 0 0 0 .224-.084l5.082-5.528a.309.309 0 0 0 0-.444Zm-14.63-1.917a.485.485 0 0 0 .111.14c.586.5 1.2 1 1.843 1.555l-2.569-1.945-.251-.166c-.056-.028-.112-.084-.168-.111l-.195-.167.056-.056.055-.055.112-.111c.866-.861 2.346-2.306 3.1-3.028-.81.805-2.43 3.167-2.095 3.944Zm8.767 6.89-2.122-1.612a44.713 44.713 0 0 0-2.625-2.5c1.145.861 2.122 1.611 2.262 1.75 1.117.972 1.06.806 1.815 1.445l.921.666a1.06 1.06 0 0 1-.251.25Zm.558.416-.056-.028c.084-.055.168-.111.252-.194l-.196.222ZM1.089 5.75c.055.361.14.722.195 1.056.335 1.833.67 3.5 1.284 4.75l.252.944c.084.361.223.806.363.917 1.424 1.25 3.602 3.11 5.947 4.889a.295.295 0 0 0 .363 0s0 .027.028.027a.254.254 0 0 0 .196.084.318.318 0 0 0 .223-.084c2.988-3.305 5.221-6.027 6.813-8.305.112-.111.14-.278.14-.417.111-.111.195-.25.307-.333.111-.111.111-.306 0-.39l-.028-.027c0-.055-.028-.139-.084-.167-.698-.666-1.2-1.138-1.731-1.638-.922-.862-1.871-1.75-3.881-3.75l-.028-.028c-.028-.028-.056-.056-.112-.056-.558-.194-1.703-.389-3.127-.639C6.087 2.223 3.21 1.723.614.944c0 0-.168 0-.196.028l-.083.084c-.028.027-.056.055-.224.11h.056-.056c.028.167.028.278.084.473 0 .055.112.5.112.555l.782 3.556Zm15.496 3.278-.335-.334c.084.112.196.195.335.334Zm-3.546 4.666-.056.056c0-.028.028-.056.056-.056Zm-2.038-10c.168.167.866.834 1.033.973-.726-.334-2.54-1.167-3.379-1.445.838.167 1.983.334 2.346.472ZM1.424 2.306c.419.722.754 3.222 1.089 5.666-.196-.778-.335-1.555-.503-2.278-.251-1.277-.503-2.416-.838-3.416.056 0 .14 0 .252.028Zm-.168-.584c-.112 0-.223-.028-.307-.028 0-.027 0-.055-.028-.055.14 0 .223.028.335.083Zm-1.089.222c0-.027 0-.027 0 0ZM39.453 1.333c.028-.11-.558-.61-.363-.639.42-.027.42-.666 0-.666-.558.028-1.144.166-1.675.25-.977.194-1.982.389-2.96.61-2.205.473-4.383.973-6.561 1.557-.67.194-1.424.333-2.066.666-.224.111-.196.333-.084.472-.056.028-.084.028-.14.056-.195.028-.363.056-.558.083-.168.028-.252.167-.224.334 0 .027.028.083.028.11-1.173 1.556-2.485 3.195-3.909 4.945-1.396 1.611-2.876 3.306-4.356 5.056-4.719 5.5-10.052 11.75-15.943 17.25a.268.268 0 0 0 0 .389c.028.027.056.055.084.055-.084.084-.168.14-.252.222-.056.056-.084.111-.084.167a.605.605 0 0 0-.111.139c-.112.111-.112.305.028.389.111.11.307.11.39-.028.029-.028.029-.056.056-.056a.44.44 0 0 1 .615 0c.335.362.67.723.977 1.028l-.698-.583c-.112-.111-.307-.083-.39.028-.113.11-.085.305.027.389l7.427 6.194c.056.056.112.056.196.056s.14-.028.195-.084l.168-.166c.028.027.083.027.111.027.084 0 .14-.027.196-.083 10.052-10.055 18.15-17.639 27.42-24.417.083-.055.111-.166.111-.25.112 0 .196-.083.251-.194 1.704-5.194 2.039-9.806 2.15-12.083v-.028c0-.028.028-.056.028-.083.028-.056.028-.084.028-.084a1.626 1.626 0 0 0-.111-1.028ZM21.472 9.5c.446-.5.893-1.028 1.34-1.5-2.876 3.778-7.65 9.583-14.408 16.5 4.607-5.083 9.242-10.333 13.068-15ZM5.193 35.778h.084-.084Zm3.462 3.194c-.027-.028-.027-.028 0-.028v.028Zm4.16-3.583c.224-.25.448-.472.699-.722 0 0 0 .027.028.027-.252.223-.475.445-.726.695Zm1.146-1.111c.14-.14.279-.334.446-.5l.028-.028c1.648-1.694 3.351-3.389 5.082-5.111l.028-.028c.419-.333.921-.694 1.368-1.028a379.003 379.003 0 0 0-6.952 6.695ZM24.794 6.472c-.921 1.195-1.954 2.778-2.82 4.028-2.736 3.944-11.532 13.583-11.727 13.75a1976.983 1976.983 0 0 1-8.042 7.639l-.167.167c-.14-.167-.14-.417.028-.556C14.49 19.861 22.03 10.167 25.074 5.917c-.084.194-.14.36-.28.555Zm4.83 5.695c-1.116-.64-1.646-1.64-1.34-2.611l.084-.334c.028-.083.084-.194.14-.277.307-.5.754-.917 1.257-1.167.027 0 .055 0 .083-.028-.028-.056-.028-.139-.028-.222.028-.167.14-.278.335-.278.335 0 1.369.306 1.76.639.111.083.223.194.335.305.14.167.363.445.474.667.056.028.112.306.196.445.056.222.111.472.084.694-.028.028 0 .194-.028.194a2.668 2.668 0 0 1-.363 1.028c-.028.028-.028.056-.056.084l-.028.027c-.14.223-.335.417-.53.556-.643.444-1.369.583-2.095.389 0 0-.195-.084-.28-.111Zm8.154-.834a39.098 39.098 0 0 1-.893 3.167c0 .028-.028.083 0 .111-.056 0-.084.028-.14.056-2.206 1.61-4.356 3.305-6.506 5.028 1.843-1.64 3.686-3.306 5.613-4.945.558-.5.949-1.139 1.06-1.861l.28-1.667v-.055c.14-.334.67-.195.586.166Z",
      fill: "currentColor"
    }
  ) }),
  { width: 40, height: 40, fill: "none" }
);
var SelectionIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l4.153 11.793a0.365 .365 0 0 0 .331 .207a0.366 .366 0 0 0 .332 -.207l2.184 -4.793l4.787 -1.994a0.355 .355 0 0 0 .213 -.323a0.355 .355 0 0 0 -.213 -.323l-11.787 -4.36z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.5 13.5l4.5 4.5" })
  ] }),
  { fill: "none", width: 22, height: 22, strokeWidth: 1.25 }
);
var RectangleIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" })
  ] }),
  tablerIconProps
);
var DiamondIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z" })
  ] }),
  tablerIconProps
);
var EllipseIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" })
  ] }),
  tablerIconProps
);
var ArrowIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "15", y1: "16", x2: "19", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "15", y1: "8", x2: "19", y2: "12" })
  ] }),
  tablerIconProps
);
var LineIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.167 10h11.666", strokeWidth: "1.5" }),
  modifiedTablerIconProps
);
var PenModeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 7h4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" })
  ] }),
  tablerIconProps
);
var FreedrawIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m11.25 5.417 3.333 3.333" })
  ] }),
  modifiedTablerIconProps
);
var TextIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "20", x2: "7", y2: "20" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "14", y1: "20", x2: "21", y2: "20" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "6.9", y1: "15", x2: "13.8", y2: "15" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "10.2", y1: "6.3", x2: "16", y2: "20" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "5 20 11 4 13 4 20 20" })
  ] }),
  tablerIconProps
);
var ImageIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 6.667h.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.91 2.625h10.18a2.284 2.284 0 0 1 2.285 2.284v10.182a2.284 2.284 0 0 1-2.284 2.284H4.909a2.284 2.284 0 0 1-2.284-2.284V4.909a2.284 2.284 0 0 1 2.284-2.284Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m3.333 12.5 3.334-3.333c.773-.745 1.726-.745 2.5 0l4.166 4.166" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m11.667 11.667.833-.834c.774-.744 1.726-.744 2.5 0l1.667 1.667" })
  ] }),
  modifiedTablerIconProps
);
var EraserIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 13.3l-6.3 -6.3" })
  ] }),
  tablerIconProps
);
var ZoomInIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeWidth: "1.25", d: "M10 4.167v11.666M4.167 10h11.666" }),
  modifiedTablerIconProps
);
var ZoomOutIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 10h10", strokeWidth: "1.25" }),
  modifiedTablerIconProps
);
var ZoomResetIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 21l-6 -6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.268 12.043a7.017 7.017 0 0 0 6.634 4.957a7.012 7.012 0 0 0 7.043 -6.131a7 7 0 0 0 -5.314 -7.672a7.021 7.021 0 0 0 -8.241 4.403" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 4v4h4" })
  ] }),
  tablerIconProps
);
var TrashIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      strokeWidth: "1.25",
      d: "M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"
    }
  ),
  modifiedTablerIconProps
);
var EmbedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "12 16 18 10 12 4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "8 4 2 10 8 16" })
  ] }),
  modifiedTablerIconProps
);
var DuplicateIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.375 6.458H8.958a2.5 2.5 0 0 0-2.5 2.5v5.417a2.5 2.5 0 0 0 2.5 2.5h5.417a2.5 2.5 0 0 0 2.5-2.5V8.958a2.5 2.5 0 0 0-2.5-2.5Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        clipRule: "evenodd",
        d: "M11.667 3.125c.517 0 .986.21 1.325.55.34.338.55.807.55 1.325v1.458H8.333c-.485 0-.927.185-1.26.487-.343.312-.57.75-.609 1.24l-.005 5.357H5a1.87 1.87 0 0 1-1.326-.55 1.87 1.87 0 0 1-.549-1.325V5c0-.518.21-.987.55-1.326.338-.34.807-.549 1.325-.549h6.667Z"
      }
    )
  ] }),
  modifiedTablerIconProps
);
var MoonIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      clipRule: "evenodd",
      d: "M10 2.5h.328a6.25 6.25 0 0 0 6.6 10.372A7.5 7.5 0 1 1 10 2.493V2.5Z",
      stroke: "currentColor"
    }
  ),
  modifiedTablerIconProps
);
var SunIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { stroke: "currentColor", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM10 4.167V2.5M14.167 5.833l1.166-1.166M15.833 10H17.5M14.167 14.167l1.166 1.166M10 15.833V17.5M5.833 14.167l-1.166 1.166M5 10H3.333M5.833 5.833 4.667 4.667" }) }),
  { ...modifiedTablerIconProps, strokeWidth: 1.5 }
);
var HamburgerMenuIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "6", x2: "20", y2: "6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "18", x2: "20", y2: "18" })
  ] }),
  tablerIconProps
);
var ExportIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      strokeWidth: "1.25",
      d: "M3.333 14.167v1.666c0 .92.747 1.667 1.667 1.667h10c.92 0 1.667-.746 1.667-1.667v-1.666M5.833 9.167 10 13.333l4.167-4.166M10 3.333v10"
    }
  ),
  modifiedTablerIconProps
);
var HelpIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12", y2: "17.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" })
  ] }),
  tablerIconProps
);
var HelpIconThin = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "17", x2: "12", y2: "17.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" })
  ] }),
  tablerIconProps
);
var ExternalLinkIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      strokeWidth: "1.25",
      d: "M9.167 5.833H5.833c-1.254 0-2.5 1.282-2.5 2.5v5.834c0 1.283 1.252 2.5 2.5 2.5h5.834c1.251 0 2.5-1.25 2.5-2.5v-3.334M8.333 11.667l8.334-8.334M12.5 3.333h4.167V7.5"
    }
  ),
  modifiedTablerIconProps
);
var GithubIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M7.5 15.833c-3.583 1.167-3.583-2.083-5-2.5m10 4.167v-2.917c0-.833.083-1.166-.417-1.666 2.334-.25 4.584-1.167 4.584-5a3.833 3.833 0 0 0-1.084-2.667 3.5 3.5 0 0 0-.083-2.667s-.917-.25-2.917 1.084a10.25 10.25 0 0 0-5.166 0C5.417 2.333 4.5 2.583 4.5 2.583a3.5 3.5 0 0 0-.083 2.667 3.833 3.833 0 0 0-1.084 2.667c0 3.833 2.25 4.75 4.584 5-.5.5-.5 1-.417 1.666V17.5",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var DiscordIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.5 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM12.5 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM6.25 6.25c2.917-.833 4.583-.833 7.5 0M5.833 13.75c2.917.833 5.417.833 8.334 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.917 14.167c0 .833 1.25 2.5 1.666 2.5 1.25 0 2.361-1.39 2.917-2.5.556-1.39.417-4.861-1.25-9.584-1.214-.846-2.5-1.116-3.75-1.25l-.833 2.084M7.083 14.167c0 .833-1.13 2.5-1.526 2.5-1.191 0-2.249-1.39-2.778-2.5-.529-1.39-.397-4.861 1.19-9.584 1.157-.846 2.318-1.116 3.531-1.25l.833 2.084" })
  ] }),
  modifiedTablerIconProps
);
var XBrandIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4l11.733 16h4.267l-11.733 -16z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" })
  ] }),
  tablerIconProps
);
var checkIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { fill: "none", stroke: "currentColor", points: "20 6 9 17 4 12" }),
  {
    width: 24,
    height: 24
  }
);
var LinkIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.333 11.667a2.917 2.917 0 0 0 4.167 0l3.333-3.334a2.946 2.946 0 1 0-4.166-4.166l-.417.416" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.667 8.333a2.917 2.917 0 0 0-4.167 0l-3.333 3.334a2.946 2.946 0 0 0 4.166 4.166l.417-.416" })
  ] }),
  modifiedTablerIconProps
);
var save = createIcon(
  "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z",
  { width: 448, height: 512 }
);
var saveAs = createIcon(
  "M252 54L203 8a28 27 0 00-20-8H28C12 0 0 12 0 27v195c0 15 12 26 28 26h204c15 0 28-11 28-26V73a28 27 0 00-8-19zM130 213c-21 0-37-16-37-36 0-19 16-35 37-35 20 0 37 16 37 35 0 20-17 36-37 36zm56-169v56c0 4-4 6-7 6H44c-4 0-7-2-7-6V42c0-4 3-7 7-7h133l4 2 3 2a7 7 0 012 5z M296 201l87 95-188 205-78 9c-10 1-19-8-18-20l9-84zm141-14l-41-44a31 31 0 00-46 0l-38 41 87 95 38-42c13-14 13-36 0-50z",
  { width: 448, height: 512 }
);
var LoadIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "m9.257 6.351.183.183H15.819c.34 0 .727.182 1.051.506.323.323.505.708.505 1.05v5.819c0 .316-.183.7-.52 1.035-.337.338-.723.522-1.037.522H4.182c-.352 0-.74-.181-1.058-.5-.318-.318-.499-.705-.499-1.057V5.182c0-.351.181-.736.5-1.054.32-.321.71-.503 1.057-.503H6.53l2.726 2.726Z",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var clipboard = createIcon(
  "M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z",
  { width: 384, height: 512 }
);
var palette = createIcon(
  "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
);
var bucketFillIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 16l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.737 9.737c2.299 -2.3 3.23 -5.095 2.081 -6.245c-1.15 -1.15 -3.945 -.217 -6.244 2.082c-2.3 2.299 -3.231 5.095 -2.082 6.244c1.15 1.15 3.946 .218 6.245 -2.081z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.492 11.818c.362 .362 .768 .676 1.208 .934l6.895 4.047c1.078 .557 2.255 -.075 3.692 -1.512c1.437 -1.437 2.07 -2.614 1.512 -3.692c-.372 -.718 -1.72 -3.017 -4.047 -6.895a6.015 6.015 0 0 0 -.934 -1.208" })
  ] }),
  tablerIconProps
);
var ExportImageIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 8h.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 16v6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 19l-3 3l-3 -3" })
  ] }),
  tablerIconProps
);
var exportToFileIcon = createIcon(
  "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
  { width: 512, height: 512 }
);
var zoomIn = createIcon(
  "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  { width: 448, height: 512 }
);
var zoomOut = createIcon(
  "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  { width: 448, height: 512 }
);
var done = createIcon(
  "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
);
var menu = createIcon(
  "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
);
var UndoIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M7.5 10.833 4.167 7.5 7.5 4.167M4.167 7.5h9.166a3.333 3.333 0 0 1 0 6.667H12.5",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var RedoIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M12.5 10.833 15.833 7.5 12.5 4.167M15.833 7.5H6.667a3.333 3.333 0 1 0 0 6.667H7.5",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var questionCircle = createIcon(
  "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z",
  { mirror: true }
);
var share = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7.25 8.917l5.5-2.834M7.25 11.083l5.5 2.834",
      strokeWidth: "1.5"
    }
  ),
  modifiedTablerIconProps
);
var warning = createIcon(
  "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
);
var shareIOS = createIcon(
  "M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z",
  { width: 24, height: 24 }
);
var exportToPlus = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 14v-11" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 6l3 -3l3 3" })
  ] }),
  tablerIconProps
);
var shareWindows = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M40 5.6v6.1l-4.1.7c-8.9 1.4-16.5 6.9-20.6 15C13 32 10.9 43 12.4 43c.4 0 2.4-1.3 4.4-3 5-3.9 12.1-7 18.2-7.7l5-.6v12.8l11.2-11.3L62.5 22 51.2 10.8 40-.5v6.1zm10.2 22.6L44 34.5v-6.8l-6.9.6c-3.9.3-9.8 1.7-13.2 3.1-3.5 1.4-6.5 2.4-6.7 2.2-.9-1 3-7.5 6.4-10.8C28 18.6 34.4 16 40.1 16c3.7 0 3.9-.1 3.9-3.2V9.5l6.2 6.3 6.3 6.2-6.3 6.2z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        stroke: "currentColor",
        fill: "currentColor",
        d: "M0 36v20h48v-6.2c0-6 0-6.1-2-4.3-1.1 1-2 2.9-2 4.2V52H4V34c0-17.3-.1-18-2-18s-2 .7-2 20z"
      }
    )
  ] }),
  { width: 64, height: 64 }
);
var resetZoom = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      stroke: "currentColor",
      strokeWidth: "40",
      fill: "currentColor",
      d: "M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z"
    }
  ),
  { width: 1024 }
);
var arrowBarToTopJSX = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10l0 10" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10l4 4" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10l-4 4" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4l16 0" })
] });
var arrownNarrowUpJSX = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5l0 14" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 9l-4 -4" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 9l4 -4" })
] });
var BringForwardIcon = createIcon(arrownNarrowUpJSX, tablerIconProps);
var SendBackwardIcon = createIcon(arrownNarrowUpJSX, {
  ...tablerIconProps,
  style: {
    transform: "rotate(180deg)"
  }
});
var BringToFrontIcon = createIcon(arrowBarToTopJSX, tablerIconProps);
var SendToBackIcon = createIcon(arrowBarToTopJSX, {
  ...tablerIconProps,
  style: {
    transform: "rotate(180deg)"
  }
});
var AlignTopIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", stroke: "currentColor", strokeWidth: "1.25", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M3.333 3.333h13.334",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.542 6.458h-.417c-.92 0-1.667.747-1.667 1.667v7.083c0 .92.746 1.667 1.667 1.667h.417c.92 0 1.666-.746 1.666-1.667V8.125c0-.92-.746-1.667-1.666-1.667ZM6.875 6.458h-.417c-.92 0-1.666.747-1.666 1.667v3.75c0 .92.746 1.667 1.666 1.667h.417c.92 0 1.667-.746 1.667-1.667v-3.75c0-.92-.747-1.667-1.667-1.667Z" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var AlignBottomIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", stroke: "currentColor", strokeWidth: "1.25", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M3.333 16.667h13.334",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.875 3.125h-.417c-.92 0-1.666.746-1.666 1.667v7.083c0 .92.746 1.667 1.666 1.667h.417c.92 0 1.667-.746 1.667-1.667V4.792c0-.92-.747-1.667-1.667-1.667ZM13.542 5.817h-.417c-.92 0-1.667.747-1.667 1.667v4.391c0 .92.746 1.667 1.667 1.667h.417c.92 0 1.666-.746 1.666-1.667V7.484c0-.92-.746-1.667-1.666-1.667Z" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var AlignLeftIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", stroke: "currentColor", strokeWidth: "1.25", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M3.333 3.333v13.334",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.208 4.792H8.125c-.92 0-1.667.746-1.667 1.666v.417c0 .92.747 1.667 1.667 1.667h7.083c.92 0 1.667-.747 1.667-1.667v-.417c0-.92-.746-1.666-1.667-1.666ZM12.516 11.458H8.125c-.92 0-1.667.746-1.667 1.667v.417c0 .92.747 1.666 1.667 1.666h4.391c.92 0 1.667-.746 1.667-1.666v-.417c0-.92-.746-1.667-1.667-1.667Z" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var AlignRightIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", stroke: "currentColor", strokeWidth: "1.25", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M16.667 3.333v13.334",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.875 4.792H4.792c-.92 0-1.667.746-1.667 1.666v.417c0 .92.746 1.667 1.667 1.667h7.083c.92 0 1.667-.747 1.667-1.667v-.417c0-.92-.746-1.666-1.667-1.666ZM11.683 11.458H7.292c-.92 0-1.667.746-1.667 1.667v.417c0 .92.746 1.666 1.667 1.666h4.39c.921 0 1.667-.746 1.667-1.666v-.417c0-.92-.746-1.667-1.666-1.667Z" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var DistributeHorizontallyIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", stroke: "currentColor", strokeWidth: "1.25", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M16.667 3.333v13.334M3.333 3.333v13.334",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.375 10.208v-.416c0-.92-.746-1.667-1.667-1.667H7.292c-.92 0-1.667.746-1.667 1.667v.416c0 .92.746 1.667 1.667 1.667h5.416c.92 0 1.667-.746 1.667-1.667Z" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var DistributeVerticallyIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", stroke: "currentColor", strokeWidth: "1.25", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M3.333 3.333h13.334M3.333 16.667h13.334",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.208 5.625h-.416c-.92 0-1.667.746-1.667 1.667v5.416c0 .92.746 1.667 1.667 1.667h.416c.92 0 1.667-.746 1.667-1.667V7.292c0-.92-.746-1.667-1.667-1.667Z" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var CenterVerticallyIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.667 10h2.916", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.333 10h3.334", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.417 10h2.916", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.875 4.792h-.417c-.92 0-1.666.746-1.666 1.666v7.084c0 .92.746 1.666 1.666 1.666h.417c.92 0 1.667-.746 1.667-1.666V6.458c0-.92-.747-1.666-1.667-1.666ZM13.542 6.458h-.417c-.92 0-1.667.747-1.667 1.667v3.75c0 .92.746 1.667 1.667 1.667h.417c.92 0 1.666-.746 1.666-1.667v-3.75c0-.92-.746-1.667-1.666-1.667Z" })
  ] }),
  modifiedTablerIconProps
);
var CenterHorizontallyIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 18.333v-2.916", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 11.667V8.333", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 4.583V1.667", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.792 13.125v.417c0 .92.746 1.666 1.666 1.666h7.084c.92 0 1.666-.746 1.666-1.666v-.417c0-.92-.746-1.667-1.666-1.667H6.458c-.92 0-1.666.746-1.666 1.667ZM6.458 6.458v.417c0 .92.747 1.667 1.667 1.667h3.75c.92 0 1.667-.747 1.667-1.667v-.417c0-.92-.746-1.666-1.667-1.666h-3.75c-.92 0-1.667.746-1.667 1.666Z" })
  ] }),
  modifiedTablerIconProps
);
var usersIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 21v-2a4 4 0 0 0 -3 -3.85" })
  ] }),
  tablerIconProps
);
var start = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
);
var stop = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z"
);
var CloseIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "g",
      {
        clipPath: "url(#a)",
        stroke: "currentColor",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 5 5 15M5 5l10 10" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var clone2 = createIcon(
  "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z",
  { mirror: true }
);
var shield = createIcon(
  "M11.553 22.894a.998.998 0 00.894 0s3.037-1.516 5.465-4.097C19.616 16.987 21 14.663 21 12V5a1 1 0 00-.649-.936l-8-3a.998.998 0 00-.702 0l-8 3A1 1 0 003 5v7c0 2.663 1.384 4.987 3.088 6.797 2.428 2.581 5.465 4.097 5.465 4.097zm-1.303-8.481l6.644-6.644a.856.856 0 111.212 1.212l-7.25 7.25a.856.856 0 01-1.212 0l-3.75-3.75a.856.856 0 111.212-1.212l3.144 3.144z",
  { width: 24 }
);
var file = createIcon(
  "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z",
  { width: 384, height: 512 }
);
var GroupIcon = import_react.default.memo(
  ({ theme }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25 26H111V111H25", fill: iconFillColor(theme) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z",
          stroke: iconFillColor(theme),
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 100H160V160H100", fill: iconFillColor(theme) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z",
          stroke: iconFillColor(theme),
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "g",
        {
          fill: handlerColor(theme),
          stroke: iconFillColor(theme),
          strokeWidth: "6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.5", y: "2.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.5", y: "149.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "147.5", y: "149.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "147.5", y: "2.5", width: "30", height: "30" })
          ]
        }
      )
    ] }),
    { width: 182, height: 182, mirror: true }
  )
);
var UngroupIcon = import_react.default.memo(
  ({ theme }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25 26H111V111H25", fill: iconFillColor(theme) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z",
          stroke: iconFillColor(theme),
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 100H160V160H100", fill: iconFillColor(theme) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z",
          stroke: iconFillColor(theme),
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "g",
        {
          fill: handlerColor(theme),
          stroke: iconFillColor(theme),
          strokeWidth: "6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.5", y: "2.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "78.5", y: "149.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "147.5", y: "149.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "147.5", y: "78.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "105.5", y: "2.5", width: "30", height: "30" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2.5", y: "102.5", width: "30", height: "30" })
          ]
        }
      )
    ] }),
    { width: 182, height: 182, mirror: true }
  )
);
var FillZigZagIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { strokeWidth: 1.25, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.879 2.625h8.242a3.27 3.27 0 0 1 3.254 3.254v8.242a3.27 3.27 0 0 1-3.254 3.254H5.88a3.27 3.27 0 0 1-3.254-3.254V5.88A3.27 3.27 0 0 1 5.88 2.626l-.001-.001ZM4.518 16.118l7.608-12.83m.198 13.934 5.051-9.897M2.778 9.675l9.348-6.387m-7.608 12.83 12.857-8.793" }) }),
  modifiedTablerIconProps
);
var FillHachureIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 3.254 0 0 1 3.254-3.254Z",
        stroke: "currentColor",
        strokeWidth: "1.25"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "mask",
      {
        id: "FillHachureIcon",
        style: { maskType: "alpha" },
        maskUnits: "userSpaceOnUse",
        x: 2,
        y: 2,
        width: 16,
        height: 16,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 3.254 0 0 1 3.254-3.254Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "1.25"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#FillHachureIcon)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M2.258 15.156 15.156 2.258M7.324 20.222 20.222 7.325m-20.444 5.35L12.675-.222m-8.157 18.34L17.416 5.22",
        stroke: "currentColor",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) })
  ] }),
  modifiedTablerIconProps
);
var FillCrossHatchIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { clipPath: "url(#a)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 3.254 0 0 1 3.254-3.254Z",
          stroke: "currentColor",
          strokeWidth: "1.25"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "mask",
        {
          id: "FillCrossHatchIcon",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: -1,
          y: -1,
          width: 22,
          height: 22,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              d: "M2.426 15.044 15.044 2.426M7.383 20 20 7.383M0 12.617 12.617 0m-7.98 17.941L17.256 5.324m-2.211 12.25L2.426 4.956M20 12.617 7.383 0m5.234 20L0 7.383m17.941 7.98L5.324 2.745",
              stroke: "currentColor",
              strokeWidth: "1.25",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { mask: "url(#FillCrossHatchIcon)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M14.121 2H5.88A3.879 3.879 0 0 0 2 5.879v8.242A3.879 3.879 0 0 0 5.879 18h8.242A3.879 3.879 0 0 0 18 14.121V5.88A3.879 3.879 0 0 0 14.121 2Z",
          fill: "currentColor"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var FillSolidIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { clipPath: "url(#a)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M4.91 2.625h10.18a2.284 2.284 0 0 1 2.285 2.284v10.182a2.284 2.284 0 0 1-2.284 2.284H4.909a2.284 2.284 0 0 1-2.284-2.284V4.909a2.284 2.284 0 0 1 2.284-2.284Z",
        stroke: "currentColor",
        strokeWidth: "1.25"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  { ...modifiedTablerIconProps, fill: "currentColor" }
);
var StrokeWidthBaseIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M4.167 10h11.666",
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  modifiedTablerIconProps
);
var StrokeWidthBoldIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M5 10h10",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  modifiedTablerIconProps
);
var StrokeWidthExtraBoldIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M5 10h10",
      stroke: "currentColor",
      strokeWidth: "3.75",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  modifiedTablerIconProps
);
var StrokeStyleSolidIcon = import_react.default.memo(
  ({ theme }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M6 10H34",
        stroke: iconFillColor(theme),
        strokeWidth: 2,
        fill: "none",
        strokeLinecap: "round"
      }
    ),
    {
      width: 40,
      height: 20
    }
  )
);
var StrokeStyleDashedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 12h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 12h2" })
  ] }),
  tablerIconProps
);
var StrokeStyleDottedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 12v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 12v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 12v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 12v.01" })
  ] }),
  tablerIconProps
);
var SloppinessArchitectIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M2.5 12.038c1.655-.885 5.9-3.292 8.568-4.354 2.668-1.063.101 2.821 1.32 3.104 1.218.283 5.112-1.814 5.112-1.814",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var SloppinessArtistIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M2.5 12.563c1.655-.886 5.9-3.293 8.568-4.355 2.668-1.062.101 2.822 1.32 3.105 1.218.283 5.112-1.814 5.112-1.814m-13.469 2.23c2.963-1.586 6.13-5.62 7.468-4.998 1.338.623-1.153 4.11-.132 5.595 1.02 1.487 6.133-1.43 6.133-1.43",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var SloppinessCartoonistIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M2.5 11.936c1.737-.879 8.627-5.346 10.42-5.268 1.795.078-.418 5.138.345 5.736.763.598 3.53-1.789 4.235-2.147M2.929 9.788c1.164-.519 5.47-3.28 6.987-3.114 1.519.165 1 3.827 2.121 4.109 1.122.281 3.839-2.016 4.606-2.42",
      strokeWidth: "1.25"
    }
  ),
  modifiedTablerIconProps
);
var EdgeSharpIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { strokeWidth: "1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.33334 9.99998V6.66665C3.33334 6.04326 3.33403 4.9332 3.33539 3.33646C4.95233 3.33436 6.06276 3.33331 6.66668 3.33331H10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.3333 3.33331V3.34331" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6667 3.33331V3.34331" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6667 6.66669V6.67669" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6667 10V10.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.33334 13.3333V13.3433" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6667 13.3333V13.3433" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.33334 16.6667V16.6767" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.66666 16.6667V16.6767" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 16.6667V16.6767" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.3333 16.6667V16.6767" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6667 16.6667V16.6767" })
  ] }),
  modifiedTablerIconProps
);
var EdgeRoundIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "g",
    {
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12v-4a4 4 0 0 1 4 -4h4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "16", y1: "4", x2: "16", y2: "4.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "20", y1: "4", x2: "20", y2: "4.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "20", y1: "8", x2: "20", y2: "8.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "20", y1: "12", x2: "20", y2: "12.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "16", x2: "4", y2: "16.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "20", y1: "16", x2: "20", y2: "16.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "20", x2: "4", y2: "20.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "8", y1: "20", x2: "8", y2: "20.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", y1: "20", x2: "12", y2: "20.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "16", y1: "20", x2: "16", y2: "20.01" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "20", y1: "20", x2: "20", y2: "20.01" })
      ]
    }
  ),
  tablerIconProps
);
var ArrowheadNoneIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 10H34", stroke: "currentColor", strokeWidth: 2, fill: "none" }),
  {
    width: 40,
    height: 20
  }
);
var ArrowheadArrowIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        stroke: "currentColor",
        strokeWidth: 2,
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 10H6M34 10L27 5M34 10L27 15" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27.5 5L34.5 10L27.5 15" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var ArrowheadCircleIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        stroke: "currentColor",
        fill: "currentColor",
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 10L6 10", strokeWidth: 2 }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { r: "4", transform: "matrix(-1 0 0 1 30 10)" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var ArrowheadCircleOutlineIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        stroke: "currentColor",
        fill: "none",
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        strokeWidth: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 10L6 10" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { r: "4", transform: "matrix(-1 0 0 1 30 10)" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var ArrowheadBarIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { transform: flip ? "translate(40, 0) scale(-1, 1)" : "", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M34 10H5.99996M34 10L34 5M34 10L34 15",
        stroke: "currentColor",
        strokeWidth: 2,
        fill: "none"
      }
    ) }),
    { width: 40, height: 20 }
  )
);
var ArrowheadTriangleIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        stroke: "currentColor",
        fill: "currentColor",
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 10L6 10", strokeWidth: 2 }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27.5 5.5L34.5 10L27.5 14.5L27.5 5.5" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var ArrowheadTriangleOutlineIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        stroke: "currentColor",
        fill: "none",
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        strokeWidth: 2,
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6,9.5H27" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27,5L34,10L27,14Z", fill: "none" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var ArrowheadDiamondIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        stroke: "currentColor",
        fill: "currentColor",
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        strokeLinejoin: "round",
        strokeWidth: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6,9.5H20" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27,5L34,10L27,14L20,9.5Z" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var ArrowheadDiamondOutlineIcon = import_react.default.memo(
  ({ flip = false }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        stroke: "currentColor",
        fill: "none",
        transform: flip ? "translate(40, 0) scale(-1, 1)" : "",
        strokeLinejoin: "round",
        strokeWidth: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6,9.5H20" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27,5L34,10L27,14L20,9.5Z" })
        ]
      }
    ),
    { width: 40, height: 20 }
  )
);
var FontSizeSmallIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { clipPath: "url(#a)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M14.167 6.667a3.333 3.333 0 0 0-3.334-3.334H9.167a3.333 3.333 0 0 0 0 6.667h1.666a3.333 3.333 0 0 1 0 6.667H9.167a3.333 3.333 0 0 1-3.334-3.334",
        stroke: "currentColor",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var FontSizeMediumIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { clipPath: "url(#a)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M5 16.667V3.333L10 15l5-11.667v13.334",
        stroke: "currentColor",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var FontSizeLargeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { clipPath: "url(#a)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M5.833 3.333v13.334h8.334",
        stroke: "currentColor",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var FontSizeExtraLargeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "m1.667 3.333 6.666 13.334M8.333 3.333 1.667 16.667M11.667 3.333v13.334h6.666",
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) }),
  modifiedTablerIconProps
);
var fontSizeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 7v-2h13v2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 5v14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 19h-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 13v-1h6v1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 12v7" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 19h2" })
  ] }),
  tablerIconProps
);
var FontFamilyHeadingIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "g",
    {
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 12h10" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 5v14" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 5v14" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 19h4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 5h4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 19h4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 5h4" })
      ]
    }
  ) }),
  tablerIconProps
);
var FontFamilyNormalIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "g",
    {
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.833 16.667v-10a3.333 3.333 0 0 1 3.334-3.334h1.666a3.333 3.333 0 0 1 3.334 3.334v10M5.833 10.833h8.334" })
    }
  ) }),
  modifiedTablerIconProps
);
var FontFamilyCodeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "g",
      {
        clipPath: "url(#a)",
        stroke: "currentColor",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.833 6.667 2.5 10l3.333 3.333M14.167 6.667 17.5 10l-3.333 3.333M11.667 3.333 8.333 16.667" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#fff", d: "M0 0h20v20H0z" }) }) })
  ] }),
  modifiedTablerIconProps
);
var TextAlignLeftIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "g",
    {
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "8", x2: "20", y2: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "12", x2: "12", y2: "12" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "16", x2: "16", y2: "16" })
      ]
    }
  ),
  tablerIconProps
);
var TextAlignCenterIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "g",
    {
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "8", x2: "20", y2: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "8", y1: "12", x2: "16", y2: "12" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "6", y1: "16", x2: "18", y2: "16" })
      ]
    }
  ),
  tablerIconProps
);
var TextAlignRightIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "g",
    {
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "8", x2: "20", y2: "8" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "10", y1: "12", x2: "20", y2: "12" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "8", y1: "16", x2: "20", y2: "16" })
      ]
    }
  ),
  tablerIconProps
);
var TextAlignTopIcon = import_react.default.memo(
  ({ theme }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        strokeWidth: "1.5",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "4", x2: "20", y2: "4" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "8", width: "6", height: "12", rx: "2" })
        ]
      }
    ),
    tablerIconProps
  )
);
var TextAlignBottomIcon = import_react.default.memo(
  ({ theme }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        strokeWidth: "2",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "20", x2: "20", y2: "20" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "4", width: "6", height: "12", rx: "2" })
        ]
      }
    ),
    tablerIconProps
  )
);
var TextAlignMiddleIcon = import_react.default.memo(
  ({ theme }) => createIcon(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "g",
      {
        strokeWidth: "1.5",
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "4", y1: "12", x2: "9", y2: "12" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "15", y1: "12", x2: "20", y2: "12" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "6", width: "6", height: "12", rx: "2" })
        ]
      }
    ),
    tablerIconProps
  )
);
var angleIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 19h-18l9 -15" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.615 15.171h.015" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.515 11.771h.015" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.715 8.671h.015" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.415 5.971h.015" })
  ] }),
  tablerIconProps
);
var publishIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z",
      fill: "currentColor"
    }
  ),
  { width: 640, height: 512 }
);
var eraser = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H150.6C133.7 480 117.4 473.3 105.4 461.3L25.37 381.3C.3786 356.3 .3786 315.7 25.37 290.7L258.7 57.37C283.7 32.38 324.3 32.38 349.3 57.37L486.6 194.7C511.6 219.7 511.6 260.3 486.6 285.3L355.9 416H480zM265.4 416L332.7 348.7L195.3 211.3L70.63 336L150.6 416L265.4 416z" })
);
var handIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 5.5a1.5 1.5 0 0 1 3 0v6.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" })
  ] }),
  tablerIconProps
);
var downloadIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 11l5 5l5 -5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4l0 12" })
  ] }),
  tablerIconProps
);
var copyIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" })
  ] }),
  tablerIconProps
);
var cutIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.15 14.85l8.85 -10.85" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 4l8.85 10.85" })
  ] }),
  tablerIconProps
);
var helpIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17l0 .01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" })
  ] }),
  tablerIconProps
);
var playerPlayIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 4v16l13 -8z" })
  ] }),
  tablerIconProps
);
var playerStopFilledIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        d: "M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z",
        strokeWidth: "0",
        fill: "currentColor"
      }
    )
  ] }),
  tablerIconProps
);
var tablerCheckIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12l5 5l10 -10" })
  ] }),
  tablerIconProps
);
var alertTriangleIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 9v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17h.01" })
  ] }),
  tablerIconProps
);
var eyeDropperIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 7l6 6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z" })
  ] }),
  tablerIconProps
);
var extraToolsIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l-4 7h8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" })
  ] }),
  tablerIconProps
);
var frameToolIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7l16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 17l16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 4l0 16" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 4l0 16" })
  ] }),
  tablerIconProps
);
var mermaidLogoIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z"
    }
  )
);
var ArrowRightIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: "1.25", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.16602 10H15.8327" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 13.3333L15.8333 10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 6.66666L15.8333 9.99999" })
  ] }),
  modifiedTablerIconProps
);
var laserPointerToolIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "g",
    {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      transform: "rotate(90 10 10)",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            clipRule: "evenodd",
            d: "m9.644 13.69 7.774-7.773a2.357 2.357 0 0 0-3.334-3.334l-7.773 7.774L8 12l1.643 1.69Z"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m13.25 3.417 3.333 3.333M10 10l2-2M5 15l3-3M2.156 17.894l1-1M5.453 19.029l-.144-1.407M2.377 11.887l.866 1.118M8.354 17.273l-1.194-.758M.953 14.652l1.408.13" })
      ]
    }
  ),
  20
);
var MagicIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 21l15 -15l-3 -3l-15 15l3 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 6l3 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" })
  ] }),
  tablerIconProps
);
var MagicIconThin = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 21l15 -15l-3 -3l-15 15l3 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 6l3 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" })
  ] }),
  tablerIconProps
);
var OpenAIIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42" })
  ] }),
  tablerIconProps
);
var fullscreenIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" })
  ] }),
  tablerIconProps
);
var eyeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", fill: "none", strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })
  ] }),
  tablerIconProps
);
var eyeClosedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 3l18 18" })
  ] }),
  tablerIconProps
);
var brainIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.5 16a3.5 3.5 0 0 1 0 -7h.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" })
  ] }),
  tablerIconProps
);
var brainIconThin = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.5 16a3.5 3.5 0 0 1 0 -7h.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" })
  ] }),
  tablerIconProps
);
var searchIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 21l-6 -6" })
  ] }),
  tablerIconProps
);
var clockIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.984 12.53a9 9 0 1 0 -7.552 8.355" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7v5l3 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 16l-2 3h4l-2 3" })
  ] }),
  tablerIconProps
);
var microphoneIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 10a7 7 0 0 0 14 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 21l8 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17l0 4" })
  ] }),
  tablerIconProps
);
var microphoneMutedIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 3l18 18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 10a7 7 0 0 0 10.846 5.85m2 -2a6.967 6.967 0 0 0 1.152 -3.85" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 21l8 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17l0 4" })
  ] }),
  tablerIconProps
);
var boltIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" })
  ] }),
  tablerIconProps
);
var selectAllIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 20v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 20v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 16v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 8v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 4v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 4v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 8v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 12v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 16v.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 20v.01" })
  ] }),
  tablerIconProps
);
var abacusIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 3v18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 21v-18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 7h14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15h14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 13v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 13v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 13v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 5v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 5v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 21h18" })
  ] }),
  tablerIconProps
);
var flipVertical = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12l18 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 16l10 0l-10 5l0 -5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 8l10 0l-10 -5l0 5" })
  ] }),
  tablerIconProps
);
var flipHorizontal = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l0 18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 7l0 10l5 0l-5 -10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 7l0 10l-5 0l5 -10" })
  ] }),
  tablerIconProps
);
var paintIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" })
  ] }),
  tablerIconProps
);
var zoomAreaIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 22l-3 -3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18h-1a2 2 0 0 1 -2 -2v-1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 11v-1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6v-1a2 2 0 0 1 2 -2h1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 3h1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 3h1a2 2 0 0 1 2 2v1" })
  ] }),
  tablerIconProps
);
var svgIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 15l2 6l2 -6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3" })
  ] }),
  tablerIconProps
);
var pngIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 21v-6l3 6v-6" })
  ] }),
  tablerIconProps
);
var magnetIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 8l5 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 8l4 0" })
  ] }),
  tablerIconProps
);
var coffeeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.25, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.746 16.726a3 3 0 1 0 .252 -5.555" })
  ] }),
  tablerIconProps
);
var DeviceDesktopIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { stroke: "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-10zM7 20h10M9 16v4M15 16v4" })
  ] }),
  { ...tablerIconProps, strokeWidth: 1.5 }
);
var loginIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12h-13l3 -3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 15l-3 -3" })
  ] }),
  tablerIconProps
);
var youtubeIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 9l5 3l-5 3z" })
  ] }),
  tablerIconProps
);
var gridIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 18h18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 3v18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v18" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 3v18" })
  ] }),
  tablerIconProps
);
var lineEditorIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 5c-6.627 0 -12 5.373 -12 12" })
  ] }),
  tablerIconProps
);
var sharpArrowIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18l12 -12" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 10v-4h-4" })
  ] }),
  tablerIconProps
);
var elbowArrowIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4,19L10,19C11.097,19 12,18.097 12,17L12,9C12,7.903 12.903,7 14,7L21,7" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 4l3 3l-3 3" })
  ] }),
  tablerIconProps
);
var roundArrowIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16,12L20,9L16,6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 20c0 -6.075 4.925 -11 11 -11h3" })
  ] }),
  tablerIconProps
);
var collapseDownIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9l6 6l6 -6" })
  ] }),
  tablerIconProps
);
var collapseUpIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 15l6 -6l6 6" })
  ] }),
  tablerIconProps
);
var upIcon = createIcon(
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 15l6 -6l6 6" })
  ] }),
  tablerIconProps
);

// fonts/metadata.ts
var FONT_METADATA = {
  [FONT_FAMILY.Excalifont]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 886,
      descender: -374,
      lineHeight: 1.25
    },
    icon: FreedrawIcon
  },
  [FONT_FAMILY.Nunito]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 1011,
      descender: -353,
      lineHeight: 1.35
    },
    icon: FontFamilyNormalIcon
  },
  [FONT_FAMILY["Lilita One"]]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 923,
      descender: -220,
      lineHeight: 1.15
    },
    icon: FontFamilyHeadingIcon
  },
  [FONT_FAMILY["Comic Shanns"]]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 750,
      descender: -250,
      lineHeight: 1.25
    },
    icon: FontFamilyCodeIcon
  },
  [FONT_FAMILY.Virgil]: {
    metrics: {
      unitsPerEm: 1e3,
      ascender: 886,
      descender: -374,
      lineHeight: 1.25
    },
    icon: FreedrawIcon,
    deprecated: true
  },
  [FONT_FAMILY.Helvetica]: {
    metrics: {
      unitsPerEm: 2048,
      ascender: 1577,
      descender: -471,
      lineHeight: 1.15
    },
    icon: FontFamilyNormalIcon,
    deprecated: true,
    local: true
  },
  [FONT_FAMILY.Cascadia]: {
    metrics: {
      unitsPerEm: 2048,
      ascender: 1900,
      descender: -480,
      lineHeight: 1.2
    },
    icon: FontFamilyCodeIcon,
    deprecated: true
  },
  [FONT_FAMILY["Liberation Sans"]]: {
    metrics: {
      unitsPerEm: 2048,
      ascender: 1854,
      descender: -434,
      lineHeight: 1.15
    },
    icon: FontFamilyNormalIcon,
    serverSide: true
  }
};
var RANGES = {
  LATIN: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  LATIN_EXT: "U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
  CYRILIC_EXT: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
  CYRILIC: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
  VIETNAMESE: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB"
};
var LOCAL_FONT_PROTOCOL = "local:";

// fonts/ExcalidrawFont.ts
init_define_import_meta_env();

// fonts/wasm/woff2.loader.ts
init_define_import_meta_env();
var loadedWasm = null;
var load = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const [binary, bindings] = await Promise.all([
        import("./woff2.wasm-T2STPPHZ.js"),
        import("./woff2.bindings-ZLISHLUN.js")
      ]);
      bindings.default({ wasmBinary: binary.default }).then(
        (module) => {
          try {
            let convertFromVecToUint8Array2 = function(vector2) {
              const arr = [];
              for (let i2 = 0, l2 = vector2.size(); i2 < l2; i2++) {
                arr.push(vector2.get(i2));
              }
              return new Uint8Array(arr);
            };
            var convertFromVecToUint8Array = convertFromVecToUint8Array2;
            const woff2 = {
              compress: (buffer) => convertFromVecToUint8Array2(
                module.woff2Enc(buffer, buffer.byteLength)
              ),
              decompress: (buffer) => convertFromVecToUint8Array2(
                module.woff2Dec(buffer, buffer.byteLength)
              )
            };
            resolve(woff2);
          } catch (e2) {
            reject(e2);
          }
        }
      );
    } catch (e2) {
      reject(e2);
    }
  });
};
var woff2_loader_default = () => {
  if (!loadedWasm) {
    loadedWasm = load();
  }
  return loadedWasm;
};

// fonts/wasm/hb-subset.loader.ts
init_define_import_meta_env();
var loadedWasm2 = null;
var load2 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const [binary, bindings] = await Promise.all([
        import("./hb-subset.wasm-T6TMO6ZD.js"),
        import("./hb-subset.bindings-NZET6ECT.js")
      ]);
      WebAssembly.instantiate(binary.default).then((module) => {
        try {
          const harfbuzzJsWasm = module.instance.exports;
          const heapu8 = new Uint8Array(harfbuzzJsWasm.memory.buffer);
          const hbSubset = {
            subset: (fontBuffer, codePoints) => {
              return bindings.default.subset(
                harfbuzzJsWasm,
                heapu8,
                fontBuffer,
                codePoints
              );
            }
          };
          resolve(hbSubset);
        } catch (e2) {
          reject(e2);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
var hb_subset_loader_default = () => {
  if (!loadedWasm2) {
    loadedWasm2 = load2();
  }
  return loadedWasm2;
};

// fonts/ExcalidrawFont.ts
var UNPKG_FALLBACK_URL = `https://unpkg.com/${define_import_meta_env_default.VITE_PKG_NAME ? `${define_import_meta_env_default.VITE_PKG_NAME}@${define_import_meta_env_default.PKG_VERSION}` : "@excalidraw/excalidraw"}/dist/prod/`;
var ExcalidrawFont = class _ExcalidrawFont {
  urls;
  fontFace;
  constructor(family, uri, descriptors) {
    this.urls = _ExcalidrawFont.createUrls(uri);
    const sources = this.urls.map((url) => `url(${url}) ${_ExcalidrawFont.getFormat(url)}`).join(", ");
    this.fontFace = new FontFace(family, sources, {
      display: "swap",
      style: "normal",
      weight: "400",
      ...descriptors
    });
  }
  /**
   * Tries to fetch woff2 content, based on the registered urls (from first to last, treated as fallbacks).
   *
   * NOTE: assumes usage of `dataurl` outside the browser environment
   *
   * @returns base64 with subsetted glyphs based on the passed codepoint, last defined url otherwise
   */
  async getContent(codePoints) {
    let i2 = 0;
    const errorMessages = [];
    while (i2 < this.urls.length) {
      const url = this.urls[i2];
      if (url.protocol === "data:") {
        const arrayBuffer = base64ToArrayBuffer(url.toString().split(",")[1]);
        const base64 = await _ExcalidrawFont.subsetGlyphsByCodePoints(
          arrayBuffer,
          codePoints
        );
        return base64;
      }
      try {
        const response = await fetch(url, {
          headers: {
            Accept: "font/woff2"
          }
        });
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const base64 = await _ExcalidrawFont.subsetGlyphsByCodePoints(
            arrayBuffer,
            codePoints
          );
          return base64;
        }
        errorMessages.push(
          `"${url.toString()}" returned status "${response.status}"`
        );
      } catch (e2) {
        errorMessages.push(`"${url.toString()}" returned error "${e2}"`);
      }
      i2++;
    }
    console.error(
      `Failed to fetch font "${this.fontFace.family}" from urls "${this.urls.toString()}`,
      JSON.stringify(errorMessages, void 0, 2)
    );
    return this.urls.length ? this.urls[this.urls.length - 1].toString() : "";
  }
  /**
   * Tries to subset glyphs in a font based on the used codepoints, returning the font as daturl.
   *
   * @param arrayBuffer font data buffer, preferrably in the woff2 format, though others should work as well
   * @param codePoints codepoints used to subset the glyphs
   *
   * @returns font with subsetted glyphs (all glyphs in case of errors) converted into a dataurl
   */
  static async subsetGlyphsByCodePoints(arrayBuffer, codePoints) {
    try {
      const { compress, decompress } = await woff2_loader_default();
      const { subset } = await hb_subset_loader_default();
      const decompressedBinary = decompress(arrayBuffer).buffer;
      const subsetSnft = subset(decompressedBinary, codePoints);
      const compressedBinary = compress(subsetSnft.buffer);
      return _ExcalidrawFont.toBase64(compressedBinary.buffer);
    } catch (e2) {
      console.error("Skipped glyph subsetting", e2);
      return _ExcalidrawFont.toBase64(arrayBuffer);
    }
  }
  static async toBase64(arrayBuffer) {
    let base64;
    if (typeof Buffer !== "undefined") {
      base64 = Buffer.from(arrayBuffer).toString("base64");
    } else {
      base64 = await stringToBase64(await toByteString(arrayBuffer), true);
    }
    return `data:font/woff2;base64,${base64}`;
  }
  static createUrls(uri) {
    if (uri.startsWith(LOCAL_FONT_PROTOCOL)) {
      return [];
    }
    if (uri.startsWith("http") || uri.startsWith("data")) {
      return [new URL(uri)];
    }
    const assetUrl = uri.replace(/^\/+/, "");
    const urls = [];
    if (typeof window.EXCALIDRAW_ASSET_PATH === "string") {
      const normalizedBaseUrl = this.normalizeBaseUrl(
        window.EXCALIDRAW_ASSET_PATH
      );
      urls.push(new URL(assetUrl, normalizedBaseUrl));
    } else if (Array.isArray(window.EXCALIDRAW_ASSET_PATH)) {
      window.EXCALIDRAW_ASSET_PATH.forEach((path) => {
        const normalizedBaseUrl = this.normalizeBaseUrl(path);
        urls.push(new URL(assetUrl, normalizedBaseUrl));
      });
    }
    urls.push(new URL(assetUrl, UNPKG_FALLBACK_URL));
    return urls;
  }
  static getFormat(url) {
    try {
      const parts = new URL(url).pathname.split(".");
      if (parts.length === 1) {
        return "";
      }
      return `format('${parts.pop()}')`;
    } catch (error) {
      return "";
    }
  }
  static normalizeBaseUrl(baseUrl) {
    let result = baseUrl;
    if (/^\.?\//.test(result)) {
      result = new URL(
        result.replace(/^\.?\/+/, ""),
        window?.location?.origin
      ).toString();
    }
    result = `${result.replace(/\/+$/, "")}/`;
    return result;
  }
};

// fonts/assets/Virgil-Regular.woff2
var Virgil_Regular_default = "./Virgil-Regular-YHAB2VGJ.woff2";

// fonts/assets/Excalifont-Regular.woff2
var Excalifont_Regular_default = "./Excalifont-Regular-CPKEUDVM.woff2";

// fonts/assets/CascadiaCode-Regular.woff2
var CascadiaCode_Regular_default = "./CascadiaCode-Regular-TMZI7IJ5.woff2";

// fonts/assets/ComicShanns-Regular.woff2
var ComicShanns_Regular_default = "./ComicShanns-Regular-6TOETDFT.woff2";

// fonts/assets/LiberationSans-Regular.woff2
var LiberationSans_Regular_default = "./LiberationSans-Regular-ZQD73GJM.woff2";

// fonts/assets/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYEF8RXi4EwQ.woff2
var Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYEF8RXi4EwQ_default = "./Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYEF8RXi4EwQ-AQ4UK4L6.woff2";

// fonts/assets/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYE98RXi4EwSsbg.woff2
var Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYE98RXi4EwSsbg_default = "./Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYE98RXi4EwSsbg-YICRZMBJ.woff2";

// fonts/assets/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg_default = "./Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg-S2BZMVTH.woff2";

// fonts/assets/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5_default = "./Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5-PWTUGLZK.woff2";

// fonts/assets/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5_default = "./Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5-P2CSI5V6.woff2";

// fonts/assets/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5_default = "./Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5-F252BD3S.woff2";

// fonts/assets/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5.woff2
var Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5_default = "./Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5-YZLWO63P.woff2";

// fonts/index.ts
var Fonts = class _Fonts {
  // it's ok to track fonts across multiple instances only once, so let's use
  // a static member to reduce memory footprint
  static loadedFontsCache = /* @__PURE__ */ new Set();
  static _registered;
  static _initialized = false;
  static get registered() {
    if (!_Fonts._registered) {
      _Fonts._registered = _Fonts.init();
    } else if (!_Fonts._initialized) {
      _Fonts._registered = new Map([
        ..._Fonts.init().entries(),
        ..._Fonts._registered.entries()
      ]);
    }
    return _Fonts._registered;
  }
  get registered() {
    return _Fonts.registered;
  }
  scene;
  constructor({ scene }) {
    this.scene = scene;
  }
  /**
   * if we load a (new) font, it's likely that text elements using it have
   * already been rendered using a fallback font. Thus, we want invalidate
   * their shapes and rerender. See #637.
   *
   * Invalidates text elements and rerenders scene, provided that at least one
   * of the supplied fontFaces has not already been processed.
   */
  onLoaded = (fontFaces) => {
    if (
      // bail if all fonts with have been processed. We're checking just a
      // subset of the font properties (though it should be enough), so it
      // can technically bail on a false positive.
      fontFaces.every((fontFace) => {
        const sig = `${fontFace.family}-${fontFace.style}-${fontFace.weight}-${fontFace.unicodeRange}`;
        if (_Fonts.loadedFontsCache.has(sig)) {
          return true;
        }
        _Fonts.loadedFontsCache.add(sig);
        return false;
      })
    ) {
      return false;
    }
    let didUpdate = false;
    const elementsMap = this.scene.getNonDeletedElementsMap();
    for (const element of this.scene.getNonDeletedElements()) {
      if (isTextElement(element)) {
        didUpdate = true;
        ShapeCache.delete(element);
        const container = getContainerElement(element, elementsMap);
        if (container) {
          ShapeCache.delete(container);
        }
      }
    }
    if (didUpdate) {
      this.scene.triggerUpdate();
    }
  };
  /**
   * Load font faces for a given scene and trigger scene update.
   */
  loadSceneFonts = async () => {
    const sceneFamilies = this.getSceneFontFamilies();
    const loaded = await _Fonts.loadFontFaces(sceneFamilies);
    this.onLoaded(loaded);
    return loaded;
  };
  /**
   * Gets all the font families for the given scene.
   */
  getSceneFontFamilies = () => {
    return _Fonts.getFontFamilies(this.scene.getNonDeletedElements());
  };
  /**
   * Load font faces for passed elements - use when the scene is unavailable (i.e. export).
   */
  static loadFontsForElements = async (elements) => {
    const fontFamilies = _Fonts.getFontFamilies(elements);
    return await _Fonts.loadFontFaces(fontFamilies);
  };
  static async loadFontFaces(fontFamilies) {
    for (const { fonts, metadata } of _Fonts.registered.values()) {
      if (metadata.local) {
        continue;
      }
      for (const { fontFace } of fonts) {
        if (!window.document.fonts.has(fontFace)) {
          window.document.fonts.add(fontFace);
        }
      }
    }
    const loadedFontFaces = await Promise.all(
      fontFamilies.map(async (fontFamily) => {
        const fontString = getFontString({
          fontFamily,
          fontSize: 16
        });
        if (!window.document.fonts.check(fontString)) {
          try {
            return await window.document.fonts.load(fontString);
          } catch (e2) {
            console.error(
              `Failed to load font "${fontString}" from urls "${_Fonts.registered.get(fontFamily)?.fonts.map((x) => x.urls)}"`,
              e2
            );
          }
        }
        return Promise.resolve();
      })
    );
    return loadedFontFaces.flat().filter(Boolean);
  }
  /**
   * WARN: should be called just once on init, even across multiple instances.
   */
  static init() {
    const fonts = {
      registered: /* @__PURE__ */ new Map()
    };
    const _register = register.bind(fonts);
    _register("Virgil", FONT_METADATA[FONT_FAMILY.Virgil], {
      uri: Virgil_Regular_default
    });
    _register("Excalifont", FONT_METADATA[FONT_FAMILY.Excalifont], {
      uri: Excalifont_Regular_default
    });
    _register("Helvetica", FONT_METADATA[FONT_FAMILY.Helvetica], {
      uri: LOCAL_FONT_PROTOCOL
    });
    _register(
      "Liberation Sans",
      FONT_METADATA[FONT_FAMILY["Liberation Sans"]],
      {
        uri: LiberationSans_Regular_default
      }
    );
    _register("Cascadia", FONT_METADATA[FONT_FAMILY.Cascadia], {
      uri: CascadiaCode_Regular_default
    });
    _register("Comic Shanns", FONT_METADATA[FONT_FAMILY["Comic Shanns"]], {
      uri: ComicShanns_Regular_default
    });
    _register(
      "Lilita One",
      FONT_METADATA[FONT_FAMILY["Lilita One"]],
      { uri: Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYE98RXi4EwSsbg_default, descriptors: { unicodeRange: RANGES.LATIN_EXT } },
      { uri: Lilita_Regular_i7dPIFZ9Zz_WBtRtedDbYEF8RXi4EwQ_default, descriptors: { unicodeRange: RANGES.LATIN } }
    );
    _register(
      "Nunito",
      FONT_METADATA[FONT_FAMILY.Nunito],
      {
        uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5_default,
        descriptors: { unicodeRange: RANGES.CYRILIC_EXT, weight: "500" }
      },
      {
        uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5_default,
        descriptors: { unicodeRange: RANGES.CYRILIC, weight: "500" }
      },
      {
        uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5_default,
        descriptors: { unicodeRange: RANGES.VIETNAMESE, weight: "500" }
      },
      {
        uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5_default,
        descriptors: { unicodeRange: RANGES.LATIN_EXT, weight: "500" }
      },
      {
        uri: Nunito_Regular_XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg_default,
        descriptors: { unicodeRange: RANGES.LATIN, weight: "500" }
      }
    );
    _Fonts._initialized = true;
    return fonts.registered;
  }
  static getFontFamilies(elements) {
    return Array.from(
      elements.reduce((families, element) => {
        if (isTextElement(element)) {
          families.add(element.fontFamily);
        }
        return families;
      }, /* @__PURE__ */ new Set())
    );
  }
};
function register(family, metadata, ...params) {
  const familyId = FONT_FAMILY[family];
  const registeredFamily = this.registered.get(familyId);
  if (!registeredFamily) {
    this.registered.set(familyId, {
      metadata,
      fonts: params.map(
        ({ uri, descriptors }) => new ExcalidrawFont(family, uri, descriptors)
      )
    });
  }
  return this.registered;
}
var getVerticalOffset = (fontFamily, fontSize, lineHeightPx) => {
  const { unitsPerEm, ascender, descender } = Fonts.registered.get(fontFamily)?.metadata.metrics || FONT_METADATA[FONT_FAMILY.Virgil].metrics;
  const fontSizeEm = fontSize / unitsPerEm;
  const lineGap = (lineHeightPx - fontSizeEm * ascender + fontSizeEm * descender) / 2;
  const verticalOffset = fontSizeEm * ascender + lineGap;
  return verticalOffset;
};
var getLineHeight = (fontFamily) => {
  const { lineHeight } = Fonts.registered.get(fontFamily)?.metadata.metrics || FONT_METADATA[FONT_FAMILY.Excalifont].metrics;
  return lineHeight;
};

// shapes.tsx
init_define_import_meta_env();

// ../utils/geometry/shape.ts
init_define_import_meta_env();
var getPolygonShape = (element) => {
  const { angle, width, height, x, y } = element;
  const cx = x + width / 2;
  const cy = y + height / 2;
  const center = pointFrom(cx, cy);
  let data;
  if (element.type === "diamond") {
    data = polygon(
      pointRotateRads(pointFrom(cx, y), center, angle),
      pointRotateRads(pointFrom(x + width, cy), center, angle),
      pointRotateRads(pointFrom(cx, y + height), center, angle),
      pointRotateRads(pointFrom(x, cy), center, angle)
    );
  } else {
    data = polygon(
      pointRotateRads(pointFrom(x, y), center, angle),
      pointRotateRads(pointFrom(x + width, y), center, angle),
      pointRotateRads(pointFrom(x + width, y + height), center, angle),
      pointRotateRads(pointFrom(x, y + height), center, angle)
    );
  }
  return {
    type: "polygon",
    data
  };
};
var getSelectionBoxShape = (element, elementsMap, padding = 10) => {
  let [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
    element,
    elementsMap,
    true
  );
  x1 -= padding;
  x2 += padding;
  y1 -= padding;
  y2 += padding;
  const center = pointFrom(cx, cy);
  const topLeft = pointRotateRads(pointFrom(x1, y1), center, element.angle);
  const topRight = pointRotateRads(pointFrom(x2, y1), center, element.angle);
  const bottomLeft = pointRotateRads(pointFrom(x1, y2), center, element.angle);
  const bottomRight = pointRotateRads(pointFrom(x2, y2), center, element.angle);
  return {
    type: "polygon",
    data: [topLeft, topRight, bottomRight, bottomLeft]
  };
};
var getEllipseShape = (element) => {
  const { width, height, angle, x, y } = element;
  return {
    type: "ellipse",
    data: {
      center: pointFrom(x + width / 2, y + height / 2),
      angle,
      halfWidth: width / 2,
      halfHeight: height / 2
    }
  };
};
var getCurvePathOps = (shape) => {
  for (const set of shape.sets) {
    if (set.type === "path") {
      return set.ops;
    }
  }
  return shape.sets[0].ops;
};
var getCurveShape = (roughShape, startingPoint = pointFrom(0, 0), angleInRadian, center) => {
  const transform = (p) => pointRotateRads(
    pointFrom(p[0] + startingPoint[0], p[1] + startingPoint[1]),
    center,
    angleInRadian
  );
  const ops = getCurvePathOps(roughShape);
  const polycurve = [];
  let p0 = pointFrom(0, 0);
  for (const op of ops) {
    if (op.op === "move") {
      const p = pointFromArray(op.data);
      invariant(p != null, "Ops data is not a point");
      p0 = transform(p);
    }
    if (op.op === "bcurveTo") {
      const p1 = transform(pointFrom(op.data[0], op.data[1]));
      const p2 = transform(pointFrom(op.data[2], op.data[3]));
      const p3 = transform(pointFrom(op.data[4], op.data[5]));
      polycurve.push(curve(p0, p1, p2, p3));
      p0 = p3;
    }
  }
  return {
    type: "polycurve",
    data: polycurve
  };
};
var polylineFromPoints = (points) => {
  let previousPoint = points[0];
  const polyline = [];
  for (let i2 = 1; i2 < points.length; i2++) {
    const nextPoint = points[i2];
    polyline.push(lineSegment(previousPoint, nextPoint));
    previousPoint = nextPoint;
  }
  return polyline;
};
var getFreedrawShape = (element, center, isClosed = false) => {
  const transform = (p) => pointRotateRads(
    pointFromVector(
      vectorAdd(vectorFromPoint(p), vector(element.x, element.y))
    ),
    center,
    element.angle
  );
  const polyline = polylineFromPoints(
    element.points.map((p) => transform(p))
  );
  return isClosed ? {
    type: "polygon",
    data: polygonFromPoints(polyline.flat())
  } : {
    type: "polyline",
    data: polyline
  };
};
var getClosedCurveShape = (element, roughShape, startingPoint = pointFrom(0, 0), angleInRadian, center) => {
  const transform = (p) => pointRotateRads(
    pointFrom(p[0] + startingPoint[0], p[1] + startingPoint[1]),
    center,
    angleInRadian
  );
  if (element.roundness === null) {
    return {
      type: "polygon",
      data: polygonFromPoints(
        element.points.map((p) => transform(p))
      )
    };
  }
  const ops = getCurvePathOps(roughShape);
  const points = [];
  let odd = false;
  for (const operation of ops) {
    if (operation.op === "move") {
      odd = !odd;
      if (odd) {
        points.push(pointFrom(operation.data[0], operation.data[1]));
      }
    } else if (operation.op === "bcurveTo") {
      if (odd) {
        points.push(pointFrom(operation.data[0], operation.data[1]));
        points.push(pointFrom(operation.data[2], operation.data[3]));
        points.push(pointFrom(operation.data[4], operation.data[5]));
      }
    } else if (operation.op === "lineTo") {
      if (odd) {
        points.push(pointFrom(operation.data[0], operation.data[1]));
      }
    }
  }
  const polygonPoints = pointsOnBezierCurves(points, 10, 5).map(
    (p) => transform(p)
  );
  return {
    type: "polygon",
    data: polygonFromPoints(polygonPoints)
  };
};
var segmentIntersectRectangleElement = (element, segment, gap = 0) => {
  const bounds = [
    element.x - gap,
    element.y - gap,
    element.x + element.width + gap,
    element.y + element.height + gap
  ];
  const center = pointFrom(
    (bounds[0] + bounds[2]) / 2,
    (bounds[1] + bounds[3]) / 2
  );
  return [
    lineSegment(
      pointRotateRads(pointFrom(bounds[0], bounds[1]), center, element.angle),
      pointRotateRads(pointFrom(bounds[2], bounds[1]), center, element.angle)
    ),
    lineSegment(
      pointRotateRads(pointFrom(bounds[2], bounds[1]), center, element.angle),
      pointRotateRads(pointFrom(bounds[2], bounds[3]), center, element.angle)
    ),
    lineSegment(
      pointRotateRads(pointFrom(bounds[2], bounds[3]), center, element.angle),
      pointRotateRads(pointFrom(bounds[0], bounds[3]), center, element.angle)
    ),
    lineSegment(
      pointRotateRads(pointFrom(bounds[0], bounds[3]), center, element.angle),
      pointRotateRads(pointFrom(bounds[0], bounds[1]), center, element.angle)
    )
  ].map((s2) => segmentsIntersectAt(segment, s2)).filter((i2) => !!i2);
};
var distanceToEllipse = (p, ellipse2) => {
  const { angle, halfWidth, halfHeight, center } = ellipse2;
  const a2 = halfWidth;
  const b2 = halfHeight;
  const translatedPoint = vectorAdd(
    vectorFromPoint(p),
    vectorScale(vectorFromPoint(center), -1)
  );
  const [rotatedPointX, rotatedPointY] = pointRotateRads(
    pointFromVector(translatedPoint),
    pointFrom(0, 0),
    -angle
  );
  const px = Math.abs(rotatedPointX);
  const py = Math.abs(rotatedPointY);
  let tx = 0.707;
  let ty = 0.707;
  for (let i2 = 0; i2 < 3; i2++) {
    const x = a2 * tx;
    const y = b2 * ty;
    const ex = (a2 * a2 - b2 * b2) * tx ** 3 / a2;
    const ey = (b2 * b2 - a2 * a2) * ty ** 3 / b2;
    const rx = x - ex;
    const ry = y - ey;
    const qx = px - ex;
    const qy = py - ey;
    const r = Math.hypot(ry, rx);
    const q = Math.hypot(qy, qx);
    tx = Math.min(1, Math.max(0, (qx * r / q + ex) / a2));
    ty = Math.min(1, Math.max(0, (qy * r / q + ey) / b2));
    const t2 = Math.hypot(ty, tx);
    tx /= t2;
    ty /= t2;
  }
  const [minX, minY] = [
    a2 * tx * Math.sign(rotatedPointX),
    b2 * ty * Math.sign(rotatedPointY)
  ];
  return pointDistance(
    pointFrom(rotatedPointX, rotatedPointY),
    pointFrom(minX, minY)
  );
};
var pointOnEllipse = (point2, ellipse2, threshold = PRECISION) => {
  return distanceToEllipse(point2, ellipse2) <= threshold;
};
var pointInEllipse = (p, ellipse2) => {
  const { center, angle, halfWidth, halfHeight } = ellipse2;
  const translatedPoint = vectorAdd(
    vectorFromPoint(p),
    vectorScale(vectorFromPoint(center), -1)
  );
  const [rotatedPointX, rotatedPointY] = pointRotateRads(
    pointFromVector(translatedPoint),
    pointFrom(0, 0),
    -angle
  );
  return rotatedPointX / halfWidth * (rotatedPointX / halfWidth) + rotatedPointY / halfHeight * (rotatedPointY / halfHeight) <= 1;
};

// element/collision.ts
init_define_import_meta_env();

// ../utils/collision.ts
init_define_import_meta_env();
var isPointOnShape = (point2, shape, tolerance = 0) => {
  switch (shape.type) {
    case "polygon":
      return pointOnPolygon(point2, shape.data, tolerance);
    case "ellipse":
      return pointOnEllipse(point2, shape.data, tolerance);
    case "line":
      return pointOnLineSegment(point2, shape.data, tolerance);
    case "polyline":
      return pointOnPolyline(point2, shape.data, tolerance);
    case "curve":
      return pointOnCurve(point2, shape.data, tolerance);
    case "polycurve":
      return pointOnPolycurve(point2, shape.data, tolerance);
    default:
      throw Error(`shape ${shape} is not implemented`);
  }
};
var isPointInShape = (point2, shape) => {
  switch (shape.type) {
    case "polygon":
      return polygonIncludesPoint(point2, shape.data);
    case "line":
      return false;
    case "curve":
      return false;
    case "ellipse":
      return pointInEllipse(point2, shape.data);
    case "polyline": {
      const polygon3 = polygonFromPoints(shape.data.flat());
      return polygonIncludesPoint(point2, polygon3);
    }
    case "polycurve": {
      return false;
    }
    default:
      throw Error(`shape ${shape} is not implemented`);
  }
};
var pointOnPolycurve = (point2, polycurve, tolerance) => {
  return polycurve.some((curve3) => pointOnCurve(point2, curve3, tolerance));
};
var cubicBezierEquation = (curve3) => {
  const [p0, p1, p2, p3] = curve3;
  return (t2, idx) => Math.pow(1 - t2, 3) * p3[idx] + 3 * t2 * Math.pow(1 - t2, 2) * p2[idx] + 3 * Math.pow(t2, 2) * (1 - t2) * p1[idx] + p0[idx] * Math.pow(t2, 3);
};
var polyLineFromCurve = (curve3, segments = 10) => {
  const equation2 = cubicBezierEquation(curve3);
  let startingPoint = [equation2(0, 0), equation2(0, 1)];
  const lineSegments = [];
  let t2 = 0;
  const increment = 1 / segments;
  for (let i2 = 0; i2 < segments; i2++) {
    t2 += increment;
    if (t2 <= 1) {
      const nextPoint = pointFrom(equation2(t2, 0), equation2(t2, 1));
      lineSegments.push(lineSegment(startingPoint, nextPoint));
      startingPoint = nextPoint;
    }
  }
  return lineSegments;
};
var pointOnCurve = (point2, curve3, threshold) => {
  return pointOnPolyline(point2, polyLineFromCurve(curve3), threshold);
};
var pointOnPolyline = (point2, polyline, threshold = 1e-4) => {
  return polyline.some((line2) => pointOnLineSegment(point2, line2, threshold));
};

// element/collision.ts
var shouldTestInside = (element) => {
  if (element.type === "arrow") {
    return false;
  }
  const isDraggableFromInside = !isTransparent(element.backgroundColor) || hasBoundTextElement(element) || isIframeLikeElement(element) || isTextElement(element);
  if (element.type === "line") {
    return isDraggableFromInside && isPathALoop(element.points);
  }
  if (element.type === "freedraw") {
    return isDraggableFromInside && isPathALoop(element.points);
  }
  return isDraggableFromInside || isImageElement(element);
};
var hitElementItself = ({
  x,
  y,
  element,
  shape,
  threshold = 10,
  frameNameBound = null
}) => {
  let hit = shouldTestInside(element) ? (
    // Since `inShape` tests STRICTLY againt the insides of a shape
    // we would need `onShape` as well to include the "borders"
    isPointInShape(pointFrom(x, y), shape) || isPointOnShape(pointFrom(x, y), shape, threshold)
  ) : isPointOnShape(pointFrom(x, y), shape, threshold);
  if (!hit && frameNameBound) {
    hit = isPointInShape(pointFrom(x, y), {
      type: "polygon",
      data: getPolygonShape(frameNameBound).data
    });
  }
  return hit;
};
var hitElementBoundingBox = (x, y, element, elementsMap, tolerance = 0) => {
  let [x1, y1, x2, y2] = getElementBounds(element, elementsMap);
  x1 -= tolerance;
  y1 -= tolerance;
  x2 += tolerance;
  y2 += tolerance;
  return isPointWithinBounds(
    pointFrom(x1, y1),
    pointFrom(x, y),
    pointFrom(x2, y2)
  );
};
var hitElementBoundingBoxOnly = (hitArgs, elementsMap) => {
  return !hitElementItself(hitArgs) && // bound text is considered part of the element (even if it's outside the bounding box)
  !hitElementBoundText(
    hitArgs.x,
    hitArgs.y,
    getBoundTextShape(hitArgs.element, elementsMap)
  ) && hitElementBoundingBox(hitArgs.x, hitArgs.y, hitArgs.element, elementsMap);
};
var hitElementBoundText = (x, y, textShape) => {
  return !!textShape && isPointInShape(pointFrom(x, y), textShape);
};

// keys.ts
init_define_import_meta_env();
var CODES = {
  EQUAL: "Equal",
  MINUS: "Minus",
  NUM_ADD: "NumpadAdd",
  NUM_SUBTRACT: "NumpadSubtract",
  NUM_ZERO: "Numpad0",
  BRACKET_RIGHT: "BracketRight",
  BRACKET_LEFT: "BracketLeft",
  ONE: "Digit1",
  TWO: "Digit2",
  THREE: "Digit3",
  NINE: "Digit9",
  QUOTE: "Quote",
  ZERO: "Digit0",
  SLASH: "Slash",
  C: "KeyC",
  D: "KeyD",
  H: "KeyH",
  V: "KeyV",
  Z: "KeyZ",
  R: "KeyR",
  S: "KeyS"
};
var KEYS = {
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  BACKSPACE: "Backspace",
  ALT: "Alt",
  CTRL_OR_CMD: isDarwin ? "metaKey" : "ctrlKey",
  DELETE: "Delete",
  ENTER: "Enter",
  ESCAPE: "Escape",
  QUESTION_MARK: "?",
  SPACE: " ",
  TAB: "Tab",
  CHEVRON_LEFT: "<",
  CHEVRON_RIGHT: ">",
  PERIOD: ".",
  COMMA: ",",
  SUBTRACT: "-",
  SLASH: "/",
  A: "a",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  L: "l",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  V: "v",
  X: "x",
  Y: "y",
  Z: "z",
  K: "k",
  W: "w",
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
};
var isArrowKey = (key) => key === KEYS.ARROW_LEFT || key === KEYS.ARROW_RIGHT || key === KEYS.ARROW_DOWN || key === KEYS.ARROW_UP;
var shouldResizeFromCenter = (event) => event.altKey;
var shouldMaintainAspectRatio = (event) => event.shiftKey;
var shouldRotateWithDiscreteAngle = (event) => event.shiftKey;

// shapes.tsx
var SHAPES = [
  {
    icon: SelectionIcon,
    value: "selection",
    key: KEYS.V,
    numericKey: KEYS["1"],
    fillable: true
  },
  {
    icon: RectangleIcon,
    value: "rectangle",
    key: KEYS.R,
    numericKey: KEYS["2"],
    fillable: true
  },
  {
    icon: DiamondIcon,
    value: "diamond",
    key: KEYS.D,
    numericKey: KEYS["3"],
    fillable: true
  },
  {
    icon: EllipseIcon,
    value: "ellipse",
    key: KEYS.O,
    numericKey: KEYS["4"],
    fillable: true
  },
  {
    icon: ArrowIcon,
    value: "arrow",
    key: KEYS.A,
    numericKey: KEYS["5"],
    fillable: true
  },
  {
    icon: LineIcon,
    value: "line",
    key: KEYS.L,
    numericKey: KEYS["6"],
    fillable: true
  },
  {
    icon: FreedrawIcon,
    value: "freedraw",
    key: [KEYS.P, KEYS.X],
    numericKey: KEYS["7"],
    fillable: false
  },
  {
    icon: TextIcon,
    value: "text",
    key: KEYS.T,
    numericKey: KEYS["8"],
    fillable: false
  },
  {
    icon: ImageIcon,
    value: "image",
    key: null,
    numericKey: KEYS["9"],
    fillable: false
  },
  {
    icon: EraserIcon,
    value: "eraser",
    key: KEYS.E,
    numericKey: KEYS["0"],
    fillable: false
  }
];
var findShapeByKey = (key) => {
  const shape = SHAPES.find((shape2, index) => {
    return shape2.numericKey != null && key === shape2.numericKey.toString() || shape2.key && (typeof shape2.key === "string" ? shape2.key === key : shape2.key.includes(key));
  });
  return shape?.value || null;
};
var getElementShape = (element, elementsMap) => {
  switch (element.type) {
    case "rectangle":
    case "diamond":
    case "frame":
    case "magicframe":
    case "embeddable":
    case "image":
    case "iframe":
    case "text":
    case "selection":
      return getPolygonShape(element);
    case "arrow":
    case "line": {
      const roughShape = ShapeCache.get(element)?.[0] ?? ShapeCache.generateElementShape(element, null)[0];
      const [, , , , cx, cy] = getElementAbsoluteCoords(element, elementsMap);
      return shouldTestInside(element) ? getClosedCurveShape(
        element,
        roughShape,
        pointFrom(element.x, element.y),
        element.angle,
        pointFrom(cx, cy)
      ) : getCurveShape(
        roughShape,
        pointFrom(element.x, element.y),
        element.angle,
        pointFrom(cx, cy)
      );
    }
    case "ellipse":
      return getEllipseShape(element);
    case "freedraw": {
      const [, , , , cx, cy] = getElementAbsoluteCoords(element, elementsMap);
      return getFreedrawShape(
        element,
        pointFrom(cx, cy),
        shouldTestInside(element)
      );
    }
  }
};
var getBoundTextShape = (element, elementsMap) => {
  const boundTextElement = getBoundTextElement(element, elementsMap);
  if (boundTextElement) {
    if (element.type === "arrow") {
      return getElementShape(
        {
          ...boundTextElement,
          // arrow's bound text accurate position is not stored in the element's property
          // but rather calculated and returned from the following static method
          ...LinearElementEditor.getBoundTextElementPosition(
            element,
            boundTextElement,
            elementsMap
          )
        },
        elementsMap
      );
    }
    return getElementShape(boundTextElement, elementsMap);
  }
  return null;
};
var getControlPointsForBezierCurve = (element, endPoint) => {
  const shape = ShapeCache.generateElementShape(element, null);
  if (!shape) {
    return null;
  }
  const ops = getCurvePathOps(shape[0]);
  let currentP = pointFrom(0, 0);
  let index = 0;
  let minDistance = Infinity;
  let controlPoints = null;
  while (index < ops.length) {
    const { op, data } = ops[index];
    if (op === "move") {
      invariant(
        isPoint(data),
        "The returned ops is not compatible with a point"
      );
      currentP = pointFromPair(data);
    }
    if (op === "bcurveTo") {
      const p0 = currentP;
      const p1 = pointFrom(data[0], data[1]);
      const p2 = pointFrom(data[2], data[3]);
      const p3 = pointFrom(data[4], data[5]);
      const distance4 = pointDistance(p3, endPoint);
      if (distance4 < minDistance) {
        minDistance = distance4;
        controlPoints = [p0, p1, p2, p3];
      }
      currentP = p3;
    }
    index++;
  }
  return controlPoints;
};
var getBezierXY = (p0, p1, p2, p3, t2) => {
  const equation2 = (t3, idx) => Math.pow(1 - t3, 3) * p3[idx] + 3 * t3 * Math.pow(1 - t3, 2) * p2[idx] + 3 * Math.pow(t3, 2) * (1 - t3) * p1[idx] + p0[idx] * Math.pow(t3, 3);
  const tx = equation2(t2, 0);
  const ty = equation2(t2, 1);
  return pointFrom(tx, ty);
};
var getPointsInBezierCurve = (element, endPoint) => {
  const controlPoints = getControlPointsForBezierCurve(element, endPoint);
  if (!controlPoints) {
    return [];
  }
  const pointsOnCurve = [];
  let t2 = 1;
  while (t2 > 0) {
    const p = getBezierXY(
      controlPoints[0],
      controlPoints[1],
      controlPoints[2],
      controlPoints[3],
      t2
    );
    pointsOnCurve.push(pointFrom(p[0], p[1]));
    t2 -= 0.05;
  }
  if (pointsOnCurve.length) {
    if (pointsEqual(pointsOnCurve.at(-1), endPoint)) {
      pointsOnCurve.push(pointFrom(endPoint[0], endPoint[1]));
    }
  }
  return pointsOnCurve;
};
var getBezierCurveArcLengths = (element, endPoint) => {
  const arcLengths = [];
  arcLengths[0] = 0;
  const points = getPointsInBezierCurve(element, endPoint);
  let index = 0;
  let distance4 = 0;
  while (index < points.length - 1) {
    const segmentDistance = pointDistance(points[index], points[index + 1]);
    distance4 += segmentDistance;
    arcLengths.push(distance4);
    index++;
  }
  return arcLengths;
};
var getBezierCurveLength = (element, endPoint) => {
  const arcLengths = getBezierCurveArcLengths(element, endPoint);
  return arcLengths.at(-1);
};
var mapIntervalToBezierT = (element, endPoint, interval) => {
  const arcLengths = getBezierCurveArcLengths(element, endPoint);
  const pointsCount = arcLengths.length - 1;
  const curveLength = arcLengths.at(-1);
  const targetLength = interval * curveLength;
  let low = 0;
  let high = pointsCount;
  let index = 0;
  while (low < high) {
    index = Math.floor(low + (high - low) / 2);
    if (arcLengths[index] < targetLength) {
      low = index + 1;
    } else {
      high = index;
    }
  }
  if (arcLengths[index] > targetLength) {
    index--;
  }
  if (arcLengths[index] === targetLength) {
    return index / pointsCount;
  }
  return 1 - (index + (targetLength - arcLengths[index]) / (arcLengths[index + 1] - arcLengths[index])) / pointsCount;
};
var aabbForElement = (element, offset2) => {
  const bbox = {
    minX: element.x,
    minY: element.y,
    maxX: element.x + element.width,
    maxY: element.y + element.height,
    midX: element.x + element.width / 2,
    midY: element.y + element.height / 2
  };
  const center = pointFrom(bbox.midX, bbox.midY);
  const [topLeftX, topLeftY] = pointRotateRads(
    pointFrom(bbox.minX, bbox.minY),
    center,
    element.angle
  );
  const [topRightX, topRightY] = pointRotateRads(
    pointFrom(bbox.maxX, bbox.minY),
    center,
    element.angle
  );
  const [bottomRightX, bottomRightY] = pointRotateRads(
    pointFrom(bbox.maxX, bbox.maxY),
    center,
    element.angle
  );
  const [bottomLeftX, bottomLeftY] = pointRotateRads(
    pointFrom(bbox.minX, bbox.maxY),
    center,
    element.angle
  );
  const bounds = [
    Math.min(topLeftX, topRightX, bottomRightX, bottomLeftX),
    Math.min(topLeftY, topRightY, bottomRightY, bottomLeftY),
    Math.max(topLeftX, topRightX, bottomRightX, bottomLeftX),
    Math.max(topLeftY, topRightY, bottomRightY, bottomLeftY)
  ];
  if (offset2) {
    const [topOffset, rightOffset, downOffset, leftOffset] = offset2;
    return [
      bounds[0] - leftOffset,
      bounds[1] - topOffset,
      bounds[2] + rightOffset,
      bounds[3] + downOffset
    ];
  }
  return bounds;
};
var pointInsideBounds = (p, bounds) => p[0] > bounds[0] && p[0] < bounds[2] && p[1] > bounds[1] && p[1] < bounds[3];
var getCornerRadius = (x, element) => {
  if (element.roundness?.type === ROUNDNESS.PROPORTIONAL_RADIUS || element.roundness?.type === ROUNDNESS.LEGACY) {
    return x * DEFAULT_PROPORTIONAL_RADIUS;
  }
  if (element.roundness?.type === ROUNDNESS.ADAPTIVE_RADIUS) {
    const fixedRadiusSize = element.roundness?.value ?? DEFAULT_ADAPTIVE_RADIUS;
    const CUTOFF_SIZE = fixedRadiusSize / DEFAULT_PROPORTIONAL_RADIUS;
    if (x <= CUTOFF_SIZE) {
      return x * DEFAULT_PROPORTIONAL_RADIUS;
    }
    return fixedRadiusSize;
  }
  return 0;
};
var isPathALoop = (points, zoomValue = 1) => {
  if (points.length >= 3) {
    const [first, last] = [points[0], points[points.length - 1]];
    const distance4 = pointDistance(first, last);
    return distance4 <= LINE_CONFIRM_THRESHOLD / zoomValue;
  }
  return false;
};

// renderer/renderElement.ts
var IMAGE_INVERT_FILTER = "invert(100%) hue-rotate(180deg) saturate(1.25)";
var defaultAppState = getDefaultAppState();
var isPendingImageElement = (element, renderConfig) => isInitializedImageElement(element) && !renderConfig.imageCache.has(element.fileId);
var shouldResetImageFilter = (element, renderConfig, appState) => {
  return appState.theme === THEME.DARK && isInitializedImageElement(element) && !isPendingImageElement(element, renderConfig) && renderConfig.imageCache.get(element.fileId)?.mimeType !== MIME_TYPES.svg;
};
var getCanvasPadding = (element) => {
  switch (element.type) {
    case "freedraw":
      return element.strokeWidth * 12;
    case "text":
      return element.fontSize / 2;
    default:
      return 20;
  }
};
var getRenderOpacity = (element, containingFrame, elementsPendingErasure, pendingNodes) => {
  let opacity = (containingFrame?.opacity ?? 100) * element.opacity / 1e4;
  if (elementsPendingErasure.has(element.id) || pendingNodes && pendingNodes.some((node) => node.id === element.id) || containingFrame && elementsPendingErasure.has(containingFrame.id)) {
    opacity *= ELEMENT_READY_TO_ERASE_OPACITY / 100;
  }
  return opacity;
};
var cappedElementCanvasSize = (element, elementsMap, zoom) => {
  const AREA_LIMIT = 16777216;
  const WIDTH_HEIGHT_LIMIT = 32767;
  const padding = getCanvasPadding(element);
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const elementWidth = isLinearElement(element) || isFreeDrawElement(element) ? distance(x1, x2) : element.width;
  const elementHeight = isLinearElement(element) || isFreeDrawElement(element) ? distance(y1, y2) : element.height;
  let width = elementWidth * window.devicePixelRatio + padding * 2;
  let height = elementHeight * window.devicePixelRatio + padding * 2;
  let scale = zoom.value;
  if (width * scale > WIDTH_HEIGHT_LIMIT || height * scale > WIDTH_HEIGHT_LIMIT) {
    scale = Math.min(WIDTH_HEIGHT_LIMIT / width, WIDTH_HEIGHT_LIMIT / height);
  }
  if (width * height * scale * scale > AREA_LIMIT) {
    scale = Math.sqrt(AREA_LIMIT / (width * height));
  }
  width = Math.floor(width * scale);
  height = Math.floor(height * scale);
  return { width, height, scale };
};
var generateElementCanvas = (element, elementsMap, zoom, renderConfig, appState) => {
  const canvas2 = document.createElement("canvas");
  const context = canvas2.getContext("2d");
  const padding = getCanvasPadding(element);
  const { width, height, scale } = cappedElementCanvasSize(
    element,
    elementsMap,
    zoom
  );
  if (!width || !height) {
    return null;
  }
  canvas2.width = width;
  canvas2.height = height;
  let canvasOffsetX = -100;
  let canvasOffsetY = 0;
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    const [x1, y1] = getElementAbsoluteCoords(element, elementsMap);
    canvasOffsetX = element.x > x1 ? distance(element.x, x1) * window.devicePixelRatio * scale : 0;
    canvasOffsetY = element.y > y1 ? distance(element.y, y1) * window.devicePixelRatio * scale : 0;
    context.translate(canvasOffsetX, canvasOffsetY);
  }
  context.save();
  context.translate(padding * scale, padding * scale);
  context.scale(
    window.devicePixelRatio * scale,
    window.devicePixelRatio * scale
  );
  const rc = rough_default.canvas(canvas2);
  if (shouldResetImageFilter(element, renderConfig, appState)) {
    context.filter = IMAGE_INVERT_FILTER;
  }
  drawElementOnCanvas(element, rc, context, renderConfig, appState);
  context.restore();
  const boundTextElement = getBoundTextElement(element, elementsMap);
  const boundTextCanvas = document.createElement("canvas");
  const boundTextCanvasContext = boundTextCanvas.getContext("2d");
  if (isArrowElement(element) && boundTextElement) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const maxDim = Math.max(distance(x1, x2), distance(y1, y2));
    boundTextCanvas.width = maxDim * window.devicePixelRatio * scale + padding * scale * 10;
    boundTextCanvas.height = maxDim * window.devicePixelRatio * scale + padding * scale * 10;
    boundTextCanvasContext.translate(
      boundTextCanvas.width / 2,
      boundTextCanvas.height / 2
    );
    boundTextCanvasContext.rotate(element.angle);
    boundTextCanvasContext.drawImage(
      canvas2,
      -canvas2.width / 2,
      -canvas2.height / 2,
      canvas2.width,
      canvas2.height
    );
    const [, , , , boundTextCx, boundTextCy] = getElementAbsoluteCoords(
      boundTextElement,
      elementsMap
    );
    boundTextCanvasContext.rotate(-element.angle);
    const offsetX = (boundTextCanvas.width - canvas2.width) / 2;
    const offsetY = (boundTextCanvas.height - canvas2.height) / 2;
    const shiftX = boundTextCanvas.width / 2 - (boundTextCx - x1) * window.devicePixelRatio * scale - offsetX - padding * scale;
    const shiftY = boundTextCanvas.height / 2 - (boundTextCy - y1) * window.devicePixelRatio * scale - offsetY - padding * scale;
    boundTextCanvasContext.translate(-shiftX, -shiftY);
    boundTextCanvasContext.clearRect(
      -(boundTextElement.width / 2 + BOUND_TEXT_PADDING) * window.devicePixelRatio * scale,
      -(boundTextElement.height / 2 + BOUND_TEXT_PADDING) * window.devicePixelRatio * scale,
      (boundTextElement.width + BOUND_TEXT_PADDING * 2) * window.devicePixelRatio * scale,
      (boundTextElement.height + BOUND_TEXT_PADDING * 2) * window.devicePixelRatio * scale
    );
  }
  return {
    element,
    canvas: canvas2,
    theme: appState.theme,
    scale,
    zoomValue: zoom.value,
    canvasOffsetX,
    canvasOffsetY,
    boundTextElementVersion: getBoundTextElement(element, elementsMap)?.version || null,
    containingFrameOpacity: getContainingFrame(element, elementsMap)?.opacity || 100,
    boundTextCanvas,
    angle: element.angle
  };
};
var DEFAULT_LINK_SIZE = 14;
var IMAGE_PLACEHOLDER_IMG = document.createElement("img");
IMAGE_PLACEHOLDER_IMG.src = `data:${MIME_TYPES.svg},${encodeURIComponent(
  `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#888" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>`
)}`;
var IMAGE_ERROR_PLACEHOLDER_IMG = document.createElement("img");
IMAGE_ERROR_PLACEHOLDER_IMG.src = `data:${MIME_TYPES.svg},${encodeURIComponent(
  `<svg viewBox="0 0 668 668" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48ZM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56ZM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48Z" style="fill:#888;fill-rule:nonzero" transform="matrix(.81709 0 0 .81709 124.825 145.825)"/><path d="M256 8C119.034 8 8 119.033 8 256c0 136.967 111.034 248 248 248s248-111.034 248-248S392.967 8 256 8Zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676ZM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676Z" style="fill:#888;fill-rule:nonzero" transform="matrix(.30366 0 0 .30366 506.822 60.065)"/></svg>`
)}`;
var drawImagePlaceholder = (element, context) => {
  context.fillStyle = "#E7E7E7";
  context.fillRect(0, 0, element.width, element.height);
  const imageMinWidthOrHeight = Math.min(element.width, element.height);
  const size = Math.min(
    imageMinWidthOrHeight,
    Math.min(imageMinWidthOrHeight * 0.4, 100)
  );
  context.drawImage(
    element.status === "error" ? IMAGE_ERROR_PLACEHOLDER_IMG : IMAGE_PLACEHOLDER_IMG,
    element.width / 2 - size / 2,
    element.height / 2 - size / 2,
    size,
    size
  );
};
var drawElementOnCanvas = (element, rc, context, renderConfig, appState) => {
  switch (element.type) {
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "diamond":
    case "ellipse": {
      context.lineJoin = "round";
      context.lineCap = "round";
      rc.draw(ShapeCache.get(element));
      break;
    }
    case "arrow":
    case "line": {
      context.lineJoin = "round";
      context.lineCap = "round";
      ShapeCache.get(element).forEach((shape) => {
        rc.draw(shape);
      });
      break;
    }
    case "freedraw": {
      context.save();
      context.fillStyle = element.strokeColor;
      const path = getFreeDrawPath2D(element);
      const fillShape = ShapeCache.get(element);
      if (fillShape) {
        rc.draw(fillShape);
      }
      context.fillStyle = element.strokeColor;
      context.fill(path);
      context.restore();
      break;
    }
    case "image": {
      const img = isInitializedImageElement(element) ? renderConfig.imageCache.get(element.fileId)?.image : void 0;
      if (img != null && !(img instanceof Promise)) {
        if (element.roundness && context.roundRect) {
          context.beginPath();
          context.roundRect(
            0,
            0,
            element.width,
            element.height,
            getCornerRadius(Math.min(element.width, element.height), element)
          );
          context.clip();
        }
        context.drawImage(
          img,
          0,
          0,
          element.width,
          element.height
        );
      } else {
        drawImagePlaceholder(element, context);
      }
      break;
    }
    default: {
      if (isTextElement(element)) {
        const rtl = isRTL(element.text);
        const shouldTemporarilyAttach = rtl && !context.canvas.isConnected;
        if (shouldTemporarilyAttach) {
          document.body.appendChild(context.canvas);
        }
        context.canvas.setAttribute("dir", rtl ? "rtl" : "ltr");
        context.save();
        context.font = getFontString(element);
        context.fillStyle = element.strokeColor;
        context.textAlign = element.textAlign;
        const lines = element.text.replace(/\r\n?/g, "\n").split("\n");
        const horizontalOffset = element.textAlign === "center" ? element.width / 2 : element.textAlign === "right" ? element.width : 0;
        const lineHeightPx = getLineHeightInPx(
          element.fontSize,
          element.lineHeight
        );
        const verticalOffset = getVerticalOffset(
          element.fontFamily,
          element.fontSize,
          lineHeightPx
        );
        for (let index = 0; index < lines.length; index++) {
          context.fillText(
            lines[index],
            horizontalOffset,
            index * lineHeightPx + verticalOffset
          );
        }
        context.restore();
        if (shouldTemporarilyAttach) {
          context.canvas.remove();
        }
      } else {
        throw new Error(`Unimplemented type ${element.type}`);
      }
    }
  }
};
var elementWithCanvasCache = /* @__PURE__ */ new WeakMap();
var generateElementWithCanvas = (element, elementsMap, renderConfig, appState) => {
  const zoom = renderConfig ? appState.zoom : defaultAppState.zoom;
  const prevElementWithCanvas = elementWithCanvasCache.get(element);
  const shouldRegenerateBecauseZoom = prevElementWithCanvas && prevElementWithCanvas.zoomValue !== zoom.value && !appState?.shouldCacheIgnoreZoom;
  const boundTextElement = getBoundTextElement(element, elementsMap);
  const boundTextElementVersion = boundTextElement?.version || null;
  const containingFrameOpacity = getContainingFrame(element, elementsMap)?.opacity || 100;
  if (!prevElementWithCanvas || shouldRegenerateBecauseZoom || prevElementWithCanvas.theme !== appState.theme || prevElementWithCanvas.boundTextElementVersion !== boundTextElementVersion || prevElementWithCanvas.containingFrameOpacity !== containingFrameOpacity || // since we rotate the canvas when copying from cached canvas, we don't
  // regenerate the cached canvas. But we need to in case of labels which are
  // cached alongside the arrow, and we want the labels to remain unrotated
  // with respect to the arrow.
  isArrowElement(element) && boundTextElement && element.angle !== prevElementWithCanvas.angle) {
    const elementWithCanvas = generateElementCanvas(
      element,
      elementsMap,
      zoom,
      renderConfig,
      appState
    );
    if (!elementWithCanvas) {
      return null;
    }
    elementWithCanvasCache.set(element, elementWithCanvas);
    return elementWithCanvas;
  }
  return prevElementWithCanvas;
};
var drawElementFromCanvas = (elementWithCanvas, context, renderConfig, appState, allElementsMap) => {
  const element = elementWithCanvas.element;
  const padding = getCanvasPadding(element);
  const zoom = elementWithCanvas.scale;
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, allElementsMap);
  const cx = ((x1 + x2) / 2 + appState.scrollX) * window.devicePixelRatio;
  const cy = ((y1 + y2) / 2 + appState.scrollY) * window.devicePixelRatio;
  context.save();
  context.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
  const boundTextElement = getBoundTextElement(element, allElementsMap);
  if (isArrowElement(element) && boundTextElement) {
    const offsetX = (elementWithCanvas.boundTextCanvas.width - elementWithCanvas.canvas.width) / 2;
    const offsetY = (elementWithCanvas.boundTextCanvas.height - elementWithCanvas.canvas.height) / 2;
    context.translate(cx, cy);
    context.drawImage(
      elementWithCanvas.boundTextCanvas,
      -(x2 - x1) / 2 * window.devicePixelRatio - offsetX / zoom - padding,
      -(y2 - y1) / 2 * window.devicePixelRatio - offsetY / zoom - padding,
      elementWithCanvas.boundTextCanvas.width / zoom,
      elementWithCanvas.boundTextCanvas.height / zoom
    );
  } else {
    context.translate(cx, cy);
    context.rotate(element.angle);
    if ("scale" in elementWithCanvas.element && !isPendingImageElement(element, renderConfig)) {
      context.scale(
        elementWithCanvas.element.scale[0],
        elementWithCanvas.element.scale[1]
      );
    }
    context.translate(-cx, -cy);
    context.drawImage(
      elementWithCanvas.canvas,
      (x1 + appState.scrollX) * window.devicePixelRatio - padding * elementWithCanvas.scale / elementWithCanvas.scale,
      (y1 + appState.scrollY) * window.devicePixelRatio - padding * elementWithCanvas.scale / elementWithCanvas.scale,
      elementWithCanvas.canvas.width / elementWithCanvas.scale,
      elementWithCanvas.canvas.height / elementWithCanvas.scale
    );
    if (define_import_meta_env_default.VITE_APP_DEBUG_ENABLE_TEXT_CONTAINER_BOUNDING_BOX === "true" && hasBoundTextElement(element)) {
      const textElement = getBoundTextElement(
        element,
        allElementsMap
      );
      const coords = getContainerCoords(element);
      context.strokeStyle = "#c92a2a";
      context.lineWidth = 3;
      context.strokeRect(
        (coords.x + appState.scrollX) * window.devicePixelRatio,
        (coords.y + appState.scrollY) * window.devicePixelRatio,
        getBoundTextMaxWidth(element, textElement) * window.devicePixelRatio,
        getBoundTextMaxHeight(element, textElement) * window.devicePixelRatio
      );
    }
  }
  context.restore();
};
var renderSelectionElement = (element, context, appState, selectionColor) => {
  context.save();
  context.translate(element.x + appState.scrollX, element.y + appState.scrollY);
  context.fillStyle = "rgba(0, 0, 200, 0.04)";
  const offset2 = 0.5 / appState.zoom.value;
  context.fillRect(offset2, offset2, element.width, element.height);
  context.lineWidth = 1 / appState.zoom.value;
  context.strokeStyle = selectionColor;
  context.strokeRect(offset2, offset2, element.width, element.height);
  context.restore();
};
var renderElement = (element, elementsMap, allElementsMap, rc, context, renderConfig, appState) => {
  context.globalAlpha = getRenderOpacity(
    element,
    getContainingFrame(element, elementsMap),
    renderConfig.elementsPendingErasure,
    renderConfig.pendingFlowchartNodes
  );
  switch (element.type) {
    case "magicframe":
    case "frame": {
      if (appState.frameRendering.enabled && appState.frameRendering.outline) {
        context.save();
        context.translate(
          element.x + appState.scrollX,
          element.y + appState.scrollY
        );
        context.fillStyle = "rgba(0, 0, 200, 0.04)";
        context.lineWidth = FRAME_STYLE.strokeWidth / appState.zoom.value;
        context.strokeStyle = FRAME_STYLE.strokeColor;
        if (isMagicFrameElement(element)) {
          context.strokeStyle = appState.theme === THEME.LIGHT ? "#7affd7" : "#1d8264";
        }
        if (FRAME_STYLE.radius && context.roundRect) {
          context.beginPath();
          context.roundRect(
            0,
            0,
            element.width,
            element.height,
            FRAME_STYLE.radius / appState.zoom.value
          );
          context.stroke();
          context.closePath();
        } else {
          context.strokeRect(0, 0, element.width, element.height);
        }
        context.restore();
      }
      break;
    }
    case "freedraw": {
      ShapeCache.generateElementShape(element, null);
      if (renderConfig.isExporting) {
        const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
        const cx = (x1 + x2) / 2 + appState.scrollX;
        const cy = (y1 + y2) / 2 + appState.scrollY;
        const shiftX = (x2 - x1) / 2 - (element.x - x1);
        const shiftY = (y2 - y1) / 2 - (element.y - y1);
        context.save();
        context.translate(cx, cy);
        context.rotate(element.angle);
        context.translate(-shiftX, -shiftY);
        drawElementOnCanvas(element, rc, context, renderConfig, appState);
        context.restore();
      } else {
        const elementWithCanvas = generateElementWithCanvas(
          element,
          allElementsMap,
          renderConfig,
          appState
        );
        if (!elementWithCanvas) {
          return;
        }
        drawElementFromCanvas(
          elementWithCanvas,
          context,
          renderConfig,
          appState,
          allElementsMap
        );
      }
      break;
    }
    case "rectangle":
    case "diamond":
    case "ellipse":
    case "line":
    case "arrow":
    case "image":
    case "text":
    case "iframe":
    case "embeddable": {
      ShapeCache.generateElementShape(element, renderConfig);
      if (renderConfig.isExporting) {
        const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
        const cx = (x1 + x2) / 2 + appState.scrollX;
        const cy = (y1 + y2) / 2 + appState.scrollY;
        let shiftX = (x2 - x1) / 2 - (element.x - x1);
        let shiftY = (y2 - y1) / 2 - (element.y - y1);
        if (isTextElement(element)) {
          const container = getContainerElement(element, elementsMap);
          if (isArrowElement(container)) {
            const boundTextCoords = LinearElementEditor.getBoundTextElementPosition(
              container,
              element,
              elementsMap
            );
            shiftX = (x2 - x1) / 2 - (boundTextCoords.x - x1);
            shiftY = (y2 - y1) / 2 - (boundTextCoords.y - y1);
          }
        }
        context.save();
        context.translate(cx, cy);
        if (shouldResetImageFilter(element, renderConfig, appState)) {
          context.filter = "none";
        }
        const boundTextElement = getBoundTextElement(element, elementsMap);
        if (isArrowElement(element) && boundTextElement) {
          const tempCanvas = document.createElement("canvas");
          const tempCanvasContext = tempCanvas.getContext("2d");
          const maxDim = Math.max(distance(x1, x2), distance(y1, y2));
          const padding = getCanvasPadding(element);
          tempCanvas.width = maxDim * appState.exportScale + padding * 10 * appState.exportScale;
          tempCanvas.height = maxDim * appState.exportScale + padding * 10 * appState.exportScale;
          tempCanvasContext.translate(
            tempCanvas.width / 2,
            tempCanvas.height / 2
          );
          tempCanvasContext.scale(appState.exportScale, appState.exportScale);
          shiftX = element.width / 2 - (element.x - x1);
          shiftY = element.height / 2 - (element.y - y1);
          tempCanvasContext.rotate(element.angle);
          const tempRc = rough_default.canvas(tempCanvas);
          tempCanvasContext.translate(-shiftX, -shiftY);
          drawElementOnCanvas(
            element,
            tempRc,
            tempCanvasContext,
            renderConfig,
            appState
          );
          tempCanvasContext.translate(shiftX, shiftY);
          tempCanvasContext.rotate(-element.angle);
          const [, , , , boundTextCx, boundTextCy] = getElementAbsoluteCoords(
            boundTextElement,
            elementsMap
          );
          const boundTextShiftX = (x1 + x2) / 2 - boundTextCx;
          const boundTextShiftY = (y1 + y2) / 2 - boundTextCy;
          tempCanvasContext.translate(-boundTextShiftX, -boundTextShiftY);
          tempCanvasContext.clearRect(
            -boundTextElement.width / 2,
            -boundTextElement.height / 2,
            boundTextElement.width,
            boundTextElement.height
          );
          context.scale(1 / appState.exportScale, 1 / appState.exportScale);
          context.drawImage(
            tempCanvas,
            -tempCanvas.width / 2,
            -tempCanvas.height / 2,
            tempCanvas.width,
            tempCanvas.height
          );
        } else {
          context.rotate(element.angle);
          if (element.type === "image") {
            context.scale(element.scale[0], element.scale[1]);
          }
          context.translate(-shiftX, -shiftY);
          drawElementOnCanvas(element, rc, context, renderConfig, appState);
        }
        context.restore();
      } else {
        const elementWithCanvas = generateElementWithCanvas(
          element,
          allElementsMap,
          renderConfig,
          appState
        );
        if (!elementWithCanvas) {
          return;
        }
        const currentImageSmoothingStatus = context.imageSmoothingEnabled;
        if (
          // do not disable smoothing during zoom as blurry shapes look better
          // on low resolution (while still zooming in) than sharp ones
          !appState?.shouldCacheIgnoreZoom && // angle is 0 -> always disable smoothing
          (!element.angle || // or check if angle is a right angle in which case we can still
          // disable smoothing without adversely affecting the result
          // We need less-than comparison because of FP artihmetic
          isRightAngleRads(element.angle))
        ) {
          context.imageSmoothingEnabled = false;
        }
        drawElementFromCanvas(
          elementWithCanvas,
          context,
          renderConfig,
          appState,
          allElementsMap
        );
        context.imageSmoothingEnabled = currentImageSmoothingStatus;
      }
      break;
    }
    default: {
      throw new Error(`Unimplemented type ${element.type}`);
    }
  }
  context.globalAlpha = 1;
};
var pathsCache = /* @__PURE__ */ new WeakMap([]);
function generateFreeDrawShape(element) {
  const svgPathData = getFreeDrawSvgPath(element);
  const path = new Path2D(svgPathData);
  pathsCache.set(element, path);
  return path;
}
function getFreeDrawPath2D(element) {
  return pathsCache.get(element);
}
function getFreeDrawSvgPath(element) {
  const inputPoints = element.simulatePressure ? element.points : element.points.length ? element.points.map(([x, y], i2) => [x, y, element.pressures[i2]]) : [[0, 0, 0.5]];
  const options = {
    simulatePressure: element.simulatePressure,
    size: element.strokeWidth * 4.25,
    thinning: 0.6,
    smoothing: 0.5,
    streamline: 0.5,
    easing: (t2) => Math.sin(t2 * Math.PI / 2),
    // https://easings.net/#easeOutSine
    last: !!element.lastCommittedPoint
    // LastCommittedPoint is added on pointerup
  };
  return getSvgPathFromStroke2(ae(inputPoints, options));
}
function med(A2, B2) {
  return [(A2[0] + B2[0]) / 2, (A2[1] + B2[1]) / 2];
}
var TO_FIXED_PRECISION = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;
function getSvgPathFromStroke2(points) {
  if (!points.length) {
    return "";
  }
  const max = points.length - 1;
  return points.reduce(
    (acc, point2, i2, arr) => {
      if (i2 === max) {
        acc.push(point2, med(point2, arr[0]), "L", arr[0], "Z");
      } else {
        acc.push(point2, med(point2, arr[i2 + 1]));
      }
      return acc;
    },
    ["M", points[0], "Q"]
  ).join(" ").replace(TO_FIXED_PRECISION, "$1");
}

// node_modules/points-on-curve/lib/index.js
init_define_import_meta_env();
function distanceSq2(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
function distanceToSegmentSq2(p, v, w) {
  const l2 = distanceSq2(v, w);
  if (l2 === 0) {
    return distanceSq2(p, v);
  }
  let t2 = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
  t2 = Math.max(0, Math.min(1, t2));
  return distanceSq2(p, lerp2(v, w, t2));
}
function lerp2(a2, b2, t2) {
  return [
    a2[0] + (b2[0] - a2[0]) * t2,
    a2[1] + (b2[1] - a2[1]) * t2
  ];
}
function simplify2(points, distance4) {
  return simplifyPoints2(points, 0, points.length, distance4);
}
function simplifyPoints2(points, start2, end, epsilon, newPoints) {
  const outPoints = newPoints || [];
  const s2 = points[start2];
  const e2 = points[end - 1];
  let maxDistSq = 0;
  let maxNdx = 1;
  for (let i2 = start2 + 1; i2 < end - 1; ++i2) {
    const distSq = distanceToSegmentSq2(points[i2], s2, e2);
    if (distSq > maxDistSq) {
      maxDistSq = distSq;
      maxNdx = i2;
    }
  }
  if (Math.sqrt(maxDistSq) > epsilon) {
    simplifyPoints2(points, start2, maxNdx + 1, epsilon, outPoints);
    simplifyPoints2(points, maxNdx, end, epsilon, outPoints);
  } else {
    if (!outPoints.length) {
      outPoints.push(s2);
    }
    outPoints.push(e2);
  }
  return outPoints;
}

// scene/comparisons.ts
init_define_import_meta_env();
var hasBackground = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "ellipse" || type === "diamond" || type === "line" || type === "freedraw";
var hasStrokeColor = (type) => type !== "image" && type !== "frame" && type !== "magicframe";
var hasStrokeWidth = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "ellipse" || type === "diamond" || type === "freedraw" || type === "arrow" || type === "line";
var hasStrokeStyle = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "ellipse" || type === "diamond" || type === "arrow" || type === "line";
var canChangeRoundness = (type) => type === "rectangle" || type === "iframe" || type === "embeddable" || type === "line" || type === "diamond" || type === "image";
var toolIsArrow = (type) => type === "arrow";
var canHaveArrowheads = (type) => type === "arrow";
var getElementAtPosition = (elements, isAtPositionFn) => {
  let hitElement = null;
  for (let index = elements.length - 1; index >= 0; --index) {
    const element = elements[index];
    if (element.isDeleted) {
      continue;
    }
    if (isAtPositionFn(element)) {
      hitElement = element;
      break;
    }
  }
  return hitElement;
};

// scene/Shape.ts
var getDashArrayDashed = (strokeWidth) => [8, 8 + strokeWidth];
var getDashArrayDotted = (strokeWidth) => [1.5, 6 + strokeWidth];
function adjustRoughness(element) {
  const roughness = element.roughness;
  const maxSize = Math.max(element.width, element.height);
  const minSize = Math.min(element.width, element.height);
  if (
    // both sides relatively big
    minSize >= 20 && maxSize >= 50 || // is round & both sides above 15px
    minSize >= 15 && !!element.roundness && canChangeRoundness(element.type) || // relatively long linear element
    isLinearElement(element) && maxSize >= 50
  ) {
    return roughness;
  }
  return Math.min(roughness / (maxSize < 10 ? 3 : 2), 2.5);
}
var generateRoughOptions = (element, continuousPath = false) => {
  const options = {
    seed: element.seed,
    strokeLineDash: element.strokeStyle === "dashed" ? getDashArrayDashed(element.strokeWidth) : element.strokeStyle === "dotted" ? getDashArrayDotted(element.strokeWidth) : void 0,
    // for non-solid strokes, disable multiStroke because it tends to make
    // dashes/dots overlay each other
    disableMultiStroke: element.strokeStyle !== "solid",
    // for non-solid strokes, increase the width a bit to make it visually
    // similar to solid strokes, because we're also disabling multiStroke
    strokeWidth: element.strokeStyle !== "solid" ? element.strokeWidth + 0.5 : element.strokeWidth,
    // when increasing strokeWidth, we must explicitly set fillWeight and
    // hachureGap because if not specified, roughjs uses strokeWidth to
    // calculate them (and we don't want the fills to be modified)
    fillWeight: element.strokeWidth / 2,
    hachureGap: element.strokeWidth * 4,
    roughness: adjustRoughness(element),
    stroke: element.strokeColor,
    preserveVertices: continuousPath || element.roughness < ROUGHNESS.cartoonist
  };
  switch (element.type) {
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "diamond":
    case "ellipse": {
      options.fillStyle = element.fillStyle;
      options.fill = isTransparent(element.backgroundColor) ? void 0 : element.backgroundColor;
      if (element.type === "ellipse") {
        options.curveFitting = 1;
      }
      return options;
    }
    case "line":
    case "freedraw": {
      if (isPathALoop(element.points)) {
        options.fillStyle = element.fillStyle;
        options.fill = element.backgroundColor === "transparent" ? void 0 : element.backgroundColor;
      }
      return options;
    }
    case "arrow":
      return options;
    default: {
      throw new Error(`Unimplemented type ${element.type}`);
    }
  }
};
var modifyIframeLikeForRoughOptions = (element, isExporting, embedsValidationStatus) => {
  if (isIframeLikeElement(element) && (isExporting || isEmbeddableElement(element) && embedsValidationStatus?.get(element.id) !== true) && isTransparent(element.backgroundColor) && isTransparent(element.strokeColor)) {
    return {
      ...element,
      roughness: 0,
      backgroundColor: "#d3d3d3",
      fillStyle: "solid"
    };
  } else if (isIframeElement(element)) {
    return {
      ...element,
      strokeColor: isTransparent(element.strokeColor) ? "#000000" : element.strokeColor,
      backgroundColor: isTransparent(element.backgroundColor) ? "#f4f4f6" : element.backgroundColor
    };
  }
  return element;
};
var getArrowheadShapes = (element, shape, position, arrowhead, generator, options, canvasBackgroundColor) => {
  const arrowheadPoints = getArrowheadPoints(
    element,
    shape,
    position,
    arrowhead
  );
  if (arrowheadPoints === null) {
    return [];
  }
  switch (arrowhead) {
    case "dot":
    case "circle":
    case "circle_outline": {
      const [x, y, diameter] = arrowheadPoints;
      delete options.strokeLineDash;
      return [
        generator.circle(x, y, diameter, {
          ...options,
          fill: arrowhead === "circle_outline" ? canvasBackgroundColor : element.strokeColor,
          fillStyle: "solid",
          stroke: element.strokeColor,
          roughness: Math.min(0.5, options.roughness || 0)
        })
      ];
    }
    case "triangle":
    case "triangle_outline": {
      const [x, y, x2, y2, x3, y3] = arrowheadPoints;
      delete options.strokeLineDash;
      return [
        generator.polygon(
          [
            [x, y],
            [x2, y2],
            [x3, y3],
            [x, y]
          ],
          {
            ...options,
            fill: arrowhead === "triangle_outline" ? canvasBackgroundColor : element.strokeColor,
            fillStyle: "solid",
            roughness: Math.min(1, options.roughness || 0)
          }
        )
      ];
    }
    case "diamond":
    case "diamond_outline": {
      const [x, y, x2, y2, x3, y3, x4, y4] = arrowheadPoints;
      delete options.strokeLineDash;
      return [
        generator.polygon(
          [
            [x, y],
            [x2, y2],
            [x3, y3],
            [x4, y4],
            [x, y]
          ],
          {
            ...options,
            fill: arrowhead === "diamond_outline" ? canvasBackgroundColor : element.strokeColor,
            fillStyle: "solid",
            roughness: Math.min(1, options.roughness || 0)
          }
        )
      ];
    }
    case "bar":
    case "arrow":
    default: {
      const [x2, y2, x3, y3, x4, y4] = arrowheadPoints;
      if (element.strokeStyle === "dotted") {
        const dash = getDashArrayDotted(element.strokeWidth - 1);
        options.strokeLineDash = [dash[0], dash[1] - 1];
      } else {
        delete options.strokeLineDash;
      }
      options.roughness = Math.min(1, options.roughness || 0);
      return [
        generator.line(x3, y3, x2, y2, options),
        generator.line(x4, y4, x2, y2, options)
      ];
    }
  }
};
var _generateElementShape = (element, generator, {
  isExporting,
  canvasBackgroundColor,
  embedsValidationStatus
}) => {
  switch (element.type) {
    case "rectangle":
    case "iframe":
    case "embeddable": {
      let shape;
      if (element.roundness) {
        const w = element.width;
        const h = element.height;
        const r = getCornerRadius(Math.min(w, h), element);
        shape = generator.path(
          `M ${r} 0 L ${w - r} 0 Q ${w} 0, ${w} ${r} L ${w} ${h - r} Q ${w} ${h}, ${w - r} ${h} L ${r} ${h} Q 0 ${h}, 0 ${h - r} L 0 ${r} Q 0 0, ${r} 0`,
          generateRoughOptions(
            modifyIframeLikeForRoughOptions(
              element,
              isExporting,
              embedsValidationStatus
            ),
            true
          )
        );
      } else {
        shape = generator.rectangle(
          0,
          0,
          element.width,
          element.height,
          generateRoughOptions(
            modifyIframeLikeForRoughOptions(
              element,
              isExporting,
              embedsValidationStatus
            ),
            false
          )
        );
      }
      return shape;
    }
    case "diamond": {
      let shape;
      const [topX, topY, rightX, rightY, bottomX, bottomY, leftX, leftY] = getDiamondPoints(element);
      if (element.roundness) {
        const verticalRadius = getCornerRadius(Math.abs(topX - leftX), element);
        const horizontalRadius = getCornerRadius(
          Math.abs(rightY - topY),
          element
        );
        shape = generator.path(
          `M ${topX + verticalRadius} ${topY + horizontalRadius} L ${rightX - verticalRadius} ${rightY - horizontalRadius}
            C ${rightX} ${rightY}, ${rightX} ${rightY}, ${rightX - verticalRadius} ${rightY + horizontalRadius}
            L ${bottomX + verticalRadius} ${bottomY - horizontalRadius}
            C ${bottomX} ${bottomY}, ${bottomX} ${bottomY}, ${bottomX - verticalRadius} ${bottomY - horizontalRadius}
            L ${leftX + verticalRadius} ${leftY + horizontalRadius}
            C ${leftX} ${leftY}, ${leftX} ${leftY}, ${leftX + verticalRadius} ${leftY - horizontalRadius}
            L ${topX - verticalRadius} ${topY + horizontalRadius}
            C ${topX} ${topY}, ${topX} ${topY}, ${topX + verticalRadius} ${topY + horizontalRadius}`,
          generateRoughOptions(element, true)
        );
      } else {
        shape = generator.polygon(
          [
            [topX, topY],
            [rightX, rightY],
            [bottomX, bottomY],
            [leftX, leftY]
          ],
          generateRoughOptions(element)
        );
      }
      return shape;
    }
    case "ellipse": {
      const shape = generator.ellipse(
        element.width / 2,
        element.height / 2,
        element.width,
        element.height,
        generateRoughOptions(element)
      );
      return shape;
    }
    case "line":
    case "arrow": {
      let shape;
      const options = generateRoughOptions(element);
      const points = element.points.length ? element.points : [pointFrom(0, 0)];
      if (isElbowArrow(element)) {
        shape = [
          generator.path(
            generateElbowArrowShape(points, 16),
            generateRoughOptions(element, true)
          )
        ];
      } else if (!element.roundness) {
        if (options.fill) {
          shape = [
            generator.polygon(points, options)
          ];
        } else {
          shape = [
            generator.linearPath(points, options)
          ];
        }
      } else {
        shape = [generator.curve(points, options)];
      }
      if (element.type === "arrow") {
        const { startArrowhead = null, endArrowhead = "arrow" } = element;
        if (startArrowhead !== null) {
          const shapes = getArrowheadShapes(
            element,
            shape,
            "start",
            startArrowhead,
            generator,
            options,
            canvasBackgroundColor
          );
          shape.push(...shapes);
        }
        if (endArrowhead !== null) {
          if (endArrowhead === void 0) {
          }
          const shapes = getArrowheadShapes(
            element,
            shape,
            "end",
            endArrowhead,
            generator,
            options,
            canvasBackgroundColor
          );
          shape.push(...shapes);
        }
      }
      return shape;
    }
    case "freedraw": {
      let shape;
      generateFreeDrawShape(element);
      if (isPathALoop(element.points)) {
        const simplifiedPoints = simplify2(element.points, 0.75);
        shape = generator.curve(simplifiedPoints, {
          ...generateRoughOptions(element),
          stroke: "none"
        });
      } else {
        shape = null;
      }
      return shape;
    }
    case "frame":
    case "magicframe":
    case "text":
    case "image": {
      const shape = null;
      return shape;
    }
    default: {
      assertNever(
        element,
        `generateElementShape(): Unimplemented type ${element?.type}`
      );
      return null;
    }
  }
};
var generateElbowArrowShape = (points, radius) => {
  const subpoints = [];
  for (let i2 = 1; i2 < points.length - 1; i2 += 1) {
    const prev = points[i2 - 1];
    const next = points[i2 + 1];
    const corner = Math.min(
      radius,
      pointDistance(points[i2], next) / 2,
      pointDistance(points[i2], prev) / 2
    );
    if (prev[0] < points[i2][0] && prev[1] === points[i2][1]) {
      subpoints.push([points[i2][0] - corner, points[i2][1]]);
    } else if (prev[0] === points[i2][0] && prev[1] < points[i2][1]) {
      subpoints.push([points[i2][0], points[i2][1] - corner]);
    } else if (prev[0] > points[i2][0] && prev[1] === points[i2][1]) {
      subpoints.push([points[i2][0] + corner, points[i2][1]]);
    } else {
      subpoints.push([points[i2][0], points[i2][1] + corner]);
    }
    subpoints.push(points[i2]);
    if (next[0] < points[i2][0] && next[1] === points[i2][1]) {
      subpoints.push([points[i2][0] - corner, points[i2][1]]);
    } else if (next[0] === points[i2][0] && next[1] < points[i2][1]) {
      subpoints.push([points[i2][0], points[i2][1] - corner]);
    } else if (next[0] > points[i2][0] && next[1] === points[i2][1]) {
      subpoints.push([points[i2][0] + corner, points[i2][1]]);
    } else {
      subpoints.push([points[i2][0], points[i2][1] + corner]);
    }
  }
  const d = [`M ${points[0][0]} ${points[0][1]}`];
  for (let i2 = 0; i2 < subpoints.length; i2 += 3) {
    d.push(`L ${subpoints[i2][0]} ${subpoints[i2][1]}`);
    d.push(
      `Q ${subpoints[i2 + 1][0]} ${subpoints[i2 + 1][1]}, ${subpoints[i2 + 2][0]} ${subpoints[i2 + 2][1]}`
    );
  }
  d.push(`L ${points[points.length - 1][0]} ${points[points.length - 1][1]}`);
  return d.join(" ");
};

// points.ts
init_define_import_meta_env();
var getSizeFromPoints = (points) => {
  const xs = points.map((point2) => point2[0]);
  const ys = points.map((point2) => point2[1]);
  return {
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys)
  };
};
var rescalePoints = (dimension, newSize, points, normalize2) => {
  const coordinates = points.map((point2) => point2[dimension]);
  const maxCoordinate = Math.max(...coordinates);
  const minCoordinate = Math.min(...coordinates);
  const size = maxCoordinate - minCoordinate;
  const scale = size === 0 ? 1 : newSize / size;
  let nextMinCoordinate = Infinity;
  const scaledPoints = points.map((point2) => {
    const newCoordinate = point2[dimension] * scale;
    const newPoint = [...point2];
    newPoint[dimension] = newCoordinate;
    if (newCoordinate < nextMinCoordinate) {
      nextMinCoordinate = newCoordinate;
    }
    return newPoint;
  });
  if (!normalize2) {
    return scaledPoints;
  }
  if (scaledPoints.length === 2) {
    return scaledPoints;
  }
  const translation2 = minCoordinate - nextMinCoordinate;
  const nextPoints = scaledPoints.map(
    (scaledPoint) => pointFromPair(
      scaledPoint.map((value, currentDimension) => {
        return currentDimension === dimension ? value + translation2 : value;
      })
    )
  );
  return nextPoints;
};

// element/bounds.ts
var ElementBounds = class _ElementBounds {
  static boundsCache = /* @__PURE__ */ new WeakMap();
  static getBounds(element, elementsMap) {
    const cachedBounds = _ElementBounds.boundsCache.get(element);
    if (cachedBounds?.version && cachedBounds.version === element.version && // we don't invalidate cache when we update containers and not labels,
    // which is causing problems down the line. Fix TBA.
    !isBoundToContainer(element)) {
      return cachedBounds.bounds;
    }
    const bounds = _ElementBounds.calculateBounds(element, elementsMap);
    _ElementBounds.boundsCache.set(element, {
      version: element.version,
      bounds
    });
    return bounds;
  }
  static calculateBounds(element, elementsMap) {
    let bounds;
    const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
      element,
      elementsMap
    );
    if (isFreeDrawElement(element)) {
      const [minX, minY, maxX, maxY] = getBoundsFromPoints(
        element.points.map(
          ([x, y]) => pointRotateRads(
            pointFrom(x, y),
            pointFrom(cx - element.x, cy - element.y),
            element.angle
          )
        )
      );
      return [
        minX + element.x,
        minY + element.y,
        maxX + element.x,
        maxY + element.y
      ];
    } else if (isLinearElement(element)) {
      bounds = getLinearElementRotatedBounds(element, cx, cy, elementsMap);
    } else if (element.type === "diamond") {
      const [x11, y11] = pointRotateRads(
        pointFrom(cx, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const [x12, y12] = pointRotateRads(
        pointFrom(cx, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const [x22, y22] = pointRotateRads(
        pointFrom(x1, cy),
        pointFrom(cx, cy),
        element.angle
      );
      const [x21, y21] = pointRotateRads(
        pointFrom(x2, cy),
        pointFrom(cx, cy),
        element.angle
      );
      const minX = Math.min(x11, x12, x22, x21);
      const minY = Math.min(y11, y12, y22, y21);
      const maxX = Math.max(x11, x12, x22, x21);
      const maxY = Math.max(y11, y12, y22, y21);
      bounds = [minX, minY, maxX, maxY];
    } else if (element.type === "ellipse") {
      const w = (x2 - x1) / 2;
      const h = (y2 - y1) / 2;
      const cos = Math.cos(element.angle);
      const sin = Math.sin(element.angle);
      const ww = Math.hypot(w * cos, h * sin);
      const hh = Math.hypot(h * cos, w * sin);
      bounds = [cx - ww, cy - hh, cx + ww, cy + hh];
    } else {
      const [x11, y11] = pointRotateRads(
        pointFrom(x1, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const [x12, y12] = pointRotateRads(
        pointFrom(x1, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const [x22, y22] = pointRotateRads(
        pointFrom(x2, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const [x21, y21] = pointRotateRads(
        pointFrom(x2, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const minX = Math.min(x11, x12, x22, x21);
      const minY = Math.min(y11, y12, y22, y21);
      const maxX = Math.max(x11, x12, x22, x21);
      const maxY = Math.max(y11, y12, y22, y21);
      bounds = [minX, minY, maxX, maxY];
    }
    return bounds;
  }
};
var getElementAbsoluteCoords = (element, elementsMap, includeBoundText = false) => {
  if (isFreeDrawElement(element)) {
    return getFreeDrawElementAbsoluteCoords(element);
  } else if (isLinearElement(element)) {
    return LinearElementEditor.getElementAbsoluteCoords(
      element,
      elementsMap,
      includeBoundText
    );
  } else if (isTextElement(element)) {
    const container = elementsMap ? getContainerElement(element, elementsMap) : null;
    if (isArrowElement(container)) {
      const { x, y } = LinearElementEditor.getBoundTextElementPosition(
        container,
        element,
        elementsMap
      );
      return [
        x,
        y,
        x + element.width,
        y + element.height,
        x + element.width / 2,
        y + element.height / 2
      ];
    }
  }
  return [
    element.x,
    element.y,
    element.x + element.width,
    element.y + element.height,
    element.x + element.width / 2,
    element.y + element.height / 2
  ];
};
var getElementLineSegments = (element, elementsMap) => {
  const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
    element,
    elementsMap
  );
  const center = pointFrom(cx, cy);
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    const segments = [];
    let i2 = 0;
    while (i2 < element.points.length - 1) {
      segments.push(
        lineSegment(
          pointRotateRads(
            pointFrom(
              element.points[i2][0] + element.x,
              element.points[i2][1] + element.y
            ),
            center,
            element.angle
          ),
          pointRotateRads(
            pointFrom(
              element.points[i2 + 1][0] + element.x,
              element.points[i2 + 1][1] + element.y
            ),
            center,
            element.angle
          )
        )
      );
      i2++;
    }
    return segments;
  }
  const [nw, ne, sw, se2, n2, s2, w, e2] = [
    [x1, y1],
    [x2, y1],
    [x1, y2],
    [x2, y2],
    [cx, y1],
    [cx, y2],
    [x1, cy],
    [x2, cy]
  ].map((point2) => pointRotateRads(point2, center, element.angle));
  if (element.type === "diamond") {
    return [
      lineSegment(n2, w),
      lineSegment(n2, e2),
      lineSegment(s2, w),
      lineSegment(s2, e2)
    ];
  }
  if (element.type === "ellipse") {
    return [
      lineSegment(n2, w),
      lineSegment(n2, e2),
      lineSegment(s2, w),
      lineSegment(s2, e2),
      lineSegment(n2, w),
      lineSegment(n2, e2),
      lineSegment(s2, w),
      lineSegment(s2, e2)
    ];
  }
  return [
    lineSegment(nw, ne),
    lineSegment(sw, se2),
    lineSegment(nw, sw),
    lineSegment(ne, se2),
    lineSegment(nw, e2),
    lineSegment(sw, e2),
    lineSegment(ne, w),
    lineSegment(se2, w)
  ];
};
var getDiamondPoints = (element) => {
  const topX = Math.floor(element.width / 2) + 1;
  const topY = 0;
  const rightX = element.width;
  const rightY = Math.floor(element.height / 2) + 1;
  const bottomX = topX;
  const bottomY = element.height;
  const leftX = 0;
  const leftY = rightY;
  return [topX, topY, rightX, rightY, bottomX, bottomY, leftX, leftY];
};
var getCurvePathOps2 = (shape) => {
  for (const set of shape.sets) {
    if (set.type === "path") {
      return set.ops;
    }
  }
  return shape.sets[0].ops;
};
var getBezierValueForT = (t2, p0, p1, p2, p3) => {
  const oneMinusT = 1 - t2;
  return Math.pow(oneMinusT, 3) * p0 + 3 * Math.pow(oneMinusT, 2) * t2 * p1 + 3 * oneMinusT * Math.pow(t2, 2) * p2 + Math.pow(t2, 3) * p3;
};
var solveQuadratic = (p0, p1, p2, p3) => {
  const i2 = p1 - p0;
  const j = p2 - p1;
  const k = p3 - p2;
  const a2 = 3 * i2 - 6 * j + 3 * k;
  const b2 = 6 * j - 6 * i2;
  const c = 3 * i2;
  const sqrtPart = b2 * b2 - 4 * a2 * c;
  const hasSolution = sqrtPart >= 0;
  if (!hasSolution) {
    return false;
  }
  let s1 = null;
  let s2 = null;
  let t1 = Infinity;
  let t2 = Infinity;
  if (a2 === 0) {
    t1 = t2 = -c / b2;
  } else {
    t1 = (-b2 + Math.sqrt(sqrtPart)) / (2 * a2);
    t2 = (-b2 - Math.sqrt(sqrtPart)) / (2 * a2);
  }
  if (t1 >= 0 && t1 <= 1) {
    s1 = getBezierValueForT(t1, p0, p1, p2, p3);
  }
  if (t2 >= 0 && t2 <= 1) {
    s2 = getBezierValueForT(t2, p0, p1, p2, p3);
  }
  return [s1, s2];
};
var getCubicBezierCurveBound = (p0, p1, p2, p3) => {
  const solX = solveQuadratic(p0[0], p1[0], p2[0], p3[0]);
  const solY = solveQuadratic(p0[1], p1[1], p2[1], p3[1]);
  let minX = Math.min(p0[0], p3[0]);
  let maxX = Math.max(p0[0], p3[0]);
  if (solX) {
    const xs = solX.filter((x) => x !== null);
    minX = Math.min(minX, ...xs);
    maxX = Math.max(maxX, ...xs);
  }
  let minY = Math.min(p0[1], p3[1]);
  let maxY = Math.max(p0[1], p3[1]);
  if (solY) {
    const ys = solY.filter((y) => y !== null);
    minY = Math.min(minY, ...ys);
    maxY = Math.max(maxY, ...ys);
  }
  return [minX, minY, maxX, maxY];
};
var getMinMaxXYFromCurvePathOps = (ops, transformXY) => {
  let currentP = pointFrom(0, 0);
  const { minX, minY, maxX, maxY } = ops.reduce(
    (limits, { op, data }) => {
      if (op === "move") {
        const p = pointFromArray(data);
        invariant(p != null, "Op data is not a point");
        currentP = p;
      } else if (op === "bcurveTo") {
        const _p1 = pointFrom(data[0], data[1]);
        const _p2 = pointFrom(data[2], data[3]);
        const _p3 = pointFrom(data[4], data[5]);
        const p1 = transformXY ? transformXY(_p1) : _p1;
        const p2 = transformXY ? transformXY(_p2) : _p2;
        const p3 = transformXY ? transformXY(_p3) : _p3;
        const p0 = transformXY ? transformXY(currentP) : currentP;
        currentP = _p3;
        const [minX2, minY2, maxX2, maxY2] = getCubicBezierCurveBound(
          p0,
          p1,
          p2,
          p3
        );
        limits.minX = Math.min(limits.minX, minX2);
        limits.minY = Math.min(limits.minY, minY2);
        limits.maxX = Math.max(limits.maxX, maxX2);
        limits.maxY = Math.max(limits.maxY, maxY2);
      } else if (op === "lineTo") {
      } else if (op === "qcurveTo") {
      }
      return limits;
    },
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
  );
  return [minX, minY, maxX, maxY];
};
var getBoundsFromPoints = (points) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  return [minX, minY, maxX, maxY];
};
var getFreeDrawElementAbsoluteCoords = (element) => {
  const [minX, minY, maxX, maxY] = getBoundsFromPoints(element.points);
  const x1 = minX + element.x;
  const y1 = minY + element.y;
  const x2 = maxX + element.x;
  const y2 = maxY + element.y;
  return [x1, y1, x2, y2, (x1 + x2) / 2, (y1 + y2) / 2];
};
var getArrowheadSize = (arrowhead) => {
  switch (arrowhead) {
    case "arrow":
      return 25;
    case "diamond":
    case "diamond_outline":
      return 12;
    default:
      return 15;
  }
};
var getArrowheadAngle = (arrowhead) => {
  switch (arrowhead) {
    case "bar":
      return 90;
    case "arrow":
      return 20;
    default:
      return 25;
  }
};
var getArrowheadPoints = (element, shape, position, arrowhead) => {
  const ops = getCurvePathOps2(shape[0]);
  if (ops.length < 1) {
    return null;
  }
  const index = position === "start" ? 1 : ops.length - 1;
  const data = ops[index].data;
  invariant(data.length === 6, "Op data length is not 6");
  const p3 = pointFrom(data[4], data[5]);
  const p2 = pointFrom(data[2], data[3]);
  const p1 = pointFrom(data[0], data[1]);
  const prevOp = ops[index - 1];
  let p0 = pointFrom(0, 0);
  if (prevOp.op === "move") {
    const p = pointFromArray(prevOp.data);
    invariant(p != null, "Op data is not a point");
    p0 = p;
  } else if (prevOp.op === "bcurveTo") {
    p0 = pointFrom(prevOp.data[4], prevOp.data[5]);
  }
  const equation2 = (t2, idx) => Math.pow(1 - t2, 3) * p3[idx] + 3 * t2 * Math.pow(1 - t2, 2) * p2[idx] + 3 * Math.pow(t2, 2) * (1 - t2) * p1[idx] + p0[idx] * Math.pow(t2, 3);
  const [x2, y2] = position === "start" ? p0 : p3;
  const [x1, y1] = [equation2(0.3, 0), equation2(0.3, 1)];
  const distance4 = Math.hypot(x2 - x1, y2 - y1);
  const nx = (x2 - x1) / distance4;
  const ny = (y2 - y1) / distance4;
  const size = getArrowheadSize(arrowhead);
  let length = 0;
  {
    const [cx, cy] = position === "end" ? element.points[element.points.length - 1] : element.points[0];
    const [px, py] = element.points.length > 1 ? position === "end" ? element.points[element.points.length - 2] : element.points[1] : [0, 0];
    length = Math.hypot(cx - px, cy - py);
  }
  const lengthMultiplier = arrowhead === "diamond" || arrowhead === "diamond_outline" ? 0.25 : 0.5;
  const minSize = Math.min(size, length * lengthMultiplier);
  const xs = x2 - nx * minSize;
  const ys = y2 - ny * minSize;
  if (arrowhead === "dot" || arrowhead === "circle" || arrowhead === "circle_outline") {
    const diameter = Math.hypot(ys - y2, xs - x2) + element.strokeWidth - 2;
    return [x2, y2, diameter];
  }
  const angle = getArrowheadAngle(arrowhead);
  const [x3, y3] = pointRotateRads(
    pointFrom(xs, ys),
    pointFrom(x2, y2),
    -angle * Math.PI / 180
  );
  const [x4, y4] = pointRotateRads(
    pointFrom(xs, ys),
    pointFrom(x2, y2),
    degreesToRadians(angle)
  );
  if (arrowhead === "diamond" || arrowhead === "diamond_outline") {
    let ox;
    let oy;
    if (position === "start") {
      const [px, py] = element.points.length > 1 ? element.points[1] : [0, 0];
      [ox, oy] = pointRotateRads(
        pointFrom(x2 + minSize * 2, y2),
        pointFrom(x2, y2),
        Math.atan2(py - y2, px - x2)
      );
    } else {
      const [px, py] = element.points.length > 1 ? element.points[element.points.length - 2] : [0, 0];
      [ox, oy] = pointRotateRads(
        pointFrom(x2 - minSize * 2, y2),
        pointFrom(x2, y2),
        Math.atan2(y2 - py, x2 - px)
      );
    }
    return [x2, y2, x3, y3, ox, oy, x4, y4];
  }
  return [x2, y2, x3, y3, x4, y4];
};
var generateLinearElementShape = (element) => {
  const generator = rough_default.generator();
  const options = generateRoughOptions(element);
  const method = (() => {
    if (element.roundness) {
      return "curve";
    }
    if (options.fill) {
      return "polygon";
    }
    return "linearPath";
  })();
  return generator[method](
    element.points,
    options
  );
};
var getLinearElementRotatedBounds = (element, cx, cy, elementsMap) => {
  const boundTextElement = getBoundTextElement(element, elementsMap);
  if (element.points.length < 2) {
    const [pointX, pointY] = element.points[0];
    const [x, y] = pointRotateRads(
      pointFrom(element.x + pointX, element.y + pointY),
      pointFrom(cx, cy),
      element.angle
    );
    let coords2 = [x, y, x, y];
    if (boundTextElement) {
      const coordsWithBoundText = LinearElementEditor.getMinMaxXYWithBoundText(
        element,
        elementsMap,
        [x, y, x, y],
        boundTextElement
      );
      coords2 = [
        coordsWithBoundText[0],
        coordsWithBoundText[1],
        coordsWithBoundText[2],
        coordsWithBoundText[3]
      ];
    }
    return coords2;
  }
  const cachedShape = ShapeCache.get(element)?.[0];
  const shape = cachedShape ?? generateLinearElementShape(element);
  const ops = getCurvePathOps2(shape);
  const transformXY = ([x, y]) => pointRotateRads(
    pointFrom(element.x + x, element.y + y),
    pointFrom(cx, cy),
    element.angle
  );
  const res = getMinMaxXYFromCurvePathOps(ops, transformXY);
  let coords = [res[0], res[1], res[2], res[3]];
  if (boundTextElement) {
    const coordsWithBoundText = LinearElementEditor.getMinMaxXYWithBoundText(
      element,
      elementsMap,
      coords,
      boundTextElement
    );
    coords = [
      coordsWithBoundText[0],
      coordsWithBoundText[1],
      coordsWithBoundText[2],
      coordsWithBoundText[3]
    ];
  }
  return coords;
};
var getElementBounds = (element, elementsMap) => {
  return ElementBounds.getBounds(element, elementsMap);
};
var getCommonBounds = (elements, elementsMap) => {
  if (!elements.length) {
    return [0, 0, 0, 0];
  }
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  const _elementsMap = elementsMap || arrayToMap(elements);
  elements.forEach((element) => {
    const [x1, y1, x2, y2] = getElementBounds(element, _elementsMap);
    minX = Math.min(minX, x1);
    minY = Math.min(minY, y1);
    maxX = Math.max(maxX, x2);
    maxY = Math.max(maxY, y2);
  });
  return [minX, minY, maxX, maxY];
};
var getDraggedElementsBounds = (elements, dragOffset) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  return [
    minX + dragOffset.x,
    minY + dragOffset.y,
    maxX + dragOffset.x,
    maxY + dragOffset.y
  ];
};
var getResizedElementAbsoluteCoords = (element, nextWidth, nextHeight, normalizePoints) => {
  if (!(isLinearElement(element) || isFreeDrawElement(element))) {
    return [
      element.x,
      element.y,
      element.x + nextWidth,
      element.y + nextHeight
    ];
  }
  const points = rescalePoints(
    0,
    nextWidth,
    rescalePoints(1, nextHeight, element.points, normalizePoints),
    normalizePoints
  );
  let bounds;
  if (isFreeDrawElement(element)) {
    bounds = getBoundsFromPoints(points);
  } else {
    const gen = rough_default.generator();
    const curve3 = !element.roundness ? gen.linearPath(
      points,
      generateRoughOptions(element)
    ) : gen.curve(points, generateRoughOptions(element));
    const ops = getCurvePathOps2(curve3);
    bounds = getMinMaxXYFromCurvePathOps(ops);
  }
  const [minX, minY, maxX, maxY] = bounds;
  return [
    minX + element.x,
    minY + element.y,
    maxX + element.x,
    maxY + element.y
  ];
};
var getElementPointsCoords = (element, points) => {
  const gen = rough_default.generator();
  const curve3 = element.roundness == null ? gen.linearPath(
    points,
    generateRoughOptions(element)
  ) : gen.curve(points, generateRoughOptions(element));
  const ops = getCurvePathOps2(curve3);
  const [minX, minY, maxX, maxY] = getMinMaxXYFromCurvePathOps(ops);
  return [
    minX + element.x,
    minY + element.y,
    maxX + element.x,
    maxY + element.y
  ];
};
var getClosestElementBounds = (elements, from3) => {
  if (!elements.length) {
    return [0, 0, 0, 0];
  }
  let minDistance = Infinity;
  let closestElement = elements[0];
  const elementsMap = arrayToMap(elements);
  elements.forEach((element) => {
    const [x1, y1, x2, y2] = getElementBounds(element, elementsMap);
    const distance4 = pointDistance(
      pointFrom((x1 + x2) / 2, (y1 + y2) / 2),
      pointFrom(from3.x, from3.y)
    );
    if (distance4 < minDistance) {
      minDistance = distance4;
      closestElement = element;
    }
  });
  return getElementBounds(closestElement, elementsMap);
};
var getCommonBoundingBox = (elements) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
    midX: (minX + maxX) / 2,
    midY: (minY + maxY) / 2
  };
};
var getVisibleSceneBounds = ({
  scrollX,
  scrollY,
  width,
  height,
  zoom
}) => {
  return [
    -scrollX,
    -scrollY,
    -scrollX + width / zoom.value,
    -scrollY + height / zoom.value
  ];
};
var getCenterForBounds = (bounds) => pointFrom(
  bounds[0] + (bounds[2] - bounds[0]) / 2,
  bounds[1] + (bounds[3] - bounds[1]) / 2
);

// element/binding.ts
init_define_import_meta_env();

// ../math/ga/ga.ts
init_define_import_meta_env();
var point = (x, y) => [0, 0, 0, 0, y, x, 1, 0];
var offset = (x, y) => [
  0,
  0,
  0,
  0,
  y,
  x,
  0,
  0
];
var nvector = (value = 0, index = 0) => {
  const result = [0, 0, 0, 0, 0, 0, 0, 0];
  if (index < 0 || index > 7) {
    throw new Error(`Expected \`index\` between 0 and 7, got \`${index}\``);
  }
  if (value !== 0) {
    result[index] = value;
  }
  return result;
};
var reverse = (nvector2) => [
  nvector2[0],
  nvector2[1],
  nvector2[2],
  nvector2[3],
  -nvector2[4],
  -nvector2[5],
  -nvector2[6],
  -nvector2[7]
];
var add = (a2, b2) => {
  if (isNumber(b2)) {
    return [a2[0] + b2, a2[1], a2[2], a2[3], a2[4], a2[5], a2[6], a2[7]];
  }
  return [
    a2[0] + b2[0],
    a2[1] + b2[1],
    a2[2] + b2[2],
    a2[3] + b2[3],
    a2[4] + b2[4],
    a2[5] + b2[5],
    a2[6] + b2[6],
    a2[7] + b2[7]
  ];
};
var sub = (a2, b2) => {
  if (isNumber(b2)) {
    return [a2[0] - b2, a2[1], a2[2], a2[3], a2[4], a2[5], a2[6], a2[7]];
  }
  return [
    a2[0] - b2[0],
    a2[1] - b2[1],
    a2[2] - b2[2],
    a2[3] - b2[3],
    a2[4] - b2[4],
    a2[5] - b2[5],
    a2[6] - b2[6],
    a2[7] - b2[7]
  ];
};
var mul = (a2, b2) => {
  if (isNumber(b2)) {
    return [
      a2[0] * b2,
      a2[1] * b2,
      a2[2] * b2,
      a2[3] * b2,
      a2[4] * b2,
      a2[5] * b2,
      a2[6] * b2,
      a2[7] * b2
    ];
  }
  return [
    mulScalar(a2, b2),
    b2[1] * a2[0] + b2[0] * a2[1] - b2[4] * a2[2] + b2[5] * a2[3] + b2[2] * a2[4] - b2[3] * a2[5] - b2[7] * a2[6] - b2[6] * a2[7],
    b2[2] * a2[0] + b2[0] * a2[2] - b2[6] * a2[3] + b2[3] * a2[6],
    b2[3] * a2[0] + b2[6] * a2[2] + b2[0] * a2[3] - b2[2] * a2[6],
    b2[4] * a2[0] + b2[2] * a2[1] - b2[1] * a2[2] + b2[7] * a2[3] + b2[0] * a2[4] + b2[6] * a2[5] - b2[5] * a2[6] + b2[3] * a2[7],
    b2[5] * a2[0] - b2[3] * a2[1] + b2[7] * a2[2] + b2[1] * a2[3] - b2[6] * a2[4] + b2[0] * a2[5] + b2[4] * a2[6] + b2[2] * a2[7],
    b2[6] * a2[0] + b2[3] * a2[2] - b2[2] * a2[3] + b2[0] * a2[6],
    b2[7] * a2[0] + b2[6] * a2[1] + b2[5] * a2[2] + b2[4] * a2[3] + b2[3] * a2[4] + b2[2] * a2[5] + b2[1] * a2[6] + b2[0] * a2[7]
  ];
};
var mulScalar = (a2, b2) => b2[0] * a2[0] + b2[2] * a2[2] + b2[3] * a2[3] - b2[6] * a2[6];
var meet = (a2, b2) => [
  b2[0] * a2[0],
  b2[1] * a2[0] + b2[0] * a2[1],
  b2[2] * a2[0] + b2[0] * a2[2],
  b2[3] * a2[0] + b2[0] * a2[3],
  b2[4] * a2[0] + b2[2] * a2[1] - b2[1] * a2[2] + b2[0] * a2[4],
  b2[5] * a2[0] - b2[3] * a2[1] + b2[1] * a2[3] + b2[0] * a2[5],
  b2[6] * a2[0] + b2[3] * a2[2] - b2[2] * a2[3] + b2[0] * a2[6],
  b2[7] * a2[0] + b2[6] * a2[1] + b2[5] * a2[2] + b2[4] * a2[3] + b2[3] * a2[4] + b2[2] * a2[5] + b2[1] * a2[6]
];
var join = (a2, b2) => [
  joinScalar(a2, b2),
  a2[1] * b2[7] + a2[4] * b2[5] - a2[5] * b2[4] + a2[7] * b2[1],
  a2[2] * b2[7] - a2[4] * b2[6] + a2[6] * b2[4] + a2[7] * b2[2],
  a2[3] * b2[7] + a2[5] * b2[6] - a2[6] * b2[5] + a2[7] * b2[3],
  a2[4] * b2[7] + a2[7] * b2[4],
  a2[5] * b2[7] + a2[7] * b2[5],
  a2[6] * b2[7] + a2[7] * b2[6],
  a2[7] * b2[7]
];
var joinScalar = (a2, b2) => a2[0] * b2[7] + a2[1] * b2[6] + a2[2] * b2[5] + a2[3] * b2[4] + a2[4] * b2[3] + a2[5] * b2[2] + a2[6] * b2[1] + a2[7] * b2[0];
var dot = (a2, b2) => [
  b2[0] * a2[0] + b2[2] * a2[2] + b2[3] * a2[3] - b2[6] * a2[6],
  b2[1] * a2[0] + b2[0] * a2[1] - b2[4] * a2[2] + b2[5] * a2[3] + b2[2] * a2[4] - b2[3] * a2[5] - b2[7] * a2[6] - b2[6] * a2[7],
  b2[2] * a2[0] + b2[0] * a2[2] - b2[6] * a2[3] + b2[3] * a2[6],
  b2[3] * a2[0] + b2[6] * a2[2] + b2[0] * a2[3] - b2[2] * a2[6],
  b2[4] * a2[0] + b2[7] * a2[3] + b2[0] * a2[4] + b2[3] * a2[7],
  b2[5] * a2[0] + b2[7] * a2[2] + b2[0] * a2[5] + b2[2] * a2[7],
  b2[6] * a2[0] + b2[0] * a2[6],
  b2[7] * a2[0] + b2[0] * a2[7]
];
var norm = (a2) => Math.sqrt(Math.abs(a2[0] * a2[0] - a2[2] * a2[2] - a2[3] * a2[3] + a2[6] * a2[6]));
var inorm = (a2) => Math.sqrt(Math.abs(a2[7] * a2[7] - a2[5] * a2[5] - a2[4] * a2[4] + a2[1] * a2[1]));
var normalized = (a2) => {
  const n2 = norm(a2);
  if (n2 === 0 || n2 === 1) {
    return a2;
  }
  const sign2 = a2[6] < 0 ? -1 : 1;
  return mul(a2, sign2 / n2);
};
var inormalized = (a2) => {
  const n2 = inorm(a2);
  if (n2 === 0 || n2 === 1) {
    return a2;
  }
  return mul(a2, 1 / n2);
};
var isNumber = (a2) => typeof a2 === "number";
var E0 = nvector(1, 1);
var E1 = nvector(1, 2);
var E2 = nvector(1, 3);
var E01 = nvector(1, 4);
var E20 = nvector(1, 5);
var E12 = nvector(1, 6);
var E012 = nvector(1, 7);

// ../math/ga/gapoints.ts
init_define_import_meta_env();

// ../math/ga/galines.ts
init_define_import_meta_env();
var equation = (a2, b2, c) => normalized([0, c, a2, b2, 0, 0, 0, 0]);
var through = (from3, to) => normalized(join(to, from3));
var orthogonal = (line2, point2) => dot(line2, point2);
var orthogonalThrough = (against, intersection) => orthogonal(through(against, intersection), intersection);
var sign = (line2) => Math.sign(line2[1]);

// ../math/ga/gapoints.ts
var from = ([x, y]) => [
  0,
  0,
  0,
  0,
  y,
  x,
  1,
  0
];
var toTuple = (point2) => [point2[5], point2[4]];
var abs = (point2) => [
  0,
  0,
  0,
  0,
  Math.abs(point2[4]),
  Math.abs(point2[5]),
  1,
  0
];
var intersect = (line1, line2) => normalized(meet(line1, line2));
var distance3 = (point1, point2) => norm(join(point1, point2));
var distanceToLine = (point2, line2) => joinScalar(point2, line2);

// ../math/ga/gadirections.ts
init_define_import_meta_env();
var from2 = (point2) => [
  0,
  0,
  0,
  0,
  point2[4],
  point2[5],
  0,
  0
];
var fromTo = (from3, to) => inormalized([0, 0, 0, 0, to[4] - from3[4], to[5] - from3[5], 0, 0]);

// ../math/ga/gatransforms.ts
init_define_import_meta_env();
var rotation = (pivot, angle) => add(mul(pivot, Math.sin(angle / 2)), Math.cos(angle / 2));
var translation = (direction) => [
  1,
  0,
  0,
  0,
  -(0.5 * direction[5]),
  0.5 * direction[4],
  0,
  0
];
var translationOrthogonal = (direction, distance4) => {
  const scale = 0.5 * distance4;
  return [1, 0, 0, 0, scale * direction[4], scale * direction[5], 0, 0];
};
var compose = (motor1, motor2) => mul(motor2, motor1);
var apply = (motor, nvector2) => normalized(mul(mul(motor, nvector2), reverse(motor)));

// scene/index.ts
init_define_import_meta_env();

// scene/scroll.ts
init_define_import_meta_env();
var isOutsideViewPort = (appState, cords) => {
  const [x1, y1, x2, y2] = cords;
  const { x: viewportX1, y: viewportY1 } = sceneCoordsToViewportCoords(
    { sceneX: x1, sceneY: y1 },
    appState
  );
  const { x: viewportX2, y: viewportY2 } = sceneCoordsToViewportCoords(
    { sceneX: x2, sceneY: y2 },
    appState
  );
  return viewportX2 - viewportX1 > appState.width || viewportY2 - viewportY1 > appState.height;
};
var centerScrollOn = ({
  scenePoint,
  viewportDimensions,
  zoom,
  offsets
}) => {
  let scrollX = (viewportDimensions.width - (offsets?.right ?? 0)) / 2 / zoom.value - scenePoint.x;
  scrollX += (offsets?.left ?? 0) / 2 / zoom.value;
  let scrollY = (viewportDimensions.height - (offsets?.bottom ?? 0)) / 2 / zoom.value - scenePoint.y;
  scrollY += (offsets?.top ?? 0) / 2 / zoom.value;
  return {
    scrollX,
    scrollY
  };
};
var calculateScrollCenter = (elements, appState) => {
  elements = getVisibleElements(elements);
  if (!elements.length) {
    return {
      scrollX: 0,
      scrollY: 0
    };
  }
  let [x1, y1, x2, y2] = getCommonBounds(elements);
  if (isOutsideViewPort(appState, [x1, y1, x2, y2])) {
    [x1, y1, x2, y2] = getClosestElementBounds(
      elements,
      viewportCoordsToSceneCoords(
        { clientX: appState.scrollX, clientY: appState.scrollY },
        appState
      )
    );
  }
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;
  return centerScrollOn({
    scenePoint: { x: centerX, y: centerY },
    viewportDimensions: { width: appState.width, height: appState.height },
    zoom: appState.zoom
  });
};

// scene/normalize.ts
init_define_import_meta_env();
var getNormalizedZoom = (zoom) => {
  return clamp(round(zoom, 6), MIN_ZOOM, MAX_ZOOM);
};
var getNormalizedGridSize = (gridStep) => {
  return clamp(Math.round(gridStep), 1, 100);
};
var getNormalizedGridStep = (gridStep) => {
  return clamp(Math.round(gridStep), 1, 100);
};

// element/heading.ts
init_define_import_meta_env();
var HEADING_RIGHT = [1, 0];
var HEADING_DOWN = [0, 1];
var HEADING_LEFT = [-1, 0];
var HEADING_UP = [0, -1];
var headingForDiamond = (a2, b2) => {
  const angle = radiansToDegrees(
    Math.atan2(b2[1] - a2[1], b2[0] - a2[0])
  );
  if (angle >= 315 || angle < 45) {
    return HEADING_UP;
  } else if (angle >= 45 && angle < 135) {
    return HEADING_RIGHT;
  } else if (angle >= 135 && angle < 225) {
    return HEADING_DOWN;
  }
  return HEADING_LEFT;
};
var vectorToHeading = (vec) => {
  const [x, y] = vec;
  const absX = Math.abs(x);
  const absY = Math.abs(y);
  if (x > absY) {
    return HEADING_RIGHT;
  } else if (x <= -absY) {
    return HEADING_LEFT;
  } else if (y > absX) {
    return HEADING_DOWN;
  }
  return HEADING_UP;
};
var compareHeading = (a2, b2) => a2[0] === b2[0] && a2[1] === b2[1];
var headingForPointFromElement = (element, aabb, p) => {
  const SEARCH_CONE_MULTIPLIER = 2;
  const midPoint = getCenterForBounds(aabb);
  if (element.type === "diamond") {
    if (p[0] < element.x) {
      return HEADING_LEFT;
    } else if (p[1] < element.y) {
      return HEADING_UP;
    } else if (p[0] > element.x + element.width) {
      return HEADING_RIGHT;
    } else if (p[1] > element.y + element.height) {
      return HEADING_DOWN;
    }
    const top2 = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x + element.width / 2, element.y),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    const right = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x + element.width, element.y + element.height / 2),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    const bottom = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x + element.width / 2, element.y + element.height),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    const left = pointRotateRads(
      pointScaleFromOrigin(
        pointFrom(element.x, element.y + element.height / 2),
        midPoint,
        SEARCH_CONE_MULTIPLIER
      ),
      midPoint,
      element.angle
    );
    if (triangleIncludesPoint([top2, right, midPoint], p)) {
      return headingForDiamond(top2, right);
    } else if (triangleIncludesPoint([right, bottom, midPoint], p)) {
      return headingForDiamond(right, bottom);
    } else if (triangleIncludesPoint([bottom, left, midPoint], p)) {
      return headingForDiamond(bottom, left);
    }
    return headingForDiamond(left, top2);
  }
  const topLeft = pointScaleFromOrigin(
    pointFrom(aabb[0], aabb[1]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  const topRight = pointScaleFromOrigin(
    pointFrom(aabb[2], aabb[1]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  const bottomLeft = pointScaleFromOrigin(
    pointFrom(aabb[0], aabb[3]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  const bottomRight = pointScaleFromOrigin(
    pointFrom(aabb[2], aabb[3]),
    midPoint,
    SEARCH_CONE_MULTIPLIER
  );
  return triangleIncludesPoint(
    [topLeft, topRight, midPoint],
    p
  ) ? HEADING_UP : triangleIncludesPoint(
    [topRight, bottomRight, midPoint],
    p
  ) ? HEADING_RIGHT : triangleIncludesPoint(
    [bottomRight, bottomLeft, midPoint],
    p
  ) ? HEADING_DOWN : HEADING_LEFT;
};
var flipHeading = (h) => [
  h[0] === 0 ? 0 : h[0] > 0 ? -1 : 1,
  h[1] === 0 ? 0 : h[1] > 0 ? -1 : 1
];

// element/binding.ts
var shouldEnableBindingForPointerEvent = (event) => {
  return !event[KEYS.CTRL_OR_CMD];
};
var isBindingEnabled = (appState) => {
  return appState.isBindingEnabled;
};
var FIXED_BINDING_DISTANCE = 5;
var getNonDeletedElements = (scene, ids) => {
  const result = [];
  ids.forEach((id) => {
    const element = scene.getNonDeletedElement(id);
    if (element != null) {
      result.push(element);
    }
  });
  return result;
};
var bindOrUnbindLinearElement = (linearElement, startBindingElement, endBindingElement, elementsMap, scene) => {
  const boundToElementIds = /* @__PURE__ */ new Set();
  const unboundFromElementIds = /* @__PURE__ */ new Set();
  bindOrUnbindLinearElementEdge(
    linearElement,
    startBindingElement,
    endBindingElement,
    "start",
    boundToElementIds,
    unboundFromElementIds,
    elementsMap
  );
  bindOrUnbindLinearElementEdge(
    linearElement,
    endBindingElement,
    startBindingElement,
    "end",
    boundToElementIds,
    unboundFromElementIds,
    elementsMap
  );
  const onlyUnbound = Array.from(unboundFromElementIds).filter(
    (id) => !boundToElementIds.has(id)
  );
  getNonDeletedElements(scene, onlyUnbound).forEach((element) => {
    mutateElement(element, {
      boundElements: element.boundElements?.filter(
        (element2) => element2.type !== "arrow" || element2.id !== linearElement.id
      )
    });
  });
};
var bindOrUnbindLinearElementEdge = (linearElement, bindableElement, otherEdgeBindableElement, startOrEnd, boundToElementIds, unboundFromElementIds, elementsMap) => {
  if (bindableElement === "keep") {
    return;
  }
  if (bindableElement === null) {
    const unbound = unbindLinearElement(linearElement, startOrEnd);
    if (unbound != null) {
      unboundFromElementIds.add(unbound);
    }
    return;
  }
  if (isLinearElementSimple(linearElement)) {
    if (otherEdgeBindableElement == null || (otherEdgeBindableElement === "keep" ? (
      // TODO: Refactor - Needlessly complex
      !isLinearElementSimpleAndAlreadyBoundOnOppositeEdge(
        linearElement,
        bindableElement,
        startOrEnd
      )
    ) : startOrEnd === "start" || otherEdgeBindableElement.id !== bindableElement.id)) {
      bindLinearElement(
        linearElement,
        bindableElement,
        startOrEnd,
        elementsMap
      );
      boundToElementIds.add(bindableElement.id);
    }
  } else {
    bindLinearElement(linearElement, bindableElement, startOrEnd, elementsMap);
    boundToElementIds.add(bindableElement.id);
  }
};
var getOriginalBindingIfStillCloseOfLinearElementEdge = (linearElement, edge, elementsMap) => {
  const coors = getLinearElementEdgeCoors(linearElement, edge, elementsMap);
  const elementId = edge === "start" ? linearElement.startBinding?.elementId : linearElement.endBinding?.elementId;
  if (elementId) {
    const element = elementsMap.get(elementId);
    if (isBindableElement(element) && bindingBorderTest(element, coors, elementsMap)) {
      return element;
    }
  }
  return null;
};
var getOriginalBindingsIfStillCloseToArrowEnds = (linearElement, elementsMap) => ["start", "end"].map(
  (edge) => getOriginalBindingIfStillCloseOfLinearElementEdge(
    linearElement,
    edge,
    elementsMap
  )
);
var getBindingStrategyForDraggingArrowEndpoints = (selectedElement, isBindingEnabled2, draggingPoints, elementsMap, elements) => {
  const startIdx = 0;
  const endIdx = selectedElement.points.length - 1;
  const startDragged = draggingPoints.findIndex((i2) => i2 === startIdx) > -1;
  const endDragged = draggingPoints.findIndex((i2) => i2 === endIdx) > -1;
  const start2 = startDragged ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "start",
    elementsMap,
    elements
  ) : null : (
    // We have to update the focus and gap of the binding, so let's rebind
    getElligibleElementForBindingElement(
      selectedElement,
      "start",
      elementsMap,
      elements
    )
  );
  const end = endDragged ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "end",
    elementsMap,
    elements
  ) : null : (
    // We have to update the focus and gap of the binding, so let's rebind
    getElligibleElementForBindingElement(
      selectedElement,
      "end",
      elementsMap,
      elements
    )
  );
  return [start2, end];
};
var getBindingStrategyForDraggingArrowOrJoints = (selectedElement, elementsMap, elements, isBindingEnabled2) => {
  const [startIsClose, endIsClose] = getOriginalBindingsIfStillCloseToArrowEnds(
    selectedElement,
    elementsMap
  );
  const start2 = startIsClose ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "start",
    elementsMap,
    elements
  ) : null : null;
  const end = endIsClose ? isBindingEnabled2 ? getElligibleElementForBindingElement(
    selectedElement,
    "end",
    elementsMap,
    elements
  ) : null : null;
  return [start2, end];
};
var bindOrUnbindLinearElements = (selectedElements, elementsMap, elements, scene, isBindingEnabled2, draggingPoints) => {
  selectedElements.forEach((selectedElement) => {
    const [start2, end] = draggingPoints?.length ? (
      // The arrow edge points are dragged (i.e. start, end)
      getBindingStrategyForDraggingArrowEndpoints(
        selectedElement,
        isBindingEnabled2,
        draggingPoints ?? [],
        elementsMap,
        elements
      )
    ) : (
      // The arrow itself (the shaft) or the inner joins are dragged
      getBindingStrategyForDraggingArrowOrJoints(
        selectedElement,
        elementsMap,
        elements,
        isBindingEnabled2
      )
    );
    bindOrUnbindLinearElement(selectedElement, start2, end, elementsMap, scene);
  });
};
var getSuggestedBindingsForArrows = (selectedElements, elementsMap) => {
  if (selectedElements.length > 50) {
    return [];
  }
  return selectedElements.filter(isLinearElement).flatMap(
    (element) => getOriginalBindingsIfStillCloseToArrowEnds(element, elementsMap)
  ).filter(
    (element) => element !== null
  ).filter(
    (element) => selectedElements.filter((selected) => selected.id === element?.id).length === 0
  );
};
var maybeBindLinearElement = (linearElement, appState, pointerCoords, elementsMap, elements) => {
  if (appState.startBoundElement != null) {
    bindLinearElement(
      linearElement,
      appState.startBoundElement,
      "start",
      elementsMap
    );
  }
  const hoveredElement = getHoveredElementForBinding(
    pointerCoords,
    elements,
    elementsMap,
    isElbowArrow(linearElement) && isElbowArrow(linearElement)
  );
  if (hoveredElement !== null) {
    if (!isLinearElementSimpleAndAlreadyBoundOnOppositeEdge(
      linearElement,
      hoveredElement,
      "end"
    )) {
      bindLinearElement(linearElement, hoveredElement, "end", elementsMap);
    }
  }
};
var bindLinearElement = (linearElement, hoveredElement, startOrEnd, elementsMap) => {
  if (!isArrowElement(linearElement)) {
    return;
  }
  const binding = {
    elementId: hoveredElement.id,
    ...calculateFocusAndGap(
      linearElement,
      hoveredElement,
      startOrEnd,
      elementsMap
    ),
    ...isElbowArrow(linearElement) ? calculateFixedPointForElbowArrowBinding(
      linearElement,
      hoveredElement,
      startOrEnd,
      elementsMap
    ) : { fixedPoint: null }
  };
  mutateElement(linearElement, {
    [startOrEnd === "start" ? "startBinding" : "endBinding"]: binding
  });
  const boundElementsMap = arrayToMap(hoveredElement.boundElements || []);
  if (!boundElementsMap.has(linearElement.id)) {
    mutateElement(hoveredElement, {
      boundElements: (hoveredElement.boundElements || []).concat({
        id: linearElement.id,
        type: "arrow"
      })
    });
  }
};
var isLinearElementSimpleAndAlreadyBoundOnOppositeEdge = (linearElement, bindableElement, startOrEnd) => {
  const otherBinding = linearElement[startOrEnd === "start" ? "endBinding" : "startBinding"];
  return isLinearElementSimpleAndAlreadyBound(
    linearElement,
    otherBinding?.elementId,
    bindableElement
  );
};
var isLinearElementSimpleAndAlreadyBound = (linearElement, alreadyBoundToId, bindableElement) => {
  return alreadyBoundToId === bindableElement.id && isLinearElementSimple(linearElement);
};
var isLinearElementSimple = (linearElement) => linearElement.points.length < 3;
var unbindLinearElement = (linearElement, startOrEnd) => {
  const field = startOrEnd === "start" ? "startBinding" : "endBinding";
  const binding = linearElement[field];
  if (binding == null) {
    return null;
  }
  mutateElement(linearElement, { [field]: null });
  return binding.elementId;
};
var getHoveredElementForBinding = (pointerCoords, elements, elementsMap, fullShape) => {
  const hoveredElement = getElementAtPosition(
    elements,
    (element) => isBindableElement(element, false) && bindingBorderTest(
      element,
      pointerCoords,
      elementsMap,
      // disable fullshape snapping for frame elements so we
      // can bind to frame children
      fullShape && !isFrameLikeElement(element)
    )
  );
  return hoveredElement;
};
var calculateFocusAndGap = (linearElement, hoveredElement, startOrEnd, elementsMap) => {
  const direction = startOrEnd === "start" ? -1 : 1;
  const edgePointIndex = direction === -1 ? 0 : linearElement.points.length - 1;
  const adjacentPointIndex = edgePointIndex - direction;
  const edgePoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    edgePointIndex,
    elementsMap
  );
  const adjacentPoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    adjacentPointIndex,
    elementsMap
  );
  return {
    focus: determineFocusDistance(
      hoveredElement,
      adjacentPoint,
      edgePoint,
      elementsMap
    ),
    gap: Math.max(
      1,
      distanceToBindableElement(hoveredElement, edgePoint, elementsMap)
    )
  };
};
var updateBoundElements = (changedElement, elementsMap, options) => {
  const { oldSize, simultaneouslyUpdated, changedElements } = options ?? {};
  const simultaneouslyUpdatedElementIds = getSimultaneouslyUpdatedElementIds(
    simultaneouslyUpdated
  );
  if (!isBindableElement(changedElement)) {
    return;
  }
  boundElementsVisitor(elementsMap, changedElement, (element) => {
    if (!isLinearElement(element) || element.isDeleted) {
      return;
    }
    if (!doesNeedUpdate(element, changedElement)) {
      return;
    }
    const bindings = {
      startBinding: maybeCalculateNewGapWhenScaling(
        changedElement,
        element.startBinding,
        oldSize
      ),
      endBinding: maybeCalculateNewGapWhenScaling(
        changedElement,
        element.endBinding,
        oldSize
      )
    };
    if (simultaneouslyUpdatedElementIds.has(element.id)) {
      mutateElement(element, bindings);
      return;
    }
    const updates = bindableElementsVisitor(
      elementsMap,
      element,
      (bindableElement, bindingProp) => {
        if (bindableElement && isBindableElement(bindableElement) && (bindingProp === "startBinding" || bindingProp === "endBinding") && changedElement.id === element[bindingProp]?.elementId) {
          const point2 = updateBoundPoint(
            element,
            bindingProp,
            bindings[bindingProp],
            bindableElement,
            elementsMap
          );
          if (point2) {
            return {
              index: bindingProp === "startBinding" ? 0 : element.points.length - 1,
              point: point2
            };
          }
        }
        return null;
      }
    ).filter(
      (update) => update !== null
    );
    LinearElementEditor.movePoints(
      element,
      updates,
      elementsMap,
      {
        ...changedElement.id === element.startBinding?.elementId ? { startBinding: bindings.startBinding } : {},
        ...changedElement.id === element.endBinding?.elementId ? { endBinding: bindings.endBinding } : {}
      },
      {
        changedElements
      }
    );
    const boundText = getBoundTextElement(element, elementsMap);
    if (boundText && !boundText.isDeleted) {
      handleBindTextResize(element, elementsMap, false);
    }
  });
};
var doesNeedUpdate = (boundElement, changedElement) => {
  return boundElement.startBinding?.elementId === changedElement.id || boundElement.endBinding?.elementId === changedElement.id;
};
var getSimultaneouslyUpdatedElementIds = (simultaneouslyUpdated) => {
  return new Set((simultaneouslyUpdated || []).map((element) => element.id));
};
var getHeadingForElbowArrowSnap = (p, otherPoint, bindableElement, aabb, elementsMap, origPoint) => {
  const otherPointHeading = vectorToHeading(vectorFromPoint(otherPoint, p));
  if (!bindableElement || !aabb) {
    return otherPointHeading;
  }
  const distance4 = getDistanceForBinding(
    origPoint,
    bindableElement,
    elementsMap
  );
  if (!distance4) {
    return vectorToHeading(
      vectorFromPoint(
        p,
        pointFrom(
          bindableElement.x + bindableElement.width / 2,
          bindableElement.y + bindableElement.height / 2
        )
      )
    );
  }
  const pointHeading = headingForPointFromElement(bindableElement, aabb, p);
  return pointHeading;
};
var getDistanceForBinding = (point2, bindableElement, elementsMap) => {
  const distance4 = distanceToBindableElement(
    bindableElement,
    point2,
    elementsMap
  );
  const bindDistance = maxBindingGap(
    bindableElement,
    bindableElement.width,
    bindableElement.height
  );
  return distance4 > bindDistance ? null : distance4;
};
var bindPointToSnapToElementOutline = (p, otherPoint, bindableElement, elementsMap) => {
  const aabb = bindableElement && aabbForElement(bindableElement);
  if (bindableElement && aabb) {
    const heading = headingForPointFromElement(bindableElement, aabb, p);
    const intersections = [
      ...intersectElementWithLine(
        bindableElement,
        pointFrom(p[0], p[1] - 2 * bindableElement.height),
        pointFrom(p[0], p[1] + 2 * bindableElement.height),
        FIXED_BINDING_DISTANCE,
        elementsMap
      ) ?? [],
      ...intersectElementWithLine(
        bindableElement,
        pointFrom(p[0] - 2 * bindableElement.width, p[1]),
        pointFrom(p[0] + 2 * bindableElement.width, p[1]),
        FIXED_BINDING_DISTANCE,
        elementsMap
      ) ?? []
    ];
    const isVertical = compareHeading(heading, HEADING_LEFT) || compareHeading(heading, HEADING_RIGHT);
    const dist = Math.abs(
      distanceToBindableElement(bindableElement, p, elementsMap)
    );
    const isInner = isVertical ? dist < bindableElement.width * -0.1 : dist < bindableElement.height * -0.1;
    intersections.sort((a2, b2) => pointDistanceSq(a2, p) - pointDistanceSq(b2, p));
    return isInner ? headingToMidBindPoint(otherPoint, bindableElement, aabb) : intersections.filter(
      (i2) => isVertical ? Math.abs(p[1] - i2[1]) < 0.1 : Math.abs(p[0] - i2[0]) < 0.1
    )[0] ?? p;
  }
  return p;
};
var headingToMidBindPoint = (p, bindableElement, aabb) => {
  const center = getCenterForBounds(aabb);
  const heading = vectorToHeading(vectorFromPoint(p, center));
  switch (true) {
    case compareHeading(heading, HEADING_UP):
      return pointRotateRads(
        pointFrom((aabb[0] + aabb[2]) / 2 + 0.1, aabb[1]),
        center,
        bindableElement.angle
      );
    case compareHeading(heading, HEADING_RIGHT):
      return pointRotateRads(
        pointFrom(aabb[2], (aabb[1] + aabb[3]) / 2 + 0.1),
        center,
        bindableElement.angle
      );
    case compareHeading(heading, HEADING_DOWN):
      return pointRotateRads(
        pointFrom((aabb[0] + aabb[2]) / 2 - 0.1, aabb[3]),
        center,
        bindableElement.angle
      );
    default:
      return pointRotateRads(
        pointFrom(aabb[0], (aabb[1] + aabb[3]) / 2 - 0.1),
        center,
        bindableElement.angle
      );
  }
};
var avoidRectangularCorner = (element, p) => {
  const center = pointFrom(
    element.x + element.width / 2,
    element.y + element.height / 2
  );
  const nonRotatedPoint = pointRotateRads(p, center, -element.angle);
  if (nonRotatedPoint[0] < element.x && nonRotatedPoint[1] < element.y) {
    if (nonRotatedPoint[1] - element.y > -FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(element.x - FIXED_BINDING_DISTANCE, element.y),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(element.x, element.y - FIXED_BINDING_DISTANCE),
      center,
      element.angle
    );
  } else if (nonRotatedPoint[0] < element.x && nonRotatedPoint[1] > element.y + element.height) {
    if (nonRotatedPoint[0] - element.x > -FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(
          element.x,
          element.y + element.height + FIXED_BINDING_DISTANCE
        ),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(element.x - FIXED_BINDING_DISTANCE, element.y + element.height),
      center,
      element.angle
    );
  } else if (nonRotatedPoint[0] > element.x + element.width && nonRotatedPoint[1] > element.y + element.height) {
    if (nonRotatedPoint[0] - element.x < element.width + FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(
          element.x + element.width,
          element.y + element.height + FIXED_BINDING_DISTANCE
        ),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(
        element.x + element.width + FIXED_BINDING_DISTANCE,
        element.y + element.height
      ),
      center,
      element.angle
    );
  } else if (nonRotatedPoint[0] > element.x + element.width && nonRotatedPoint[1] < element.y) {
    if (nonRotatedPoint[0] - element.x < element.width + FIXED_BINDING_DISTANCE) {
      return pointRotateRads(
        pointFrom(
          element.x + element.width,
          element.y - FIXED_BINDING_DISTANCE
        ),
        center,
        element.angle
      );
    }
    return pointRotateRads(
      pointFrom(element.x + element.width + FIXED_BINDING_DISTANCE, element.y),
      center,
      element.angle
    );
  }
  return p;
};
var snapToMid = (element, p, tolerance = 0.05) => {
  const { x, y, width, height, angle } = element;
  const center = pointFrom(
    x + width / 2 - 0.1,
    y + height / 2 - 0.1
  );
  const nonRotated = pointRotateRads(p, center, -angle);
  const verticalThrehsold = clamp(tolerance * height, 5, 80);
  const horizontalThrehsold = clamp(tolerance * width, 5, 80);
  if (nonRotated[0] <= x + width / 2 && nonRotated[1] > center[1] - verticalThrehsold && nonRotated[1] < center[1] + verticalThrehsold) {
    return pointRotateRads(
      pointFrom(x - FIXED_BINDING_DISTANCE, center[1]),
      center,
      angle
    );
  } else if (nonRotated[1] <= y + height / 2 && nonRotated[0] > center[0] - horizontalThrehsold && nonRotated[0] < center[0] + horizontalThrehsold) {
    return pointRotateRads(
      pointFrom(center[0], y - FIXED_BINDING_DISTANCE),
      center,
      angle
    );
  } else if (nonRotated[0] >= x + width / 2 && nonRotated[1] > center[1] - verticalThrehsold && nonRotated[1] < center[1] + verticalThrehsold) {
    return pointRotateRads(
      pointFrom(x + width + FIXED_BINDING_DISTANCE, center[1]),
      center,
      angle
    );
  } else if (nonRotated[1] >= y + height / 2 && nonRotated[0] > center[0] - horizontalThrehsold && nonRotated[0] < center[0] + horizontalThrehsold) {
    return pointRotateRads(
      pointFrom(center[0], y + height + FIXED_BINDING_DISTANCE),
      center,
      angle
    );
  }
  return p;
};
var updateBoundPoint = (linearElement, startOrEnd, binding, bindableElement, elementsMap) => {
  if (binding == null || // We only need to update the other end if this is a 2 point line element
  binding.elementId !== bindableElement.id && linearElement.points.length > 2) {
    return null;
  }
  const direction = startOrEnd === "startBinding" ? -1 : 1;
  const edgePointIndex = direction === -1 ? 0 : linearElement.points.length - 1;
  if (isElbowArrow(linearElement) && isFixedPointBinding(binding)) {
    const fixedPoint = normalizeFixedPoint(binding.fixedPoint) ?? calculateFixedPointForElbowArrowBinding(
      linearElement,
      bindableElement,
      startOrEnd === "startBinding" ? "start" : "end",
      elementsMap
    ).fixedPoint;
    const globalMidPoint = pointFrom(
      bindableElement.x + bindableElement.width / 2,
      bindableElement.y + bindableElement.height / 2
    );
    const global2 = pointFrom(
      bindableElement.x + fixedPoint[0] * bindableElement.width,
      bindableElement.y + fixedPoint[1] * bindableElement.height
    );
    const rotatedGlobal = pointRotateRads(
      global2,
      globalMidPoint,
      bindableElement.angle
    );
    return LinearElementEditor.pointFromAbsoluteCoords(
      linearElement,
      rotatedGlobal,
      elementsMap
    );
  }
  const adjacentPointIndex = edgePointIndex - direction;
  const adjacentPoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    adjacentPointIndex,
    elementsMap
  );
  const focusPointAbsolute = determineFocusPoint(
    bindableElement,
    binding.focus,
    adjacentPoint,
    elementsMap
  );
  let newEdgePoint;
  if (binding.gap === 0) {
    newEdgePoint = focusPointAbsolute;
  } else {
    const intersections = intersectElementWithLine(
      bindableElement,
      adjacentPoint,
      focusPointAbsolute,
      binding.gap,
      elementsMap
    );
    if (!intersections || intersections.length === 0) {
      newEdgePoint = focusPointAbsolute;
    } else {
      newEdgePoint = intersections[0];
    }
  }
  return LinearElementEditor.pointFromAbsoluteCoords(
    linearElement,
    newEdgePoint,
    elementsMap
  );
};
var calculateFixedPointForElbowArrowBinding = (linearElement, hoveredElement, startOrEnd, elementsMap) => {
  const bounds = [
    hoveredElement.x,
    hoveredElement.y,
    hoveredElement.x + hoveredElement.width,
    hoveredElement.y + hoveredElement.height
  ];
  const edgePointIndex = startOrEnd === "start" ? 0 : linearElement.points.length - 1;
  const globalPoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    edgePointIndex,
    elementsMap
  );
  const otherGlobalPoint = LinearElementEditor.getPointAtIndexGlobalCoordinates(
    linearElement,
    edgePointIndex,
    elementsMap
  );
  const snappedPoint = bindPointToSnapToElementOutline(
    globalPoint,
    otherGlobalPoint,
    hoveredElement,
    elementsMap
  );
  const globalMidPoint = pointFrom(
    bounds[0] + (bounds[2] - bounds[0]) / 2,
    bounds[1] + (bounds[3] - bounds[1]) / 2
  );
  const nonRotatedSnappedGlobalPoint = pointRotateRads(
    snappedPoint,
    globalMidPoint,
    -hoveredElement.angle
  );
  return {
    fixedPoint: normalizeFixedPoint([
      (nonRotatedSnappedGlobalPoint[0] - hoveredElement.x) / hoveredElement.width,
      (nonRotatedSnappedGlobalPoint[1] - hoveredElement.y) / hoveredElement.height
    ])
  };
};
var maybeCalculateNewGapWhenScaling = (changedElement, currentBinding, newSize) => {
  if (currentBinding == null || newSize == null) {
    return currentBinding;
  }
  const { width: newWidth, height: newHeight } = newSize;
  const { width, height } = changedElement;
  const newGap = Math.max(
    1,
    Math.min(
      maxBindingGap(changedElement, newWidth, newHeight),
      currentBinding.gap * (newWidth < newHeight ? newWidth / width : newHeight / height)
    )
  );
  return { ...currentBinding, gap: newGap };
};
var getElligibleElementForBindingElement = (linearElement, startOrEnd, elementsMap, elements) => {
  return getHoveredElementForBinding(
    getLinearElementEdgeCoors(linearElement, startOrEnd, elementsMap),
    elements,
    elementsMap
  );
};
var getLinearElementEdgeCoors = (linearElement, startOrEnd, elementsMap) => {
  const index = startOrEnd === "start" ? 0 : -1;
  return tupleToCoors(
    LinearElementEditor.getPointAtIndexGlobalCoordinates(
      linearElement,
      index,
      elementsMap
    )
  );
};
var fixBindingsAfterDuplication = (sceneElements, oldElements, oldIdToDuplicatedId, duplicatesServeAsOld) => {
  const allBoundElementIds = /* @__PURE__ */ new Set();
  const allBindableElementIds = /* @__PURE__ */ new Set();
  const shouldReverseRoles = duplicatesServeAsOld === "duplicatesServeAsOld";
  const duplicateIdToOldId = new Map(
    [...oldIdToDuplicatedId].map(([key, value]) => [value, key])
  );
  oldElements.forEach((oldElement) => {
    const { boundElements } = oldElement;
    if (boundElements != null && boundElements.length > 0) {
      boundElements.forEach((boundElement) => {
        if (shouldReverseRoles && !oldIdToDuplicatedId.has(boundElement.id)) {
          allBoundElementIds.add(boundElement.id);
        }
      });
      allBindableElementIds.add(oldIdToDuplicatedId.get(oldElement.id));
    }
    if (isBindingElement(oldElement)) {
      if (oldElement.startBinding != null) {
        const { elementId } = oldElement.startBinding;
        if (shouldReverseRoles && !oldIdToDuplicatedId.has(elementId)) {
          allBindableElementIds.add(elementId);
        }
      }
      if (oldElement.endBinding != null) {
        const { elementId } = oldElement.endBinding;
        if (shouldReverseRoles && !oldIdToDuplicatedId.has(elementId)) {
          allBindableElementIds.add(elementId);
        }
      }
      if (oldElement.startBinding != null || oldElement.endBinding != null) {
        allBoundElementIds.add(oldIdToDuplicatedId.get(oldElement.id));
      }
    }
  });
  sceneElements.filter(
    ({ id }) => allBoundElementIds.has(id)
  ).forEach((element) => {
    const { startBinding, endBinding } = element;
    mutateElement(element, {
      startBinding: newBindingAfterDuplication(
        startBinding,
        oldIdToDuplicatedId
      ),
      endBinding: newBindingAfterDuplication(endBinding, oldIdToDuplicatedId)
    });
  });
  sceneElements.filter(({ id }) => allBindableElementIds.has(id)).forEach((bindableElement) => {
    const oldElementId = duplicateIdToOldId.get(bindableElement.id);
    const boundElements = sceneElements.find(
      ({ id }) => id === oldElementId
    )?.boundElements;
    if (boundElements && boundElements.length > 0) {
      mutateElement(bindableElement, {
        boundElements: boundElements.map(
          (boundElement) => oldIdToDuplicatedId.has(boundElement.id) ? {
            id: oldIdToDuplicatedId.get(boundElement.id),
            type: boundElement.type
          } : boundElement
        )
      });
    }
  });
};
var newBindingAfterDuplication = (binding, oldIdToDuplicatedId) => {
  if (binding == null) {
    return null;
  }
  return {
    ...binding,
    elementId: oldIdToDuplicatedId.get(binding.elementId) ?? binding.elementId
  };
};
var fixBindingsAfterDeletion = (sceneElements, deletedElements) => {
  const elements = arrayToMap(sceneElements);
  for (const element of deletedElements) {
    BoundElement.unbindAffected(elements, element, mutateElement);
    BindableElement.unbindAffected(elements, element, mutateElement);
  }
};
var newBoundElements = (boundElements, idsToRemove, elementsToAdd = []) => {
  if (!boundElements) {
    return null;
  }
  const nextBoundElements = boundElements.filter(
    (boundElement) => !idsToRemove.has(boundElement.id)
  );
  nextBoundElements.push(
    ...elementsToAdd.map(
      (x) => ({ id: x.id, type: x.type })
    )
  );
  return nextBoundElements;
};
var bindingBorderTest = (element, { x, y }, elementsMap, fullShape) => {
  const threshold = maxBindingGap(element, element.width, element.height);
  const shape = getElementShape(element, elementsMap);
  return isPointOnShape(pointFrom(x, y), shape, threshold) || fullShape === true && pointInsideBounds(pointFrom(x, y), aabbForElement(element));
};
var maxBindingGap = (element, elementWidth, elementHeight) => {
  const shapeRatio = element.type === "diamond" ? 1 / Math.sqrt(2) : 1;
  const smallerDimension = shapeRatio * Math.min(elementWidth, elementHeight);
  return Math.max(16, Math.min(0.25 * smallerDimension, 32));
};
var distanceToBindableElement = (element, point2, elementsMap) => {
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      return distanceToRectangle(element, point2, elementsMap);
    case "diamond":
      return distanceToDiamond(element, point2, elementsMap);
    case "ellipse":
      return distanceToEllipse2(element, point2, elementsMap);
  }
};
var distanceToRectangle = (element, p, elementsMap) => {
  const [, pointRel, hwidth, hheight] = pointRelativeToElement(
    element,
    p,
    elementsMap
  );
  return Math.max(
    distanceToLine(pointRel, equation(0, 1, -hheight)),
    distanceToLine(pointRel, equation(1, 0, -hwidth))
  );
};
var distanceToDiamond = (element, point2, elementsMap) => {
  const [, pointRel, hwidth, hheight] = pointRelativeToElement(
    element,
    point2,
    elementsMap
  );
  const side = equation(hheight, hwidth, -hheight * hwidth);
  return distanceToLine(pointRel, side);
};
var distanceToEllipse2 = (element, point2, elementsMap) => {
  const [pointRel, tangent] = ellipseParamsForTest(element, point2, elementsMap);
  return -sign(tangent) * distanceToLine(pointRel, tangent);
};
var ellipseParamsForTest = (element, point2, elementsMap) => {
  const [, pointRel, hwidth, hheight] = pointRelativeToElement(
    element,
    point2,
    elementsMap
  );
  const [px, py] = toTuple(pointRel);
  let tx = 0.707;
  let ty = 0.707;
  const a2 = hwidth;
  const b2 = hheight;
  [0, 1, 2, 3].forEach((_) => {
    const xx = a2 * tx;
    const yy = b2 * ty;
    const ex = (a2 * a2 - b2 * b2) * tx ** 3 / a2;
    const ey = (b2 * b2 - a2 * a2) * ty ** 3 / b2;
    const rx = xx - ex;
    const ry = yy - ey;
    const qx = px - ex;
    const qy = py - ey;
    const r = Math.hypot(ry, rx);
    const q = Math.hypot(qy, qx);
    tx = Math.min(1, Math.max(0, (qx * r / q + ex) / a2));
    ty = Math.min(1, Math.max(0, (qy * r / q + ey) / b2));
    const t2 = Math.hypot(ty, tx);
    tx /= t2;
    ty /= t2;
  });
  const closestPoint = point(a2 * tx, b2 * ty);
  const tangent = orthogonalThrough(pointRel, closestPoint);
  return [pointRel, tangent];
};
var pointRelativeToElement = (element, pointTuple, elementsMap) => {
  const point2 = from(pointTuple);
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const center = coordsCenter(x1, y1, x2, y2);
  const rotate2 = rotation(center, element.angle);
  const pointRotated = apply(rotate2, point2);
  const pointRelToCenter = sub(pointRotated, from2(center));
  const pointRelToCenterAbs = abs(pointRelToCenter);
  const elementPos = offset(element.x, element.y);
  const pointRelToPos = sub(pointRotated, elementPos);
  const halfWidth = (x2 - x1) / 2;
  const halfHeight = (y2 - y1) / 2;
  return [pointRelToPos, pointRelToCenterAbs, halfWidth, halfHeight];
};
var relativizationToElementCenter = (element, elementsMap) => {
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const center = coordsCenter(x1, y1, x2, y2);
  const rotate2 = rotation(center, element.angle);
  const translate = reverse(
    translation(from2(center))
  );
  return compose(rotate2, translate);
};
var coordsCenter = (x1, y1, x2, y2) => {
  return point((x1 + x2) / 2, (y1 + y2) / 2);
};
var determineFocusDistance = (element, a2, b2, elementsMap) => {
  const relateToCenter = relativizationToElementCenter(element, elementsMap);
  const aRel = apply(relateToCenter, from(a2));
  const bRel = apply(relateToCenter, from(b2));
  const line2 = through(aRel, bRel);
  const q = element.height / element.width;
  const hwidth = element.width / 2;
  const hheight = element.height / 2;
  const n2 = line2[2];
  const m = line2[3];
  const c = line2[1];
  const mabs = Math.abs(m);
  const nabs = Math.abs(n2);
  let ret;
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      ret = c / (hwidth * (nabs + q * mabs));
      break;
    case "diamond":
      ret = mabs < nabs ? c / (nabs * hwidth) : c / (mabs * hheight);
      break;
    case "ellipse":
      ret = c / (hwidth * Math.sqrt(n2 ** 2 + q ** 2 * m ** 2));
      break;
  }
  return ret || 0;
};
var determineFocusPoint = (element, focus, adjecentPoint, elementsMap) => {
  if (focus === 0) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const center = coordsCenter(x1, y1, x2, y2);
    return pointFromPair(toTuple(center));
  }
  const relateToCenter = relativizationToElementCenter(element, elementsMap);
  const adjecentPointRel = apply(
    relateToCenter,
    from(adjecentPoint)
  );
  const reverseRelateToCenter = reverse(relateToCenter);
  let point2;
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "diamond":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      point2 = findFocusPointForRectangulars(element, focus, adjecentPointRel);
      break;
    case "ellipse":
      point2 = findFocusPointForEllipse(element, focus, adjecentPointRel);
      break;
  }
  return pointFromPair(
    toTuple(apply(reverseRelateToCenter, point2))
  );
};
var intersectElementWithLine = (element, a2, b2, gap = 0, elementsMap) => {
  if (isRectangularElement(element)) {
    return segmentIntersectRectangleElement(element, lineSegment(a2, b2), gap);
  }
  const relateToCenter = relativizationToElementCenter(element, elementsMap);
  const aRel = apply(relateToCenter, from(a2));
  const bRel = apply(relateToCenter, from(b2));
  const line2 = through(aRel, bRel);
  const reverseRelateToCenter = reverse(relateToCenter);
  const intersections = getSortedElementLineIntersections(
    element,
    line2,
    aRel,
    gap
  );
  return intersections.map(
    (point2) => pointFromPair(
      toTuple(apply(reverseRelateToCenter, point2))
    )
    // pointFromArray(
    //   ,
    // ),
  );
};
var getSortedElementLineIntersections = (element, line2, nearPoint, gap = 0) => {
  let intersections;
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "diamond":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      const corners = getCorners(element);
      intersections = corners.flatMap((point2, i2) => {
        const edge = [point2, corners[(i2 + 1) % 4]];
        return intersectSegment(line2, offsetSegment(edge, gap));
      }).concat(
        corners.flatMap((point2) => getCircleIntersections(point2, gap, line2))
      );
      break;
    case "ellipse":
      intersections = getEllipseIntersections(element, gap, line2);
      break;
  }
  if (intersections.length < 2) {
    return [];
  }
  const sortedIntersections = intersections.sort(
    (i1, i2) => distance3(i1, nearPoint) - distance3(i2, nearPoint)
  );
  return [
    sortedIntersections[0],
    sortedIntersections[sortedIntersections.length - 1]
  ];
};
var getCorners = (element, scale = 1) => {
  const hx = scale * element.width / 2;
  const hy = scale * element.height / 2;
  switch (element.type) {
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      return [
        point(hx, hy),
        point(hx, -hy),
        point(-hx, -hy),
        point(-hx, hy)
      ];
    case "diamond":
      return [
        point(0, hy),
        point(hx, 0),
        point(0, -hy),
        point(-hx, 0)
      ];
  }
};
var intersectSegment = (line2, segment) => {
  const [a2, b2] = segment;
  const aDist = distanceToLine(a2, line2);
  const bDist = distanceToLine(b2, line2);
  if (aDist * bDist >= 0) {
    return [];
  }
  return [intersect(line2, through(a2, b2))];
};
var offsetSegment = (segment, distance4) => {
  const [a2, b2] = segment;
  const offset2 = translationOrthogonal(
    fromTo(a2, b2),
    distance4
  );
  return [apply(offset2, a2), apply(offset2, b2)];
};
var getEllipseIntersections = (element, gap, line2) => {
  const a2 = element.width / 2 + gap;
  const b2 = element.height / 2 + gap;
  const m = line2[2];
  const n2 = line2[3];
  const c = line2[1];
  const squares = a2 * a2 * m * m + b2 * b2 * n2 * n2;
  const discr = squares - c * c;
  if (squares === 0 || discr <= 0) {
    return [];
  }
  const discrRoot = Math.sqrt(discr);
  const xn = -a2 * a2 * m * c;
  const yn = -b2 * b2 * n2 * c;
  return [
    point(
      (xn + a2 * b2 * n2 * discrRoot) / squares,
      (yn - a2 * b2 * m * discrRoot) / squares
    ),
    point(
      (xn - a2 * b2 * n2 * discrRoot) / squares,
      (yn + a2 * b2 * m * discrRoot) / squares
    )
  ];
};
var getCircleIntersections = (center, radius, line2) => {
  if (radius === 0) {
    return distanceToLine(line2, center) === 0 ? [center] : [];
  }
  const m = line2[2];
  const n2 = line2[3];
  const c = line2[1];
  const [a2, b2] = toTuple(center);
  const r = radius;
  const squares = m * m + n2 * n2;
  const discr = r * r * squares - (m * a2 + n2 * b2 + c) ** 2;
  if (squares === 0 || discr <= 0) {
    return [];
  }
  const discrRoot = Math.sqrt(discr);
  const xn = a2 * n2 * n2 - b2 * m * n2 - m * c;
  const yn = b2 * m * m - a2 * m * n2 - n2 * c;
  return [
    point((xn + n2 * discrRoot) / squares, (yn - m * discrRoot) / squares),
    point((xn - n2 * discrRoot) / squares, (yn + m * discrRoot) / squares)
  ];
};
var findFocusPointForEllipse = (ellipse2, relativeDistance, point2) => {
  const relativeDistanceAbs = Math.abs(relativeDistance);
  const a2 = ellipse2.width * relativeDistanceAbs / 2;
  const b2 = ellipse2.height * relativeDistanceAbs / 2;
  const orientation = Math.sign(relativeDistance);
  const [px, pyo] = toTuple(point2);
  const py = pyo === 0 ? 1e-4 : pyo;
  const squares = px ** 2 * b2 ** 2 + py ** 2 * a2 ** 2;
  const m = (-px * b2 ** 2 + orientation * py * Math.sqrt(Math.max(0, squares - a2 ** 2 * b2 ** 2))) / squares;
  let n2 = (-m * px - 1) / py;
  if (n2 === 0) {
    n2 = (Object.is(n2, -0) ? -1 : 1) * 0.01;
  }
  const x = -(a2 ** 2 * m) / (n2 ** 2 * b2 ** 2 + m ** 2 * a2 ** 2);
  return point(x, (-m * x - 1) / n2);
};
var findFocusPointForRectangulars = (element, relativeDistance, point2) => {
  const relativeDistanceAbs = Math.abs(relativeDistance);
  const orientation = Math.sign(relativeDistance);
  const corners = getCorners(element, relativeDistanceAbs);
  let maxDistance = 0;
  let tangentPoint = null;
  corners.forEach((corner) => {
    const distance4 = orientation * through(point2, corner)[1];
    if (distance4 > maxDistance) {
      maxDistance = distance4;
      tangentPoint = corner;
    }
  });
  return tangentPoint;
};
var bindingProperties = /* @__PURE__ */ new Set([
  "boundElements",
  "frameId",
  "containerId",
  "startBinding",
  "endBinding"
]);
var boundElementsVisitor = (elements, element, visit) => {
  if (isBindableElement(element)) {
    const boundElements = element.boundElements?.slice() ?? [];
    boundElements.forEach(({ id }) => {
      visit(elements.get(id), "boundElements", id);
    });
  }
};
var bindableElementsVisitor = (elements, element, visit) => {
  const result = [];
  if (element.frameId) {
    const id = element.frameId;
    result.push(visit(elements.get(id), "frameId", id));
  }
  if (isBoundToContainer(element)) {
    const id = element.containerId;
    result.push(visit(elements.get(id), "containerId", id));
  }
  if (isArrowElement(element)) {
    if (element.startBinding) {
      const id = element.startBinding.elementId;
      result.push(visit(elements.get(id), "startBinding", id));
    }
    if (element.endBinding) {
      const id = element.endBinding.elementId;
      result.push(visit(elements.get(id), "endBinding", id));
    }
  }
  return result;
};
var BoundElement = class {
  /**
   * Unbind the affected non deleted bindable elements (removing element from `boundElements`).
   * - iterates non deleted bindable elements (`containerId` | `startBinding.elementId` | `endBinding.elementId`) of the current element
   * - prepares updates to unbind each bindable element's `boundElements` from the current element
   */
  static unbindAffected(elements, boundElement, updateElementWith) {
    if (!boundElement) {
      return;
    }
    bindableElementsVisitor(elements, boundElement, (bindableElement) => {
      if (!bindableElement || bindableElement.isDeleted) {
        return;
      }
      boundElementsVisitor(
        elements,
        bindableElement,
        (_, __, boundElementId) => {
          if (boundElementId === boundElement.id) {
            updateElementWith(bindableElement, {
              boundElements: newBoundElements(
                bindableElement.boundElements,
                /* @__PURE__ */ new Set([boundElementId])
              )
            });
          }
        }
      );
    });
  }
  /**
   * Rebind the next affected non deleted bindable elements (adding element to `boundElements`).
   * - iterates non deleted bindable elements (`containerId` | `startBinding.elementId` | `endBinding.elementId`) of the current element
   * - prepares updates to rebind each bindable element's `boundElements` to the current element
   *
   * NOTE: rebind expects that affected elements were previously unbound with `BoundElement.unbindAffected`
   */
  static rebindAffected = (elements, boundElement, updateElementWith) => {
    if (!boundElement || boundElement.isDeleted) {
      return;
    }
    bindableElementsVisitor(
      elements,
      boundElement,
      (bindableElement, bindingProp) => {
        if (!bindableElement || bindableElement.isDeleted) {
          updateElementWith(boundElement, { [bindingProp]: null });
          return;
        }
        if (bindingProp === "frameId") {
          return;
        }
        if (bindableElement.boundElements?.find((x) => x.id === boundElement.id)) {
          return;
        }
        if (isArrowElement(boundElement)) {
          updateElementWith(bindableElement, {
            boundElements: newBoundElements(
              bindableElement.boundElements,
              /* @__PURE__ */ new Set(),
              new Array(boundElement)
            )
          });
        }
        if (isTextElement(boundElement)) {
          if (!bindableElement.boundElements?.find((x) => x.type === "text")) {
            updateElementWith(bindableElement, {
              boundElements: newBoundElements(
                bindableElement.boundElements,
                /* @__PURE__ */ new Set(),
                new Array(boundElement)
              )
            });
          } else {
            updateElementWith(boundElement, { [bindingProp]: null });
          }
        }
      }
    );
  };
};
var BindableElement = class {
  /**
   * Unbind the affected non deleted bound elements (resetting `containerId`, `startBinding`, `endBinding` to `null`).
   * - iterates through non deleted `boundElements` of the current element
   * - prepares updates to unbind each bound element from the current element
   */
  static unbindAffected(elements, bindableElement, updateElementWith) {
    if (!bindableElement) {
      return;
    }
    boundElementsVisitor(elements, bindableElement, (boundElement) => {
      if (!boundElement || boundElement.isDeleted) {
        return;
      }
      bindableElementsVisitor(
        elements,
        boundElement,
        (_, bindingProp, bindableElementId) => {
          if (bindableElementId === bindableElement.id) {
            updateElementWith(boundElement, { [bindingProp]: null });
          }
        }
      );
    });
  }
  /**
   * Rebind the affected non deleted bound elements (for now setting only `containerId`, as we cannot rebind arrows atm).
   * - iterates through non deleted `boundElements` of the current element
   * - prepares updates to rebind each bound element to the current element or unbind it from `boundElements` in case of conflicts
   *
   * NOTE: rebind expects that affected elements were previously unbound with `BindaleElement.unbindAffected`
   */
  static rebindAffected = (elements, bindableElement, updateElementWith) => {
    if (!bindableElement || bindableElement.isDeleted) {
      return;
    }
    boundElementsVisitor(
      elements,
      bindableElement,
      (boundElement, _, boundElementId) => {
        if (!boundElement || boundElement.isDeleted) {
          updateElementWith(bindableElement, {
            boundElements: newBoundElements(
              bindableElement.boundElements,
              /* @__PURE__ */ new Set([boundElementId])
            )
          });
          return;
        }
        if (isTextElement(boundElement)) {
          const boundElements = bindableElement.boundElements?.slice() ?? [];
          if (boundElements.reverse().find((x) => x.type === "text")?.id === boundElement.id) {
            if (boundElement.containerId !== bindableElement.id) {
              updateElementWith(boundElement, {
                containerId: bindableElement.id
              });
            }
          } else {
            if (boundElement.containerId !== null) {
              updateElementWith(boundElement, {
                containerId: null
              });
            }
            updateElementWith(bindableElement, {
              boundElements: newBoundElements(
                bindableElement.boundElements,
                /* @__PURE__ */ new Set([boundElement.id])
              )
            });
          }
        }
      }
    );
  };
};
var getGlobalFixedPointForBindableElement = (fixedPointRatio, element) => {
  const [fixedX, fixedY] = normalizeFixedPoint(fixedPointRatio);
  return pointRotateRads(
    pointFrom(
      element.x + element.width * fixedX,
      element.y + element.height * fixedY
    ),
    pointFrom(
      element.x + element.width / 2,
      element.y + element.height / 2
    ),
    element.angle
  );
};
var getGlobalFixedPoints = (arrow, elementsMap) => {
  const startElement = arrow.startBinding && elementsMap.get(arrow.startBinding.elementId);
  const endElement = arrow.endBinding && elementsMap.get(arrow.endBinding.elementId);
  const startPoint = startElement && arrow.startBinding ? getGlobalFixedPointForBindableElement(
    arrow.startBinding.fixedPoint,
    startElement
  ) : pointFrom(
    arrow.x + arrow.points[0][0],
    arrow.y + arrow.points[0][1]
  );
  const endPoint = endElement && arrow.endBinding ? getGlobalFixedPointForBindableElement(
    arrow.endBinding.fixedPoint,
    endElement
  ) : pointFrom(
    arrow.x + arrow.points[arrow.points.length - 1][0],
    arrow.y + arrow.points[arrow.points.length - 1][1]
  );
  return [startPoint, endPoint];
};
var getArrowLocalFixedPoints = (arrow, elementsMap) => {
  const [startPoint, endPoint] = getGlobalFixedPoints(arrow, elementsMap);
  return [
    LinearElementEditor.pointFromAbsoluteCoords(arrow, startPoint, elementsMap),
    LinearElementEditor.pointFromAbsoluteCoords(arrow, endPoint, elementsMap)
  ];
};
var normalizeFixedPoint = (fixedPoint) => {
  if (fixedPoint && (fixedPoint[0] === 0.5 || fixedPoint[1] === 0.5)) {
    return fixedPoint.map(
      (ratio) => ratio === 0.5 ? 0.5001 : ratio
    );
  }
  return fixedPoint;
};

// element/routing.ts
init_define_import_meta_env();

// binaryheap.ts
init_define_import_meta_env();
var BinaryHeap = class {
  constructor(scoreFunction) {
    this.scoreFunction = scoreFunction;
  }
  content = [];
  sinkDown(idx) {
    const node = this.content[idx];
    while (idx > 0) {
      const parentN = (idx + 1 >> 1) - 1;
      const parent = this.content[parentN];
      if (this.scoreFunction(node) < this.scoreFunction(parent)) {
        this.content[parentN] = node;
        this.content[idx] = parent;
        idx = parentN;
      } else {
        break;
      }
    }
  }
  bubbleUp(idx) {
    const length = this.content.length;
    const node = this.content[idx];
    const score = this.scoreFunction(node);
    while (true) {
      const child2N = idx + 1 << 1;
      const child1N = child2N - 1;
      let swap = null;
      let child1Score = 0;
      if (child1N < length) {
        const child1 = this.content[child1N];
        child1Score = this.scoreFunction(child1);
        if (child1Score < score) {
          swap = child1N;
        }
      }
      if (child2N < length) {
        const child2 = this.content[child2N];
        const child2Score = this.scoreFunction(child2);
        if (child2Score < (swap === null ? score : child1Score)) {
          swap = child2N;
        }
      }
      if (swap !== null) {
        this.content[idx] = this.content[swap];
        this.content[swap] = node;
        idx = swap;
      } else {
        break;
      }
    }
  }
  push(node) {
    this.content.push(node);
    this.sinkDown(this.content.length - 1);
  }
  pop() {
    if (this.content.length === 0) {
      return null;
    }
    const result = this.content[0];
    const end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleUp(0);
    }
    return result;
  }
  remove(node) {
    if (this.content.length === 0) {
      return;
    }
    const i2 = this.content.indexOf(node);
    const end = this.content.pop();
    if (i2 < this.content.length) {
      this.content[i2] = end;
      if (this.scoreFunction(end) < this.scoreFunction(node)) {
        this.sinkDown(i2);
      } else {
        this.bubbleUp(i2);
      }
    }
  }
  size() {
    return this.content.length;
  }
  rescoreElement(node) {
    this.sinkDown(this.content.indexOf(node));
  }
};

// element/routing.ts
var BASE_PADDING = 40;
var mutateElbowArrow = (arrow, elementsMap, nextPoints, offset2, otherUpdates, options) => {
  const update = updateElbowArrow(
    arrow,
    elementsMap,
    nextPoints,
    offset2,
    options
  );
  if (update) {
    mutateElement(
      arrow,
      {
        ...otherUpdates,
        ...update,
        angle: 0
      },
      options?.informMutation
    );
  } else {
    console.error("Elbow arrow cannot find a route");
  }
};
var updateElbowArrow = (arrow, elementsMap, nextPoints, offset2, options) => {
  const origStartGlobalPoint = pointTranslate(
    pointTranslate(
      nextPoints[0],
      vector(arrow.x, arrow.y)
    ),
    offset2
  );
  const origEndGlobalPoint = pointTranslate(
    pointTranslate(
      nextPoints[nextPoints.length - 1],
      vector(arrow.x, arrow.y)
    ),
    offset2
  );
  const startElement = arrow.startBinding && getBindableElementForId(arrow.startBinding.elementId, elementsMap);
  const endElement = arrow.endBinding && getBindableElementForId(arrow.endBinding.elementId, elementsMap);
  const [hoveredStartElement, hoveredEndElement] = options?.isDragging ? getHoveredElements(origStartGlobalPoint, origEndGlobalPoint, elementsMap) : [startElement, endElement];
  const startGlobalPoint = getGlobalPoint(
    arrow.startBinding?.fixedPoint,
    origStartGlobalPoint,
    origEndGlobalPoint,
    elementsMap,
    startElement,
    hoveredStartElement,
    options?.isDragging
  );
  const endGlobalPoint = getGlobalPoint(
    arrow.endBinding?.fixedPoint,
    origEndGlobalPoint,
    origStartGlobalPoint,
    elementsMap,
    endElement,
    hoveredEndElement,
    options?.isDragging
  );
  const startHeading = getBindPointHeading(
    startGlobalPoint,
    endGlobalPoint,
    elementsMap,
    hoveredStartElement,
    origStartGlobalPoint
  );
  const endHeading = getBindPointHeading(
    endGlobalPoint,
    startGlobalPoint,
    elementsMap,
    hoveredEndElement,
    origEndGlobalPoint
  );
  const startPointBounds = [
    startGlobalPoint[0] - 2,
    startGlobalPoint[1] - 2,
    startGlobalPoint[0] + 2,
    startGlobalPoint[1] + 2
  ];
  const endPointBounds = [
    endGlobalPoint[0] - 2,
    endGlobalPoint[1] - 2,
    endGlobalPoint[0] + 2,
    endGlobalPoint[1] + 2
  ];
  const startElementBounds = hoveredStartElement ? aabbForElement(
    hoveredStartElement,
    offsetFromHeading(
      startHeading,
      arrow.startArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2,
      1
    )
  ) : startPointBounds;
  const endElementBounds = hoveredEndElement ? aabbForElement(
    hoveredEndElement,
    offsetFromHeading(
      endHeading,
      arrow.endArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2,
      1
    )
  ) : endPointBounds;
  const boundsOverlap = pointInsideBounds(
    startGlobalPoint,
    hoveredEndElement ? aabbForElement(
      hoveredEndElement,
      offsetFromHeading(endHeading, BASE_PADDING, BASE_PADDING)
    ) : endPointBounds
  ) || pointInsideBounds(
    endGlobalPoint,
    hoveredStartElement ? aabbForElement(
      hoveredStartElement,
      offsetFromHeading(startHeading, BASE_PADDING, BASE_PADDING)
    ) : startPointBounds
  );
  const commonBounds = commonAABB(
    boundsOverlap ? [startPointBounds, endPointBounds] : [startElementBounds, endElementBounds]
  );
  const dynamicAABBs = generateDynamicAABBs(
    boundsOverlap ? startPointBounds : startElementBounds,
    boundsOverlap ? endPointBounds : endElementBounds,
    commonBounds,
    boundsOverlap ? offsetFromHeading(
      startHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING,
      0
    ) : offsetFromHeading(
      startHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING - (arrow.startArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2),
      BASE_PADDING
    ),
    boundsOverlap ? offsetFromHeading(
      endHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING,
      0
    ) : offsetFromHeading(
      endHeading,
      !hoveredStartElement && !hoveredEndElement ? 0 : BASE_PADDING - (arrow.endArrowhead ? FIXED_BINDING_DISTANCE * 6 : FIXED_BINDING_DISTANCE * 2),
      BASE_PADDING
    ),
    boundsOverlap,
    hoveredStartElement && aabbForElement(hoveredStartElement),
    hoveredEndElement && aabbForElement(hoveredEndElement)
  );
  const startDonglePosition = getDonglePosition(
    dynamicAABBs[0],
    startHeading,
    startGlobalPoint
  );
  const endDonglePosition = getDonglePosition(
    dynamicAABBs[1],
    endHeading,
    endGlobalPoint
  );
  const grid = calculateGrid(
    dynamicAABBs,
    startDonglePosition ? startDonglePosition : startGlobalPoint,
    startHeading,
    endDonglePosition ? endDonglePosition : endGlobalPoint,
    endHeading,
    commonBounds
  );
  const startDongle = startDonglePosition && pointToGridNode(startDonglePosition, grid);
  const endDongle = endDonglePosition && pointToGridNode(endDonglePosition, grid);
  const endNode = pointToGridNode(endGlobalPoint, grid);
  if (endNode && hoveredEndElement) {
    endNode.closed = true;
  }
  const startNode = pointToGridNode(startGlobalPoint, grid);
  if (startNode && arrow.startBinding) {
    startNode.closed = true;
  }
  const dongleOverlap = startDongle && endDongle && (pointInsideBounds(startDongle.pos, dynamicAABBs[1]) || pointInsideBounds(endDongle.pos, dynamicAABBs[0]));
  const path = astar(
    startDongle ? startDongle : startNode,
    endDongle ? endDongle : endNode,
    grid,
    startHeading ? startHeading : HEADING_RIGHT,
    endHeading ? endHeading : HEADING_RIGHT,
    dongleOverlap ? [] : dynamicAABBs
  );
  if (path) {
    const points = path.map((node) => [
      node.pos[0],
      node.pos[1]
    ]);
    startDongle && points.unshift(startGlobalPoint);
    endDongle && points.push(endGlobalPoint);
    return normalizedArrowElementUpdate(simplifyElbowArrowPoints(points), 0, 0);
  }
  return null;
};
var offsetFromHeading = (heading, head, side) => {
  switch (heading) {
    case HEADING_UP:
      return [head, side, side, side];
    case HEADING_RIGHT:
      return [side, head, side, side];
    case HEADING_DOWN:
      return [side, side, head, side];
  }
  return [side, side, side, head];
};
var astar = (start2, end, grid, startHeading, endHeading, aabbs) => {
  const bendMultiplier = m_dist(start2.pos, end.pos);
  const open = new BinaryHeap((node) => node.f);
  open.push(start2);
  while (open.size() > 0) {
    const current = open.pop();
    if (!current || current.closed) {
      continue;
    }
    if (current === end) {
      return pathTo(start2, current);
    }
    current.closed = true;
    const neighbors = getNeighbors(current.addr, grid);
    for (let i2 = 0; i2 < 4; i2++) {
      const neighbor = neighbors[i2];
      if (!neighbor || neighbor.closed) {
        continue;
      }
      const neighborHalfPoint = pointScaleFromOrigin(
        neighbor.pos,
        current.pos,
        0.5
      );
      if (isAnyTrue(
        ...aabbs.map((aabb) => pointInsideBounds(neighborHalfPoint, aabb))
      )) {
        continue;
      }
      const neighborHeading = neighborIndexToHeading(i2);
      const previousDirection = current.parent ? vectorToHeading(vectorFromPoint(current.pos, current.parent.pos)) : startHeading;
      const reverseHeading = flipHeading(previousDirection);
      const neighborIsReverseRoute = compareHeading(reverseHeading, neighborHeading) || gridAddressesEqual(start2.addr, neighbor.addr) && compareHeading(neighborHeading, startHeading) || gridAddressesEqual(end.addr, neighbor.addr) && compareHeading(neighborHeading, endHeading);
      if (neighborIsReverseRoute) {
        continue;
      }
      const directionChange = previousDirection !== neighborHeading;
      const gScore = current.g + m_dist(neighbor.pos, current.pos) + (directionChange ? Math.pow(bendMultiplier, 3) : 0);
      const beenVisited = neighbor.visited;
      if (!beenVisited || gScore < neighbor.g) {
        const estBendCount = estimateSegmentCount(
          neighbor,
          end,
          neighborHeading,
          endHeading
        );
        neighbor.visited = true;
        neighbor.parent = current;
        neighbor.h = m_dist(end.pos, neighbor.pos) + estBendCount * Math.pow(bendMultiplier, 2);
        neighbor.g = gScore;
        neighbor.f = neighbor.g + neighbor.h;
        if (!beenVisited) {
          open.push(neighbor);
        } else {
          open.rescoreElement(neighbor);
        }
      }
    }
  }
  return null;
};
var pathTo = (start2, node) => {
  let curr = node;
  const path = [];
  while (curr.parent) {
    path.unshift(curr);
    curr = curr.parent;
  }
  path.unshift(start2);
  return path;
};
var m_dist = (a2, b2) => Math.abs(a2[0] - b2[0]) + Math.abs(a2[1] - b2[1]);
var generateDynamicAABBs = (a2, b2, common, startDifference, endDifference, disableSideHack, startElementBounds, endElementBounds) => {
  const startEl = startElementBounds ?? a2;
  const endEl = endElementBounds ?? b2;
  const [startUp, startRight, startDown, startLeft] = startDifference ?? [
    0,
    0,
    0,
    0
  ];
  const [endUp, endRight, endDown, endLeft] = endDifference ?? [0, 0, 0, 0];
  const first = [
    a2[0] > b2[2] ? a2[1] > b2[3] || a2[3] < b2[1] ? Math.min((startEl[0] + endEl[2]) / 2, a2[0] - startLeft) : (startEl[0] + endEl[2]) / 2 : a2[0] > b2[0] ? a2[0] - startLeft : common[0] - startLeft,
    a2[1] > b2[3] ? a2[0] > b2[2] || a2[2] < b2[0] ? Math.min((startEl[1] + endEl[3]) / 2, a2[1] - startUp) : (startEl[1] + endEl[3]) / 2 : a2[1] > b2[1] ? a2[1] - startUp : common[1] - startUp,
    a2[2] < b2[0] ? a2[1] > b2[3] || a2[3] < b2[1] ? Math.max((startEl[2] + endEl[0]) / 2, a2[2] + startRight) : (startEl[2] + endEl[0]) / 2 : a2[2] < b2[2] ? a2[2] + startRight : common[2] + startRight,
    a2[3] < b2[1] ? a2[0] > b2[2] || a2[2] < b2[0] ? Math.max((startEl[3] + endEl[1]) / 2, a2[3] + startDown) : (startEl[3] + endEl[1]) / 2 : a2[3] < b2[3] ? a2[3] + startDown : common[3] + startDown
  ];
  const second = [
    b2[0] > a2[2] ? b2[1] > a2[3] || b2[3] < a2[1] ? Math.min((endEl[0] + startEl[2]) / 2, b2[0] - endLeft) : (endEl[0] + startEl[2]) / 2 : b2[0] > a2[0] ? b2[0] - endLeft : common[0] - endLeft,
    b2[1] > a2[3] ? b2[0] > a2[2] || b2[2] < a2[0] ? Math.min((endEl[1] + startEl[3]) / 2, b2[1] - endUp) : (endEl[1] + startEl[3]) / 2 : b2[1] > a2[1] ? b2[1] - endUp : common[1] - endUp,
    b2[2] < a2[0] ? b2[1] > a2[3] || b2[3] < a2[1] ? Math.max((endEl[2] + startEl[0]) / 2, b2[2] + endRight) : (endEl[2] + startEl[0]) / 2 : b2[2] < a2[2] ? b2[2] + endRight : common[2] + endRight,
    b2[3] < a2[1] ? b2[0] > a2[2] || b2[2] < a2[0] ? Math.max((endEl[3] + startEl[1]) / 2, b2[3] + endDown) : (endEl[3] + startEl[1]) / 2 : b2[3] < a2[3] ? b2[3] + endDown : common[3] + endDown
  ];
  const c = commonAABB([first, second]);
  if (!disableSideHack && first[2] - first[0] + second[2] - second[0] > c[2] - c[0] + 1e-11 && first[3] - first[1] + second[3] - second[1] > c[3] - c[1] + 1e-11) {
    const [endCenterX, endCenterY] = [
      (second[0] + second[2]) / 2,
      (second[1] + second[3]) / 2
    ];
    if (b2[0] > a2[2] && a2[1] > b2[3]) {
      const cX = first[2] + (second[0] - first[2]) / 2;
      const cY = second[3] + (first[1] - second[3]) / 2;
      if (vectorCross(
        vector(a2[2] - endCenterX, a2[1] - endCenterY),
        vector(a2[0] - endCenterX, a2[3] - endCenterY)
      ) > 0) {
        return [
          [first[0], first[1], cX, first[3]],
          [cX, second[1], second[2], second[3]]
        ];
      }
      return [
        [first[0], cY, first[2], first[3]],
        [second[0], second[1], second[2], cY]
      ];
    } else if (a2[2] < b2[0] && a2[3] < b2[1]) {
      const cX = first[2] + (second[0] - first[2]) / 2;
      const cY = first[3] + (second[1] - first[3]) / 2;
      if (vectorCross(
        vector(a2[0] - endCenterX, a2[1] - endCenterY),
        vector(a2[2] - endCenterX, a2[3] - endCenterY)
      ) > 0) {
        return [
          [first[0], first[1], first[2], cY],
          [second[0], cY, second[2], second[3]]
        ];
      }
      return [
        [first[0], first[1], cX, first[3]],
        [cX, second[1], second[2], second[3]]
      ];
    } else if (a2[0] > b2[2] && a2[3] < b2[1]) {
      const cX = second[2] + (first[0] - second[2]) / 2;
      const cY = first[3] + (second[1] - first[3]) / 2;
      if (vectorCross(
        vector(a2[2] - endCenterX, a2[1] - endCenterY),
        vector(a2[0] - endCenterX, a2[3] - endCenterY)
      ) > 0) {
        return [
          [cX, first[1], first[2], first[3]],
          [second[0], second[1], cX, second[3]]
        ];
      }
      return [
        [first[0], first[1], first[2], cY],
        [second[0], cY, second[2], second[3]]
      ];
    } else if (a2[0] > b2[2] && a2[1] > b2[3]) {
      const cX = second[2] + (first[0] - second[2]) / 2;
      const cY = second[3] + (first[1] - second[3]) / 2;
      if (vectorCross(
        vector(a2[0] - endCenterX, a2[1] - endCenterY),
        vector(a2[2] - endCenterX, a2[3] - endCenterY)
      ) > 0) {
        return [
          [cX, first[1], first[2], first[3]],
          [second[0], second[1], cX, second[3]]
        ];
      }
      return [
        [first[0], cY, first[2], first[3]],
        [second[0], second[1], second[2], cY]
      ];
    }
  }
  return [first, second];
};
var calculateGrid = (aabbs, start2, startHeading, end, endHeading, common) => {
  const horizontal = /* @__PURE__ */ new Set();
  const vertical = /* @__PURE__ */ new Set();
  if (startHeading === HEADING_LEFT || startHeading === HEADING_RIGHT) {
    vertical.add(start2[1]);
  } else {
    horizontal.add(start2[0]);
  }
  if (endHeading === HEADING_LEFT || endHeading === HEADING_RIGHT) {
    vertical.add(end[1]);
  } else {
    horizontal.add(end[0]);
  }
  aabbs.forEach((aabb) => {
    horizontal.add(aabb[0]);
    horizontal.add(aabb[2]);
    vertical.add(aabb[1]);
    vertical.add(aabb[3]);
  });
  horizontal.add(common[0]);
  horizontal.add(common[2]);
  vertical.add(common[1]);
  vertical.add(common[3]);
  const _vertical = Array.from(vertical).sort((a2, b2) => a2 - b2);
  const _horizontal = Array.from(horizontal).sort((a2, b2) => a2 - b2);
  return {
    row: _vertical.length,
    col: _horizontal.length,
    data: _vertical.flatMap(
      (y, row) => _horizontal.map(
        (x, col) => ({
          f: 0,
          g: 0,
          h: 0,
          closed: false,
          visited: false,
          parent: null,
          addr: [col, row],
          pos: [x, y]
        })
      )
    )
  };
};
var getDonglePosition = (bounds, heading, p) => {
  switch (heading) {
    case HEADING_UP:
      return pointFrom(p[0], bounds[1]);
    case HEADING_RIGHT:
      return pointFrom(bounds[2], p[1]);
    case HEADING_DOWN:
      return pointFrom(p[0], bounds[3]);
  }
  return pointFrom(bounds[0], p[1]);
};
var estimateSegmentCount = (start2, end, startHeading, endHeading) => {
  if (endHeading === HEADING_RIGHT) {
    switch (startHeading) {
      case HEADING_RIGHT: {
        if (start2.pos[0] >= end.pos[0]) {
          return 4;
        }
        if (start2.pos[1] === end.pos[1]) {
          return 0;
        }
        return 2;
      }
      case HEADING_UP:
        if (start2.pos[1] > end.pos[1] && start2.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_DOWN:
        if (start2.pos[1] < end.pos[1] && start2.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_LEFT:
        if (start2.pos[1] === end.pos[1]) {
          return 4;
        }
        return 2;
    }
  } else if (endHeading === HEADING_LEFT) {
    switch (startHeading) {
      case HEADING_RIGHT:
        if (start2.pos[1] === end.pos[1]) {
          return 4;
        }
        return 2;
      case HEADING_UP:
        if (start2.pos[1] > end.pos[1] && start2.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_DOWN:
        if (start2.pos[1] < end.pos[1] && start2.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_LEFT:
        if (start2.pos[0] <= end.pos[0]) {
          return 4;
        }
        if (start2.pos[1] === end.pos[1]) {
          return 0;
        }
        return 2;
    }
  } else if (endHeading === HEADING_UP) {
    switch (startHeading) {
      case HEADING_RIGHT:
        if (start2.pos[1] > end.pos[1] && start2.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_UP:
        if (start2.pos[1] >= end.pos[1]) {
          return 4;
        }
        if (start2.pos[0] === end.pos[0]) {
          return 0;
        }
        return 2;
      case HEADING_DOWN:
        if (start2.pos[0] === end.pos[0]) {
          return 4;
        }
        return 2;
      case HEADING_LEFT:
        if (start2.pos[1] > end.pos[1] && start2.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
    }
  } else if (endHeading === HEADING_DOWN) {
    switch (startHeading) {
      case HEADING_RIGHT:
        if (start2.pos[1] < end.pos[1] && start2.pos[0] < end.pos[0]) {
          return 1;
        }
        return 3;
      case HEADING_UP:
        if (start2.pos[0] === end.pos[0]) {
          return 4;
        }
        return 2;
      case HEADING_DOWN:
        if (start2.pos[1] <= end.pos[1]) {
          return 4;
        }
        if (start2.pos[0] === end.pos[0]) {
          return 0;
        }
        return 2;
      case HEADING_LEFT:
        if (start2.pos[1] < end.pos[1] && start2.pos[0] > end.pos[0]) {
          return 1;
        }
        return 3;
    }
  }
  return 0;
};
var getNeighbors = ([col, row], grid) => [
  gridNodeFromAddr([col, row - 1], grid),
  gridNodeFromAddr([col + 1, row], grid),
  gridNodeFromAddr([col, row + 1], grid),
  gridNodeFromAddr([col - 1, row], grid)
];
var gridNodeFromAddr = ([col, row], grid) => {
  if (col < 0 || col >= grid.col || row < 0 || row >= grid.row) {
    return null;
  }
  return grid.data[row * grid.col + col] ?? null;
};
var pointToGridNode = (point2, grid) => {
  for (let col = 0; col < grid.col; col++) {
    for (let row = 0; row < grid.row; row++) {
      const candidate = gridNodeFromAddr([col, row], grid);
      if (candidate && point2[0] === candidate.pos[0] && point2[1] === candidate.pos[1]) {
        return candidate;
      }
    }
  }
  return null;
};
var commonAABB = (aabbs) => [
  Math.min(...aabbs.map((aabb) => aabb[0])),
  Math.min(...aabbs.map((aabb) => aabb[1])),
  Math.max(...aabbs.map((aabb) => aabb[2])),
  Math.max(...aabbs.map((aabb) => aabb[3]))
];
var getBindableElementForId = (id, elementsMap) => {
  const element = elementsMap.get(id);
  if (element && isBindableElement(element)) {
    return element;
  }
  return null;
};
var normalizedArrowElementUpdate = (global2, externalOffsetX, externalOffsetY) => {
  const offsetX = global2[0][0];
  const offsetY = global2[0][1];
  const points = global2.map(
    (p) => pointTranslate(
      p,
      vectorScale(vectorFromPoint(global2[0]), -1)
    )
  );
  return {
    points,
    x: offsetX + (externalOffsetX ?? 0),
    y: offsetY + (externalOffsetY ?? 0),
    ...getSizeFromPoints(points)
  };
};
var simplifyElbowArrowPoints = (points) => points.slice(2).reduce(
  (result, p) => compareHeading(
    vectorToHeading(
      vectorFromPoint(
        result[result.length - 1],
        result[result.length - 2]
      )
    ),
    vectorToHeading(vectorFromPoint(p, result[result.length - 1]))
  ) ? [...result.slice(0, -1), p] : [...result, p],
  [points[0] ?? [0, 0], points[1] ?? [1, 0]]
);
var neighborIndexToHeading = (idx) => {
  switch (idx) {
    case 0:
      return HEADING_UP;
    case 1:
      return HEADING_RIGHT;
    case 2:
      return HEADING_DOWN;
  }
  return HEADING_LEFT;
};
var getGlobalPoint = (fixedPointRatio, initialPoint, otherPoint, elementsMap, boundElement, hoveredElement, isDragging) => {
  if (isDragging) {
    if (hoveredElement) {
      const snapPoint = getSnapPoint(
        initialPoint,
        otherPoint,
        hoveredElement,
        elementsMap
      );
      return snapToMid(hoveredElement, snapPoint);
    }
    return initialPoint;
  }
  if (boundElement) {
    const fixedGlobalPoint = getGlobalFixedPointForBindableElement(
      fixedPointRatio || [0, 0],
      boundElement
    );
    return Math.abs(
      distanceToBindableElement(boundElement, fixedGlobalPoint, elementsMap) - FIXED_BINDING_DISTANCE
    ) > 0.01 ? getSnapPoint(initialPoint, otherPoint, boundElement, elementsMap) : fixedGlobalPoint;
  }
  return initialPoint;
};
var getSnapPoint = (p, otherPoint, element, elementsMap) => bindPointToSnapToElementOutline(
  isRectanguloidElement(element) ? avoidRectangularCorner(element, p) : p,
  otherPoint,
  element,
  elementsMap
);
var getBindPointHeading = (p, otherPoint, elementsMap, hoveredElement, origPoint) => getHeadingForElbowArrowSnap(
  p,
  otherPoint,
  hoveredElement,
  hoveredElement && aabbForElement(
    hoveredElement,
    Array(4).fill(
      distanceToBindableElement(hoveredElement, p, elementsMap)
    )
  ),
  elementsMap,
  origPoint
);
var getHoveredElements = (origStartGlobalPoint, origEndGlobalPoint, elementsMap) => {
  const nonDeletedSceneElementsMap = toBrandedType(
    new Map([...elementsMap].filter((el) => !el[1].isDeleted))
  );
  const elements = Array.from(elementsMap.values());
  return [
    getHoveredElementForBinding(
      tupleToCoors(origStartGlobalPoint),
      elements,
      nonDeletedSceneElementsMap,
      true
    ),
    getHoveredElementForBinding(
      tupleToCoors(origEndGlobalPoint),
      elements,
      nonDeletedSceneElementsMap,
      true
    )
  ];
};
var gridAddressesEqual = (a2, b2) => a2[0] === b2[0] && a2[1] === b2[1];

// snapping.ts
init_define_import_meta_env();

// groups.ts
init_define_import_meta_env();
var selectGroup = (groupId, appState, elements) => {
  const elementsInGroup = elements.reduce(
    (acc, element) => {
      if (element.groupIds.includes(groupId)) {
        acc[element.id] = true;
      }
      return acc;
    },
    {}
  );
  if (Object.keys(elementsInGroup).length < 2) {
    if (appState.selectedGroupIds[groupId] || appState.editingGroupId === groupId) {
      return {
        selectedElementIds: appState.selectedElementIds,
        selectedGroupIds: { ...appState.selectedGroupIds, [groupId]: false },
        editingGroupId: null
      };
    }
    return appState;
  }
  return {
    editingGroupId: appState.editingGroupId,
    selectedGroupIds: { ...appState.selectedGroupIds, [groupId]: true },
    selectedElementIds: {
      ...appState.selectedElementIds,
      ...elementsInGroup
    }
  };
};
var selectGroupsForSelectedElements = function() {
  let lastSelectedElements = null;
  let lastElements = null;
  let lastReturnValue = null;
  const _selectGroups = (selectedElements, elements, appState, prevAppState) => {
    if (lastReturnValue !== void 0 && elements === lastElements && selectedElements === lastSelectedElements && appState.editingGroupId === lastReturnValue?.editingGroupId) {
      return lastReturnValue;
    }
    const selectedGroupIds = {};
    for (const selectedElement of selectedElements) {
      let groupIds = selectedElement.groupIds;
      if (appState.editingGroupId) {
        const indexOfEditingGroup = groupIds.indexOf(appState.editingGroupId);
        if (indexOfEditingGroup > -1) {
          groupIds = groupIds.slice(0, indexOfEditingGroup);
        }
      }
      if (groupIds.length > 0) {
        const lastSelectedGroup = groupIds[groupIds.length - 1];
        selectedGroupIds[lastSelectedGroup] = true;
      }
    }
    const groupElementsIndex = {};
    const selectedElementIdsInGroups = elements.reduce(
      (acc, element) => {
        const groupId = element.groupIds.find((id) => selectedGroupIds[id]);
        if (groupId) {
          acc[element.id] = true;
          if (!Array.isArray(groupElementsIndex[groupId])) {
            groupElementsIndex[groupId] = [element.id];
          } else {
            groupElementsIndex[groupId].push(element.id);
          }
        }
        return acc;
      },
      {}
    );
    for (const groupId of Object.keys(groupElementsIndex)) {
      if (groupElementsIndex[groupId].length < 2) {
        if (selectedGroupIds[groupId]) {
          selectedGroupIds[groupId] = false;
        }
      }
    }
    lastElements = elements;
    lastSelectedElements = selectedElements;
    lastReturnValue = {
      editingGroupId: appState.editingGroupId,
      selectedGroupIds,
      selectedElementIds: makeNextSelectedElementIds(
        {
          ...appState.selectedElementIds,
          ...selectedElementIdsInGroups
        },
        prevAppState
      )
    };
    return lastReturnValue;
  };
  const selectGroupsForSelectedElements2 = (appState, elements, prevAppState, app) => {
    const selectedElements = app ? app.scene.getSelectedElements({
      selectedElementIds: appState.selectedElementIds,
      // supplying elements explicitly in case we're passed non-state elements
      elements
    }) : getSelectedElements(elements, appState);
    if (!selectedElements.length) {
      return {
        selectedGroupIds: {},
        editingGroupId: null,
        selectedElementIds: makeNextSelectedElementIds(
          appState.selectedElementIds,
          prevAppState
        )
      };
    }
    return _selectGroups(selectedElements, elements, appState, prevAppState);
  };
  selectGroupsForSelectedElements2.clearCache = () => {
    lastElements = null;
    lastSelectedElements = null;
    lastReturnValue = null;
  };
  return selectGroupsForSelectedElements2;
}();
var isSelectedViaGroup = (appState, element) => getSelectedGroupForElement(appState, element) != null;
var getSelectedGroupForElement = (appState, element) => element.groupIds.filter((groupId) => groupId !== appState.editingGroupId).find((groupId) => appState.selectedGroupIds[groupId]);
var getSelectedGroupIds = (appState) => Object.entries(appState.selectedGroupIds).filter(([groupId, isSelected]) => isSelected).map(([groupId, isSelected]) => groupId);
var selectGroupsFromGivenElements = (elements, appState) => {
  let nextAppState = {
    ...appState,
    selectedGroupIds: {}
  };
  for (const element of elements) {
    let groupIds = element.groupIds;
    if (appState.editingGroupId) {
      const indexOfEditingGroup = groupIds.indexOf(appState.editingGroupId);
      if (indexOfEditingGroup > -1) {
        groupIds = groupIds.slice(0, indexOfEditingGroup);
      }
    }
    if (groupIds.length > 0) {
      const groupId = groupIds[groupIds.length - 1];
      nextAppState = {
        ...nextAppState,
        ...selectGroup(groupId, nextAppState, elements)
      };
    }
  }
  return nextAppState.selectedGroupIds;
};
var editGroupForSelectedElement = (appState, element) => {
  return {
    ...appState,
    editingGroupId: element.groupIds.length ? element.groupIds[0] : null,
    selectedGroupIds: {},
    selectedElementIds: {
      [element.id]: true
    }
  };
};
var isElementInGroup = (element, groupId) => element.groupIds.includes(groupId);
var getElementsInGroup = (elements, groupId) => {
  const elementsInGroup = [];
  for (const element of elements.values()) {
    if (isElementInGroup(element, groupId)) {
      elementsInGroup.push(element);
    }
  }
  return elementsInGroup;
};
var getSelectedGroupIdForElement = (element, selectedGroupIds) => element.groupIds.find((groupId) => selectedGroupIds[groupId]);
var getNewGroupIdsForDuplication = (groupIds, editingGroupId, mapper) => {
  const copy = [...groupIds];
  const positionOfEditingGroupId = editingGroupId ? groupIds.indexOf(editingGroupId) : -1;
  const endIndex = positionOfEditingGroupId > -1 ? positionOfEditingGroupId : groupIds.length;
  for (let index = 0; index < endIndex; index++) {
    copy[index] = mapper(copy[index]);
  }
  return copy;
};
var addToGroup = (prevGroupIds, newGroupId, editingGroupId) => {
  const groupIds = [...prevGroupIds];
  const positionOfEditingGroupId = editingGroupId ? groupIds.indexOf(editingGroupId) : -1;
  const positionToInsert = positionOfEditingGroupId > -1 ? positionOfEditingGroupId : groupIds.length;
  groupIds.splice(positionToInsert, 0, newGroupId);
  return groupIds;
};
var removeFromSelectedGroups = (groupIds, selectedGroupIds) => groupIds.filter((groupId) => !selectedGroupIds[groupId]);
var getMaximumGroups = (elements, elementsMap) => {
  const groups = /* @__PURE__ */ new Map();
  elements.forEach((element) => {
    const groupId = element.groupIds.length === 0 ? element.id : element.groupIds[element.groupIds.length - 1];
    const currentGroupMembers = groups.get(groupId) || [];
    const boundTextElement = getBoundTextElement(element, elementsMap);
    if (boundTextElement) {
      currentGroupMembers.push(boundTextElement);
    }
    groups.set(groupId, [...currentGroupMembers, element]);
  });
  return Array.from(groups.values());
};
var getNonDeletedGroupIds = (elements) => {
  const nonDeletedGroupIds = /* @__PURE__ */ new Set();
  for (const [, element] of elements) {
    if (element.isDeleted) {
      continue;
    }
    for (const groupId of element.groupIds ?? []) {
      nonDeletedGroupIds.add(groupId);
    }
  }
  return nonDeletedGroupIds;
};
var elementsAreInSameGroup = (elements) => {
  const allGroups = elements.flatMap((element) => element.groupIds);
  const groupCount = /* @__PURE__ */ new Map();
  let maxGroup = 0;
  for (const group of allGroups) {
    groupCount.set(group, (groupCount.get(group) ?? 0) + 1);
    if (groupCount.get(group) > maxGroup) {
      maxGroup = groupCount.get(group);
    }
  }
  return maxGroup === elements.length;
};
var isInGroup = (element) => {
  return element.groupIds.length > 0;
};

// snapping.ts
var SNAP_DISTANCE = 8;
var VISIBLE_GAPS_LIMIT_PER_AXIS = 99999;
var getSnapDistance = (zoomValue) => {
  return SNAP_DISTANCE / zoomValue;
};
var SnapCache = class _SnapCache {
  static referenceSnapPoints = null;
  static visibleGaps = null;
  static setReferenceSnapPoints = (snapPoints) => {
    _SnapCache.referenceSnapPoints = snapPoints;
  };
  static getReferenceSnapPoints = () => {
    return _SnapCache.referenceSnapPoints;
  };
  static setVisibleGaps = (gaps) => {
    _SnapCache.visibleGaps = gaps;
  };
  static getVisibleGaps = () => {
    return _SnapCache.visibleGaps;
  };
  static destroy = () => {
    _SnapCache.referenceSnapPoints = null;
    _SnapCache.visibleGaps = null;
  };
};
var isGridModeEnabled = (app) => app.props.gridModeEnabled ?? app.state.gridModeEnabled;
var isSnappingEnabled = ({
  event,
  app,
  selectedElements
}) => {
  if (event) {
    return app.state.objectsSnapModeEnabled && !event[KEYS.CTRL_OR_CMD] || !app.state.objectsSnapModeEnabled && event[KEYS.CTRL_OR_CMD] && !isGridModeEnabled(app);
  }
  if (selectedElements.length === 1 && selectedElements[0].type === "arrow") {
    return false;
  }
  return app.state.objectsSnapModeEnabled;
};
var areRoughlyEqual = (a2, b2, precision = 0.01) => {
  return Math.abs(a2 - b2) <= precision;
};
var getElementsCorners = (elements, elementsMap, {
  omitCenter,
  boundingBoxCorners,
  dragOffset
} = {
  omitCenter: false,
  boundingBoxCorners: false
}) => {
  let result = [];
  if (elements.length === 1) {
    const element = elements[0];
    let [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
      element,
      elementsMap
    );
    if (dragOffset) {
      x1 += dragOffset.x;
      x2 += dragOffset.x;
      cx += dragOffset.x;
      y1 += dragOffset.y;
      y2 += dragOffset.y;
      cy += dragOffset.y;
    }
    const halfWidth = (x2 - x1) / 2;
    const halfHeight = (y2 - y1) / 2;
    if ((element.type === "diamond" || element.type === "ellipse") && !boundingBoxCorners) {
      const leftMid = pointRotateRads(
        pointFrom(x1, y1 + halfHeight),
        pointFrom(cx, cy),
        element.angle
      );
      const topMid = pointRotateRads(
        pointFrom(x1 + halfWidth, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const rightMid = pointRotateRads(
        pointFrom(x2, y1 + halfHeight),
        pointFrom(cx, cy),
        element.angle
      );
      const bottomMid = pointRotateRads(
        pointFrom(x1 + halfWidth, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const center = pointFrom(cx, cy);
      result = omitCenter ? [leftMid, topMid, rightMid, bottomMid] : [leftMid, topMid, rightMid, bottomMid, center];
    } else {
      const topLeft = pointRotateRads(
        pointFrom(x1, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const topRight = pointRotateRads(
        pointFrom(x2, y1),
        pointFrom(cx, cy),
        element.angle
      );
      const bottomLeft = pointRotateRads(
        pointFrom(x1, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const bottomRight = pointRotateRads(
        pointFrom(x2, y2),
        pointFrom(cx, cy),
        element.angle
      );
      const center = pointFrom(cx, cy);
      result = omitCenter ? [topLeft, topRight, bottomLeft, bottomRight] : [topLeft, topRight, bottomLeft, bottomRight, center];
    }
  } else if (elements.length > 1) {
    const [minX, minY, maxX, maxY] = getDraggedElementsBounds(
      elements,
      dragOffset ?? { x: 0, y: 0 }
    );
    const width = maxX - minX;
    const height = maxY - minY;
    const topLeft = pointFrom(minX, minY);
    const topRight = pointFrom(maxX, minY);
    const bottomLeft = pointFrom(minX, maxY);
    const bottomRight = pointFrom(maxX, maxY);
    const center = pointFrom(minX + width / 2, minY + height / 2);
    result = omitCenter ? [topLeft, topRight, bottomLeft, bottomRight] : [topLeft, topRight, bottomLeft, bottomRight, center];
  }
  return result.map((p) => pointFrom(round2(p[0]), round2(p[1])));
};
var getReferenceElements = (elements, selectedElements, appState, elementsMap) => {
  const selectedFrames = selectedElements.filter((element) => isFrameLikeElement(element)).map((frame) => frame.id);
  return getVisibleAndNonSelectedElements(
    elements,
    selectedElements,
    appState,
    elementsMap
  ).filter(
    (element) => !(element.frameId && selectedFrames.includes(element.frameId))
  );
};
var getVisibleGaps = (elements, selectedElements, appState, elementsMap) => {
  const referenceElements = getReferenceElements(
    elements,
    selectedElements,
    appState,
    elementsMap
  );
  const referenceBounds = getMaximumGroups(referenceElements, elementsMap).filter(
    (elementsGroup) => !(elementsGroup.length === 1 && isBoundToContainer(elementsGroup[0]))
  ).map(
    (group) => getCommonBounds(group).map(
      (bound) => round2(bound)
    )
  );
  const horizontallySorted = referenceBounds.sort((a2, b2) => a2[0] - b2[0]);
  const horizontalGaps = [];
  let c = 0;
  horizontal:
    for (let i2 = 0; i2 < horizontallySorted.length; i2++) {
      const startBounds = horizontallySorted[i2];
      for (let j = i2 + 1; j < horizontallySorted.length; j++) {
        if (++c > VISIBLE_GAPS_LIMIT_PER_AXIS) {
          break horizontal;
        }
        const endBounds = horizontallySorted[j];
        const [, startMinY, startMaxX, startMaxY] = startBounds;
        const [endMinX, endMinY, , endMaxY] = endBounds;
        if (startMaxX < endMinX && rangesOverlap(
          rangeInclusive(startMinY, startMaxY),
          rangeInclusive(endMinY, endMaxY)
        )) {
          horizontalGaps.push({
            startBounds,
            endBounds,
            startSide: [
              pointFrom(startMaxX, startMinY),
              pointFrom(startMaxX, startMaxY)
            ],
            endSide: [pointFrom(endMinX, endMinY), pointFrom(endMinX, endMaxY)],
            length: endMinX - startMaxX,
            overlap: rangeIntersection(
              rangeInclusive(startMinY, startMaxY),
              rangeInclusive(endMinY, endMaxY)
            )
          });
        }
      }
    }
  const verticallySorted = referenceBounds.sort((a2, b2) => a2[1] - b2[1]);
  const verticalGaps = [];
  c = 0;
  vertical:
    for (let i2 = 0; i2 < verticallySorted.length; i2++) {
      const startBounds = verticallySorted[i2];
      for (let j = i2 + 1; j < verticallySorted.length; j++) {
        if (++c > VISIBLE_GAPS_LIMIT_PER_AXIS) {
          break vertical;
        }
        const endBounds = verticallySorted[j];
        const [startMinX, , startMaxX, startMaxY] = startBounds;
        const [endMinX, endMinY, endMaxX] = endBounds;
        if (startMaxY < endMinY && rangesOverlap(
          rangeInclusive(startMinX, startMaxX),
          rangeInclusive(endMinX, endMaxX)
        )) {
          verticalGaps.push({
            startBounds,
            endBounds,
            startSide: [
              pointFrom(startMinX, startMaxY),
              pointFrom(startMaxX, startMaxY)
            ],
            endSide: [pointFrom(endMinX, endMinY), pointFrom(endMaxX, endMinY)],
            length: endMinY - startMaxY,
            overlap: rangeIntersection(
              rangeInclusive(startMinX, startMaxX),
              rangeInclusive(endMinX, endMaxX)
            )
          });
        }
      }
    }
  return {
    horizontalGaps,
    verticalGaps
  };
};
var getGapSnaps = (selectedElements, dragOffset, app, event, nearestSnapsX, nearestSnapsY, minOffset) => {
  if (!isSnappingEnabled({ app, event, selectedElements })) {
    return [];
  }
  if (selectedElements.length === 0) {
    return [];
  }
  const visibleGaps = SnapCache.getVisibleGaps();
  if (visibleGaps) {
    const { horizontalGaps, verticalGaps } = visibleGaps;
    const [minX, minY, maxX, maxY] = getDraggedElementsBounds(
      selectedElements,
      dragOffset
    ).map((bound) => round2(bound));
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    for (const gap of horizontalGaps) {
      if (!rangesOverlap(rangeInclusive(minY, maxY), gap.overlap)) {
        continue;
      }
      const gapMidX = gap.startSide[0][0] + gap.length / 2;
      const centerOffset = round2(gapMidX - centerX);
      const gapIsLargerThanSelection = gap.length > maxX - minX;
      if (gapIsLargerThanSelection && Math.abs(centerOffset) <= minOffset.x) {
        if (Math.abs(centerOffset) < minOffset.x) {
          nearestSnapsX.length = 0;
        }
        minOffset.x = Math.abs(centerOffset);
        const snap = {
          type: "gap",
          direction: "center_horizontal",
          gap,
          offset: centerOffset
        };
        nearestSnapsX.push(snap);
        continue;
      }
      const [, , endMaxX] = gap.endBounds;
      const distanceToEndElementX = minX - endMaxX;
      const sideOffsetRight = round2(gap.length - distanceToEndElementX);
      if (Math.abs(sideOffsetRight) <= minOffset.x) {
        if (Math.abs(sideOffsetRight) < minOffset.x) {
          nearestSnapsX.length = 0;
        }
        minOffset.x = Math.abs(sideOffsetRight);
        const snap = {
          type: "gap",
          direction: "side_right",
          gap,
          offset: sideOffsetRight
        };
        nearestSnapsX.push(snap);
        continue;
      }
      const [startMinX, , ,] = gap.startBounds;
      const distanceToStartElementX = startMinX - maxX;
      const sideOffsetLeft = round2(distanceToStartElementX - gap.length);
      if (Math.abs(sideOffsetLeft) <= minOffset.x) {
        if (Math.abs(sideOffsetLeft) < minOffset.x) {
          nearestSnapsX.length = 0;
        }
        minOffset.x = Math.abs(sideOffsetLeft);
        const snap = {
          type: "gap",
          direction: "side_left",
          gap,
          offset: sideOffsetLeft
        };
        nearestSnapsX.push(snap);
        continue;
      }
    }
    for (const gap of verticalGaps) {
      if (!rangesOverlap(rangeInclusive(minX, maxX), gap.overlap)) {
        continue;
      }
      const gapMidY = gap.startSide[0][1] + gap.length / 2;
      const centerOffset = round2(gapMidY - centerY);
      const gapIsLargerThanSelection = gap.length > maxY - minY;
      if (gapIsLargerThanSelection && Math.abs(centerOffset) <= minOffset.y) {
        if (Math.abs(centerOffset) < minOffset.y) {
          nearestSnapsY.length = 0;
        }
        minOffset.y = Math.abs(centerOffset);
        const snap = {
          type: "gap",
          direction: "center_vertical",
          gap,
          offset: centerOffset
        };
        nearestSnapsY.push(snap);
        continue;
      }
      const [, startMinY, ,] = gap.startBounds;
      const distanceToStartElementY = startMinY - maxY;
      const sideOffsetTop = round2(distanceToStartElementY - gap.length);
      if (Math.abs(sideOffsetTop) <= minOffset.y) {
        if (Math.abs(sideOffsetTop) < minOffset.y) {
          nearestSnapsY.length = 0;
        }
        minOffset.y = Math.abs(sideOffsetTop);
        const snap = {
          type: "gap",
          direction: "side_top",
          gap,
          offset: sideOffsetTop
        };
        nearestSnapsY.push(snap);
        continue;
      }
      const [, , , endMaxY] = gap.endBounds;
      const distanceToEndElementY = round2(minY - endMaxY);
      const sideOffsetBottom = gap.length - distanceToEndElementY;
      if (Math.abs(sideOffsetBottom) <= minOffset.y) {
        if (Math.abs(sideOffsetBottom) < minOffset.y) {
          nearestSnapsY.length = 0;
        }
        minOffset.y = Math.abs(sideOffsetBottom);
        const snap = {
          type: "gap",
          direction: "side_bottom",
          gap,
          offset: sideOffsetBottom
        };
        nearestSnapsY.push(snap);
        continue;
      }
    }
  }
};
var getReferenceSnapPoints = (elements, selectedElements, appState, elementsMap) => {
  const referenceElements = getReferenceElements(
    elements,
    selectedElements,
    appState,
    elementsMap
  );
  return getMaximumGroups(referenceElements, elementsMap).filter(
    (elementsGroup) => !(elementsGroup.length === 1 && isBoundToContainer(elementsGroup[0]))
  ).flatMap((elementGroup) => getElementsCorners(elementGroup, elementsMap));
};
var getPointSnaps = (selectedElements, selectionSnapPoints, app, event, nearestSnapsX, nearestSnapsY, minOffset) => {
  if (!isSnappingEnabled({ app, event, selectedElements }) || selectedElements.length === 0 && selectionSnapPoints.length === 0) {
    return [];
  }
  const referenceSnapPoints = SnapCache.getReferenceSnapPoints();
  if (referenceSnapPoints) {
    for (const thisSnapPoint of selectionSnapPoints) {
      for (const otherSnapPoint of referenceSnapPoints) {
        const offsetX = otherSnapPoint[0] - thisSnapPoint[0];
        const offsetY = otherSnapPoint[1] - thisSnapPoint[1];
        if (Math.abs(offsetX) <= minOffset.x) {
          if (Math.abs(offsetX) < minOffset.x) {
            nearestSnapsX.length = 0;
          }
          nearestSnapsX.push({
            type: "point",
            points: [thisSnapPoint, otherSnapPoint],
            offset: offsetX
          });
          minOffset.x = Math.abs(offsetX);
        }
        if (Math.abs(offsetY) <= minOffset.y) {
          if (Math.abs(offsetY) < minOffset.y) {
            nearestSnapsY.length = 0;
          }
          nearestSnapsY.push({
            type: "point",
            points: [thisSnapPoint, otherSnapPoint],
            offset: offsetY
          });
          minOffset.y = Math.abs(offsetY);
        }
      }
    }
  }
};
var snapDraggedElements = (elements, dragOffset, app, event, elementsMap) => {
  const appState = app.state;
  const selectedElements = getSelectedElements(elements, appState);
  if (!isSnappingEnabled({ app, event, selectedElements }) || selectedElements.length === 0) {
    return {
      snapOffset: {
        x: 0,
        y: 0
      },
      snapLines: []
    };
  }
  dragOffset.x = round2(dragOffset.x);
  dragOffset.y = round2(dragOffset.y);
  const nearestSnapsX = [];
  const nearestSnapsY = [];
  const snapDistance = getSnapDistance(appState.zoom.value);
  const minOffset = {
    x: snapDistance,
    y: snapDistance
  };
  const selectionPoints = getElementsCorners(selectedElements, elementsMap, {
    dragOffset
  });
  getPointSnaps(
    selectedElements,
    selectionPoints,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  getGapSnaps(
    selectedElements,
    dragOffset,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  const snapOffset = {
    x: nearestSnapsX[0]?.offset ?? 0,
    y: nearestSnapsY[0]?.offset ?? 0
  };
  minOffset.x = 0;
  minOffset.y = 0;
  nearestSnapsX.length = 0;
  nearestSnapsY.length = 0;
  const newDragOffset = {
    x: round2(dragOffset.x + snapOffset.x),
    y: round2(dragOffset.y + snapOffset.y)
  };
  getPointSnaps(
    selectedElements,
    getElementsCorners(selectedElements, elementsMap, {
      dragOffset: newDragOffset
    }),
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  getGapSnaps(
    selectedElements,
    newDragOffset,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  const pointSnapLines = createPointSnapLines(nearestSnapsX, nearestSnapsY);
  const gapSnapLines = createGapSnapLines(
    selectedElements,
    newDragOffset,
    [...nearestSnapsX, ...nearestSnapsY].filter(
      (snap) => snap.type === "gap"
    )
  );
  return {
    snapOffset,
    snapLines: [...pointSnapLines, ...gapSnapLines]
  };
};
var round2 = (x) => {
  const decimalPlaces = 6;
  return Math.round(x * 10 ** decimalPlaces) / 10 ** decimalPlaces;
};
var dedupePoints = (points) => {
  const map = /* @__PURE__ */ new Map();
  for (const point2 of points) {
    const key = point2.join(",");
    if (!map.has(key)) {
      map.set(key, point2);
    }
  }
  return Array.from(map.values());
};
var createPointSnapLines = (nearestSnapsX, nearestSnapsY) => {
  const snapsX = {};
  const snapsY = {};
  if (nearestSnapsX.length > 0) {
    for (const snap of nearestSnapsX) {
      if (snap.type === "point") {
        const key = round2(snap.points[0][0]);
        if (!snapsX[key]) {
          snapsX[key] = [];
        }
        snapsX[key].push(
          ...snap.points.map(
            (p) => pointFrom(round2(p[0]), round2(p[1]))
          )
        );
      }
    }
  }
  if (nearestSnapsY.length > 0) {
    for (const snap of nearestSnapsY) {
      if (snap.type === "point") {
        const key = round2(snap.points[0][1]);
        if (!snapsY[key]) {
          snapsY[key] = [];
        }
        snapsY[key].push(
          ...snap.points.map(
            (p) => pointFrom(round2(p[0]), round2(p[1]))
          )
        );
      }
    }
  }
  return Object.entries(snapsX).map(([key, points]) => {
    return {
      type: "points",
      points: dedupePoints(
        points.map((p) => {
          return pointFrom(Number(key), p[1]);
        }).sort((a2, b2) => a2[1] - b2[1])
      )
    };
  }).concat(
    Object.entries(snapsY).map(([key, points]) => {
      return {
        type: "points",
        points: dedupePoints(
          points.map((p) => {
            return pointFrom(p[0], Number(key));
          }).sort((a2, b2) => a2[0] - b2[0])
        )
      };
    })
  );
};
var dedupeGapSnapLines = (gapSnapLines) => {
  const map = /* @__PURE__ */ new Map();
  for (const gapSnapLine of gapSnapLines) {
    const key = gapSnapLine.points.flat().map((point2) => [round2(point2)]).join(",");
    if (!map.has(key)) {
      map.set(key, gapSnapLine);
    }
  }
  return Array.from(map.values());
};
var createGapSnapLines = (selectedElements, dragOffset, gapSnaps) => {
  const [minX, minY, maxX, maxY] = getDraggedElementsBounds(
    selectedElements,
    dragOffset
  );
  const gapSnapLines = [];
  for (const gapSnap of gapSnaps) {
    const [startMinX, startMinY, startMaxX, startMaxY] = gapSnap.gap.startBounds;
    const [endMinX, endMinY, endMaxX, endMaxY] = gapSnap.gap.endBounds;
    const verticalIntersection = rangeIntersection(
      rangeInclusive(minY, maxY),
      gapSnap.gap.overlap
    );
    const horizontalGapIntersection = rangeIntersection(
      rangeInclusive(minX, maxX),
      gapSnap.gap.overlap
    );
    switch (gapSnap.direction) {
      case "center_horizontal": {
        if (verticalIntersection) {
          const gapLineY = (verticalIntersection[0] + verticalIntersection[1]) / 2;
          gapSnapLines.push(
            {
              type: "gap",
              direction: "horizontal",
              points: [
                pointFrom(gapSnap.gap.startSide[0][0], gapLineY),
                pointFrom(minX, gapLineY)
              ]
            },
            {
              type: "gap",
              direction: "horizontal",
              points: [
                pointFrom(maxX, gapLineY),
                pointFrom(gapSnap.gap.endSide[0][0], gapLineY)
              ]
            }
          );
        }
        break;
      }
      case "center_vertical": {
        if (horizontalGapIntersection) {
          const gapLineX = (horizontalGapIntersection[0] + horizontalGapIntersection[1]) / 2;
          gapSnapLines.push(
            {
              type: "gap",
              direction: "vertical",
              points: [
                pointFrom(gapLineX, gapSnap.gap.startSide[0][1]),
                pointFrom(gapLineX, minY)
              ]
            },
            {
              type: "gap",
              direction: "vertical",
              points: [
                pointFrom(gapLineX, maxY),
                pointFrom(gapLineX, gapSnap.gap.endSide[0][1])
              ]
            }
          );
        }
        break;
      }
      case "side_right": {
        if (verticalIntersection) {
          const gapLineY = (verticalIntersection[0] + verticalIntersection[1]) / 2;
          gapSnapLines.push(
            {
              type: "gap",
              direction: "horizontal",
              points: [
                pointFrom(startMaxX, gapLineY),
                pointFrom(endMinX, gapLineY)
              ]
            },
            {
              type: "gap",
              direction: "horizontal",
              points: [pointFrom(endMaxX, gapLineY), pointFrom(minX, gapLineY)]
            }
          );
        }
        break;
      }
      case "side_left": {
        if (verticalIntersection) {
          const gapLineY = (verticalIntersection[0] + verticalIntersection[1]) / 2;
          gapSnapLines.push(
            {
              type: "gap",
              direction: "horizontal",
              points: [
                pointFrom(maxX, gapLineY),
                pointFrom(startMinX, gapLineY)
              ]
            },
            {
              type: "gap",
              direction: "horizontal",
              points: [
                pointFrom(startMaxX, gapLineY),
                pointFrom(endMinX, gapLineY)
              ]
            }
          );
        }
        break;
      }
      case "side_top": {
        if (horizontalGapIntersection) {
          const gapLineX = (horizontalGapIntersection[0] + horizontalGapIntersection[1]) / 2;
          gapSnapLines.push(
            {
              type: "gap",
              direction: "vertical",
              points: [
                pointFrom(gapLineX, maxY),
                pointFrom(gapLineX, startMinY)
              ]
            },
            {
              type: "gap",
              direction: "vertical",
              points: [
                pointFrom(gapLineX, startMaxY),
                pointFrom(gapLineX, endMinY)
              ]
            }
          );
        }
        break;
      }
      case "side_bottom": {
        if (horizontalGapIntersection) {
          const gapLineX = (horizontalGapIntersection[0] + horizontalGapIntersection[1]) / 2;
          gapSnapLines.push(
            {
              type: "gap",
              direction: "vertical",
              points: [
                pointFrom(gapLineX, startMaxY),
                pointFrom(gapLineX, endMinY)
              ]
            },
            {
              type: "gap",
              direction: "vertical",
              points: [pointFrom(gapLineX, endMaxY), pointFrom(gapLineX, minY)]
            }
          );
        }
        break;
      }
    }
  }
  return dedupeGapSnapLines(
    gapSnapLines.map((gapSnapLine) => {
      return {
        ...gapSnapLine,
        points: gapSnapLine.points.map(
          (p) => pointFrom(round2(p[0]), round2(p[1]))
        )
      };
    })
  );
};
var snapResizingElements = (selectedElements, selectedOriginalElements, app, event, dragOffset, transformHandle) => {
  if (!isSnappingEnabled({ event, selectedElements, app }) || selectedElements.length === 0 || selectedElements.length === 1 && !areRoughlyEqual(selectedElements[0].angle, 0)) {
    return {
      snapOffset: { x: 0, y: 0 },
      snapLines: []
    };
  }
  let [minX, minY, maxX, maxY] = getCommonBounds(selectedOriginalElements);
  if (transformHandle) {
    if (transformHandle.includes("e")) {
      maxX += dragOffset.x;
    } else if (transformHandle.includes("w")) {
      minX += dragOffset.x;
    }
    if (transformHandle.includes("n")) {
      minY += dragOffset.y;
    } else if (transformHandle.includes("s")) {
      maxY += dragOffset.y;
    }
  }
  const selectionSnapPoints = [];
  if (transformHandle) {
    switch (transformHandle) {
      case "e": {
        selectionSnapPoints.push(pointFrom(maxX, minY), pointFrom(maxX, maxY));
        break;
      }
      case "w": {
        selectionSnapPoints.push(pointFrom(minX, minY), pointFrom(minX, maxY));
        break;
      }
      case "n": {
        selectionSnapPoints.push(pointFrom(minX, minY), pointFrom(maxX, minY));
        break;
      }
      case "s": {
        selectionSnapPoints.push(pointFrom(minX, maxY), pointFrom(maxX, maxY));
        break;
      }
      case "ne": {
        selectionSnapPoints.push(pointFrom(maxX, minY));
        break;
      }
      case "nw": {
        selectionSnapPoints.push(pointFrom(minX, minY));
        break;
      }
      case "se": {
        selectionSnapPoints.push(pointFrom(maxX, maxY));
        break;
      }
      case "sw": {
        selectionSnapPoints.push(pointFrom(minX, maxY));
        break;
      }
    }
  }
  const snapDistance = getSnapDistance(app.state.zoom.value);
  const minOffset = {
    x: snapDistance,
    y: snapDistance
  };
  const nearestSnapsX = [];
  const nearestSnapsY = [];
  getPointSnaps(
    selectedOriginalElements,
    selectionSnapPoints,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  const snapOffset = {
    x: nearestSnapsX[0]?.offset ?? 0,
    y: nearestSnapsY[0]?.offset ?? 0
  };
  minOffset.x = 0;
  minOffset.y = 0;
  nearestSnapsX.length = 0;
  nearestSnapsY.length = 0;
  const [x1, y1, x2, y2] = getCommonBounds(selectedElements).map(
    (bound) => round2(bound)
  );
  const corners = [
    pointFrom(x1, y1),
    pointFrom(x1, y2),
    pointFrom(x2, y1),
    pointFrom(x2, y2)
  ];
  getPointSnaps(
    selectedElements,
    corners,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  const pointSnapLines = createPointSnapLines(nearestSnapsX, nearestSnapsY);
  return {
    snapOffset,
    snapLines: pointSnapLines
  };
};
var snapNewElement = (newElement2, app, event, origin, dragOffset, elementsMap) => {
  if (!isSnappingEnabled({ event, selectedElements: [newElement2], app })) {
    return {
      snapOffset: { x: 0, y: 0 },
      snapLines: []
    };
  }
  const selectionSnapPoints = [
    pointFrom(origin.x + dragOffset.x, origin.y + dragOffset.y)
  ];
  const snapDistance = getSnapDistance(app.state.zoom.value);
  const minOffset = {
    x: snapDistance,
    y: snapDistance
  };
  const nearestSnapsX = [];
  const nearestSnapsY = [];
  getPointSnaps(
    [newElement2],
    selectionSnapPoints,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  const snapOffset = {
    x: nearestSnapsX[0]?.offset ?? 0,
    y: nearestSnapsY[0]?.offset ?? 0
  };
  minOffset.x = 0;
  minOffset.y = 0;
  nearestSnapsX.length = 0;
  nearestSnapsY.length = 0;
  const corners = getElementsCorners([newElement2], elementsMap, {
    boundingBoxCorners: true,
    omitCenter: true
  });
  getPointSnaps(
    [newElement2],
    corners,
    app,
    event,
    nearestSnapsX,
    nearestSnapsY,
    minOffset
  );
  const pointSnapLines = createPointSnapLines(nearestSnapsX, nearestSnapsY);
  return {
    snapOffset,
    snapLines: pointSnapLines
  };
};
var getSnapLinesAtPointer = (elements, app, pointer, event, elementsMap) => {
  if (!isSnappingEnabled({ event, selectedElements: [], app })) {
    return {
      originOffset: { x: 0, y: 0 },
      snapLines: []
    };
  }
  const referenceElements = getVisibleAndNonSelectedElements(
    elements,
    [],
    app.state,
    elementsMap
  );
  const snapDistance = getSnapDistance(app.state.zoom.value);
  const minOffset = {
    x: snapDistance,
    y: snapDistance
  };
  const horizontalSnapLines = [];
  const verticalSnapLines = [];
  for (const referenceElement of referenceElements) {
    const corners = getElementsCorners([referenceElement], elementsMap);
    for (const corner of corners) {
      const offsetX = corner[0] - pointer.x;
      if (Math.abs(offsetX) <= Math.abs(minOffset.x)) {
        if (Math.abs(offsetX) < Math.abs(minOffset.x)) {
          verticalSnapLines.length = 0;
        }
        verticalSnapLines.push({
          type: "pointer",
          points: [corner, pointFrom(corner[0], pointer.y)],
          direction: "vertical"
        });
        minOffset.x = offsetX;
      }
      const offsetY = corner[1] - pointer.y;
      if (Math.abs(offsetY) <= Math.abs(minOffset.y)) {
        if (Math.abs(offsetY) < Math.abs(minOffset.y)) {
          horizontalSnapLines.length = 0;
        }
        horizontalSnapLines.push({
          type: "pointer",
          points: [corner, pointFrom(pointer.x, corner[1])],
          direction: "horizontal"
        });
        minOffset.y = offsetY;
      }
    }
  }
  return {
    originOffset: {
      x: verticalSnapLines.length > 0 ? verticalSnapLines[0].points[0][0] - pointer.x : 0,
      y: horizontalSnapLines.length > 0 ? horizontalSnapLines[0].points[0][1] - pointer.y : 0
    },
    snapLines: [...verticalSnapLines, ...horizontalSnapLines]
  };
};
var isActiveToolNonLinearSnappable = (activeToolType) => {
  return activeToolType === TOOL_TYPE.rectangle || activeToolType === TOOL_TYPE.ellipse || activeToolType === TOOL_TYPE.diamond || activeToolType === TOOL_TYPE.frame || activeToolType === TOOL_TYPE.magicframe || activeToolType === TOOL_TYPE.image || activeToolType === TOOL_TYPE.text;
};
var getGridPoint = (x, y, gridSize) => {
  if (gridSize) {
    return [
      Math.round(x / gridSize) * gridSize,
      Math.round(y / gridSize) * gridSize
    ];
  }
  return [x, y];
};

// element/linearElementEditor.ts
var editorMidPointsCache = { version: null, points: [], zoom: null };
var LinearElementEditor = class _LinearElementEditor {
  elementId;
  /** indices */
  selectedPointsIndices;
  pointerDownState;
  /** whether you're dragging a point */
  isDragging;
  lastUncommittedPoint;
  pointerOffset;
  startBindingElement;
  endBindingElement;
  hoverPointIndex;
  segmentMidPointHoveredCoords;
  elbowed;
  constructor(element) {
    this.elementId = element.id;
    if (!pointsEqual(element.points[0], pointFrom(0, 0))) {
      console.error("Linear element is not normalized", Error().stack);
    }
    this.selectedPointsIndices = null;
    this.lastUncommittedPoint = null;
    this.isDragging = false;
    this.pointerOffset = { x: 0, y: 0 };
    this.startBindingElement = "keep";
    this.endBindingElement = "keep";
    this.pointerDownState = {
      prevSelectedPointsIndices: null,
      lastClickedPoint: -1,
      lastClickedIsEndPoint: false,
      origin: null,
      segmentMidpoint: {
        value: null,
        index: null,
        added: false
      }
    };
    this.hoverPointIndex = -1;
    this.segmentMidPointHoveredCoords = null;
    this.elbowed = isElbowArrow(element) && element.elbowed;
  }
  // ---------------------------------------------------------------------------
  // static methods
  // ---------------------------------------------------------------------------
  static POINT_HANDLE_SIZE = 10;
  /**
   * @param id the `elementId` from the instance of this class (so that we can
   *  statically guarantee this method returns an ExcalidrawLinearElement)
   */
  static getElement(id, elementsMap) {
    const element = elementsMap.get(id);
    if (element) {
      return element;
    }
    return null;
  }
  static handleBoxSelection(event, appState, setState, elementsMap) {
    if (!appState.editingLinearElement || !appState.selectionElement) {
      return false;
    }
    const { editingLinearElement } = appState;
    const { selectedPointsIndices, elementId } = editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return false;
    }
    const [selectionX1, selectionY1, selectionX2, selectionY2] = getElementAbsoluteCoords(appState.selectionElement, elementsMap);
    const pointsSceneCoords = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    const nextSelectedPoints = pointsSceneCoords.reduce((acc, point2, index) => {
      if (point2[0] >= selectionX1 && point2[0] <= selectionX2 && point2[1] >= selectionY1 && point2[1] <= selectionY2 || event.shiftKey && selectedPointsIndices?.includes(index)) {
        acc.push(index);
      }
      return acc;
    }, []).filter((index) => {
      if (isElbowArrow(element) && index !== 0 && index !== element.points.length - 1) {
        return false;
      }
      return true;
    });
    setState({
      editingLinearElement: {
        ...editingLinearElement,
        selectedPointsIndices: nextSelectedPoints.length ? nextSelectedPoints : null
      }
    });
  }
  /** @returns whether point was dragged */
  static handlePointDragging(event, app, scenePointerX, scenePointerY, maybeSuggestBinding, linearElementEditor, scene) {
    if (!linearElementEditor) {
      return false;
    }
    const { elementId } = linearElementEditor;
    const elementsMap = scene.getNonDeletedElementsMap();
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return false;
    }
    if (isElbowArrow(element) && !linearElementEditor.pointerDownState.lastClickedIsEndPoint && linearElementEditor.pointerDownState.lastClickedPoint !== 0) {
      return false;
    }
    const selectedPointsIndices = isElbowArrow(element) ? linearElementEditor.selectedPointsIndices?.reduce(
      (startEnd, index) => index === 0 ? [0, startEnd[1]] : [startEnd[0], element.points.length - 1],
      [false, false]
    ).filter(
      (idx) => typeof idx === "number"
    ) : linearElementEditor.selectedPointsIndices;
    const lastClickedPoint = isElbowArrow(element) ? linearElementEditor.pointerDownState.lastClickedPoint > 0 ? element.points.length - 1 : 0 : linearElementEditor.pointerDownState.lastClickedPoint;
    const draggingPoint = element.points[lastClickedPoint];
    if (selectedPointsIndices && draggingPoint) {
      if (shouldRotateWithDiscreteAngle(event) && selectedPointsIndices.length === 1 && element.points.length > 1) {
        const selectedIndex = selectedPointsIndices[0];
        const referencePoint = element.points[selectedIndex === 0 ? 1 : selectedIndex - 1];
        const [width, height] = _LinearElementEditor._getShiftLockedDelta(
          element,
          elementsMap,
          referencePoint,
          pointFrom(scenePointerX, scenePointerY),
          event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
        );
        _LinearElementEditor.movePoints(
          element,
          [
            {
              index: selectedIndex,
              point: pointFrom(
                width + referencePoint[0],
                height + referencePoint[1]
              ),
              isDragging: selectedIndex === lastClickedPoint
            }
          ],
          elementsMap
        );
      } else {
        const newDraggingPointPosition = _LinearElementEditor.createPointAt(
          element,
          elementsMap,
          scenePointerX - linearElementEditor.pointerOffset.x,
          scenePointerY - linearElementEditor.pointerOffset.y,
          event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
        );
        const deltaX = newDraggingPointPosition[0] - draggingPoint[0];
        const deltaY = newDraggingPointPosition[1] - draggingPoint[1];
        _LinearElementEditor.movePoints(
          element,
          selectedPointsIndices.map((pointIndex) => {
            const newPointPosition = pointIndex === lastClickedPoint ? _LinearElementEditor.createPointAt(
              element,
              elementsMap,
              scenePointerX - linearElementEditor.pointerOffset.x,
              scenePointerY - linearElementEditor.pointerOffset.y,
              event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
            ) : pointFrom(
              element.points[pointIndex][0] + deltaX,
              element.points[pointIndex][1] + deltaY
            );
            return {
              index: pointIndex,
              point: newPointPosition,
              isDragging: pointIndex === lastClickedPoint
            };
          }),
          elementsMap
        );
      }
      const boundTextElement = getBoundTextElement(element, elementsMap);
      if (boundTextElement) {
        handleBindTextResize(element, elementsMap, false);
      }
      if (isBindingElement(element, false)) {
        const coords = [];
        const firstSelectedIndex = selectedPointsIndices[0];
        if (firstSelectedIndex === 0) {
          coords.push(
            tupleToCoors(
              _LinearElementEditor.getPointGlobalCoordinates(
                element,
                element.points[0],
                elementsMap
              )
            )
          );
        }
        const lastSelectedIndex = selectedPointsIndices[selectedPointsIndices.length - 1];
        if (lastSelectedIndex === element.points.length - 1) {
          coords.push(
            tupleToCoors(
              _LinearElementEditor.getPointGlobalCoordinates(
                element,
                element.points[lastSelectedIndex],
                elementsMap
              )
            )
          );
        }
        if (coords.length) {
          maybeSuggestBinding(element, coords);
        }
      }
      return true;
    }
    return false;
  }
  static handlePointerUp(event, editingLinearElement, appState, scene) {
    const elementsMap = scene.getNonDeletedElementsMap();
    const elements = scene.getNonDeletedElements();
    const { elementId, selectedPointsIndices, isDragging, pointerDownState } = editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return editingLinearElement;
    }
    const bindings = {};
    if (isDragging && selectedPointsIndices) {
      for (const selectedPoint of selectedPointsIndices) {
        if (selectedPoint === 0 || selectedPoint === element.points.length - 1) {
          if (isPathALoop(element.points, appState.zoom.value)) {
            _LinearElementEditor.movePoints(
              element,
              [
                {
                  index: selectedPoint,
                  point: selectedPoint === 0 ? element.points[element.points.length - 1] : element.points[0]
                }
              ],
              elementsMap
            );
          }
          const bindingElement = isBindingEnabled(appState) ? getHoveredElementForBinding(
            tupleToCoors(
              _LinearElementEditor.getPointAtIndexGlobalCoordinates(
                element,
                selectedPoint,
                elementsMap
              )
            ),
            elements,
            elementsMap
          ) : null;
          bindings[selectedPoint === 0 ? "startBindingElement" : "endBindingElement"] = bindingElement;
        }
      }
    }
    return {
      ...editingLinearElement,
      ...bindings,
      // if clicking without previously dragging a point(s), and not holding
      // shift, deselect all points except the one clicked. If holding shift,
      // toggle the point.
      selectedPointsIndices: isDragging || event.shiftKey ? !isDragging && event.shiftKey && pointerDownState.prevSelectedPointsIndices?.includes(
        pointerDownState.lastClickedPoint
      ) ? selectedPointsIndices && selectedPointsIndices.filter(
        (pointIndex) => pointIndex !== pointerDownState.lastClickedPoint
      ) : selectedPointsIndices : selectedPointsIndices?.includes(pointerDownState.lastClickedPoint) ? [pointerDownState.lastClickedPoint] : selectedPointsIndices,
      isDragging: false,
      pointerOffset: { x: 0, y: 0 }
    };
  }
  static getEditorMidPoints = (element, elementsMap, appState) => {
    const boundText = getBoundTextElement(element, elementsMap);
    if (!appState.editingLinearElement && element.points.length > 2 && !boundText) {
      return [];
    }
    if (editorMidPointsCache.version === element.version && editorMidPointsCache.zoom === appState.zoom.value) {
      return editorMidPointsCache.points;
    }
    _LinearElementEditor.updateEditorMidPointsCache(
      element,
      elementsMap,
      appState
    );
    return editorMidPointsCache.points;
  };
  static updateEditorMidPointsCache = (element, elementsMap, appState) => {
    const points = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    let index = 0;
    const midpoints = [];
    while (index < points.length - 1) {
      if (_LinearElementEditor.isSegmentTooShort(
        element,
        element.points[index],
        element.points[index + 1],
        appState.zoom
      )) {
        midpoints.push(null);
        index++;
        continue;
      }
      const segmentMidPoint = _LinearElementEditor.getSegmentMidPoint(
        element,
        points[index],
        points[index + 1],
        index + 1,
        elementsMap
      );
      midpoints.push(segmentMidPoint);
      index++;
    }
    editorMidPointsCache.points = midpoints;
    editorMidPointsCache.version = element.version;
    editorMidPointsCache.zoom = appState.zoom.value;
  };
  static getSegmentMidpointHitCoords = (linearElementEditor, scenePointer, appState, elementsMap) => {
    const { elementId } = linearElementEditor;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return null;
    }
    const clickedPointIndex = _LinearElementEditor.getPointIndexUnderCursor(
      element,
      elementsMap,
      appState.zoom,
      scenePointer.x,
      scenePointer.y
    );
    if (clickedPointIndex >= 0) {
      return null;
    }
    const points = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    if (points.length >= 3 && !appState.editingLinearElement) {
      return null;
    }
    const threshold = _LinearElementEditor.POINT_HANDLE_SIZE / appState.zoom.value;
    const existingSegmentMidpointHitCoords = linearElementEditor.segmentMidPointHoveredCoords;
    if (existingSegmentMidpointHitCoords) {
      const distance4 = pointDistance(
        pointFrom(
          existingSegmentMidpointHitCoords[0],
          existingSegmentMidpointHitCoords[1]
        ),
        pointFrom(scenePointer.x, scenePointer.y)
      );
      if (distance4 <= threshold) {
        return existingSegmentMidpointHitCoords;
      }
    }
    let index = 0;
    const midPoints = _LinearElementEditor.getEditorMidPoints(element, elementsMap, appState);
    while (index < midPoints.length) {
      if (midPoints[index] !== null) {
        const distance4 = pointDistance(
          pointFrom(midPoints[index][0], midPoints[index][1]),
          pointFrom(scenePointer.x, scenePointer.y)
        );
        if (distance4 <= threshold) {
          return midPoints[index];
        }
      }
      index++;
    }
    return null;
  };
  static isSegmentTooShort(element, startPoint, endPoint, zoom) {
    let distance4 = pointDistance(
      pointFrom(startPoint[0], startPoint[1]),
      pointFrom(endPoint[0], endPoint[1])
    );
    if (element.points.length > 2 && element.roundness) {
      distance4 = getBezierCurveLength(element, endPoint);
    }
    return distance4 * zoom.value < _LinearElementEditor.POINT_HANDLE_SIZE * 4;
  }
  static getSegmentMidPoint(element, startPoint, endPoint, endPointIndex, elementsMap) {
    let segmentMidPoint = pointCenter(startPoint, endPoint);
    if (element.points.length > 2 && element.roundness) {
      const controlPoints = getControlPointsForBezierCurve(
        element,
        element.points[endPointIndex]
      );
      if (controlPoints) {
        const t2 = mapIntervalToBezierT(
          element,
          element.points[endPointIndex],
          0.5
        );
        segmentMidPoint = _LinearElementEditor.getPointGlobalCoordinates(
          element,
          getBezierXY(
            controlPoints[0],
            controlPoints[1],
            controlPoints[2],
            controlPoints[3],
            t2
          ),
          elementsMap
        );
      }
    }
    return segmentMidPoint;
  }
  static getSegmentMidPointIndex(linearElementEditor, appState, midPoint, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElementEditor.elementId,
      elementsMap
    );
    if (!element) {
      return -1;
    }
    const midPoints = _LinearElementEditor.getEditorMidPoints(
      element,
      elementsMap,
      appState
    );
    let index = 0;
    while (index < midPoints.length) {
      if (_LinearElementEditor.arePointsEqual(midPoint, midPoints[index])) {
        return index + 1;
      }
      index++;
    }
    return -1;
  }
  static handlePointerDown(event, app, store, scenePointer, linearElementEditor, scene) {
    const appState = app.state;
    const elementsMap = scene.getNonDeletedElementsMap();
    const elements = scene.getNonDeletedElements();
    const ret = {
      didAddPoint: false,
      hitElement: null,
      linearElementEditor: null
    };
    if (!linearElementEditor) {
      return ret;
    }
    const { elementId } = linearElementEditor;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return ret;
    }
    const segmentMidpoint = _LinearElementEditor.getSegmentMidpointHitCoords(
      linearElementEditor,
      scenePointer,
      appState,
      elementsMap
    );
    let segmentMidpointIndex = null;
    if (segmentMidpoint) {
      segmentMidpointIndex = _LinearElementEditor.getSegmentMidPointIndex(
        linearElementEditor,
        appState,
        segmentMidpoint,
        elementsMap
      );
    }
    if (event.altKey && appState.editingLinearElement) {
      if (linearElementEditor.lastUncommittedPoint == null && !isElbowArrow(element)) {
        mutateElement(element, {
          points: [
            ...element.points,
            _LinearElementEditor.createPointAt(
              element,
              elementsMap,
              scenePointer.x,
              scenePointer.y,
              event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
            )
          ]
        });
        ret.didAddPoint = true;
      }
      store.shouldCaptureIncrement();
      ret.linearElementEditor = {
        ...linearElementEditor,
        pointerDownState: {
          prevSelectedPointsIndices: linearElementEditor.selectedPointsIndices,
          lastClickedPoint: -1,
          lastClickedIsEndPoint: false,
          origin: { x: scenePointer.x, y: scenePointer.y },
          segmentMidpoint: {
            value: segmentMidpoint,
            index: segmentMidpointIndex,
            added: false
          }
        },
        selectedPointsIndices: [element.points.length - 1],
        lastUncommittedPoint: null,
        endBindingElement: getHoveredElementForBinding(
          scenePointer,
          elements,
          elementsMap
        )
      };
      ret.didAddPoint = true;
      return ret;
    }
    const clickedPointIndex = _LinearElementEditor.getPointIndexUnderCursor(
      element,
      elementsMap,
      appState.zoom,
      scenePointer.x,
      scenePointer.y
    );
    if (clickedPointIndex >= 0 || segmentMidpoint) {
      ret.hitElement = element;
    } else {
      const { startBindingElement, endBindingElement } = linearElementEditor;
      if (isBindingEnabled(appState) && isBindingElement(element)) {
        bindOrUnbindLinearElement(
          element,
          startBindingElement,
          endBindingElement,
          elementsMap,
          scene
        );
      }
    }
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const targetPoint = clickedPointIndex > -1 && pointRotateRads(
      pointFrom(
        element.x + element.points[clickedPointIndex][0],
        element.y + element.points[clickedPointIndex][1]
      ),
      pointFrom(cx, cy),
      element.angle
    );
    const nextSelectedPointsIndices = clickedPointIndex > -1 || event.shiftKey ? event.shiftKey || linearElementEditor.selectedPointsIndices?.includes(clickedPointIndex) ? normalizeSelectedPoints([
      ...linearElementEditor.selectedPointsIndices || [],
      clickedPointIndex
    ]) : [clickedPointIndex] : null;
    ret.linearElementEditor = {
      ...linearElementEditor,
      pointerDownState: {
        prevSelectedPointsIndices: linearElementEditor.selectedPointsIndices,
        lastClickedPoint: clickedPointIndex,
        lastClickedIsEndPoint: clickedPointIndex === element.points.length - 1,
        origin: { x: scenePointer.x, y: scenePointer.y },
        segmentMidpoint: {
          value: segmentMidpoint,
          index: segmentMidpointIndex,
          added: false
        }
      },
      selectedPointsIndices: nextSelectedPointsIndices,
      pointerOffset: targetPoint ? {
        x: scenePointer.x - targetPoint[0],
        y: scenePointer.y - targetPoint[1]
      } : { x: 0, y: 0 }
    };
    return ret;
  }
  static arePointsEqual(point1, point2) {
    if (!point1 && !point2) {
      return true;
    }
    if (!point1 || !point2) {
      return false;
    }
    return pointsEqual(point1, point2);
  }
  static handlePointerMove(event, scenePointerX, scenePointerY, app, elementsMap) {
    const appState = app.state;
    if (!appState.editingLinearElement) {
      return null;
    }
    const { elementId, lastUncommittedPoint } = appState.editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    if (!element) {
      return appState.editingLinearElement;
    }
    const { points } = element;
    const lastPoint = points[points.length - 1];
    if (!event.altKey) {
      if (lastPoint === lastUncommittedPoint) {
        _LinearElementEditor.deletePoints(
          element,
          [points.length - 1],
          elementsMap
        );
      }
      return {
        ...appState.editingLinearElement,
        lastUncommittedPoint: null
      };
    }
    let newPoint;
    if (shouldRotateWithDiscreteAngle(event) && points.length >= 2) {
      const lastCommittedPoint = points[points.length - 2];
      const [width, height] = _LinearElementEditor._getShiftLockedDelta(
        element,
        elementsMap,
        lastCommittedPoint,
        pointFrom(scenePointerX, scenePointerY),
        event[KEYS.CTRL_OR_CMD] ? null : app.getEffectiveGridSize()
      );
      newPoint = pointFrom(
        width + lastCommittedPoint[0],
        height + lastCommittedPoint[1]
      );
    } else {
      newPoint = _LinearElementEditor.createPointAt(
        element,
        elementsMap,
        scenePointerX - appState.editingLinearElement.pointerOffset.x,
        scenePointerY - appState.editingLinearElement.pointerOffset.y,
        event[KEYS.CTRL_OR_CMD] || isElbowArrow(element) ? null : app.getEffectiveGridSize()
      );
    }
    if (lastPoint === lastUncommittedPoint) {
      _LinearElementEditor.movePoints(
        element,
        [
          {
            index: element.points.length - 1,
            point: newPoint
          }
        ],
        elementsMap
      );
    } else {
      _LinearElementEditor.addPoints(
        element,
        [{ point: newPoint }],
        elementsMap
      );
    }
    return {
      ...appState.editingLinearElement,
      lastUncommittedPoint: element.points[element.points.length - 1]
    };
  }
  /** scene coords */
  static getPointGlobalCoordinates(element, p, elementsMap) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const { x, y } = element;
    return pointRotateRads(
      pointFrom(x + p[0], y + p[1]),
      pointFrom(cx, cy),
      element.angle
    );
  }
  /** scene coords */
  static getPointsGlobalCoordinates(element, elementsMap) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    return element.points.map((p) => {
      const { x, y } = element;
      return pointRotateRads(
        pointFrom(x + p[0], y + p[1]),
        pointFrom(cx, cy),
        element.angle
      );
    });
  }
  static getPointAtIndexGlobalCoordinates(element, indexMaybeFromEnd, elementsMap) {
    const index = indexMaybeFromEnd < 0 ? element.points.length + indexMaybeFromEnd : indexMaybeFromEnd;
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const p = element.points[index];
    const { x, y } = element;
    return p ? pointRotateRads(
      pointFrom(x + p[0], y + p[1]),
      pointFrom(cx, cy),
      element.angle
    ) : pointRotateRads(pointFrom(x, y), pointFrom(cx, cy), element.angle);
  }
  static pointFromAbsoluteCoords(element, absoluteCoords, elementsMap) {
    if (isElbowArrow(element)) {
      return pointFrom(
        absoluteCoords[0] - element.x,
        absoluteCoords[1] - element.y
      );
    }
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const [x, y] = pointRotateRads(
      pointFrom(absoluteCoords[0], absoluteCoords[1]),
      pointFrom(cx, cy),
      -element.angle
    );
    return pointFrom(x - element.x, y - element.y);
  }
  static getPointIndexUnderCursor(element, elementsMap, zoom, x, y) {
    const pointHandles = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    let idx = pointHandles.length;
    while (--idx > -1) {
      const p = pointHandles[idx];
      if (pointDistance(pointFrom(x, y), pointFrom(p[0], p[1])) * zoom.value < // +1px to account for outline stroke
      _LinearElementEditor.POINT_HANDLE_SIZE + 1) {
        return idx;
      }
    }
    return -1;
  }
  static createPointAt(element, elementsMap, scenePointerX, scenePointerY, gridSize) {
    const pointerOnGrid = getGridPoint(scenePointerX, scenePointerY, gridSize);
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const [rotatedX, rotatedY] = pointRotateRads(
      pointFrom(pointerOnGrid[0], pointerOnGrid[1]),
      pointFrom(cx, cy),
      -element.angle
    );
    return pointFrom(rotatedX - element.x, rotatedY - element.y);
  }
  /**
   * Normalizes line points so that the start point is at [0,0]. This is
   * expected in various parts of the codebase. Also returns new x/y to account
   * for the potential normalization.
   */
  static getNormalizedPoints(element) {
    const { points } = element;
    const offsetX = points[0][0];
    const offsetY = points[0][1];
    return {
      points: points.map((p) => {
        return pointFrom(p[0] - offsetX, p[1] - offsetY);
      }),
      x: element.x + offsetX,
      y: element.y + offsetY
    };
  }
  // element-mutating methods
  // ---------------------------------------------------------------------------
  static normalizePoints(element) {
    mutateElement(element, _LinearElementEditor.getNormalizedPoints(element));
  }
  static duplicateSelectedPoints(appState, elementsMap) {
    invariant(
      appState.editingLinearElement,
      "Not currently editing a linear element"
    );
    const { selectedPointsIndices, elementId } = appState.editingLinearElement;
    const element = _LinearElementEditor.getElement(elementId, elementsMap);
    invariant(
      element,
      "The linear element does not exist in the provided Scene"
    );
    invariant(
      selectedPointsIndices != null,
      "There are no selected points to duplicate"
    );
    const { points } = element;
    const nextSelectedIndices = [];
    let pointAddedToEnd = false;
    let indexCursor = -1;
    const nextPoints = points.reduce((acc, p, index) => {
      ++indexCursor;
      acc.push(p);
      const isSelected = selectedPointsIndices.includes(index);
      if (isSelected) {
        const nextPoint = points[index + 1];
        if (!nextPoint) {
          pointAddedToEnd = true;
        }
        acc.push(
          nextPoint ? pointFrom((p[0] + nextPoint[0]) / 2, (p[1] + nextPoint[1]) / 2) : pointFrom(p[0], p[1])
        );
        nextSelectedIndices.push(indexCursor + 1);
        ++indexCursor;
      }
      return acc;
    }, []);
    mutateElement(element, { points: nextPoints });
    if (pointAddedToEnd) {
      const lastPoint = element.points[element.points.length - 1];
      _LinearElementEditor.movePoints(
        element,
        [
          {
            index: element.points.length - 1,
            point: pointFrom(lastPoint[0] + 30, lastPoint[1] + 30)
          }
        ],
        elementsMap
      );
    }
    return {
      ...appState,
      editingLinearElement: {
        ...appState.editingLinearElement,
        selectedPointsIndices: nextSelectedIndices
      }
    };
  }
  static deletePoints(element, pointIndices, elementsMap) {
    let offsetX = 0;
    let offsetY = 0;
    const isDeletingOriginPoint = pointIndices.includes(0);
    if (isDeletingOriginPoint) {
      const firstNonDeletedPoint = element.points.find((point2, idx) => {
        return !pointIndices.includes(idx);
      });
      if (firstNonDeletedPoint) {
        offsetX = firstNonDeletedPoint[0];
        offsetY = firstNonDeletedPoint[1];
      }
    }
    const nextPoints = element.points.reduce((acc, p, idx) => {
      if (!pointIndices.includes(idx)) {
        acc.push(
          !acc.length ? pointFrom(0, 0) : pointFrom(p[0] - offsetX, p[1] - offsetY)
        );
      }
      return acc;
    }, []);
    _LinearElementEditor._updatePoints(
      element,
      nextPoints,
      offsetX,
      offsetY,
      elementsMap
    );
  }
  static addPoints(element, targetPoints, elementsMap) {
    const offsetX = 0;
    const offsetY = 0;
    const nextPoints = [...element.points, ...targetPoints.map((x) => x.point)];
    _LinearElementEditor._updatePoints(
      element,
      nextPoints,
      offsetX,
      offsetY,
      elementsMap
    );
  }
  static movePoints(element, targetPoints, elementsMap, otherUpdates, options) {
    const { points } = element;
    let offsetX = 0;
    let offsetY = 0;
    const selectedOriginPoint = targetPoints.find(({ index }) => index === 0);
    if (selectedOriginPoint) {
      offsetX = selectedOriginPoint.point[0] + points[selectedOriginPoint.index][0];
      offsetY = selectedOriginPoint.point[1] + points[selectedOriginPoint.index][1];
    }
    const nextPoints = points.map((p, idx) => {
      const selectedPointData = targetPoints.find((t2) => t2.index === idx);
      if (selectedPointData) {
        if (selectedPointData.index === 0) {
          return p;
        }
        const deltaX = selectedPointData.point[0] - points[selectedPointData.index][0];
        const deltaY = selectedPointData.point[1] - points[selectedPointData.index][1];
        return pointFrom(p[0] + deltaX - offsetX, p[1] + deltaY - offsetY);
      }
      return offsetX || offsetY ? pointFrom(p[0] - offsetX, p[1] - offsetY) : p;
    });
    _LinearElementEditor._updatePoints(
      element,
      nextPoints,
      offsetX,
      offsetY,
      elementsMap,
      otherUpdates,
      {
        isDragging: targetPoints.reduce(
          (dragging, targetPoint) => dragging || targetPoint.isDragging === true,
          false
        ),
        changedElements: options?.changedElements
      }
    );
  }
  static shouldAddMidpoint(linearElementEditor, pointerCoords, appState, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElementEditor.elementId,
      elementsMap
    );
    if (element && isElbowArrow(element)) {
      return false;
    }
    if (!element) {
      return false;
    }
    const { segmentMidpoint } = linearElementEditor.pointerDownState;
    if (segmentMidpoint.added || segmentMidpoint.value === null || segmentMidpoint.index === null || linearElementEditor.pointerDownState.origin === null) {
      return false;
    }
    const origin = linearElementEditor.pointerDownState.origin;
    const dist = pointDistance(
      pointFrom(origin.x, origin.y),
      pointFrom(pointerCoords.x, pointerCoords.y)
    );
    if (!appState.editingLinearElement && dist < DRAGGING_THRESHOLD / appState.zoom.value) {
      return false;
    }
    return true;
  }
  static addMidpoint(linearElementEditor, pointerCoords, app, snapToGrid, elementsMap) {
    const element = _LinearElementEditor.getElement(
      linearElementEditor.elementId,
      elementsMap
    );
    if (!element) {
      return;
    }
    const { segmentMidpoint } = linearElementEditor.pointerDownState;
    const ret = {
      pointerDownState: linearElementEditor.pointerDownState,
      selectedPointsIndices: linearElementEditor.selectedPointsIndices
    };
    const midpoint2 = _LinearElementEditor.createPointAt(
      element,
      elementsMap,
      pointerCoords.x,
      pointerCoords.y,
      snapToGrid && !isElbowArrow(element) ? app.getEffectiveGridSize() : null
    );
    const points = [
      ...element.points.slice(0, segmentMidpoint.index),
      midpoint2,
      ...element.points.slice(segmentMidpoint.index)
    ];
    mutateElement(element, {
      points
    });
    ret.pointerDownState = {
      ...linearElementEditor.pointerDownState,
      segmentMidpoint: {
        ...linearElementEditor.pointerDownState.segmentMidpoint,
        added: true
      },
      lastClickedPoint: segmentMidpoint.index
    };
    ret.selectedPointsIndices = [segmentMidpoint.index];
    return ret;
  }
  static _updatePoints(element, nextPoints, offsetX, offsetY, elementsMap, otherUpdates, options) {
    if (isElbowArrow(element)) {
      const bindings = {};
      if (otherUpdates?.startBinding !== void 0) {
        bindings.startBinding = otherUpdates.startBinding !== null && isFixedPointBinding(otherUpdates.startBinding) ? otherUpdates.startBinding : null;
      }
      if (otherUpdates?.endBinding !== void 0) {
        bindings.endBinding = otherUpdates.endBinding !== null && isFixedPointBinding(otherUpdates.endBinding) ? otherUpdates.endBinding : null;
      }
      const mergedElementsMap = options?.changedElements ? toBrandedType(
        new Map([...elementsMap, ...options.changedElements])
      ) : elementsMap;
      mutateElbowArrow(
        element,
        mergedElementsMap,
        nextPoints,
        vector(offsetX, offsetY),
        bindings,
        {
          isDragging: options?.isDragging
        }
      );
    } else {
      const nextCoords = getElementPointsCoords(element, nextPoints);
      const prevCoords = getElementPointsCoords(element, element.points);
      const nextCenterX = (nextCoords[0] + nextCoords[2]) / 2;
      const nextCenterY = (nextCoords[1] + nextCoords[3]) / 2;
      const prevCenterX = (prevCoords[0] + prevCoords[2]) / 2;
      const prevCenterY = (prevCoords[1] + prevCoords[3]) / 2;
      const dX = prevCenterX - nextCenterX;
      const dY = prevCenterY - nextCenterY;
      const rotated = pointRotateRads(
        pointFrom(offsetX, offsetY),
        pointFrom(dX, dY),
        element.angle
      );
      mutateElement(element, {
        ...otherUpdates,
        points: nextPoints,
        x: element.x + rotated[0],
        y: element.y + rotated[1]
      });
    }
  }
  static _getShiftLockedDelta(element, elementsMap, referencePoint, scenePointer, gridSize) {
    const referencePointCoords = _LinearElementEditor.getPointGlobalCoordinates(
      element,
      referencePoint,
      elementsMap
    );
    if (isElbowArrow(element)) {
      return [
        scenePointer[0] - referencePointCoords[0],
        scenePointer[1] - referencePointCoords[1]
      ];
    }
    const [gridX, gridY] = getGridPoint(
      scenePointer[0],
      scenePointer[1],
      gridSize
    );
    const { width, height } = getLockedLinearCursorAlignSize(
      referencePointCoords[0],
      referencePointCoords[1],
      gridX,
      gridY
    );
    return pointRotateRads(
      pointFrom(width, height),
      pointFrom(0, 0),
      -element.angle
    );
  }
  static getBoundTextElementPosition = (element, boundTextElement, elementsMap) => {
    const points = _LinearElementEditor.getPointsGlobalCoordinates(
      element,
      elementsMap
    );
    if (points.length < 2) {
      mutateElement(boundTextElement, { isDeleted: true });
    }
    let x = 0;
    let y = 0;
    if (element.points.length % 2 === 1) {
      const index = Math.floor(element.points.length / 2);
      const midPoint = _LinearElementEditor.getPointGlobalCoordinates(
        element,
        element.points[index],
        elementsMap
      );
      x = midPoint[0] - boundTextElement.width / 2;
      y = midPoint[1] - boundTextElement.height / 2;
    } else {
      const index = element.points.length / 2 - 1;
      let midSegmentMidpoint = editorMidPointsCache.points[index];
      if (element.points.length === 2) {
        midSegmentMidpoint = pointCenter(points[0], points[1]);
      }
      if (!midSegmentMidpoint || editorMidPointsCache.version !== element.version) {
        midSegmentMidpoint = _LinearElementEditor.getSegmentMidPoint(
          element,
          points[index],
          points[index + 1],
          index + 1,
          elementsMap
        );
      }
      x = midSegmentMidpoint[0] - boundTextElement.width / 2;
      y = midSegmentMidpoint[1] - boundTextElement.height / 2;
    }
    return { x, y };
  };
  static getMinMaxXYWithBoundText = (element, elementsMap, elementBounds, boundTextElement) => {
    let [x1, y1, x2, y2] = elementBounds;
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const { x: boundTextX1, y: boundTextY1 } = _LinearElementEditor.getBoundTextElementPosition(
      element,
      boundTextElement,
      elementsMap
    );
    const boundTextX2 = boundTextX1 + boundTextElement.width;
    const boundTextY2 = boundTextY1 + boundTextElement.height;
    const centerPoint = pointFrom(cx, cy);
    const topLeftRotatedPoint = pointRotateRads(
      pointFrom(x1, y1),
      centerPoint,
      element.angle
    );
    const topRightRotatedPoint = pointRotateRads(
      pointFrom(x2, y1),
      centerPoint,
      element.angle
    );
    const counterRotateBoundTextTopLeft = pointRotateRads(
      pointFrom(boundTextX1, boundTextY1),
      centerPoint,
      -element.angle
    );
    const counterRotateBoundTextTopRight = pointRotateRads(
      pointFrom(boundTextX2, boundTextY1),
      centerPoint,
      -element.angle
    );
    const counterRotateBoundTextBottomLeft = pointRotateRads(
      pointFrom(boundTextX1, boundTextY2),
      centerPoint,
      -element.angle
    );
    const counterRotateBoundTextBottomRight = pointRotateRads(
      pointFrom(boundTextX2, boundTextY2),
      centerPoint,
      -element.angle
    );
    if (topLeftRotatedPoint[0] < topRightRotatedPoint[0] && topLeftRotatedPoint[1] >= topRightRotatedPoint[1]) {
      x1 = Math.min(x1, counterRotateBoundTextBottomLeft[0]);
      x2 = Math.max(
        x2,
        Math.max(
          counterRotateBoundTextTopRight[0],
          counterRotateBoundTextBottomRight[0]
        )
      );
      y1 = Math.min(y1, counterRotateBoundTextTopLeft[1]);
      y2 = Math.max(y2, counterRotateBoundTextBottomRight[1]);
    } else if (topLeftRotatedPoint[0] >= topRightRotatedPoint[0] && topLeftRotatedPoint[1] > topRightRotatedPoint[1]) {
      x1 = Math.min(x1, counterRotateBoundTextBottomRight[0]);
      x2 = Math.max(
        x2,
        Math.max(
          counterRotateBoundTextTopLeft[0],
          counterRotateBoundTextTopRight[0]
        )
      );
      y1 = Math.min(y1, counterRotateBoundTextBottomLeft[1]);
      y2 = Math.max(y2, counterRotateBoundTextTopRight[1]);
    } else if (topLeftRotatedPoint[0] >= topRightRotatedPoint[0]) {
      x1 = Math.min(x1, counterRotateBoundTextTopRight[0]);
      x2 = Math.max(x2, counterRotateBoundTextBottomLeft[0]);
      y1 = Math.min(y1, counterRotateBoundTextBottomRight[1]);
      y2 = Math.max(y2, counterRotateBoundTextTopLeft[1]);
    } else if (topLeftRotatedPoint[1] <= topRightRotatedPoint[1]) {
      x1 = Math.min(
        x1,
        Math.min(
          counterRotateBoundTextTopRight[0],
          counterRotateBoundTextTopLeft[0]
        )
      );
      x2 = Math.max(x2, counterRotateBoundTextBottomRight[0]);
      y1 = Math.min(y1, counterRotateBoundTextTopRight[1]);
      y2 = Math.max(y2, counterRotateBoundTextBottomLeft[1]);
    }
    return [x1, y1, x2, y2, cx, cy];
  };
  static getElementAbsoluteCoords = (element, elementsMap, includeBoundText = false) => {
    let coords;
    let x1;
    let y1;
    let x2;
    let y2;
    if (element.points.length < 2 || !ShapeCache.get(element)) {
      const { minX, minY, maxX, maxY } = element.points.reduce(
        (limits, [x, y]) => {
          limits.minY = Math.min(limits.minY, y);
          limits.minX = Math.min(limits.minX, x);
          limits.maxX = Math.max(limits.maxX, x);
          limits.maxY = Math.max(limits.maxY, y);
          return limits;
        },
        { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
      );
      x1 = minX + element.x;
      y1 = minY + element.y;
      x2 = maxX + element.x;
      y2 = maxY + element.y;
    } else {
      const shape = ShapeCache.generateElementShape(element, null);
      const ops = getCurvePathOps2(shape[0]);
      const [minX, minY, maxX, maxY] = getMinMaxXYFromCurvePathOps(ops);
      x1 = minX + element.x;
      y1 = minY + element.y;
      x2 = maxX + element.x;
      y2 = maxY + element.y;
    }
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    coords = [x1, y1, x2, y2, cx, cy];
    if (!includeBoundText) {
      return coords;
    }
    const boundTextElement = getBoundTextElement(element, elementsMap);
    if (boundTextElement) {
      coords = _LinearElementEditor.getMinMaxXYWithBoundText(
        element,
        elementsMap,
        [x1, y1, x2, y2],
        boundTextElement
      );
    }
    return coords;
  };
};
var normalizeSelectedPoints = (points) => {
  let nextPoints = [
    ...new Set(points.filter((p) => p !== null && p !== -1))
  ];
  nextPoints = nextPoints.sort((a2, b2) => a2 - b2);
  return nextPoints.length ? nextPoints : null;
};

// element/containerCache.ts
init_define_import_meta_env();
var originalContainerCache = {};
var updateOriginalContainerCache = (id, height) => {
  const data = originalContainerCache[id] || (originalContainerCache[id] = { height });
  data.height = height;
  return data;
};
var resetOriginalContainerCache = (id) => {
  if (originalContainerCache[id]) {
    delete originalContainerCache[id];
  }
};
var getOriginalContainerHeightFromCache = (id) => {
  return originalContainerCache[id]?.height ?? null;
};

// element/textElement.ts
var normalizeText = (text) => {
  return normalizeEOL(text).replace(/\t/g, "        ");
};
var splitIntoLines = (text) => {
  return normalizeText(text).split("\n");
};
var redrawTextBoundingBox = (textElement, container, elementsMap, informMutation = true) => {
  let maxWidth = void 0;
  const boundTextUpdates = {
    x: textElement.x,
    y: textElement.y,
    text: textElement.text,
    width: textElement.width,
    height: textElement.height,
    angle: container?.angle ?? textElement.angle
  };
  boundTextUpdates.text = textElement.text;
  if (container || !textElement.autoResize) {
    maxWidth = container ? getBoundTextMaxWidth(container, textElement) : textElement.width;
    boundTextUpdates.text = wrapText(
      textElement.originalText,
      getFontString(textElement),
      maxWidth
    );
  }
  const metrics = measureText(
    boundTextUpdates.text,
    getFontString(textElement),
    textElement.lineHeight
  );
  if (textElement.autoResize) {
    boundTextUpdates.width = metrics.width;
  }
  boundTextUpdates.height = metrics.height;
  if (container) {
    const maxContainerHeight = getBoundTextMaxHeight(
      container,
      textElement
    );
    const maxContainerWidth = getBoundTextMaxWidth(container, textElement);
    if (!isArrowElement(container) && metrics.height > maxContainerHeight) {
      const nextHeight = computeContainerDimensionForBoundText(
        metrics.height,
        container.type
      );
      mutateElement(container, { height: nextHeight }, informMutation);
      updateOriginalContainerCache(container.id, nextHeight);
    }
    if (metrics.width > maxContainerWidth) {
      const nextWidth = computeContainerDimensionForBoundText(
        metrics.width,
        container.type
      );
      mutateElement(container, { width: nextWidth }, informMutation);
    }
    const updatedTextElement = {
      ...textElement,
      ...boundTextUpdates
    };
    const { x, y } = computeBoundTextPosition(
      container,
      updatedTextElement,
      elementsMap
    );
    boundTextUpdates.x = x;
    boundTextUpdates.y = y;
  }
  mutateElement(textElement, boundTextUpdates, informMutation);
};
var bindTextToShapeAfterDuplication = (newElements, oldElements, oldIdToDuplicatedId) => {
  const newElementsMap = arrayToMap(newElements);
  oldElements.forEach((element) => {
    const newElementId = oldIdToDuplicatedId.get(element.id);
    const boundTextElementId = getBoundTextElementId(element);
    if (boundTextElementId) {
      const newTextElementId = oldIdToDuplicatedId.get(boundTextElementId);
      if (newTextElementId) {
        const newContainer = newElementsMap.get(newElementId);
        if (newContainer) {
          mutateElement(newContainer, {
            boundElements: (element.boundElements || []).filter(
              (boundElement) => boundElement.id !== newTextElementId && boundElement.id !== boundTextElementId
            ).concat({
              type: "text",
              id: newTextElementId
            })
          });
        }
        const newTextElement2 = newElementsMap.get(newTextElementId);
        if (newTextElement2 && isTextElement(newTextElement2)) {
          mutateElement(newTextElement2, {
            containerId: newContainer ? newElementId : null
          });
        }
      }
    }
  });
};
var handleBindTextResize = (container, elementsMap, transformHandleType, shouldMaintainAspectRatio2 = false) => {
  const boundTextElementId = getBoundTextElementId(container);
  if (!boundTextElementId) {
    return;
  }
  resetOriginalContainerCache(container.id);
  const textElement = getBoundTextElement(container, elementsMap);
  if (textElement && textElement.text) {
    if (!container) {
      return;
    }
    let text = textElement.text;
    let nextHeight = textElement.height;
    let nextWidth = textElement.width;
    const maxWidth = getBoundTextMaxWidth(container, textElement);
    const maxHeight = getBoundTextMaxHeight(container, textElement);
    let containerHeight = container.height;
    if (shouldMaintainAspectRatio2 || transformHandleType !== "n" && transformHandleType !== "s") {
      if (text) {
        text = wrapText(
          textElement.originalText,
          getFontString(textElement),
          maxWidth
        );
      }
      const metrics = measureText(
        text,
        getFontString(textElement),
        textElement.lineHeight
      );
      nextHeight = metrics.height;
      nextWidth = metrics.width;
    }
    if (nextHeight > maxHeight) {
      containerHeight = computeContainerDimensionForBoundText(
        nextHeight,
        container.type
      );
      const diff = containerHeight - container.height;
      const updatedY = !isArrowElement(container) && (transformHandleType === "ne" || transformHandleType === "nw" || transformHandleType === "n") ? container.y - diff : container.y;
      mutateElement(container, {
        height: containerHeight,
        y: updatedY
      });
    }
    mutateElement(textElement, {
      text,
      width: nextWidth,
      height: nextHeight
    });
    if (!isArrowElement(container)) {
      mutateElement(
        textElement,
        computeBoundTextPosition(container, textElement, elementsMap)
      );
    }
  }
};
var computeBoundTextPosition = (container, boundTextElement, elementsMap) => {
  if (isArrowElement(container)) {
    return LinearElementEditor.getBoundTextElementPosition(
      container,
      boundTextElement,
      elementsMap
    );
  }
  const containerCoords = getContainerCoords(container);
  const maxContainerHeight = getBoundTextMaxHeight(container, boundTextElement);
  const maxContainerWidth = getBoundTextMaxWidth(container, boundTextElement);
  let x;
  let y;
  if (boundTextElement.verticalAlign === VERTICAL_ALIGN.TOP) {
    y = containerCoords.y;
  } else if (boundTextElement.verticalAlign === VERTICAL_ALIGN.BOTTOM) {
    y = containerCoords.y + (maxContainerHeight - boundTextElement.height);
  } else {
    y = containerCoords.y + (maxContainerHeight / 2 - boundTextElement.height / 2);
  }
  if (boundTextElement.textAlign === TEXT_ALIGN.LEFT) {
    x = containerCoords.x;
  } else if (boundTextElement.textAlign === TEXT_ALIGN.RIGHT) {
    x = containerCoords.x + (maxContainerWidth - boundTextElement.width);
  } else {
    x = containerCoords.x + (maxContainerWidth / 2 - boundTextElement.width / 2);
  }
  return { x, y };
};
var measureText = (text, font, lineHeight, forceAdvanceWidth) => {
  const _text = text.split("\n").map((x) => x || " ").join("\n");
  const fontSize = parseFloat(font);
  const height = getTextHeight(_text, fontSize, lineHeight);
  const width = getTextWidth(_text, font, forceAdvanceWidth);
  return { width, height };
};
var detectLineHeight = (textElement) => {
  const lineCount = splitIntoLines(textElement.text).length;
  return textElement.height / lineCount / textElement.fontSize;
};
var getLineHeightInPx = (fontSize, lineHeight) => {
  return fontSize * lineHeight;
};
var getApproxMinLineHeight = (fontSize, lineHeight) => {
  return getLineHeightInPx(fontSize, lineHeight) + BOUND_TEXT_PADDING * 2;
};
var canvas;
var getLineWidth = (text, font, forceAdvanceWidth) => {
  if (!canvas) {
    canvas = document.createElement("canvas");
  }
  const canvas2dContext = canvas.getContext("2d");
  canvas2dContext.font = font;
  const metrics = canvas2dContext.measureText(text);
  const advanceWidth = metrics.width;
  if (!forceAdvanceWidth && window.TextMetrics && "actualBoundingBoxLeft" in window.TextMetrics.prototype && "actualBoundingBoxRight" in window.TextMetrics.prototype) {
    const actualWidth = Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight);
    return Math.max(actualWidth, advanceWidth);
  }
  if (isTestEnv()) {
    return advanceWidth * 10;
  }
  return advanceWidth;
};
var getTextWidth = (text, font, forceAdvanceWidth) => {
  const lines = splitIntoLines(text);
  let width = 0;
  lines.forEach((line2) => {
    width = Math.max(width, getLineWidth(line2, font, forceAdvanceWidth));
  });
  return width;
};
var getTextHeight = (text, fontSize, lineHeight) => {
  const lineCount = splitIntoLines(text).length;
  return getLineHeightInPx(fontSize, lineHeight) * lineCount;
};
var parseTokens = (text) => {
  const words = text.split("-");
  if (words.length > 1) {
    words.forEach((word, index) => {
      if (index !== words.length - 1) {
        words[index] = word += "-";
      }
    });
  }
  return words.join(" ").split(" ");
};
var wrapText = (text, font, maxWidth) => {
  if (!Number.isFinite(maxWidth) || maxWidth < 0) {
    return text;
  }
  const lines = [];
  const originalLines = text.split("\n");
  const spaceAdvanceWidth = getLineWidth(" ", font, true);
  let currentLine = "";
  let currentLineWidthTillNow = 0;
  const push = (str) => {
    if (str.trim()) {
      lines.push(str);
    }
  };
  const resetParams = () => {
    currentLine = "";
    currentLineWidthTillNow = 0;
  };
  for (const originalLine of originalLines) {
    const currentLineWidth = getLineWidth(originalLine, font, true);
    if (currentLineWidth <= maxWidth) {
      lines.push(originalLine);
      continue;
    }
    const words = parseTokens(originalLine);
    resetParams();
    let index = 0;
    while (index < words.length) {
      const currentWordWidth = getLineWidth(words[index], font, true);
      if (currentWordWidth === maxWidth) {
        push(words[index]);
        index++;
      } else if (currentWordWidth > maxWidth) {
        push(currentLine);
        resetParams();
        while (words[index].length > 0) {
          const currentChar = String.fromCodePoint(
            words[index].codePointAt(0)
          );
          const line2 = currentLine + currentChar;
          const lineAdvanceWidth = getLineWidth(line2, font, true);
          const charAdvanceWidth = charWidth.calculate(currentChar, font);
          currentLineWidthTillNow = lineAdvanceWidth;
          words[index] = words[index].slice(currentChar.length);
          if (currentLineWidthTillNow >= maxWidth) {
            push(currentLine);
            currentLine = currentChar;
            currentLineWidthTillNow = charAdvanceWidth;
          } else {
            currentLine = line2;
          }
        }
        if (currentLineWidthTillNow + spaceAdvanceWidth >= maxWidth) {
          push(currentLine);
          resetParams();
        } else if (!currentLine.endsWith("-")) {
          currentLine += " ";
          currentLineWidthTillNow += spaceAdvanceWidth;
        }
        index++;
      } else {
        while (currentLineWidthTillNow < maxWidth && index < words.length) {
          const word = words[index];
          currentLineWidthTillNow = getLineWidth(
            currentLine + word,
            font,
            true
          );
          if (currentLineWidthTillNow > maxWidth) {
            push(currentLine);
            resetParams();
            break;
          }
          index++;
          const shouldAppendSpace = !word.endsWith("-");
          currentLine += word;
          if (shouldAppendSpace) {
            currentLine += " ";
          }
          if (currentLineWidthTillNow + spaceAdvanceWidth >= maxWidth) {
            if (shouldAppendSpace) {
              lines.push(currentLine.slice(0, -1));
            } else {
              lines.push(currentLine);
            }
            resetParams();
            break;
          }
        }
      }
    }
    if (currentLine.slice(-1) === " ") {
      currentLine = currentLine.slice(0, -1);
      push(currentLine);
    }
  }
  return lines.join("\n");
};
var charWidth = /* @__PURE__ */ (() => {
  const cachedCharWidth = {};
  const calculate = (char, font) => {
    const ascii = char.charCodeAt(0);
    if (!cachedCharWidth[font]) {
      cachedCharWidth[font] = [];
    }
    if (!cachedCharWidth[font][ascii]) {
      const width = getLineWidth(char, font, true);
      cachedCharWidth[font][ascii] = width;
    }
    return cachedCharWidth[font][ascii];
  };
  const getCache = (font) => {
    return cachedCharWidth[font];
  };
  return {
    calculate,
    getCache
  };
})();
var DUMMY_TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toLocaleUpperCase();
var getApproxMinLineWidth = (font, lineHeight) => {
  const maxCharWidth = getMaxCharWidth(font);
  if (maxCharWidth === 0) {
    return measureText(DUMMY_TEXT.split("").join("\n"), font, lineHeight).width + BOUND_TEXT_PADDING * 2;
  }
  return maxCharWidth + BOUND_TEXT_PADDING * 2;
};
var getMaxCharWidth = (font) => {
  const cache = charWidth.getCache(font);
  if (!cache) {
    return 0;
  }
  const cacheWithOutEmpty = cache.filter((val) => val !== void 0);
  return Math.max(...cacheWithOutEmpty);
};
var getBoundTextElementId = (container) => {
  return container?.boundElements?.length ? container?.boundElements?.find((ele) => ele.type === "text")?.id || null : null;
};
var getBoundTextElement = (element, elementsMap) => {
  if (!element) {
    return null;
  }
  const boundTextElementId = getBoundTextElementId(element);
  if (boundTextElementId) {
    return elementsMap.get(boundTextElementId) || null;
  }
  return null;
};
var getContainerElement = (element, elementsMap) => {
  if (!element) {
    return null;
  }
  if (element.containerId) {
    return elementsMap.get(element.containerId) || null;
  }
  return null;
};
var getContainerCenter = (container, appState, elementsMap) => {
  if (!isArrowElement(container)) {
    return {
      x: container.x + container.width / 2,
      y: container.y + container.height / 2
    };
  }
  const points = LinearElementEditor.getPointsGlobalCoordinates(
    container,
    elementsMap
  );
  if (points.length % 2 === 1) {
    const index2 = Math.floor(container.points.length / 2);
    const midPoint = LinearElementEditor.getPointGlobalCoordinates(
      container,
      container.points[index2],
      elementsMap
    );
    return { x: midPoint[0], y: midPoint[1] };
  }
  const index = container.points.length / 2 - 1;
  let midSegmentMidpoint = LinearElementEditor.getEditorMidPoints(
    container,
    elementsMap,
    appState
  )[index];
  if (!midSegmentMidpoint) {
    midSegmentMidpoint = LinearElementEditor.getSegmentMidPoint(
      container,
      points[index],
      points[index + 1],
      index + 1,
      elementsMap
    );
  }
  return { x: midSegmentMidpoint[0], y: midSegmentMidpoint[1] };
};
var getContainerCoords = (container) => {
  let offsetX = BOUND_TEXT_PADDING;
  let offsetY = BOUND_TEXT_PADDING;
  if (container.type === "ellipse") {
    offsetX += container.width / 2 * (1 - Math.sqrt(2) / 2);
    offsetY += container.height / 2 * (1 - Math.sqrt(2) / 2);
  }
  if (container.type === "diamond") {
    offsetX += container.width / 4;
    offsetY += container.height / 4;
  }
  return {
    x: container.x + offsetX,
    y: container.y + offsetY
  };
};
var getTextElementAngle = (textElement, container) => {
  if (!container || isArrowElement(container)) {
    return textElement.angle;
  }
  return container.angle;
};
var shouldAllowVerticalAlign = (selectedElements, elementsMap) => {
  return selectedElements.some((element) => {
    if (isBoundToContainer(element)) {
      const container = getContainerElement(element, elementsMap);
      if (isArrowElement(container)) {
        return false;
      }
      return true;
    }
    return false;
  });
};
var suppportsHorizontalAlign = (selectedElements, elementsMap) => {
  return selectedElements.some((element) => {
    if (isBoundToContainer(element)) {
      const container = getContainerElement(element, elementsMap);
      if (isArrowElement(container)) {
        return false;
      }
      return true;
    }
    return isTextElement(element);
  });
};
var VALID_CONTAINER_TYPES = /* @__PURE__ */ new Set([
  "rectangle",
  "ellipse",
  "diamond",
  "arrow"
]);
var isValidTextContainer = (element) => VALID_CONTAINER_TYPES.has(element.type);
var computeContainerDimensionForBoundText = (dimension, containerType) => {
  dimension = Math.ceil(dimension);
  const padding = BOUND_TEXT_PADDING * 2;
  if (containerType === "ellipse") {
    return Math.round((dimension + padding) / Math.sqrt(2) * 2);
  }
  if (containerType === "arrow") {
    return dimension + padding * 8;
  }
  if (containerType === "diamond") {
    return 2 * (dimension + padding);
  }
  return dimension + padding;
};
var getBoundTextMaxWidth = (container, boundTextElement) => {
  const { width } = container;
  if (isArrowElement(container)) {
    const minWidth = (boundTextElement?.fontSize ?? DEFAULT_FONT_SIZE) * ARROW_LABEL_FONT_SIZE_TO_MIN_WIDTH_RATIO;
    return Math.max(ARROW_LABEL_WIDTH_FRACTION * width, minWidth);
  }
  if (container.type === "ellipse") {
    return Math.round(width / 2 * Math.sqrt(2)) - BOUND_TEXT_PADDING * 2;
  }
  if (container.type === "diamond") {
    return Math.round(width / 2) - BOUND_TEXT_PADDING * 2;
  }
  return width - BOUND_TEXT_PADDING * 2;
};
var getBoundTextMaxHeight = (container, boundTextElement) => {
  const { height } = container;
  if (isArrowElement(container)) {
    const containerHeight = height - BOUND_TEXT_PADDING * 8 * 2;
    if (containerHeight <= 0) {
      return boundTextElement.height;
    }
    return height;
  }
  if (container.type === "ellipse") {
    return Math.round(height / 2 * Math.sqrt(2)) - BOUND_TEXT_PADDING * 2;
  }
  if (container.type === "diamond") {
    return Math.round(height / 2) - BOUND_TEXT_PADDING * 2;
  }
  return height - BOUND_TEXT_PADDING * 2;
};
var isMeasureTextSupported = () => {
  const width = getTextWidth(
    DUMMY_TEXT,
    getFontString({
      fontSize: DEFAULT_FONT_SIZE,
      fontFamily: DEFAULT_FONT_FAMILY
    })
  );
  return width > 0;
};
var getMinTextElementWidth = (font, lineHeight) => {
  return measureText("", font, lineHeight).width + BOUND_TEXT_PADDING * 2;
};
var getTextFromElements = (elements, separator = "\n\n") => {
  const text = elements.reduce((acc, element) => {
    if (isTextElement(element)) {
      acc.push(element.text);
    }
    return acc;
  }, []).join(separator);
  return text;
};

// ../utils/index.ts
init_define_import_meta_env();

// ../utils/export.ts
init_define_import_meta_env();

// scene/export.ts
init_define_import_meta_env();

// renderer/staticSvgScene.ts
init_define_import_meta_env();

// data/url.ts
init_define_import_meta_env();
var import_sanitize_url = __toESM(require_dist(), 1);
var sanitizeHTMLAttribute = (html) => {
  return html.replace(/"/g, "&quot;");
};
var normalizeLink = (link) => {
  link = link.trim();
  if (!link) {
    return link;
  }
  return (0, import_sanitize_url.sanitizeUrl)(sanitizeHTMLAttribute(link));
};
var isLocalLink = (link) => {
  return !!(link?.includes(location.origin) || link?.startsWith("/"));
};
var toValidURL = (link) => {
  link = normalizeLink(link);
  if (link.startsWith("/")) {
    return `${location.origin}${link}`;
  }
  try {
    new URL(link);
  } catch {
    return "about:blank";
  }
  return link;
};

// element/embeddable.ts
init_define_import_meta_env();

// actions/register.ts
init_define_import_meta_env();
var actions = [];
var register2 = (action) => {
  actions = actions.concat(action);
  return action;
};

// cursor.ts
init_define_import_meta_env();
var laserPointerCursorSVG_tag = `<svg viewBox="0 0 24 24" stroke-width="1" width="28" height="28" xmlns="http://www.w3.org/2000/svg">`;
var laserPointerCursorBackgroundSVG = `<path d="M6.164 11.755a5.314 5.314 0 0 1-4.932-5.298 5.314 5.314 0 0 1 5.311-5.311 5.314 5.314 0 0 1 5.307 5.113l8.773 8.773a3.322 3.322 0 0 1 0 4.696l-.895.895a3.322 3.322 0 0 1-4.696 0l-8.868-8.868Z" style="fill:#fff"/>`;
var laserPointerCursorIconSVG = `<path stroke="#1b1b1f" fill="#fff" d="m7.868 11.113 7.773 7.774a2.359 2.359 0 0 0 1.667.691 2.368 2.368 0 0 0 2.357-2.358c0-.625-.248-1.225-.69-1.667L11.201 7.78 9.558 9.469l-1.69 1.643v.001Zm10.273 3.606-3.333 3.333m-3.25-6.583 2 2m-7-7 3 3M3.664 3.625l1 1M2.529 6.922l1.407-.144m5.735-2.932-1.118.866M4.285 9.823l.758-1.194m1.863-6.207-.13 1.408"/>`;
var laserPointerCursorDataURL_lightMode = `data:${MIME_TYPES.svg},${encodeURIComponent(
  `${laserPointerCursorSVG_tag}${laserPointerCursorIconSVG}</svg>`
)}`;
var laserPointerCursorDataURL_darkMode = `data:${MIME_TYPES.svg},${encodeURIComponent(
  `${laserPointerCursorSVG_tag}${laserPointerCursorBackgroundSVG}${laserPointerCursorIconSVG}</svg>`
)}`;
var resetCursor = (interactiveCanvas) => {
  if (interactiveCanvas) {
    interactiveCanvas.style.cursor = "";
  }
};
var setCursor = (interactiveCanvas, cursor) => {
  if (interactiveCanvas) {
    interactiveCanvas.style.cursor = cursor;
  }
};
var eraserCanvasCache;
var previewDataURL;
var setEraserCursor = (interactiveCanvas, theme) => {
  const cursorImageSizePx = 20;
  const drawCanvas = () => {
    const isDarkTheme = theme === THEME.DARK;
    eraserCanvasCache = document.createElement("canvas");
    eraserCanvasCache.theme = theme;
    eraserCanvasCache.height = cursorImageSizePx;
    eraserCanvasCache.width = cursorImageSizePx;
    const context = eraserCanvasCache.getContext("2d");
    context.lineWidth = 1;
    context.beginPath();
    context.arc(
      eraserCanvasCache.width / 2,
      eraserCanvasCache.height / 2,
      5,
      0,
      2 * Math.PI
    );
    context.fillStyle = isDarkTheme ? open_color_default.black : open_color_default.white;
    context.fill();
    context.strokeStyle = isDarkTheme ? open_color_default.white : open_color_default.black;
    context.stroke();
    previewDataURL = eraserCanvasCache.toDataURL(MIME_TYPES.svg);
  };
  if (!eraserCanvasCache || eraserCanvasCache.theme !== theme) {
    drawCanvas();
  }
  setCursor(
    interactiveCanvas,
    `url(${previewDataURL}) ${cursorImageSizePx / 2} ${cursorImageSizePx / 2}, auto`
  );
};
var setCursorForShape = (interactiveCanvas, appState) => {
  if (!interactiveCanvas) {
    return;
  }
  if (appState.activeTool.type === "selection") {
    resetCursor(interactiveCanvas);
  } else if (isHandToolActive(appState)) {
    interactiveCanvas.style.cursor = CURSOR_TYPE.GRAB;
  } else if (isEraserActive(appState)) {
    setEraserCursor(interactiveCanvas, appState.theme);
  } else if (appState.activeTool.type === "laser") {
    const url = appState.theme === THEME.LIGHT ? laserPointerCursorDataURL_lightMode : laserPointerCursorDataURL_darkMode;
    interactiveCanvas.style.cursor = `url(${url}), auto`;
  } else if (!["image", "custom"].includes(appState.activeTool.type)) {
    interactiveCanvas.style.cursor = CURSOR_TYPE.CROSSHAIR;
  } else if (appState.activeTool.type !== "image") {
    interactiveCanvas.style.cursor = CURSOR_TYPE.AUTO;
  }
};

// element/newElement.ts
init_define_import_meta_env();

// random.ts
init_define_import_meta_env();
var random2 = new Random(Date.now());
var testIdBase = 0;
var randomInteger = () => Math.floor(random2.next() * 2 ** 31);
var randomId = () => isTestEnv() ? `id${testIdBase++}` : nanoid();

// element/newElement.ts
var _newElementBase = (type, {
  x,
  y,
  strokeColor = DEFAULT_ELEMENT_PROPS.strokeColor,
  backgroundColor = DEFAULT_ELEMENT_PROPS.backgroundColor,
  fillStyle = DEFAULT_ELEMENT_PROPS.fillStyle,
  strokeWidth = DEFAULT_ELEMENT_PROPS.strokeWidth,
  strokeStyle = DEFAULT_ELEMENT_PROPS.strokeStyle,
  roughness = DEFAULT_ELEMENT_PROPS.roughness,
  opacity = DEFAULT_ELEMENT_PROPS.opacity,
  width = 0,
  height = 0,
  angle = 0,
  groupIds = [],
  frameId = null,
  index = null,
  roundness = null,
  boundElements = null,
  link = null,
  locked = DEFAULT_ELEMENT_PROPS.locked,
  ...rest
}) => {
  const element = {
    id: rest.id || randomId(),
    type,
    x,
    y,
    width,
    height,
    angle,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    strokeStyle,
    roughness,
    opacity,
    groupIds,
    frameId,
    index,
    roundness,
    seed: rest.seed ?? randomInteger(),
    version: rest.version || 1,
    versionNonce: rest.versionNonce ?? 0,
    isDeleted: false,
    boundElements,
    updated: getUpdatedTimestamp(),
    link,
    locked,
    customData: rest.customData
  };
  return element;
};
var newElement = (opts) => _newElementBase(opts.type, opts);
var newEmbeddableElement = (opts) => {
  return _newElementBase("embeddable", opts);
};
var newIframeElement = (opts) => {
  return {
    ..._newElementBase("iframe", opts)
  };
};
var newFrameElement = (opts) => {
  const frameElement = newElementWith(
    {
      ..._newElementBase("frame", opts),
      type: "frame",
      name: opts?.name || null
    },
    {}
  );
  return frameElement;
};
var newMagicFrameElement = (opts) => {
  const frameElement = newElementWith(
    {
      ..._newElementBase("magicframe", opts),
      type: "magicframe",
      name: opts?.name || null
    },
    {}
  );
  return frameElement;
};
var getTextElementPositionOffsets = (opts, metrics) => {
  return {
    x: opts.textAlign === "center" ? metrics.width / 2 : opts.textAlign === "right" ? metrics.width : 0,
    y: opts.verticalAlign === "middle" ? metrics.height / 2 : 0
  };
};
var newTextElement = (opts) => {
  const fontFamily = opts.fontFamily || DEFAULT_FONT_FAMILY;
  const fontSize = opts.fontSize || DEFAULT_FONT_SIZE;
  const lineHeight = opts.lineHeight || getLineHeight(fontFamily);
  const text = normalizeText(opts.text);
  const metrics = measureText(
    text,
    getFontString({ fontFamily, fontSize }),
    lineHeight
  );
  const textAlign = opts.textAlign || DEFAULT_TEXT_ALIGN;
  const verticalAlign = opts.verticalAlign || DEFAULT_VERTICAL_ALIGN;
  const offsets = getTextElementPositionOffsets(
    { textAlign, verticalAlign },
    metrics
  );
  const textElementProps = {
    ..._newElementBase("text", opts),
    text,
    fontSize,
    fontFamily,
    textAlign,
    verticalAlign,
    x: opts.x - offsets.x,
    y: opts.y - offsets.y,
    width: metrics.width,
    height: metrics.height,
    containerId: opts.containerId || null,
    originalText: opts.originalText ?? text,
    autoResize: opts.autoResize ?? true,
    lineHeight
  };
  const textElement = newElementWith(
    textElementProps,
    {}
  );
  return textElement;
};
var getAdjustedDimensions = (element, elementsMap, nextText) => {
  let { width: nextWidth, height: nextHeight } = measureText(
    nextText,
    getFontString(element),
    element.lineHeight
  );
  if (!element.autoResize) {
    nextWidth = element.width;
  }
  const { textAlign, verticalAlign } = element;
  let x;
  let y;
  if (textAlign === "center" && verticalAlign === VERTICAL_ALIGN.MIDDLE && !element.containerId && element.autoResize) {
    const prevMetrics = measureText(
      element.text,
      getFontString(element),
      element.lineHeight
    );
    const offsets = getTextElementPositionOffsets(element, {
      width: nextWidth - prevMetrics.width,
      height: nextHeight - prevMetrics.height
    });
    x = element.x - offsets.x;
    y = element.y - offsets.y;
  } else {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const [nextX1, nextY1, nextX2, nextY2] = getResizedElementAbsoluteCoords(
      element,
      nextWidth,
      nextHeight,
      false
    );
    const deltaX1 = (x1 - nextX1) / 2;
    const deltaY1 = (y1 - nextY1) / 2;
    const deltaX2 = (x2 - nextX2) / 2;
    const deltaY2 = (y2 - nextY2) / 2;
    [x, y] = adjustXYWithRotation(
      {
        s: true,
        e: textAlign === "center" || textAlign === "left",
        w: textAlign === "center" || textAlign === "right"
      },
      element.x,
      element.y,
      element.angle,
      deltaX1,
      deltaY1,
      deltaX2,
      deltaY2
    );
  }
  return {
    width: nextWidth,
    height: nextHeight,
    x: Number.isFinite(x) ? x : element.x,
    y: Number.isFinite(y) ? y : element.y
  };
};
var adjustXYWithRotation = (sides, x, y, angle, deltaX1, deltaY1, deltaX2, deltaY2) => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  if (sides.e && sides.w) {
    x += deltaX1 + deltaX2;
  } else if (sides.e) {
    x += deltaX1 * (1 + cos);
    y += deltaX1 * sin;
    x += deltaX2 * (1 - cos);
    y += deltaX2 * -sin;
  } else if (sides.w) {
    x += deltaX1 * (1 - cos);
    y += deltaX1 * -sin;
    x += deltaX2 * (1 + cos);
    y += deltaX2 * sin;
  }
  if (sides.n && sides.s) {
    y += deltaY1 + deltaY2;
  } else if (sides.n) {
    x += deltaY1 * sin;
    y += deltaY1 * (1 - cos);
    x += deltaY2 * -sin;
    y += deltaY2 * (1 + cos);
  } else if (sides.s) {
    x += deltaY1 * -sin;
    y += deltaY1 * (1 + cos);
    x += deltaY2 * sin;
    y += deltaY2 * (1 - cos);
  }
  return [x, y];
};
var refreshTextDimensions = (textElement, container, elementsMap, text = textElement.text) => {
  if (textElement.isDeleted) {
    return;
  }
  if (container || !textElement.autoResize) {
    text = wrapText(
      text,
      getFontString(textElement),
      container ? getBoundTextMaxWidth(container, textElement) : textElement.width
    );
  }
  const dimensions = getAdjustedDimensions(textElement, elementsMap, text);
  return { text, ...dimensions };
};
var newFreeDrawElement = (opts) => {
  return {
    ..._newElementBase(opts.type, opts),
    points: opts.points || [],
    pressures: opts.pressures || [],
    simulatePressure: opts.simulatePressure,
    lastCommittedPoint: null
  };
};
var newLinearElement = (opts) => {
  return {
    ..._newElementBase(opts.type, opts),
    points: opts.points || [],
    lastCommittedPoint: null,
    startBinding: null,
    endBinding: null,
    startArrowhead: null,
    endArrowhead: null
  };
};
var newArrowElement = (opts) => {
  return {
    ..._newElementBase(opts.type, opts),
    points: opts.points || [],
    lastCommittedPoint: null,
    startBinding: null,
    endBinding: null,
    startArrowhead: opts.startArrowhead || null,
    endArrowhead: opts.endArrowhead || null,
    elbowed: opts.elbowed || false
  };
};
var newImageElement = (opts) => {
  return {
    ..._newElementBase("image", opts),
    // in the future we'll support changing stroke color for some SVG elements,
    // and `transparent` will likely mean "use original colors of the image"
    strokeColor: "transparent",
    status: opts.status ?? "pending",
    fileId: opts.fileId ?? null,
    scale: opts.scale ?? [1, 1]
  };
};
var _deepCopyElement = (val, depth = 0) => {
  if (val == null || typeof val !== "object") {
    return val;
  }
  const objectType = Object.prototype.toString.call(val);
  if (objectType === "[object Object]") {
    const tmp = typeof val.constructor === "function" ? Object.create(Object.getPrototypeOf(val)) : {};
    for (const key in val) {
      if (val.hasOwnProperty(key)) {
        if (depth === 0 && (key === "shape" || key === "canvas")) {
          continue;
        }
        tmp[key] = _deepCopyElement(val[key], depth + 1);
      }
    }
    return tmp;
  }
  if (Array.isArray(val)) {
    let k = val.length;
    const arr = new Array(k);
    while (k--) {
      arr[k] = _deepCopyElement(val[k], depth + 1);
    }
    return arr;
  }
  if (define_import_meta_env_default.DEV) {
    if (objectType !== "[object Object]" && objectType !== "[object Array]" && objectType.startsWith("[object ")) {
      console.warn(
        `_deepCloneElement: unexpected object type ${objectType}. This value will not be cloned!`
      );
    }
  }
  return val;
};
var deepCopyElement = (val) => {
  return _deepCopyElement(val);
};
var regenerateId = (previousId) => {
  if (isTestEnv() && previousId) {
    let nextId = `${previousId}_copy`;
    if (window.h?.app?.getSceneElementsIncludingDeleted().find((el) => el.id === nextId)) {
      nextId += "_copy";
    }
    return nextId;
  }
  return randomId();
};
var duplicateElement = (editingGroupId, groupIdMapForOperation, element, overrides) => {
  let copy = deepCopyElement(element);
  copy.id = regenerateId(copy.id);
  copy.boundElements = null;
  copy.updated = getUpdatedTimestamp();
  copy.seed = randomInteger();
  copy.groupIds = getNewGroupIdsForDuplication(
    copy.groupIds,
    editingGroupId,
    (groupId) => {
      if (!groupIdMapForOperation.has(groupId)) {
        groupIdMapForOperation.set(groupId, regenerateId(groupId));
      }
      return groupIdMapForOperation.get(groupId);
    }
  );
  if (overrides) {
    copy = Object.assign(copy, overrides);
  }
  return copy;
};
var duplicateElements = (elements, opts) => {
  const clonedElements = [];
  const origElementsMap = arrayToMap(elements);
  const elementNewIdsMap = /* @__PURE__ */ new Map();
  const maybeGetNewId = (id) => {
    if (elementNewIdsMap.has(id)) {
      return elementNewIdsMap.get(id);
    }
    if (origElementsMap.has(id)) {
      const newId = regenerateId(id);
      elementNewIdsMap.set(id, newId);
      return newId;
    }
    return null;
  };
  const groupNewIdsMap = /* @__PURE__ */ new Map();
  for (const element of elements) {
    const clonedElement = _deepCopyElement(element);
    clonedElement.id = maybeGetNewId(element.id);
    if (opts?.randomizeSeed) {
      clonedElement.seed = randomInteger();
      bumpVersion(clonedElement);
    }
    if (clonedElement.groupIds) {
      clonedElement.groupIds = clonedElement.groupIds.map((groupId) => {
        if (!groupNewIdsMap.has(groupId)) {
          groupNewIdsMap.set(groupId, regenerateId(groupId));
        }
        return groupNewIdsMap.get(groupId);
      });
    }
    if ("containerId" in clonedElement && clonedElement.containerId) {
      const newContainerId = maybeGetNewId(clonedElement.containerId);
      clonedElement.containerId = newContainerId;
    }
    if ("boundElements" in clonedElement && clonedElement.boundElements) {
      clonedElement.boundElements = clonedElement.boundElements.reduce(
        (acc, binding) => {
          const newBindingId = maybeGetNewId(binding.id);
          if (newBindingId) {
            acc.push({ ...binding, id: newBindingId });
          }
          return acc;
        },
        []
      );
    }
    if ("endBinding" in clonedElement && clonedElement.endBinding) {
      const newEndBindingId = maybeGetNewId(clonedElement.endBinding.elementId);
      clonedElement.endBinding = newEndBindingId ? {
        ...clonedElement.endBinding,
        elementId: newEndBindingId
      } : null;
    }
    if ("startBinding" in clonedElement && clonedElement.startBinding) {
      const newEndBindingId = maybeGetNewId(
        clonedElement.startBinding.elementId
      );
      clonedElement.startBinding = newEndBindingId ? {
        ...clonedElement.startBinding,
        elementId: newEndBindingId
      } : null;
    }
    if (clonedElement.frameId) {
      clonedElement.frameId = maybeGetNewId(clonedElement.frameId);
    }
    clonedElements.push(clonedElement);
  }
  return clonedElements;
};

// store.ts
init_define_import_meta_env();

// change.ts
init_define_import_meta_env();

// fractionalIndex.ts
init_define_import_meta_env();

// ../../node_modules/fractional-indexing/src/index.js
init_define_import_meta_env();
var BASE_62_DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function midpoint(a2, b2, digits) {
  const zero = digits[0];
  if (b2 != null && a2 >= b2) {
    throw new Error(a2 + " >= " + b2);
  }
  if (a2.slice(-1) === zero || b2 && b2.slice(-1) === zero) {
    throw new Error("trailing zero");
  }
  if (b2) {
    let n2 = 0;
    while ((a2[n2] || zero) === b2[n2]) {
      n2++;
    }
    if (n2 > 0) {
      return b2.slice(0, n2) + midpoint(a2.slice(n2), b2.slice(n2), digits);
    }
  }
  const digitA = a2 ? digits.indexOf(a2[0]) : 0;
  const digitB = b2 != null ? digits.indexOf(b2[0]) : digits.length;
  if (digitB - digitA > 1) {
    const midDigit = Math.round(0.5 * (digitA + digitB));
    return digits[midDigit];
  } else {
    if (b2 && b2.length > 1) {
      return b2.slice(0, 1);
    } else {
      return digits[digitA] + midpoint(a2.slice(1), null, digits);
    }
  }
}
function validateInteger(int) {
  if (int.length !== getIntegerLength(int[0])) {
    throw new Error("invalid integer part of order key: " + int);
  }
}
function getIntegerLength(head) {
  if (head >= "a" && head <= "z") {
    return head.charCodeAt(0) - "a".charCodeAt(0) + 2;
  } else if (head >= "A" && head <= "Z") {
    return "Z".charCodeAt(0) - head.charCodeAt(0) + 2;
  } else {
    throw new Error("invalid order key head: " + head);
  }
}
function getIntegerPart(key) {
  const integerPartLength = getIntegerLength(key[0]);
  if (integerPartLength > key.length) {
    throw new Error("invalid order key: " + key);
  }
  return key.slice(0, integerPartLength);
}
function validateOrderKey(key, digits) {
  if (key === "A" + digits[0].repeat(26)) {
    throw new Error("invalid order key: " + key);
  }
  const i2 = getIntegerPart(key);
  const f = key.slice(i2.length);
  if (f.slice(-1) === digits[0]) {
    throw new Error("invalid order key: " + key);
  }
}
function incrementInteger(x, digits) {
  validateInteger(x);
  const [head, ...digs] = x.split("");
  let carry = true;
  for (let i2 = digs.length - 1; carry && i2 >= 0; i2--) {
    const d = digits.indexOf(digs[i2]) + 1;
    if (d === digits.length) {
      digs[i2] = digits[0];
    } else {
      digs[i2] = digits[d];
      carry = false;
    }
  }
  if (carry) {
    if (head === "Z") {
      return "a" + digits[0];
    }
    if (head === "z") {
      return null;
    }
    const h = String.fromCharCode(head.charCodeAt(0) + 1);
    if (h > "a") {
      digs.push(digits[0]);
    } else {
      digs.pop();
    }
    return h + digs.join("");
  } else {
    return head + digs.join("");
  }
}
function decrementInteger(x, digits) {
  validateInteger(x);
  const [head, ...digs] = x.split("");
  let borrow = true;
  for (let i2 = digs.length - 1; borrow && i2 >= 0; i2--) {
    const d = digits.indexOf(digs[i2]) - 1;
    if (d === -1) {
      digs[i2] = digits.slice(-1);
    } else {
      digs[i2] = digits[d];
      borrow = false;
    }
  }
  if (borrow) {
    if (head === "a") {
      return "Z" + digits.slice(-1);
    }
    if (head === "A") {
      return null;
    }
    const h = String.fromCharCode(head.charCodeAt(0) - 1);
    if (h < "Z") {
      digs.push(digits.slice(-1));
    } else {
      digs.pop();
    }
    return h + digs.join("");
  } else {
    return head + digs.join("");
  }
}
function generateKeyBetween(a2, b2, digits = BASE_62_DIGITS) {
  if (a2 != null) {
    validateOrderKey(a2, digits);
  }
  if (b2 != null) {
    validateOrderKey(b2, digits);
  }
  if (a2 != null && b2 != null && a2 >= b2) {
    throw new Error(a2 + " >= " + b2);
  }
  if (a2 == null) {
    if (b2 == null) {
      return "a" + digits[0];
    }
    const ib2 = getIntegerPart(b2);
    const fb2 = b2.slice(ib2.length);
    if (ib2 === "A" + digits[0].repeat(26)) {
      return ib2 + midpoint("", fb2, digits);
    }
    if (ib2 < b2) {
      return ib2;
    }
    const res = decrementInteger(ib2, digits);
    if (res == null) {
      throw new Error("cannot decrement any more");
    }
    return res;
  }
  if (b2 == null) {
    const ia2 = getIntegerPart(a2);
    const fa2 = a2.slice(ia2.length);
    const i3 = incrementInteger(ia2, digits);
    return i3 == null ? ia2 + midpoint(fa2, null, digits) : i3;
  }
  const ia = getIntegerPart(a2);
  const fa = a2.slice(ia.length);
  const ib = getIntegerPart(b2);
  const fb = b2.slice(ib.length);
  if (ia === ib) {
    return ia + midpoint(fa, fb, digits);
  }
  const i2 = incrementInteger(ia, digits);
  if (i2 == null) {
    throw new Error("cannot increment any more");
  }
  if (i2 < b2) {
    return i2;
  }
  return ia + midpoint(fa, null, digits);
}
function generateNKeysBetween(a2, b2, n2, digits = BASE_62_DIGITS) {
  if (n2 === 0) {
    return [];
  }
  if (n2 === 1) {
    return [generateKeyBetween(a2, b2, digits)];
  }
  if (b2 == null) {
    let c2 = generateKeyBetween(a2, b2, digits);
    const result = [c2];
    for (let i2 = 0; i2 < n2 - 1; i2++) {
      c2 = generateKeyBetween(c2, b2, digits);
      result.push(c2);
    }
    return result;
  }
  if (a2 == null) {
    let c2 = generateKeyBetween(a2, b2, digits);
    const result = [c2];
    for (let i2 = 0; i2 < n2 - 1; i2++) {
      c2 = generateKeyBetween(a2, c2, digits);
      result.push(c2);
    }
    result.reverse();
    return result;
  }
  const mid = Math.floor(n2 / 2);
  const c = generateKeyBetween(a2, b2, digits);
  return [
    ...generateNKeysBetween(a2, c, mid, digits),
    c,
    ...generateNKeysBetween(c, b2, n2 - mid - 1, digits)
  ];
}

// errors.ts
init_define_import_meta_env();
var CanvasError = class extends Error {
  constructor(message = "Couldn't export canvas.", name = "CANVAS_ERROR") {
    super();
    this.name = name;
    this.message = message;
  }
};
var AbortError = class extends DOMException {
  constructor(message = "Request Aborted") {
    super(message, "AbortError");
  }
};
var ImageSceneDataError = class extends Error {
  code;
  constructor(message = "Image Scene Data Error", code = "IMAGE_SCENE_DATA_ERROR") {
    super(message);
    this.name = "EncodingError";
    this.code = code;
  }
};
var InvalidFractionalIndexError = class extends Error {
  code = "ELEMENT_HAS_INVALID_INDEX";
};

// fractionalIndex.ts
var validateFractionalIndices = (elements, {
  shouldThrow = false,
  includeBoundTextValidation = false,
  ignoreLogs,
  reconciliationContext
}) => {
  const errorMessages = [];
  const stringifyElement = (element) => `${element?.index}:${element?.id}:${element?.type}:${element?.isDeleted}:${element?.version}:${element?.versionNonce}`;
  const indices = elements.map((x) => x.index);
  for (const [i2, index] of indices.entries()) {
    const predecessorIndex = indices[i2 - 1];
    const successorIndex = indices[i2 + 1];
    if (!isValidFractionalIndex(index, predecessorIndex, successorIndex)) {
      errorMessages.push(
        `Fractional indices invariant has been compromised: "${stringifyElement(
          elements[i2 - 1]
        )}", "${stringifyElement(elements[i2])}", "${stringifyElement(
          elements[i2 + 1]
        )}"`
      );
    }
    if (includeBoundTextValidation && hasBoundTextElement(elements[i2])) {
      const container = elements[i2];
      const text = getBoundTextElement(container, arrayToMap(elements));
      if (text && text.index <= container.index) {
        errorMessages.push(
          `Fractional indices invariant for bound elements has been compromised: "${stringifyElement(
            text
          )}", "${stringifyElement(container)}"`
        );
      }
    }
  }
  if (errorMessages.length) {
    const error = new InvalidFractionalIndexError();
    const additionalContext = [];
    if (reconciliationContext) {
      additionalContext.push("Additional reconciliation context:");
      additionalContext.push(
        reconciliationContext.localElements.map((x) => stringifyElement(x))
      );
      additionalContext.push(
        reconciliationContext.remoteElements.map((x) => stringifyElement(x))
      );
    }
    if (!ignoreLogs) {
      console.error(
        errorMessages.join("\n\n"),
        error.stack,
        elements.map((x) => stringifyElement(x)),
        ...additionalContext
      );
    }
    if (shouldThrow) {
      throw error;
    }
  }
};
var orderByFractionalIndex = (elements) => {
  return elements.sort((a2, b2) => {
    if (isOrderedElement(a2) && isOrderedElement(b2)) {
      if (a2.index < b2.index) {
        return -1;
      } else if (a2.index > b2.index) {
        return 1;
      }
      return a2.id < b2.id ? -1 : 1;
    }
    return 1;
  });
};
var syncMovedIndices = (elements, movedElements) => {
  try {
    const indicesGroups = getMovedIndicesGroups(elements, movedElements);
    const elementsUpdates = generateIndices(elements, indicesGroups);
    const elementsCandidates = elements.map(
      (x) => elementsUpdates.has(x) ? { ...x, ...elementsUpdates.get(x) } : x
    );
    validateFractionalIndices(
      elementsCandidates,
      // we don't autofix invalid bound text indices, hence don't include it in the validation
      {
        includeBoundTextValidation: false,
        shouldThrow: true,
        ignoreLogs: true
      }
    );
    for (const [element, update] of elementsUpdates) {
      mutateElement(element, update, false);
    }
  } catch (e2) {
    syncInvalidIndices(elements);
  }
  return elements;
};
var syncInvalidIndices = (elements) => {
  const indicesGroups = getInvalidIndicesGroups(elements);
  const elementsUpdates = generateIndices(elements, indicesGroups);
  for (const [element, update] of elementsUpdates) {
    mutateElement(element, update, false);
  }
  return elements;
};
var getMovedIndicesGroups = (elements, movedElements) => {
  const indicesGroups = [];
  let i2 = 0;
  while (i2 < elements.length) {
    if (movedElements.has(elements[i2].id)) {
      const indicesGroup = [i2 - 1, i2];
      while (++i2 < elements.length) {
        if (!movedElements.has(elements[i2].id)) {
          break;
        }
        indicesGroup.push(i2);
      }
      indicesGroup.push(i2);
      indicesGroups.push(indicesGroup);
    } else {
      i2++;
    }
  }
  return indicesGroups;
};
var getInvalidIndicesGroups = (elements) => {
  const indicesGroups = [];
  let lowerBound = void 0;
  let upperBound = void 0;
  let lowerBoundIndex = -1;
  let upperBoundIndex = 0;
  const getLowerBound = (index) => {
    const lowerBound2 = elements[lowerBoundIndex] ? elements[lowerBoundIndex].index : void 0;
    const candidate = elements[index - 1]?.index;
    if (!lowerBound2 && candidate || // first lowerBound
    lowerBound2 && candidate && candidate > lowerBound2) {
      return [candidate, index - 1];
    }
    return [lowerBound2, lowerBoundIndex];
  };
  const getUpperBound = (index) => {
    const upperBound2 = elements[upperBoundIndex] ? elements[upperBoundIndex].index : void 0;
    if (upperBound2 && index < upperBoundIndex) {
      return [upperBound2, upperBoundIndex];
    }
    let i3 = upperBoundIndex;
    while (++i3 < elements.length) {
      const candidate = elements[i3]?.index;
      if (!upperBound2 && candidate || // first upperBound
      upperBound2 && candidate && candidate > upperBound2) {
        return [candidate, i3];
      }
    }
    return [void 0, i3];
  };
  let i2 = 0;
  while (i2 < elements.length) {
    const current = elements[i2].index;
    [lowerBound, lowerBoundIndex] = getLowerBound(i2);
    [upperBound, upperBoundIndex] = getUpperBound(i2);
    if (!isValidFractionalIndex(current, lowerBound, upperBound)) {
      const indicesGroup = [lowerBoundIndex, i2];
      while (++i2 < elements.length) {
        const current2 = elements[i2].index;
        const [nextLowerBound, nextLowerBoundIndex] = getLowerBound(i2);
        const [nextUpperBound, nextUpperBoundIndex] = getUpperBound(i2);
        if (isValidFractionalIndex(current2, nextLowerBound, nextUpperBound)) {
          break;
        }
        [lowerBound, lowerBoundIndex] = [nextLowerBound, nextLowerBoundIndex];
        [upperBound, upperBoundIndex] = [nextUpperBound, nextUpperBoundIndex];
        indicesGroup.push(i2);
      }
      indicesGroup.push(upperBoundIndex);
      indicesGroups.push(indicesGroup);
    } else {
      i2++;
    }
  }
  return indicesGroups;
};
var isValidFractionalIndex = (index, predecessor, successor) => {
  if (!index) {
    return false;
  }
  if (predecessor && successor) {
    return predecessor < index && index < successor;
  }
  if (!predecessor && successor) {
    return index < successor;
  }
  if (predecessor && !successor) {
    return predecessor < index;
  }
  return !!index;
};
var generateIndices = (elements, indicesGroups) => {
  const elementsUpdates = /* @__PURE__ */ new Map();
  for (const indices of indicesGroups) {
    const lowerBoundIndex = indices.shift();
    const upperBoundIndex = indices.pop();
    const fractionalIndices = generateNKeysBetween(
      elements[lowerBoundIndex]?.index,
      elements[upperBoundIndex]?.index,
      indices.length
    );
    for (let i2 = 0; i2 < indices.length; i2++) {
      const element = elements[indices[i2]];
      elementsUpdates.set(element, {
        index: fractionalIndices[i2]
      });
    }
  }
  return elementsUpdates;
};
var isOrderedElement = (element) => {
  if (element.index) {
    return true;
  }
  return false;
};

// change.ts
var Delta = class _Delta {
  constructor(deleted, inserted) {
    this.deleted = deleted;
    this.inserted = inserted;
  }
  static create(deleted, inserted, modifier, modifierOptions) {
    const modifiedDeleted = modifier && modifierOptions !== "inserted" ? modifier(deleted) : deleted;
    const modifiedInserted = modifier && modifierOptions !== "deleted" ? modifier(inserted) : inserted;
    return new _Delta(modifiedDeleted, modifiedInserted);
  }
  /**
   * Calculates the delta between two objects.
   *
   * @param prevObject - The previous state of the object.
   * @param nextObject - The next state of the object.
   *
   * @returns new delta instance.
   */
  static calculate(prevObject, nextObject, modifier, postProcess) {
    if (prevObject === nextObject) {
      return _Delta.empty();
    }
    const deleted = {};
    const inserted = {};
    for (const key of this.distinctKeysIterator(
      "full",
      prevObject,
      nextObject
    )) {
      deleted[key] = prevObject[key];
      inserted[key] = nextObject[key];
    }
    const [processedDeleted, processedInserted] = postProcess ? postProcess(deleted, inserted) : [deleted, inserted];
    return _Delta.create(processedDeleted, processedInserted, modifier);
  }
  static empty() {
    return new _Delta({}, {});
  }
  static isEmpty(delta) {
    return !Object.keys(delta.deleted).length && !Object.keys(delta.inserted).length;
  }
  /**
   * Merges deleted and inserted object partials.
   */
  static mergeObjects(prev, added, removed) {
    const cloned = { ...prev };
    for (const key of Object.keys(removed)) {
      delete cloned[key];
    }
    return { ...cloned, ...added };
  }
  /**
   * Merges deleted and inserted array partials.
   */
  static mergeArrays(prev, added, removed, predicate) {
    return Object.values(
      _Delta.mergeObjects(
        arrayToObject(prev ?? [], predicate),
        arrayToObject(added ?? [], predicate),
        arrayToObject(removed ?? [], predicate)
      )
    );
  }
  /**
   * Diff object partials as part of the `postProcess`.
   */
  static diffObjects(deleted, inserted, property, setValue) {
    if (!deleted[property] && !inserted[property]) {
      return;
    }
    if (typeof deleted[property] === "object" || typeof inserted[property] === "object") {
      const deletedObject = deleted[property] ?? {};
      const insertedObject = inserted[property] ?? {};
      const deletedDifferences = _Delta.getLeftDifferences(
        deletedObject,
        insertedObject
      ).reduce((acc, curr) => {
        acc[curr] = setValue(deletedObject[curr]);
        return acc;
      }, {});
      const insertedDifferences = _Delta.getRightDifferences(
        deletedObject,
        insertedObject
      ).reduce((acc, curr) => {
        acc[curr] = setValue(insertedObject[curr]);
        return acc;
      }, {});
      if (Object.keys(deletedDifferences).length || Object.keys(insertedDifferences).length) {
        Reflect.set(deleted, property, deletedDifferences);
        Reflect.set(inserted, property, insertedDifferences);
      } else {
        Reflect.deleteProperty(deleted, property);
        Reflect.deleteProperty(inserted, property);
      }
    }
  }
  /**
   * Diff array partials as part of the `postProcess`.
   */
  static diffArrays(deleted, inserted, property, groupBy) {
    if (!deleted[property] && !inserted[property]) {
      return;
    }
    if (Array.isArray(deleted[property]) || Array.isArray(inserted[property])) {
      const deletedArray = Array.isArray(deleted[property]) ? deleted[property] : [];
      const insertedArray = Array.isArray(inserted[property]) ? inserted[property] : [];
      const deletedDifferences = arrayToObject(
        _Delta.getLeftDifferences(
          arrayToObject(deletedArray, groupBy),
          arrayToObject(insertedArray, groupBy)
        )
      );
      const insertedDifferences = arrayToObject(
        _Delta.getRightDifferences(
          arrayToObject(deletedArray, groupBy),
          arrayToObject(insertedArray, groupBy)
        )
      );
      if (Object.keys(deletedDifferences).length || Object.keys(insertedDifferences).length) {
        const deletedValue = deletedArray.filter(
          (x) => deletedDifferences[groupBy ? groupBy(x) : String(x)]
        );
        const insertedValue = insertedArray.filter(
          (x) => insertedDifferences[groupBy ? groupBy(x) : String(x)]
        );
        Reflect.set(deleted, property, deletedValue);
        Reflect.set(inserted, property, insertedValue);
      } else {
        Reflect.deleteProperty(deleted, property);
        Reflect.deleteProperty(inserted, property);
      }
    }
  }
  /**
   * Compares if object1 contains any different value compared to the object2.
   */
  static isLeftDifferent(object1, object2, skipShallowCompare = false) {
    const anyDistinctKey = this.distinctKeysIterator(
      "left",
      object1,
      object2,
      skipShallowCompare
    ).next().value;
    return !!anyDistinctKey;
  }
  /**
   * Compares if object2 contains any different value compared to the object1.
   */
  static isRightDifferent(object1, object2, skipShallowCompare = false) {
    const anyDistinctKey = this.distinctKeysIterator(
      "right",
      object1,
      object2,
      skipShallowCompare
    ).next().value;
    return !!anyDistinctKey;
  }
  /**
   * Returns all the object1 keys that have distinct values.
   */
  static getLeftDifferences(object1, object2, skipShallowCompare = false) {
    return Array.from(
      this.distinctKeysIterator("left", object1, object2, skipShallowCompare)
    );
  }
  /**
   * Returns all the object2 keys that have distinct values.
   */
  static getRightDifferences(object1, object2, skipShallowCompare = false) {
    return Array.from(
      this.distinctKeysIterator("right", object1, object2, skipShallowCompare)
    );
  }
  /**
   * Iterator comparing values of object properties based on the passed joining strategy.
   *
   * @yields keys of properties with different values
   *
   * WARN: it's based on shallow compare performed only on the first level and doesn't go deeper than that.
   */
  static *distinctKeysIterator(join2, object1, object2, skipShallowCompare = false) {
    if (object1 === object2) {
      return;
    }
    let keys = [];
    if (join2 === "left") {
      keys = Object.keys(object1);
    } else if (join2 === "right") {
      keys = Object.keys(object2);
    } else if (join2 === "full") {
      keys = Array.from(
        /* @__PURE__ */ new Set([...Object.keys(object1), ...Object.keys(object2)])
      );
    } else {
      assertNever(
        join2,
        `Unknown distinctKeysIterator's join param "${join2}"`,
        true
      );
    }
    for (const key of keys) {
      const object1Value = object1[key];
      const object2Value = object2[key];
      if (object1Value !== object2Value) {
        if (!skipShallowCompare && typeof object1Value === "object" && typeof object2Value === "object" && object1Value !== null && object2Value !== null && isShallowEqual(object1Value, object2Value)) {
          continue;
        }
        yield key;
      }
    }
  }
};
var AppStateChange = class _AppStateChange {
  constructor(delta) {
    this.delta = delta;
  }
  static calculate(prevAppState, nextAppState) {
    const delta = Delta.calculate(
      prevAppState,
      nextAppState,
      void 0,
      _AppStateChange.postProcess
    );
    return new _AppStateChange(delta);
  }
  static empty() {
    return new _AppStateChange(Delta.create({}, {}));
  }
  inverse() {
    const inversedDelta = Delta.create(this.delta.inserted, this.delta.deleted);
    return new _AppStateChange(inversedDelta);
  }
  applyTo(appState, nextElements) {
    try {
      const {
        selectedElementIds: removedSelectedElementIds = {},
        selectedGroupIds: removedSelectedGroupIds = {}
      } = this.delta.deleted;
      const {
        selectedElementIds: addedSelectedElementIds = {},
        selectedGroupIds: addedSelectedGroupIds = {},
        selectedLinearElementId,
        editingLinearElementId,
        ...directlyApplicablePartial
      } = this.delta.inserted;
      const mergedSelectedElementIds = Delta.mergeObjects(
        appState.selectedElementIds,
        addedSelectedElementIds,
        removedSelectedElementIds
      );
      const mergedSelectedGroupIds = Delta.mergeObjects(
        appState.selectedGroupIds,
        addedSelectedGroupIds,
        removedSelectedGroupIds
      );
      const selectedLinearElement = selectedLinearElementId && nextElements.has(selectedLinearElementId) ? new LinearElementEditor(
        nextElements.get(
          selectedLinearElementId
        )
      ) : null;
      const editingLinearElement = editingLinearElementId && nextElements.has(editingLinearElementId) ? new LinearElementEditor(
        nextElements.get(
          editingLinearElementId
        )
      ) : null;
      const nextAppState = {
        ...appState,
        ...directlyApplicablePartial,
        selectedElementIds: mergedSelectedElementIds,
        selectedGroupIds: mergedSelectedGroupIds,
        selectedLinearElement: typeof selectedLinearElementId !== "undefined" ? selectedLinearElement : appState.selectedLinearElement,
        // otherwise assign what we had before
        editingLinearElement: typeof editingLinearElementId !== "undefined" ? editingLinearElement : appState.editingLinearElement
        // otherwise assign what we had before
      };
      const constainsVisibleChanges = this.filterInvisibleChanges(
        appState,
        nextAppState,
        nextElements
      );
      return [nextAppState, constainsVisibleChanges];
    } catch (e2) {
      console.error(`Couldn't apply appstate change`, e2);
      if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
        throw e2;
      }
      return [appState, false];
    }
  }
  isEmpty() {
    return Delta.isEmpty(this.delta);
  }
  /**
   * It is necessary to post process the partials in case of reference values,
   * for which we need to calculate the real diff between `deleted` and `inserted`.
   */
  static postProcess(deleted, inserted) {
    try {
      Delta.diffObjects(
        deleted,
        inserted,
        "selectedElementIds",
        // ts language server has a bit trouble resolving this, so we are giving it a little push
        (_) => true
      );
      Delta.diffObjects(
        deleted,
        inserted,
        "selectedGroupIds",
        (prevValue) => prevValue ?? false
      );
    } catch (e2) {
      console.error(`Couldn't postprocess appstate change deltas.`);
      if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
        throw e2;
      }
    } finally {
      return [deleted, inserted];
    }
  }
  /**
   * Mutates `nextAppState` be filtering out state related to deleted elements.
   *
   * @returns `true` if a visible change is found, `false` otherwise.
   */
  filterInvisibleChanges(prevAppState, nextAppState, nextElements) {
    const prevObservedAppState = getObservedAppState(prevAppState);
    const nextObservedAppState = getObservedAppState(nextAppState);
    const containsStandaloneDifference = Delta.isRightDifferent(
      _AppStateChange.stripElementsProps(prevObservedAppState),
      _AppStateChange.stripElementsProps(nextObservedAppState)
    );
    const containsElementsDifference = Delta.isRightDifferent(
      _AppStateChange.stripStandaloneProps(prevObservedAppState),
      _AppStateChange.stripStandaloneProps(nextObservedAppState)
    );
    if (!containsStandaloneDifference && !containsElementsDifference) {
      return false;
    }
    const visibleDifferenceFlag = {
      value: containsStandaloneDifference
    };
    if (containsElementsDifference) {
      const changedElementsProps = Delta.getRightDifferences(
        _AppStateChange.stripStandaloneProps(prevObservedAppState),
        _AppStateChange.stripStandaloneProps(nextObservedAppState)
      );
      let nonDeletedGroupIds = /* @__PURE__ */ new Set();
      if (changedElementsProps.includes("editingGroupId") || changedElementsProps.includes("selectedGroupIds")) {
        nonDeletedGroupIds = getNonDeletedGroupIds(nextElements);
      }
      for (const key of changedElementsProps) {
        switch (key) {
          case "selectedElementIds":
            nextAppState[key] = _AppStateChange.filterSelectedElements(
              nextAppState[key],
              nextElements,
              visibleDifferenceFlag
            );
            break;
          case "selectedGroupIds":
            nextAppState[key] = _AppStateChange.filterSelectedGroups(
              nextAppState[key],
              nonDeletedGroupIds,
              visibleDifferenceFlag
            );
            break;
          case "editingGroupId":
            const editingGroupId = nextAppState[key];
            if (!editingGroupId) {
              visibleDifferenceFlag.value = true;
            } else if (nonDeletedGroupIds.has(editingGroupId)) {
              visibleDifferenceFlag.value = true;
            } else {
              nextAppState[key] = null;
            }
            break;
          case "selectedLinearElementId":
          case "editingLinearElementId":
            const appStateKey = _AppStateChange.convertToAppStateKey(key);
            const linearElement = nextAppState[appStateKey];
            if (!linearElement) {
              visibleDifferenceFlag.value = true;
            } else {
              const element = nextElements.get(linearElement.elementId);
              if (element && !element.isDeleted) {
                visibleDifferenceFlag.value = true;
              } else {
                nextAppState[appStateKey] = null;
              }
            }
            break;
          default: {
            assertNever(
              key,
              `Unknown ObservedElementsAppState's key "${key}"`,
              true
            );
          }
        }
      }
    }
    return visibleDifferenceFlag.value;
  }
  static convertToAppStateKey(key) {
    switch (key) {
      case "selectedLinearElementId":
        return "selectedLinearElement";
      case "editingLinearElementId":
        return "editingLinearElement";
    }
  }
  static filterSelectedElements(selectedElementIds, elements, visibleDifferenceFlag) {
    const ids = Object.keys(selectedElementIds);
    if (!ids.length) {
      visibleDifferenceFlag.value = true;
      return selectedElementIds;
    }
    const nextSelectedElementIds = { ...selectedElementIds };
    for (const id of ids) {
      const element = elements.get(id);
      if (element && !element.isDeleted) {
        visibleDifferenceFlag.value = true;
      } else {
        delete nextSelectedElementIds[id];
      }
    }
    return nextSelectedElementIds;
  }
  static filterSelectedGroups(selectedGroupIds, nonDeletedGroupIds, visibleDifferenceFlag) {
    const ids = Object.keys(selectedGroupIds);
    if (!ids.length) {
      visibleDifferenceFlag.value = true;
      return selectedGroupIds;
    }
    const nextSelectedGroupIds = { ...selectedGroupIds };
    for (const id of Object.keys(nextSelectedGroupIds)) {
      if (nonDeletedGroupIds.has(id)) {
        visibleDifferenceFlag.value = true;
      } else {
        delete nextSelectedGroupIds[id];
      }
    }
    return nextSelectedGroupIds;
  }
  static stripElementsProps(delta) {
    const {
      editingGroupId,
      selectedGroupIds,
      selectedElementIds,
      editingLinearElementId,
      selectedLinearElementId,
      ...standaloneProps
    } = delta;
    return standaloneProps;
  }
  static stripStandaloneProps(delta) {
    const { name, viewBackgroundColor, ...elementsProps } = delta;
    return elementsProps;
  }
};
var ElementsChange = class _ElementsChange {
  constructor(added, removed, updated) {
    this.added = added;
    this.removed = removed;
    this.updated = updated;
  }
  static create(added, removed, updated, options = { shouldRedistribute: false }) {
    let change;
    if (options.shouldRedistribute) {
      const nextAdded = /* @__PURE__ */ new Map();
      const nextRemoved = /* @__PURE__ */ new Map();
      const nextUpdated = /* @__PURE__ */ new Map();
      const deltas = [...added, ...removed, ...updated];
      for (const [id, delta] of deltas) {
        if (this.satisfiesAddition(delta)) {
          nextAdded.set(id, delta);
        } else if (this.satisfiesRemoval(delta)) {
          nextRemoved.set(id, delta);
        } else {
          nextUpdated.set(id, delta);
        }
      }
      change = new _ElementsChange(nextAdded, nextRemoved, nextUpdated);
    } else {
      change = new _ElementsChange(added, removed, updated);
    }
    if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
      _ElementsChange.validate(change, "added", this.satisfiesAddition);
      _ElementsChange.validate(change, "removed", this.satisfiesRemoval);
      _ElementsChange.validate(change, "updated", this.satisfiesUpdate);
    }
    return change;
  }
  static satisfiesAddition = ({
    deleted,
    inserted
  }) => (
    // dissallowing added as "deleted", which could cause issues when resolving conflicts
    deleted.isDeleted === true && !inserted.isDeleted
  );
  static satisfiesRemoval = ({
    deleted,
    inserted
  }) => !deleted.isDeleted && inserted.isDeleted === true;
  static satisfiesUpdate = ({
    deleted,
    inserted
  }) => !!deleted.isDeleted === !!inserted.isDeleted;
  static validate(change, type, satifies) {
    for (const [id, delta] of change[type].entries()) {
      if (!satifies(delta)) {
        console.error(
          `Broken invariant for "${type}" delta, element "${id}", delta:`,
          delta
        );
        throw new Error(`ElementsChange invariant broken for element "${id}".`);
      }
    }
  }
  /**
   * Calculates the `Delta`s between the previous and next set of elements.
   *
   * @param prevElements - Map representing the previous state of elements.
   * @param nextElements - Map representing the next state of elements.
   *
   * @returns `ElementsChange` instance representing the `Delta` changes between the two sets of elements.
   */
  static calculate(prevElements, nextElements) {
    if (prevElements === nextElements) {
      return _ElementsChange.empty();
    }
    const added = /* @__PURE__ */ new Map();
    const removed = /* @__PURE__ */ new Map();
    const updated = /* @__PURE__ */ new Map();
    for (const prevElement of prevElements.values()) {
      const nextElement = nextElements.get(prevElement.id);
      if (!nextElement) {
        const deleted = { ...prevElement, isDeleted: false };
        const inserted = { isDeleted: true };
        const delta = Delta.create(
          deleted,
          inserted,
          _ElementsChange.stripIrrelevantProps
        );
        removed.set(prevElement.id, delta);
      }
    }
    for (const nextElement of nextElements.values()) {
      const prevElement = prevElements.get(nextElement.id);
      if (!prevElement) {
        const deleted = { isDeleted: true };
        const inserted = {
          ...nextElement,
          isDeleted: false
        };
        const delta = Delta.create(
          deleted,
          inserted,
          _ElementsChange.stripIrrelevantProps
        );
        added.set(nextElement.id, delta);
        continue;
      }
      if (prevElement.versionNonce !== nextElement.versionNonce) {
        const delta = Delta.calculate(
          prevElement,
          nextElement,
          _ElementsChange.stripIrrelevantProps,
          _ElementsChange.postProcess
        );
        if (
          // making sure we don't get here some non-boolean values (i.e. undefined, null, etc.)
          typeof prevElement.isDeleted === "boolean" && typeof nextElement.isDeleted === "boolean" && prevElement.isDeleted !== nextElement.isDeleted
        ) {
          if (prevElement.isDeleted && !nextElement.isDeleted) {
            added.set(nextElement.id, delta);
          } else {
            removed.set(nextElement.id, delta);
          }
          continue;
        }
        if (!Delta.isEmpty(delta)) {
          updated.set(nextElement.id, delta);
        }
      }
    }
    return _ElementsChange.create(added, removed, updated);
  }
  static empty() {
    return _ElementsChange.create(/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map());
  }
  inverse() {
    const inverseInternal = (deltas) => {
      const inversedDeltas = /* @__PURE__ */ new Map();
      for (const [id, delta] of deltas.entries()) {
        inversedDeltas.set(id, Delta.create(delta.inserted, delta.deleted));
      }
      return inversedDeltas;
    };
    const added = inverseInternal(this.added);
    const removed = inverseInternal(this.removed);
    const updated = inverseInternal(this.updated);
    return _ElementsChange.create(removed, added, updated);
  }
  isEmpty() {
    return this.added.size === 0 && this.removed.size === 0 && this.updated.size === 0;
  }
  /**
   * Update delta/s based on the existing elements.
   *
   * @param elements current elements
   * @param modifierOptions defines which of the delta (`deleted` or `inserted`) will be updated
   * @returns new instance with modified delta/s
   */
  applyLatestChanges(elements) {
    const modifier = (element) => (partial) => {
      const latestPartial = {};
      for (const key of Object.keys(partial)) {
        switch (key) {
          case "boundElements":
            latestPartial[key] = partial[key];
            break;
          default:
            latestPartial[key] = element[key];
        }
      }
      return latestPartial;
    };
    const applyLatestChangesInternal = (deltas) => {
      const modifiedDeltas = /* @__PURE__ */ new Map();
      for (const [id, delta] of deltas.entries()) {
        const existingElement = elements.get(id);
        if (existingElement) {
          const modifiedDelta = Delta.create(
            delta.deleted,
            delta.inserted,
            modifier(existingElement),
            "inserted"
          );
          modifiedDeltas.set(id, modifiedDelta);
        } else {
          modifiedDeltas.set(id, delta);
        }
      }
      return modifiedDeltas;
    };
    const added = applyLatestChangesInternal(this.added);
    const removed = applyLatestChangesInternal(this.removed);
    const updated = applyLatestChangesInternal(this.updated);
    return _ElementsChange.create(added, removed, updated, {
      shouldRedistribute: true
      // redistribute the deltas as `isDeleted` could have been updated
    });
  }
  applyTo(elements, snapshot) {
    let nextElements = toBrandedType(new Map(elements));
    let changedElements;
    const flags = {
      containsVisibleDifference: false,
      containsZindexDifference: false
    };
    try {
      const applyDeltas = _ElementsChange.createApplier(
        nextElements,
        snapshot,
        flags
      );
      const addedElements = applyDeltas(this.added);
      const removedElements = applyDeltas(this.removed);
      const updatedElements = applyDeltas(this.updated);
      const affectedElements = this.resolveConflicts(elements, nextElements);
      changedElements = new Map([
        ...addedElements,
        ...removedElements,
        ...updatedElements,
        ...affectedElements
      ]);
    } catch (e2) {
      console.error(`Couldn't apply elements change`, e2);
      if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
        throw e2;
      }
      return [elements, true];
    }
    try {
      _ElementsChange.redrawTextBoundingBoxes(nextElements, changedElements);
      nextElements = _ElementsChange.reorderElements(
        nextElements,
        changedElements,
        flags
      );
      _ElementsChange.redrawBoundArrows(nextElements, changedElements);
    } catch (e2) {
      console.error(
        `Couldn't mutate elements after applying elements change`,
        e2
      );
      if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
        throw e2;
      }
    } finally {
      return [nextElements, flags.containsVisibleDifference];
    }
  }
  static createApplier = (nextElements, snapshot, flags) => {
    const getElement = _ElementsChange.createGetter(
      nextElements,
      snapshot,
      flags
    );
    return (deltas) => Array.from(deltas.entries()).reduce((acc, [id, delta]) => {
      const element = getElement(id, delta.inserted);
      if (element) {
        const newElement2 = _ElementsChange.applyDelta(element, delta, flags);
        nextElements.set(newElement2.id, newElement2);
        acc.set(newElement2.id, newElement2);
      }
      return acc;
    }, /* @__PURE__ */ new Map());
  };
  static createGetter = (elements, snapshot, flags) => (id, partial) => {
    let element = elements.get(id);
    if (!element) {
      element = snapshot.get(id);
      if (element) {
        flags.containsZindexDifference = true;
        if (partial.isDeleted === false || partial.isDeleted !== true && element.isDeleted === false) {
          flags.containsVisibleDifference = true;
        }
      }
    }
    return element;
  };
  static applyDelta(element, delta, flags = {
    // by default we don't care about about the flags
    containsVisibleDifference: true,
    containsZindexDifference: true
  }) {
    const { boundElements, ...directlyApplicablePartial } = delta.inserted;
    if (delta.deleted.boundElements?.length || delta.inserted.boundElements?.length) {
      const mergedBoundElements = Delta.mergeArrays(
        element.boundElements,
        delta.inserted.boundElements,
        delta.deleted.boundElements,
        (x) => x.id
      );
      Object.assign(directlyApplicablePartial, {
        boundElements: mergedBoundElements
      });
    }
    if (!flags.containsVisibleDifference) {
      const { index, ...rest } = directlyApplicablePartial;
      const containsVisibleDifference = _ElementsChange.checkForVisibleDifference(element, rest);
      flags.containsVisibleDifference = containsVisibleDifference;
    }
    if (!flags.containsZindexDifference) {
      flags.containsZindexDifference = delta.deleted.index !== delta.inserted.index;
    }
    return newElementWith(element, directlyApplicablePartial);
  }
  /**
   * Check for visible changes regardless of whether they were removed, added or updated.
   */
  static checkForVisibleDifference(element, partial) {
    if (element.isDeleted && partial.isDeleted !== false) {
      return false;
    }
    if (element.isDeleted && partial.isDeleted === false) {
      return true;
    }
    if (element.isDeleted === false && partial.isDeleted) {
      return true;
    }
    return Delta.isRightDifferent(element, partial);
  }
  /**
   * Resolves conflicts for all previously added, removed and updated elements.
   * Updates the previous deltas with all the changes after conflict resolution.
   *
   * @returns all elements affected by the conflict resolution
   */
  resolveConflicts(prevElements, nextElements) {
    const nextAffectedElements = /* @__PURE__ */ new Map();
    const updater = (element, updates) => {
      const nextElement = nextElements.get(element.id);
      if (!nextElement) {
        return;
      }
      let affectedElement;
      if (prevElements.get(element.id) === nextElement) {
        affectedElement = newElementWith(
          nextElement,
          updates
        );
      } else {
        affectedElement = mutateElement(
          nextElement,
          updates
        );
      }
      nextAffectedElements.set(affectedElement.id, affectedElement);
      nextElements.set(affectedElement.id, affectedElement);
    };
    for (const [id] of this.removed) {
      _ElementsChange.unbindAffected(prevElements, nextElements, id, updater);
    }
    for (const [id] of this.added) {
      _ElementsChange.rebindAffected(prevElements, nextElements, id, updater);
    }
    for (const [id] of Array.from(this.updated).filter(
      ([_, delta]) => Object.keys({ ...delta.deleted, ...delta.inserted }).find(
        (prop) => bindingProperties.has(prop)
      )
    )) {
      const updatedElement = nextElements.get(id);
      if (!updatedElement || updatedElement.isDeleted) {
        continue;
      }
      _ElementsChange.rebindAffected(prevElements, nextElements, id, updater);
    }
    const prevAffectedElements = new Map(
      Array.from(prevElements).filter(([id]) => nextAffectedElements.has(id))
    );
    const { added, removed, updated } = _ElementsChange.calculate(
      prevAffectedElements,
      nextAffectedElements
    );
    for (const [id, delta] of added) {
      this.added.set(id, delta);
    }
    for (const [id, delta] of removed) {
      this.removed.set(id, delta);
    }
    for (const [id, delta] of updated) {
      this.updated.set(id, delta);
    }
    return nextAffectedElements;
  }
  /**
   * Non deleted affected elements of removed elements (before and after applying delta),
   * should be unbound ~ bindings should not point from non deleted into the deleted element/s.
   */
  static unbindAffected(prevElements, nextElements, id, updater) {
    const prevElement = () => prevElements.get(id);
    const nextElement = () => nextElements.get(id);
    BoundElement.unbindAffected(nextElements, prevElement(), updater);
    BoundElement.unbindAffected(nextElements, nextElement(), updater);
    BindableElement.unbindAffected(nextElements, prevElement(), updater);
    BindableElement.unbindAffected(nextElements, nextElement(), updater);
  }
  /**
   * Non deleted affected elements of added or updated element/s (before and after applying delta),
   * should be rebound (if possible) with the current element ~ bindings should be bidirectional.
   */
  static rebindAffected(prevElements, nextElements, id, updater) {
    const prevElement = () => prevElements.get(id);
    const nextElement = () => nextElements.get(id);
    BoundElement.unbindAffected(nextElements, prevElement(), updater);
    BoundElement.rebindAffected(nextElements, nextElement(), updater);
    BindableElement.unbindAffected(
      nextElements,
      prevElement(),
      (element, updates) => {
        if (isTextElement(element)) {
          updater(element, updates);
        }
      }
    );
    BindableElement.rebindAffected(nextElements, nextElement(), updater);
  }
  static redrawTextBoundingBoxes(elements, changed) {
    const boxesToRedraw = /* @__PURE__ */ new Map();
    for (const element of changed.values()) {
      if (isBoundToContainer(element)) {
        const { containerId } = element;
        const container = containerId ? elements.get(containerId) : void 0;
        if (container) {
          boxesToRedraw.set(container.id, {
            container,
            boundText: element
          });
        }
      }
      if (hasBoundTextElement(element)) {
        const boundTextElementId = getBoundTextElementId(element);
        const boundText = boundTextElementId ? elements.get(boundTextElementId) : void 0;
        if (boundText) {
          boxesToRedraw.set(element.id, {
            container: element,
            boundText
          });
        }
      }
    }
    for (const { container, boundText } of boxesToRedraw.values()) {
      if (container.isDeleted || boundText.isDeleted) {
        continue;
      }
      redrawTextBoundingBox(boundText, container, elements, false);
    }
  }
  static redrawBoundArrows(elements, changed) {
    for (const element of changed.values()) {
      if (!element.isDeleted && isBindableElement(element)) {
        updateBoundElements(element, elements, {
          changedElements: changed
        });
      }
    }
  }
  static reorderElements(elements, changed, flags) {
    if (!flags.containsZindexDifference) {
      return elements;
    }
    const unordered = Array.from(elements.values());
    const ordered = orderByFractionalIndex([...unordered]);
    const moved = Delta.getRightDifferences(unordered, ordered, true).reduce(
      (acc, arrayIndex) => {
        const candidate = unordered[Number(arrayIndex)];
        if (candidate && changed.has(candidate.id)) {
          acc.set(candidate.id, candidate);
        }
        return acc;
      },
      /* @__PURE__ */ new Map()
    );
    if (!flags.containsVisibleDifference && moved.size) {
      flags.containsVisibleDifference = true;
    }
    return arrayToMap(syncMovedIndices(ordered, moved));
  }
  /**
   * It is necessary to post process the partials in case of reference values,
   * for which we need to calculate the real diff between `deleted` and `inserted`.
   */
  static postProcess(deleted, inserted) {
    try {
      Delta.diffArrays(deleted, inserted, "boundElements", (x) => x.id);
    } catch (e2) {
      console.error(`Couldn't postprocess elements change deltas.`);
      if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
        throw e2;
      }
    } finally {
      return [deleted, inserted];
    }
  }
  static stripIrrelevantProps(partial) {
    const { id, updated, version, versionNonce, seed, ...strippedPartial } = partial;
    return strippedPartial;
  }
};

// emitter.ts
init_define_import_meta_env();
var Emitter = class {
  subscribers = [];
  /**
   * Attaches subscriber
   *
   * @returns unsubscribe function
   */
  on(...handlers) {
    const _handlers = handlers.flat().filter((item) => typeof item === "function");
    this.subscribers.push(..._handlers);
    return () => this.off(_handlers);
  }
  once(...handlers) {
    const _handlers = handlers.flat().filter((item) => typeof item === "function");
    _handlers.push(() => detach());
    const detach = this.on(..._handlers);
    return detach;
  }
  off(...handlers) {
    const _handlers = handlers.flat();
    this.subscribers = this.subscribers.filter(
      (handler) => !_handlers.includes(handler)
    );
  }
  trigger(...payload) {
    for (const handler of this.subscribers) {
      handler(...payload);
    }
    return this;
  }
  clear() {
    this.subscribers = [];
  }
};

// store.ts
var hiddenObservedAppStateProp = "__observedAppState";
var getObservedAppState = (appState) => {
  const observedAppState = {
    name: appState.name,
    editingGroupId: appState.editingGroupId,
    viewBackgroundColor: appState.viewBackgroundColor,
    selectedElementIds: appState.selectedElementIds,
    selectedGroupIds: appState.selectedGroupIds,
    editingLinearElementId: appState.editingLinearElement?.elementId || null,
    selectedLinearElementId: appState.selectedLinearElement?.elementId || null
  };
  Reflect.defineProperty(observedAppState, hiddenObservedAppStateProp, {
    value: true,
    enumerable: false
  });
  return observedAppState;
};
var isObservedAppState = (appState) => !!Reflect.get(appState, hiddenObservedAppStateProp);
var StoreAction = {
  /**
   * Immediately undoable.
   *
   * Use for updates which should be captured.
   * Should be used for most of the local updates.
   *
   * These updates will _immediately_ make it to the local undo / redo stacks.
   */
  CAPTURE: "capture",
  /**
   * Never undoable.
   *
   * Use for updates which should never be recorded, such as remote updates
   * or scene initialization.
   *
   * These updates will _never_ make it to the local undo / redo stacks.
   */
  UPDATE: "update",
  /**
   * Eventually undoable.
   *
   * Use for updates which should not be captured immediately - likely
   * exceptions which are part of some async multi-step process. Otherwise, all
   * such updates would end up being captured with the next
   * `StoreAction.CAPTURE` - triggered either by the next `updateScene`
   * or internally by the editor.
   *
   * These updates will _eventually_ make it to the local undo / redo stacks.
   */
  NONE: "none"
};
var StoreIncrementEvent = class {
  constructor(elementsChange, appStateChange) {
    this.elementsChange = elementsChange;
    this.appStateChange = appStateChange;
  }
};
var Store = class {
  onStoreIncrementEmitter = new Emitter();
  scheduledActions = /* @__PURE__ */ new Set();
  _snapshot = Snapshot.empty();
  get snapshot() {
    return this._snapshot;
  }
  set snapshot(snapshot) {
    this._snapshot = snapshot;
  }
  // TODO: Suspicious that this is called so many places. Seems error-prone.
  shouldCaptureIncrement = () => {
    this.scheduleAction(StoreAction.CAPTURE);
  };
  shouldUpdateSnapshot = () => {
    this.scheduleAction(StoreAction.UPDATE);
  };
  scheduleAction = (action) => {
    this.scheduledActions.add(action);
    this.satisfiesScheduledActionsInvariant();
  };
  commit = (elements, appState) => {
    try {
      if (this.scheduledActions.has(StoreAction.CAPTURE)) {
        this.captureIncrement(elements, appState);
      } else if (this.scheduledActions.has(StoreAction.UPDATE)) {
        this.updateSnapshot(elements, appState);
      }
    } finally {
      this.satisfiesScheduledActionsInvariant();
      this.scheduledActions = /* @__PURE__ */ new Set();
    }
  };
  captureIncrement = (elements, appState) => {
    const prevSnapshot = this.snapshot;
    const nextSnapshot = this.snapshot.maybeClone(elements, appState);
    if (prevSnapshot !== nextSnapshot) {
      const elementsChange = nextSnapshot.meta.didElementsChange ? ElementsChange.calculate(prevSnapshot.elements, nextSnapshot.elements) : ElementsChange.empty();
      const appStateChange = nextSnapshot.meta.didAppStateChange ? AppStateChange.calculate(prevSnapshot.appState, nextSnapshot.appState) : AppStateChange.empty();
      if (!elementsChange.isEmpty() || !appStateChange.isEmpty()) {
        this.onStoreIncrementEmitter.trigger(
          new StoreIncrementEvent(elementsChange, appStateChange)
        );
      }
      this.snapshot = nextSnapshot;
    }
  };
  updateSnapshot = (elements, appState) => {
    const nextSnapshot = this.snapshot.maybeClone(elements, appState);
    if (this.snapshot !== nextSnapshot) {
      this.snapshot = nextSnapshot;
    }
  };
  filterUncomittedElements = (prevElements, nextElements) => {
    for (const [id, prevElement] of prevElements.entries()) {
      const nextElement = nextElements.get(id);
      if (!nextElement) {
        continue;
      }
      const elementSnapshot = this.snapshot.elements.get(id);
      if (!elementSnapshot) {
        nextElements.delete(id);
      } else if (elementSnapshot.version < prevElement.version) {
        nextElements.set(id, elementSnapshot);
      }
    }
    return nextElements;
  };
  clear = () => {
    this.snapshot = Snapshot.empty();
    this.scheduledActions = /* @__PURE__ */ new Set();
  };
  satisfiesScheduledActionsInvariant = () => {
    if (!(this.scheduledActions.size >= 0 && this.scheduledActions.size <= 3)) {
      const message = `There can be at most three store actions scheduled at the same time, but there are "${this.scheduledActions.size}".`;
      console.error(message, this.scheduledActions.values());
      if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST) {
        throw new Error(message);
      }
    }
  };
};
var Snapshot = class _Snapshot {
  constructor(elements, appState, meta = {
    didElementsChange: false,
    didAppStateChange: false,
    isEmpty: false
  }) {
    this.elements = elements;
    this.appState = appState;
    this.meta = meta;
  }
  static empty() {
    return new _Snapshot(
      /* @__PURE__ */ new Map(),
      getObservedAppState(getDefaultAppState()),
      { didElementsChange: false, didAppStateChange: false, isEmpty: true }
    );
  }
  isEmpty() {
    return this.meta.isEmpty;
  }
  /**
   * Efficiently clone the existing snapshot, only if we detected changes.
   *
   * @returns same instance if there are no changes detected, new instance otherwise.
   */
  maybeClone(elements, appState) {
    const nextElementsSnapshot = this.maybeCreateElementsSnapshot(elements);
    const nextAppStateSnapshot = this.maybeCreateAppStateSnapshot(appState);
    let didElementsChange = false;
    let didAppStateChange = false;
    if (this.elements !== nextElementsSnapshot) {
      didElementsChange = true;
    }
    if (this.appState !== nextAppStateSnapshot) {
      didAppStateChange = true;
    }
    if (!didElementsChange && !didAppStateChange) {
      return this;
    }
    const snapshot = new _Snapshot(nextElementsSnapshot, nextAppStateSnapshot, {
      didElementsChange,
      didAppStateChange
    });
    return snapshot;
  }
  maybeCreateAppStateSnapshot(appState) {
    if (!appState) {
      return this.appState;
    }
    const nextAppStateSnapshot = !isObservedAppState(appState) ? getObservedAppState(appState) : appState;
    const didAppStateChange = this.detectChangedAppState(nextAppStateSnapshot);
    if (!didAppStateChange) {
      return this.appState;
    }
    return nextAppStateSnapshot;
  }
  detectChangedAppState(nextObservedAppState) {
    return !isShallowEqual(this.appState, nextObservedAppState, {
      selectedElementIds: isShallowEqual,
      selectedGroupIds: isShallowEqual
    });
  }
  maybeCreateElementsSnapshot(elements) {
    if (!elements) {
      return this.elements;
    }
    const didElementsChange = this.detectChangedElements(elements);
    if (!didElementsChange) {
      return this.elements;
    }
    const elementsSnapshot = this.createElementsSnapshot(elements);
    return elementsSnapshot;
  }
  /**
   * Detect if there any changed elements.
   *
   * NOTE: we shouldn't just use `sceneVersionNonce` instead, as we need to call this before the scene updates.
   */
  detectChangedElements(nextElements) {
    if (this.elements === nextElements) {
      return false;
    }
    if (this.elements.size !== nextElements.size) {
      return true;
    }
    const keys = Array.from(nextElements.keys());
    for (let i2 = keys.length - 1; i2 >= 0; i2--) {
      const prev = this.elements.get(keys[i2]);
      const next = nextElements.get(keys[i2]);
      if (!prev || !next || prev.id !== next.id || prev.versionNonce !== next.versionNonce) {
        return true;
      }
    }
    return false;
  }
  /**
   * Perform structural clone, cloning only elements that changed.
   */
  createElementsSnapshot(nextElements) {
    const clonedElements = /* @__PURE__ */ new Map();
    for (const [id, prevElement] of this.elements.entries()) {
      if (!nextElements.get(id)) {
        clonedElements.set(
          id,
          newElementWith(prevElement, { isDeleted: true })
        );
      } else {
        clonedElements.set(id, prevElement);
      }
    }
    for (const [id, nextElement] of nextElements.entries()) {
      const prevElement = clonedElements.get(id);
      if (!prevElement || // element was added
      prevElement && prevElement.versionNonce !== nextElement.versionNonce) {
        clonedElements.set(id, deepCopyElement(nextElement));
      }
    }
    return clonedElements;
  }
};

// element/embeddable.ts
var embeddedLinkCache = /* @__PURE__ */ new Map();
var RE_YOUTUBE = /^(?:http(?:s)?:\/\/)?(?:www\.)?youtu(?:be\.com|\.be)\/(embed\/|watch\?v=|shorts\/|playlist\?list=|embed\/videoseries\?list=)?([a-zA-Z0-9_-]+)(?:\?t=|&t=|\?start=|&start=)?([a-zA-Z0-9_-]+)?[^\s]*$/;
var RE_VIMEO = /^(?:http(?:s)?:\/\/)?(?:(?:w){3}\.)?(?:player\.)?vimeo\.com\/(?:video\/)?([^?\s]+)(?:\?.*)?$/;
var RE_FIGMA = /^https:\/\/(?:www\.)?figma\.com/;
var RE_GH_GIST = /^https:\/\/gist\.github\.com\/([\w_-]+)\/([\w_-]+)/;
var RE_GH_GIST_EMBED = /^<script[\s\S]*?\ssrc=["'](https:\/\/gist\.github\.com\/.*?)\.js["']/i;
var RE_TWITTER = /(?:https?:\/\/)?(?:(?:w){3}\.)?(?:twitter|x)\.com\/[^/]+\/status\/(\d+)/;
var RE_TWITTER_EMBED = /^<blockquote[\s\S]*?\shref=["'](https?:\/\/(?:twitter|x)\.com\/[^"']*)/i;
var RE_VALTOWN = /^https:\/\/(?:www\.)?val\.town\/(v|embed)\/[a-zA-Z_$][0-9a-zA-Z_$]+\.[a-zA-Z_$][0-9a-zA-Z_$]+/;
var RE_GENERIC_EMBED = /^<(?:iframe|blockquote)[\s\S]*?\s(?:src|href)=["']([^"']*)["'][\s\S]*?>$/i;
var RE_GIPHY = /giphy.com\/(?:clips|embed|gifs)\/[a-zA-Z0-9]*?-?([a-zA-Z0-9]+)(?:[^a-zA-Z0-9]|$)/;
var RE_REDDIT = /^(?:http(?:s)?:\/\/)?(?:www\.)?reddit\.com\/r\/([a-zA-Z0-9_]+)\/comments\/([a-zA-Z0-9_]+)\/([a-zA-Z0-9_]+)\/?(?:\?[^#\s]*)?(?:#[^\s]*)?$/;
var RE_REDDIT_EMBED = /^<blockquote[\s\S]*?\shref=["'](https?:\/\/(?:www\.)?reddit\.com\/[^"']*)/i;
var ALLOWED_DOMAINS = /* @__PURE__ */ new Set([
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "player.vimeo.com",
  "figma.com",
  "link.excalidraw.com",
  "gist.github.com",
  "twitter.com",
  "x.com",
  "*.simplepdf.eu",
  "stackblitz.com",
  "val.town",
  "giphy.com",
  "reddit.com"
]);
var ALLOW_SAME_ORIGIN = /* @__PURE__ */ new Set([
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "player.vimeo.com",
  "figma.com",
  "twitter.com",
  "x.com",
  "*.simplepdf.eu",
  "stackblitz.com",
  "reddit.com"
]);
var createSrcDoc = (body) => {
  return `<html><body>${body}</body></html>`;
};
var getEmbedLink = (link) => {
  if (!link) {
    return null;
  }
  if (embeddedLinkCache.has(link)) {
    return embeddedLinkCache.get(link);
  }
  const originalLink = link;
  const allowSameOrigin = ALLOW_SAME_ORIGIN.has(
    matchHostname(link, ALLOW_SAME_ORIGIN) || ""
  );
  let type = "generic";
  let aspectRatio = { w: 560, h: 840 };
  const ytLink = link.match(RE_YOUTUBE);
  if (ytLink?.[2]) {
    const time = ytLink[3] ? `&start=${ytLink[3]}` : ``;
    const isPortrait = link.includes("shorts");
    type = "video";
    switch (ytLink[1]) {
      case "embed/":
      case "watch?v=":
      case "shorts/":
        link = `https://www.youtube.com/embed/${ytLink[2]}?enablejsapi=1${time}`;
        break;
      case "playlist?list=":
      case "embed/videoseries?list=":
        link = `https://www.youtube.com/embed/videoseries?list=${ytLink[2]}&enablejsapi=1${time}`;
        break;
      default:
        link = `https://www.youtube.com/embed/${ytLink[2]}?enablejsapi=1${time}`;
        break;
    }
    aspectRatio = isPortrait ? { w: 315, h: 560 } : { w: 560, h: 315 };
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    };
  }
  const vimeoLink = link.match(RE_VIMEO);
  if (vimeoLink?.[1]) {
    const target = vimeoLink?.[1];
    const error = !/^\d+$/.test(target) ? new URIError("Invalid embed link format") : void 0;
    type = "video";
    link = `https://player.vimeo.com/video/${target}?api=1`;
    aspectRatio = { w: 560, h: 315 };
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      error,
      sandbox: { allowSameOrigin }
    };
  }
  const figmaLink = link.match(RE_FIGMA);
  if (figmaLink) {
    type = "generic";
    link = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
      link
    )}`;
    aspectRatio = { w: 550, h: 550 };
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    };
  }
  const valLink = link.match(RE_VALTOWN);
  if (valLink) {
    link = valLink[1] === "embed" ? valLink[0] : valLink[0].replace("/v", "/embed");
    embeddedLinkCache.set(originalLink, {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    });
    return {
      link,
      intrinsicSize: aspectRatio,
      type,
      sandbox: { allowSameOrigin }
    };
  }
  if (RE_TWITTER.test(link)) {
    const postId = link.match(RE_TWITTER)[1];
    const safeURL = sanitizeHTMLAttribute(
      `https://twitter.com/x/status/${postId}`
    );
    const ret = {
      type: "document",
      srcdoc: (theme) => createSrcDoc(
        `<blockquote class="twitter-tweet" data-dnt="true" data-theme="${theme}"><a href="${safeURL}"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>`
      ),
      intrinsicSize: { w: 480, h: 480 },
      sandbox: { allowSameOrigin }
    };
    embeddedLinkCache.set(originalLink, ret);
    return ret;
  }
  if (RE_REDDIT.test(link)) {
    const [, page, postId, title] = link.match(RE_REDDIT);
    const safeURL = sanitizeHTMLAttribute(
      `https://reddit.com/r/${page}/comments/${postId}/${title}`
    );
    const ret = {
      type: "document",
      srcdoc: (theme) => createSrcDoc(
        `<blockquote class="reddit-embed-bq" data-embed-theme="${theme}"><a href="${safeURL}"></a><br></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"><\/script>`
      ),
      intrinsicSize: { w: 480, h: 480 },
      sandbox: { allowSameOrigin }
    };
    embeddedLinkCache.set(originalLink, ret);
    return ret;
  }
  if (RE_GH_GIST.test(link)) {
    const [, user, gistId] = link.match(RE_GH_GIST);
    const safeURL = sanitizeHTMLAttribute(
      `https://gist.github.com/${user}/${gistId}`
    );
    const ret = {
      type: "document",
      srcdoc: () => createSrcDoc(`
          <script src="${safeURL}.js"><\/script>
          <style type="text/css">
            * { margin: 0px; }
            table, .gist { height: 100%; }
            .gist .gist-file { height: calc(100vh - 2px); padding: 0px; display: grid; grid-template-rows: 1fr auto; }
          </style>
        `),
      intrinsicSize: { w: 550, h: 720 },
      sandbox: { allowSameOrigin }
    };
    embeddedLinkCache.set(link, ret);
    return ret;
  }
  embeddedLinkCache.set(link, {
    link,
    intrinsicSize: aspectRatio,
    type,
    sandbox: { allowSameOrigin }
  });
  return {
    link,
    intrinsicSize: aspectRatio,
    type,
    sandbox: { allowSameOrigin }
  };
};
var createPlaceholderEmbeddableLabel = (element) => {
  let text;
  if (isIframeElement(element)) {
    text = "IFrame element";
  } else {
    text = !element.link || element?.link === "" ? "Empty Web-Embed" : element.link;
  }
  const fontSize = Math.max(
    Math.min(element.width / 2, element.width / text.length),
    element.width / 30
  );
  const fontFamily = FONT_FAMILY.Helvetica;
  const fontString = getFontString({
    fontSize,
    fontFamily
  });
  return newTextElement({
    x: element.x + element.width / 2,
    y: element.y + element.height / 2,
    strokeColor: element.strokeColor !== "transparent" ? element.strokeColor : "black",
    backgroundColor: "transparent",
    fontFamily,
    fontSize,
    text: wrapText(text, fontString, element.width - 20),
    textAlign: "center",
    verticalAlign: VERTICAL_ALIGN.MIDDLE,
    angle: element.angle ?? 0
  });
};
var actionSetEmbeddableAsActiveTool = register2({
  name: "setEmbeddableAsActiveTool",
  trackEvent: { category: "toolbar" },
  target: "Tool",
  label: "toolBar.embeddable",
  perform: (elements, appState, _, app) => {
    const nextActiveTool = updateActiveTool(appState, {
      type: "embeddable"
    });
    setCursorForShape(app.canvas, {
      ...appState,
      activeTool: nextActiveTool
    });
    return {
      elements,
      appState: {
        ...appState,
        activeTool: updateActiveTool(appState, {
          type: "embeddable"
        })
      },
      storeAction: StoreAction.NONE
    };
  }
});
var matchHostname = (url, allowedHostnames) => {
  try {
    const { hostname } = new URL(url);
    const bareDomain = hostname.replace(/^www\./, "");
    if (allowedHostnames instanceof Set) {
      if (ALLOWED_DOMAINS.has(bareDomain)) {
        return bareDomain;
      }
      const bareDomainWithFirstSubdomainWildcarded = bareDomain.replace(
        /^([^.]+)/,
        "*"
      );
      if (ALLOWED_DOMAINS.has(bareDomainWithFirstSubdomainWildcarded)) {
        return bareDomainWithFirstSubdomainWildcarded;
      }
      return null;
    }
    const bareAllowedHostname = allowedHostnames.replace(/^www\./, "");
    if (bareDomain === bareAllowedHostname) {
      return bareAllowedHostname;
    }
  } catch (error) {
  }
  return null;
};
var maybeParseEmbedSrc = (str) => {
  const twitterMatch = str.match(RE_TWITTER_EMBED);
  if (twitterMatch && twitterMatch.length === 2) {
    return twitterMatch[1];
  }
  const redditMatch = str.match(RE_REDDIT_EMBED);
  if (redditMatch && redditMatch.length === 2) {
    return redditMatch[1];
  }
  const gistMatch = str.match(RE_GH_GIST_EMBED);
  if (gistMatch && gistMatch.length === 2) {
    return gistMatch[1];
  }
  if (RE_GIPHY.test(str)) {
    return `https://giphy.com/embed/${RE_GIPHY.exec(str)[1]}`;
  }
  const match = str.match(RE_GENERIC_EMBED);
  if (match && match.length === 2) {
    return match[1];
  }
  return str;
};
var embeddableURLValidator = (url, validateEmbeddable) => {
  if (!url) {
    return false;
  }
  if (validateEmbeddable != null) {
    if (typeof validateEmbeddable === "function") {
      const ret = validateEmbeddable(url);
      if (typeof ret === "boolean") {
        return ret;
      }
    } else if (typeof validateEmbeddable === "boolean") {
      return validateEmbeddable;
    } else if (validateEmbeddable instanceof RegExp) {
      return validateEmbeddable.test(url);
    } else if (Array.isArray(validateEmbeddable)) {
      for (const domain of validateEmbeddable) {
        if (domain instanceof RegExp) {
          if (url.match(domain)) {
            return true;
          }
        } else if (matchHostname(url, domain)) {
          return true;
        }
      }
      return false;
    }
  }
  return !!matchHostname(url, ALLOWED_DOMAINS);
};

// renderer/staticSvgScene.ts
var roughSVGDrawWithPrecision = (rsvg, drawable, precision) => {
  if (typeof precision === "undefined") {
    return rsvg.draw(drawable);
  }
  const pshape = {
    sets: drawable.sets,
    shape: drawable.shape,
    options: { ...drawable.options, fixedDecimalPlaceDigits: precision }
  };
  return rsvg.draw(pshape);
};
var maybeWrapNodesInFrameClipPath = (element, root, nodes, frameRendering, elementsMap) => {
  if (!frameRendering.enabled || !frameRendering.clip) {
    return null;
  }
  const frame = getContainingFrame(element, elementsMap);
  if (frame) {
    const g = root.ownerDocument.createElementNS(SVG_NS, "g");
    g.setAttributeNS(SVG_NS, "clip-path", `url(#${frame.id})`);
    nodes.forEach((node) => g.appendChild(node));
    return g;
  }
  return null;
};
var renderElementToSvg = (element, elementsMap, rsvg, svgRoot, files, offsetX, offsetY, renderConfig) => {
  const offset2 = { x: offsetX, y: offsetY };
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  let cx = (x2 - x1) / 2 - (element.x - x1);
  let cy = (y2 - y1) / 2 - (element.y - y1);
  if (isTextElement(element)) {
    const container = getContainerElement(element, elementsMap);
    if (isArrowElement(container)) {
      const [x12, y12, x22, y22] = getElementAbsoluteCoords(container, elementsMap);
      const boundTextCoords = LinearElementEditor.getBoundTextElementPosition(
        container,
        element,
        elementsMap
      );
      cx = (x22 - x12) / 2 - (boundTextCoords.x - x12);
      cy = (y22 - y12) / 2 - (boundTextCoords.y - y12);
      offsetX = offsetX + boundTextCoords.x - element.x;
      offsetY = offsetY + boundTextCoords.y - element.y;
    }
  }
  const degree = 180 * element.angle / Math.PI;
  let root = svgRoot;
  if (element.link) {
    const anchorTag = svgRoot.ownerDocument.createElementNS(SVG_NS, "a");
    anchorTag.setAttribute("href", normalizeLink(element.link));
    root.appendChild(anchorTag);
    root = anchorTag;
  }
  const addToRoot = (node, element2) => {
    if (isTestEnv()) {
      node.setAttribute("data-id", element2.id);
    }
    root.appendChild(node);
  };
  const opacity = (getContainingFrame(element, elementsMap)?.opacity ?? 100) * element.opacity / 1e4;
  switch (element.type) {
    case "selection": {
      throw new Error("Selection rendering is not supported for SVG");
    }
    case "rectangle":
    case "diamond":
    case "ellipse": {
      const shape = ShapeCache.generateElementShape(element, null);
      const node = roughSVGDrawWithPrecision(
        rsvg,
        shape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      );
      if (opacity !== 1) {
        node.setAttribute("stroke-opacity", `${opacity}`);
        node.setAttribute("fill-opacity", `${opacity}`);
      }
      node.setAttribute("stroke-linecap", "round");
      node.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      const g = maybeWrapNodesInFrameClipPath(
        element,
        root,
        [node],
        renderConfig.frameRendering,
        elementsMap
      );
      addToRoot(g || node, element);
      break;
    }
    case "iframe":
    case "embeddable": {
      const shape = ShapeCache.generateElementShape(element, renderConfig);
      const node = roughSVGDrawWithPrecision(
        rsvg,
        shape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      );
      const opacity2 = element.opacity / 100;
      if (opacity2 !== 1) {
        node.setAttribute("stroke-opacity", `${opacity2}`);
        node.setAttribute("fill-opacity", `${opacity2}`);
      }
      node.setAttribute("stroke-linecap", "round");
      node.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      addToRoot(node, element);
      const label = createPlaceholderEmbeddableLabel(element);
      renderElementToSvg(
        label,
        elementsMap,
        rsvg,
        root,
        files,
        label.x + offset2.x - element.x,
        label.y + offset2.y - element.y,
        renderConfig
      );
      const embeddableNode = roughSVGDrawWithPrecision(
        rsvg,
        shape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      );
      embeddableNode.setAttribute("stroke-linecap", "round");
      embeddableNode.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      while (embeddableNode.firstChild) {
        embeddableNode.removeChild(embeddableNode.firstChild);
      }
      const radius = getCornerRadius(
        Math.min(element.width, element.height),
        element
      );
      const embedLink = getEmbedLink(toValidURL(element.link || ""));
      if (renderConfig.renderEmbeddables === false || embedLink?.type === "document") {
        const anchorTag = svgRoot.ownerDocument.createElementNS(SVG_NS, "a");
        anchorTag.setAttribute("href", normalizeLink(element.link || ""));
        anchorTag.setAttribute("target", "_blank");
        anchorTag.setAttribute("rel", "noopener noreferrer");
        anchorTag.style.borderRadius = `${radius}px`;
        embeddableNode.appendChild(anchorTag);
      } else {
        const foreignObject = svgRoot.ownerDocument.createElementNS(
          SVG_NS,
          "foreignObject"
        );
        foreignObject.style.width = `${element.width}px`;
        foreignObject.style.height = `${element.height}px`;
        foreignObject.style.border = "none";
        const div = foreignObject.ownerDocument.createElementNS(SVG_NS, "div");
        div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        div.style.width = "100%";
        div.style.height = "100%";
        const iframe = div.ownerDocument.createElement("iframe");
        iframe.src = embedLink?.link ?? "";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.borderRadius = `${radius}px`;
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.allowFullscreen = true;
        div.appendChild(iframe);
        foreignObject.appendChild(div);
        embeddableNode.appendChild(foreignObject);
      }
      addToRoot(embeddableNode, element);
      break;
    }
    case "line":
    case "arrow": {
      const boundText = getBoundTextElement(element, elementsMap);
      const maskPath = svgRoot.ownerDocument.createElementNS(SVG_NS, "mask");
      if (boundText) {
        maskPath.setAttribute("id", `mask-${element.id}`);
        const maskRectVisible = svgRoot.ownerDocument.createElementNS(
          SVG_NS,
          "rect"
        );
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;
        maskRectVisible.setAttribute("x", "0");
        maskRectVisible.setAttribute("y", "0");
        maskRectVisible.setAttribute("fill", "#fff");
        maskRectVisible.setAttribute(
          "width",
          `${element.width + 100 + offsetX}`
        );
        maskRectVisible.setAttribute(
          "height",
          `${element.height + 100 + offsetY}`
        );
        maskPath.appendChild(maskRectVisible);
        const maskRectInvisible = svgRoot.ownerDocument.createElementNS(
          SVG_NS,
          "rect"
        );
        const boundTextCoords = LinearElementEditor.getBoundTextElementPosition(
          element,
          boundText,
          elementsMap
        );
        const maskX = offsetX + boundTextCoords.x - element.x;
        const maskY = offsetY + boundTextCoords.y - element.y;
        maskRectInvisible.setAttribute("x", maskX.toString());
        maskRectInvisible.setAttribute("y", maskY.toString());
        maskRectInvisible.setAttribute("fill", "#000");
        maskRectInvisible.setAttribute("width", `${boundText.width}`);
        maskRectInvisible.setAttribute("height", `${boundText.height}`);
        maskRectInvisible.setAttribute("opacity", "1");
        maskPath.appendChild(maskRectInvisible);
      }
      const group = svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
      if (boundText) {
        group.setAttribute("mask", `url(#mask-${element.id})`);
      }
      group.setAttribute("stroke-linecap", "round");
      const shapes = ShapeCache.generateElementShape(element, renderConfig);
      shapes.forEach((shape) => {
        const node = roughSVGDrawWithPrecision(
          rsvg,
          shape,
          MAX_DECIMALS_FOR_SVG_EXPORT
        );
        if (opacity !== 1) {
          node.setAttribute("stroke-opacity", `${opacity}`);
          node.setAttribute("fill-opacity", `${opacity}`);
        }
        node.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        if (element.type === "line" && isPathALoop(element.points) && element.backgroundColor !== "transparent") {
          node.setAttribute("fill-rule", "evenodd");
        }
        group.appendChild(node);
      });
      const g = maybeWrapNodesInFrameClipPath(
        element,
        root,
        [group, maskPath],
        renderConfig.frameRendering,
        elementsMap
      );
      if (g) {
        addToRoot(g, element);
        root.appendChild(g);
      } else {
        addToRoot(group, element);
        root.append(maskPath);
      }
      break;
    }
    case "freedraw": {
      const backgroundFillShape = ShapeCache.generateElementShape(
        element,
        renderConfig
      );
      const node = backgroundFillShape ? roughSVGDrawWithPrecision(
        rsvg,
        backgroundFillShape,
        MAX_DECIMALS_FOR_SVG_EXPORT
      ) : svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
      if (opacity !== 1) {
        node.setAttribute("stroke-opacity", `${opacity}`);
        node.setAttribute("fill-opacity", `${opacity}`);
      }
      node.setAttribute(
        "transform",
        `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
      );
      node.setAttribute("stroke", "none");
      const path = svgRoot.ownerDocument.createElementNS(SVG_NS, "path");
      path.setAttribute("fill", element.strokeColor);
      path.setAttribute("d", getFreeDrawSvgPath(element));
      node.appendChild(path);
      const g = maybeWrapNodesInFrameClipPath(
        element,
        root,
        [node],
        renderConfig.frameRendering,
        elementsMap
      );
      addToRoot(g || node, element);
      break;
    }
    case "image": {
      const width = Math.round(element.width);
      const height = Math.round(element.height);
      const fileData = isInitializedImageElement(element) && files[element.fileId];
      if (fileData) {
        const symbolId = `image-${fileData.id}`;
        let symbol = svgRoot.querySelector(`#${symbolId}`);
        if (!symbol) {
          symbol = svgRoot.ownerDocument.createElementNS(SVG_NS, "symbol");
          symbol.id = symbolId;
          const image = svgRoot.ownerDocument.createElementNS(SVG_NS, "image");
          image.setAttribute("width", "100%");
          image.setAttribute("height", "100%");
          image.setAttribute("href", fileData.dataURL);
          image.setAttribute("preserveAspectRatio", "none");
          symbol.appendChild(image);
          root.prepend(symbol);
        }
        const use = svgRoot.ownerDocument.createElementNS(SVG_NS, "use");
        use.setAttribute("href", `#${symbolId}`);
        if (renderConfig.exportWithDarkMode && fileData.mimeType !== MIME_TYPES.svg) {
          use.setAttribute("filter", IMAGE_INVERT_FILTER);
        }
        use.setAttribute("width", `${width}`);
        use.setAttribute("height", `${height}`);
        use.setAttribute("opacity", `${opacity}`);
        if (element.scale[0] !== 1 || element.scale[1] !== 1) {
          const translateX = element.scale[0] !== 1 ? -width : 0;
          const translateY = element.scale[1] !== 1 ? -height : 0;
          use.setAttribute(
            "transform",
            `scale(${element.scale[0]}, ${element.scale[1]}) translate(${translateX} ${translateY})`
          );
        }
        const g = svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
        g.appendChild(use);
        g.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        if (element.roundness) {
          const clipPath = svgRoot.ownerDocument.createElementNS(
            SVG_NS,
            "clipPath"
          );
          clipPath.id = `image-clipPath-${element.id}`;
          const clipRect = svgRoot.ownerDocument.createElementNS(
            SVG_NS,
            "rect"
          );
          const radius = getCornerRadius(
            Math.min(element.width, element.height),
            element
          );
          clipRect.setAttribute("width", `${element.width}`);
          clipRect.setAttribute("height", `${element.height}`);
          clipRect.setAttribute("rx", `${radius}`);
          clipRect.setAttribute("ry", `${radius}`);
          clipPath.appendChild(clipRect);
          addToRoot(clipPath, element);
          g.setAttributeNS(SVG_NS, "clip-path", `url(#${clipPath.id})`);
        }
        const clipG = maybeWrapNodesInFrameClipPath(
          element,
          root,
          [g],
          renderConfig.frameRendering,
          elementsMap
        );
        addToRoot(clipG || g, element);
      }
      break;
    }
    case "frame":
    case "magicframe": {
      if (renderConfig.frameRendering.enabled && renderConfig.frameRendering.outline) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        rect.setAttribute("width", `${element.width}px`);
        rect.setAttribute("height", `${element.height}px`);
        rect.setAttribute("rx", FRAME_STYLE.radius.toString());
        rect.setAttribute("ry", FRAME_STYLE.radius.toString());
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", FRAME_STYLE.strokeColor);
        rect.setAttribute("stroke-width", FRAME_STYLE.strokeWidth.toString());
        addToRoot(rect, element);
      }
      break;
    }
    default: {
      if (isTextElement(element)) {
        const node = svgRoot.ownerDocument.createElementNS(SVG_NS, "g");
        if (opacity !== 1) {
          node.setAttribute("stroke-opacity", `${opacity}`);
          node.setAttribute("fill-opacity", `${opacity}`);
        }
        node.setAttribute(
          "transform",
          `translate(${offsetX || 0} ${offsetY || 0}) rotate(${degree} ${cx} ${cy})`
        );
        const lines = element.text.replace(/\r\n?/g, "\n").split("\n");
        const lineHeightPx = getLineHeightInPx(
          element.fontSize,
          element.lineHeight
        );
        const horizontalOffset = element.textAlign === "center" ? element.width / 2 : element.textAlign === "right" ? element.width : 0;
        const verticalOffset = getVerticalOffset(
          element.fontFamily,
          element.fontSize,
          lineHeightPx
        );
        const direction = isRTL(element.text) ? "rtl" : "ltr";
        const textAnchor = element.textAlign === "center" ? "middle" : element.textAlign === "right" || direction === "rtl" ? "end" : "start";
        for (let i2 = 0; i2 < lines.length; i2++) {
          const text = svgRoot.ownerDocument.createElementNS(SVG_NS, "text");
          text.textContent = lines[i2];
          text.setAttribute("x", `${horizontalOffset}`);
          text.setAttribute("y", `${i2 * lineHeightPx + verticalOffset}`);
          text.setAttribute("font-family", getFontFamilyString(element));
          text.setAttribute("font-size", `${element.fontSize}px`);
          text.setAttribute("fill", element.strokeColor);
          text.setAttribute("text-anchor", textAnchor);
          text.setAttribute("style", "white-space: pre;");
          text.setAttribute("direction", direction);
          text.setAttribute("dominant-baseline", "alphabetic");
          node.appendChild(text);
        }
        const g = maybeWrapNodesInFrameClipPath(
          element,
          root,
          [node],
          renderConfig.frameRendering,
          elementsMap
        );
        addToRoot(g || node, element);
      } else {
        throw new Error(`Unimplemented type ${element.type}`);
      }
    }
  }
};
var renderSceneToSvg = (elements, elementsMap, rsvg, svgRoot, files, renderConfig) => {
  if (!svgRoot) {
    return;
  }
  elements.filter((el) => !isIframeLikeElement(el)).forEach((element) => {
    if (!element.isDeleted) {
      if (isTextElement(element) && element.containerId && elementsMap.has(element.containerId)) {
        return;
      }
      try {
        renderElementToSvg(
          element,
          elementsMap,
          rsvg,
          svgRoot,
          files,
          element.x + renderConfig.offsetX,
          element.y + renderConfig.offsetY,
          renderConfig
        );
        const boundTextElement = getBoundTextElement(element, elementsMap);
        if (boundTextElement) {
          renderElementToSvg(
            boundTextElement,
            elementsMap,
            rsvg,
            svgRoot,
            files,
            boundTextElement.x + renderConfig.offsetX,
            boundTextElement.y + renderConfig.offsetY,
            renderConfig
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
  elements.filter((el) => isIframeLikeElement(el)).forEach((element) => {
    if (!element.isDeleted) {
      try {
        renderElementToSvg(
          element,
          elementsMap,
          rsvg,
          svgRoot,
          files,
          element.x + renderConfig.offsetX,
          element.y + renderConfig.offsetY,
          renderConfig
        );
      } catch (error) {
        console.error(error);
      }
    }
  });
};

// data/json.ts
init_define_import_meta_env();

// data/filesystem.ts
init_define_import_meta_env();

// ../../node_modules/browser-fs-access/dist/index.mjs
init_define_import_meta_env();
var e = (() => {
  if ("undefined" == typeof self)
    return false;
  if ("top" in self && self !== top)
    try {
      top;
    } catch (e2) {
      return false;
    }
  else if ("showOpenFilePicker" in self)
    return "showOpenFilePicker";
  return false;
})();
var t = e ? import("./file-open-002ab408-XVKQNBC7.js") : import("./file-open-7c801643-3UY7RH3S.js");
async function n(...e2) {
  return (await t).default(...e2);
}
var i = e ? import("./directory-open-4ed118d0-KAOYP3QS.js") : import("./directory-open-01563666-CNVDULTN.js");
var o = e ? import("./file-save-745eba88-34LASP67.js") : import("./file-save-3189631c-PVOTRJAU.js");
async function s(...e2) {
  return (await o).default(...e2);
}

// data/filesystem.ts
var INPUT_CHANGE_INTERVAL_MS = 500;
var fileOpen = (opts) => {
  const mimeTypes = opts.extensions?.reduce((mimeTypes2, type) => {
    mimeTypes2.push(MIME_TYPES[type]);
    return mimeTypes2;
  }, []);
  const extensions = opts.extensions?.reduce((acc, ext) => {
    if (ext === "jpg") {
      return acc.concat(".jpg", ".jpeg");
    }
    return acc.concat(`.${ext}`);
  }, []);
  return n({
    description: opts.description,
    extensions,
    mimeTypes,
    multiple: opts.multiple ?? false,
    legacySetup: (resolve, reject, input) => {
      const scheduleRejection = debounce(reject, INPUT_CHANGE_INTERVAL_MS);
      const focusHandler = () => {
        checkForFile();
        document.addEventListener("keyup" /* KEYUP */, scheduleRejection);
        document.addEventListener("pointerup" /* POINTER_UP */, scheduleRejection);
        scheduleRejection();
      };
      const checkForFile = () => {
        if (input.files?.length) {
          const ret = opts.multiple ? [...input.files] : input.files[0];
          resolve(ret);
        }
      };
      requestAnimationFrame(() => {
        window.addEventListener("focus" /* FOCUS */, focusHandler);
      });
      const interval = window.setInterval(() => {
        checkForFile();
      }, INPUT_CHANGE_INTERVAL_MS);
      return (rejectPromise) => {
        clearInterval(interval);
        scheduleRejection.cancel();
        window.removeEventListener("focus" /* FOCUS */, focusHandler);
        document.removeEventListener("keyup" /* KEYUP */, scheduleRejection);
        document.removeEventListener("pointerup" /* POINTER_UP */, scheduleRejection);
        if (rejectPromise) {
          console.warn("Opening the file was canceled (legacy-fs).");
          rejectPromise(new AbortError());
        }
      };
    }
  });
};
var fileSave = (blob, opts) => {
  return s(
    blob,
    {
      fileName: `${opts.name}.${opts.extension}`,
      description: opts.description,
      extensions: [`.${opts.extension}`]
    },
    opts.fileHandle
  );
};

// data/json.ts
var filterOutDeletedFiles = (elements, files) => {
  const nextFiles = {};
  for (const element of elements) {
    if (!element.isDeleted && "fileId" in element && element.fileId && files[element.fileId]) {
      nextFiles[element.fileId] = files[element.fileId];
    }
  }
  return nextFiles;
};
var serializeAsJSON = (elements, appState, files, type) => {
  const data = {
    type: EXPORT_DATA_TYPES.excalidraw,
    version: VERSIONS.excalidraw,
    source: EXPORT_SOURCE,
    elements: type === "local" ? clearElementsForExport(elements) : clearElementsForDatabase(elements),
    appState: type === "local" ? cleanAppStateForExport(appState) : clearAppStateForDatabase(appState),
    files: type === "local" ? filterOutDeletedFiles(elements, files) : (
      // will be stripped from JSON
      void 0
    )
  };
  return JSON.stringify(data, null, 2);
};
var saveAsJSON = async (elements, appState, files, name = appState.name || DEFAULT_FILENAME) => {
  const serialized = serializeAsJSON(elements, appState, files, "local");
  const blob = new Blob([serialized], {
    type: MIME_TYPES.excalidraw
  });
  const fileHandle = await fileSave(blob, {
    name,
    extension: "excalidraw",
    description: "Excalidraw file",
    fileHandle: isImageFileHandle(appState.fileHandle) ? null : appState.fileHandle
  });
  return { fileHandle };
};
var loadFromJSON = async (localAppState, localElements) => {
  const file2 = await fileOpen({
    description: "Excalidraw files"
    // ToDo: Be over-permissive until https://bugs.webkit.org/show_bug.cgi?id=34442
    // gets resolved. Else, iOS users cannot open `.excalidraw` files.
    // extensions: ["json", "excalidraw", "png", "svg"],
  });
  return loadFromBlob(
    await normalizeFile(file2),
    localAppState,
    localElements,
    file2.handle
  );
};
var isValidExcalidrawData = (data) => {
  return data?.type === EXPORT_DATA_TYPES.excalidraw && (!data.elements || Array.isArray(data.elements) && (!data.appState || typeof data.appState === "object"));
};
var isValidLibrary = (json) => {
  return typeof json === "object" && json && json.type === EXPORT_DATA_TYPES.excalidrawLibrary && (json.version === 1 || json.version === 2);
};
var serializeLibraryAsJSON = (libraryItems) => {
  const data = {
    type: EXPORT_DATA_TYPES.excalidrawLibrary,
    version: VERSIONS.excalidrawLibrary,
    source: EXPORT_SOURCE,
    libraryItems
  };
  return JSON.stringify(data, null, 2);
};
var saveLibraryAsJSON = async (libraryItems) => {
  const serialized = serializeLibraryAsJSON(libraryItems);
  await fileSave(
    new Blob([serialized], {
      type: MIME_TYPES.excalidrawlib
    }),
    {
      name: "library",
      extension: "excalidrawlib",
      description: "Excalidraw library file"
    }
  );
};

// element/image.ts
init_define_import_meta_env();
var loadHTMLImageElement = (dataURL) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = (error) => {
      reject(error);
    };
    image.src = dataURL;
  });
};
var updateImageCache = async ({
  fileIds,
  files,
  imageCache
}) => {
  const updatedFiles = /* @__PURE__ */ new Map();
  const erroredFiles = /* @__PURE__ */ new Map();
  await Promise.all(
    fileIds.reduce((promises, fileId) => {
      const fileData = files[fileId];
      if (fileData && !updatedFiles.has(fileId)) {
        updatedFiles.set(fileId, true);
        return promises.concat(
          (async () => {
            try {
              if (fileData.mimeType === MIME_TYPES.binary) {
                throw new Error("Only images can be added to ImageCache");
              }
              const imagePromise = loadHTMLImageElement(fileData.dataURL);
              const data = {
                image: imagePromise,
                mimeType: fileData.mimeType
              };
              imageCache.set(fileId, data);
              const image = await imagePromise;
              imageCache.set(fileId, { ...data, image });
            } catch (error) {
              erroredFiles.set(fileId, true);
            }
          })()
        );
      }
      return promises;
    }, [])
  );
  return {
    imageCache,
    /** includes errored files because they cache was updated nonetheless */
    updatedFiles,
    /** files that failed when creating HTMLImageElement */
    erroredFiles
  };
};
var getInitializedImageElements = (elements) => elements.filter(
  (element) => isInitializedImageElement(element)
);
var isHTMLSVGElement = (node) => {
  return node?.nodeName.toLowerCase() === "svg";
};
var normalizeSVG = async (SVGString) => {
  const doc = new DOMParser().parseFromString(SVGString, MIME_TYPES.svg);
  const svg = doc.querySelector("svg");
  const errorNode = doc.querySelector("parsererror");
  if (errorNode || !isHTMLSVGElement(svg)) {
    throw new Error("Invalid SVG");
  } else {
    if (!svg.hasAttribute("xmlns")) {
      svg.setAttribute("xmlns", SVG_NS);
    }
    if (!svg.hasAttribute("width") || !svg.hasAttribute("height")) {
      const viewBox = svg.getAttribute("viewBox");
      let width = svg.getAttribute("width") || "50";
      let height = svg.getAttribute("height") || "50";
      if (viewBox) {
        const match = viewBox.match(/\d+ +\d+ +(\d+) +(\d+)/);
        if (match) {
          [, width, height] = match;
        }
      }
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
    }
    return svg.outerHTML;
  }
};

// renderer/staticScene.ts
init_define_import_meta_env();

// components/hyperlink/helpers.ts
init_define_import_meta_env();
var EXTERNAL_LINK_IMG = document.createElement("img");
EXTERNAL_LINK_IMG.src = `data:${MIME_TYPES.svg}, ${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1971c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
)}`;
var getLinkHandleFromCoords = ([x1, y1, x2, y2], angle, appState) => {
  const size = DEFAULT_LINK_SIZE;
  const linkWidth = size / appState.zoom.value;
  const linkHeight = size / appState.zoom.value;
  const linkMarginY = size / appState.zoom.value;
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;
  const centeringOffset = (size - 8) / (2 * appState.zoom.value);
  const dashedLineMargin = 4 / appState.zoom.value;
  const x = x2 + dashedLineMargin - centeringOffset;
  const y = y1 - dashedLineMargin - linkMarginY + centeringOffset;
  const [rotatedX, rotatedY] = pointRotateRads(
    pointFrom(x + linkWidth / 2, y + linkHeight / 2),
    pointFrom(centerX, centerY),
    angle
  );
  return [
    rotatedX - linkWidth / 2,
    rotatedY - linkHeight / 2,
    linkWidth,
    linkHeight
  ];
};
var isPointHittingLinkIcon = (element, elementsMap, appState, [x, y]) => {
  const threshold = 4 / appState.zoom.value;
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const [linkX, linkY, linkWidth, linkHeight] = getLinkHandleFromCoords(
    [x1, y1, x2, y2],
    element.angle,
    appState
  );
  const hitLink = x > linkX - threshold && x < linkX + threshold + linkWidth && y > linkY - threshold && y < linkY + linkHeight + threshold;
  return hitLink;
};
var isPointHittingLink = (element, elementsMap, appState, [x, y], isMobile) => {
  if (!element.link || appState.selectedElementIds[element.id]) {
    return false;
  }
  if (!isMobile && appState.viewModeEnabled && hitElementBoundingBox(x, y, element, elementsMap)) {
    return true;
  }
  return isPointHittingLinkIcon(
    element,
    elementsMap,
    appState,
    pointFrom(x, y)
  );
};

// renderer/helpers.ts
init_define_import_meta_env();
var fillCircle = (context, cx, cy, radius, stroke = true) => {
  context.beginPath();
  context.arc(cx, cy, radius, 0, Math.PI * 2);
  context.fill();
  if (stroke) {
    context.stroke();
  }
};
var getNormalizedCanvasDimensions = (canvas2, scale) => {
  return [canvas2.width / scale, canvas2.height / scale];
};
var bootstrapCanvas = ({
  canvas: canvas2,
  scale,
  normalizedWidth,
  normalizedHeight,
  theme,
  isExporting,
  viewBackgroundColor
}) => {
  const context = canvas2.getContext("2d");
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.scale(scale, scale);
  if (isExporting && theme === THEME.DARK) {
    context.filter = THEME_FILTER;
  }
  if (typeof viewBackgroundColor === "string") {
    const hasTransparence = viewBackgroundColor === "transparent" || viewBackgroundColor.length === 5 || // #RGBA
    viewBackgroundColor.length === 9 || // #RRGGBBA
    /(hsla|rgba)\(/.test(viewBackgroundColor);
    if (hasTransparence) {
      context.clearRect(0, 0, normalizedWidth, normalizedHeight);
    }
    context.save();
    context.fillStyle = viewBackgroundColor;
    context.fillRect(0, 0, normalizedWidth, normalizedHeight);
    context.restore();
  } else {
    context.clearRect(0, 0, normalizedWidth, normalizedHeight);
  }
  return context;
};

// renderer/staticScene.ts
var GridLineColor = {
  Bold: "#dddddd",
  Regular: "#e5e5e5"
};
var strokeGrid = (context, gridSize, gridStep, scrollX, scrollY, zoom, width, height) => {
  const offsetX = scrollX % gridSize - gridSize;
  const offsetY = scrollY % gridSize - gridSize;
  const actualGridSize = gridSize * zoom.value;
  const spaceWidth = 1 / zoom.value;
  context.save();
  if (zoom.value === 1) {
    context.translate(offsetX % 1 ? 0 : 0.5, offsetY % 1 ? 0 : 0.5);
  }
  for (let x = offsetX; x < offsetX + width + gridSize * 2; x += gridSize) {
    const isBold = gridStep > 1 && Math.round(x - scrollX) % (gridStep * gridSize) === 0;
    if (!isBold && actualGridSize < 10) {
      continue;
    }
    const lineWidth = Math.min(1 / zoom.value, isBold ? 4 : 1);
    context.lineWidth = lineWidth;
    const lineDash = [lineWidth * 3, spaceWidth + (lineWidth + spaceWidth)];
    context.beginPath();
    context.setLineDash(isBold ? [] : lineDash);
    context.strokeStyle = isBold ? GridLineColor.Bold : GridLineColor.Regular;
    context.moveTo(x, offsetY - gridSize);
    context.lineTo(x, Math.ceil(offsetY + height + gridSize * 2));
    context.stroke();
  }
  for (let y = offsetY; y < offsetY + height + gridSize * 2; y += gridSize) {
    const isBold = gridStep > 1 && Math.round(y - scrollY) % (gridStep * gridSize) === 0;
    if (!isBold && actualGridSize < 10) {
      continue;
    }
    const lineWidth = Math.min(1 / zoom.value, isBold ? 4 : 1);
    context.lineWidth = lineWidth;
    const lineDash = [lineWidth * 3, spaceWidth + (lineWidth + spaceWidth)];
    context.beginPath();
    context.setLineDash(isBold ? [] : lineDash);
    context.strokeStyle = isBold ? GridLineColor.Bold : GridLineColor.Regular;
    context.moveTo(offsetX - gridSize, y);
    context.lineTo(Math.ceil(offsetX + width + gridSize * 2), y);
    context.stroke();
  }
  context.restore();
};
var frameClip = (frame, context, renderConfig, appState) => {
  context.translate(frame.x + appState.scrollX, frame.y + appState.scrollY);
  context.beginPath();
  if (context.roundRect) {
    context.roundRect(
      0,
      0,
      frame.width,
      frame.height,
      FRAME_STYLE.radius / appState.zoom.value
    );
  } else {
    context.rect(0, 0, frame.width, frame.height);
  }
  context.clip();
  context.translate(
    -(frame.x + appState.scrollX),
    -(frame.y + appState.scrollY)
  );
};
var linkCanvasCache;
var renderLinkIcon = (element, context, appState, elementsMap) => {
  if (element.link && !appState.selectedElementIds[element.id]) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const [x, y, width, height] = getLinkHandleFromCoords(
      [x1, y1, x2, y2],
      element.angle,
      appState
    );
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    context.save();
    context.translate(appState.scrollX + centerX, appState.scrollY + centerY);
    context.rotate(element.angle);
    if (!linkCanvasCache || linkCanvasCache.zoom !== appState.zoom.value) {
      linkCanvasCache = document.createElement("canvas");
      linkCanvasCache.zoom = appState.zoom.value;
      linkCanvasCache.width = width * window.devicePixelRatio * appState.zoom.value;
      linkCanvasCache.height = height * window.devicePixelRatio * appState.zoom.value;
      const linkCanvasCacheContext = linkCanvasCache.getContext("2d");
      linkCanvasCacheContext.scale(
        window.devicePixelRatio * appState.zoom.value,
        window.devicePixelRatio * appState.zoom.value
      );
      linkCanvasCacheContext.fillStyle = "#fff";
      linkCanvasCacheContext.fillRect(0, 0, width, height);
      linkCanvasCacheContext.drawImage(EXTERNAL_LINK_IMG, 0, 0, width, height);
      linkCanvasCacheContext.restore();
      context.drawImage(
        linkCanvasCache,
        x - centerX,
        y - centerY,
        width,
        height
      );
    } else {
      context.drawImage(
        linkCanvasCache,
        x - centerX,
        y - centerY,
        width,
        height
      );
    }
    context.restore();
  }
};
var _renderStaticScene = ({
  canvas: canvas2,
  rc,
  elementsMap,
  allElementsMap,
  visibleElements,
  scale,
  appState,
  renderConfig
}) => {
  if (canvas2 === null) {
    return;
  }
  const { renderGrid = true, isExporting } = renderConfig;
  const [normalizedWidth, normalizedHeight] = getNormalizedCanvasDimensions(
    canvas2,
    scale
  );
  const context = bootstrapCanvas({
    canvas: canvas2,
    scale,
    normalizedWidth,
    normalizedHeight,
    theme: appState.theme,
    isExporting,
    viewBackgroundColor: appState.viewBackgroundColor
  });
  context.scale(appState.zoom.value, appState.zoom.value);
  if (renderGrid) {
    strokeGrid(
      context,
      appState.gridSize,
      appState.gridStep,
      appState.scrollX,
      appState.scrollY,
      appState.zoom,
      normalizedWidth / appState.zoom.value,
      normalizedHeight / appState.zoom.value
    );
  }
  const groupsToBeAddedToFrame = /* @__PURE__ */ new Set();
  visibleElements.forEach((element) => {
    if (element.groupIds.length > 0 && appState.frameToHighlight && appState.selectedElementIds[element.id] && (elementOverlapsWithFrame(
      element,
      appState.frameToHighlight,
      elementsMap
    ) || element.groupIds.find((groupId) => groupsToBeAddedToFrame.has(groupId)))) {
      element.groupIds.forEach(
        (groupId) => groupsToBeAddedToFrame.add(groupId)
      );
    }
  });
  visibleElements.filter((el) => !isIframeLikeElement(el)).forEach((element) => {
    try {
      const frameId = element.frameId || appState.frameToHighlight?.id;
      if (isTextElement(element) && element.containerId && elementsMap.has(element.containerId)) {
        return;
      }
      context.save();
      if (frameId && appState.frameRendering.enabled && appState.frameRendering.clip) {
        const frame = getTargetFrame(element, elementsMap, appState);
        if (frame && isElementInFrame(element, elementsMap, appState)) {
          frameClip(frame, context, renderConfig, appState);
        }
        renderElement(
          element,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
      } else {
        renderElement(
          element,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
      }
      const boundTextElement = getBoundTextElement(element, elementsMap);
      if (boundTextElement) {
        renderElement(
          boundTextElement,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
      }
      context.restore();
      if (!isExporting) {
        renderLinkIcon(element, context, appState, elementsMap);
      }
    } catch (error) {
      console.error(error);
    }
  });
  visibleElements.filter((el) => isIframeLikeElement(el)).forEach((element) => {
    try {
      const render = () => {
        renderElement(
          element,
          elementsMap,
          allElementsMap,
          rc,
          context,
          renderConfig,
          appState
        );
        if (isIframeLikeElement(element) && (isExporting || isEmbeddableElement(element) && renderConfig.embedsValidationStatus.get(element.id) !== true) && element.width && element.height) {
          const label = createPlaceholderEmbeddableLabel(element);
          renderElement(
            label,
            elementsMap,
            allElementsMap,
            rc,
            context,
            renderConfig,
            appState
          );
        }
        if (!isExporting) {
          renderLinkIcon(element, context, appState, elementsMap);
        }
      };
      const frameId = element.frameId || appState.frameToHighlight?.id;
      if (frameId && appState.frameRendering.enabled && appState.frameRendering.clip) {
        context.save();
        const frame = getTargetFrame(element, elementsMap, appState);
        if (frame && isElementInFrame(element, elementsMap, appState)) {
          frameClip(frame, context, renderConfig, appState);
        }
        render();
        context.restore();
      } else {
        render();
      }
    } catch (error) {
      console.error(error);
    }
  });
  renderConfig.pendingFlowchartNodes?.forEach((element) => {
    try {
      renderElement(
        element,
        elementsMap,
        allElementsMap,
        rc,
        context,
        renderConfig,
        appState
      );
    } catch (error) {
      console.error(error);
    }
  });
};
var renderStaticSceneThrottled = throttleRAF(
  (config) => {
    _renderStaticScene(config);
  },
  { trailing: true }
);
var renderStaticScene = (renderConfig, throttle2) => {
  if (throttle2) {
    renderStaticSceneThrottled(renderConfig);
    return;
  }
  _renderStaticScene(renderConfig);
};

// scene/export.ts
var SVG_EXPORT_TAG = `<!-- svg-source:excalidraw -->`;
var truncateText = (element, maxWidth) => {
  if (element.width <= maxWidth) {
    return element;
  }
  const canvas2 = document.createElement("canvas");
  const ctx = canvas2.getContext("2d");
  ctx.font = getFontString({
    fontFamily: element.fontFamily,
    fontSize: element.fontSize
  });
  let text = element.text;
  const metrics = ctx.measureText(text);
  if (metrics.width > maxWidth) {
    for (let i2 = text.length; i2 > 0; i2--) {
      const newText = `${text.slice(0, i2)}...`;
      if (ctx.measureText(newText).width <= maxWidth) {
        text = newText;
        break;
      }
    }
  }
  return newElementWith(element, { text, width: maxWidth });
};
var addFrameLabelsAsTextElements = (elements, opts) => {
  const nextElements = [];
  for (const element of elements) {
    if (isFrameLikeElement(element)) {
      let textElement = newTextElement({
        x: element.x,
        y: element.y - FRAME_STYLE.nameOffsetY,
        fontFamily: FONT_FAMILY.Helvetica,
        fontSize: FRAME_STYLE.nameFontSize,
        lineHeight: FRAME_STYLE.nameLineHeight,
        strokeColor: opts.exportWithDarkMode ? FRAME_STYLE.nameColorDarkTheme : FRAME_STYLE.nameColorLightTheme,
        text: getFrameLikeTitle(element)
      });
      textElement.y -= textElement.height;
      textElement = truncateText(textElement, element.width);
      nextElements.push(textElement);
    }
    nextElements.push(element);
  }
  return nextElements;
};
var getFrameRenderingConfig = (exportingFrame, frameRendering) => {
  frameRendering = frameRendering || getDefaultAppState().frameRendering;
  return {
    enabled: exportingFrame ? true : frameRendering.enabled,
    outline: exportingFrame ? false : frameRendering.outline,
    name: exportingFrame ? false : frameRendering.name,
    clip: exportingFrame ? true : frameRendering.clip
  };
};
var prepareElementsForRender = ({
  elements,
  exportingFrame,
  frameRendering,
  exportWithDarkMode
}) => {
  let nextElements;
  if (exportingFrame) {
    nextElements = getElementsOverlappingFrame(elements, exportingFrame);
  } else if (frameRendering.enabled && frameRendering.name) {
    nextElements = addFrameLabelsAsTextElements(elements, {
      exportWithDarkMode
    });
  } else {
    nextElements = elements;
  }
  return nextElements;
};
var exportToCanvas = async (elements, appState, files, {
  exportBackground,
  exportPadding = DEFAULT_EXPORT_PADDING,
  viewBackgroundColor,
  exportingFrame
}, createCanvas = (width, height) => {
  const canvas2 = document.createElement("canvas");
  canvas2.width = width * appState.exportScale;
  canvas2.height = height * appState.exportScale;
  return { canvas: canvas2, scale: appState.exportScale };
}, loadFonts = async () => {
  await Fonts.loadFontsForElements(elements);
}) => {
  await loadFonts();
  const frameRendering = getFrameRenderingConfig(
    exportingFrame ?? null,
    appState.frameRendering ?? null
  );
  if (exportingFrame) {
    frameRendering.clip = false;
  }
  const elementsForRender = prepareElementsForRender({
    elements,
    exportingFrame,
    exportWithDarkMode: appState.exportWithDarkMode,
    frameRendering
  });
  if (exportingFrame) {
    exportPadding = 0;
  }
  const [minX, minY, width, height] = getCanvasSize(
    exportingFrame ? [exportingFrame] : getRootElements(elementsForRender),
    exportPadding
  );
  const { canvas: canvas2, scale = 1 } = createCanvas(width, height);
  const defaultAppState2 = getDefaultAppState();
  const { imageCache } = await updateImageCache({
    imageCache: /* @__PURE__ */ new Map(),
    fileIds: getInitializedImageElements(elementsForRender).map(
      (element) => element.fileId
    ),
    files
  });
  renderStaticScene({
    canvas: canvas2,
    rc: rough_default.canvas(canvas2),
    elementsMap: toBrandedType(
      arrayToMap(elementsForRender)
    ),
    allElementsMap: toBrandedType(
      arrayToMap(syncInvalidIndices(elements))
    ),
    visibleElements: elementsForRender,
    scale,
    appState: {
      ...appState,
      frameRendering,
      viewBackgroundColor: exportBackground ? viewBackgroundColor : null,
      scrollX: -minX + exportPadding,
      scrollY: -minY + exportPadding,
      zoom: defaultAppState2.zoom,
      shouldCacheIgnoreZoom: false,
      theme: appState.exportWithDarkMode ? THEME.DARK : THEME.LIGHT
    },
    renderConfig: {
      canvasBackgroundColor: viewBackgroundColor,
      imageCache,
      renderGrid: false,
      isExporting: true,
      // empty disables embeddable rendering
      embedsValidationStatus: /* @__PURE__ */ new Map(),
      elementsPendingErasure: /* @__PURE__ */ new Set(),
      pendingFlowchartNodes: null
    }
  });
  return canvas2;
};
var exportToSvg = async (elements, appState, files, opts) => {
  const frameRendering = getFrameRenderingConfig(
    opts?.exportingFrame ?? null,
    appState.frameRendering ?? null
  );
  let {
    exportPadding = DEFAULT_EXPORT_PADDING,
    exportWithDarkMode = false,
    viewBackgroundColor,
    exportScale = 1,
    exportEmbedScene
  } = appState;
  const { exportingFrame = null } = opts || {};
  const elementsForRender = prepareElementsForRender({
    elements,
    exportingFrame,
    exportWithDarkMode,
    frameRendering
  });
  if (exportingFrame) {
    exportPadding = 0;
  }
  let metadata = "";
  if (exportEmbedScene) {
    try {
      metadata = await (await import("./image-VQG6JJBF.js")).encodeSvgMetadata({
        // when embedding scene, we want to embed the origionally supplied
        // elements which don't contain the temp frame labels.
        // But it also requires that the exportToSvg is being supplied with
        // only the elements that we're exporting, and no extra.
        text: serializeAsJSON(elements, appState, files || {}, "local")
      });
    } catch (error) {
      console.error(error);
    }
  }
  const [minX, minY, width, height] = getCanvasSize(
    exportingFrame ? [exportingFrame] : getRootElements(elementsForRender),
    exportPadding
  );
  const svgRoot = document.createElementNS(SVG_NS, "svg");
  svgRoot.setAttribute("version", "1.1");
  svgRoot.setAttribute("xmlns", SVG_NS);
  svgRoot.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svgRoot.setAttribute("width", `${width * exportScale}`);
  svgRoot.setAttribute("height", `${height * exportScale}`);
  if (exportWithDarkMode) {
    svgRoot.setAttribute("filter", THEME_FILTER);
  }
  const offsetX = -minX + exportPadding;
  const offsetY = -minY + exportPadding;
  const frameElements = getFrameLikeElements(elements);
  let exportingFrameClipPath = "";
  const elementsMap = arrayToMap(elements);
  for (const frame of frameElements) {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(frame, elementsMap);
    const cx = (x2 - x1) / 2 - (frame.x - x1);
    const cy = (y2 - y1) / 2 - (frame.y - y1);
    exportingFrameClipPath += `<clipPath id=${frame.id}>
            <rect transform="translate(${frame.x + offsetX} ${frame.y + offsetY}) rotate(${frame.angle} ${cx} ${cy})"
          width="${frame.width}"
          height="${frame.height}"
          ${exportingFrame ? "" : `rx=${FRAME_STYLE.radius} ry=${FRAME_STYLE.radius}`}
          >
          </rect>
        </clipPath>`;
  }
  const fontFaces = opts?.skipInliningFonts ? [] : await getFontFaces(elements);
  svgRoot.innerHTML = `
  ${SVG_EXPORT_TAG}
  ${metadata}
  <defs>
    <style class="style-fonts">
      ${fontFaces.join("\n")}
    </style>
    ${exportingFrameClipPath}
  </defs>
  `;
  if (appState.exportBackground && viewBackgroundColor) {
    const rect = svgRoot.ownerDocument.createElementNS(SVG_NS, "rect");
    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0");
    rect.setAttribute("width", `${width}`);
    rect.setAttribute("height", `${height}`);
    rect.setAttribute("fill", viewBackgroundColor);
    svgRoot.appendChild(rect);
  }
  const rsvg = rough_default.svg(svgRoot);
  const renderEmbeddables = opts?.renderEmbeddables ?? false;
  renderSceneToSvg(
    elementsForRender,
    toBrandedType(arrayToMap(elementsForRender)),
    rsvg,
    svgRoot,
    files || {},
    {
      offsetX,
      offsetY,
      isExporting: true,
      exportWithDarkMode,
      renderEmbeddables,
      frameRendering,
      canvasBackgroundColor: viewBackgroundColor,
      embedsValidationStatus: renderEmbeddables ? new Map(
        elementsForRender.filter((element) => isFrameLikeElement(element)).map((element) => [element.id, true])
      ) : /* @__PURE__ */ new Map()
    }
  );
  return svgRoot;
};
var getCanvasSize = (elements, exportPadding) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  const width = distance(minX, maxX) + exportPadding * 2;
  const height = distance(minY, maxY) + exportPadding * 2;
  return [minX, minY, width, height];
};
var getExportSize = (elements, exportPadding, scale) => {
  const [, , width, height] = getCanvasSize(elements, exportPadding).map(
    (dimension) => Math.trunc(dimension * scale)
  );
  return [width, height];
};
var getFontFaces = async (elements) => {
  const fontFamilies = /* @__PURE__ */ new Set();
  const codePoints = /* @__PURE__ */ new Set();
  for (const element of elements) {
    if (!isTextElement(element)) {
      continue;
    }
    fontFamilies.add(element.fontFamily);
    for (const codePoint of Array.from(
      element.originalText,
      (u) => u.codePointAt(0)
    )) {
      if (codePoint) {
        codePoints.add(codePoint);
      }
    }
  }
  const getSource = (font) => {
    try {
      return font.getContent(codePoints);
    } catch {
      return font.urls[0].toString();
    }
  };
  const fontFaces = await Promise.all(
    Array.from(fontFamilies).map(async (x) => {
      const { fonts, metadata } = Fonts.registered.get(x) ?? {};
      if (!Array.isArray(fonts)) {
        console.error(
          `Couldn't find registered fonts for font-family "${x}"`,
          Fonts.registered
        );
        return [];
      }
      if (metadata?.local) {
        return [];
      }
      return Promise.all(
        fonts.map(
          async (font) => `@font-face {
        font-family: ${font.fontFace.family};
        src: url(${await getSource(font)});
          }`
        )
      );
    })
  );
  return fontFaces.flat();
};

// data/restore.ts
init_define_import_meta_env();
var AllowedExcalidrawActiveTools = {
  selection: true,
  text: true,
  rectangle: true,
  diamond: true,
  ellipse: true,
  line: true,
  image: true,
  arrow: true,
  freedraw: true,
  eraser: false,
  custom: true,
  frame: true,
  embeddable: true,
  hand: true,
  laser: false,
  magicframe: false
};
var getFontFamilyByName = (fontFamilyName) => {
  if (Object.keys(FONT_FAMILY).includes(fontFamilyName)) {
    return FONT_FAMILY[fontFamilyName];
  }
  return DEFAULT_FONT_FAMILY;
};
var repairBinding = (element, binding) => {
  if (!binding) {
    return null;
  }
  return {
    ...binding,
    focus: binding.focus || 0,
    ...isElbowArrow(element) && isFixedPointBinding(binding) ? {
      fixedPoint: normalizeFixedPoint(binding.fixedPoint ?? [0, 0])
    } : {}
  };
};
var restoreElementWithProperties = (element, extra) => {
  const base = {
    type: extra.type || element.type,
    // all elements must have version > 0 so getSceneVersion() will pick up
    // newly added elements
    version: element.version || 1,
    versionNonce: element.versionNonce ?? 0,
    index: element.index ?? null,
    isDeleted: element.isDeleted ?? false,
    id: element.id || randomId(),
    fillStyle: element.fillStyle || DEFAULT_ELEMENT_PROPS.fillStyle,
    strokeWidth: element.strokeWidth || DEFAULT_ELEMENT_PROPS.strokeWidth,
    strokeStyle: element.strokeStyle ?? DEFAULT_ELEMENT_PROPS.strokeStyle,
    roughness: element.roughness ?? DEFAULT_ELEMENT_PROPS.roughness,
    opacity: element.opacity == null ? DEFAULT_ELEMENT_PROPS.opacity : element.opacity,
    angle: element.angle || 0,
    x: extra.x ?? element.x ?? 0,
    y: extra.y ?? element.y ?? 0,
    strokeColor: element.strokeColor || DEFAULT_ELEMENT_PROPS.strokeColor,
    backgroundColor: element.backgroundColor || DEFAULT_ELEMENT_PROPS.backgroundColor,
    width: element.width || 0,
    height: element.height || 0,
    seed: element.seed ?? 1,
    groupIds: element.groupIds ?? [],
    frameId: element.frameId ?? null,
    roundness: element.roundness ? element.roundness : element.strokeSharpness === "round" ? {
      // for old elements that would now use adaptive radius algo,
      // use legacy algo instead
      type: isUsingAdaptiveRadius(element.type) ? ROUNDNESS.LEGACY : ROUNDNESS.PROPORTIONAL_RADIUS
    } : null,
    boundElements: element.boundElementIds ? element.boundElementIds.map((id) => ({ type: "arrow", id })) : element.boundElements ?? [],
    updated: element.updated ?? getUpdatedTimestamp(),
    link: element.link ? normalizeLink(element.link) : null,
    locked: element.locked ?? false
  };
  if ("customData" in element || "customData" in extra) {
    base.customData = "customData" in extra ? extra.customData : element.customData;
  }
  return {
    ...base,
    ...getNormalizedDimensions(base),
    ...extra
  };
};
var restoreElement = (element) => {
  switch (element.type) {
    case "text":
      let fontSize = element.fontSize;
      let fontFamily = element.fontFamily;
      if ("font" in element) {
        const [fontPx, _fontFamily] = element.font.split(" ");
        fontSize = parseFloat(fontPx);
        fontFamily = getFontFamilyByName(_fontFamily);
      }
      const text = typeof element.text === "string" && element.text || "";
      const lineHeight = element.lineHeight || (element.height ? (
        // detect line-height from current element height and font-size
        detectLineHeight(element)
      ) : (
        // no element height likely means programmatic use, so default
        // to a fixed line height
        getLineHeight(element.fontFamily)
      ));
      element = restoreElementWithProperties(element, {
        fontSize,
        fontFamily,
        text,
        textAlign: element.textAlign || DEFAULT_TEXT_ALIGN,
        verticalAlign: element.verticalAlign || DEFAULT_VERTICAL_ALIGN,
        containerId: element.containerId ?? null,
        originalText: element.originalText || text,
        autoResize: element.autoResize ?? true,
        lineHeight
      });
      if (!text && !element.isDeleted) {
        element = { ...element, originalText: text, isDeleted: true };
        element = bumpVersion(element);
      }
      return element;
    case "freedraw": {
      return restoreElementWithProperties(element, {
        points: element.points,
        lastCommittedPoint: null,
        simulatePressure: element.simulatePressure,
        pressures: element.pressures
      });
    }
    case "image":
      return restoreElementWithProperties(element, {
        status: element.status || "pending",
        fileId: element.fileId,
        scale: element.scale || [1, 1]
      });
    case "line":
    case "draw":
      const { startArrowhead = null, endArrowhead = null } = element;
      let x = element.x;
      let y = element.y;
      let points = (
        // migrate old arrow model to new one
        !Array.isArray(element.points) || element.points.length < 2 ? [pointFrom(0, 0), pointFrom(element.width, element.height)] : element.points
      );
      if (points[0][0] !== 0 || points[0][1] !== 0) {
        ({ points, x, y } = LinearElementEditor.getNormalizedPoints(element));
      }
      return restoreElementWithProperties(element, {
        type: element.type === "draw" ? "line" : element.type,
        startBinding: repairBinding(element, element.startBinding),
        endBinding: repairBinding(element, element.endBinding),
        lastCommittedPoint: null,
        startArrowhead,
        endArrowhead,
        points,
        x,
        y,
        ...getSizeFromPoints(points)
      });
    case "arrow": {
      const { startArrowhead: startArrowhead2 = null, endArrowhead: endArrowhead2 = "arrow" } = element;
      let x2 = element.x;
      let y2 = element.y;
      let points2 = (
        // migrate old arrow model to new one
        !Array.isArray(element.points) || element.points.length < 2 ? [pointFrom(0, 0), pointFrom(element.width, element.height)] : element.points
      );
      if (points2[0][0] !== 0 || points2[0][1] !== 0) {
        ({ points: points2, x: x2, y: y2 } = LinearElementEditor.getNormalizedPoints(element));
      }
      return restoreElementWithProperties(element, {
        type: element.type,
        startBinding: repairBinding(element, element.startBinding),
        endBinding: repairBinding(element, element.endBinding),
        lastCommittedPoint: null,
        startArrowhead: startArrowhead2,
        endArrowhead: endArrowhead2,
        points: points2,
        x: x2,
        y: y2,
        elbowed: element.elbowed,
        ...getSizeFromPoints(points2)
      });
    }
    case "ellipse":
    case "rectangle":
    case "diamond":
    case "iframe":
    case "embeddable":
      return restoreElementWithProperties(element, {});
    case "magicframe":
    case "frame":
      return restoreElementWithProperties(element, {
        name: element.name ?? null
      });
  }
  return null;
};
var repairContainerElement = (container, elementsMap) => {
  if (container.boundElements) {
    const boundElements = container.boundElements.slice();
    const boundIds = /* @__PURE__ */ new Set();
    container.boundElements = boundElements.reduce(
      (acc, binding) => {
        const boundElement = elementsMap.get(binding.id);
        if (boundElement && !boundIds.has(binding.id)) {
          boundIds.add(binding.id);
          if (boundElement.isDeleted) {
            return acc;
          }
          acc.push(binding);
          if (isTextElement(boundElement) && // being slightly conservative here, preserving existing containerId
          // if defined, lest boundElements is stale
          !boundElement.containerId) {
            boundElement.containerId = container.id;
          }
        }
        return acc;
      },
      []
    );
  }
};
var repairBoundElement = (boundElement, elementsMap) => {
  const container = boundElement.containerId ? elementsMap.get(boundElement.containerId) : null;
  if (!container) {
    boundElement.containerId = null;
    return;
  }
  if (boundElement.isDeleted) {
    return;
  }
  if (container.boundElements && !container.boundElements.find((binding) => binding.id === boundElement.id)) {
    const boundElements = (container.boundElements || (container.boundElements = [])).slice();
    boundElements.push({ type: "text", id: boundElement.id });
    container.boundElements = boundElements;
  }
};
var repairFrameMembership = (element, elementsMap) => {
  if (element.frameId) {
    const containingFrame = elementsMap.get(element.frameId);
    if (!containingFrame) {
      element.frameId = null;
    }
  }
};
var restoreElements = (elements, localElements, opts) => {
  const existingIds = /* @__PURE__ */ new Set();
  const localElementsMap = localElements ? arrayToMap(localElements) : null;
  const restoredElements = syncInvalidIndices(
    (elements || []).reduce((elements2, element) => {
      if (element.type !== "selection" && !isInvisiblySmallElement(element)) {
        let migratedElement = restoreElement(element);
        if (migratedElement) {
          const localElement = localElementsMap?.get(element.id);
          if (localElement && localElement.version > migratedElement.version) {
            migratedElement = bumpVersion(
              migratedElement,
              localElement.version
            );
          }
          if (existingIds.has(migratedElement.id)) {
            migratedElement = { ...migratedElement, id: randomId() };
          }
          existingIds.add(migratedElement.id);
          elements2.push(migratedElement);
        }
      }
      return elements2;
    }, [])
  );
  if (!opts?.repairBindings) {
    return restoredElements;
  }
  const restoredElementsMap = arrayToMap(restoredElements);
  for (const element of restoredElements) {
    if (element.frameId) {
      repairFrameMembership(element, restoredElementsMap);
    }
    if (isTextElement(element) && element.containerId) {
      repairBoundElement(element, restoredElementsMap);
    } else if (element.boundElements) {
      repairContainerElement(element, restoredElementsMap);
    }
    if (opts.refreshDimensions && isTextElement(element)) {
      Object.assign(
        element,
        refreshTextDimensions(
          element,
          getContainerElement(element, restoredElementsMap),
          restoredElementsMap
        )
      );
    }
    if (isLinearElement(element)) {
      if (element.startBinding && (!restoredElementsMap.has(element.startBinding.elementId) || !isArrowElement(element))) {
        element.startBinding = null;
      }
      if (element.endBinding && (!restoredElementsMap.has(element.endBinding.elementId) || !isArrowElement(element))) {
        element.endBinding = null;
      }
    }
  }
  return restoredElements;
};
var coalesceAppStateValue = (key, appState, defaultAppState2) => {
  const value = appState[key];
  return value !== void 0 ? value : defaultAppState2[key];
};
var LegacyAppStateMigrations = {
  isSidebarDocked: (appState, defaultAppState2) => {
    return [
      "defaultSidebarDockedPreference",
      appState.isSidebarDocked ?? coalesceAppStateValue(
        "defaultSidebarDockedPreference",
        appState,
        defaultAppState2
      )
    ];
  }
};
var restoreAppState = (appState, localAppState) => {
  appState = appState || {};
  const defaultAppState2 = getDefaultAppState();
  const nextAppState = {};
  for (const legacyKey of Object.keys(
    LegacyAppStateMigrations
  )) {
    if (legacyKey in appState) {
      const [nextKey, nextValue] = LegacyAppStateMigrations[legacyKey](
        appState,
        defaultAppState2
      );
      nextAppState[nextKey] = nextValue;
    }
  }
  for (const [key, defaultValue] of Object.entries(defaultAppState2)) {
    const suppliedValue = appState[key];
    const localValue = localAppState ? localAppState[key] : void 0;
    nextAppState[key] = suppliedValue !== void 0 ? suppliedValue : localValue !== void 0 ? localValue : defaultValue;
  }
  return {
    ...nextAppState,
    cursorButton: localAppState?.cursorButton || "up",
    // reset on fresh restore so as to hide the UI button if penMode not active
    penDetected: localAppState?.penDetected ?? (appState.penMode ? appState.penDetected ?? false : false),
    activeTool: {
      ...updateActiveTool(
        defaultAppState2,
        nextAppState.activeTool.type && AllowedExcalidrawActiveTools[nextAppState.activeTool.type] ? nextAppState.activeTool : { type: "selection" }
      ),
      lastActiveTool: null,
      locked: nextAppState.activeTool.locked ?? false
    },
    // Migrates from previous version where appState.zoom was a number
    zoom: {
      value: getNormalizedZoom(
        isFiniteNumber(appState.zoom) ? appState.zoom : appState.zoom?.value ?? defaultAppState2.zoom.value
      )
    },
    openSidebar: (
      // string (legacy)
      typeof appState.openSidebar === "string" ? { name: DEFAULT_SIDEBAR.name } : nextAppState.openSidebar
    ),
    gridSize: getNormalizedGridSize(
      isFiniteNumber(appState.gridSize) ? appState.gridSize : DEFAULT_GRID_SIZE
    ),
    gridStep: getNormalizedGridStep(
      isFiniteNumber(appState.gridStep) ? appState.gridStep : DEFAULT_GRID_STEP
    )
  };
};
var restore = (data, localAppState, localElements, elementsConfig) => {
  return {
    elements: restoreElements(data?.elements, localElements, elementsConfig),
    appState: restoreAppState(data?.appState, localAppState || null),
    files: data?.files || {}
  };
};
var restoreLibraryItem = (libraryItem) => {
  const elements = restoreElements(
    getNonDeletedElements2(libraryItem.elements),
    null
  );
  return elements.length ? { ...libraryItem, elements } : null;
};
var restoreLibraryItems = (libraryItems = [], defaultStatus) => {
  const restoredItems = [];
  for (const item of libraryItems) {
    if (Array.isArray(item)) {
      const restoredItem = restoreLibraryItem({
        status: defaultStatus,
        elements: item,
        id: randomId(),
        created: Date.now()
      });
      if (restoredItem) {
        restoredItems.push(restoredItem);
      }
    } else {
      const _item = item;
      const restoredItem = restoreLibraryItem({
        ..._item,
        id: _item.id || randomId(),
        status: _item.status || defaultStatus,
        created: _item.created || Date.now()
      });
      if (restoredItem) {
        restoredItems.push(restoredItem);
      }
    }
  }
  return restoredItems;
};

// clipboard.ts
init_define_import_meta_env();

// charts.ts
init_define_import_meta_env();
var BAR_WIDTH = 32;
var BAR_GAP = 12;
var BAR_HEIGHT = 256;
var GRID_OPACITY = 50;
var NOT_SPREADSHEET = "NOT_SPREADSHEET";
var VALID_SPREADSHEET = "VALID_SPREADSHEET";
var tryParseNumber = (s2) => {
  const match = /^([-+]?)[$€£¥₩]?([-+]?)([\d.,]+)[%]?$/.exec(s2);
  if (!match) {
    return null;
  }
  return parseFloat(`${(match[1] || match[2]) + match[3]}`.replace(/,/g, ""));
};
var isNumericColumn = (lines, columnIndex) => lines.slice(1).every((line2) => tryParseNumber(line2[columnIndex]) !== null);
var tryParseCells = (cells) => {
  const numCols = cells[0].length;
  if (numCols > 2) {
    return { type: NOT_SPREADSHEET, reason: "More than 2 columns" };
  }
  if (numCols === 1) {
    if (!isNumericColumn(cells, 0)) {
      return { type: NOT_SPREADSHEET, reason: "Value is not numeric" };
    }
    const hasHeader2 = tryParseNumber(cells[0][0]) === null;
    const values = (hasHeader2 ? cells.slice(1) : cells).map(
      (line2) => tryParseNumber(line2[0])
    );
    if (values.length < 2) {
      return { type: NOT_SPREADSHEET, reason: "Less than two rows" };
    }
    return {
      type: VALID_SPREADSHEET,
      spreadsheet: {
        title: hasHeader2 ? cells[0][0] : null,
        labels: null,
        values
      }
    };
  }
  const labelColumnNumeric = isNumericColumn(cells, 0);
  const valueColumnNumeric = isNumericColumn(cells, 1);
  if (!labelColumnNumeric && !valueColumnNumeric) {
    return { type: NOT_SPREADSHEET, reason: "Value is not numeric" };
  }
  const [labelColumnIndex, valueColumnIndex] = valueColumnNumeric ? [0, 1] : [1, 0];
  const hasHeader = tryParseNumber(cells[0][valueColumnIndex]) === null;
  const rows = hasHeader ? cells.slice(1) : cells;
  if (rows.length < 2) {
    return { type: NOT_SPREADSHEET, reason: "Less than 2 rows" };
  }
  return {
    type: VALID_SPREADSHEET,
    spreadsheet: {
      title: hasHeader ? cells[0][valueColumnIndex] : null,
      labels: rows.map((row) => row[labelColumnIndex]),
      values: rows.map((row) => tryParseNumber(row[valueColumnIndex]))
    }
  };
};
var transposeCells = (cells) => {
  const nextCells = [];
  for (let col = 0; col < cells[0].length; col++) {
    const nextCellRow = [];
    for (let row = 0; row < cells.length; row++) {
      nextCellRow.push(cells[row][col]);
    }
    nextCells.push(nextCellRow);
  }
  return nextCells;
};
var tryParseSpreadsheet = (text) => {
  let lines = text.trim().split("\n").map((line2) => line2.trim().split("	"));
  if (lines.length && lines[0].length !== 2) {
    lines = text.trim().split("\n").map((line2) => line2.trim().split(","));
  }
  if (lines.length === 0) {
    return { type: NOT_SPREADSHEET, reason: "No values" };
  }
  const numColsFirstLine = lines[0].length;
  const isSpreadsheet = lines.every((line2) => line2.length === numColsFirstLine);
  if (!isSpreadsheet) {
    return {
      type: NOT_SPREADSHEET,
      reason: "All rows don't have same number of columns"
    };
  }
  const result = tryParseCells(lines);
  if (result.type !== VALID_SPREADSHEET) {
    const transposedResults = tryParseCells(transposeCells(lines));
    if (transposedResults.type === VALID_SPREADSHEET) {
      return transposedResults;
    }
  }
  return result;
};
var bgColors = getAllColorsSpecificShade(DEFAULT_CHART_COLOR_INDEX);
var commonProps = {
  fillStyle: "hachure",
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
  opacity: 100,
  roughness: 1,
  strokeColor: COLOR_PALETTE.black,
  roundness: null,
  strokeStyle: "solid",
  strokeWidth: 1,
  verticalAlign: VERTICAL_ALIGN.MIDDLE,
  locked: false
};
var getChartDimensions = (spreadsheet) => {
  const chartWidth = (BAR_WIDTH + BAR_GAP) * spreadsheet.values.length + BAR_GAP;
  const chartHeight = BAR_HEIGHT + BAR_GAP * 2;
  return { chartWidth, chartHeight };
};
var chartXLabels = (spreadsheet, x, y, groupId, backgroundColor) => {
  return spreadsheet.labels?.map((label, index) => {
    return newTextElement({
      groupIds: [groupId],
      backgroundColor,
      ...commonProps,
      text: label.length > 8 ? `${label.slice(0, 5)}...` : label,
      x: x + index * (BAR_WIDTH + BAR_GAP) + BAR_GAP * 2,
      y: y + BAR_GAP / 2,
      width: BAR_WIDTH,
      angle: 5.87,
      fontSize: 16,
      textAlign: "center",
      verticalAlign: "top"
    });
  }) || [];
};
var chartYLabels = (spreadsheet, x, y, groupId, backgroundColor) => {
  const minYLabel = newTextElement({
    groupIds: [groupId],
    backgroundColor,
    ...commonProps,
    x: x - BAR_GAP,
    y: y - BAR_GAP,
    text: "0",
    textAlign: "right"
  });
  const maxYLabel = newTextElement({
    groupIds: [groupId],
    backgroundColor,
    ...commonProps,
    x: x - BAR_GAP,
    y: y - BAR_HEIGHT - minYLabel.height / 2,
    text: Math.max(...spreadsheet.values).toLocaleString(),
    textAlign: "right"
  });
  return [minYLabel, maxYLabel];
};
var chartLines = (spreadsheet, x, y, groupId, backgroundColor) => {
  const { chartWidth, chartHeight } = getChartDimensions(spreadsheet);
  const xLine = newLinearElement({
    backgroundColor,
    groupIds: [groupId],
    ...commonProps,
    type: "line",
    x,
    y,
    width: chartWidth,
    points: [pointFrom(0, 0), pointFrom(chartWidth, 0)]
  });
  const yLine = newLinearElement({
    backgroundColor,
    groupIds: [groupId],
    ...commonProps,
    type: "line",
    x,
    y,
    height: chartHeight,
    points: [pointFrom(0, 0), pointFrom(0, -chartHeight)]
  });
  const maxLine = newLinearElement({
    backgroundColor,
    groupIds: [groupId],
    ...commonProps,
    type: "line",
    x,
    y: y - BAR_HEIGHT - BAR_GAP,
    strokeStyle: "dotted",
    width: chartWidth,
    opacity: GRID_OPACITY,
    points: [pointFrom(0, 0), pointFrom(chartWidth, 0)]
  });
  return [xLine, yLine, maxLine];
};
var chartBaseElements = (spreadsheet, x, y, groupId, backgroundColor, debug) => {
  const { chartWidth, chartHeight } = getChartDimensions(spreadsheet);
  const title = spreadsheet.title ? newTextElement({
    backgroundColor,
    groupIds: [groupId],
    ...commonProps,
    text: spreadsheet.title,
    x: x + chartWidth / 2,
    y: y - BAR_HEIGHT - BAR_GAP * 2 - DEFAULT_FONT_SIZE,
    roundness: null,
    textAlign: "center"
  }) : null;
  const debugRect = debug ? newElement({
    backgroundColor,
    groupIds: [groupId],
    ...commonProps,
    type: "rectangle",
    x,
    y: y - chartHeight,
    width: chartWidth,
    height: chartHeight,
    strokeColor: COLOR_PALETTE.black,
    fillStyle: "solid",
    opacity: 6
  }) : null;
  return [
    ...debugRect ? [debugRect] : [],
    ...title ? [title] : [],
    ...chartXLabels(spreadsheet, x, y, groupId, backgroundColor),
    ...chartYLabels(spreadsheet, x, y, groupId, backgroundColor),
    ...chartLines(spreadsheet, x, y, groupId, backgroundColor)
  ];
};
var chartTypeBar = (spreadsheet, x, y) => {
  const max = Math.max(...spreadsheet.values);
  const groupId = randomId();
  const backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  const bars = spreadsheet.values.map((value, index) => {
    const barHeight = value / max * BAR_HEIGHT;
    return newElement({
      backgroundColor,
      groupIds: [groupId],
      ...commonProps,
      type: "rectangle",
      x: x + index * (BAR_WIDTH + BAR_GAP) + BAR_GAP,
      y: y - barHeight - BAR_GAP,
      width: BAR_WIDTH,
      height: barHeight
    });
  });
  return [
    ...bars,
    ...chartBaseElements(
      spreadsheet,
      x,
      y,
      groupId,
      backgroundColor,
      define_import_meta_env_default.DEV
    )
  ];
};
var chartTypeLine = (spreadsheet, x, y) => {
  const max = Math.max(...spreadsheet.values);
  const groupId = randomId();
  const backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  let index = 0;
  const points = [];
  for (const value of spreadsheet.values) {
    const cx = index * (BAR_WIDTH + BAR_GAP);
    const cy = -(value / max) * BAR_HEIGHT;
    points.push([cx, cy]);
    index++;
  }
  const maxX = Math.max(...points.map((element) => element[0]));
  const maxY = Math.max(...points.map((element) => element[1]));
  const minX = Math.min(...points.map((element) => element[0]));
  const minY = Math.min(...points.map((element) => element[1]));
  const line2 = newLinearElement({
    backgroundColor,
    groupIds: [groupId],
    ...commonProps,
    type: "line",
    x: x + BAR_GAP + BAR_WIDTH / 2,
    y: y - BAR_GAP,
    height: maxY - minY,
    width: maxX - minX,
    strokeWidth: 2,
    points
  });
  const dots = spreadsheet.values.map((value, index2) => {
    const cx = index2 * (BAR_WIDTH + BAR_GAP) + BAR_GAP / 2;
    const cy = -(value / max) * BAR_HEIGHT + BAR_GAP / 2;
    return newElement({
      backgroundColor,
      groupIds: [groupId],
      ...commonProps,
      fillStyle: "solid",
      strokeWidth: 2,
      type: "ellipse",
      x: x + cx + BAR_WIDTH / 2,
      y: y + cy - BAR_GAP * 2,
      width: BAR_GAP,
      height: BAR_GAP
    });
  });
  const lines = spreadsheet.values.map((value, index2) => {
    const cx = index2 * (BAR_WIDTH + BAR_GAP) + BAR_GAP / 2;
    const cy = value / max * BAR_HEIGHT + BAR_GAP / 2 + BAR_GAP;
    return newLinearElement({
      backgroundColor,
      groupIds: [groupId],
      ...commonProps,
      type: "line",
      x: x + cx + BAR_WIDTH / 2 + BAR_GAP / 2,
      y: y - cy,
      height: cy,
      strokeStyle: "dotted",
      opacity: GRID_OPACITY,
      points: [pointFrom(0, 0), pointFrom(0, cy)]
    });
  });
  return [
    ...chartBaseElements(
      spreadsheet,
      x,
      y,
      groupId,
      backgroundColor,
      define_import_meta_env_default.DEV
    ),
    line2,
    ...lines,
    ...dots
  ];
};
var renderSpreadsheet = (chartType, spreadsheet, x, y) => {
  if (chartType === "line") {
    return chartTypeLine(spreadsheet, x, y);
  }
  return chartTypeBar(spreadsheet, x, y);
};

// clipboard.ts
var probablySupportsClipboardReadText = "clipboard" in navigator && "readText" in navigator.clipboard;
var probablySupportsClipboardWriteText = "clipboard" in navigator && "writeText" in navigator.clipboard;
var probablySupportsClipboardBlob = "clipboard" in navigator && "write" in navigator.clipboard && "ClipboardItem" in window && "toBlob" in HTMLCanvasElement.prototype;
var clipboardContainsElements = (contents) => {
  if ([
    EXPORT_DATA_TYPES.excalidraw,
    EXPORT_DATA_TYPES.excalidrawClipboard,
    EXPORT_DATA_TYPES.excalidrawClipboardWithAPI
  ].includes(contents?.type) && Array.isArray(contents.elements)) {
    return true;
  }
  return false;
};
var createPasteEvent = ({
  types,
  files
}) => {
  if (!types && !files) {
    console.warn("createPasteEvent: no types or files provided");
  }
  const event = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  if (types) {
    for (const [type, value] of Object.entries(types)) {
      try {
        event.clipboardData?.setData(type, value);
        if (event.clipboardData?.getData(type) !== value) {
          throw new Error(`Failed to set "${type}" as clipboardData item`);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  if (files) {
    let idx = -1;
    for (const file2 of files) {
      idx++;
      try {
        event.clipboardData?.items.add(file2);
        if (event.clipboardData?.files[idx] !== file2) {
          throw new Error(
            `Failed to set file "${file2.name}" as clipboardData item`
          );
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  return event;
};
var serializeAsClipboardJSON = ({
  elements,
  files
}) => {
  const elementsMap = arrayToMap(elements);
  const framesToCopy = new Set(
    elements.filter((element) => isFrameLikeElement(element))
  );
  let foundFile = false;
  const _files = elements.reduce((acc, element) => {
    if (isInitializedImageElement(element)) {
      foundFile = true;
      if (files && files[element.fileId]) {
        acc[element.fileId] = files[element.fileId];
      }
    }
    return acc;
  }, {});
  if (foundFile && !files) {
    console.warn(
      "copyToClipboard: attempting to file element(s) without providing associated `files` object."
    );
  }
  const contents = {
    type: EXPORT_DATA_TYPES.excalidrawClipboard,
    elements: elements.map((element) => {
      if (getContainingFrame(element, elementsMap) && !framesToCopy.has(getContainingFrame(element, elementsMap))) {
        const copiedElement = deepCopyElement(element);
        mutateElement(copiedElement, {
          frameId: null
        });
        return copiedElement;
      }
      return element;
    }),
    files: files ? _files : void 0
  };
  return JSON.stringify(contents);
};
var copyToClipboard = async (elements, files, clipboardEvent) => {
  await copyTextToSystemClipboard(
    serializeAsClipboardJSON({ elements, files }),
    clipboardEvent
  );
};
var parsePotentialSpreadsheet = (text) => {
  const result = tryParseSpreadsheet(text);
  if (result.type === VALID_SPREADSHEET) {
    return { spreadsheet: result.spreadsheet };
  }
  return null;
};
function parseHTMLTree(el) {
  let result = [];
  for (const node of el.childNodes) {
    if (node.nodeType === 3) {
      const text = node.textContent?.trim();
      if (text) {
        result.push({ type: "text", value: text });
      }
    } else if (node instanceof HTMLImageElement) {
      const url = node.getAttribute("src");
      if (url && url.startsWith("http")) {
        result.push({ type: "imageUrl", value: url });
      }
    } else {
      result = result.concat(parseHTMLTree(node));
    }
  }
  return result;
}
var maybeParseHTMLPaste = (event) => {
  const html = event.clipboardData?.getData("text/html");
  if (!html) {
    return null;
  }
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const content = parseHTMLTree(doc.body);
    if (content.length) {
      return { type: "mixedContent", value: content };
    }
  } catch (error) {
    console.error(`error in parseHTMLFromPaste: ${error.message}`);
  }
  return null;
};
var readSystemClipboard = async () => {
  const types = {};
  try {
    if (navigator.clipboard?.readText) {
      return { "text/plain": await navigator.clipboard?.readText() };
    }
  } catch (error) {
    if (navigator.clipboard?.read) {
      console.warn(
        `navigator.clipboard.readText() failed (${error.message}). Failling back to navigator.clipboard.read()`
      );
    } else {
      throw error;
    }
  }
  let clipboardItems;
  try {
    clipboardItems = await navigator.clipboard?.read();
  } catch (error) {
    if (error.name === "DataError") {
      console.warn(
        `navigator.clipboard.read() error, clipboard is probably empty: ${error.message}`
      );
      return types;
    }
    throw error;
  }
  for (const item of clipboardItems) {
    for (const type of item.types) {
      if (!isMemberOf(ALLOWED_PASTE_MIME_TYPES, type)) {
        continue;
      }
      try {
        types[type] = await (await item.getType(type)).text();
      } catch (error) {
        console.warn(
          `Cannot retrieve ${type} from clipboardItem: ${error.message}`
        );
      }
    }
  }
  if (Object.keys(types).length === 0) {
    console.warn("No clipboard data found from clipboard.read().");
    return types;
  }
  return types;
};
var parseClipboardEvent = async (event, isPlainPaste = false) => {
  try {
    const mixedContent = !isPlainPaste && event && maybeParseHTMLPaste(event);
    if (mixedContent) {
      if (mixedContent.value.every((item) => item.type === "text")) {
        return {
          type: "text",
          value: event.clipboardData?.getData("text/plain") || mixedContent.value.map((item) => item.value).join("\n").trim()
        };
      }
      return mixedContent;
    }
    const text = event.clipboardData?.getData("text/plain");
    return { type: "text", value: (text || "").trim() };
  } catch {
    return { type: "text", value: "" };
  }
};
var parseClipboard = async (event, isPlainPaste = false) => {
  const parsedEventData = await parseClipboardEvent(event, isPlainPaste);
  if (parsedEventData.type === "mixedContent") {
    return {
      mixedContent: parsedEventData.value
    };
  }
  try {
    const spreadsheetResult = !isPlainPaste && parsePotentialSpreadsheet(parsedEventData.value);
    if (spreadsheetResult) {
      return spreadsheetResult;
    }
  } catch (error) {
    console.error(error);
  }
  try {
    const systemClipboardData = JSON.parse(parsedEventData.value);
    const programmaticAPI = systemClipboardData.type === EXPORT_DATA_TYPES.excalidrawClipboardWithAPI;
    if (clipboardContainsElements(systemClipboardData)) {
      return {
        elements: systemClipboardData.elements,
        files: systemClipboardData.files,
        text: isPlainPaste ? JSON.stringify(systemClipboardData.elements, null, 2) : void 0,
        programmaticAPI
      };
    }
  } catch {
  }
  return { text: parsedEventData.value };
};
var copyBlobToClipboardAsPng = async (blob) => {
  try {
    await navigator.clipboard.write([
      new window.ClipboardItem({
        [MIME_TYPES.png]: blob
      })
    ]);
  } catch (error) {
    if (isPromiseLike(blob)) {
      await navigator.clipboard.write([
        new window.ClipboardItem({
          [MIME_TYPES.png]: await blob
        })
      ]);
    } else {
      throw error;
    }
  }
};
var copyTextToSystemClipboard = async (text, clipboardEvent) => {
  if (probablySupportsClipboardWriteText) {
    try {
      await navigator.clipboard.writeText(text || "");
      return;
    } catch (error) {
      console.error(error);
    }
  }
  try {
    if (clipboardEvent) {
      clipboardEvent.clipboardData?.setData("text/plain", text || "");
      if (clipboardEvent.clipboardData?.getData("text/plain") !== text) {
        throw new Error("Failed to setData on clipboardEvent");
      }
      return;
    }
  } catch (error) {
    console.error(error);
  }
  if (!copyTextViaExecCommand(text)) {
    throw new Error("Error copying to clipboard.");
  }
};
var copyTextViaExecCommand = (text) => {
  if (!text) {
    text = " ";
  }
  const isRTL2 = document.documentElement.getAttribute("dir") === "rtl";
  const textarea = document.createElement("textarea");
  textarea.style.border = "0";
  textarea.style.padding = "0";
  textarea.style.margin = "0";
  textarea.style.position = "absolute";
  textarea.style[isRTL2 ? "right" : "left"] = "-9999px";
  const yPosition = window.pageYOffset || document.documentElement.scrollTop;
  textarea.style.top = `${yPosition}px`;
  textarea.style.fontSize = "12pt";
  textarea.setAttribute("readonly", "");
  textarea.value = text;
  document.body.appendChild(textarea);
  let success = false;
  try {
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    success = document.execCommand("copy");
  } catch (error) {
    console.error(error);
  }
  textarea.remove();
  return success;
};

// ../utils/export.ts
var exportToCanvas2 = ({
  elements,
  appState,
  files,
  maxWidthOrHeight,
  getDimensions,
  exportPadding,
  exportingFrame
}) => {
  const { elements: restoredElements, appState: restoredAppState } = restore(
    { elements, appState },
    null,
    null
  );
  const { exportBackground, viewBackgroundColor } = restoredAppState;
  return exportToCanvas(
    restoredElements,
    { ...restoredAppState, offsetTop: 0, offsetLeft: 0, width: 0, height: 0 },
    files || {},
    { exportBackground, exportPadding, viewBackgroundColor, exportingFrame },
    (width, height) => {
      const canvas2 = document.createElement("canvas");
      if (maxWidthOrHeight) {
        if (typeof getDimensions === "function") {
          console.warn(
            "`getDimensions()` is ignored when `maxWidthOrHeight` is supplied."
          );
        }
        const max = Math.max(width, height);
        const scale = maxWidthOrHeight < max ? maxWidthOrHeight / max : appState?.exportScale ?? 1;
        canvas2.width = width * scale;
        canvas2.height = height * scale;
        return {
          canvas: canvas2,
          scale
        };
      }
      const ret = getDimensions?.(width, height) || { width, height };
      canvas2.width = ret.width;
      canvas2.height = ret.height;
      return {
        canvas: canvas2,
        scale: ret.scale ?? 1
      };
    }
  );
};
var exportToBlob = async (opts) => {
  let { mimeType = MIME_TYPES.png, quality } = opts;
  if (mimeType === MIME_TYPES.png && typeof quality === "number") {
    console.warn(`"quality" will be ignored for "${MIME_TYPES.png}" mimeType`);
  }
  if (mimeType === "image/jpg") {
    mimeType = MIME_TYPES.jpg;
  }
  if (mimeType === MIME_TYPES.jpg && !opts.appState?.exportBackground) {
    console.warn(
      `Defaulting "exportBackground" to "true" for "${MIME_TYPES.jpg}" mimeType`
    );
    opts = {
      ...opts,
      appState: { ...opts.appState, exportBackground: true }
    };
  }
  const canvas2 = await exportToCanvas2(opts);
  quality = quality ? quality : /image\/jpe?g/.test(mimeType) ? 0.92 : 0.8;
  return new Promise((resolve, reject) => {
    canvas2.toBlob(
      async (blob) => {
        if (!blob) {
          return reject(new Error("couldn't export to blob"));
        }
        if (blob && mimeType === MIME_TYPES.png && opts.appState?.exportEmbedScene) {
          blob = await encodePngMetadata({
            blob,
            metadata: serializeAsJSON(
              // NOTE as long as we're using the Scene hack, we need to ensure
              // we pass the original, uncloned elements when serializing
              // so that we keep ids stable
              opts.elements,
              opts.appState,
              opts.files || {},
              "local"
            )
          });
        }
        resolve(blob);
      },
      mimeType,
      quality
    );
  });
};
var exportToSvg2 = async ({
  elements,
  appState = getDefaultAppState(),
  files = {},
  exportPadding,
  renderEmbeddables,
  exportingFrame,
  skipInliningFonts
}) => {
  const { elements: restoredElements, appState: restoredAppState } = restore(
    { elements, appState },
    null,
    null
  );
  const exportAppState = {
    ...restoredAppState,
    exportPadding
  };
  return exportToSvg(restoredElements, exportAppState, files, {
    exportingFrame,
    renderEmbeddables,
    skipInliningFonts
  });
};
var exportToClipboard = async (opts) => {
  if (opts.type === "svg") {
    const svg = await exportToSvg2(opts);
    await copyTextToSystemClipboard(svg.outerHTML);
  } else if (opts.type === "png") {
    await copyBlobToClipboardAsPng(exportToBlob(opts));
  } else if (opts.type === "json") {
    await copyToClipboard(opts.elements, opts.files);
  } else {
    throw new Error("Invalid export type");
  }
};

// ../utils/withinBounds.ts
init_define_import_meta_env();
var getNonLinearElementRelativePoints = (element) => {
  if (element.type === "diamond") {
    return [
      pointFrom(element.width / 2, 0),
      pointFrom(element.width, element.height / 2),
      pointFrom(element.width / 2, element.height),
      pointFrom(0, element.height / 2)
    ];
  }
  return [
    pointFrom(0, 0),
    pointFrom(0 + element.width, 0),
    pointFrom(0 + element.width, element.height),
    pointFrom(0, element.height)
  ];
};
var getElementRelativePoints = (element) => {
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    return element.points;
  }
  return getNonLinearElementRelativePoints(element);
};
var getMinMaxPoints = (points) => {
  const ret = points.reduce(
    (limits, [x, y]) => {
      limits.minY = Math.min(limits.minY, y);
      limits.minX = Math.min(limits.minX, x);
      limits.maxX = Math.max(limits.maxX, x);
      limits.maxY = Math.max(limits.maxY, y);
      return limits;
    },
    {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
      cx: 0,
      cy: 0
    }
  );
  ret.cx = (ret.maxX + ret.minX) / 2;
  ret.cy = (ret.maxY + ret.minY) / 2;
  return ret;
};
var getRotatedBBox = (element) => {
  const points = getElementRelativePoints(element);
  const { cx, cy } = getMinMaxPoints(points);
  const centerPoint = pointFrom(cx, cy);
  const rotatedPoints = points.map(
    (p) => pointRotateRads(p, centerPoint, element.angle)
  );
  const { minX, minY, maxX, maxY } = getMinMaxPoints(rotatedPoints);
  return [
    minX + element.x,
    minY + element.y,
    maxX + element.x,
    maxY + element.y
  ];
};
var isElementInsideBBox = (element, bbox, eitherDirection = false) => {
  const elementBBox = getRotatedBBox(element);
  const elementInsideBbox = bbox[0] <= elementBBox[0] && bbox[2] >= elementBBox[2] && bbox[1] <= elementBBox[1] && bbox[3] >= elementBBox[3];
  if (!eitherDirection) {
    return elementInsideBbox;
  }
  if (elementInsideBbox) {
    return true;
  }
  return elementBBox[0] <= bbox[0] && elementBBox[2] >= bbox[2] && elementBBox[1] <= bbox[1] && elementBBox[3] >= bbox[3];
};
var elementPartiallyOverlapsWithOrContainsBBox = (element, bbox) => {
  const elementBBox = getRotatedBBox(element);
  return (rangeIncludesValue(elementBBox[0], rangeInclusive(bbox[0], bbox[2])) || rangeIncludesValue(
    bbox[0],
    rangeInclusive(elementBBox[0], elementBBox[2])
  )) && (rangeIncludesValue(elementBBox[1], rangeInclusive(bbox[1], bbox[3])) || rangeIncludesValue(
    bbox[1],
    rangeInclusive(elementBBox[1], elementBBox[3])
  ));
};
var elementsOverlappingBBox = ({
  elements,
  bounds,
  type,
  errorMargin = 0
}) => {
  if (isExcalidrawElement(bounds)) {
    bounds = getElementBounds(bounds, arrayToMap(elements));
  }
  const adjustedBBox = [
    bounds[0] - errorMargin,
    bounds[1] - errorMargin,
    bounds[2] + errorMargin,
    bounds[3] + errorMargin
  ];
  const includedElementSet = /* @__PURE__ */ new Set();
  for (const element of elements) {
    if (includedElementSet.has(element.id)) {
      continue;
    }
    const isOverlaping = type === "overlap" ? elementPartiallyOverlapsWithOrContainsBBox(element, adjustedBBox) : type === "inside" ? isElementInsideBBox(element, adjustedBBox) : isElementInsideBBox(element, adjustedBBox, true);
    if (isOverlaping) {
      includedElementSet.add(element.id);
      if (element.boundElements) {
        for (const boundElement of element.boundElements) {
          includedElementSet.add(boundElement.id);
        }
      }
      if (isTextElement(element) && element.containerId) {
        includedElementSet.add(element.containerId);
      }
      if (isArrowElement(element)) {
        if (element.startBinding) {
          includedElementSet.add(element.startBinding.elementId);
        }
        if (element.endBinding) {
          includedElementSet.add(element.endBinding?.elementId);
        }
      }
    }
  }
  return elements.filter((element) => includedElementSet.has(element.id));
};

// ../utils/bbox.ts
init_define_import_meta_env();
function getBBox(line2) {
  return [
    Math.min(line2[0][0], line2[1][0]),
    Math.min(line2[0][1], line2[1][1]),
    Math.max(line2[0][0], line2[1][0]),
    Math.max(line2[0][1], line2[1][1])
  ];
}
function doBBoxesIntersect(a2, b2) {
  return a2[0] <= b2[2] && a2[2] >= b2[0] && a2[1] <= b2[3] && a2[3] >= b2[1];
}
var EPSILON2 = 1e-6;
function isPointOnLine(l2, p) {
  const p1 = vectorFromPoint(l2[1], l2[0]);
  const p2 = vectorFromPoint(p, l2[0]);
  const r = vectorCross(p1, p2);
  return Math.abs(r) < EPSILON2;
}
function isPointRightOfLine(l2, p) {
  const p1 = vectorFromPoint(l2[1], l2[0]);
  const p2 = vectorFromPoint(p, l2[0]);
  return vectorCross(p1, p2) < 0;
}
function isLineSegmentTouchingOrCrossingLine(a2, b2) {
  return isPointOnLine(a2, b2[0]) || isPointOnLine(a2, b2[1]) || (isPointRightOfLine(a2, b2[0]) ? !isPointRightOfLine(a2, b2[1]) : isPointRightOfLine(a2, b2[1]));
}
function doLineSegmentsIntersect(a2, b2) {
  return doBBoxesIntersect(getBBox(a2), getBBox(b2)) && isLineSegmentTouchingOrCrossingLine(a2, b2) && isLineSegmentTouchingOrCrossingLine(b2, a2);
}

// frame.ts
var bindElementsToFramesAfterDuplication = (nextElements, oldElements, oldIdToDuplicatedId) => {
  const nextElementMap = arrayToMap(nextElements);
  for (const element of oldElements) {
    if (element.frameId) {
      const nextElementId = oldIdToDuplicatedId.get(element.id);
      const nextFrameId = oldIdToDuplicatedId.get(element.frameId);
      if (nextElementId) {
        const nextElement = nextElementMap.get(nextElementId);
        if (nextElement) {
          mutateElement(
            nextElement,
            {
              frameId: nextFrameId ?? element.frameId
            },
            false
          );
        }
      }
    }
  }
};
function isElementIntersectingFrame(element, frame, elementsMap) {
  const frameLineSegments = getElementLineSegments(frame, elementsMap);
  const elementLineSegments = getElementLineSegments(element, elementsMap);
  const intersecting = frameLineSegments.some(
    (frameLineSegment) => elementLineSegments.some(
      (elementLineSegment) => doLineSegmentsIntersect(frameLineSegment, elementLineSegment)
    )
  );
  return intersecting;
}
var getElementsCompletelyInFrame = (elements, frame, elementsMap) => omitGroupsContainingFrameLikes(
  getElementsWithinSelection(elements, frame, elementsMap, false)
).filter(
  (element) => !isFrameLikeElement(element) && !element.frameId || element.frameId === frame.id
);
var isElementContainingFrame = (elements, element, frame, elementsMap) => {
  return getElementsWithinSelection(elements, element, elementsMap).some(
    (e2) => e2.id === frame.id
  );
};
var elementsAreInFrameBounds = (elements, frame, elementsMap) => {
  const [frameX1, frameY1, frameX2, frameY2] = getElementAbsoluteCoords(
    frame,
    elementsMap
  );
  const [elementX1, elementY1, elementX2, elementY2] = getCommonBounds(elements);
  return frameX1 <= elementX1 && frameY1 <= elementY1 && frameX2 >= elementX2 && frameY2 >= elementY2;
};
var elementOverlapsWithFrame = (element, frame, elementsMap) => {
  return elementsAreInFrameBounds([element], frame, elementsMap) || isElementIntersectingFrame(element, frame, elementsMap) || isElementContainingFrame([frame], element, frame, elementsMap);
};
var isCursorInFrame = (cursorCoords, frame, elementsMap) => {
  const [fx1, fy1, fx2, fy2] = getElementAbsoluteCoords(frame, elementsMap);
  return isPointWithinBounds(
    pointFrom(fx1, fy1),
    pointFrom(cursorCoords.x, cursorCoords.y),
    pointFrom(fx2, fy2)
  );
};
var groupByFrameLikes = (elements) => {
  const frameElementsMap = /* @__PURE__ */ new Map();
  for (const element of elements) {
    const frameId = isFrameLikeElement(element) ? element.id : element.frameId;
    if (frameId && !frameElementsMap.has(frameId)) {
      frameElementsMap.set(frameId, getFrameChildren(elements, frameId));
    }
  }
  return frameElementsMap;
};
var getFrameChildren = (allElements, frameId) => {
  const frameChildren = [];
  for (const element of allElements.values()) {
    if (element.frameId === frameId) {
      frameChildren.push(element);
    }
  }
  return frameChildren;
};
var getFrameLikeElements = (allElements) => {
  return allElements.filter(
    (element) => isFrameLikeElement(element)
  );
};
var getRootElements = (allElements) => {
  const frameElements = arrayToMap(getFrameLikeElements(allElements));
  return allElements.filter(
    (element) => frameElements.has(element.id) || !element.frameId || !frameElements.has(element.frameId)
  );
};
var getElementsInResizingFrame = (allElements, frame, appState, elementsMap) => {
  const prevElementsInFrame = getFrameChildren(allElements, frame.id);
  const nextElementsInFrame = new Set(prevElementsInFrame);
  const elementsCompletelyInFrame = /* @__PURE__ */ new Set([
    ...getElementsCompletelyInFrame(allElements, frame, elementsMap),
    ...prevElementsInFrame.filter(
      (element) => isElementContainingFrame(allElements, element, frame, elementsMap)
    )
  ]);
  const elementsNotCompletelyInFrame = prevElementsInFrame.filter(
    (element) => !elementsCompletelyInFrame.has(element)
  );
  const groupsToKeep = new Set(
    Array.from(elementsCompletelyInFrame).flatMap(
      (element) => element.groupIds
    )
  );
  for (const element of elementsNotCompletelyInFrame) {
    if (!isElementIntersectingFrame(element, frame, elementsMap)) {
      if (element.groupIds.length === 0) {
        nextElementsInFrame.delete(element);
      }
    } else if (element.groupIds.length > 0) {
      for (const id of element.groupIds) {
        groupsToKeep.add(id);
      }
    }
  }
  for (const element of elementsNotCompletelyInFrame) {
    if (element.groupIds.length > 0) {
      let shouldRemoveElement = true;
      for (const id of element.groupIds) {
        if (groupsToKeep.has(id)) {
          shouldRemoveElement = false;
        }
      }
      if (shouldRemoveElement) {
        nextElementsInFrame.delete(element);
      }
    }
  }
  const individualElementsCompletelyInFrame = Array.from(
    elementsCompletelyInFrame
  ).filter((element) => element.groupIds.length === 0);
  for (const element of individualElementsCompletelyInFrame) {
    nextElementsInFrame.add(element);
  }
  const newGroupElementsCompletelyInFrame = Array.from(
    elementsCompletelyInFrame
  ).filter((element) => element.groupIds.length > 0);
  const groupIds = selectGroupsFromGivenElements(
    newGroupElementsCompletelyInFrame,
    appState
  );
  for (const [id, isSelected] of Object.entries(groupIds)) {
    if (isSelected) {
      const elementsInGroup = getElementsInGroup(allElements, id);
      if (elementsAreInFrameBounds(elementsInGroup, frame, elementsMap)) {
        for (const element of elementsInGroup) {
          nextElementsInFrame.add(element);
        }
      }
    }
  }
  return [...nextElementsInFrame].filter((element) => {
    return !(isTextElement(element) && element.containerId);
  });
};
var getElementsInNewFrame = (elements, frame, elementsMap) => {
  return omitGroupsContainingFrameLikes(
    elements,
    getElementsCompletelyInFrame(elements, frame, elementsMap)
  );
};
var getContainingFrame = (element, elementsMap) => {
  if (!element.frameId) {
    return null;
  }
  return elementsMap.get(element.frameId) || null;
};
var filterElementsEligibleAsFrameChildren = (elements, frame) => {
  const otherFrames = /* @__PURE__ */ new Set();
  const elementsMap = arrayToMap(elements);
  elements = omitGroupsContainingFrameLikes(elements);
  for (const element of elements) {
    if (isFrameLikeElement(element) && element.id !== frame.id) {
      otherFrames.add(element.id);
    }
  }
  const processedGroups = /* @__PURE__ */ new Set();
  const eligibleElements = [];
  for (const element of elements) {
    if (isFrameLikeElement(element) || element.frameId && otherFrames.has(element.frameId)) {
      continue;
    }
    if (element.groupIds.length) {
      const shallowestGroupId = element.groupIds.at(-1);
      if (!processedGroups.has(shallowestGroupId)) {
        processedGroups.add(shallowestGroupId);
        const groupElements = getElementsInGroup(elements, shallowestGroupId);
        if (groupElements.some(
          (el) => elementOverlapsWithFrame(el, frame, elementsMap)
        )) {
          for (const child of groupElements) {
            eligibleElements.push(child);
          }
        }
      }
    } else {
      const overlaps = elementOverlapsWithFrame(element, frame, elementsMap);
      if (overlaps) {
        eligibleElements.push(element);
      }
    }
  }
  return eligibleElements;
};
var addElementsToFrame = (allElements, elementsToAdd, frame) => {
  const elementsMap = arrayToMap(allElements);
  const currTargetFrameChildrenMap = /* @__PURE__ */ new Map();
  for (const element of allElements.values()) {
    if (element.frameId === frame.id) {
      currTargetFrameChildrenMap.set(element.id, true);
    }
  }
  const suppliedElementsToAddSet = new Set(elementsToAdd.map((el) => el.id));
  const finalElementsToAdd = [];
  const otherFrames = /* @__PURE__ */ new Set();
  for (const element of elementsToAdd) {
    if (isFrameLikeElement(element) && element.id !== frame.id) {
      otherFrames.add(element.id);
    }
  }
  for (const element of omitGroupsContainingFrameLikes(
    allElements,
    elementsToAdd
  )) {
    if (isFrameLikeElement(element) || element.frameId && otherFrames.has(element.frameId)) {
      continue;
    }
    if (!currTargetFrameChildrenMap.has(element.id)) {
      finalElementsToAdd.push(element);
    }
    const boundTextElement = getBoundTextElement(element, elementsMap);
    if (boundTextElement && !suppliedElementsToAddSet.has(boundTextElement.id) && !currTargetFrameChildrenMap.has(boundTextElement.id)) {
      finalElementsToAdd.push(boundTextElement);
    }
  }
  for (const element of finalElementsToAdd) {
    mutateElement(
      element,
      {
        frameId: frame.id
      },
      false
    );
  }
  return allElements;
};
var removeElementsFromFrame = (elementsToRemove, elementsMap) => {
  const _elementsToRemove = /* @__PURE__ */ new Map();
  const toRemoveElementsByFrame = /* @__PURE__ */ new Map();
  for (const element of elementsToRemove) {
    if (element.frameId) {
      _elementsToRemove.set(element.id, element);
      const arr = toRemoveElementsByFrame.get(element.frameId) || [];
      arr.push(element);
      const boundTextElement = getBoundTextElement(element, elementsMap);
      if (boundTextElement) {
        _elementsToRemove.set(boundTextElement.id, boundTextElement);
        arr.push(boundTextElement);
      }
      toRemoveElementsByFrame.set(element.frameId, arr);
    }
  }
  for (const [, element] of _elementsToRemove) {
    mutateElement(
      element,
      {
        frameId: null
      },
      false
    );
  }
};
var removeAllElementsFromFrame = (allElements, frame) => {
  const elementsInFrame = getFrameChildren(allElements, frame.id);
  removeElementsFromFrame(elementsInFrame, arrayToMap(allElements));
  return allElements;
};
var replaceAllElementsInFrame = (allElements, nextElementsInFrame, frame, app) => {
  return addElementsToFrame(
    removeAllElementsFromFrame(allElements, frame),
    nextElementsInFrame,
    frame
  ).slice();
};
var updateFrameMembershipOfSelectedElements = (allElements, appState, app) => {
  const selectedElements = app.scene.getSelectedElements({
    selectedElementIds: appState.selectedElementIds,
    // supplying elements explicitly in case we're passed non-state elements
    elements: allElements
  });
  const elementsToFilter = new Set(selectedElements);
  if (appState.editingGroupId) {
    for (const element of selectedElements) {
      if (element.groupIds.length === 0) {
        elementsToFilter.add(element);
      } else {
        element.groupIds.flatMap((gid) => getElementsInGroup(allElements, gid)).forEach((element2) => elementsToFilter.add(element2));
      }
    }
  }
  const elementsToRemove = /* @__PURE__ */ new Set();
  const elementsMap = arrayToMap(allElements);
  elementsToFilter.forEach((element) => {
    if (element.frameId && !isFrameLikeElement(element) && !isElementInFrame(element, elementsMap, appState)) {
      elementsToRemove.add(element);
    }
  });
  if (elementsToRemove.size > 0) {
    removeElementsFromFrame(elementsToRemove, elementsMap);
  }
  return allElements;
};
var omitGroupsContainingFrameLikes = (allElements, selectedElements) => {
  const uniqueGroupIds = /* @__PURE__ */ new Set();
  const elements = selectedElements || allElements;
  for (const el of elements.values()) {
    const topMostGroupId = el.groupIds[el.groupIds.length - 1];
    if (topMostGroupId) {
      uniqueGroupIds.add(topMostGroupId);
    }
  }
  const rejectedGroupIds = /* @__PURE__ */ new Set();
  for (const groupId of uniqueGroupIds) {
    if (getElementsInGroup(allElements, groupId).some(
      (el) => isFrameLikeElement(el)
    )) {
      rejectedGroupIds.add(groupId);
    }
  }
  const ret = [];
  for (const element of elements.values()) {
    if (!rejectedGroupIds.has(element.groupIds[element.groupIds.length - 1])) {
      ret.push(element);
    }
  }
  return ret;
};
var getTargetFrame = (element, elementsMap, appState) => {
  const _element = isTextElement(element) ? getContainerElement(element, elementsMap) || element : element;
  return appState.selectedElementIds[_element.id] && appState.selectedElementsAreBeingDragged ? appState.frameToHighlight : getContainingFrame(_element, elementsMap);
};
var isElementInFrame = (element, allElementsMap, appState) => {
  const frame = getTargetFrame(element, allElementsMap, appState);
  const _element = isTextElement(element) ? getContainerElement(element, allElementsMap) || element : element;
  if (frame) {
    if (!appState.selectedElementIds[element.id] || !appState.selectedElementsAreBeingDragged) {
      return true;
    }
    if (_element.groupIds.length === 0) {
      return elementOverlapsWithFrame(_element, frame, allElementsMap);
    }
    const allElementsInGroup = new Set(
      _element.groupIds.flatMap(
        (gid) => getElementsInGroup(allElementsMap, gid)
      )
    );
    if (appState.editingGroupId && appState.selectedElementsAreBeingDragged) {
      const selectedElements = new Set(
        getSelectedElements(allElementsMap, appState)
      );
      const editingGroupOverlapsFrame = appState.frameToHighlight !== null;
      if (editingGroupOverlapsFrame) {
        return true;
      }
      selectedElements.forEach((selectedElement) => {
        allElementsInGroup.delete(selectedElement);
      });
    }
    for (const elementInGroup of allElementsInGroup) {
      if (isFrameLikeElement(elementInGroup)) {
        return false;
      }
    }
    for (const elementInGroup of allElementsInGroup) {
      if (elementOverlapsWithFrame(elementInGroup, frame, allElementsMap)) {
        return true;
      }
    }
  }
  return false;
};
var getFrameLikeTitle = (element) => {
  return element.name === null ? isFrameElement(element) ? "Frame" : "AI Frame" : element.name;
};
var getElementsOverlappingFrame = (elements, frame) => {
  return elementsOverlappingBBox({
    elements,
    bounds: frame,
    type: "overlap"
  }).filter((el) => !el.frameId || el.frameId === frame.id);
};

// scene/selection.ts
var excludeElementsInFramesFromSelection = (selectedElements) => {
  const framesInSelection = /* @__PURE__ */ new Set();
  selectedElements.forEach((element) => {
    if (isFrameLikeElement(element)) {
      framesInSelection.add(element.id);
    }
  });
  return selectedElements.filter((element) => {
    if (element.frameId && framesInSelection.has(element.frameId)) {
      return false;
    }
    return true;
  });
};
var getElementsWithinSelection = (elements, selection, elementsMap, excludeElementsInFrames = true) => {
  const [selectionX1, selectionY1, selectionX2, selectionY2] = getElementAbsoluteCoords(selection, elementsMap);
  let elementsInSelection = elements.filter((element) => {
    let [elementX1, elementY1, elementX2, elementY2] = getElementBounds(
      element,
      elementsMap
    );
    const containingFrame = getContainingFrame(element, elementsMap);
    if (containingFrame) {
      const [fx1, fy1, fx2, fy2] = getElementBounds(
        containingFrame,
        elementsMap
      );
      elementX1 = Math.max(fx1, elementX1);
      elementY1 = Math.max(fy1, elementY1);
      elementX2 = Math.min(fx2, elementX2);
      elementY2 = Math.min(fy2, elementY2);
    }
    return element.locked === false && element.type !== "selection" && !isBoundToContainer(element) && selectionX1 <= elementX1 && selectionY1 <= elementY1 && selectionX2 >= elementX2 && selectionY2 >= elementY2;
  });
  elementsInSelection = excludeElementsInFrames ? excludeElementsInFramesFromSelection(elementsInSelection) : elementsInSelection;
  elementsInSelection = elementsInSelection.filter((element) => {
    const containingFrame = getContainingFrame(element, elementsMap);
    if (containingFrame) {
      return elementOverlapsWithFrame(element, containingFrame, elementsMap);
    }
    return true;
  });
  return elementsInSelection;
};
var getVisibleAndNonSelectedElements = (elements, selectedElements, appState, elementsMap) => {
  const selectedElementsSet = new Set(
    selectedElements.map((element) => element.id)
  );
  return elements.filter((element) => {
    const isVisible = isElementInViewport(
      element,
      appState.width,
      appState.height,
      appState,
      elementsMap
    );
    return !selectedElementsSet.has(element.id) && isVisible;
  });
};
var isSomeElementSelected = function() {
  let lastElements = null;
  let lastSelectedElementIds = null;
  let isSelected = null;
  const ret = (elements, appState) => {
    if (isSelected != null && elements === lastElements && appState.selectedElementIds === lastSelectedElementIds) {
      return isSelected;
    }
    isSelected = elements.some(
      (element) => appState.selectedElementIds[element.id]
    );
    lastElements = elements;
    lastSelectedElementIds = appState.selectedElementIds;
    return isSelected;
  };
  ret.clearCache = () => {
    lastElements = null;
    lastSelectedElementIds = null;
    isSelected = null;
  };
  return ret;
}();
var getCommonAttributeOfSelectedElements = (elements, appState, getAttribute) => {
  const attributes = Array.from(
    new Set(
      getSelectedElements(elements, appState).map(
        (element) => getAttribute(element)
      )
    )
  );
  return attributes.length === 1 ? attributes[0] : null;
};
var getSelectedElements = (elements, appState, opts) => {
  const selectedElements = [];
  for (const element of elements.values()) {
    if (appState.selectedElementIds[element.id]) {
      selectedElements.push(element);
      continue;
    }
    if (opts?.includeBoundTextElement && isBoundToContainer(element) && appState.selectedElementIds[element?.containerId]) {
      selectedElements.push(element);
      continue;
    }
  }
  if (opts?.includeElementsInFrames) {
    const elementsToInclude = [];
    selectedElements.forEach((element) => {
      if (isFrameLikeElement(element)) {
        getFrameChildren(elements, element.id).forEach(
          (e2) => elementsToInclude.push(e2)
        );
      }
      elementsToInclude.push(element);
    });
    return elementsToInclude;
  }
  return selectedElements;
};
var getTargetElements = (elements, appState) => appState.editingTextElement ? [appState.editingTextElement] : appState.newElement ? [appState.newElement] : getSelectedElements(elements, appState, {
  includeBoundTextElement: true
});
var makeNextSelectedElementIds = (nextSelectedElementIds, prevState) => {
  if (isShallowEqual(prevState.selectedElementIds, nextSelectedElementIds)) {
    return prevState.selectedElementIds;
  }
  return nextSelectedElementIds;
};

// scene/Scene.ts
var getNonDeletedElements3 = (allElements) => {
  const elementsMap = /* @__PURE__ */ new Map();
  const elements = [];
  for (const element of allElements) {
    if (!element.isDeleted) {
      elements.push(element);
      elementsMap.set(
        element.id,
        element
      );
    }
  }
  return { elementsMap, elements };
};
var validateIndicesThrottled = (0, import_lodash.default)(
  (elements) => {
    if (define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST || window?.DEBUG_FRACTIONAL_INDICES) {
      validateFractionalIndices(elements, {
        // throw only in dev & test, to remain functional on `DEBUG_FRACTIONAL_INDICES`
        shouldThrow: define_import_meta_env_default.DEV || define_import_meta_env_default.MODE === ENV.TEST,
        includeBoundTextValidation: true
      });
    }
  },
  1e3 * 60,
  { leading: true, trailing: false }
);
var hashSelectionOpts = (opts) => {
  const keys = ["includeBoundTextElement", "includeElementsInFrames"];
  let hash = "";
  for (const key of keys) {
    hash += `${key}:${opts[key] ? "1" : "0"}`;
  }
  return hash;
};
var isIdKey = (elementKey) => {
  if (typeof elementKey === "string") {
    return true;
  }
  return false;
};
var Scene = class _Scene {
  // ---------------------------------------------------------------------------
  // static methods/props
  // ---------------------------------------------------------------------------
  static sceneMapByElement = /* @__PURE__ */ new WeakMap();
  static sceneMapById = /* @__PURE__ */ new Map();
  static mapElementToScene(elementKey, scene) {
    if (isIdKey(elementKey)) {
      this.sceneMapById.set(elementKey, scene);
    } else {
      this.sceneMapByElement.set(elementKey, scene);
      this.sceneMapById.set(elementKey.id, scene);
    }
  }
  /**
   * @deprecated pass down `app.scene` and use it directly
   */
  static getScene(elementKey) {
    if (isIdKey(elementKey)) {
      return this.sceneMapById.get(elementKey) || null;
    }
    return this.sceneMapByElement.get(elementKey) || null;
  }
  // ---------------------------------------------------------------------------
  // instance methods/props
  // ---------------------------------------------------------------------------
  callbacks = /* @__PURE__ */ new Set();
  nonDeletedElements = [];
  nonDeletedElementsMap = toBrandedType(
    /* @__PURE__ */ new Map()
  );
  // ideally all elements within the scene should be wrapped around with `Ordered` type, but right now there is no real benefit doing so
  elements = [];
  nonDeletedFramesLikes = [];
  frames = [];
  elementsMap = toBrandedType(/* @__PURE__ */ new Map());
  selectedElementsCache = {
    selectedElementIds: null,
    elements: null,
    cache: /* @__PURE__ */ new Map()
  };
  /**
   * Random integer regenerated each scene update.
   *
   * Does not relate to elements versions, it's only a renderer
   * cache-invalidation nonce at the moment.
   */
  sceneNonce;
  getSceneNonce() {
    return this.sceneNonce;
  }
  getNonDeletedElementsMap() {
    return this.nonDeletedElementsMap;
  }
  getElementsIncludingDeleted() {
    return this.elements;
  }
  getElementsMapIncludingDeleted() {
    return this.elementsMap;
  }
  getNonDeletedElements() {
    return this.nonDeletedElements;
  }
  getFramesIncludingDeleted() {
    return this.frames;
  }
  getSelectedElements(opts) {
    const hash = hashSelectionOpts(opts);
    const elements = opts?.elements || this.nonDeletedElements;
    if (this.selectedElementsCache.elements === elements && this.selectedElementsCache.selectedElementIds === opts.selectedElementIds) {
      const cached = this.selectedElementsCache.cache.get(hash);
      if (cached) {
        return cached;
      }
    } else if (opts?.elements == null) {
      this.selectedElementsCache.cache.clear();
    }
    const selectedElements = getSelectedElements(
      elements,
      { selectedElementIds: opts.selectedElementIds },
      opts
    );
    if (opts?.elements == null) {
      this.selectedElementsCache.selectedElementIds = opts.selectedElementIds;
      this.selectedElementsCache.elements = this.nonDeletedElements;
      this.selectedElementsCache.cache.set(hash, selectedElements);
    }
    return selectedElements;
  }
  getNonDeletedFramesLikes() {
    return this.nonDeletedFramesLikes;
  }
  getElement(id) {
    return this.elementsMap.get(id) || null;
  }
  getNonDeletedElement(id) {
    const element = this.getElement(id);
    if (element && isNonDeletedElement(element)) {
      return element;
    }
    return null;
  }
  /**
   * A utility method to help with updating all scene elements, with the added
   * performance optimization of not renewing the array if no change is made.
   *
   * Maps all current excalidraw elements, invoking the callback for each
   * element. The callback should either return a new mapped element, or the
   * original element if no changes are made. If no changes are made to any
   * element, this results in a no-op. Otherwise, the newly mapped elements
   * are set as the next scene's elements.
   *
   * @returns whether a change was made
   */
  mapElements(iteratee) {
    let didChange = false;
    const newElements = this.elements.map((element) => {
      const nextElement = iteratee(element);
      if (nextElement !== element) {
        didChange = true;
      }
      return nextElement;
    });
    if (didChange) {
      this.replaceAllElements(newElements);
    }
    return didChange;
  }
  replaceAllElements(nextElements) {
    const _nextElements = (
      // ts doesn't like `Array.isArray` of `instanceof Map`
      nextElements instanceof Array ? nextElements : Array.from(nextElements.values())
    );
    const nextFrameLikes = [];
    validateIndicesThrottled(_nextElements);
    this.elements = syncInvalidIndices(_nextElements);
    this.elementsMap.clear();
    this.elements.forEach((element) => {
      if (isFrameLikeElement(element)) {
        nextFrameLikes.push(element);
      }
      this.elementsMap.set(element.id, element);
      _Scene.mapElementToScene(element, this);
    });
    const nonDeletedElements = getNonDeletedElements3(this.elements);
    this.nonDeletedElements = nonDeletedElements.elements;
    this.nonDeletedElementsMap = nonDeletedElements.elementsMap;
    this.frames = nextFrameLikes;
    this.nonDeletedFramesLikes = getNonDeletedElements3(this.frames).elements;
    this.triggerUpdate();
  }
  triggerUpdate() {
    this.sceneNonce = randomInteger();
    for (const callback of Array.from(this.callbacks)) {
      callback();
    }
  }
  onUpdate(cb) {
    if (this.callbacks.has(cb)) {
      throw new Error();
    }
    this.callbacks.add(cb);
    return () => {
      if (!this.callbacks.has(cb)) {
        throw new Error();
      }
      this.callbacks.delete(cb);
    };
  }
  destroy() {
    this.elements = [];
    this.nonDeletedElements = [];
    this.nonDeletedFramesLikes = [];
    this.frames = [];
    this.elementsMap.clear();
    this.selectedElementsCache.selectedElementIds = null;
    this.selectedElementsCache.elements = null;
    this.selectedElementsCache.cache.clear();
    _Scene.sceneMapById.forEach((scene, elementKey) => {
      if (scene === this) {
        _Scene.sceneMapById.delete(elementKey);
      }
    });
    this.callbacks.clear();
  }
  insertElementAtIndex(element, index) {
    if (!Number.isFinite(index) || index < 0) {
      throw new Error(
        "insertElementAtIndex can only be called with index >= 0"
      );
    }
    const nextElements = [
      ...this.elements.slice(0, index),
      element,
      ...this.elements.slice(index)
    ];
    syncMovedIndices(nextElements, arrayToMap([element]));
    this.replaceAllElements(nextElements);
  }
  insertElementsAtIndex(elements, index) {
    if (!elements.length) {
      return;
    }
    if (!Number.isFinite(index) || index < 0) {
      throw new Error(
        "insertElementAtIndex can only be called with index >= 0"
      );
    }
    const nextElements = [
      ...this.elements.slice(0, index),
      ...elements,
      ...this.elements.slice(index)
    ];
    syncMovedIndices(nextElements, arrayToMap(elements));
    this.replaceAllElements(nextElements);
  }
  insertElement = (element) => {
    const index = element.frameId ? this.getElementIndex(element.frameId) : this.elements.length;
    this.insertElementAtIndex(element, index);
  };
  insertElements = (elements) => {
    if (!elements.length) {
      return;
    }
    const index = elements[0]?.frameId ? this.getElementIndex(elements[0].frameId) : this.elements.length;
    this.insertElementsAtIndex(elements, index);
  };
  getElementIndex(elementId) {
    return this.elements.findIndex((element) => element.id === elementId);
  }
  getContainerElement = (element) => {
    if (!element) {
      return null;
    }
    if (element.containerId) {
      return this.getElement(element.containerId) || null;
    }
    return null;
  };
};
var Scene_default = Scene;

// element/mutateElement.ts
var mutateElement = (element, updates, informMutation = true) => {
  let didChange = false;
  const { points, fileId } = updates;
  if (typeof points !== "undefined") {
    updates = { ...getSizeFromPoints(points), ...updates };
  }
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      if (element[key] === value && // if object, always update because its attrs could have changed
      // (except for specific keys we handle below)
      (typeof value !== "object" || value === null || key === "groupIds" || key === "scale")) {
        continue;
      }
      if (key === "scale") {
        const prevScale = element[key];
        const nextScale = value;
        if (prevScale[0] === nextScale[0] && prevScale[1] === nextScale[1]) {
          continue;
        }
      } else if (key === "points") {
        const prevPoints = element[key];
        const nextPoints = value;
        if (prevPoints.length === nextPoints.length) {
          let didChangePoints = false;
          let index = prevPoints.length;
          while (--index) {
            const prevPoint = prevPoints[index];
            const nextPoint = nextPoints[index];
            if (prevPoint[0] !== nextPoint[0] || prevPoint[1] !== nextPoint[1]) {
              didChangePoints = true;
              break;
            }
          }
          if (!didChangePoints) {
            continue;
          }
        }
      }
      element[key] = value;
      didChange = true;
    }
  }
  if (!didChange) {
    return element;
  }
  if (typeof updates.height !== "undefined" || typeof updates.width !== "undefined" || typeof fileId != "undefined" || typeof points !== "undefined") {
    ShapeCache.delete(element);
  }
  element.version++;
  element.versionNonce = randomInteger();
  element.updated = getUpdatedTimestamp();
  if (informMutation) {
    Scene_default.getScene(element)?.triggerUpdate();
  }
  return element;
};
var newElementWith = (element, updates, force = false) => {
  let didChange = false;
  for (const key in updates) {
    const value = updates[key];
    if (typeof value !== "undefined") {
      if (element[key] === value && // if object, always update because its attrs could have changed
      (typeof value !== "object" || value === null)) {
        continue;
      }
      didChange = true;
    }
  }
  if (!didChange && !force) {
    return element;
  }
  return {
    ...element,
    ...updates,
    updated: getUpdatedTimestamp(),
    version: element.version + 1,
    versionNonce: randomInteger()
  };
};
var bumpVersion = (element, version) => {
  element.version = (version ?? element.version) + 1;
  element.versionNonce = randomInteger();
  element.updated = getUpdatedTimestamp();
  return element;
};

// element/sizeHelpers.ts
var isInvisiblySmallElement = (element) => {
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    return element.points.length < 2;
  }
  return element.width === 0 && element.height === 0;
};
var isElementInViewport = (element, width, height, viewTransformations, elementsMap) => {
  const [x1, y1, x2, y2] = getElementBounds(element, elementsMap);
  const topLeftSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft,
      clientY: viewTransformations.offsetTop
    },
    viewTransformations
  );
  const bottomRightSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + width,
      clientY: viewTransformations.offsetTop + height
    },
    viewTransformations
  );
  return topLeftSceneCoords.x <= x2 && topLeftSceneCoords.y <= y2 && bottomRightSceneCoords.x >= x1 && bottomRightSceneCoords.y >= y1;
};
var isElementCompletelyInViewport = (elements, width, height, viewTransformations, elementsMap, padding) => {
  const [x1, y1, x2, y2] = getCommonBounds(elements, elementsMap);
  const topLeftSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + (padding?.left || 0),
      clientY: viewTransformations.offsetTop + (padding?.top || 0)
    },
    viewTransformations
  );
  const bottomRightSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + width - (padding?.right || 0),
      clientY: viewTransformations.offsetTop + height - (padding?.bottom || 0)
    },
    viewTransformations
  );
  return x1 >= topLeftSceneCoords.x && y1 >= topLeftSceneCoords.y && x2 <= bottomRightSceneCoords.x && y2 <= bottomRightSceneCoords.y;
};
var getPerfectElementSize = (elementType, width, height) => {
  const absWidth = Math.abs(width);
  const absHeight = Math.abs(height);
  if (elementType === "line" || elementType === "arrow" || elementType === "freedraw") {
    const lockedAngle = Math.round(Math.atan(absHeight / absWidth) / SHIFT_LOCKING_ANGLE) * SHIFT_LOCKING_ANGLE;
    if (lockedAngle === 0) {
      height = 0;
    } else if (lockedAngle === Math.PI / 2) {
      width = 0;
    } else {
      height = absWidth * Math.tan(lockedAngle) * Math.sign(height) || height;
    }
  } else if (elementType !== "selection") {
    height = absWidth * Math.sign(height);
  }
  return { width, height };
};
var getLockedLinearCursorAlignSize = (originX, originY, x, y) => {
  let width = x - originX;
  let height = y - originY;
  const lockedAngle = Math.round(Math.atan(height / width) / SHIFT_LOCKING_ANGLE) * SHIFT_LOCKING_ANGLE;
  if (lockedAngle === 0) {
    height = 0;
  } else if (lockedAngle === Math.PI / 2) {
    width = 0;
  } else {
    const a1 = Math.tan(lockedAngle);
    const b1 = -1;
    const c1 = originY - a1 * originX;
    const a2 = -1 / a1;
    const b2 = -1;
    const c2 = y - a2 * x;
    const intersectX = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
    const intersectY = (c1 * a2 - c2 * a1) / (a1 * b2 - a2 * b1);
    width = intersectX - originX;
    height = intersectY - originY;
  }
  return { width, height };
};
var getNormalizedDimensions = (element) => {
  const ret = {
    width: element.width,
    height: element.height,
    x: element.x,
    y: element.y
  };
  if (element.width < 0) {
    const nextWidth = Math.abs(element.width);
    ret.width = nextWidth;
    ret.x = element.x - nextWidth;
  }
  if (element.height < 0) {
    const nextHeight = Math.abs(element.height);
    ret.height = nextHeight;
    ret.y = element.y - nextHeight;
  }
  return ret;
};

// element/transformHandles.ts
init_define_import_meta_env();
var transformHandleSizes = {
  mouse: 8,
  pen: 16,
  touch: 28
};
var ROTATION_RESIZE_HANDLE_GAP = 16;
var DEFAULT_OMIT_SIDES = {
  e: true,
  s: true,
  n: true,
  w: true
};
var OMIT_SIDES_FOR_LINE_SLASH = {
  e: true,
  s: true,
  n: true,
  w: true,
  nw: true,
  se: true
};
var OMIT_SIDES_FOR_LINE_BACKSLASH = {
  e: true,
  s: true,
  n: true,
  w: true
};
var generateTransformHandle = (x, y, width, height, cx, cy, angle) => {
  const [xx, yy] = pointRotateRads(
    pointFrom(x + width / 2, y + height / 2),
    pointFrom(cx, cy),
    angle
  );
  return [xx - width / 2, yy - height / 2, width, height];
};
var canResizeFromSides = (device) => {
  if (device.viewport.isMobile) {
    return false;
  }
  if (device.isTouchScreen && (isAndroid || isIOS)) {
    return false;
  }
  return true;
};
var getOmitSidesForDevice = (device) => {
  if (canResizeFromSides(device)) {
    return DEFAULT_OMIT_SIDES;
  }
  return {};
};
var getTransformHandlesFromCoords = ([x1, y1, x2, y2, cx, cy], angle, zoom, pointerType, omitSides = {}, margin = 4) => {
  const size = transformHandleSizes[pointerType];
  const handleWidth = size / zoom.value;
  const handleHeight = size / zoom.value;
  const handleMarginX = size / zoom.value;
  const handleMarginY = size / zoom.value;
  const width = x2 - x1;
  const height = y2 - y1;
  const dashedLineMargin = margin / zoom.value;
  const centeringOffset = (size - DEFAULT_TRANSFORM_HANDLE_SPACING * 2) / (2 * zoom.value);
  const transformHandles = {
    nw: omitSides.nw ? void 0 : generateTransformHandle(
      x1 - dashedLineMargin - handleMarginX + centeringOffset,
      y1 - dashedLineMargin - handleMarginY + centeringOffset,
      handleWidth,
      handleHeight,
      cx,
      cy,
      angle
    ),
    ne: omitSides.ne ? void 0 : generateTransformHandle(
      x2 + dashedLineMargin - centeringOffset,
      y1 - dashedLineMargin - handleMarginY + centeringOffset,
      handleWidth,
      handleHeight,
      cx,
      cy,
      angle
    ),
    sw: omitSides.sw ? void 0 : generateTransformHandle(
      x1 - dashedLineMargin - handleMarginX + centeringOffset,
      y2 + dashedLineMargin - centeringOffset,
      handleWidth,
      handleHeight,
      cx,
      cy,
      angle
    ),
    se: omitSides.se ? void 0 : generateTransformHandle(
      x2 + dashedLineMargin - centeringOffset,
      y2 + dashedLineMargin - centeringOffset,
      handleWidth,
      handleHeight,
      cx,
      cy,
      angle
    ),
    rotation: omitSides.rotation ? void 0 : generateTransformHandle(
      x1 + width / 2 - handleWidth / 2,
      y1 - dashedLineMargin - handleMarginY + centeringOffset - ROTATION_RESIZE_HANDLE_GAP / zoom.value,
      handleWidth,
      handleHeight,
      cx,
      cy,
      angle
    )
  };
  const minimumSizeForEightHandles = 5 * transformHandleSizes.mouse / zoom.value;
  if (Math.abs(width) > minimumSizeForEightHandles) {
    if (!omitSides.n) {
      transformHandles.n = generateTransformHandle(
        x1 + width / 2 - handleWidth / 2,
        y1 - dashedLineMargin - handleMarginY + centeringOffset,
        handleWidth,
        handleHeight,
        cx,
        cy,
        angle
      );
    }
    if (!omitSides.s) {
      transformHandles.s = generateTransformHandle(
        x1 + width / 2 - handleWidth / 2,
        y2 + dashedLineMargin - centeringOffset,
        handleWidth,
        handleHeight,
        cx,
        cy,
        angle
      );
    }
  }
  if (Math.abs(height) > minimumSizeForEightHandles) {
    if (!omitSides.w) {
      transformHandles.w = generateTransformHandle(
        x1 - dashedLineMargin - handleMarginX + centeringOffset,
        y1 + height / 2 - handleHeight / 2,
        handleWidth,
        handleHeight,
        cx,
        cy,
        angle
      );
    }
    if (!omitSides.e) {
      transformHandles.e = generateTransformHandle(
        x2 + dashedLineMargin - centeringOffset,
        y1 + height / 2 - handleHeight / 2,
        handleWidth,
        handleHeight,
        cx,
        cy,
        angle
      );
    }
  }
  return transformHandles;
};
var getTransformHandles = (element, zoom, elementsMap, pointerType = "mouse", omitSides = DEFAULT_OMIT_SIDES) => {
  if (element.locked || // Elbow arrows cannot be rotated
  isElbowArrow(element)) {
    return {};
  }
  if (element.type === "freedraw" || isLinearElement(element)) {
    if (element.points.length === 2) {
      const [, p1] = element.points;
      if (p1[0] === 0 || p1[1] === 0) {
        omitSides = OMIT_SIDES_FOR_LINE_BACKSLASH;
      } else if (p1[0] > 0 && p1[1] < 0) {
        omitSides = OMIT_SIDES_FOR_LINE_SLASH;
      } else if (p1[0] > 0 && p1[1] > 0) {
        omitSides = OMIT_SIDES_FOR_LINE_BACKSLASH;
      } else if (p1[0] < 0 && p1[1] > 0) {
        omitSides = OMIT_SIDES_FOR_LINE_SLASH;
      } else if (p1[0] < 0 && p1[1] < 0) {
        omitSides = OMIT_SIDES_FOR_LINE_BACKSLASH;
      }
    }
  } else if (isFrameLikeElement(element)) {
    omitSides = {
      ...omitSides,
      rotation: true
    };
  }
  const dashedLineMargin = isLinearElement(element) ? DEFAULT_TRANSFORM_HANDLE_SPACING + 8 : DEFAULT_TRANSFORM_HANDLE_SPACING;
  return getTransformHandlesFromCoords(
    getElementAbsoluteCoords(element, elementsMap, true),
    element.angle,
    zoom,
    pointerType,
    omitSides,
    dashedLineMargin
  );
};
var shouldShowBoundingBox = (elements, appState) => {
  if (appState.editingLinearElement) {
    return false;
  }
  if (elements.length > 1) {
    return true;
  }
  const element = elements[0];
  if (isElbowArrow(element)) {
    return false;
  }
  if (!isLinearElement(element)) {
    return true;
  }
  return element.points.length > 2;
};

// element/resizeTest.ts
init_define_import_meta_env();
var isInsideTransformHandle = (transformHandle, x, y) => x >= transformHandle[0] && x <= transformHandle[0] + transformHandle[2] && y >= transformHandle[1] && y <= transformHandle[1] + transformHandle[3];
var resizeTest = (element, elementsMap, appState, x, y, zoom, pointerType, device) => {
  if (!appState.selectedElementIds[element.id]) {
    return false;
  }
  const { rotation: rotationTransformHandle, ...transformHandles } = getTransformHandles(
    element,
    zoom,
    elementsMap,
    pointerType,
    getOmitSidesForDevice(device)
  );
  if (rotationTransformHandle && isInsideTransformHandle(rotationTransformHandle, x, y)) {
    return "rotation";
  }
  const filter = Object.keys(transformHandles).filter((key) => {
    const transformHandle = transformHandles[key];
    if (!transformHandle) {
      return false;
    }
    return isInsideTransformHandle(transformHandle, x, y);
  });
  if (filter.length > 0) {
    return filter[0];
  }
  if (canResizeFromSides(device)) {
    const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
      element,
      elementsMap
    );
    if (!(isLinearElement(element) && element.points.length <= 2)) {
      const SPACING = SIDE_RESIZING_THRESHOLD / zoom.value;
      const sides = getSelectionBorders(
        pointFrom(x1 - SPACING, y1 - SPACING),
        pointFrom(x2 + SPACING, y2 + SPACING),
        pointFrom(cx, cy),
        element.angle
      );
      for (const [dir, side] of Object.entries(sides)) {
        if (pointOnLineSegment(
          pointFrom(x, y),
          side,
          SPACING
        )) {
          return dir;
        }
      }
    }
  }
  return false;
};
var getElementWithTransformHandleType = (elements, appState, scenePointerX, scenePointerY, zoom, pointerType, elementsMap, device) => {
  return elements.reduce((result, element) => {
    if (result) {
      return result;
    }
    const transformHandleType = resizeTest(
      element,
      elementsMap,
      appState,
      scenePointerX,
      scenePointerY,
      zoom,
      pointerType,
      device
    );
    return transformHandleType ? { element, transformHandleType } : null;
  }, null);
};
var getTransformHandleTypeFromCoords = ([x1, y1, x2, y2], scenePointerX, scenePointerY, zoom, pointerType, device) => {
  const transformHandles = getTransformHandlesFromCoords(
    [x1, y1, x2, y2, (x1 + x2) / 2, (y1 + y2) / 2],
    0,
    zoom,
    pointerType,
    getOmitSidesForDevice(device)
  );
  const found = Object.keys(transformHandles).find((key) => {
    const transformHandle = transformHandles[key];
    return transformHandle && isInsideTransformHandle(transformHandle, scenePointerX, scenePointerY);
  });
  if (found) {
    return found;
  }
  if (canResizeFromSides(device)) {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const SPACING = SIDE_RESIZING_THRESHOLD / zoom.value;
    const sides = getSelectionBorders(
      pointFrom(x1 - SPACING, y1 - SPACING),
      pointFrom(x2 + SPACING, y2 + SPACING),
      pointFrom(cx, cy),
      0
    );
    for (const [dir, side] of Object.entries(sides)) {
      if (pointOnLineSegment(
        pointFrom(scenePointerX, scenePointerY),
        side,
        SPACING
      )) {
        return dir;
      }
    }
  }
  return false;
};
var RESIZE_CURSORS = ["ns", "nesw", "ew", "nwse"];
var rotateResizeCursor = (cursor, angle) => {
  const index = RESIZE_CURSORS.indexOf(cursor);
  if (index >= 0) {
    const a2 = Math.round(angle / (Math.PI / 4));
    cursor = RESIZE_CURSORS[(index + a2) % RESIZE_CURSORS.length];
  }
  return cursor;
};
var getCursorForResizingElement = (resizingElement) => {
  const { element, transformHandleType } = resizingElement;
  const shouldSwapCursors = element && Math.sign(element.height) * Math.sign(element.width) === -1;
  let cursor = null;
  switch (transformHandleType) {
    case "n":
    case "s":
      cursor = "ns";
      break;
    case "w":
    case "e":
      cursor = "ew";
      break;
    case "nw":
    case "se":
      if (shouldSwapCursors) {
        cursor = "nesw";
      } else {
        cursor = "nwse";
      }
      break;
    case "ne":
    case "sw":
      if (shouldSwapCursors) {
        cursor = "nwse";
      } else {
        cursor = "nesw";
      }
      break;
    case "rotation":
      return "grab";
  }
  if (cursor && element) {
    cursor = rotateResizeCursor(cursor, element.angle);
  }
  return cursor ? `${cursor}-resize` : "";
};
var getSelectionBorders = ([x1, y1], [x2, y2], center, angle) => {
  const topLeft = pointRotateRads(pointFrom(x1, y1), center, angle);
  const topRight = pointRotateRads(pointFrom(x2, y1), center, angle);
  const bottomLeft = pointRotateRads(pointFrom(x1, y2), center, angle);
  const bottomRight = pointRotateRads(pointFrom(x2, y2), center, angle);
  return {
    n: [topLeft, topRight],
    e: [topRight, bottomRight],
    s: [bottomRight, bottomLeft],
    w: [bottomLeft, topLeft]
  };
};

// element/resizeElements.ts
init_define_import_meta_env();
var transformElements = (originalElements, transformHandleType, selectedElements, elementsMap, shouldRotateWithDiscreteAngle2, shouldResizeFromCenter2, shouldMaintainAspectRatio2, pointerX, pointerY, centerX, centerY) => {
  if (selectedElements.length === 1) {
    const [element] = selectedElements;
    if (transformHandleType === "rotation") {
      if (!isElbowArrow(element)) {
        rotateSingleElement(
          element,
          elementsMap,
          pointerX,
          pointerY,
          shouldRotateWithDiscreteAngle2
        );
        updateBoundElements(element, elementsMap);
      }
    } else if (isTextElement(element) && transformHandleType) {
      resizeSingleTextElement(
        originalElements,
        element,
        elementsMap,
        transformHandleType,
        shouldResizeFromCenter2,
        pointerX,
        pointerY
      );
      updateBoundElements(element, elementsMap);
    } else if (transformHandleType) {
      resizeSingleElement(
        originalElements,
        shouldMaintainAspectRatio2,
        element,
        elementsMap,
        transformHandleType,
        shouldResizeFromCenter2,
        pointerX,
        pointerY
      );
    }
    return true;
  } else if (selectedElements.length > 1) {
    if (transformHandleType === "rotation") {
      rotateMultipleElements(
        originalElements,
        selectedElements,
        elementsMap,
        pointerX,
        pointerY,
        shouldRotateWithDiscreteAngle2,
        centerX,
        centerY
      );
      return true;
    } else if (transformHandleType) {
      resizeMultipleElements(
        originalElements,
        selectedElements,
        elementsMap,
        transformHandleType,
        shouldResizeFromCenter2,
        shouldMaintainAspectRatio2,
        pointerX,
        pointerY
      );
      return true;
    }
  }
  return false;
};
var rotateSingleElement = (element, elementsMap, pointerX, pointerY, shouldRotateWithDiscreteAngle2) => {
  const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  let angle;
  if (isFrameLikeElement(element)) {
    angle = 0;
  } else {
    angle = 5 * Math.PI / 2 + Math.atan2(pointerY - cy, pointerX - cx);
    if (shouldRotateWithDiscreteAngle2) {
      angle = angle + SHIFT_LOCKING_ANGLE / 2;
      angle = angle - angle % SHIFT_LOCKING_ANGLE;
    }
    angle = normalizeRadians(angle);
  }
  const boundTextElementId = getBoundTextElementId(element);
  mutateElement(element, { angle });
  if (boundTextElementId) {
    const textElement = Scene_default.getScene(element)?.getElement(
      boundTextElementId
    );
    if (textElement && !isArrowElement(element)) {
      mutateElement(textElement, { angle });
    }
  }
};
var rescalePointsInElement = (element, width, height, normalizePoints) => isLinearElement(element) || isFreeDrawElement(element) ? {
  points: rescalePoints(
    0,
    width,
    rescalePoints(1, height, element.points, normalizePoints),
    normalizePoints
  )
} : {};
var measureFontSizeFromWidth = (element, elementsMap, nextWidth) => {
  let width = element.width;
  const hasContainer = isBoundToContainer(element);
  if (hasContainer) {
    const container = getContainerElement(element, elementsMap);
    if (container) {
      width = getBoundTextMaxWidth(container, element);
    }
  }
  const nextFontSize = element.fontSize * (nextWidth / width);
  if (nextFontSize < MIN_FONT_SIZE) {
    return null;
  }
  return {
    size: nextFontSize
  };
};
var resizeSingleTextElement = (originalElements, element, elementsMap, transformHandleType, shouldResizeFromCenter2, pointerX, pointerY) => {
  const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(
    element,
    elementsMap
  );
  const [rotatedX, rotatedY] = pointRotateRads(
    pointFrom(pointerX, pointerY),
    pointFrom(cx, cy),
    -element.angle
  );
  let scaleX = 0;
  let scaleY = 0;
  if (transformHandleType !== "e" && transformHandleType !== "w") {
    if (transformHandleType.includes("e")) {
      scaleX = (rotatedX - x1) / (x2 - x1);
    }
    if (transformHandleType.includes("w")) {
      scaleX = (x2 - rotatedX) / (x2 - x1);
    }
    if (transformHandleType.includes("n")) {
      scaleY = (y2 - rotatedY) / (y2 - y1);
    }
    if (transformHandleType.includes("s")) {
      scaleY = (rotatedY - y1) / (y2 - y1);
    }
  }
  const scale = Math.max(scaleX, scaleY);
  if (scale > 0) {
    const nextWidth = element.width * scale;
    const nextHeight = element.height * scale;
    const metrics = measureFontSizeFromWidth(element, elementsMap, nextWidth);
    if (metrics === null) {
      return;
    }
    const startTopLeft = [x1, y1];
    const startBottomRight = [x2, y2];
    const startCenter = [cx, cy];
    let newTopLeft = pointFrom(x1, y1);
    if (["n", "w", "nw"].includes(transformHandleType)) {
      newTopLeft = pointFrom(
        startBottomRight[0] - Math.abs(nextWidth),
        startBottomRight[1] - Math.abs(nextHeight)
      );
    }
    if (transformHandleType === "ne") {
      const bottomLeft = [startTopLeft[0], startBottomRight[1]];
      newTopLeft = pointFrom(
        bottomLeft[0],
        bottomLeft[1] - Math.abs(nextHeight)
      );
    }
    if (transformHandleType === "sw") {
      const topRight = [startBottomRight[0], startTopLeft[1]];
      newTopLeft = pointFrom(
        topRight[0] - Math.abs(nextWidth),
        topRight[1]
      );
    }
    if (["s", "n"].includes(transformHandleType)) {
      newTopLeft[0] = startCenter[0] - nextWidth / 2;
    }
    if (["e", "w"].includes(transformHandleType)) {
      newTopLeft[1] = startCenter[1] - nextHeight / 2;
    }
    if (shouldResizeFromCenter2) {
      newTopLeft[0] = startCenter[0] - Math.abs(nextWidth) / 2;
      newTopLeft[1] = startCenter[1] - Math.abs(nextHeight) / 2;
    }
    const angle = element.angle;
    const rotatedTopLeft = pointRotateRads(
      newTopLeft,
      pointFrom(cx, cy),
      angle
    );
    const newCenter = pointFrom(
      newTopLeft[0] + Math.abs(nextWidth) / 2,
      newTopLeft[1] + Math.abs(nextHeight) / 2
    );
    const rotatedNewCenter = pointRotateRads(
      newCenter,
      pointFrom(cx, cy),
      angle
    );
    newTopLeft = pointRotateRads(
      rotatedTopLeft,
      rotatedNewCenter,
      -angle
    );
    const [nextX, nextY] = newTopLeft;
    mutateElement(element, {
      fontSize: metrics.size,
      width: nextWidth,
      height: nextHeight,
      x: nextX,
      y: nextY
    });
  }
  if (transformHandleType === "e" || transformHandleType === "w") {
    const stateAtResizeStart = originalElements.get(element.id);
    const [x12, y12, x22, y22] = getResizedElementAbsoluteCoords(
      stateAtResizeStart,
      stateAtResizeStart.width,
      stateAtResizeStart.height,
      true
    );
    const startTopLeft = pointFrom(x12, y12);
    const startBottomRight = pointFrom(x22, y22);
    const startCenter = pointCenter(startTopLeft, startBottomRight);
    const rotatedPointer = pointRotateRads(
      pointFrom(pointerX, pointerY),
      startCenter,
      -stateAtResizeStart.angle
    );
    const [esx1, , esx2] = getResizedElementAbsoluteCoords(
      element,
      element.width,
      element.height,
      true
    );
    const boundsCurrentWidth = esx2 - esx1;
    const atStartBoundsWidth = startBottomRight[0] - startTopLeft[0];
    const minWidth = getMinTextElementWidth(
      getFontString({
        fontSize: element.fontSize,
        fontFamily: element.fontFamily
      }),
      element.lineHeight
    );
    let scaleX2 = atStartBoundsWidth / boundsCurrentWidth;
    if (transformHandleType.includes("e")) {
      scaleX2 = (rotatedPointer[0] - startTopLeft[0]) / boundsCurrentWidth;
    }
    if (transformHandleType.includes("w")) {
      scaleX2 = (startBottomRight[0] - rotatedPointer[0]) / boundsCurrentWidth;
    }
    const newWidth = element.width * scaleX2 < minWidth ? minWidth : element.width * scaleX2;
    const text = wrapText(
      element.originalText,
      getFontString(element),
      Math.abs(newWidth)
    );
    const metrics = measureText(
      text,
      getFontString(element),
      element.lineHeight
    );
    const eleNewHeight = metrics.height;
    const [newBoundsX1, newBoundsY1, newBoundsX2, newBoundsY2] = getResizedElementAbsoluteCoords(
      stateAtResizeStart,
      newWidth,
      eleNewHeight,
      true
    );
    const newBoundsWidth = newBoundsX2 - newBoundsX1;
    const newBoundsHeight = newBoundsY2 - newBoundsY1;
    let newTopLeft = [...startTopLeft];
    if (["n", "w", "nw"].includes(transformHandleType)) {
      newTopLeft = [
        startBottomRight[0] - Math.abs(newBoundsWidth),
        startTopLeft[1]
      ];
    }
    const angle = stateAtResizeStart.angle;
    const rotatedTopLeft = pointRotateRads(
      pointFromPair(newTopLeft),
      startCenter,
      angle
    );
    const newCenter = pointFrom(
      newTopLeft[0] + Math.abs(newBoundsWidth) / 2,
      newTopLeft[1] + Math.abs(newBoundsHeight) / 2
    );
    const rotatedNewCenter = pointRotateRads(newCenter, startCenter, angle);
    newTopLeft = pointRotateRads(
      rotatedTopLeft,
      rotatedNewCenter,
      -angle
    );
    const resizedElement = {
      width: Math.abs(newWidth),
      height: Math.abs(metrics.height),
      x: newTopLeft[0],
      y: newTopLeft[1],
      text,
      autoResize: false
    };
    mutateElement(element, resizedElement);
  }
};
var resizeSingleElement = (originalElements, shouldMaintainAspectRatio2, element, elementsMap, transformHandleDirection, shouldResizeFromCenter2, pointerX, pointerY) => {
  const stateAtResizeStart = originalElements.get(element.id);
  const [x1, y1, x2, y2] = getResizedElementAbsoluteCoords(
    stateAtResizeStart,
    stateAtResizeStart.width,
    stateAtResizeStart.height,
    true
  );
  const startTopLeft = pointFrom(x1, y1);
  const startBottomRight = pointFrom(x2, y2);
  const startCenter = pointCenter(startTopLeft, startBottomRight);
  const rotatedPointer = pointRotateRads(
    pointFrom(pointerX, pointerY),
    startCenter,
    -stateAtResizeStart.angle
  );
  const [esx1, esy1, esx2, esy2] = getResizedElementAbsoluteCoords(
    element,
    element.width,
    element.height,
    true
  );
  const boundsCurrentWidth = esx2 - esx1;
  const boundsCurrentHeight = esy2 - esy1;
  const atStartBoundsWidth = startBottomRight[0] - startTopLeft[0];
  const atStartBoundsHeight = startBottomRight[1] - startTopLeft[1];
  let scaleX = atStartBoundsWidth / boundsCurrentWidth;
  let scaleY = atStartBoundsHeight / boundsCurrentHeight;
  let boundTextFont = {};
  const boundTextElement = getBoundTextElement(element, elementsMap);
  if (transformHandleDirection.includes("e")) {
    scaleX = (rotatedPointer[0] - startTopLeft[0]) / boundsCurrentWidth;
  }
  if (transformHandleDirection.includes("s")) {
    scaleY = (rotatedPointer[1] - startTopLeft[1]) / boundsCurrentHeight;
  }
  if (transformHandleDirection.includes("w")) {
    scaleX = (startBottomRight[0] - rotatedPointer[0]) / boundsCurrentWidth;
  }
  if (transformHandleDirection.includes("n")) {
    scaleY = (startBottomRight[1] - rotatedPointer[1]) / boundsCurrentHeight;
  }
  const eleInitialWidth = stateAtResizeStart.width;
  const eleInitialHeight = stateAtResizeStart.height;
  let eleNewWidth = element.width * scaleX;
  let eleNewHeight = element.height * scaleY;
  if (shouldResizeFromCenter2) {
    eleNewWidth = 2 * eleNewWidth - eleInitialWidth;
    eleNewHeight = 2 * eleNewHeight - eleInitialHeight;
  }
  if (shouldMaintainAspectRatio2) {
    const widthRatio = Math.abs(eleNewWidth) / eleInitialWidth;
    const heightRatio = Math.abs(eleNewHeight) / eleInitialHeight;
    if (transformHandleDirection.length === 1) {
      eleNewHeight *= widthRatio;
      eleNewWidth *= heightRatio;
    }
    if (transformHandleDirection.length === 2) {
      const ratio = Math.max(widthRatio, heightRatio);
      eleNewWidth = eleInitialWidth * ratio * Math.sign(eleNewWidth);
      eleNewHeight = eleInitialHeight * ratio * Math.sign(eleNewHeight);
    }
  }
  if (boundTextElement) {
    const stateOfBoundTextElementAtResize = originalElements.get(
      boundTextElement.id
    );
    if (stateOfBoundTextElementAtResize) {
      boundTextFont = {
        fontSize: stateOfBoundTextElementAtResize.fontSize
      };
    }
    if (shouldMaintainAspectRatio2) {
      const updatedElement = {
        ...element,
        width: eleNewWidth,
        height: eleNewHeight
      };
      const nextFont = measureFontSizeFromWidth(
        boundTextElement,
        elementsMap,
        getBoundTextMaxWidth(updatedElement, boundTextElement)
      );
      if (nextFont === null) {
        return;
      }
      boundTextFont = {
        fontSize: nextFont.size
      };
    } else {
      const minWidth = getApproxMinLineWidth(
        getFontString(boundTextElement),
        boundTextElement.lineHeight
      );
      const minHeight = getApproxMinLineHeight(
        boundTextElement.fontSize,
        boundTextElement.lineHeight
      );
      eleNewWidth = Math.max(eleNewWidth, minWidth);
      eleNewHeight = Math.max(eleNewHeight, minHeight);
    }
  }
  const [newBoundsX1, newBoundsY1, newBoundsX2, newBoundsY2] = getResizedElementAbsoluteCoords(
    stateAtResizeStart,
    eleNewWidth,
    eleNewHeight,
    true
  );
  const newBoundsWidth = newBoundsX2 - newBoundsX1;
  const newBoundsHeight = newBoundsY2 - newBoundsY1;
  let newTopLeft = [...startTopLeft];
  if (["n", "w", "nw"].includes(transformHandleDirection)) {
    newTopLeft = [
      startBottomRight[0] - Math.abs(newBoundsWidth),
      startBottomRight[1] - Math.abs(newBoundsHeight)
    ];
  }
  if (transformHandleDirection === "ne") {
    const bottomLeft = [startTopLeft[0], startBottomRight[1]];
    newTopLeft = [bottomLeft[0], bottomLeft[1] - Math.abs(newBoundsHeight)];
  }
  if (transformHandleDirection === "sw") {
    const topRight = [startBottomRight[0], startTopLeft[1]];
    newTopLeft = [topRight[0] - Math.abs(newBoundsWidth), topRight[1]];
  }
  if (shouldMaintainAspectRatio2) {
    if (["s", "n"].includes(transformHandleDirection)) {
      newTopLeft[0] = startCenter[0] - newBoundsWidth / 2;
    }
    if (["e", "w"].includes(transformHandleDirection)) {
      newTopLeft[1] = startCenter[1] - newBoundsHeight / 2;
    }
  }
  const flipX = eleNewWidth < 0;
  const flipY = eleNewHeight < 0;
  if (flipX) {
    if (transformHandleDirection.includes("e")) {
      newTopLeft[0] -= Math.abs(newBoundsWidth);
    }
    if (transformHandleDirection.includes("w")) {
      newTopLeft[0] += Math.abs(newBoundsWidth);
    }
  }
  if (flipY) {
    if (transformHandleDirection.includes("s")) {
      newTopLeft[1] -= Math.abs(newBoundsHeight);
    }
    if (transformHandleDirection.includes("n")) {
      newTopLeft[1] += Math.abs(newBoundsHeight);
    }
  }
  if (shouldResizeFromCenter2) {
    newTopLeft[0] = startCenter[0] - Math.abs(newBoundsWidth) / 2;
    newTopLeft[1] = startCenter[1] - Math.abs(newBoundsHeight) / 2;
  }
  const angle = stateAtResizeStart.angle;
  const rotatedTopLeft = pointRotateRads(
    pointFromPair(newTopLeft),
    startCenter,
    angle
  );
  const newCenter = pointFrom(
    newTopLeft[0] + Math.abs(newBoundsWidth) / 2,
    newTopLeft[1] + Math.abs(newBoundsHeight) / 2
  );
  const rotatedNewCenter = pointRotateRads(newCenter, startCenter, angle);
  newTopLeft = pointRotateRads(
    rotatedTopLeft,
    rotatedNewCenter,
    -angle
  );
  const newOrigin = [...newTopLeft];
  const linearElementXOffset = stateAtResizeStart.x - newBoundsX1;
  const linearElementYOffset = stateAtResizeStart.y - newBoundsY1;
  newOrigin[0] += linearElementXOffset;
  newOrigin[1] += linearElementYOffset;
  const nextX = newOrigin[0];
  const nextY = newOrigin[1];
  let rescaledElementPointsY;
  let rescaledPoints;
  if (isLinearElement(element) || isFreeDrawElement(element)) {
    rescaledElementPointsY = rescalePoints(
      1,
      eleNewHeight,
      stateAtResizeStart.points,
      true
    );
    rescaledPoints = rescalePoints(
      0,
      eleNewWidth,
      rescaledElementPointsY,
      true
    );
  }
  const resizedElement = {
    width: Math.abs(eleNewWidth),
    height: Math.abs(eleNewHeight),
    x: nextX,
    y: nextY,
    points: rescaledPoints
  };
  if ("scale" in element && "scale" in stateAtResizeStart) {
    mutateElement(element, {
      scale: [
        // defaulting because scaleX/Y can be 0/-0
        (Math.sign(newBoundsX2 - stateAtResizeStart.x) || stateAtResizeStart.scale[0]) * stateAtResizeStart.scale[0],
        (Math.sign(newBoundsY2 - stateAtResizeStart.y) || stateAtResizeStart.scale[1]) * stateAtResizeStart.scale[1]
      ]
    });
  }
  if (isArrowElement(element) && boundTextElement && shouldMaintainAspectRatio2) {
    const fontSize = resizedElement.width / element.width * boundTextElement.fontSize;
    if (fontSize < MIN_FONT_SIZE) {
      return;
    }
    boundTextFont.fontSize = fontSize;
  }
  if (resizedElement.width !== 0 && resizedElement.height !== 0 && Number.isFinite(resizedElement.x) && Number.isFinite(resizedElement.y)) {
    mutateElement(element, resizedElement);
    updateBoundElements(element, elementsMap, {
      oldSize: {
        width: stateAtResizeStart.width,
        height: stateAtResizeStart.height
      }
    });
    if (boundTextElement && boundTextFont != null) {
      mutateElement(boundTextElement, {
        fontSize: boundTextFont.fontSize
      });
    }
    handleBindTextResize(
      element,
      elementsMap,
      transformHandleDirection,
      shouldMaintainAspectRatio2
    );
  }
};
var resizeMultipleElements = (originalElements, selectedElements, elementsMap, transformHandleType, shouldResizeFromCenter2, shouldMaintainAspectRatio2, pointerX, pointerY) => {
  const targetElements = selectedElements.reduce(
    (acc, element) => {
      const origElement = originalElements.get(element.id);
      if (origElement) {
        acc.push({ orig: origElement, latest: element });
      }
      return acc;
    },
    []
  );
  const boundTextElements = targetElements.reduce((acc, { orig }) => {
    if (!isLinearElement(orig)) {
      return acc;
    }
    const textId = getBoundTextElementId(orig);
    if (!textId) {
      return acc;
    }
    const text = originalElements.get(textId) ?? null;
    if (!isBoundToContainer(text)) {
      return acc;
    }
    const xy = LinearElementEditor.getBoundTextElementPosition(
      orig,
      text,
      elementsMap
    );
    return [...acc, { ...text, ...xy }];
  }, []);
  const { minX, minY, maxX, maxY, midX, midY } = getCommonBoundingBox(
    targetElements.map(({ orig }) => orig).concat(boundTextElements)
  );
  const width = maxX - minX;
  const height = maxY - minY;
  const direction = transformHandleType;
  const anchorsMap = {
    ne: pointFrom(minX, maxY),
    se: pointFrom(minX, minY),
    sw: pointFrom(maxX, minY),
    nw: pointFrom(maxX, maxY),
    e: pointFrom(minX, minY + height / 2),
    w: pointFrom(maxX, minY + height / 2),
    n: pointFrom(minX + width / 2, maxY),
    s: pointFrom(minX + width / 2, minY)
  };
  const [anchorX, anchorY] = shouldResizeFromCenter2 ? pointFrom(midX, midY) : anchorsMap[direction];
  const resizeFromCenterScale = shouldResizeFromCenter2 ? 2 : 1;
  const scale = Math.max(
    Math.abs(pointerX - anchorX) / width || 0,
    Math.abs(pointerY - anchorY) / height || 0
  ) * resizeFromCenterScale;
  if (scale === 0) {
    return;
  }
  let scaleX = direction.includes("e") || direction.includes("w") ? Math.abs(pointerX - anchorX) / width * resizeFromCenterScale : 1;
  let scaleY = direction.includes("n") || direction.includes("s") ? Math.abs(pointerY - anchorY) / height * resizeFromCenterScale : 1;
  const keepAspectRatio = shouldMaintainAspectRatio2 || targetElements.some(
    (item) => item.latest.angle !== 0 || isTextElement(item.latest) || isInGroup(item.latest)
  );
  if (keepAspectRatio) {
    scaleX = scale;
    scaleY = scale;
  }
  const flipConditionsMap = {
    ne: [pointerX < anchorX, pointerY > anchorY],
    se: [pointerX < anchorX, pointerY < anchorY],
    sw: [pointerX > anchorX, pointerY < anchorY],
    nw: [pointerX > anchorX, pointerY > anchorY],
    // e.g. when resizing from the "e" side, we do not need to consider changes in the `y` direction
    //      and therefore, we do not need to flip in the `y` direction at all
    e: [pointerX < anchorX, false],
    w: [pointerX > anchorX, false],
    n: [false, pointerY > anchorY],
    s: [false, pointerY < anchorY]
  };
  const [flipFactorX, flipFactorY] = flipConditionsMap[direction].map(
    (condition) => condition ? -1 : 1
  );
  const isFlippedByX = flipFactorX < 0;
  const isFlippedByY = flipFactorY < 0;
  const elementsAndUpdates = [];
  for (const { orig, latest } of targetElements) {
    if (isTextElement(orig) && isBoundToContainer(orig)) {
      continue;
    }
    const width2 = orig.width * scaleX;
    const height2 = orig.height * scaleY;
    const angle = normalizeRadians(
      orig.angle * flipFactorX * flipFactorY
    );
    const isLinearOrFreeDraw = isLinearElement(orig) || isFreeDrawElement(orig);
    const offsetX = orig.x - anchorX;
    const offsetY = orig.y - anchorY;
    const shiftX = isFlippedByX && !isLinearOrFreeDraw ? width2 : 0;
    const shiftY = isFlippedByY && !isLinearOrFreeDraw ? height2 : 0;
    const x = anchorX + flipFactorX * (offsetX * scaleX + shiftX);
    const y = anchorY + flipFactorY * (offsetY * scaleY + shiftY);
    const rescaledPoints = rescalePointsInElement(
      orig,
      width2 * flipFactorX,
      height2 * flipFactorY,
      false
    );
    const update = {
      x,
      y,
      width: width2,
      height: height2,
      angle,
      ...rescaledPoints
    };
    if (isImageElement(orig)) {
      update.scale = [orig.scale[0] * flipFactorX, orig.scale[1] * flipFactorY];
    }
    if (isTextElement(orig)) {
      const metrics = measureFontSizeFromWidth(orig, elementsMap, width2);
      if (!metrics) {
        return;
      }
      update.fontSize = metrics.size;
    }
    const boundTextElement = originalElements.get(
      getBoundTextElementId(orig) ?? ""
    );
    if (boundTextElement) {
      if (keepAspectRatio) {
        const newFontSize = boundTextElement.fontSize * scale;
        if (newFontSize < MIN_FONT_SIZE) {
          return;
        }
        update.boundTextFontSize = newFontSize;
      } else {
        update.boundTextFontSize = boundTextElement.fontSize;
      }
    }
    elementsAndUpdates.push({
      element: latest,
      update
    });
  }
  const elementsToUpdate = elementsAndUpdates.map(({ element }) => element);
  for (const {
    element,
    update: { boundTextFontSize, ...update }
  } of elementsAndUpdates) {
    const { angle } = update;
    const { width: oldWidth, height: oldHeight } = element;
    mutateElement(element, update, false);
    updateBoundElements(element, elementsMap, {
      simultaneouslyUpdated: elementsToUpdate,
      oldSize: { width: oldWidth, height: oldHeight }
    });
    const boundTextElement = getBoundTextElement(element, elementsMap);
    if (boundTextElement && boundTextFontSize) {
      mutateElement(
        boundTextElement,
        {
          fontSize: boundTextFontSize,
          angle: isLinearElement(element) ? void 0 : angle
        },
        false
      );
      handleBindTextResize(element, elementsMap, transformHandleType, true);
    }
  }
  Scene_default.getScene(elementsAndUpdates[0].element)?.triggerUpdate();
};
var rotateMultipleElements = (originalElements, elements, elementsMap, pointerX, pointerY, shouldRotateWithDiscreteAngle2, centerX, centerY) => {
  let centerAngle = 5 * Math.PI / 2 + Math.atan2(pointerY - centerY, pointerX - centerX);
  if (shouldRotateWithDiscreteAngle2) {
    centerAngle += SHIFT_LOCKING_ANGLE / 2;
    centerAngle -= centerAngle % SHIFT_LOCKING_ANGLE;
  }
  elements.filter((element) => !isFrameLikeElement(element)).forEach((element) => {
    const [x1, y1, x2, y2] = getElementAbsoluteCoords(element, elementsMap);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const origAngle = originalElements.get(element.id)?.angle ?? element.angle;
    const [rotatedCX, rotatedCY] = pointRotateRads(
      pointFrom(cx, cy),
      pointFrom(centerX, centerY),
      centerAngle + origAngle - element.angle
    );
    if (isElbowArrow(element)) {
      const points = getArrowLocalFixedPoints(element, elementsMap);
      mutateElbowArrow(element, elementsMap, points);
    } else {
      mutateElement(
        element,
        {
          x: element.x + (rotatedCX - cx),
          y: element.y + (rotatedCY - cy),
          angle: normalizeRadians(centerAngle + origAngle)
        },
        false
      );
    }
    updateBoundElements(element, elementsMap, {
      simultaneouslyUpdated: elements
    });
    const boundText = getBoundTextElement(element, elementsMap);
    if (boundText && !isArrowElement(element)) {
      mutateElement(
        boundText,
        {
          x: boundText.x + (rotatedCX - cx),
          y: boundText.y + (rotatedCY - cy),
          angle: normalizeRadians(centerAngle + origAngle)
        },
        false
      );
    }
  });
  Scene_default.getScene(elements[0])?.triggerUpdate();
};
var getResizeOffsetXY = (transformHandleType, selectedElements, elementsMap, x, y) => {
  const [x1, y1, x2, y2] = selectedElements.length === 1 ? getElementAbsoluteCoords(selectedElements[0], elementsMap) : getCommonBounds(selectedElements);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  const angle = selectedElements.length === 1 ? selectedElements[0].angle : 0;
  [x, y] = pointRotateRads(
    pointFrom(x, y),
    pointFrom(cx, cy),
    -angle
  );
  switch (transformHandleType) {
    case "n":
      return pointRotateRads(
        pointFrom(x - (x1 + x2) / 2, y - y1),
        pointFrom(0, 0),
        angle
      );
    case "s":
      return pointRotateRads(
        pointFrom(x - (x1 + x2) / 2, y - y2),
        pointFrom(0, 0),
        angle
      );
    case "w":
      return pointRotateRads(
        pointFrom(x - x1, y - (y1 + y2) / 2),
        pointFrom(0, 0),
        angle
      );
    case "e":
      return pointRotateRads(
        pointFrom(x - x2, y - (y1 + y2) / 2),
        pointFrom(0, 0),
        angle
      );
    case "nw":
      return pointRotateRads(pointFrom(x - x1, y - y1), pointFrom(0, 0), angle);
    case "ne":
      return pointRotateRads(pointFrom(x - x2, y - y1), pointFrom(0, 0), angle);
    case "sw":
      return pointRotateRads(pointFrom(x - x1, y - y2), pointFrom(0, 0), angle);
    case "se":
      return pointRotateRads(pointFrom(x - x2, y - y2), pointFrom(0, 0), angle);
    default:
      return [0, 0];
  }
};
var getResizeArrowDirection = (transformHandleType, element) => {
  const [, [px, py]] = element.points;
  const isResizeEnd = transformHandleType === "nw" && (px < 0 || py < 0) || transformHandleType === "ne" && px >= 0 || transformHandleType === "sw" && px <= 0 || transformHandleType === "se" && (px > 0 || py > 0);
  return isResizeEnd ? "end" : "origin";
};

// element/dragElements.ts
init_define_import_meta_env();
var dragSelectedElements = (pointerDownState, _selectedElements, offset2, scene, snapOffset, gridSize) => {
  if (_selectedElements.length === 1 && isElbowArrow(_selectedElements[0]) && (_selectedElements[0].startBinding || _selectedElements[0].endBinding)) {
    return;
  }
  const selectedElements = _selectedElements.filter(
    (el) => !(isElbowArrow(el) && el.startBinding && el.endBinding)
  );
  const elementsToUpdate = new Set(
    selectedElements
  );
  const frames = selectedElements.filter((e2) => isFrameLikeElement(e2)).map((f) => f.id);
  if (frames.length > 0) {
    for (const element of scene.getNonDeletedElements()) {
      if (element.frameId !== null && frames.includes(element.frameId)) {
        elementsToUpdate.add(element);
      }
    }
  }
  const commonBounds = getCommonBounds(
    Array.from(elementsToUpdate).map(
      (el) => pointerDownState.originalElements.get(el.id) ?? el
    )
  );
  const adjustedOffset = calculateOffset(
    commonBounds,
    offset2,
    snapOffset,
    gridSize
  );
  elementsToUpdate.forEach((element) => {
    updateElementCoords(pointerDownState, element, adjustedOffset);
    if (
      // skip arrow labels since we calculate its position during render
      !isArrowElement(element)
    ) {
      const textElement = getBoundTextElement(
        element,
        scene.getNonDeletedElementsMap()
      );
      if (textElement) {
        updateElementCoords(pointerDownState, textElement, adjustedOffset);
      }
    }
    updateBoundElements(element, scene.getElementsMapIncludingDeleted(), {
      simultaneouslyUpdated: Array.from(elementsToUpdate)
    });
  });
};
var calculateOffset = (commonBounds, dragOffset, snapOffset, gridSize) => {
  const [x, y] = commonBounds;
  let nextX = x + dragOffset.x + snapOffset.x;
  let nextY = y + dragOffset.y + snapOffset.y;
  if (snapOffset.x === 0 || snapOffset.y === 0) {
    const [nextGridX, nextGridY] = getGridPoint(
      x + dragOffset.x,
      y + dragOffset.y,
      gridSize
    );
    if (snapOffset.x === 0) {
      nextX = nextGridX;
    }
    if (snapOffset.y === 0) {
      nextY = nextGridY;
    }
  }
  return {
    x: nextX - x,
    y: nextY - y
  };
};
var updateElementCoords = (pointerDownState, element, dragOffset) => {
  const originalElement = pointerDownState.originalElements.get(element.id) ?? element;
  const nextX = originalElement.x + dragOffset.x;
  const nextY = originalElement.y + dragOffset.y;
  mutateElement(element, {
    x: nextX,
    y: nextY
  });
};
var getDragOffsetXY = (selectedElements, x, y) => {
  const [x1, y1] = getCommonBounds(selectedElements);
  return [x - x1, y - y1];
};
var dragNewElement = ({
  newElement: newElement2,
  elementType,
  originX,
  originY,
  x,
  y,
  width,
  height,
  shouldMaintainAspectRatio: shouldMaintainAspectRatio2,
  shouldResizeFromCenter: shouldResizeFromCenter2,
  zoom,
  widthAspectRatio = null,
  originOffset = null,
  informMutation = true
}) => {
  if (shouldMaintainAspectRatio2 && newElement2.type !== "selection") {
    if (widthAspectRatio) {
      height = width / widthAspectRatio;
    } else {
      if (Math.abs(y - originY) > Math.abs(x - originX)) {
        ({ width, height } = getPerfectElementSize(
          elementType,
          height,
          x < originX ? -width : width
        ));
      } else {
        ({ width, height } = getPerfectElementSize(
          elementType,
          width,
          y < originY ? -height : height
        ));
      }
      if (height < 0) {
        height = -height;
      }
    }
  }
  let newX = x < originX ? originX - width : originX;
  let newY = y < originY ? originY - height : originY;
  if (shouldResizeFromCenter2) {
    width += width;
    height += height;
    newX = originX - width / 2;
    newY = originY - height / 2;
  }
  let textAutoResize = null;
  if (isTextElement(newElement2)) {
    height = newElement2.height;
    const minWidth = getMinTextElementWidth(
      getFontString({
        fontSize: newElement2.fontSize,
        fontFamily: newElement2.fontFamily
      }),
      newElement2.lineHeight
    );
    width = Math.max(width, minWidth);
    if (Math.abs(x - originX) > TEXT_AUTOWRAP_THRESHOLD / zoom) {
      textAutoResize = {
        autoResize: false
      };
    }
    newY = originY;
    if (shouldResizeFromCenter2) {
      newX = originX - width / 2;
    }
  }
  if (width !== 0 && height !== 0) {
    mutateElement(
      newElement2,
      {
        x: newX + (originOffset?.x ?? 0),
        y: newY + (originOffset?.y ?? 0),
        width,
        height,
        ...textAutoResize
      },
      informMutation
    );
  }
};

// element/showSelectedShapeActions.ts
init_define_import_meta_env();
var showSelectedShapeActions = (appState, elements) => Boolean(
  !appState.viewModeEnabled && (appState.activeTool.type !== "custom" && (appState.editingTextElement || appState.activeTool.type !== "selection" && appState.activeTool.type !== "eraser" && appState.activeTool.type !== "hand" && appState.activeTool.type !== "laser") || getSelectedElements(elements, appState).length)
);

// element/index.ts
var getSceneVersion = (elements) => elements.reduce((acc, el) => acc + el.version, 0);
var hashElementsVersion = (elements) => {
  let hash = 5381;
  for (let i2 = 0; i2 < elements.length; i2++) {
    hash = (hash << 5) + hash + elements[i2].versionNonce;
  }
  return hash >>> 0;
};
var hashString = (s2) => {
  let hash = 5381;
  for (let i2 = 0; i2 < s2.length; i2++) {
    const char = s2.charCodeAt(i2);
    hash = (hash << 5) + hash + char;
  }
  return hash >>> 0;
};
var getVisibleElements = (elements) => elements.filter(
  (el) => !el.isDeleted && !isInvisiblySmallElement(el)
);
var getNonDeletedElements2 = (elements) => elements.filter((element) => !element.isDeleted);
var isNonDeletedElement = (element) => !element.isDeleted;
var _clearElements = (elements) => getNonDeletedElements2(elements).map(
  (element) => isLinearElementType(element.type) ? { ...element, lastCommittedPoint: null } : element
);
var clearElementsForDatabase = (elements) => _clearElements(elements);
var clearElementsForExport = (elements) => _clearElements(elements);

// data/blob.ts
var parseFileContents = async (blob) => {
  let contents;
  if (blob.type === MIME_TYPES.png) {
    try {
      return await (await import("./image-VQG6JJBF.js")).decodePngMetadata(blob);
    } catch (error) {
      if (error.message === "INVALID") {
        throw new ImageSceneDataError(
          "Image doesn't contain scene",
          "IMAGE_NOT_CONTAINS_SCENE_DATA"
        );
      } else {
        throw new ImageSceneDataError("Error: cannot restore image");
      }
    }
  } else {
    if ("text" in Blob) {
      contents = await blob.text();
    } else {
      contents = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsText(blob, "utf8");
        reader.onloadend = () => {
          if (reader.readyState === FileReader.DONE) {
            resolve(reader.result);
          }
        };
      });
    }
    if (blob.type === MIME_TYPES.svg) {
      try {
        return await (await import("./image-VQG6JJBF.js")).decodeSvgMetadata({
          svg: contents
        });
      } catch (error) {
        if (error.message === "INVALID") {
          throw new ImageSceneDataError(
            "Image doesn't contain scene",
            "IMAGE_NOT_CONTAINS_SCENE_DATA"
          );
        } else {
          throw new ImageSceneDataError("Error: cannot restore image");
        }
      }
    }
  }
  return contents;
};
var getFileHandleType = (handle) => {
  if (!handle) {
    return null;
  }
  return handle.name.match(/\.(json|excalidraw|png|svg)$/)?.[1] || null;
};
var isImageFileHandleType = (type) => {
  return type === "png" || type === "svg";
};
var isImageFileHandle = (handle) => {
  const type = getFileHandleType(handle);
  return type === "png" || type === "svg";
};
var isSupportedImageFile = (blob) => {
  const { type } = blob || {};
  return !!type && Object.values(IMAGE_MIME_TYPES).includes(type);
};
var loadSceneOrLibraryFromBlob = async (blob, localAppState, localElements, fileHandle) => {
  const contents = await parseFileContents(blob);
  let data;
  try {
    try {
      data = JSON.parse(contents);
    } catch (error) {
      if (isSupportedImageFile(blob)) {
        throw new ImageSceneDataError(
          "Image doesn't contain scene",
          "IMAGE_NOT_CONTAINS_SCENE_DATA"
        );
      }
      throw error;
    }
    if (isValidExcalidrawData(data)) {
      return {
        type: MIME_TYPES.excalidraw,
        data: restore(
          {
            elements: clearElementsForExport(data.elements || []),
            appState: {
              theme: localAppState?.theme,
              fileHandle: fileHandle || blob.handle || null,
              ...cleanAppStateForExport(data.appState || {}),
              ...localAppState ? calculateScrollCenter(data.elements || [], localAppState) : {}
            },
            files: data.files
          },
          localAppState,
          localElements,
          { repairBindings: true, refreshDimensions: false }
        )
      };
    } else if (isValidLibrary(data)) {
      return {
        type: MIME_TYPES.excalidrawlib,
        data
      };
    }
    throw new Error("Error: invalid file");
  } catch (error) {
    if (error instanceof ImageSceneDataError) {
      throw error;
    }
    throw new Error("Error: invalid file");
  }
};
var loadFromBlob = async (blob, localAppState, localElements, fileHandle) => {
  const ret = await loadSceneOrLibraryFromBlob(
    blob,
    localAppState,
    localElements,
    fileHandle
  );
  if (ret.type !== MIME_TYPES.excalidraw) {
    throw new Error("Error: invalid file");
  }
  return ret.data;
};
var parseLibraryJSON = (json, defaultStatus = "unpublished") => {
  const data = JSON.parse(json);
  if (!isValidLibrary(data)) {
    throw new Error("Invalid library");
  }
  const libraryItems = data.libraryItems || data.library;
  return restoreLibraryItems(libraryItems, defaultStatus);
};
var loadLibraryFromBlob = async (blob, defaultStatus = "unpublished") => {
  return parseLibraryJSON(await parseFileContents(blob), defaultStatus);
};
var canvasToBlob = async (canvas2) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (isPromiseLike(canvas2)) {
        canvas2 = await canvas2;
      }
      canvas2.toBlob((blob) => {
        if (!blob) {
          return reject(
            new CanvasError("Error: Canvas too big", "CANVAS_POSSIBLY_TOO_BIG")
          );
        }
        resolve(blob);
      });
    } catch (error) {
      reject(error);
    }
  });
};
var generateIdFromFile = async (file2) => {
  try {
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-1",
      await blobToArrayBuffer(file2)
    );
    return bytesToHexString(new Uint8Array(hashBuffer));
  } catch (error) {
    console.error(error);
    return nanoid(40);
  }
};
var getDataURL = async (file2) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      resolve(dataURL);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file2);
  });
};
var dataURLToFile = (dataURL, filename = "") => {
  const dataIndexStart = dataURL.indexOf(",");
  const byteString = atob(dataURL.slice(dataIndexStart + 1));
  const mimeType = dataURL.slice(0, dataIndexStart).split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i2 = 0; i2 < byteString.length; i2++) {
    ia[i2] = byteString.charCodeAt(i2);
  }
  return new File([ab], filename, { type: mimeType });
};
var resizeImageFile = async (file2, opts) => {
  if (file2.type === MIME_TYPES.svg) {
    return file2;
  }
  const [pica, imageBlobReduce] = await Promise.all([
    import("./pica-I5JPSWU2.js").then((res) => res.default),
    // a wrapper for pica for better API
    import("./image-blob-reduce.esm-S5U7V4TF.js").then((res) => res.default)
  ]);
  const reduce = imageBlobReduce({
    pica: pica({ features: ["js", "wasm"] })
  });
  if (opts.outputType) {
    const { outputType } = opts;
    reduce._create_blob = function(env) {
      return this.pica.toBlob(env.out_canvas, outputType, 0.8).then((blob) => {
        env.out_blob = blob;
        return env;
      });
    };
  }
  if (!isSupportedImageFile(file2)) {
    throw new Error("Error: unsupported file type", { cause: "UNSUPPORTED" });
  }
  return new File(
    [await reduce.toBlob(file2, { max: opts.maxWidthOrHeight })],
    file2.name,
    {
      type: opts.outputType || file2.type
    }
  );
};
var SVGStringToFile = (SVGString, filename = "") => {
  return new File([new TextEncoder().encode(SVGString)], filename, {
    type: MIME_TYPES.svg
  });
};
var ImageURLToFile = async (imageUrl, filename = "") => {
  let response;
  try {
    response = await fetch(imageUrl);
  } catch (error) {
    throw new Error("Error: failed to fetch image", { cause: "FETCH_ERROR" });
  }
  if (!response.ok) {
    throw new Error("Error: failed to fetch image", { cause: "FETCH_ERROR" });
  }
  const blob = await response.blob();
  if (blob.type && isSupportedImageFile(blob)) {
    const name = filename || blob.name || "";
    return new File([blob], name, { type: blob.type });
  }
  throw new Error("Error: unsupported file type", { cause: "UNSUPPORTED" });
};
var getFileFromEvent = async (event) => {
  const file2 = event.dataTransfer.files.item(0);
  const fileHandle = await getFileHandle(event);
  return { file: file2 ? await normalizeFile(file2) : null, fileHandle };
};
var getFileHandle = async (event) => {
  if (e) {
    try {
      const item = event.dataTransfer.items[0];
      const handle = await item.getAsFileSystemHandle() || null;
      return handle;
    } catch (error) {
      console.warn(error.name, error.message);
      return null;
    }
  }
  return null;
};
var getActualMimeTypeFromImage = (buffer) => {
  let mimeType = null;
  const first8Bytes = `${[...new Uint8Array(buffer).slice(0, 8)].join(" ")} `;
  const headerBytes = {
    // https://en.wikipedia.org/wiki/Portable_Network_Graphics#File_header
    png: "137 80 78 71 13 10 26 10 ",
    // https://en.wikipedia.org/wiki/JPEG#Syntax_and_structure
    // jpg is a bit wonky. Checking the first three bytes should be enough,
    // but may yield false positives. (https://stackoverflow.com/a/23360709/927631)
    jpg: "255 216 255 ",
    // https://en.wikipedia.org/wiki/GIF#Example_GIF_file
    gif: "71 73 70 56 57 97 "
  };
  if (first8Bytes === headerBytes.png) {
    mimeType = MIME_TYPES.png;
  } else if (first8Bytes.startsWith(headerBytes.jpg)) {
    mimeType = MIME_TYPES.jpg;
  } else if (first8Bytes.startsWith(headerBytes.gif)) {
    mimeType = MIME_TYPES.gif;
  }
  return mimeType;
};
var createFile = (blob, mimeType, name) => {
  return new File([blob], name || "", {
    type: mimeType
  });
};
var normalizeFile = async (file2) => {
  if (!file2.type) {
    if (file2?.name?.endsWith(".excalidrawlib")) {
      file2 = createFile(
        await blobToArrayBuffer(file2),
        MIME_TYPES.excalidrawlib,
        file2.name
      );
    } else if (file2?.name?.endsWith(".excalidraw")) {
      file2 = createFile(
        await blobToArrayBuffer(file2),
        MIME_TYPES.excalidraw,
        file2.name
      );
    } else {
      const buffer = await blobToArrayBuffer(file2);
      const mimeType = getActualMimeTypeFromImage(buffer);
      if (mimeType) {
        file2 = createFile(buffer, mimeType, file2.name);
      }
    }
  } else if (isSupportedImageFile(file2)) {
    const buffer = await blobToArrayBuffer(file2);
    const mimeType = getActualMimeTypeFromImage(buffer);
    if (mimeType && mimeType !== file2.type) {
      file2 = createFile(buffer, mimeType, file2.name);
    }
  }
  return file2;
};
var blobToArrayBuffer = (blob) => {
  if ("arrayBuffer" in blob) {
    return blob.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target?.result) {
        return reject(new Error("Couldn't convert blob to ArrayBuffer"));
      }
      resolve(event.target.result);
    };
    reader.readAsArrayBuffer(blob);
  });
};

// data/encode.ts
var toByteString = (data) => {
  return new Promise((resolve, reject) => {
    const blob = typeof data === "string" ? new Blob([new TextEncoder().encode(data)]) : new Blob([data instanceof Uint8Array ? data : new Uint8Array(data)]);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target || typeof event.target.result !== "string") {
        return reject(new Error("couldn't convert to byte string"));
      }
      resolve(event.target.result);
    };
    reader.readAsBinaryString(blob);
  });
};
var byteStringToArrayBuffer = (byteString) => {
  const buffer = new ArrayBuffer(byteString.length);
  const bufferView = new Uint8Array(buffer);
  for (let i2 = 0, len = byteString.length; i2 < len; i2++) {
    bufferView[i2] = byteString.charCodeAt(i2);
  }
  return buffer;
};
var byteStringToString = (byteString) => {
  return new TextDecoder("utf-8").decode(byteStringToArrayBuffer(byteString));
};
var stringToBase64 = async (str, isByteString = false) => {
  return isByteString ? window.btoa(str) : window.btoa(await toByteString(str));
};
var base64ToString = async (base64, isByteString = false) => {
  return isByteString ? window.atob(base64) : byteStringToString(window.atob(base64));
};
var base64ToArrayBuffer = (base64) => {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(base64, "base64").buffer;
  }
  return byteStringToArrayBuffer(atob(base64));
};
var encode = async ({
  text,
  compress
}) => {
  let deflated;
  if (compress !== false) {
    try {
      deflated = await toByteString((0, import_pako.deflate)(text));
    } catch (error) {
      console.error("encode: cannot deflate", error);
    }
  }
  return {
    version: "1",
    encoding: "bstring",
    compressed: !!deflated,
    encoded: deflated || await toByteString(text)
  };
};
var decode = async (data) => {
  let decoded;
  switch (data.encoding) {
    case "bstring":
      decoded = data.compressed ? data.encoded : await byteStringToString(data.encoded);
      break;
    default:
      throw new Error(`decode: unknown encoding "${data.encoding}"`);
  }
  if (data.compressed) {
    return (0, import_pako.inflate)(new Uint8Array(byteStringToArrayBuffer(decoded)), {
      to: "string"
    });
  }
  return decoded;
};

// data/image.ts
var getTEXtChunk = async (blob) => {
  const chunks = (0, import_png_chunks_extract.default)(new Uint8Array(await blobToArrayBuffer(blob)));
  const metadataChunk = chunks.find((chunk2) => chunk2.name === "tEXt");
  if (metadataChunk) {
    return import_png_chunk_text.default.decode(metadataChunk.data);
  }
  return null;
};
var encodePngMetadata = async ({
  blob,
  metadata
}) => {
  const chunks = (0, import_png_chunks_extract.default)(new Uint8Array(await blobToArrayBuffer(blob)));
  const metadataChunk = import_png_chunk_text.default.encode(
    MIME_TYPES.excalidraw,
    JSON.stringify(
      await encode({
        text: metadata,
        compress: true
      })
    )
  );
  chunks.splice(-1, 0, metadataChunk);
  return new Blob([(0, import_png_chunks_encode.default)(chunks)], { type: MIME_TYPES.png });
};
var decodePngMetadata = async (blob) => {
  const metadata = await getTEXtChunk(blob);
  if (metadata?.keyword === MIME_TYPES.excalidraw) {
    try {
      const encodedData = JSON.parse(metadata.text);
      if (!("encoded" in encodedData)) {
        if ("type" in encodedData && encodedData.type === EXPORT_DATA_TYPES.excalidraw) {
          return metadata.text;
        }
        throw new Error("FAILED");
      }
      return await decode(encodedData);
    } catch (error) {
      console.error(error);
      throw new Error("FAILED");
    }
  }
  throw new Error("INVALID");
};
var encodeSvgMetadata = async ({ text }) => {
  const base64 = await stringToBase64(
    JSON.stringify(await encode({ text })),
    true
  );
  let metadata = "";
  metadata += `<!-- payload-type:${MIME_TYPES.excalidraw} -->`;
  metadata += `<!-- payload-version:2 -->`;
  metadata += "<!-- payload-start -->";
  metadata += base64;
  metadata += "<!-- payload-end -->";
  return metadata;
};
var decodeSvgMetadata = async ({ svg }) => {
  if (svg.includes(`payload-type:${MIME_TYPES.excalidraw}`)) {
    const match = svg.match(
      /<!-- payload-start -->\s*(.+?)\s*<!-- payload-end -->/
    );
    if (!match) {
      throw new Error("INVALID");
    }
    const versionMatch = svg.match(/<!-- payload-version:(\d+) -->/);
    const version = versionMatch?.[1] || "1";
    const isByteString = version !== "1";
    try {
      const json = await base64ToString(match[1], isByteString);
      const encodedData = JSON.parse(json);
      if (!("encoded" in encodedData)) {
        if ("type" in encodedData && encodedData.type === EXPORT_DATA_TYPES.excalidraw) {
          return json;
        }
        throw new Error("FAILED");
      }
      return await decode(encodedData);
    } catch (error) {
      console.error(error);
      throw new Error("FAILED");
    }
  }
  throw new Error("INVALID");
};

export {
  require_react,
  require_jsx_runtime,
  clsx_m_default,
  open_color_default,
  MAX_CUSTOM_COLORS_USED_IN_CANVAS,
  COLORS_PER_ROW,
  DEFAULT_ELEMENT_STROKE_COLOR_INDEX,
  DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX,
  COLOR_PALETTE,
  DEFAULT_ELEMENT_STROKE_PICKS,
  DEFAULT_ELEMENT_BACKGROUND_PICKS,
  DEFAULT_CANVAS_BACKGROUND_PICKS,
  DEFAULT_ELEMENT_STROKE_COLOR_PALETTE,
  DEFAULT_ELEMENT_BACKGROUND_COLOR_PALETTE,
  rgbToHex,
  isDarwin,
  isWindows,
  isFirefox,
  isSafari,
  isIOS,
  isBrave,
  supportsResizeObserver,
  APP_NAME,
  DRAGGING_THRESHOLD,
  LINE_CONFIRM_THRESHOLD,
  ELEMENT_SHIFT_TRANSLATE_AMOUNT,
  ELEMENT_TRANSLATE_AMOUNT,
  TEXT_TO_CENTER_SNAP_THRESHOLD,
  DEFAULT_LASER_COLOR,
  CURSOR_TYPE,
  POINTER_BUTTON,
  POINTER_EVENTS,
  YOUTUBE_STATES,
  ENV,
  CLASSES,
  FONT_FAMILY,
  THEME,
  FRAME_STYLE,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_FAMILY,
  DEFAULT_TEXT_ALIGN,
  DEFAULT_VERTICAL_ALIGN,
  DEFAULT_TRANSFORM_HANDLE_SPACING,
  DEFAULT_COLLISION_THRESHOLD,
  COLOR_WHITE,
  COLOR_CHARCOAL_BLACK,
  COLOR_VOICE_CALL,
  DEFAULT_GRID_SIZE,
  IMAGE_MIME_TYPES,
  MIME_TYPES,
  EXPORT_IMAGE_TYPES,
  EXPORT_DATA_TYPES,
  EXPORT_SOURCE,
  IMAGE_RENDER_TIMEOUT,
  TAP_TWICE_TIMEOUT,
  TOUCH_CTX_MENU_TIMEOUT,
  SCROLL_TIMEOUT,
  ZOOM_STEP,
  MIN_ZOOM,
  MAX_ZOOM,
  HYPERLINK_TOOLTIP_DELAY,
  THEME_FILTER,
  URL_QUERY_KEYS,
  URL_HASH_KEYS,
  DEFAULT_UI_OPTIONS,
  MQ_MAX_WIDTH_PORTRAIT,
  MQ_MAX_WIDTH_LANDSCAPE,
  MQ_MAX_HEIGHT_LANDSCAPE,
  MQ_RIGHT_SIDEBAR_MIN_WIDTH,
  LIBRARY_SIDEBAR_WIDTH,
  EXPORT_SCALES,
  DEFAULT_EXPORT_PADDING,
  DEFAULT_MAX_IMAGE_WIDTH_OR_HEIGHT,
  MAX_ALLOWED_FILE_BYTES,
  SVG_NS,
  VERSIONS,
  BOUND_TEXT_PADDING,
  VERTICAL_ALIGN,
  TEXT_ALIGN,
  ROUNDNESS,
  STROKE_WIDTH,
  LIBRARY_SIDEBAR_TAB,
  CANVAS_SEARCH_TAB,
  DEFAULT_SIDEBAR,
  LIBRARY_DISABLED_TYPES,
  TOOL_TYPE,
  EDITOR_LS_KEYS,
  DEFAULT_FILENAME,
  STATS_PANELS,
  MIN_WIDTH_OR_HEIGHT,
  ARROW_TYPE,
  rough_default,
  nanoid,
  require_lodash,
  clamp,
  round,
  roundToStep,
  isFiniteNumber,
  degreesToRadians,
  radiansToDegrees,
  vector,
  pointFrom,
  pointRotateRads,
  pointDistance,
  getDateTime,
  capitalizeString,
  isToolIcon,
  isInputLike,
  isInteractive,
  isWritableElement,
  getFontFamilyString,
  getFontString,
  debounce,
  throttleRAF,
  easeOut,
  easeToValuesRAF,
  chunk,
  distance,
  updateActiveTool,
  getShortcutKey,
  viewportCoordsToSceneCoords,
  sceneCoordsToViewportCoords,
  getGlobalCSSVariable,
  tupleToCoors,
  muteFSAbortError,
  findIndex,
  findLastIndex,
  isTransparent,
  resolvablePromise,
  getNearestScrollableContainer,
  focusNearestParent,
  preventUnload,
  arrayToMap,
  arrayToMapWithIndex,
  arrayToList,
  isTestEnv,
  isDevEnv,
  wrapEvent,
  updateObject,
  getFrame,
  isPromiseLike,
  queryFocusableElements,
  isShallowEqual,
  composeEventHandlers,
  assertNever,
  invariant,
  memoize,
  isMemberOf,
  cloneJSON,
  updateStable,
  addEventListener,
  getSvgPathFromStroke,
  normalizeEOL,
  toBrandedType,
  promiseTry,
  isInitializedImageElement,
  isImageElement,
  isEmbeddableElement,
  isIframeElement,
  isIframeLikeElement,
  isTextElement,
  isFrameElement,
  isMagicFrameElement,
  isFrameLikeElement,
  isLinearElement,
  isArrowElement,
  isElbowArrow,
  isLinearElementType,
  isBindingElement,
  isBindingElementType,
  isBindableElement,
  isTextBindableContainer,
  isExcalidrawElement,
  isFlowchartNodeElement,
  hasBoundTextElement,
  isBoundToContainer,
  isUsingAdaptiveRadius,
  canApplyRoundnessTypeToElement,
  getDefaultRoundnessTypeForElement,
  randomInteger,
  randomId,
  AbortError,
  ImageSceneDataError,
  getDefaultAppState,
  isEraserActive,
  isHandToolActive,
  selectGroup,
  selectGroupsForSelectedElements,
  isSelectedViaGroup,
  getSelectedGroupForElement,
  getSelectedGroupIds,
  selectGroupsFromGivenElements,
  editGroupForSelectedElement,
  isElementInGroup,
  getElementsInGroup,
  getSelectedGroupIdForElement,
  addToGroup,
  removeFromSelectedGroups,
  getMaximumGroups,
  elementsAreInSameGroup,
  isInGroup,
  normalizeLink,
  isLocalLink,
  toValidURL,
  actions,
  register2 as register,
  resetCursor,
  setCursor,
  setEraserCursor,
  setCursorForShape,
  ShapeCache,
  LibraryIcon,
  PlusIcon,
  DotsIcon,
  PinIcon,
  UnlockedIcon,
  LockedIcon,
  WelcomeScreenMenuArrow,
  WelcomeScreenHelpArrow,
  WelcomeScreenTopToolbarArrow,
  PenModeIcon,
  FreedrawIcon,
  TextIcon,
  ZoomInIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  TrashIcon,
  EmbedIcon,
  DuplicateIcon,
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  ExportIcon,
  HelpIcon,
  HelpIconThin,
  checkIcon,
  LinkIcon,
  save,
  saveAs,
  LoadIcon,
  palette,
  bucketFillIcon,
  ExportImageIcon,
  exportToFileIcon,
  done,
  UndoIcon,
  RedoIcon,
  questionCircle,
  share,
  BringForwardIcon,
  SendBackwardIcon,
  BringToFrontIcon,
  SendToBackIcon,
  AlignTopIcon,
  AlignBottomIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DistributeHorizontallyIcon,
  DistributeVerticallyIcon,
  CenterVerticallyIcon,
  CenterHorizontallyIcon,
  usersIcon,
  CloseIcon,
  GroupIcon,
  UngroupIcon,
  FillZigZagIcon,
  FillHachureIcon,
  FillCrossHatchIcon,
  FillSolidIcon,
  StrokeWidthBaseIcon,
  StrokeWidthBoldIcon,
  StrokeWidthExtraBoldIcon,
  StrokeStyleDashedIcon,
  StrokeStyleDottedIcon,
  SloppinessArchitectIcon,
  SloppinessArtistIcon,
  SloppinessCartoonistIcon,
  EdgeSharpIcon,
  EdgeRoundIcon,
  ArrowheadNoneIcon,
  ArrowheadArrowIcon,
  ArrowheadCircleIcon,
  ArrowheadCircleOutlineIcon,
  ArrowheadBarIcon,
  ArrowheadTriangleIcon,
  ArrowheadTriangleOutlineIcon,
  ArrowheadDiamondIcon,
  ArrowheadDiamondOutlineIcon,
  FontSizeSmallIcon,
  FontSizeMediumIcon,
  FontSizeLargeIcon,
  FontSizeExtraLargeIcon,
  fontSizeIcon,
  FontFamilyNormalIcon,
  FontFamilyCodeIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  TextAlignTopIcon,
  TextAlignBottomIcon,
  TextAlignMiddleIcon,
  angleIcon,
  publishIcon,
  handIcon,
  downloadIcon,
  copyIcon,
  cutIcon,
  helpIcon,
  tablerCheckIcon,
  alertTriangleIcon,
  eyeDropperIcon,
  extraToolsIcon,
  frameToolIcon,
  mermaidLogoIcon,
  ArrowRightIcon,
  laserPointerToolIcon,
  MagicIcon,
  fullscreenIcon,
  eyeIcon,
  eyeClosedIcon,
  brainIcon,
  brainIconThin,
  searchIcon,
  clockIcon,
  microphoneIcon,
  microphoneMutedIcon,
  boltIcon,
  selectAllIcon,
  abacusIcon,
  flipVertical,
  flipHorizontal,
  paintIcon,
  zoomAreaIcon,
  svgIcon,
  pngIcon,
  magnetIcon,
  coffeeIcon,
  DeviceDesktopIcon,
  gridIcon,
  lineEditorIcon,
  sharpArrowIcon,
  elbowArrowIcon,
  roundArrowIcon,
  collapseDownIcon,
  collapseUpIcon,
  upIcon,
  e,
  fileOpen,
  fileSave,
  serializeAsJSON,
  saveAsJSON,
  loadFromJSON,
  serializeLibraryAsJSON,
  saveLibraryAsJSON,
  getSizeFromPoints,
  getSelectionBoxShape,
  isPointInShape,
  CODES,
  KEYS,
  isArrowKey,
  shouldResizeFromCenter,
  shouldMaintainAspectRatio,
  shouldRotateWithDiscreteAngle,
  hitElementItself,
  hitElementBoundingBox,
  hitElementBoundingBoxOnly,
  hitElementBoundText,
  SHAPES,
  findShapeByKey,
  getElementShape,
  getBoundTextShape,
  aabbForElement,
  getCornerRadius,
  isPathALoop,
  HEADING_RIGHT,
  HEADING_DOWN,
  HEADING_LEFT,
  HEADING_UP,
  compareHeading,
  headingForPointFromElement,
  shouldEnableBindingForPointerEvent,
  isBindingEnabled,
  bindOrUnbindLinearElement,
  bindOrUnbindLinearElements,
  getSuggestedBindingsForArrows,
  maybeBindLinearElement,
  bindLinearElement,
  isLinearElementSimpleAndAlreadyBound,
  getHoveredElementForBinding,
  updateBoundElements,
  bindPointToSnapToElementOutline,
  calculateFixedPointForElbowArrowBinding,
  fixBindingsAfterDuplication,
  fixBindingsAfterDeletion,
  maxBindingGap,
  restoreElements,
  restoreAppState,
  restore,
  restoreLibraryItems,
  getTEXtChunk,
  encodePngMetadata,
  decodePngMetadata,
  encodeSvgMetadata,
  decodeSvgMetadata,
  getFileHandleType,
  isImageFileHandleType,
  isImageFileHandle,
  isSupportedImageFile,
  loadSceneOrLibraryFromBlob,
  loadFromBlob,
  parseLibraryJSON,
  loadLibraryFromBlob,
  canvasToBlob,
  generateIdFromFile,
  getDataURL,
  dataURLToFile,
  resizeImageFile,
  SVGStringToFile,
  ImageURLToFile,
  getFileFromEvent,
  normalizeFile,
  Fonts,
  getLineHeight,
  newElement,
  newEmbeddableElement,
  newIframeElement,
  newFrameElement,
  newMagicFrameElement,
  newTextElement,
  refreshTextDimensions,
  newFreeDrawElement,
  newLinearElement,
  newArrowElement,
  newImageElement,
  deepCopyElement,
  duplicateElement,
  duplicateElements,
  Emitter,
  StoreAction,
  Store,
  createSrcDoc,
  getEmbedLink,
  maybeParseEmbedSrc,
  embeddableURLValidator,
  loadHTMLImageElement,
  updateImageCache,
  getInitializedImageElements,
  normalizeSVG,
  getLinkHandleFromCoords,
  isPointHittingLinkIcon,
  isPointHittingLink,
  fillCircle,
  getNormalizedCanvasDimensions,
  bootstrapCanvas,
  renderStaticSceneThrottled,
  renderStaticScene,
  exportToCanvas,
  exportToSvg,
  getExportSize,
  renderSpreadsheet,
  probablySupportsClipboardWriteText,
  probablySupportsClipboardBlob,
  createPasteEvent,
  copyToClipboard,
  readSystemClipboard,
  parseClipboard,
  copyBlobToClipboardAsPng,
  copyTextToSystemClipboard,
  exportToCanvas2,
  exportToBlob,
  exportToSvg2,
  exportToClipboard,
  isElementInsideBBox,
  elementPartiallyOverlapsWithOrContainsBBox,
  elementsOverlappingBBox,
  bindElementsToFramesAfterDuplication,
  elementsAreInFrameBounds,
  elementOverlapsWithFrame,
  isCursorInFrame,
  groupByFrameLikes,
  getFrameChildren,
  getFrameLikeElements,
  getElementsInResizingFrame,
  getElementsInNewFrame,
  getContainingFrame,
  filterElementsEligibleAsFrameChildren,
  addElementsToFrame,
  removeElementsFromFrame,
  removeAllElementsFromFrame,
  replaceAllElementsInFrame,
  updateFrameMembershipOfSelectedElements,
  isElementInFrame,
  getFrameLikeTitle,
  getElementsOverlappingFrame,
  getRenderOpacity,
  renderSelectionElement,
  renderElement,
  getFreeDrawSvgPath,
  hasBackground,
  hasStrokeColor,
  hasStrokeWidth,
  hasStrokeStyle,
  canChangeRoundness,
  toolIsArrow,
  canHaveArrowheads,
  getElementAbsoluteCoords,
  getCommonBounds,
  getCommonBoundingBox,
  getVisibleSceneBounds,
  mutateElbowArrow,
  updateElbowArrow,
  SnapCache,
  isGridModeEnabled,
  isSnappingEnabled,
  getVisibleGaps,
  getReferenceSnapPoints,
  snapDraggedElements,
  snapResizingElements,
  snapNewElement,
  getSnapLinesAtPointer,
  isActiveToolNonLinearSnappable,
  getGridPoint,
  LinearElementEditor,
  originalContainerCache,
  updateOriginalContainerCache,
  resetOriginalContainerCache,
  getOriginalContainerHeightFromCache,
  normalizeText,
  redrawTextBoundingBox,
  bindTextToShapeAfterDuplication,
  handleBindTextResize,
  computeBoundTextPosition,
  measureText,
  getLineHeightInPx,
  getApproxMinLineHeight,
  getTextWidth,
  wrapText,
  getApproxMinLineWidth,
  getBoundTextElementId,
  getBoundTextElement,
  getContainerElement,
  getContainerCenter,
  getTextElementAngle,
  shouldAllowVerticalAlign,
  suppportsHorizontalAlign,
  isValidTextContainer,
  computeContainerDimensionForBoundText,
  getBoundTextMaxWidth,
  getBoundTextMaxHeight,
  isMeasureTextSupported,
  getMinTextElementWidth,
  getTextFromElements,
  validateFractionalIndices,
  orderByFractionalIndex,
  syncMovedIndices,
  syncInvalidIndices,
  Scene_default,
  mutateElement,
  newElementWith,
  bumpVersion,
  isInvisiblySmallElement,
  isElementInViewport,
  isElementCompletelyInViewport,
  getLockedLinearCursorAlignSize,
  getNormalizedDimensions,
  getOmitSidesForDevice,
  getTransformHandlesFromCoords,
  getTransformHandles,
  shouldShowBoundingBox,
  getElementWithTransformHandleType,
  getTransformHandleTypeFromCoords,
  getCursorForResizingElement,
  transformElements,
  rescalePointsInElement,
  measureFontSizeFromWidth,
  resizeMultipleElements,
  getResizeOffsetXY,
  getResizeArrowDirection,
  dragSelectedElements,
  getDragOffsetXY,
  dragNewElement,
  showSelectedShapeActions,
  getSceneVersion,
  hashElementsVersion,
  hashString,
  getNonDeletedElements2 as getNonDeletedElements,
  isNonDeletedElement,
  excludeElementsInFramesFromSelection,
  getElementsWithinSelection,
  isSomeElementSelected,
  getCommonAttributeOfSelectedElements,
  getSelectedElements,
  getTargetElements,
  makeNextSelectedElementIds,
  centerScrollOn,
  calculateScrollCenter,
  getNormalizedZoom,
  getNormalizedGridStep
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-7ZEXYAFI.js.map
