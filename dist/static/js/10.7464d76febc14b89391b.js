webpackJsonp([10],{Os7z:function(t,e){},"Y5u+":function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c("mvHQ"),a=c.n(i),n=c("GE6z"),o=c("MeX/"),s=c("jKBc"),r=c("yaAr"),l=c("OOvn"),u={name:"certificate",components:{"vue-input":n.a,"vue-button":o.a,"vue-select":s.a,"vue-date":r.a},data:function(){return{title:"",certificate:{id:0,num:"",contact_id:0,contact:{id:0,name:""},company_id:0,company:{id:0,name:""},cert_date:"",note:""},contacts:[{id:0,name:""}],companies:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{onSelect:function(t,e){this.certificate[e]=t,this.certificate[e+"_id"]=t.id},submit:function(){var t=this,e="certificates",c="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,c="PUT");var i=this.certificate;Object(l.a)({url:e,method:c,mode:"cors",data:a()(i)}).then(function(){t.close()})},close:function(){this.$router.push("/certificates")},delete:function(){},fetchData:function(){var t=this;Object(l.a)({url:"certificates/"+this.$route.params.id,method:"GET"}).then(function(e){t.certificate=e.data.certificate,t.contacts=e.data.contacts,t.companies=e.data.companies,t.isLoaded=!0})}}},d={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container mw768"},[c("form",{attrs:{model:t.certificate,id:"certificate"}},[c("vue-input",{attrs:{label:"",placeholder:"Серийный номер удостоверения",icon:"tag"},model:{value:t.certificate.num,callback:function(e){t.$set(t.certificate,"num",e)},expression:"certificate.num"}}),t._v(" "),c("vue-select",{attrs:{list:t.contacts,"selected-item":t.certificate.contact,"item-name":"contact",label:"Полное имя",icon:"user"},on:{select:t.onSelect}}),t._v(" "),c("vue-select",{attrs:{list:t.companies,"selected-item":t.certificate.company,"item-name":"company",label:"Учебно методический центр",icon:"building"},on:{select:t.onSelect}}),t._v(" "),c("vue-date",{attrs:{label:"Дата выдачи"},model:{value:t.certificate.cert_date,callback:function(e){t.$set(t.certificate,"cert_date",e)},expression:"certificate.cert_date"}}),t._v(" "),c("vue-input",{attrs:{label:"",placeholder:"Заметка",icon:"comment"},model:{value:t.certificate.note,callback:function(e){t.$set(t.certificate,"note",e)},expression:"certificate.note"}}),t._v(" "),c("div",{staticClass:"field is-grouped is-grouped-centered"},[c("div",{staticClass:"control"},[c("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),c("div",{staticClass:"control"},[c("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),c("div",{staticClass:"control"},[c("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var f=c("VU/8")(u,d,!1,function(t){c("Os7z")},"data-v-58ae0b43",null);e.default=f.exports}});
//# sourceMappingURL=10.7464d76febc14b89391b.js.map