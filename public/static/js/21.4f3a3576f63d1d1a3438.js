webpackJsonp([21],{H16F:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("bM54"),s=a("OOvn"),i={name:"educations",components:{"vue-table":n.a},data:function(){return{fetched:!1,list:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.fetched||Object(s.a)({url:"educations",method:"GET"}).then(function(e){t.list=t.createList(e.data.educations),t.fetched=!0})},createList:function(t){var e=[];return t&&(e=t.map(function(t){var e=[t.contact_name,t.start_str,t.end_str];return t.str=e.join(" ").toLowerCase(),t})),e}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("vue-table",{attrs:{name:"education",names:["Обучаемый","Должность ГО ЧС","Начало обучения","Конец обучения"],columns:["contact_name","post_name","start_str","end_str"],tableData:t.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile","","is-hidden-mobile"],cellTypes:["text","text","text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},c=[],o={render:r,staticRenderFns:c},d=o,l=a("VU/8"),u=l(i,d,!1,null,null,null);e.default=u.exports}});
//# sourceMappingURL=21.4f3a3576f63d1d1a3438.js.map