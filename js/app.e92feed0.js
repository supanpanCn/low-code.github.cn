(function(e){function t(t){for(var c,o,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"071e":function(e,t,n){},"0c7c":function(e,t,n){var c={"./button.config.vue":"9dcb"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="0c7c"},"11ce":function(e,t,n){"use strict";n("6882")},1270:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function a(e,t,n,a,r,o){var i=Object(c["resolveComponent"])("el-input");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{"data-id":"uiInput"})}var r={name:"uiInput",props:{placeholder:{type:String,default:"请输入"}}},o=n("6b0d"),i=n.n(o);const u=i()(r,[["render",a]]);t["default"]=u},"185a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=["uid"];function r(e,t,n,r,o,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])({draging:o.draging,uiContainer:!0}),uid:n.uid,"data-id":"uiContainer",onDragover:t[0]||(t[0]=Object(c["withModifiers"])((function(){}),["prevent"]))},[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],42,a)}var o=n("ed08"),i={name:"uiContainer",props:{uid:{type:String,default:"-1"}},data:function(){return{draging:!1,schame:null}},methods:{updateDraging:function(e){this.draging=e}},mounted:function(){new o["f"](this,o["b"].getInstance())}},u=(n("6f87"),n("6b0d")),s=n.n(u);const l=s()(i,[["render",r],["__scopeId","data-v-127544a5"]]);t["default"]=l},"25bb":function(e,t,n){"use strict";n("4f4b")},"2a7d":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function a(e,t,n,a,r,o){var i=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{"data-id":"uiButton"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.text),1)]})),_:1})}var r={name:"uiButton",props:{text:{type:String,default:"确认"}}},o=n("6b0d"),i=n.n(o);const u=i()(r,[["render",a]]);t["default"]=u},4138:function(e,t,n){},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="4678"},4723:function(e,t,n){},"4f4b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=n("5530"),r=n("ed08"),o=n("5502"),i=n("c1df"),u=n.n(i),s={class:"appWrapper"},l={setup:function(e){var t=Object(c["readonly"])(Object(o["d"])());Object(c["onMounted"])((function(){n()}));var n=function(){var e=!1;document.addEventListener("keydown",(function(t){e=t.ctrlKey,t.preventDefault()})),document.addEventListener("keyup",(function(n){var c=n.keyCode;e&&17!==c&&(t.commit("common/saveShortcutKey",Object(a["a"])(Object(a["a"])({},r["d"][n.keyCode]),{},{updateTime:u()().valueOf()})),n.preventDefault())}))};return function(e,t){var n=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createVNode"])(n)])}}},d=(n("703b"),n("6b0d")),f=n.n(d);const b=f()(l,[["__scopeId","data-v-81e7f442"]]);var j=b,m=(n("b059"),n("c3a1")),p=(n("7437"),n("6c02")),h=(n("07ac"),n("e9c4"),n("a434"),n("fb6a"),n("b64b"),function(e){var t=e.revocation,n=e.history,a=e.save,r=e.copy,i=e.paste,u=Object(o["d"])(),s=Object(c["computed"])((function(){return u.state.common.shortcutKeyInfo}));Object(c["watch"])(s,(function(e){if(e){var c=e||{},o=c.label;switch(o){case"撤销":t&&t();break;case"历史":n&&n();break;case"保存":a&&a();break;case"复制":r&&r();break;case"粘贴":i&&i();break}}}))}),v=function(e){return Object(c["pushScopeId"])("data-v-637d8ad8"),e=e(),Object(c["popScopeId"])(),e},O={class:"topBarWrapper"},y=v((function(){return Object(c["createElementVNode"])("div",{class:"logo"},null,-1)})),k={class:"r"},g={class:"history"},x={class:"user"},N={class:"dialog-footer"},w=Object(c["createTextVNode"])("取消"),C=Object(c["createTextVNode"])("确认"),S={props:["memo","active"],emits:["back","revocation","save"],setup:function(e,t){var n=t.emit,a=e,o=Object(c["reactive"])({userName:"三岁就会写bug",visible:!1,options:[],selectItem:void 0});h({revocation:function(){a.active&&n("revocation")},history:function(){o.visible=!!a.memo.length},save:function(){a.active&&n("save")}}),Object(c["watch"])((function(){return o.visible}),(function(e){e&&(o.options=Object.keys(a.memo.memos))}));var i=function(){if(o.selectItem){var e=a.memo.getMemo(o.selectItem);n("back",e),o.visible=!1}else Object(r["y"])("请选择")};return function(t,n){var r=Object(c["resolveComponent"])("el-tooltip"),u=Object(c["resolveComponent"])("el-option"),s=Object(c["resolveComponent"])("el-select"),l=Object(c["resolveComponent"])("el-button"),d=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",O,[y,Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("div",g,[Object(c["createVNode"])(r,{effect:"dark",content:"撤销",placement:"bottom"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["revoke","item",e.active?"act":""]),onClick:n[0]||(n[0]=function(e){return a.active&&t.$emit("revocation")})},null,2)]})),_:1}),Object(c["createVNode"])(r,{effect:"dark",content:"历史",placement:"bottom"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["past","item",a.memo.length?"act":""]),onClick:n[1]||(n[1]=function(e){return Object(c["unref"])(o).visible=!!a.memo.length})},null,2)]})),_:1}),Object(c["createVNode"])(r,{effect:"dark",content:"保存",placement:"bottom"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:"save item",onClick:n[2]||(n[2]=function(e){return a.active&&t.$emit("save")})})]})),_:1})]),Object(c["createElementVNode"])("div",x,Object(c["toDisplayString"])(Object(c["unref"])(o).userName),1),Object(c["createVNode"])(d,{modelValue:Object(c["unref"])(o).visible,"onUpdate:modelValue":n[5]||(n[5]=function(e){return Object(c["unref"])(o).visible=e}),title:"历史",width:"30%","custom-class":"top-bar-modal","before-close":t.handleClose},{footer:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",N,[Object(c["createVNode"])(l,{onClick:n[4]||(n[4]=function(e){return Object(c["unref"])(o).visible=!1})},{default:Object(c["withCtx"])((function(){return[w]})),_:1}),Object(c["createVNode"])(l,{type:"primary",onClick:i},{default:Object(c["withCtx"])((function(){return[C]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,{modelValue:Object(c["unref"])(o).selectItem,"onUpdate:modelValue":n[3]||(n[3]=function(e){return Object(c["unref"])(o).selectItem=e}),placeholder:"请选择历史",size:"large"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(o).options,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue","before-close"])])])}}};n("11ce");const V=f()(S,[["__scopeId","data-v-637d8ad8"]]);var I=V,B=(n("d81d"),n("b0c0"),n("d3b7"),n("ddb0"),n("baed")),E=B.keys(),_=E.reduce((function(e,t){var n=B(t);return e[n.default.name]=n.default,e}),{}),T={class:"stockWrapper"},D=["onDragstart"],A={name:"Stock",data:function(){return{stacks:[]}},mounted:function(){this.stacks=Object.keys(_).map((function(e){return{uiName:e,name:Object(r["u"])(e)}}))}},M=Object.assign(A,{setup:function(e){var t=Object(o["d"])(),n=Object(c["readonly"])(r["b"].getInstance()),a=Object(c["computed"])((function(){return t.state.common.barAndMenuInfo})),i=Object(c["computed"])((function(){return t.state.common.sublineId})),u=Object(c["computed"])((function(){return t.state.common.tree})),s=function(e,t){n.notify(!0),t.dataTransfer.setData("ui-component-name",e.uiName)},l=function(e){n.notify(!1),e.dataTransfer.clearData("ui-component-name"),t.commit("common/saveActiveSublineId","")},d=function(e){var n=a.value,c=n.barHeight,o=n.menuWidth,s=10,l=Object(r["w"])(o)-s,d=Object(r["w"])(c);if(e.clientX-l>20&&e.clientY-d>10&&u.value.type){var f=Object(r["l"])(u.value,80,e);f&&f.uid!==i.value&&t.commit("common/saveActiveSublineId",f.uid),!f&&i.value&&t.commit("common/saveActiveSublineId","")}};return function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("ul",T,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.stacks,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:"stock-item",draggable:!0,onDragstart:function(t){return s(e,t)},onDragend:l,onDrag:d,key:e.uiName},Object(c["toDisplayString"])(e.name),41,D)})),128))])}}});n("5f33");const z=f()(M,[["__scopeId","data-v-5bfa0e4b"]]);var K=z,W={key:0,class:"emptyBox"};function H(e,t,n,a,r,o){var i=Object(c["resolveComponent"])("el-empty"),u=Object(c["resolveComponent"])("renderEngine");return r.isEmpty?(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:1,jsonSchema:n.jsonSchema,updateKey:n.updateKey},null,8,["jsonSchema","updateKey"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",W,[Object(c["createVNode"])(i,{description:"请拖拽到此"}),Object(c["createElementVNode"])("div",{class:"empty","data-id":"empty",onDragover:t[0]||(t[0]=Object(c["withModifiers"])((function(){}),["prevent"]))},null,32)]))}n("a9e3"),n("99af");var U=["id"],$={ref:"subline-x"},F={ref:"subline-y"};function P(e,t,n,a,r,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])({deleteBtnHoc:!0,isContainer:"Container"===r.type}),style:Object(c["normalizeStyle"])(r.attribute),id:this.uid,onClick:t[1]||(t[1]=function(){return o.handleActivate&&o.handleActivate.apply(o,arguments)}),onFocus:t[2]||(t[2]=function(){return e.handleFocus&&e.handleFocus.apply(e,arguments)}),ref:"child"},[r.isShowDelete?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:"delete",onClick:t[0]||(t[0]=function(){return o.handleDelete&&o.handleDelete.apply(o,arguments)})})):Object(c["createCommentVNode"])("",!0),r.isShowSubline?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Teleport"],{key:1,to:"body"},[Object(c["createElementVNode"])("div",$,null,512),Object(c["createElementVNode"])("div",F,null,512)])):Object(c["createCommentVNode"])("",!0),Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],46,U)}var R={name:"deleteBtnHoc",props:["tree"],inject:["removeNode"],data:function(){return{isShowDelete:!1,actInstance:null,uid:this.tree.uid,type:this.tree.type,attribute:{},isShowSubline:!1}},computed:Object(o["c"])({barAndMenuInfo:function(e){var t=e.common;return t.barAndMenuInfo},sublineId:function(e){var t=e.common;return t.saveActiveSublineId},shortcutKeyInfo:function(e){var t=e.common;return t.shortcutKeyInfo}}),watch:{sublineId:function(e){this.isShowSubline=this.uid===e},isShowSubline:function(e){var t=this;e&&this.$nextTick((function(){r["x"].call(t,t.attribute)}))}},mounted:function(){var e=this;this.actInstance=r["a"].getInstance(),this.setDynamicWrapperStyle(),r["c"].on(this.uid,(function(t){e.handleActivate(t)}))},methods:{setDynamicWrapperStyle:function(){var e=this.$refs.child,t=e.children[0];if(t.dataset.id!==r["z"].CONTAINER){var n=getComputedStyle(t),c=n.width,a=c?Object(r["w"])(c):180;e.style=Object(r["s"])({width:a>180?"180px":a+"px"});var o=this.tree.layout,i=Object(r["t"])(o,{w:a}),u=i.attribute;this.attribute=u}else{var s=Object(r["k"])(e),l=s.el,d=Object(r["o"])(),f=d.width,b=l.children,j=this.barAndMenuInfo.barHeight,m=j;b.length>1&&(m=0);for(var p=0;p<b.length-1;p++){var h=getComputedStyle(b[p]),v=h.height,O=h.top,y=Object(r["w"])(O)+Object(r["w"])(v);m=Math.max(m,y)}e.style=Object(r["s"])({top:m+10+"px",width:f})}},handleActivate:function(e){var t=this;e.stopPropagation(),this.actInstance&&(this.actInstance.update("isShowDelete"),this.actInstance.attach(this)),this.$store.commit("common/saveActiveSublineId",this.uid),this.isShowSubline=!0,this.isShowDelete=!0,this.$nextTick((function(){r["x"].call(t,t.attribute)}))},handleDelete:function(){var e=this;this.actInstance&&this.actInstance.update("isShowDelete"),this.$nextTick((function(){setTimeout((function(){e.isShowDelete=!1}),100)})),r["c"].off(this.uid),this.removeNode(this.uid)}}};n("8eca");const q=f()(R,[["render",P],["__scopeId","data-v-c9c31748"]]);var J=q;function L(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(c["isVNode"])(e)}var Y={name:"renderEngine",props:{jsonSchema:{type:Object,default:function(){return Object(r["h"])()}},updateKey:{type:Number}},data:function(){return{pageParams:null,layout:null,renderFunc:null}},watch:{updateKey:function(){this.init()}},created:function(){this.init()},methods:{init:function(){var e=this.jsonSchema,t=e.componentsTree,n=e.layout;this.pageParams=Object(r["v"])(this.jsonSchema.query),this.layout=n,this.tree=t},_h:function(e,t,n){return Object(c["h"])(e,{uid:n.uid},t)},renderTree:function(e){var t=null;return Array.isArray(e.children)&&e.children.length&&(t=this.renderChildren(e)),this.renderRealComponent(e,t)},renderChildren:function(e){var t=this,n=e.children||[].concat(e);return n.map((function(e){return t.renderTree(e)}))},renderRealComponent:function(e,t){var n,a=r["A"]+e.type,o=_[a];return o?e.isRoot?this._h(o,t,e):Object(c["createVNode"])(J,{tree:e,key:e.uid},L(n=this._h(o,t,e))?n:{default:function(){return[n]}}):null}},render:function(){return Object(c["createVNode"])("div",{id:"root",style:{position:"relative"}},[this.renderTree(this.tree)])},components:Object(a["a"])({},_)},X={name:"canvasArea",props:{jsonSchema:{type:Object},updateKey:{type:Number,default:0}},data:function(){return{components:[],isEmpty:Object(r["q"])(this.jsonSchema.componentsTree)}},updated:function(){this.isEmpty=Object(r["q"])(this.jsonSchema.componentsTree)},components:Object(a["a"])(Object(a["a"])({},void 0),{},{renderEngine:Y})};n("923d");const G=f()(X,[["render",H],["__scopeId","data-v-26cd2a9a"]]);var Q=G,Z={class:"configWrapper"};function ee(e,t,n,a,r,o){var i=Object(c["resolveComponent"])("ConfigTabsHoc");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Z,[Object(c["createVNode"])(i,{activeName:r.activeName,ref:"tabs"},{attr:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(r.currentComponent),{activeName:"attr"}))]})),behaviour:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(r.currentComponent),{activeName:"behaviour"}))]})),_:1},8,["activeName"])])}var te=function(e){return Object(c["pushScopeId"])("data-v-07a3b0cd"),e=e(),Object(c["popScopeId"])(),e},ne={class:"configTabsHoc"},ce={class:"commom-attr"},ae={class:"attr-coordinate"},re=te((function(){return Object(c["createElementVNode"])("div",{class:"attr-coordinate-x"},"x坐标:",-1)})),oe={class:"attr-coordinate"},ie=te((function(){return Object(c["createElementVNode"])("div",{class:"attr-coordinate-y"},"y坐标:",-1)})),ue={class:"attr-area"},se=te((function(){return Object(c["createElementVNode"])("div",{class:"attr-area-w"},"宽度:",-1)})),le={class:"attr-area"},de=te((function(){return Object(c["createElementVNode"])("div",{class:"attr-area-h"},"高度:",-1)}));function fe(e,t,n,a,r,o){var i=Object(c["resolveComponent"])("el-input"),u=Object(c["resolveComponent"])("el-tab-pane"),s=Object(c["resolveComponent"])("el-tabs");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",ne,[Object(c["createVNode"])(s,{onTabClick:o.handleTabClick,modelValue:n.activeName,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.activeName=e})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{label:"外观",name:"attr"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",ce,[Object(c["createElementVNode"])("div",ae,[re,Object(c["createVNode"])(i,{modelValue:e.input,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.input=t}),placeholder:"请输入x坐标"},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",oe,[ie,Object(c["createVNode"])(i,{modelValue:e.input,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.input=t}),placeholder:"请输入y坐标"},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",ue,[se,Object(c["createVNode"])(i,{modelValue:e.input,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.input=t}),placeholder:"请输入宽度"},null,8,["modelValue"])]),Object(c["createElementVNode"])("div",le,[de,Object(c["createVNode"])(i,{modelValue:e.input,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.input=t}),placeholder:"请输入高度"},null,8,["modelValue"])])]),Object(c["renderSlot"])(e.$slots,"attr",{},void 0,!0)]})),_:3}),Object(c["createVNode"])(u,{label:"行为",name:"behaviour"},{default:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(e.$slots,"behaviour",{},void 0,!0)]})),_:3})]})),_:3},8,["onTabClick","modelValue"])])}var be={name:"configTabsHoc",props:["activeName"],mounted:function(){},data:function(){return{active:this.activeName}},methods:{handleTabClick:function(e){console.log(e)}}};n("9552");const je=f()(be,[["render",fe],["__scopeId","data-v-07a3b0cd"]]);var me=je,pe=n("0c7c"),he=pe.keys(),ve=he.reduce((function(e,t){var n=pe(t);return e[n.default.name]=n.default,e}),{}),Oe={name:"configWrapper",components:Object(a["a"])({ConfigTabsHoc:me},ve),data:function(){return{activeName:"attr",currentComponent:ve["uiButtonConfig"]}}};n("8be4");const ye=f()(Oe,[["render",ee],["__scopeId","data-v-41515b5b"]]);var ke=ye,ge=function(e){return Object(c["pushScopeId"])("data-v-6a29ff90"),e=e(),Object(c["popScopeId"])(),e},xe={class:"mainWrapper"},Ne=ge((function(){return Object(c["createElementVNode"])("span",{class:"tit"},"快捷键：",-1)})),we={name:"Main"},Ce=Object.assign(we,{setup:function(e){var t=Object(c["reactive"])({jsonSchema:Object(r["h"])(),updateKey:0,stack:[],memo:{},active:!1,keyCodes:[],coping:!1}),n=Object(o["d"])();h({copy:function(){n.state.common.saveActiveSublineId?(t.coping=!0,Object(r["y"])("已复制","success")):Object(r["y"])("请选择要复制的组件")},paste:function(){if(t.coping){var e=t.jsonSchema,c=e.componentsTree,a=Object(r["j"])(c,n.state.common.saveActiveSublineId),o=a.node,i=a.parentNode,u=o.layout,s=void 0===u?{}:u,l=o.type,d=s.attr||{},f=d.x,b=d.y;i&&(Array.isArray(i.children)||(i.children=[]),i.children.push(Object(r["i"])(l,{attr:{x:f+60,y:b}})),t.coping=!1,t.updateKey++)}else Object(r["y"])("没有要粘贴的组件")}}),Object(c["onMounted"])((function(){n.commit("common/saveMenuAndBarElementInfo",Object(r["n"])()),t.keyCodes=Object.values(r["d"])}));var a=function(){t.stack=new r["g"],t.memo=new r["e"]};a(),Object(c["watch"])((function(){return t.updateKey}),(function(){var e=t.jsonSchema,c=t.stack,a=e.componentsTree;a.type?(c.push(JSON.parse(JSON.stringify(a))),t.active=!!a.children.length):t.active=!1,n.commit("common/saveTreeData",JSON.parse(JSON.stringify(a)))}));var i=function(){var e=t.jsonSchema,n=t.memo,c=e.componentsTree;if(c.type){var a=u()().format("YYYY-MM-DD HH:mm:ss");if(n.length&&Object(r["r"])(c,n.current))return void Object(r["y"])("保存成功-same","success");n.setMemo(a,JSON.parse(JSON.stringify(c))),Object(r["y"])("保存成功","success")}},s=function(e){var n=t.jsonSchema;n.componentsTree=e,t.updateKey++},l=function(){var e=t.stack,n=e.pop();s(n)},d=function(e){var n=t.jsonSchema,c=n.componentsTree,a=!1;function r(t){for(var n=0;n<t.length&&!a;n++)t[n].uid===e?(t.splice(n,1),a=!0):r(t[n].children)}r(c.children),t.updateKey++},f=function(e){var n=t.jsonSchema,c=n.componentsTree,a=e.dataTransfer.getData("ui-component-name");if(c.type||a===r["z"].CONTAINER){if(c.type){var o=Object(r["m"])(e),i=o.x,u=o.y,s=Object(r["k"])(e),l=s.uid,d=Object(r["j"])(c,l),f=d.node;Array.isArray(f.children)||(f.children=[]),f.children.push(Object(r["i"])(a.slice(2),{attr:{x:i,y:u}}))}else c.type="Container",c.uid=Object(r["p"])(),c.isRoot=!0,c.children=[];t.updateKey++}else Object(r["y"])("请选择交互组件")};return Object(c["provide"])("removeNode",d),function(e,n){var a=Object(c["resolveComponent"])("el-col"),r=Object(c["resolveComponent"])("el-row");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",xe,[Object(c["createVNode"])(r,{class:"topBarBox"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(a,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Object(c["unref"])(I),{onRevocation:l,onSave:i,onBack:s,active:Object(c["unref"])(t).active,memo:Object(c["unref"])(t).memo},null,8,["active","memo"])]})),_:1})]})),_:1}),Object(c["createVNode"])(r,{class:"mainBox"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(a,{span:3},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(K)]})),_:1}),Object(c["createVNode"])(a,{span:16},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(Q,{jsonSchema:Object(c["unref"])(t).jsonSchema,updateKey:Object(c["unref"])(t).updateKey,onDrop:f},null,8,["jsonSchema","updateKey"])]})),_:1}),Object(c["createVNode"])(a,{span:5},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(ke)]})),_:1})]})),_:1}),Object(c["createVNode"])(r,{class:"tipsBox"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(a,null,{default:Object(c["withCtx"])((function(){return[Ne,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(t).keyCodes,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:e.value},Object(c["toDisplayString"])(e.label)+"（"+Object(c["toDisplayString"])(e.value)+"）",1)})),128))]})),_:1})]})),_:1})])}}});n("25bb");const Se=f()(Ce,[["__scopeId","data-v-6a29ff90"]]);var Ve=Se,Ie=[{path:"/",redirect:"/main"},{path:"/main",component:Ve}],Be=Object(p["a"])({routes:Ie,history:Object(p["b"])()}),Ee=Be;function _e(){return{barAndMenuInfo:{menuWidth:"0px",barHeight:"0px"},tree:{},saveActiveSublineId:"",shortcutKeyInfo:""}}var Te={namespaced:!0,state:Object(a["a"])({},_e()),actions:{},mutations:{saveMenuAndBarElementInfo:function(e,t){e.barAndMenuInfo=Object(a["a"])({},t)},saveTreeData:function(e,t){e.tree=Object(a["a"])({},t)},saveActiveSublineId:function(e,t){e.saveActiveSublineId=t},saveShortcutKey:function(e,t){e.shortcutKeyInfo=t}}},De=!1,Ae=Object(o["b"])({modules:{common:Te},strict:De,plugins:De?[Object(o["a"])()]:[]}),Me=Ae,ze=Object(c["createApp"])(j);ze.use(Me),ze.use(m["a"]),ze.use(Ee),ze.mount("#app")},"5f33":function(e,t,n){"use strict";n("cb9e")},6882:function(e,t,n){},"6f87":function(e,t,n){"use strict";n("4723")},"703b":function(e,t,n){"use strict";n("e1c5")},"8be4":function(e,t,n){"use strict";n("b64c")},"8eca":function(e,t,n){"use strict";n("071e")},"923d":function(e,t,n){"use strict";n("f6e9")},9552:function(e,t,n){"use strict";n("4138")},"9dcb":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={key:0},r=Object(c["createElementVNode"])("div",null,"ssss",-1),o=[r],i={key:1};function u(e,t,n,r,u,s){return"attr"==n.activeName?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,o)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,"behaviour"))}var s={name:"uiButtonConfig",props:["activeName"],data:function(){return{attr:{},behaviour:{}}},mounted:function(){console.log(this.activeName,"activeName")}},l=n("6b0d"),d=n.n(l);const f=d()(s,[["render",u]]);t["default"]=f},b059:function(e,t,n){},b64c:function(e,t,n){},baed:function(e,t,n){var c={"./Button.vue":"2a7d","./Container.vue":"185a","./Input.vue":"1270","./Tag.vue":"c009"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="baed"},c009:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["createTextVNode"])("Tag 1");function r(e,t,n,r,o,i){var u=Object(c["resolveComponent"])("el-tag");return Object(c["openBlock"])(),Object(c["createBlock"])(u,{"data-id":"uiTag"},{default:Object(c["withCtx"])((function(){return[a]})),_:1})}var o={name:"uiTag"},i=n("6b0d"),u=n.n(i);const s=u()(o,[["render",r]]);t["default"]=s},cb9e:function(e,t,n){},e1c5:function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"w",(function(){return i})),n.d(t,"n",(function(){return u})),n.d(t,"z",(function(){return s})),n.d(t,"A",(function(){return l})),n.d(t,"u",(function(){return d})),n.d(t,"q",(function(){return f})),n.d(t,"y",(function(){return b})),n.d(t,"i",(function(){return j})),n.d(t,"k",(function(){return m})),n.d(t,"m",(function(){return p})),n.d(t,"t",(function(){return h})),n.d(t,"o",(function(){return v})),n.d(t,"x",(function(){return O})),n.d(t,"s",(function(){return y})),n.d(t,"v",(function(){return k})),n.d(t,"h",(function(){return g})),n.d(t,"p",(function(){return x})),n.d(t,"r",(function(){return N})),n.d(t,"l",(function(){return w})),n.d(t,"j",(function(){return C})),n.d(t,"f",(function(){return B})),n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return D})),n.d(t,"g",(function(){return A})),n.d(t,"e",(function(){return M}));n("ac1f"),n("5319"),n("d3b7"),n("b64b"),n("caad"),n("2532"),n("25f0");var c=n("3ef4"),a={uiButton:"按钮",uiContainer:"交互组件",uiInput:"输入框",uiTag:"标签"},r={x:"left",y:"top",w:"width",h:"height"},o={90:{label:"撤销",value:"ctrl+z"},72:{label:"历史",value:"ctrl+x"},83:{label:"保存",value:"ctrl+s"},67:{label:"复制",value:"ctrl+c"},86:{label:"粘贴",value:"ctrl+v"}},i=function(e){return 1*e.replace("px","")},u=function(){var e=document.getElementsByClassName("stockWrapper")[0],t=document.getElementsByClassName("topBarWrapper")[0],n=getComputedStyle(e),c=n.width,a=getComputedStyle(t),r=a.height;return{menuWidth:c,barHeight:r}},s={ROOT:"canvas",CONTAINER:"uiContainer"},l="ui",d=function(e){return a[e]},f=function(e){return Array.isArray(e)?!!e.length:"[object Object]"===Object.prototype.toString.call(e)&&!!Object.keys(e).length},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";c["a"][t](e)},j=function(e,t){return{type:e,layout:t,children:[],uid:x()}},m=function(e){var t=e.target||e;while(!t.className.includes(s.CONTAINER))t=t.parentNode;return{uid:t.getAttribute("uid"),el:t}},p=function(e){return{x:e.clientX,y:e.clientY}},h=function(e,t){var n=e.attr,c=t.w,a={},o=u(),s=o.menuWidth,l=o.barHeight;for(var d in n){var f="left"==r[d]?n[d]-(c>>1):n[d];"left"==r[d]&&Math.abs(n[d]-i(s))<c>>1&&(f=i(s)),"top"==r[d]&&Math.abs(n[d]-i(l))<10&&(f=i(l)),a[r[d]]=f+"px"}return{attribute:a}},v=function(){var e=document.getElementById("root"),t=getComputedStyle(e),n=t.width,c=t.height;return{width:n,height:c}},O=function(e){var t=v(),n=t.width,c=t.height,a=u(),r=a.menuWidth,o=a.barHeight,s=e.top,l=e.left;this.$refs["subline-x"].style=y({width:n,height:"1px",top:i(s)+"px",left:i(r)+"px",position:"fixed",background:"blue"}),this.$refs["subline-y"].style=y({width:"1px",height:c,left:i(l)+"px",top:i(o)+"px",position:"fixed",background:"blue"})},y=function(e){var t="";for(var n in e)t+=n+":"+e[n]+";";return t},k=function(e){return e},g=function(){return{componentsTree:{},query:void 0}},x=function(){var e=(new Date).getTime();window.performance&&"function"===typeof window.performance.now&&(e+=performance.now());var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t},N=function e(t,n){return!(null==t&&null!=n||null!=t&&null==n)&&(null==t&&null==n||t.uid==n.uid&&(t.children.length==n.children.length&&t.children.every((function(t,c){return e(t,n.children[c])}))))},w=function e(t,n,c){var a=t.children,r=void 0===a?[]:a,o=t.layout,i=void 0===o?{}:o,u=t.type,s=i.attr,l=void 0===s?{}:s,d=l.x,f=void 0===d?0:d,b=l.y,j=void 0===b?0:b,m=null,p=Math.abs(f-c.clientX),h=Math.abs(j-c.clientY),v=Math.sqrt(Math.pow(p,2)+Math.pow(h,2));v<n&&'"Container"'!==u&&(m=t);for(var O=0;O<r.length&&!m;O++)m=e(r[O],n,c);return m},C=function(e,t){var n=[e],c=null,a=null;while(n.length){var r=n.shift();if(r.uid===t)n.length=0,c=r;else if(Array.isArray(r.children)&&r.children.length){a=r;for(var o=0;o<r.children.length;o++)n.push(r.children[o])}}return{node:c,parentNode:a}},S=n("ade3"),V=n("d4ec"),I=n("bee2"),B=(n("159b"),function(){function e(t,n){Object(V["a"])(this,e),this.vnode=t,n.attach(this)}return Object(I["a"])(e,[{key:"update",value:function(e,t){this.vnode.updateDraging(e),"function"===typeof t&&t()}}]),e}()),E=function(){function e(){Object(V["a"])(this,e),this.obs=[]}return Object(I["a"])(e,[{key:"attach",value:function(e){this.obs.push(e)}},{key:"notify",value:function(e){this.obs.forEach((function(t){t.update(e)}))}}],[{key:"getInstance",value:function(){return e.instance?e.instance:e.instance=new e}}]),e}();Object(S["a"])(E,"instance",null);var _=function(){function e(){Object(V["a"])(this,e),this.actives=[]}return Object(I["a"])(e,[{key:"attach",value:function(e){this.actives.push(e)}},{key:"update",value:function(e){this.actives.forEach((function(t){t[e]=!1}))}}],[{key:"getInstance",value:function(){return e.instance?e.instance:e.instance=new e}}]),e}();Object(S["a"])(_,"instance",null);n("fb6a");var T=function(){function e(){Object(V["a"])(this,e)}return Object(I["a"])(e,[{key:"on",value:function(e,t,n){var c=this.e||(this.e={});return(c[e]||(c[e]=[])).push({fn:t,ctx:n}),this}},{key:"once",value:function(e,t,n){var c=this;function a(){c.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)}},{key:"emit",value:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),c=0,a=n.length;for(c;c<a;c++)n[c].fn.apply(n[c].ctx,t);return this}},{key:"off",value:function(e,t){var n=this.e||(this.e={}),c=n[e],a=[];if(c&&t)for(var r=0,o=c.length;r<o;r++)c[r].fn!==t&&c[r].fn._!==t&&a.push(c[r]);return a.length?n[e]=a:delete n[e],this}}],[{key:"getInstance",value:function(){return e.Instance?e.Instance:e.Instance=new e}}]),e}();Object(S["a"])(T,"Instance",null);var D=T.getInstance(),A=function(){function e(){Object(V["a"])(this,e),this.stack=[]}return Object(I["a"])(e,[{key:"push",value:function(e){this.stack.push(e)}},{key:"pop",value:function(){return this.stack.pop(),this.stack.pop()}}]),e}(),M=function(){function e(){Object(V["a"])(this,e),this.memos={},this.length=0,this.current=null}return Object(I["a"])(e,[{key:"getMemo",value:function(e){return this.memos[e]}},{key:"setMemo",value:function(e,t){this.length++,this.current=t,this.memos[e]=t}}]),e}()},f6e9:function(e,t,n){}});
//# sourceMappingURL=app.e92feed0.js.map