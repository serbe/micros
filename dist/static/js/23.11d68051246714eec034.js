webpackJsonp([23],{"9BJH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bM54"),s=n("r6gH"),r={name:"departments",components:{"vue-table":a.a},mixins:[s.a],mounted:function(){this.fetchData("departments")},methods:{createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.note];return e.str=t.join(" ").toLowerCase(),e})),t}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("vue-table",{attrs:{name:"department",names:["Наименование отдела","Заметка"],columns:["name","note"],tableData:this.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile"],cellTypes:["text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},staticRenderFns:[]},l=n("VU/8")(r,i,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=23.11d68051246714eec034.js.map