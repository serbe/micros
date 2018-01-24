webpackJsonp([24],{"7RoA":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("mvHQ"),o=t.n(n),s=t("GE6z"),c=t("MeX/"),i=t("jKBc"),l=t("7lJq"),p=t("OOvn"),m={name:"company",components:{"vue-input":s.a,"vue-button":c.a,"vue-select":i.a},mixins:[l.a],data:function(){return{title:"",company:{id:0,name:"",address:"",scope:{id:0,name:""},scope_id:0,note:"",emails:[{id:0,email:""}],phones:[{id:0,phone:"",fax:!1}],faxes:[{id:0,phone:"",fax:!0}],practices:[{id:0,date_str:"",kind_name:"",topic:""}],contacts:[{id:0,name:"",department_name:"",post_name:"",post_go_name:""}]},scopes:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{onBlur:function(e,a){if(this.checkArray(this.company[e],a)){var t={};t.id=this.company[e].length+1,t[a]="",this.company[e].push(t)}},onSelect:function(e){this.scope=e,this.company.scope_id=e.id},submit:function(){var e=this,a="companies",t="POST";"0"!==this.$route.params.id&&(a=a+"/"+this.$route.params.id,t="PUT");var n=this.company;n.emails=this.filterArray(n.emails,"email"),n.phones=this.filterArray(n.phones,"phone"),n.faxes=this.filterArray(n.faxes,"phone"),Object(p.a)({url:a,method:t,mode:"cors",data:o()(n)}).then(function(){e.close()})},close:function(){this.$router.push("/companies")},delete:function(){},fetchData:function(){var e=this;Object(p.a)({url:"companies/"+this.$route.params.id,method:"GET"}).then(function(a){e.company=a.data.company,e.scopes=a.data.scopes,e.company.emails?e.company.emails.push({id:e.company.emails.length+1,email:""}):e.company.emails=[{id:1,email:""}],e.company.phones?e.company.phones.push({id:e.company.phones.length+1,phone:""}):e.company.phones=[{id:1,phone:""}],e.company.faxes?e.company.faxes.push({id:e.company.faxes.length+1,phone:""}):e.company.faxes=[{id:1,phone:""}],e.isLoaded=!0})},customLabel:function(e){return e.name}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mw768"},[t("form",{attrs:{model:e.company,id:"company"}},[t("vue-input",{attrs:{label:"",placeholder:"Наименование организации",iconLeft:"building"},model:{value:e.company.name,callback:function(a){e.$set(e.company,"name",a)},expression:"company.name"}}),e._v(" "),t("vue-select",{attrs:{list:e.scopes,"selected-item":e.company.scope,"item-name":"scope",label:"Сфера деятельности",icon:"tag"},on:{select:e.onSelect}}),e._v(" "),t("vue-input",{attrs:{label:"",placeholder:"Адрес",iconLeft:"address-card"},model:{value:e.company.address,callback:function(a){e.$set(e.company,"address",a)},expression:"company.address"}}),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Электронный адрес")]),e._v(" "),e._l(e.company.emails,function(a,n){return t("vue-input",{key:n,attrs:{type:"email",placeholder:"Электронный адрес",iconLeft:"envelope",autocomplete:"email",pattern:'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',error:"Неправильный email"},on:{blur:function(a){e.onBlur("emails","email")}},model:{value:e.company.emails[n].email,callback:function(a){e.$set(e.company.emails[n],"email",a)},expression:"company.emails[index].email"}})})],2)]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Телефон")]),e._v(" "),e._l(e.company.phones,function(a,n){return t("vue-input",{key:n,attrs:{type:"tel",placeholder:"Телефон",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(a){e.onBlur("phones","phone")}},model:{value:e.company.phones[n].phone,callback:function(a){e.$set(e.company.phones[n],"phone",a)},expression:"company.phones[index].phone"}})})],2)]),e._v(" "),t("div",{staticClass:"column"},[t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Факс")]),e._v(" "),e._l(e.company.faxes,function(a,n){return t("vue-input",{key:n,attrs:{type:"tel",placeholder:"Факс",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(a){e.onBlur("faxes","phone")}},model:{value:e.company.faxes[n].phone,callback:function(a){e.$set(e.company.faxes[n],"phone",a)},expression:"company.faxes[index].phone"}})})],2)])]),e._v(" "),e.company.practices?t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Тренировки")]),e._v(" "),e._l(e.company.practices,function(e){return t("vue-input",{key:e.id,attrs:{value:e.date_str+" - "+e.kind_name+" - "+e.topic,hyper:"/practice/"+e.id,iconLeft:"history",disabled:""}})})],2):e._e(),e._v(" "),e.company.contacts?t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Сотрудники")]),e._v(" "),e._l(e.company.contacts,function(e){return t("vue-input",{key:e.id,attrs:{value:e.name+" - "+e.post_name,hyper:"/contact/"+e.id,iconLeft:"user",disabled:""}})})],2):e._e(),e._v(" "),t("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"sticky-note"},model:{value:e.company.note,callback:function(a){e.$set(e.company,"note",a)},expression:"company.note"}}),e._v(" "),t("div",{staticClass:"field is-grouped is-grouped-centered"},[t("div",{staticClass:"control"},[t("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:e.submit}})],1),e._v(" "),t("div",{staticClass:"control"},[t("vue-button",{attrs:{text:"Закрыть"},on:{click:e.close}})],1),e._v(" "),t("div",{staticClass:"control"},[t("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]},u=t("VU/8")(m,r,!1,null,null,null);a.default=u.exports}});
//# sourceMappingURL=24.68664cb04401b0f0c97d.js.map