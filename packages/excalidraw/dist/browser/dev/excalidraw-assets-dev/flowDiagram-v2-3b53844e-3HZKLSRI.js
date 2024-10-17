import {
  flowRendererV2,
  flowStyles
} from "./chunk-5R5HT6ZS.js";
import "./chunk-LOC55FNZ.js";
import {
  flowDb,
  parser$1
} from "./chunk-HZ4ZNHFQ.js";
import "./chunk-X4FMAVEC.js";
import "./chunk-VL6VLZ4F.js";
import "./chunk-DHC73VDT.js";
import "./chunk-UVRT46DL.js";
import {
  require_dayjs_min,
  require_dist,
  require_purify,
  setConfig
} from "./chunk-RT4NBVB7.js";
import {
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import {
  __toESM
} from "./chunk-F3UQABQJ.js";

// ../../node_modules/mermaid/dist/flowDiagram-v2-3b53844e.js
init_define_import_meta_env();
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dompurify = __toESM(require_purify(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-3b53844e-3HZKLSRI.js.map
