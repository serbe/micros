webpackJsonp([14],{"4AkI":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bM54"),s=n("OOvn"),i={name:"sirenTypes",components:{"vue-table":a.a},data:function(){return{fetched:!1,list:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.fetched||Object(s.a)({url:"sirentypes",method:"GET"}).then(function(t){e.list=e.createList(t.data.siren_types),e.fetched=!0})},createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.radius,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("vue-table",{attrs:{name:"sirenType",names:["Тип сирены","Радиус","Заметка"],columns:["name","radius","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},c=[],l={render:r,staticRenderFns:c},o=l,u=n("VU/8"),d=u(i,o,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=14.b723b405335b23d8ecc2.js.map