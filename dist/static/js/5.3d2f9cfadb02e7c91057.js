webpackJsonp([5],{H3tg:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"\n.columns[data-v-21eabd20] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-21eabd20] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-21eabd20] {\n  width: 300px !important;\n}\n","",{version:3,sources:["C:/github/vugo/src/components/rank/Rank.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB",file:"Rank.vue",sourcesContent:["\n.columns[data-v-21eabd20] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-21eabd20] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-21eabd20] {\n  width: 300px !important;\n}\n"],sourceRoot:""}])},ZwKZ:function(t,n,e){var a=e("H3tg");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("86d06eec",a,!0)},zOIG:function(t,n,e){"use strict";function a(t){e("ZwKZ")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("mvHQ"),r=e.n(o),i=e("GE6z"),s=e("MeX/"),c=e("OOvn"),u={name:"rank",components:{"vue-input":i.a,"vue-button":s.a},data:function(){return{title:"",rank:{id:0,name:"",note:""}}},created:function(){this.fetchData()},methods:{submit:function(){var t=this,n="ranks",e="POST";"0"!==this.$route.params.id&&(n=n+"/"+this.$route.params.id,e="PUT");var a=this.rank;Object(c.a)({url:n,method:e,mode:"cors",data:r()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/ranks")},delete:function(){},fetchData:function(){var t=this;Object(c.a)({url:"ranks/"+this.$route.params.id,method:"GET"}).then(function(n){t.rank=n.data.rank,t.isLoaded=!0})}}},d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container mw768"},[e("form",{attrs:{model:t.rank,id:"rank"}},[e("vue-input",{attrs:{label:"",placeholder:"Наименование чина",iconLeft:"tag"},model:{value:t.rank.name,callback:function(n){t.$set(t.rank,"name",n)},expression:"rank.name"}}),t._v(" "),e("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.rank.note,callback:function(n){t.$set(t.rank,"note",n)},expression:"rank.note"}}),t._v(" "),e("div",{staticClass:"field is-grouped is-grouped-centered"},[e("div",{staticClass:"control"},[e("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),e("div",{staticClass:"control"},[e("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),e("div",{staticClass:"control"},[e("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},l=[],m={render:d,staticRenderFns:l},v=m,p=e("VU/8"),f=a,b=p(u,v,!1,f,"data-v-21eabd20",null);n.default=b.exports}});
//# sourceMappingURL=5.3d2f9cfadb02e7c91057.js.map