webpackJsonp([23],{"9BJH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bM54"),s=n("r6gH"),r={name:"departments",components:{"vue-table":a.a},mixins:[s.a],mounted:function(){this.fetchData("departments")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("vue-table",{attrs:{name:"department",names:["Наименование отдела","Заметка"],columns:["name","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile"],cellTypes:["text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},l=[],o={render:i,staticRenderFns:l},u=o,c=n("VU/8"),d=c(r,u,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=23.1a22c11691207381e1b8.js.map