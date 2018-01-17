webpackJsonp([9],{"+/HG":function(t,e,a){"use strict";function n(t){a("EEBb")}Object.defineProperty(e,"__esModule",{value:!0});var c=a("mvHQ"),o=a.n(c),s=a("GE6z"),i=a("MeX/"),l=a("jKBc"),r=a("yaAr"),d=a("7lJq"),m=a("OOvn"),u={name:"contact",components:{"vue-input":s.a,"vue-button":i.a,"vue-select":l.a,"vue-date":r.a},mixins:[d.a],data:function(){return{title:"",contact:{id:0,name:"",birthday:"",company:{id:0,name:""},company_id:0,post:{id:0,name:""},post_id:0,department:[{id:0,email:""}],department_id:0,post_go:{id:0,name:""},post_go_id:0,rank:{id:0,name:""},rank_id:0,emails:[{id:0,email:""}],phones:[{id:0,phone:""}],faxes:[{id:0,phone:""}],note:""},companies:[{id:0,name:""}],posts:[{id:0,name:""}],posts_go:[{id:0,name:""}],departments:[{id:0,name:""}],ranks:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{onBlur:function(t,e){if(this.checkArray(this.contact[t],e)){var a={};a.id=this.contact[t].length+1,a[e]="",this.contact[t].push(a)}},onSelect:function(t,e){this.contact[e]=t,this.contact[e+"_id"]=t.id},submit:function(){var t=this,e="/contacts",a="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,a="PUT");var n=this.contact;n.emails=this.filterArray(n.emails,"email"),n.phones=this.filterArray(n.phones,"phone"),n.faxes=this.filterArray(n.faxes,"phone"),Object(m.a)({url:e,method:a,mode:"cors",data:o()(n)}).then(function(){t.close()})},close:function(){this.$router.push("/contacts")},delete:function(){},fetchData:function(){var t=this;Object(m.a)({url:"contacts/"+this.$route.params.id,method:"GET"}).then(function(e){t.contact=e.data.contact,t.companies=e.data.companies,t.posts=e.data.posts,t.departments=e.data.departments,t.posts_go=e.data.posts_go,t.ranks=e.data.ranks,t.contact.emails?t.contact.emails.push({id:t.contact.emails.length+1,email:""}):t.contact.emails=[{id:1,email:""}],t.contact.phones?t.contact.phones.push({id:t.contact.phones.length+1,phone:""}):t.contact.phones=[{id:1,phone:""}],t.contact.faxes?t.contact.faxes.push({id:t.contact.faxes.length+1,phone:""}):t.contact.faxes=[{id:1,phone:""}],t.isLoaded=!0})}}},p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mw768"},[a("form",{attrs:{model:t.contact,id:"contact"}},[a("vue-input",{attrs:{type:"text",label:"",placeholder:"Полное имя",iconLeft:"user"},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),t._v(" "),a("vue-select",{attrs:{list:t.companies,"selected-item":t.contact.company,label:"Организация","item-name":"company",icon:"building"},on:{select:t.onSelect}}),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("vue-select",{attrs:{list:t.posts,"selected-item":t.contact.post,label:"Должность","item-name":"post",icon:"tag"},on:{select:t.onSelect}})],1),t._v(" "),a("div",{staticClass:"column is-half"},[a("vue-select",{attrs:{list:t.departments,"selected-item":t.contact.department,label:"Отдел","item-name":"department",icon:"tag"},on:{select:t.onSelect}})],1)]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("vue-select",{attrs:{list:t.posts_go,"selected-item":t.contact.post_go,label:"Должность ГО","item-name":"post_go",icon:"tag"},on:{select:t.onSelect}})],1),t._v(" "),a("div",{staticClass:"column is-half"},[a("vue-select",{attrs:{list:t.ranks,"selected-item":t.contact.rank,label:"Звание","item-name":"rank",icon:"tag"},on:{select:t.onSelect}})],1)]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("vue-date",{attrs:{label:"Дата рождения"},model:{value:t.contact.birthday,callback:function(e){t.$set(t.contact,"birthday",e)},expression:"contact.birthday"}})],1),t._v(" "),a("div",{staticClass:"column is-two-thirds"},[a("vue-input",{attrs:{type:"text",label:"",placeholder:"Адрес",iconLeft:"address-card"},model:{value:t.contact.address,callback:function(e){t.$set(t.contact,"address",e)},expression:"contact.address"}})],1)]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Электронный адрес")]),t._v(" "),t._l(t.contact.emails,function(e,n){return a("vue-input",{key:n,attrs:{type:"email",placeholder:"Электронный адрес",iconLeft:"envelope",autocomplete:"email",pattern:'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',error:"Неправильный email"},on:{blur:function(e){t.onBlur("emails","email")}},model:{value:t.contact.emails[n].email,callback:function(e){t.$set(t.contact.emails[n],"email",e)},expression:"contact.emails[index].email"}})})],2)]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Телефон")]),t._v(" "),t._l(t.contact.phones,function(e,n){return a("vue-input",{key:n,attrs:{type:"tel",placeholder:"Телефон",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(e){t.onBlur("phones","phone")}},model:{value:t.contact.phones[n].phone,callback:function(e){t.$set(t.contact.phones[n],"phone",e)},expression:"contact.phones[index].phone"}})})],2)]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Факс")]),t._v(" "),t._l(t.contact.faxes,function(e,n){return a("vue-input",{key:n,attrs:{type:"tel",placeholder:"Факс",iconLeft:"fax",autocomplete:"tel"},on:{blur:function(e){t.onBlur("faxes","phone")}},model:{value:t.contact.faxes[n].phone,callback:function(e){t.$set(t.contact.faxes[n],"phone",e)},expression:"contact.faxes[index].phone"}})})],2)])]),t._v(" "),t.contact.practices?a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Тренировки")]),t._v(" "),t._l(t.contact.practices,function(t){return a("vue-input",{key:t.id,attrs:{type:"text",hyper:"/practice/"+t.id,disabled:"",value:t.date_str+" - "+t.kind.name+" - "+t.topic,iconLeft:"graduation-cap"}})})],2):t._e(),t._v(" "),a("vue-input",{attrs:{type:"text",label:"Заметка",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.contact.note,callback:function(e){t.$set(t.contact,"note",e)},expression:"contact.note"}}),t._v(" "),a("div",{staticClass:"field is-grouped is-grouped-centered"},[a("div",{staticClass:"control"},[a("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),a("div",{staticClass:"control"},[a("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),a("div",{staticClass:"control"},[a("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},v=[],h={render:p,staticRenderFns:v},f=h,b=a("VU/8"),_=n,C=b(u,f,!1,_,"data-v-42cb9b13",null);e.default=C.exports},EEBb:function(t,e,a){var n=a("N9aC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("11a3d51e",n,!0)},N9aC:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.columns[data-v-42cb9b13] {\r\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-42cb9b13] {\r\n  margin-bottom: 0 !important;\n}\r\n","",{version:3,sources:["C:/github/vugo/src/components/contact/Contact.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B",file:"Contact.vue",sourcesContent:["\n.columns[data-v-42cb9b13] {\r\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-42cb9b13] {\r\n  margin-bottom: 0 !important;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=9.a64aebccbfeadfdf42b2.js.map