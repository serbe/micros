webpackJsonp([26],{GNAq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bM54"),s=n("r6gH"),i={components:{"vue-table":a.a},mixins:[s.a],mounted:function(){this.fetchData("certificates")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.num,e.contact_name,e.company_name,e.cert_date,e.note],n=e;return n.str=t.join(" ").toLowerCase(),n})),t}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("vue-table",{attrs:{name:"certificate",names:["Номер","ФИО","УМЦ","Дата","Заметка"],columns:["num","contact_name","company_name","cert_date","note"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile","nowrap","is-hidden-mobile"],pagination:"",hyper:"",search:"",adding:""}})],1)},c=[],o={render:r,staticRenderFns:c},l=o,u=n("VU/8"),d=u(i,l,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=26.3392d2d52615402c6a2a.js.map