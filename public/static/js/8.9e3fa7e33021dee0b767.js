webpackJsonp([8],{c1pM:function(t,e,n){var a=n("tKby");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("8291e56c",a,!0)},jn5G:function(t,e,n){"use strict";function a(t){n("c1pM")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("mvHQ"),c=n.n(o),i=n("GE6z"),s=n("MeX/"),d=n("jKBc"),u=n("yaAr"),r=n("OOvn"),l={name:"education",components:{"vue-input":i.a,"vue-button":s.a,"vue-select":d.a,"vue-date":u.a},data:function(){return{title:"",education:{id:0,contact_id:0,contact:{id:0,name:""},post_id:0,post:{id:0,name:""},start_date:"",end_date:"",note:""},contacts:[{id:0,name:""}],posts:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="educations",n="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,n="PUT");var a=this.education;Object(r.a)({url:e,method:n,mode:"cors",data:c()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/educations")},delete:function(){},fetchData:function(){var t=this;Object(r.a)({url:"educations/"+this.$route.params.id,method:"GET"}).then(function(e){t.education=e.data.education,t.contacts=e.data.contacts,t.posts=e.data.posts,t.setSelect("education","contacts","contact","contact_id"),t.setSelect("education","posts","post","post_id"),t.isLoaded=!0})},onSelect:function(t,e){this.education[e]=t,this.education[e+"_id"]=t.id},setSelect:function(t,e,n,a){var o=this;this[t][n]=this[e].find(function(e){return e.id===o[t][a]})}}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mw768"},[n("form",{attrs:{model:t.education,id:"education"}},[n("vue-select",{attrs:{list:t.contacts,"selected-item":t.education.contact,label:"Полное имя обучаемого","item-name":"contact",icon:"user"},on:{select:t.onSelect}}),t._v(" "),n("vue-select",{attrs:{list:t.posts,"selected-item":t.education.post,label:"Должность ГО ЧС","item-name":"post",icon:"tag"},on:{select:t.onSelect}}),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("vue-date",{attrs:{label:"Дата начала обучения"},model:{value:t.education.start_date,callback:function(e){t.$set(t.education,"start_date",e)},expression:"education.start_date"}})],1),t._v(" "),n("div",{staticClass:"column"},[n("vue-date",{attrs:{label:"Дата конца обучения"},model:{value:t.education.end_date,callback:function(e){t.$set(t.education,"end_date",e)},expression:"education.end_date"}})],1)]),t._v(" "),n("vue-input",{attrs:{type:"text",label:"Заметка",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.education.note,callback:function(e){t.$set(t.education,"note",e)},expression:"education.note"}}),t._v(" "),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},v=[],p={render:m,staticRenderFns:v},f=p,h=n("VU/8"),b=a,C=h(l,f,!1,b,"data-v-442cf408",null);e.default=C.exports},tKby:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n.columns[data-v-442cf408] {\r\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-442cf408] {\r\n  margin-bottom: 0 !important;\n}\n.w300[data-v-442cf408] {\r\n  width: 300px !important;\n}\r\n","",{version:3,sources:["C:/github/vugo/src/components/education/Education.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB",file:"Education.vue",sourcesContent:["\n.columns[data-v-442cf408] {\r\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-442cf408] {\r\n  margin-bottom: 0 !important;\n}\n.w300[data-v-442cf408] {\r\n  width: 300px !important;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=8.9e3fa7e33021dee0b767.js.map