webpackJsonp([4],{ZuL4:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"\n.columns[data-v-88f2ca1a] {\r\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-88f2ca1a] {\r\n  margin-bottom: 0 !important;\n}\n.w300[data-v-88f2ca1a] {\r\n  width: 300px !important;\n}\r\n","",{version:3,sources:["C:/github/vugo/src/components/kind/Kind.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB",file:"Kind.vue",sourcesContent:["\n.columns[data-v-88f2ca1a] {\r\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-88f2ca1a] {\r\n  margin-bottom: 0 !important;\n}\n.w300[data-v-88f2ca1a] {\r\n  width: 300px !important;\n}\r\n"],sourceRoot:""}])},ktxx:function(t,n,e){"use strict";function a(t){e("zlW6")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("mvHQ"),i=e.n(o),r=e("GE6z"),s=e("MeX/"),c=e("OOvn"),d={name:"kind",components:{"vue-input":r.a,"vue-button":s.a},data:function(){return{title:"",kind:{id:0,name:"",short_name:"",note:""}}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,n="kinds",e="POST";"0"!==this.$route.params.id&&(n=n+"/"+this.$route.params.id,e="PUT");var a=this.kind;Object(c.a)({url:n,method:e,mode:"cors",data:i()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/kinds")},delete:function(){},fetchData:function(){var t=this;Object(c.a)({url:"kinds/"+this.$route.params.id,method:"GET"}).then(function(n){t.kind=n.data.kind,t.isLoaded=!0})}}},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container mw768"},[e("form",{attrs:{model:t.kind,id:"kind"}},[e("vue-input",{attrs:{label:"",placeholder:"Наименование типа тренировки",iconLeft:"tag"},model:{value:t.kind.name,callback:function(n){t.$set(t.kind,"name",n)},expression:"kind.name"}}),t._v(" "),e("vue-input",{attrs:{label:"",placeholder:"Сокращенное наименование",iconLeft:"tag"},model:{value:t.kind.short_name,callback:function(n){t.$set(t.kind,"short_name",n)},expression:"kind.short_name"}}),t._v(" "),e("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.kind.note,callback:function(n){t.$set(t.kind,"note",n)},expression:"kind.note"}}),t._v(" "),e("div",{staticClass:"field is-grouped is-grouped-centered"},[e("div",{staticClass:"control"},[e("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),e("div",{staticClass:"control"},[e("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),e("div",{staticClass:"control"},[e("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},l=[],m={render:u,staticRenderFns:l},v=m,p=e("VU/8"),f=a,h=p(d,v,!1,f,"data-v-88f2ca1a",null);n.default=h.exports},zlW6:function(t,n,e){var a=e("ZuL4");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("1007a301",a,!0)}});
//# sourceMappingURL=4.773ee46a14d66a7a7228.js.map