webpackJsonp([26],{GNAq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("bM54"),i=a("OOvn"),c={components:{"vue-table":n.a},data:function(){return{fetched:!1,list:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.fetched||Object(i.a)({url:"certificates",method:"GET"}).then(function(t){e.list=e.createList(t.data.certificates),e.fetched=!0})},createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.num,e.contact_name,e.company_name,e.cert_date,e.note],a=e;return a.str=t.join(" ").toLowerCase(),a})),t}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("vue-table",{attrs:{name:"certificate",names:["Номер","ФИО","УМЦ","Дата","Заметка"],columns:["num","contact_name","company_name","cert_date","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile","nowrap","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},r=[],o={render:s,staticRenderFns:r},l=o,u=a("VU/8"),d=u(c,l,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=26.592ba79eecf9f5eacd6c.js.map