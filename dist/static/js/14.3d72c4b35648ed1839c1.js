webpackJsonp([14],{"4AkI":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("bM54"),a=n("r6gH"),r={name:"sirenTypes",components:{"vue-table":s.a},mixins:[a.a],mounted:function(){this.fetchData("sirentypes","siren_types")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.radius,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("vue-table",{attrs:{name:"sirenType",names:["Тип сирены","Радиус","Заметка"],columns:["name","radius","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},l=[],o={render:i,staticRenderFns:l},u=o,c=n("VU/8"),d=c(r,u,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=14.3d72c4b35648ed1839c1.js.map