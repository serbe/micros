webpackJsonp([22],{H16F:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bM54"),s=n("r6gH"),r={name:"educations",components:{"vue-table":a.a},mixins:[s.a],mounted:function(){this.fetchData("educations")},methods:{createList:function(t){var e=[];return t&&(e=t.map(function(t){var e=[t.contact_name,t.start_str,t.end_str];return t.str=e.join(" ").toLowerCase(),t})),e}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("vue-table",{attrs:{name:"education",names:["Обучаемый","Должность ГО ЧС","Начало обучения","Конец обучения"],columns:["contact_name","post_name","start_str","end_str"],tableData:t.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile","","is-hidden-mobile"],cellTypes:["text","text","text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},o=[],c={render:i,staticRenderFns:o},l=c,u=n("VU/8"),d=u(r,l,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=22.9427fe1bc640c1122c31.js.map