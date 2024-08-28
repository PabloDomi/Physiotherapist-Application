function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-D8cnTso1.js","./chunk-HLWAVYOI-BxcrA5PH.js","./iframe-B91hZjYL.js","./index-Cu9bd8lq.js","./react-18-D_xN25Lc.js","./index-Ckls47V4.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js","./extends-CCbyfPlC.js","./index-NW_eYKCe.js","./assertThisInitialized-B9jnkVVz.js","./inheritsLoose-B7h9gheN.js","./index-riBwwoZ_.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-B91hZjYL.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-D8cnTso1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
