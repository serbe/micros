webpackJsonp([16],{W0Ek:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("OJ3Z"),a=n("r6gH"),i={name:"SirenTypeList",components:{"bulma-table":s.a},mixins:[a.a],mounted:function(){this.fetchData("sirentypes","siren_types")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.radius,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("bulma-table",{attrs:{name:"sirenType",names:["Тип сирены","Радиус","Заметка"],columns:["name","radius","note"],tableData:this.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","","is-hidden-mobile"],cellTypes:["text","text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},staticRenderFns:[]},l=n("VU/8")(i,r,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=16.a9ba2063f320d7405dfd.js.map