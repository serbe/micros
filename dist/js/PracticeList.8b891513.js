(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PracticeList"],{"0f81":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("bulma-table",{attrs:{name:"practice",names:["Дата тренировки","Тип тренировки","Организация"],columns:["date_str","kind_name","company_name"],tableData:t.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["nowrap","","is-hidden-mobile"],cellTypes:["text","text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},s=[],i=a("a84d"),c=a("c546"),r={name:"PracticeList",components:{"bulma-table":i["a"]},mixins:[c["a"]],mounted:function(){this.fetchData("practices")},methods:{createList:function(t){var e=[];return t&&(e=t.map(function(t){var e=[t.date_str,t.kind_name,t.company_name];return t.str=e.join(" ").toLowerCase(),t})),e}}},o=r,l=a("2877"),u=Object(l["a"])(o,n,s,!1,null,null,null);u.options.__file="PracticeList.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=PracticeList.8b891513.js.map