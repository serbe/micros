webpackJsonp([12],{"5s97":function(t,e,n){var a=n("KPeL");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("1d543216",a,!0)},KPeL:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"\n.columns[data-v-1dca38a8] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-1dca38a8] {\n  margin-bottom: 0 !important;\n}\n","",{version:3,sources:["C:/github/vugo/src/components/department/Department.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B",file:"Department.vue",sourcesContent:["\n.columns[data-v-1dca38a8] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-1dca38a8] {\n  margin-bottom: 0 !important;\n}\n"],sourceRoot:""}])},tOyO:function(t,e,n){"use strict";function a(t){n("5s97")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("mvHQ"),r=n.n(o),s=n("GE6z"),i=n("MeX/"),c=n("OOvn"),d={name:"department",components:{"vue-input":s.a,"vue-button":i.a},data:function(){return{title:"",department:{id:0,name:"",note:""}}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="departments",n="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,n="PUT");var a=this.department;Object(c.a)({url:e,method:n,mode:"cors",data:r()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/departments")},delete:function(){},fetchData:function(){var t=this;Object(c.a)({url:"departments/"+this.$route.params.id,method:"GET"}).then(function(e){t.department=e.data.department,t.isLoaded=!0})}}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mw768"},[n("form",{attrs:{model:t.department,id:"department"}},[n("vue-input",{attrs:{label:"",placeholder:"Наименование отдела",iconLeft:"tag"},model:{value:t.department.name,callback:function(e){t.$set(t.department,"name",e)},expression:"department.name"}}),t._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.department.note,callback:function(e){t.$set(t.department,"note",e)},expression:"department.note"}}),t._v(" "),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},u=[],l={render:m,staticRenderFns:u},p=l,v=n("VU/8"),f=a,h=v(d,p,!1,f,"data-v-1dca38a8",null);e.default=h.exports}});
//# sourceMappingURL=12.118ea13755322e89fca2.js.map