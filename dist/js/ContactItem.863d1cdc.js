(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ContactItem"],{"2af4":function(t,a,e){"use strict";e("a481"),e("ac6a");a["a"]={methods:{checkArray:function(t,a){var e=-1,c=0,n=0;return t.forEach(function(t,s){""===t[a]?(-1===e&&(e=s),c+=1):n+=1}),c>1&&t.splice(e,1),n===t.length},filterArray:function(t,a){return t.filter(function(t){return t[a]&&""!==t[a]})},telephone:function(t){var a=t;return void 0!==a&&a.length>0&&(a=a.replace(/[^0-9]/g,""),10===a.length&&(a=a.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/,"+7 ($1) $2-$3-$4")),11===a.length&&("8"===a[0]&&(a="7".concat(a.slice(1))),a=a.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 ($2) $3-$4-$5")),7===a.length&&(a=a.replace(/(\d{3})(\d{2})(\d{2})/,"$1-$2-$3"))),a}}}},"53e8":function(t,a,e){},6188:function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mw768"},[e("form",{attrs:{model:t.contact,id:"contact"}},[e("bulma-input",{attrs:{type:"text",label:"",placeholder:"Полное имя",iconLeft:"user"},model:{value:t.contact.name,callback:function(a){t.$set(t.contact,"name",a)},expression:"contact.name"}}),e("bulma-select",{attrs:{list:t.companies,"selected-item":t.contact.company,label:"Организация","item-name":"company",iconLeft:"building"},on:{select:t.onSelect}}),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.posts,"selected-item":t.contact.post,label:"Должность","item-name":"post",iconLeft:"tag"},on:{select:t.onSelect}})],1),e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.departments,"selected-item":t.contact.department,label:"Отдел","item-name":"department",iconLeft:"tag"},on:{select:t.onSelect}})],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.posts_go,"selected-item":t.contact.post_go,label:"Должность ГО","item-name":"post_go",iconLeft:"tag"},on:{select:t.onSelect}})],1),e("div",{staticClass:"column is-half"},[e("bulma-select",{attrs:{list:t.ranks,"selected-item":t.contact.rank,label:"Звание","item-name":"rank",iconLeft:"tag"},on:{select:t.onSelect}})],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("bulma-date",{attrs:{label:"Дата рождения"},model:{value:t.contact.birthday,callback:function(a){t.$set(t.contact,"birthday",a)},expression:"contact.birthday"}})],1),e("div",{staticClass:"column is-two-thirds"},[e("bulma-input",{attrs:{type:"text",label:"",placeholder:"Адрес",iconLeft:"address-card"},model:{value:t.contact.address,callback:function(a){t.$set(t.contact,"address",a)},expression:"contact.address"}})],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Электронный адрес")]),t._l(t.contact.emails,function(a,c){return e("bulma-input",{key:c,attrs:{type:"email",placeholder:"Электронный адрес",iconLeft:"envelope",autocomplete:"email",pattern:'^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',error:"Неправильный email"},on:{blur:function(a){t.onBlur("emails","email")}},model:{value:t.contact.emails[c].email,callback:function(a){t.$set(t.contact.emails[c],"email",a)},expression:"contact.emails[index].email"}})})],2)]),e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Телефон")]),t._l(t.contact.phones,function(a,c){return e("bulma-input",{key:c,attrs:{type:"tel",placeholder:"Телефон",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(a){t.onBlur("phones","phone")}},model:{value:t.contact.phones[c].phone,callback:function(a){t.$set(t.contact.phones[c],"phone",a)},expression:"contact.phones[index].phone"}})})],2)]),e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Факс")]),t._l(t.contact.faxes,function(a,c){return e("bulma-input",{key:c,attrs:{type:"tel",placeholder:"Факс",iconLeft:"fax",autocomplete:"tel"},on:{blur:function(a){t.onBlur("faxes","phone")}},model:{value:t.contact.faxes[c].phone,callback:function(a){t.$set(t.contact.faxes[c],"phone",a)},expression:"contact.faxes[index].phone"}})})],2)])]),t.contact.practices?e("div",{key:"practices",staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Тренировки")]),t._l(t.contact.practices,function(t){return e("bulma-input",{key:t.id,attrs:{type:"text",hyper:"/practice/"+t.id,readonly:"",value:t.date_str+" - "+t.kind.name+" - "+t.topic,iconLeft:"graduation-cap"}})})],2):t._e(),e("bulma-input",{attrs:{type:"text",label:"Заметка",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.contact.note,callback:function(a){t.$set(t.contact,"note",a)},expression:"contact.note"}}),e("div",{staticClass:"field is-grouped is-grouped-centered"},[e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},n=[],s=e("e04f"),o=e("e653"),i=e("ce02"),l=e("2bd6"),r=e("ccdc"),u=e("e78a"),d=e("a7a6"),m=e("7234"),p={id:0,name:"",birthday:"",company:m["a"],company_id:0,post:m["a"],post_id:0,department:m["a"],department_id:0,post_go:m["a"],post_go_id:0,rank:m["a"],rank_id:0,emails:[r["a"]],phones:[u["a"]],faxes:[d["a"]],note:""},f=e("2af4"),h=e("8daa"),b={name:"ContactItem",components:{"bulma-input":s["a"],"bulma-button":o["a"],"bulma-select":i["a"],"bulma-date":l["a"]},mixins:[f["a"]],data:function(){return{title:"",contact:p,companies:[m["a"]],posts:[m["a"]],posts_go:[m["a"]],departments:[m["a"]],ranks:[m["a"]]}},mounted:function(){this.fetchData()},methods:{onBlur:function(t,a){if(this.checkArray(this.contact[t],a)){var e={};e.id=this.contact[t].length+1,e[a]="",this.contact[t].push(e)}},onSelect:function(t,a){this.contact[a]=t,this.contact["".concat(a,"_id")]=t.id},submit:function(){var t=this,a="/contacts",e="POST";"0"!==this.$route.params.id&&(a="".concat(a,"/").concat(this.$route.params.id),e="PUT");var c=this.contact;c.emails=this.filterArray(c.emails,"email"),c.phones=this.filterArray(c.phones,"phone"),c.faxes=this.filterArray(c.faxes,"phone"),Object(h["a"])({url:a,method:e,mode:"cors",data:JSON.stringify(c)}).then(function(){t.close()})},close:function(){this.$router.push("/contacts")},delete:function(){},fetchData:function(){var t=this;Object(h["a"])({url:"contacts/".concat(this.$route.params.id),method:"GET"}).then(function(a){t.contact=a.data.contact,t.companies=a.data.companies,t.posts=a.data.posts,t.departments=a.data.departments,t.posts_go=a.data.posts_go,t.ranks=a.data.ranks,t.contact.emails?t.contact.emails.push({id:t.contact.emails.length+1,email:""}):t.contact.emails=[{id:1,email:""}],t.contact.phones?t.contact.phones.push({id:t.contact.phones.length+1,phone:""}):t.contact.phones=[{id:1,phone:""}],t.contact.faxes?t.contact.faxes.push({id:t.contact.faxes.length+1,phone:""}):t.contact.faxes=[{id:1,phone:""}],t.isLoaded=!0})}}},v=b,x=(e("8ab7"),e("2877")),y=Object(x["a"])(v,c,n,!1,null,"62356b87",null);y.options.__file="ContactItem.vue";a["default"]=y.exports},"8ab7":function(t,a,e){"use strict";var c=e("53e8"),n=e.n(c);n.a},a481:function(t,a,e){e("214f")("replace",2,function(t,a,e){return[function(c,n){"use strict";var s=t(this),o=void 0==c?void 0:c[a];return void 0!==o?o.call(c,s,n):e.call(String(s),c,n)},e]})},a7a6:function(t,a,e){"use strict";a["a"]={id:0,phone:"",fax:!0}},ccdc:function(t,a,e){"use strict";a["a"]={id:0,email:""}},e78a:function(t,a,e){"use strict";a["a"]={id:0,phone:"",fax:!1}}}]);
//# sourceMappingURL=ContactItem.863d1cdc.js.map