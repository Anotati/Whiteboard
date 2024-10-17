import {
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import "./chunk-F3UQABQJ.js";

// fonts/wasm/hb-subset.bindings.ts
init_define_import_meta_env();
function subset(hbSubsetWasm, heapu8, font, codePoints) {
  const input = hbSubsetWasm.hb_subset_input_create_or_fail();
  if (input === 0) {
    throw new Error(
      "hb_subset_input_create_or_fail (harfbuzz) returned zero, indicating failure"
    );
  }
  const fontBuffer = hbSubsetWasm.malloc(font.byteLength);
  heapu8.set(new Uint8Array(font), fontBuffer);
  const blob = hbSubsetWasm.hb_blob_create(
    fontBuffer,
    font.byteLength,
    2,
    // HB_MEMORY_MODE_WRITABLE
    0,
    0
  );
  const face = hbSubsetWasm.hb_face_create(blob, 0);
  hbSubsetWasm.hb_blob_destroy(blob);
  const layoutFeatures = hbSubsetWasm.hb_subset_input_set(
    input,
    6
    // HB_SUBSET_SETS_LAYOUT_FEATURE_TAG
  );
  hbSubsetWasm.hb_set_clear(layoutFeatures);
  hbSubsetWasm.hb_set_invert(layoutFeatures);
  const inputUnicodes = hbSubsetWasm.hb_subset_input_unicode_set(input);
  for (const c of codePoints) {
    hbSubsetWasm.hb_set_add(inputUnicodes, c);
  }
  let subset2;
  try {
    subset2 = hbSubsetWasm.hb_subset_or_fail(face, input);
    if (subset2 === 0) {
      hbSubsetWasm.hb_face_destroy(face);
      hbSubsetWasm.free(fontBuffer);
      throw new Error(
        "hb_subset_or_fail (harfbuzz) returned zero, indicating failure. Maybe the input file is corrupted?"
      );
    }
  } finally {
    hbSubsetWasm.hb_subset_input_destroy(input);
  }
  const result = hbSubsetWasm.hb_face_reference_blob(subset2);
  const offset = hbSubsetWasm.hb_blob_get_data(result, 0);
  const subsetByteLength = hbSubsetWasm.hb_blob_get_length(result);
  if (subsetByteLength === 0) {
    hbSubsetWasm.hb_blob_destroy(result);
    hbSubsetWasm.hb_face_destroy(subset2);
    hbSubsetWasm.hb_face_destroy(face);
    hbSubsetWasm.free(fontBuffer);
    throw new Error(
      "Failed to create subset font, maybe the input file is corrupted?"
    );
  }
  const subsetFont = new Uint8Array(
    heapu8.subarray(offset, offset + subsetByteLength)
  );
  hbSubsetWasm.hb_blob_destroy(result);
  hbSubsetWasm.hb_face_destroy(subset2);
  hbSubsetWasm.hb_face_destroy(face);
  hbSubsetWasm.free(fontBuffer);
  return subsetFont;
}
var hb_subset_bindings_default = {
  subset
};
export {
  hb_subset_bindings_default as default
};
//# sourceMappingURL=hb-subset.bindings-NZET6ECT.js.map
