(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DepartmentItem"],{"41ee":function(t,e,a){"use strict";var n=a("f52d"),o=a.n(n);o.a},cf4a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mw768"},[a("form",{attrs:{model:t.department,id:"department"}},[a("bulma-input",{attrs:{label:"",placeholder:"Наименование отдела",iconLeft:"tag"},model:{value:t.department.name,callback:function(e){t.$set(t.department,"name",e)},expression:"department.name"}}),a("bulma-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.department.note,callback:function(e){t.$set(t.department,"note",e)},expression:"department.note"}}),a("div",{staticClass:"field is-grouped is-grouped-centered"},[a("div",{staticClass:"control"},[a("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),a("div",{staticClass:"control"},[a("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),a("div",{staticClass:"control"},[a("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},o=[],r=a("e653"),c=a("e04f"),i={id:0,name:"",note:""},s=a("0036"),l=a("2af4"),m=a("8daa"),d={name:"DepartmentItem",components:{"bulma-button":r["a"],"bulma-input":c["a"]},mixins:[l["a"],s["a"]],data:function(){return{title:"",department:i}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="departments",a="POST";"0"!==this.$route.params.id&&(e="".concat(e,"/").concat(this.$route.params.id),a="PUT");var n=this.department;Object(m["a"])({url:e,method:a,mode:"cors",data:JSON.stringify(n)}).then(function(){t.close()})},delete:function(){},fetchData:function(){this.fetchItem("departments",["department"])}}},u=d,p=(a("41ee"),a("2877")),f=Object(p["a"])(u,n,o,!1,null,"00639d3f",null);e["default"]=f.exports},f52d:function(t,e,a){}}]);
//# sourceMappingURL=DepartmentItem.a24fade0.js.map