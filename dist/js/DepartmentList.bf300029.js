(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DepartmentList"],{ea9c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("bulma-table",{attrs:{name:"department",names:["Наименование отдела","Заметка"],columns:["name","note"],tableData:t.list,tableClasses:"is-narrow is-striped fullwidth",headClasses:["","is-hidden-mobile"],cellTypes:["text","text"],pagination:"",hyper:"",search:"",adding:""}})],1)},s=[],i=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("a84d")),r=a("c546"),l={name:"DepartmentList",components:{"bulma-table":i["a"]},mixins:[r["a"]],mounted:function(){this.fetchData("departments")},methods:{createList:function(t){var e=[];return t&&(e=t.map(function(t){var e=[t.name,t.note];return t.str=e.join(" ").toLowerCase(),t})),e}}},o=l,c=a("2877"),m=Object(c["a"])(o,n,s,!1,null,null,null);m.options.__file="DepartmentList.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=DepartmentList.bf300029.js.map