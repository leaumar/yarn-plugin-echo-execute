/* eslint-disable */
module.exports = {
name: "@yarnpkg/plugin-echo-execute",
factory: function (require) {
var plugin;(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>r});const t=require("@yarnpkg/core"),r={hooks:{wrapScriptExecution:async(e,o,r,a,n)=>async()=>(await t.StreamReport.start({configuration:o.configuration,json:!1,includeFooter:!1,stdout:n.stdout},async e=>{e.reportInfo(t.MessageName.UNNAMED,t.formatUtils.applyColor(o.configuration,`[${a}] ${n.script}`,t.formatUtils.Type.NO_HINT))}),e())}};plugin=o})();
return plugin;
}
};