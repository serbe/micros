webpackJsonp([1],{"7fiy":function(t,a,e){"use strict";a.a={id:0,phone:"",fax:!1}},EZih:function(t,a,e){"use strict";a.a={id:0,email:""}},GiBs:function(t,a,e){"use strict";a.a={id:0,phone:"",fax:!0}},W0cF:function(t,a){},knzt:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var c=e("mvHQ"),n=e.n(c),s=e("VBGv"),o=e("m8uU"),i=e("PkiJ"),l=e("/gXw"),r=e("EZih"),u=e("7fiy"),d=e("GiBs"),m=e("raJt"),p={id:0,name:"",birthday:"",company:m.a,company_id:0,post:m.a,post_id:0,department:m.a,department_id:0,post_go:m.a,post_go_id:0,rank:m.a,rank_id:0,emails:[r.a],phones:[u.a],faxes:[d.a],note:""},f=e("7lJq"),h=e("OOvn"),v={name:"ContactItem",components:{"bulma-input":s.a,"bulma-button":o.a,"bulma-select":i.a,"bulma-date":l.a},mixins:[f.a],data:function(){return{title:"",contact:p,companies:[m.a],posts:[m.a],posts_go:[m.a],departments:[m.a],ranks:[m.a]}},mounted:function(){this.fetchData()},methods:{onBlur:function(t,a){if(this.checkArray(this.contact[t],a)){var e={};e.id=this.contact[t].length+1,e[a]="",this.contact[t].push(e)}},onSelect:function(t,a){this.contact[a]=t,this.contact[a+"_id"]=t.id},submit:function(){var t=this,a="/contacts",e="POST";"0"!==this.$route.params.id&&(a=a+"/"+this.$route.params.id,e="PUT");var c=this.contact;c.emails=this.filterArray(c.emails,"email"),c.phones=this.filterArray(c.phones,"phone"),c.faxes=this.filterArray(c.faxes,"phone"),Object(h.a)({url:a,method:e,mode:"cors",data:n()(c)}).then(function(){t.close()})},close:function(){this.$router.push("/contacts")},delete:function(){},fetchData:function(){var t=this;Object(h.a)({url:"contacts/"+this.$route.params.id,method:"GET"}).then(function(a){t.contact=a.data.contact,t.companies=a.data.companies,t.posts=a.data.posts,t.departments=a.data.departments,t.posts_go=a.data.posts_go,t.ranks=a.data.ranks,t.contact.emails?t.contact.emails.push({id:t.contact.emails.length+1,email:""}):t.contact.emails=[{id:1,email:""}],t.contact.phones?t.contact.phones.push({id:t.contact.phones.length+1,phone:""}):t.contact.phones=[{id:1,phone:""}],t.contact.faxes?t.contact.faxes.push({id:t.contact.faxes.length+1,phone:""}):t.contact.faxes=[{id:1,phone:""}],t.isLoaded=!0})}}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mw768"},[e("form",{attrs:{model:t.contact,id:"contact"}},[e("bulma-input",{attrs:{type:"text",label:"",placeholder:"Полное имя",iconLeft:"user"},model:{value:t.contact.name,callback:function(a){t.$set(t.contact,"name",a)},expression:"contact.name"}}),t._v(" "),e("bulma-select",{attrs:{list:t.companies,"selected-item":t.contact.company,label:"Организация","item-name":"company",iconLeft:"building"},on:{select:t.onSelect}}),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.posts,"selected-item":t.contact.post,label:"Должность","item-name":"post",iconLeft:"tag"},on:{select:t.onSelect}})],1),t._v(" "),e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.departments,"selected-item":t.contact.department,label:"Отдел","item-name":"department",iconLeft:"tag"},on:{select:t.onSelect}})],1)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.posts_go,"selected-item":t.contact.post_go,label:"Должность ГО","item-name":"post_go",iconLeft:"tag"},on:{select:t.onSelect}})],1),t._v(" "),e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.ranks,"selected-item":t.contact.rank,label:"Звание","item-name":"rank",iconLeft:"tag"},on:{select:t.onSelect}})],1)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("bulma-date",{attrs:{label:"Дата рождения"},model:{value:t.contact.birthday,callback:function(a){t.$set(t.contact,"birthday",a)},expression:"contact.birthday"}})],1),t._v(" "),e("div",{staticClass:"column is-two-thirds"},[e("bulma-input",{attrs:{type:"text",label:"",placeholder:"Адрес",iconLeft:"address-card"},model:{value:t.contact.address,callback:function(a){t.$set(t.contact,"address",a)},expression:"contact.address"}})],1)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Электронный адрес")]),t._v(" "),t._l(t.contact.emails,function(a,c){return e("bulma-input",{key:c,attrs:{type:"email",placeholder:"Электронный адрес",iconLeft:"envelope",autocomplete:"email",pattern:'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',error:"Неправильный email"},on:{blur:function(a){t.onBlur("emails","email")}},model:{value:t.contact.emails[c].email,callback:function(a){t.$set(t.contact.emails[c],"email",a)},expression:"contact.emails[index].email"}})})],2)]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Телефон")]),t._v(" "),t._l(t.contact.phones,function(a,c){return e("bulma-input",{key:c,attrs:{type:"tel",placeholder:"Телефон",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(a){t.onBlur("phones","phone")}},model:{value:t.contact.phones[c].phone,callback:function(a){t.$set(t.contact.phones[c],"phone",a)},expression:"contact.phones[index].phone"}})})],2)]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Факс")]),t._v(" "),t._l(t.contact.faxes,function(a,c){return e("bulma-input",{key:c,attrs:{type:"tel",placeholder:"Факс",iconLeft:"fax",autocomplete:"tel"},on:{blur:function(a){t.onBlur("faxes","phone")}},model:{value:t.contact.faxes[c].phone,callback:function(a){t.$set(t.contact.faxes[c],"phone",a)},expression:"contact.faxes[index].phone"}})})],2)])]),t._v(" "),t.contact.practices?e("div",{key:"practices",staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Тренировки")]),t._v(" "),t._l(t.contact.practices,function(t){return e("bulma-input",{key:t.id,attrs:{type:"text",hyper:"/practice/"+t.id,readonly:"",value:t.date_str+" - "+t.kind.name+" - "+t.topic,iconLeft:"graduation-cap"}})})],2):t._e(),t._v(" "),e("bulma-input",{attrs:{type:"text",label:"Заметка",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.contact.note,callback:function(a){t.$set(t.contact,"note",a)},expression:"contact.note"}}),t._v(" "),e("div",{staticClass:"field is-grouped is-grouped-centered"},[e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var _=e("VU/8")(v,b,!1,function(t){e("W0cF")},"data-v-cf33fb6c",null);a.default=_.exports}});
//# sourceMappingURL=1.55f98f088c5340e6900e.js.map