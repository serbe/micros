webpackJsonp([17],{yJ31:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("bM54"),s=t("r6gH"),r={name:"ranks",components:{"vue-table":a.a},mixin:[s.a],mounted:function(){this.fetchData("ranks")},methods:{createList:function(e){var n=[];return e&&(n=e.map(function(e){var n=[e.name,e.note];return e.str=n.join(" ").toLowerCase(),e})),n}}},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("vue-table",{attrs:{name:"rank",names:["Наименование чина","Заметка"],columns:["name","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},l=[],o={render:i,staticRenderFns:l},u=o,c=t("VU/8"),d=c(r,u,!1,null,null,null);n.default=d.exports}});
//# sourceMappingURL=17.f825d34386f3b414b6f6.js.map