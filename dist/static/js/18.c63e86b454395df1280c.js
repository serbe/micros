webpackJsonp([18],{P08C:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("bM54"),s=a("r6gH"),r={name:"practices",components:{"vue-table":n.a},mixin:[s.a],mounted:function(){this.fetchData("practices")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.date_str,e.kind_name,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("vue-table",{attrs:{name:"practice",names:["Дата тренировки","Тип тренировки","Организация"],columns:["date_str","kind_name","company_name"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["nowrap","","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},c=[],o={render:i,staticRenderFns:c},l=o,u=a("VU/8"),d=u(r,l,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=18.c63e86b454395df1280c.js.map