webpackJsonp([20],{ImTA:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("bM54"),s=t("r6gH"),i={name:"kinds",components:{"vue-table":a.a},mixin:[s.a],mounted:function(){this.fetchData("kinds")},methods:{createList:function(e){var n=[];return e&&(n=e.map(function(e){var n=[e.name,e.short_name,e.note],t=e;return t.str=n.join(" ").toLowerCase(),t})),n}}},r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("vue-table",{attrs:{name:"kind",names:["Тип тренировки","Сокращенное наименование","Заметка"],columns:["name","short_name","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},o=[],l={render:r,staticRenderFns:o},u=l,c=t("VU/8"),d=c(i,u,!1,null,null,null);n.default=d.exports}});
//# sourceMappingURL=20.e33891d287a5f4998dfb.js.map