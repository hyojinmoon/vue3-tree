var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,o,n)=>o in e?__defProp(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,__spreadValues=(e,o)=>{for(var n in o||(o={}))__hasOwnProp.call(o,n)&&__defNormalProp(e,n,o[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(o))__propIsEnum.call(o,n)&&__defNormalProp(e,n,o[n]);return e},__spreadProps=(e,o)=>__defProps(e,__getOwnPropDescs(o));!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).Tree={},e.Vue)}(this,(function(e,o){"use strict";const n={},t={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},d=o.createVNode("polyline",{points:"9 18 15 12 9 6"},null,-1);n.render=function(e,n){return o.openBlock(),o.createBlock("svg",t,[d])};const r={},c={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},l=o.createVNode("polyline",{points:"6 9 12 15 18 9"},null,-1);r.render=function(e,n){return o.openBlock(),o.createBlock("svg",c,[l])};const s={},a={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},i=o.createVNode("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),u=o.createVNode("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1);s.render=function(e,n){return o.openBlock(),o.createBlock("svg",a,[i,u])};const p={components:{ArrowRight:n,ArrowDown:r,DeleteIcon:s},props:{node:{type:Object,required:!0},indentSize:{type:Number,required:!0},gap:{type:Number,required:!0},getNode:{type:Function,required:!0},setNode:{type:Function,required:!0},updateNode:{type:Function,required:!0},expandRowByDefault:{type:Boolean,default:!1},useCheckbox:{type:Boolean,default:!1},useIcon:{type:Boolean,default:!0},useRowDelete:{type:Boolean,default:!1},showChildCount:{type:Boolean,default:!1},rowHoverBackground:{type:String,default:"#e0e0e0"},expandable:{type:Boolean,default:!0}},emits:["nodeExpanded","checkboxToggle","deleteRow","selectedNode"],setup(e,{emit:n}){const t=o.computed((()=>{var o;return null==(o=e.node.nodes)?void 0:o.length})),d=o.computed((()=>{var o;return null==(o=e.node.nodes)?void 0:o.filter((e=>e.checked)).length}));return{childCount:t,checkedChildCount:d,toggleExpanded:d=>{e.expandable&&t.value&&(e.node.expanded=!!e.node.nodes&&!e.node.expanded,o.nextTick((()=>{n("nodeExpanded",d,e.node.expanded)})))},onNodeExpanded:(e,o)=>{n("nodeExpanded",e,o)},toggleCheckbox:()=>{const{node:o,updateNode:n}=e;n(o.id,{checked:!o.checked})},onCheckboxToggle:(e,o)=>{n("checkboxToggle",e,o)},removedRow:e=>{n("deleteRow",e)},onThisClick:(e,o)=>{n("selectedNode",e,o)}}}},h={key:0,class:"tree-row-item-icon-wrapper"},k={class:"tree-row-txt"},g={class:"child-count"};function w(e){return e.map((e=>{var o;if(null==(o=e.nodes)?void 0:o.length){e.nodes=w(e.nodes);const o=e.nodes.every((e=>e.checked)),n=e.nodes.some((e=>e.checked)),t=e.nodes.some((e=>e.indeterminate));o?(e.checked=!0,e.indeterminate=!1):n||t?(e.checked=!1,e.indeterminate=!0):o||(e.checked=!1,e.indeterminate=!1)}else e.expanded&&(e.expanded=!1);return e}))}function f(e,o){let n=[...e];return n=n.map((e=>{const n=null==o?void 0:o.checked;let t=__spreadValues({checked:!!n,expanded:!1,indeterminate:!1},e);return Array.isArray(t.nodes)&&(t.nodes=f(t.nodes,t)),t})),w(n)}function x(e,o){for(let n=0;n<e.length;n++){const t=e[n];if(t.id===o)return t;if(Array.isArray(t.nodes)){const e=x(t.nodes,o);if(e)return e}}}function y(e,o,n){for(let t=0;t<e.length;t++){const d=e[t];d.id===o?e[t]=__spreadValues({id:o},n):Array.isArray(d.nodes)&&(e[t].nodes=y(d.nodes,o,n))}return e}function m(e,o){const n=void 0!==o?o:e.checked;return e.checked=n,e&&Array.isArray(e.nodes)&&(e.nodes=e.nodes.map((e=>__spreadProps(__spreadValues({},e),{checked:n,nodes:e.nodes?e.nodes.map((e=>m(e,n))):void 0})))),e}function C(e,o,n){for(let t=0;t<e.length;t++){const d=e[t];d.id===o?e[t]=m(__spreadValues(__spreadValues({},d),n)):Array.isArray(d.nodes)&&(e[t].nodes=C(d.nodes,o,n))}return e}function b(e,o){if(!Array.isArray(e))return;let n=[...e];for(let t=0;t<e.length;t++){const d=e[t];d.id===o?n=n.filter((e=>e.id!==o)):d.nodes&&(d.nodes=b(d.nodes,o),d.nodes.length||delete d.nodes)}return n}function v(e){e&&(e.expanded=!0,e.nodes&&e.nodes.forEach(v))}p.render=function(e,n,t,d,r,c){const l=o.resolveComponent("arrow-right"),s=o.resolveComponent("arrow-down"),a=o.resolveComponent("delete-icon"),i=o.resolveComponent("tree-row",!0);return o.openBlock(),o.createBlock("li",{class:"tree-row",style:{"padding-left":t.indentSize+"px",gap:t.gap+"px","--row-hover-background":t.rowHoverBackground,cursor:"pointer"}},[o.createVNode("div",{class:"tree-row-item",onClick:[n[4]||(n[4]=e=>d.onThisClick(t.node,e)),n[5]||(n[5]=o.withModifiers((e=>d.toggleExpanded(t.node)),["stop"]))]},[t.useIcon?(o.openBlock(),o.createBlock("div",h,[d.childCount?(o.openBlock(),o.createBlock(o.Fragment,{key:0},[t.node.expanded?o.renderSlot(e.$slots,"iconInactive",{key:1},(()=>[o.createVNode(s)])):o.renderSlot(e.$slots,"iconActive",{key:0},(()=>[o.createVNode(l)]))],64)):o.createCommentVNode("",!0)])):o.createCommentVNode("",!0),o.renderSlot(e.$slots,"checkbox",{id:t.node.id,node:t.node,checked:t.node.checked,indeterminate:t.node.indeterminate},(()=>[t.useCheckbox?o.withDirectives((o.openBlock(),o.createBlock("input",{key:0,"onUpdate:modelValue":n[1]||(n[1]=e=>t.node.checked=e),type:"checkbox",checked:t.node.checked,indeterminate:t.node.indeterminate,onClick:n[2]||(n[2]=o.withModifiers(((...e)=>d.toggleCheckbox&&d.toggleCheckbox(...e)),["stop"]))},null,8,["checked","indeterminate"])),[[o.vModelCheckbox,t.node.checked]]):o.createCommentVNode("",!0)])),o.createVNode("span",k,o.toDisplayString(t.node.label),1),d.childCount&&t.showChildCount?o.renderSlot(e.$slots,"childCount",{key:1,count:d.childCount,checkedCount:d.checkedChildCount,childs:t.node.nodes},(()=>[o.createVNode("span",g,o.toDisplayString(d.childCount),1)])):o.createCommentVNode("",!0),t.node&&t.useRowDelete?(o.openBlock(),o.createBlock("div",{key:2,class:"delete-icon",onClick:n[3]||(n[3]=o.withModifiers((e=>d.removedRow(t.node)),["stop"]))},[o.renderSlot(e.$slots,"deleteIcon",{},(()=>[o.createVNode(a)]))])):o.createCommentVNode("",!0)]),t.node.expanded?(o.openBlock(),o.createBlock("ul",{key:0,style:{gap:t.gap+"px"},class:"tree-list"},[(o.openBlock(!0),o.createBlock(o.Fragment,null,o.renderList(t.node.nodes,(n=>(o.openBlock(),o.createBlock(i,{ref:"tree-row-"+n.id,key:n.id,node:n,"use-checkbox":t.useCheckbox,"use-icon":t.useIcon,"use-row-delete":t.useRowDelete,"show-child-count":t.showChildCount,gap:t.gap,"expand-row-by-default":t.expandRowByDefault,"indent-size":t.indentSize,"row-hover-background":t.rowHoverBackground,"set-node":t.setNode,"get-node":t.getNode,"update-node":t.updateNode,expandable:t.expandable,onDeleteRow:d.removedRow,onNodeExpanded:d.onNodeExpanded,onCheckboxToggle:d.onCheckboxToggle,onSelectedNode:d.onThisClick},{childCount:o.withCtx((({count:n,checkedCount:t,childs:d})=>[o.renderSlot(e.$slots,"childCount",{count:n,checkedCount:t,childs:d})])),iconActive:o.withCtx((()=>[o.renderSlot(e.$slots,"iconActive",{},(()=>[o.createVNode(l)]))])),iconInactive:o.withCtx((()=>[o.renderSlot(e.$slots,"iconInactive",{},(()=>[o.createVNode(s)]))])),deleteIcon:o.withCtx((()=>[o.renderSlot(e.$slots,"deleteIcon",{},(()=>[o.createVNode(a)]))])),checkbox:o.withCtx((({node:n,checked:t,indeterminate:d})=>[o.renderSlot(e.$slots,"checkbox",{id:n.id,node:n,checked:t,indeterminate:d})])),_:2},1032,["node","use-checkbox","use-icon","use-row-delete","show-child-count","gap","expand-row-by-default","indent-size","row-hover-background","set-node","get-node","update-node","expandable","onDeleteRow","onNodeExpanded","onCheckboxToggle","onSelectedNode"])))),128))],4)):o.createCommentVNode("",!0)],4)};const N={name:"Tree",components:{TreeRow:p},props:{nodes:{type:Array,required:!0},props:{type:Object,default:()=>({nodes:"nodes",label:"label"})},indentSize:{type:Number,default:24},gap:{type:Number,default:10},searchText:{type:String,default:""},expandRowByDefault:{type:Boolean,default:!1},expandAllRowsOnSearch:{type:Boolean,default:!0},useCheckbox:{type:Boolean,default:!1},useIcon:{type:Boolean,default:!0},useRowDelete:{type:Boolean,default:!1},showChildCount:{type:Boolean,default:!1},rowHoverBackground:{type:String,default:"#e0e0e0"},expandable:{type:Boolean,default:!0}},emits:["nodeExpanded","checkboxToggle","update:nodes","selectedNode"],setup(e,{emit:n}){const{search:t}={search:(e,o)=>{const n=(e,t)=>{if(t.label.toLowerCase().includes(o.toLowerCase()))return e.push(t),e;if(Array.isArray(t.nodes)){const o=t.nodes.reduce(n,[]);o.length&&e.push(__spreadProps(__spreadValues({},t),{nodes:o}))}return e};return e.reduce(n,[])}};o.onMounted((()=>n("update:nodes",f(e.nodes))));const d=o.computed((()=>{let o=e.nodes;return""!==e.searchText?(o=t(e.nodes,e.searchText),e.expandAllRowsOnSearch&&o.forEach(v)):o=e.nodes,w(o)})),r=o=>x(e.nodes,o),c=(o,t)=>{n("update:nodes",w(C(e.nodes,o,t)))};o.watch((()=>e.nodes),(()=>{n("update:nodes",e.nodes)}));return{setNode:(o,t)=>{n("update:nodes",y(e.nodes,o,t))},getNode:r,updateNode:c,onNodeExpanded:(e,o)=>{n("nodeExpanded",e,o)},onCheckboxToggle:e=>{n("checkboxToggle",e)},onUpdate:()=>{n("update:nodes",e.nodes)},toggleCheckbox:e=>{const{checked:o}=r(e);c(e,{checked:!o})},onDeleteRow:o=>{b(e.nodes,o.id),n("update:nodes",w(b(e.nodes,o.id)))},filteredData:d,onThisClick:(e,o)=>{n("selectedNode",e,o)}}}},_=o.withScopeId("data-v-3ccf28a4");o.pushScopeId("data-v-3ccf28a4");const B={class:"tree"};o.popScopeId();const S=_(((e,n,t,d,r,c)=>{const l=o.resolveComponent("tree-row");return o.openBlock(),o.createBlock("div",B,[o.createVNode("ul",{style:{gap:t.gap+"px"},class:"tree-list"},[(o.openBlock(!0),o.createBlock(o.Fragment,null,o.renderList(d.filteredData,(n=>(o.openBlock(),o.createBlock(l,{ref:"tree-row-"+n.id,key:n.id,node:n,"use-checkbox":t.useCheckbox,"use-icon":t.useIcon,"use-row-delete":t.useRowDelete,"show-child-count":t.showChildCount,"indent-size":t.indentSize,gap:t.gap,"row-hover-background":t.rowHoverBackground,"set-node":d.setNode,"get-node":d.getNode,"update-node":d.updateNode,expandable:t.expandable,onDeleteRow:d.onDeleteRow,onNodeExpanded:d.onNodeExpanded,onCheckboxToggle:d.onCheckboxToggle,onSelectedNode:d.onThisClick},o.createSlots({checkbox:_((({id:n,node:t,checked:r,indeterminate:c})=>[o.renderSlot(e.$slots,"checkbox",{node:t,checked:r,indeterminate:c,toggleCheckbox:()=>d.toggleCheckbox(n)},void 0,!0)])),_:2},[t.useIcon?{name:"iconActive",fn:_((()=>[o.renderSlot(e.$slots,"iconActive",{},void 0,!0)]))}:void 0,t.useIcon?{name:"iconInactive",fn:_((()=>[o.renderSlot(e.$slots,"iconInactive",{},void 0,!0)]))}:void 0,t.useRowDelete?{name:"deleteIcon",fn:_((()=>[o.renderSlot(e.$slots,"deleteIcon",{},void 0,!0)]))}:void 0,t.showChildCount?{name:"childCount",fn:_((({count:n,checkedCount:t,childs:d})=>[o.renderSlot(e.$slots,"childCount",{count:n,checkedCount:t,childs:d},void 0,!0)]))}:void 0]),1032,["node","use-checkbox","use-icon","use-row-delete","show-child-count","indent-size","gap","row-hover-background","set-node","get-node","update-node","expandable","onDeleteRow","onNodeExpanded","onCheckboxToggle","onSelectedNode"])))),128))],4)])}));N.render=S,N.__scopeId="data-v-3ccf28a4",e.default=N,e.getNodeById=x,e.setNodeById=y,e.updateNodeById=C,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
