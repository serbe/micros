webpackJsonp([16],{k1oY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bM54"),s=n("OOvn"),i={name:"scopes",components:{"vue-table":a.a},data:function(){return{fetched:!1,list:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.fetched||Object(s.a)({url:"scopes",method:"GET"}).then(function(t){e.list=e.createList(t.data.scopes),e.fetched=!0})},createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("vue-table",{attrs:{name:"scope",names:["Сфера деятельности","Заметка"],columns:["name","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},c=[],o={render:r,staticRenderFns:c},l=o,u=n("VU/8"),d=u(i,l,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=16.64b058854fa60c3ce313.js.map