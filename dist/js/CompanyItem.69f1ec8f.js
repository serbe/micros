(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CompanyItem"],{"012e":function(e,t,n){"use strict";var a=n("5bd6"),i=n.n(a);i.a},"0147":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mw768"},[n("form",{attrs:{model:e.company,id:"company"}},[n("bulma-input",{attrs:{label:"",placeholder:"Наименование организации",iconLeft:"building"},model:{value:e.company.name,callback:function(t){e.$set(e.company,"name",t)},expression:"company.name"}}),n("bulma-select",{attrs:{list:e.scopes,"selected-item":e.company.scope,"item-name":"scope",label:"Сфера деятельности",iconLeft:"tag"},on:{select:e.onSelect}}),n("bulma-input",{attrs:{label:"",placeholder:"Адрес",iconLeft:"address-card"},model:{value:e.company.address,callback:function(t){e.$set(e.company,"address",t)},expression:"company.address"}}),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Электронный адрес")]),e._l(e.company.emails,function(t,a){return n("bulma-input",{key:a,attrs:{type:"email",placeholder:"Электронный адрес",iconLeft:"envelope",autocomplete:"email",pattern:"pattern",error:"Неправильный email"},on:{blur:function(t){return e.onBlur("emails","email")}},model:{value:e.company.emails[a].email,callback:function(t){e.$set(e.company.emails[a],"email",t)},expression:"company.emails[index].email"}})})],2)]),n("div",{staticClass:"column"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Телефон")]),e._l(e.company.phones,function(t,a){return n("bulma-input",{key:a,attrs:{type:"tel",placeholder:"Телефон",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(t){return e.onBlur("phones","phone")}},model:{value:e.company.phones[a].phone,callback:function(t){e.$set(e.company.phones[a],"phone",t)},expression:"company.phones[index].phone"}})})],2)]),n("div",{staticClass:"column"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Факс")]),e._l(e.company.faxes,function(t,a){return n("bulma-input",{key:a,attrs:{type:"tel",placeholder:"Факс",iconLeft:"phone",autocomplete:"tel"},on:{blur:function(t){return e.onBlur("faxes","phone")}},model:{value:e.company.faxes[a].phone,callback:function(t){e.$set(e.company.faxes[a],"phone",t)},expression:"company.faxes[index].phone"}})})],2)])]),e.company.practices?n("div",{key:"practices",staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Тренировки")]),e._l(e.company.practices,function(e){return n("bulma-input",{key:e.id,attrs:{value:e.date_str+" - "+e.kind_name+" - "+e.topic,hyper:"/practice/"+e.id,iconLeft:"history",readonly:""}})})],2):e._e(),e.company.contacts?n("div",{key:"contacts",staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Сотрудники")]),e._l(e.company.contacts,function(e){return n("bulma-input",{key:e.id,attrs:{value:e.name+" - "+e.post_name,hyper:"/contact/"+e.id,iconLeft:"user",readonly:""}})})],2):e._e(),n("bulma-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"sticky-note"},model:{value:e.company.note,callback:function(t){e.$set(e.company,"note",t)},expression:"company.note"}}),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{"~click":function(t){return e.submit(t)}}})],1),n("div",{staticClass:"control"},[n("bulma-button",{attrs:{text:"Закрыть"},on:{"~click":function(t){return e.close(t)}}})],1),n("div",{staticClass:"control"},[n("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},i=[],o=(n("7f7f"),n("e653")),s=n("e04f"),c=n("ce02"),l=n("ccdc"),r=n("e78a"),u=n("a7a6"),p=n("7234"),m={id:0,name:"",address:"",scope:p["a"],scope_id:0,note:"",emails:[l["a"]],phones:[r["a"]],faxes:[u["a"]],practices:[{id:0,date_str:"",kind_name:"",topic:""}],contacts:[{id:0,name:"",department_name:"",post_name:"",post_go_name:""}]},d=n("0036"),h=n("2af4"),f=n("8daa"),y={name:"CompanyItem",components:{"bulma-button":o["a"],"bulma-input":s["a"],"bulma-select":c["a"]},mixins:[h["a"],d["a"]],data:function(){return{title:"",company:m,scopes:[p["a"]],pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}},mounted:function(){this.fetchData()},methods:{onBlur:function(e,t){if(this.checkArray(this.company[e],t)){var n={};n.id=this.company[e].length+1,n[t]="",this.company[e].push(n)}},onSelect:function(e){this.scope=e,this.company.scope_id=e.id},submit:function(){var e=this,t="companies",n="POST";"0"!==this.$route.params.id&&(t="".concat(t,"/").concat(this.$route.params.id),n="PUT");var a=this.company;a.emails=this.filterArray(a.emails,"email"),a.phones=this.filterArray(a.phones,"phone"),a.faxes=this.filterArray(a.faxes,"phone"),Object(f["a"])({url:t,method:n,mode:"cors",data:JSON.stringify(a)}).then(function(){e.close()})},delete:function(){},fetchData:function(){this.fetchItem("companies",["company","scopes"],!0)},afterFetch:function(){this.company.emails?this.company.emails.push({id:this.company.emails.length+1,email:""}):this.company.emails=[{id:1,email:""}],this.company.phones?this.company.phones.push({id:this.company.phones.length+1,phone:""}):this.company.phones=[{id:1,phone:""}],this.company.faxes?this.company.faxes.push({id:this.company.faxes.length+1,phone:""}):this.company.faxes=[{id:1,phone:""}]},customLabel:function(e){return e.name}}},b=y,v=n("2877"),k=Object(v["a"])(b,a,i,!1,null,null,null);t["default"]=k.exports},4917:function(e,t,n){"use strict";var a=n("cb7c"),i=n("9def"),o=n("0390"),s=n("5f1b");n("214f")("match",1,function(e,t,n,c){return[function(n){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=c(n,e,this);if(t.done)return t.value;var l=a(e),r=String(this);if(!l.global)return s(l,r);var u=l.unicode;l.lastIndex=0;var p,m=[],d=0;while(null!==(p=s(l,r))){var h=String(p[0]);m[d]=h,""===h&&(l.lastIndex=o(r,i(l.lastIndex),u)),d++}return 0===d?null:m}]})},"5bd6":function(e,t,n){},7234:function(e,t,n){"use strict";t["a"]={id:0,name:""}},a7a6:function(e,t,n){"use strict";t["a"]={id:0,phone:"",fax:!0}},ccdc:function(e,t,n){"use strict";t["a"]={id:0,email:""}},ce02:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[e.getLabel?n("label",{key:"SelectLabel",staticClass:"label"},[e._v(e._s(e.getLabel))]):e._e(),n("div",{class:e.classList,on:{click:e.openOptions}},[n("input",{ref:"vueSelect",class:e.inputClassList,attrs:{autocomplete:"off",tabindex:"0",placeholder:e.getPlaceholder},domProps:{value:e.isLoaded?e.searchText:this.item.name},on:{input:e.onInput,blur:e.onBlur,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onKeyUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onKeyDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onKeyDelete(t)}],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyEnter(t)}}}),e.iconLeft?n("bulma-icon",{key:"SelectIconLeft",attrs:{icon:e.iconLeft,position:"left",color:e.color,size:e.size}}):e._e(),e.iconRight?n("bulma-icon",{key:"SelectIconRight",attrs:{icon:e.iconRight,position:"right",color:e.color,size:e.size}}):e._e(),e.opened?n("div",{key:"SelectOpened",staticClass:"select-box"},[n("div",{staticClass:"select-item",on:{click:function(t){return t.stopPropagation(),e.selectItem({id:0,name:""})},mousedown:e.mousedownItem}}),e._l(e.listWithFilter,function(t){return n("div",{key:t.id,staticClass:"select-item",on:{click:function(n){return n.stopPropagation(),e.selectItem(t)},mousedown:e.mousedownItem}},[e._v("\n        "+e._s(t.name)+"\n      ")])})],2):e._e()],1)])},i=[],o=(n("3b2b"),n("4917"),n("bd86")),s=(n("7f7f"),n("6762"),n("2fdb"),n("5762")),c={name:"BulmaSelect",components:{"bulma-icon":s["a"]},props:{selectedItem:{default:function(){return{id:0,name:""}}},iconLeft:{type:[String,Boolean],default:!1},iconRight:{type:[String,Boolean],default:!1},color:{type:[String,Boolean],default:!1,validator:function(e){return["primary","info","success","warning","danger"].includes(e)||!e}},size:{type:[String,Boolean],default:!1},state:{type:[String,Boolean],default:!1},label:{type:[String,Boolean],default:!1},list:{required:!0,default:[{id:0,name:""}]},itemName:{type:[String,Boolean],default:!1}},data:function(){return{opened:!1,searchText:this.selectedItem.name,mousedownState:!1,placeholder:"",isLoaded:!1}},computed:{classList:function(){return{control:!0,"is-expanded":!0,select:!0,"is-fullwidth":!0,"has-icons-left":this.iconLeft,"has-icons-right":this.iconRight}},inputClassList:function(){var e;return e={input:!0},Object(o["a"])(e,"is-".concat(this.color),this.color),Object(o["a"])(e,"is-".concat(this.size),this.size),Object(o["a"])(e,"is-".concat(this.state),this.state),e},getLabel:function(){return!1!==this.label&&!1!==this.placeholder&&""===this.label?this.placeholder:this.label},getPlaceholder:function(){return""===this.placeholder&&this.label&&""!==this.label?this.label:this.placeholder},listWithFilter:function(){var e=this;return""!==this.searchText?this.list.filter(function(t){return t.name.match(new RegExp(e.searchText,"i"))}):this.list},item:function(){return this.selectedItem?{id:this.selectedItem.id,name:this.selectedItem.name}:{id:0,name:""}}},methods:{openOptions:function(){this.isLoaded=!0,this.$refs.vueSelect.focus(),this.searchText="",this.placeholder=this.selectedItem.name,this.opened=!0,this.mousedownState=!1},closeOptions:function(){this.opened=!1},mousedownItem:function(){this.mousedownState=!0},selectItem:function(e){this.searchText=e.name,this.closeOptions(),this.itemName?this.$emit("select",e,this.itemName):this.$emit("select",e)},onBlur:function(){this.mousedownState||(this.searchText=this.selectedItem.name,this.closeOptions())},onKeyUp:function(){},onKeyDown:function(){},onKeyEnter:function(){},onKeyDelete:function(){},onInput:function(e){this.searchText=e.target.value}}},l=c,r=(n("012e"),n("2877")),u=Object(r["a"])(l,a,i,!1,null,"74b63be4",null);t["a"]=u.exports},e78a:function(e,t,n){"use strict";t["a"]={id:0,phone:"",fax:!1}}}]);
//# sourceMappingURL=CompanyItem.69f1ec8f.js.map