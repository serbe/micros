webpackJsonp([9],{D8lR:function(t,e,i){var c=i("ht+6");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);i("rjj0")("4c21b454",c,!0)},"Y5u+":function(t,e,i){"use strict";function c(t){i("D8lR")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),n=i.n(a),o=i("GE6z"),r=i("MeX/"),s=i("jKBc"),l=i("yaAr"),u=i("OOvn"),d={name:"certificate",components:{"vue-input":o.a,"vue-button":r.a,"vue-select":s.a,"vue-date":l.a},data:function(){return{title:"",certificate:{id:0,num:"",contact_id:0,contact:{id:0,name:""},company_id:0,company:{id:0,name:""},cert_date:"",note:""},contacts:[{id:0,name:""}],companies:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{onSelect:function(t,e){this.certificate[e]=t,this.certificate[e+"_id"]=t.id},submit:function(){var t=this,e="certificates",i="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,i="PUT");var c=this.certificate;Object(u.a)({url:e,method:i,mode:"cors",data:n()(c)}).then(function(){t.close()})},close:function(){this.$router.push("/certificates")},delete:function(){},fetchData:function(){var t=this;Object(u.a)({url:"certificates/"+this.$route.params.id,method:"GET"}).then(function(e){t.certificate=e.data.certificate,t.contacts=e.data.contacts,t.companies=e.data.companies,t.isLoaded=!0})}}},m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mw768"},[i("form",{attrs:{model:t.certificate,id:"certificate"}},[i("vue-input",{attrs:{label:"",placeholder:"Серийный номер удостоверения",iconLeft:"tag"},model:{value:t.certificate.num,callback:function(e){t.$set(t.certificate,"num",e)},expression:"certificate.num"}}),t._v(" "),i("vue-select",{attrs:{list:t.contacts,"selected-item":t.certificate.contact,"item-name":"contact",label:"Полное имя",icon:"user"},on:{select:t.onSelect}}),t._v(" "),i("vue-select",{attrs:{list:t.companies,"selected-item":t.certificate.company,"item-name":"company",label:"Учебно методический центр",icon:"building"},on:{select:t.onSelect}}),t._v(" "),i("vue-date",{attrs:{label:"Дата выдачи"},model:{value:t.certificate.cert_date,callback:function(e){t.$set(t.certificate,"cert_date",e)},expression:"certificate.cert_date"}}),t._v(" "),i("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.certificate.note,callback:function(e){t.$set(t.certificate,"note",e)},expression:"certificate.note"}}),t._v(" "),i("div",{staticClass:"field is-grouped is-grouped-centered"},[i("div",{staticClass:"control"},[i("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),i("div",{staticClass:"control"},[i("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),i("div",{staticClass:"control"},[i("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},f=[],v={render:m,staticRenderFns:f},p=v,h=i("VU/8"),b=c,C=h(d,p,!1,b,"data-v-2d327235",null);e.default=C.exports},"ht+6":function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"\n.columns[data-v-2d327235] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-2d327235] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-2d327235] {\n  width: 300px !important;\n}\n","",{version:3,sources:["C:/github/vugo/src/components/certificate/Certificate.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB",file:"Certificate.vue",sourcesContent:["\n.columns[data-v-2d327235] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-2d327235] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-2d327235] {\n  width: 300px !important;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=9.cf77ffd7eaaa5adc75b3.js.map