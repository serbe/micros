webpackJsonp([20],{D0FY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("bM54"),a=n("r6gH"),i={name:"posts",components:{"vue-table":s.a},mixins:[a.a],mounted:function(){this.fetchData("posts")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("vue-table",{attrs:{name:"post",names:["Наименование должности","ГО","Заметка"],columns:["name","go","note"],tableData:this.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","w9","is-hidden-mobile"],cellTypes:["text","checkbox","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},staticRenderFns:[]},o=n("VU/8")(i,r,!1,null,null,null);t.default=o.exports}});
//# sourceMappingURL=20.70e92383b1dc48a4bcfe.js.map