webpackJsonp([26],{GNAq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bM54"),s=n("r6gH"),i={components:{"vue-table":a.a},mixins:[s.a],mounted:function(){this.fetchData("certificates")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.num,e.contact_name,e.company_name,e.cert_date,e.note],n=e;return n.str=t.join(" ").toLowerCase(),n})),t}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("vue-table",{attrs:{name:"certificate",names:["Номер","ФИО","УМЦ","Дата","Заметка"],columns:["num","contact_name","company_name","cert_date","note"],tableData:this.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile","nowrap","is-hidden-mobile"],cellTypes:["text","text","text","text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},staticRenderFns:[]},c=n("VU/8")(i,r,!1,null,null,null);t.default=c.exports}});
//# sourceMappingURL=26.ba5cfaae276d2c7498f1.js.map