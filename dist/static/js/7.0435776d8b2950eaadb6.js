webpackJsonp([7],{Pud6:function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=c("mvHQ"),i=c.n(a),n=c("VBGv"),o=c("m8uU"),r=c("PkiJ"),s=c("/gXw"),l=c("raJt"),u={id:0,num:"",contact_id:0,contact:l.a,company_id:0,company:l.a,cert_date:"",note:""},m=c("OOvn"),d={name:"CertificateItem",components:{"bulma-input":n.a,"bulma-button":o.a,"bulma-select":r.a,"bulma-date":s.a},data:function(){return{title:"",certificate:u,contacts:[l.a],companies:[l.a]}},mounted:function(){this.fetchData()},methods:{onSelect:function(t,e){this.certificate[e]=t,this.certificate[e+"_id"]=t.id},submit:function(){var t=this,e="certificates",c="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,c="PUT");var a=this.certificate;Object(m.a)({url:e,method:c,mode:"cors",data:i()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/certificates")},delete:function(){},fetchData:function(){var t=this;Object(m.a)({url:"certificates/"+this.$route.params.id,method:"GET"}).then(function(e){t.certificate=e.data.certificate,t.contacts=e.data.contacts,t.companies=e.data.companies,t.isLoaded=!0})}}},f={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container mw768"},[c("form",{attrs:{model:t.certificate,id:"certificate"}},[c("bulma-input",{attrs:{label:"",placeholder:"Серийный номер удостоверения",icon:"tag"},model:{value:t.certificate.num,callback:function(e){t.$set(t.certificate,"num",e)},expression:"certificate.num"}}),t._v(" "),c("bulma-select",{attrs:{list:t.contacts,"selected-item":t.certificate.contact,"item-name":"contact",label:"Полное имя",icon:"user"},on:{select:t.onSelect}}),t._v(" "),c("bulma-select",{attrs:{list:t.companies,"selected-item":t.certificate.company,"item-name":"company",label:"Учебно методический центр",icon:"building"},on:{select:t.onSelect}}),t._v(" "),c("bulma-date",{attrs:{label:"Дата выдачи"},model:{value:t.certificate.cert_date,callback:function(e){t.$set(t.certificate,"cert_date",e)},expression:"certificate.cert_date"}}),t._v(" "),c("bulma-input",{attrs:{label:"",placeholder:"Заметка",icon:"comment"},model:{value:t.certificate.note,callback:function(e){t.$set(t.certificate,"note",e)},expression:"certificate.note"}}),t._v(" "),c("div",{staticClass:"field is-grouped is-grouped-centered"},[c("div",{staticClass:"control"},[c("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),c("div",{staticClass:"control"},[c("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),c("div",{staticClass:"control"},[c("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var b=c("VU/8")(d,f,!1,function(t){c("TS+N")},"data-v-3cdeb2c5",null);e.default=b.exports},"TS+N":function(t,e){}});
//# sourceMappingURL=7.0435776d8b2950eaadb6.js.map