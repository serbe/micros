(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ContactList"],{"2af4":function(t,n,e){"use strict";e("a481"),e("ac6a");n["a"]={methods:{checkArray:function(t,n){var e=-1,a=0,i=0;return t.forEach(function(t,r){""===t[n]?(-1===e&&(e=r),a+=1):i+=1}),a>1&&t.splice(e,1),i===t.length},filterArray:function(t,n){return t.filter(function(t){return t[n]&&""!==t[n]})},telephone:function(t){var n=t;return void 0!==n&&n.length>0&&(n=n.replace(/[^0-9]/g,""),10===n.length&&(n=n.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/,"+7 ($1) $2-$3-$4")),11===n.length&&("8"===n[0]&&(n="7".concat(n.slice(1))),n=n.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 ($2) $3-$4-$5")),7===n.length&&(n=n.replace(/(\d{3})(\d{2})(\d{2})/,"$1-$2-$3"))),n}}}},"517a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("bulma-table",{attrs:{name:"contact",names:["Фамилия Имя Отчество","Организация","Должность","Телефон","Факс"],columns:["name","company_name","post_name","phones","faxes"],tableData:t.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile","is-hidden-touch","w9 nowrap","is-hidden-mobile w9 nowrap"],cellTypes:["text","text","text","array","array"],pagination:"",hyper:"",search:"",adding:""}})],1)},i=[],r=(e("7f7f"),e("a84d")),s=e("2af4"),o=e("c546"),c={name:"ContactList",components:{"bulma-table":r["a"]},mixins:[s["a"],o["a"]],mounted:function(){this.fetchData("contacts")},methods:{createList:function(t){var n=[];return t&&(n=t.map(function(t){var n=[t.name,t.company_name,t.post_name];t.phones.length>0&&""!==t.phones[0]&&n.push(t.phones.join(" ")),t.faxes.length>0&&""!==t.faxes[0]&&n.push(t.faxes.join(" "));var e=t;return e.str=n.join(" ").toLowerCase(),e})),n}}},l=c,u=(e("5202"),e("2877")),d=Object(u["a"])(l,a,i,!1,null,"bde07a88",null);d.options.__file="ContactList.vue";n["default"]=d.exports},5202:function(t,n,e){"use strict";var a=e("c199"),i=e.n(a);i.a},a481:function(t,n,e){e("214f")("replace",2,function(t,n,e){return[function(a,i){"use strict";var r=t(this),s=void 0==a?void 0:a[n];return void 0!==s?s.call(a,r,i):e.call(String(r),a,i)},e]})},c199:function(t,n,e){}}]);
//# sourceMappingURL=ContactList.b5732cea.js.map