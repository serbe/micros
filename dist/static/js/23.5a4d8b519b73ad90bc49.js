webpackJsonp([23],{ZSIF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("bK8B"),s=a("r6gH"),i={name:"EducationList",components:{"bulma-table":n.a},mixins:[s.a],mounted:function(){this.fetchData("educations")},methods:{createList:function(t){var e=[];return t&&(e=t.map(function(t){var e=[t.contact_name,t.start_str,t.end_str];return t.str=e.join(" ").toLowerCase(),t})),e}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("bulma-table",{attrs:{name:"education",names:["Обучаемый","Должность ГО ЧС","Начало обучения","Конец обучения"],columns:["contact_name","post_name","start_str","end_str"],tableData:this.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile","","is-hidden-mobile"],cellTypes:["text","text","text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},staticRenderFns:[]},l=a("VU/8")(i,r,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=23.5a4d8b519b73ad90bc49.js.map