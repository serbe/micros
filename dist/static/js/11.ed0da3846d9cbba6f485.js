webpackJsonp([11],{"4xQH":function(n,e,t){var a=t("vO9c");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("07d79121",a,!0)},Axxw:function(n,e,t){"use strict";function a(n){t("4xQH")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("bM54"),o=t("7lJq"),i=t("r6gH"),r={name:"contacts",components:{"vue-table":s.a},mixins:[o.a,i.a],mounted:function(){this.fetchData("contacts")},methods:{createList:function(n){var e=[];return n&&(e=n.map(function(n){var e=[n.name,n.company_name,n.post_name];n.phones.length>0&&""!==n.phones[0]&&e.push(n.phones.join(" ")),n.faxes.length>0&&""!==n.faxes[0]&&e.push(n.faxes.join(" "));var t=n;return t.str=e.join(" ").toLowerCase(),t})),e}}},c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("vue-table",{attrs:{name:"contact",names:["Фамилия Имя Отчество","Организация","Должность","Телефон","Факс"],columns:["name","company_name","post_name","phones","faxes"],tableData:n.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile","is-hidden-touch","w9 nowrap","is-hidden-mobile w9 nowrap"],cellTypes:["text","text","text","array","array"],pagination:"",hyper:"",search:"",adding:""}})],1)},l=[],p={render:c,staticRenderFns:l},u=p,m=t("VU/8"),d=a,h=m(r,u,!1,d,"data-v-3126b988",null);e.default=h.exports},vO9c:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Contacts.vue",sourceRoot:""}])}});
//# sourceMappingURL=11.ed0da3846d9cbba6f485.js.map