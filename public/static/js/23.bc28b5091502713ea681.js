webpackJsonp([23],{Axxw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("bM54"),s=a("7lJq"),i=a("OOvn"),o={name:"contacts",components:{"vue-table":n.a},mixins:[s.a],data:function(){return{fetched:!1,list:[]}},created:function(){this.fetchData()},watch:{$route:function(){this.fetchData()}},methods:{fetchData:function(){var e=this;this.fetched||Object(i.a)({url:"contacts",method:"GET"}).then(function(t){e.list=e.createList(t.data.contacts),e.fetched=!0})},createList:function(e){var t=[];return e&&(t=e.map(function(e){var t=[e.name,e.company_name,e.post_name];e.phones.length>0&&""!==e.phones[0]&&t.push(e.phones.join(" ")),e.faxes.length>0&&""!==e.faxes[0]&&t.push(e.faxes.join(" "));var a=e;return a.str=t.join(" ").toLowerCase(),a})),t}}},c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("vue-table",{attrs:{name:"contact",names:["Фамилия Имя Отчество","Организация","Должность","Телефон","Факс"],columns:["name","company_name","post_name","phones","faxes"],tableData:e.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile","is-hidden-touch","w9 nowrap","is-hidden-mobile w9 nowrap"],cellTypes:["text","text","text","array","array"],pagination:"",hyper:"",search:"",adding:""}})],1)},r=[],l={render:c,staticRenderFns:r},h=l,u=a("VU/8"),d=u(o,h,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=23.bc28b5091502713ea681.js.map