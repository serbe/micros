webpackJsonp([2],{VaTy:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.columns[data-v-752f5e20] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-752f5e20] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-752f5e20] {\n  width: 300px !important;\n}\n","",{version:3,sources:["C:/github/vugo/src/components/sirentype/SirenType.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB",file:"SirenType.vue",sourcesContent:["\n.columns[data-v-752f5e20] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-752f5e20] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-752f5e20] {\n  width: 300px !important;\n}\n"],sourceRoot:""}])},"Yq1/":function(e,t,n){"use strict";function i(e){n("zkN7")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("mvHQ"),s=n.n(o),a=n("GE6z"),r=n("MeX/"),c=n("OOvn"),u={name:"sirenType",components:{"vue-input":a.a,"vue-button":r.a},data:function(){return{title:"",sirenType:{id:0,name:"",radius:0,note:""}}},mounted:function(){this.fetchData()},methods:{submit:function(){var e=this,t="sirentypes",n="POST";"0"!==this.$route.params.id&&(t=t+"/"+this.$route.params.id,n="PUT");var i=this.sirenType;Object(c.a)({url:t,method:n,mode:"cors",data:s()(i)}).then(function(){e.close()})},close:function(){this.$router.push("/sirentypes")},delete:function(){},fetchData:function(){var e=this;Object(c.a)({url:"sirentypes/"+this.$route.params.id,method:"GET"}).then(function(t){e.sirenType=t.data.siren_type,e.isLoaded=!0})}}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mw768"},[n("form",{attrs:{model:e.sirenType,id:"sirenType"}},[n("vue-input",{attrs:{label:"",placeholder:"Тип сирены",iconLeft:"tag"},model:{value:e.sirenType.name,callback:function(t){e.$set(e.sirenType,"name",t)},expression:"sirenType.name"}}),e._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Радиус действия сирены (метры)",iconLeft:"circle-o",type:"number"},model:{value:e.sirenType.radius,callback:function(t){e.$set(e.sirenType,"radius",t)},expression:"sirenType.radius"}}),e._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:e.sirenType.note,callback:function(t){e.$set(e.sirenType,"note",t)},expression:"sirenType.note"}}),e._v(" "),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:e.submit}})],1),e._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Закрыть"},on:{click:e.close}})],1),e._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},p=[],d={render:l,staticRenderFns:p},m=d,v=n("VU/8"),f=i,y=v(u,m,!1,f,"data-v-752f5e20",null);t.default=y.exports},zkN7:function(e,t,n){var i=n("VaTy");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("38ae3efa",i,!0)}});
//# sourceMappingURL=2.a64829de094695f2d9be.js.map