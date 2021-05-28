/* eslint-disable */
module.exports = {
name: "@yarnpkg/plugin-echo-execute",
factory: function (require) {
var plugin;(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{e.r(t),e.d(t,{default:()=>r});const r={hooks:{wrapScriptExecution:async(e,t,r,o,n)=>()=>{const t=n.script.startsWith("yarn ")?n.script:"yarn "+n.script;return console.info(`${o}> ${t}`),e()}}}})(),plugin=t})();
return plugin;
}
};