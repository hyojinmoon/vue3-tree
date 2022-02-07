var e=Object.defineProperty,o=Object.defineProperties,n=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(o,n,d)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[n]=d,s=(e,o)=>{for(var n in o||(o={}))t.call(o,n)&&r(e,n,o[n]);if(d)for(var n of d(o))c.call(o,n)&&r(e,n,o[n]);return e},l=(e,d)=>o(e,n(d));import{openBlock as i,createBlock as a,createVNode as u,computed as h,resolveComponent as p,withModifiers as k,Fragment as g,renderSlot as x,createCommentVNode as w,withDirectives as y,vModelCheckbox as f,toDisplayString as b,renderList as v,withCtx as C,nextTick as m,pushScopeId as N,popScopeId as T,onMounted as A,watch as B,createSlots as R,withScopeId as D}from"vue";const I={},E={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},S=u("polyline",{points:"9 18 15 12 9 6"},null,-1);I.render=function(e,o){return i(),a("svg",E,[S])};const $={},O={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},j=u("polyline",{points:"6 9 12 15 18 9"},null,-1);$.render=function(e,o){return i(),a("svg",O,[j])};const z={},q={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},H=u("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),P=u("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1);z.render=function(e,o){return i(),a("svg",q,[H,P])};const _={components:{ArrowRight:I,ArrowDown:$,DeleteIcon:z},props:{node:{type:Object,required:!0},indentSize:{type:Number,required:!0},gap:{type:Number,required:!0},getNode:{type:Function,required:!0},setNode:{type:Function,required:!0},updateNode:{type:Function,required:!0},expandRowByDefault:{type:Boolean,default:!1},useCheckbox:{type:Boolean,default:!1},checkType:{type:String,default:""},useIcon:{type:Boolean,default:!0},useRowDelete:{type:Boolean,default:!1},showChildCount:{type:Boolean,default:!1},rowHoverBackground:{type:String,default:"#e0e0e0"},expandable:{type:Boolean,default:!0}},emits:["nodeExpanded","checkboxToggle","deleteRow","selectedNode"],setup(e,{emit:o}){const n=h((()=>{var o;return null==(o=e.node.nodes)?void 0:o.length})),d=h((()=>{var o;return null==(o=e.node.nodes)?void 0:o.filter((e=>e.checked)).length}));return{childCount:n,checkedChildCount:d,toggleExpanded:d=>{e.expandable&&n.value&&(e.node.expanded=!!e.node.nodes&&!e.node.expanded,m((()=>{o("nodeExpanded",d,e.node.expanded)})))},onNodeExpanded:(e,n)=>{o("nodeExpanded",e,n)},toggleCheckbox:()=>{const{node:o,updateNode:n}=e;n(o.id,{checked:!o.checked})},onCheckboxToggle:(e,n)=>{o("checkboxToggle",e,n)},removedRow:e=>{o("deleteRow",e)},onThisClick:(e,n)=>{o("selectedNode",e,n)}}}},F={key:0,class:"tree-row-item-icon-wrapper"},L={class:"tree-row-txt"},U={class:"child-count"};function V(e,o){return e.map((e=>{var n;if(null==(n=e.nodes)?void 0:n.length){if(e.nodes=V(e.nodes,o),"each"!=o){const o=e.nodes.every((e=>e.checked)),n=e.nodes.some((e=>e.checked)),d=e.nodes.some((e=>e.indeterminate));o||(n||d?(e.checked=!1,e.indeterminate=!0):o||(e.checked=!1,e.indeterminate=!1))}}else e.expanded&&(e.expanded=!1);return e}))}function G(e,o){let n=[...e];return n=n.map((e=>{const n=null==o?void 0:o.checked;let d=s({checked:!!n,expanded:!1,indeterminate:!1},e);return Array.isArray(d.nodes)&&(d.nodes=G(d.nodes,d)),d})),V(n)}function J(e,o){for(let n=0;n<e.length;n++){const d=e[n];if(d.id===o)return d;if(Array.isArray(d.nodes)){const e=J(d.nodes,o);if(e)return e}}}function K(e,o,n){for(let d=0;d<e.length;d++){const t=e[d];t.id===o?e[d]=s({id:o},n):Array.isArray(t.nodes)&&(e[d].nodes=K(t.nodes,o,n))}return e}function M(e,o,n){const d=void 0!==o?o:e.checked;return e.checked=d,"each"!=n&&e&&Array.isArray(e.nodes)&&(e.nodes=e.nodes.map((e=>l(s({},e),{checked:d,nodes:e.nodes?e.nodes.map((e=>M(e,d))):void 0})))),e}function Q(e,o,n,d){for(let t=0;t<e.length;t++){const c=e[t];c.id===o?e[t]=M(s(s({},c),n),void 0,d):Array.isArray(c.nodes)&&(e[t].nodes=Q(c.nodes,o,n,d))}return e}function W(e,o){if(!Array.isArray(e))return;let n=[...e];for(let d=0;d<e.length;d++){const t=e[d];t.id===o?n=n.filter((e=>e.id!==o)):t.nodes&&(t.nodes=W(t.nodes,o),t.nodes.length||delete t.nodes)}return n}function X(e){e&&(e.expanded=!0,e.nodes&&e.nodes.forEach(X))}_.render=function(e,o,n,d,t,c){const r=p("arrow-right"),s=p("arrow-down"),l=p("delete-icon"),h=p("tree-row",!0);return i(),a("li",{class:"tree-row",style:{"padding-left":n.indentSize+"px",gap:n.gap+"px","--row-hover-background":n.rowHoverBackground,cursor:"pointer"}},[u("div",{class:"tree-row-item",onClick:[o[4]||(o[4]=e=>d.onThisClick(n.node,e)),o[5]||(o[5]=k((e=>d.toggleExpanded(n.node)),["stop"]))]},[n.useIcon?(i(),a("div",F,[d.childCount?(i(),a(g,{key:0},[n.node.expanded?x(e.$slots,"iconInactive",{key:1},(()=>[u(s)])):x(e.$slots,"iconActive",{key:0},(()=>[u(r)]))],64)):w("",!0)])):w("",!0),x(e.$slots,"checkbox",{id:n.node.id,node:n.node,checked:n.node.checked,indeterminate:n.node.indeterminate},(()=>[n.useCheckbox?y((i(),a("input",{key:0,"onUpdate:modelValue":o[1]||(o[1]=e=>n.node.checked=e),type:"checkbox",checked:n.node.checked,indeterminate:n.node.indeterminate,onClick:o[2]||(o[2]=k(((...e)=>d.toggleCheckbox&&d.toggleCheckbox(...e)),["stop"]))},null,8,["checked","indeterminate"])),[[f,n.node.checked]]):w("",!0)])),u("span",L,b(n.node.label),1),d.childCount&&n.showChildCount?x(e.$slots,"childCount",{key:1,count:d.childCount,checkedCount:d.checkedChildCount,childs:n.node.nodes},(()=>[u("span",U,b(d.childCount),1)])):w("",!0),n.node&&n.useRowDelete?(i(),a("div",{key:2,class:"delete-icon",onClick:o[3]||(o[3]=k((e=>d.removedRow(n.node)),["stop"]))},[x(e.$slots,"deleteIcon",{},(()=>[u(l)]))])):w("",!0)]),n.node.expanded?(i(),a("ul",{key:0,style:{gap:n.gap+"px"},class:"tree-list"},[(i(!0),a(g,null,v(n.node.nodes,(o=>(i(),a(h,{ref:"tree-row-"+o.id,key:o.id,node:o,"use-checkbox":n.useCheckbox,"check-type":n.checkType,"use-icon":n.useIcon,"use-row-delete":n.useRowDelete,"show-child-count":n.showChildCount,gap:n.gap,"expand-row-by-default":n.expandRowByDefault,"indent-size":n.indentSize,"row-hover-background":n.rowHoverBackground,"set-node":n.setNode,"get-node":n.getNode,"update-node":n.updateNode,expandable:n.expandable,onDeleteRow:d.removedRow,onNodeExpanded:d.onNodeExpanded,onCheckboxToggle:d.onCheckboxToggle,onSelectedNode:d.onThisClick},{childCount:C((({count:o,checkedCount:n,childs:d})=>[x(e.$slots,"childCount",{count:o,checkedCount:n,childs:d})])),iconActive:C((()=>[x(e.$slots,"iconActive",{},(()=>[u(r)]))])),iconInactive:C((()=>[x(e.$slots,"iconInactive",{},(()=>[u(s)]))])),deleteIcon:C((()=>[x(e.$slots,"deleteIcon",{},(()=>[u(l)]))])),checkbox:C((({node:o,checked:n,indeterminate:d})=>[x(e.$slots,"checkbox",{id:o.id,node:o,checked:n,indeterminate:d})])),_:2},1032,["node","use-checkbox","check-type","use-icon","use-row-delete","show-child-count","gap","expand-row-by-default","indent-size","row-hover-background","set-node","get-node","update-node","expandable","onDeleteRow","onNodeExpanded","onCheckboxToggle","onSelectedNode"])))),128))],4)):w("",!0)],4)};const Y={name:"Tree",components:{TreeRow:_},props:{nodes:{type:Array,required:!0},props:{type:Object,default:()=>({nodes:"nodes",label:"label"})},indentSize:{type:Number,default:24},gap:{type:Number,default:10},searchText:{type:String,default:""},expandRowByDefault:{type:Boolean,default:!1},expandAllRowsOnSearch:{type:Boolean,default:!0},useCheckbox:{type:Boolean,default:!1},checkType:{type:String,default:""},useIcon:{type:Boolean,default:!0},useRowDelete:{type:Boolean,default:!1},showChildCount:{type:Boolean,default:!1},rowHoverBackground:{type:String,default:"#e0e0e0"},expandable:{type:Boolean,default:!0}},emits:["nodeExpanded","checkboxToggle","update:nodes","selectedNode"],setup(e,{emit:o}){const{search:n}={search:(e,o)=>{const n=(e,d)=>{if(d.label.toLowerCase().includes(o.toLowerCase()))return e.push(d),e;if(Array.isArray(d.nodes)){const o=d.nodes.reduce(n,[]);o.length&&e.push(l(s({},d),{nodes:o}))}return e};return e.reduce(n,[])}};A((()=>o("update:nodes",G(e.nodes))));const d=h((()=>{let o=e.nodes;return""!==e.searchText?(o=n(e.nodes,e.searchText),e.expandAllRowsOnSearch&&o.forEach(X)):o=e.nodes,V(o,e.checkType)})),t=o=>J(e.nodes,o),c=(n,d)=>{o("update:nodes",V(Q(e.nodes,n,d,e.checkType),e.checkType))};B((()=>e.nodes),(()=>{o("update:nodes",e.nodes)}));return{setNode:(n,d)=>{o("update:nodes",K(e.nodes,n,d))},getNode:t,updateNode:c,onNodeExpanded:(e,n)=>{o("nodeExpanded",e,n)},onCheckboxToggle:e=>{o("checkboxToggle",e)},onUpdate:()=>{o("update:nodes",e.nodes)},toggleCheckbox:e=>{const{checked:o}=t(e);c(e,{checked:!o})},onDeleteRow:n=>{W(e.nodes,n.id),o("update:nodes",V(W(e.nodes,n.id),e.checkType))},filteredData:d,onThisClick:(e,n)=>{o("selectedNode",e,n)}}}},Z=D("data-v-d0babf6a");N("data-v-d0babf6a");const ee={class:"tree"};T();const oe=Z(((e,o,n,d,t,c)=>{const r=p("tree-row");return i(),a("div",ee,[u("ul",{style:{gap:n.gap+"px"},class:"tree-list"},[(i(!0),a(g,null,v(d.filteredData,(o=>(i(),a(r,{ref:"tree-row-"+o.id,key:o.id,node:o,"use-checkbox":n.useCheckbox,"check-type":n.checkType,"use-icon":n.useIcon,"use-row-delete":n.useRowDelete,"show-child-count":n.showChildCount,"indent-size":n.indentSize,gap:n.gap,"row-hover-background":n.rowHoverBackground,"set-node":d.setNode,"get-node":d.getNode,"update-node":d.updateNode,expandable:n.expandable,onDeleteRow:d.onDeleteRow,onNodeExpanded:d.onNodeExpanded,onCheckboxToggle:d.onCheckboxToggle,onSelectedNode:d.onThisClick},R({checkbox:Z((({id:o,node:n,checked:t,indeterminate:c})=>[x(e.$slots,"checkbox",{node:n,checked:t,indeterminate:c,toggleCheckbox:()=>d.toggleCheckbox(o)},void 0,!0)])),_:2},[n.useIcon?{name:"iconActive",fn:Z((()=>[x(e.$slots,"iconActive",{},void 0,!0)]))}:void 0,n.useIcon?{name:"iconInactive",fn:Z((()=>[x(e.$slots,"iconInactive",{},void 0,!0)]))}:void 0,n.useRowDelete?{name:"deleteIcon",fn:Z((()=>[x(e.$slots,"deleteIcon",{},void 0,!0)]))}:void 0,n.showChildCount?{name:"childCount",fn:Z((({count:o,checkedCount:n,childs:d})=>[x(e.$slots,"childCount",{count:o,checkedCount:n,childs:d},void 0,!0)]))}:void 0]),1032,["node","use-checkbox","check-type","use-icon","use-row-delete","show-child-count","indent-size","gap","row-hover-background","set-node","get-node","update-node","expandable","onDeleteRow","onNodeExpanded","onCheckboxToggle","onSelectedNode"])))),128))],4)])}));Y.render=oe,Y.__scopeId="data-v-d0babf6a";export default Y;export{J as getNodeById,K as setNodeById,Q as updateNodeById};
