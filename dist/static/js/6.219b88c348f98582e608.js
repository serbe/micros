webpackJsonp([6],{"25v2":function(t,e){},jn5G:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),c=a.n(n),o=a("GE6z"),s=a("MeX/"),i=a("jKBc"),d=a("yaAr"),u=a("OOvn"),l={name:"education",components:{"vue-input":o.a,"vue-button":s.a,"vue-select":i.a,"vue-date":d.a},data:function(){return{title:"",education:{id:0,contact_id:0,contact:{id:0,name:""},post_id:0,post:{id:0,name:""},start_date:"",end_date:"",note:""},contacts:[{id:0,name:""}],posts:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="educations",a="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,a="PUT");var n=this.education;Object(u.a)({url:e,method:a,mode:"cors",data:c()(n)}).then(function(){t.close()})},close:function(){this.$router.push("/educations")},delete:function(){},fetchData:function(){var t=this;Object(u.a)({url:"educations/"+this.$route.params.id,method:"GET"}).then(function(e){t.education=e.data.education,t.contacts=e.data.contacts,t.posts=e.data.posts,t.setSelect("education","contacts","contact","contact_id"),t.setSelect("education","posts","post","post_id"),t.isLoaded=!0})},onSelect:function(t,e){this.education[e]=t,this.education[e+"_id"]=t.id},setSelect:function(t,e,a,n){var c=this;this[t][a]=this[e].find(function(e){return e.id===c[t][n]})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mw768"},[a("form",{attrs:{model:t.education,id:"education"}},[a("vue-select",{attrs:{list:t.contacts,"selected-item":t.education.contact,label:"Полное имя обучаемого","item-name":"contact",icon:"user"},on:{select:t.onSelect}}),t._v(" "),a("vue-select",{attrs:{list:t.posts,"selected-item":t.education.post,label:"Должность ГО ЧС","item-name":"post",icon:"tag"},on:{select:t.onSelect}}),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("vue-date",{attrs:{label:"Дата начала обучения"},model:{value:t.education.start_date,callback:function(e){t.$set(t.education,"start_date",e)},expression:"education.start_date"}})],1),t._v(" "),a("div",{staticClass:"column"},[a("vue-date",{attrs:{label:"Дата конца обучения"},model:{value:t.education.end_date,callback:function(e){t.$set(t.education,"end_date",e)},expression:"education.end_date"}})],1)]),t._v(" "),a("vue-input",{attrs:{type:"text",label:"Заметка",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.education.note,callback:function(e){t.$set(t.education,"note",e)},expression:"education.note"}}),t._v(" "),a("div",{staticClass:"field is-grouped is-grouped-centered"},[a("div",{staticClass:"control"},[a("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),a("div",{staticClass:"control"},[a("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),a("div",{staticClass:"control"},[a("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var v=a("VU/8")(l,r,!1,function(t){a("25v2")},"data-v-56c3f554",null);e.default=v.exports}});
//# sourceMappingURL=6.219b88c348f98582e608.js.map