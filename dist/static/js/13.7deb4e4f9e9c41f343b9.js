webpackJsonp([13],{"/qRW":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.columns[data-v-0bf8b416] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-0bf8b416] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-0bf8b416] {\n  width: 300px !important;\n}\n","",{version:3,sources:["/home/a/github/vugo/src/components/siren/Siren.vue"],names:[],mappings:";AACA;EACE,mCAAmC;CACpC;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB",file:"Siren.vue",sourcesContent:["\n.columns[data-v-0bf8b416] {\n  margin-bottom: -0.25rem !important;\n}\n.field .is-grouped[data-v-0bf8b416] {\n  margin-bottom: 0 !important;\n}\n.w300[data-v-0bf8b416] {\n  width: 300px !important;\n}\n"],sourceRoot:""}])},"2wpX":function(e,t,n){"use strict";function s(e){n("pbVd")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),o=n("GE6z"),c=n("MeX/"),r=n("jKBc"),l=n("OOvn"),d={name:"siren",components:{"vue-input":o.a,"vue-button":c.a,"vue-select":r.a},data:function(){return{title:"",siren:{id:0,num_id:0,num_pass:"",siren_type_id:"",siren_type:{id:0,name:""},address:"",radio:"",desk:"",contact_id:0,contact:{id:0,name:""},company_id:0,company:{id:0,name:""},latitude:"",longtitude:"",stage:"",own:"",note:""},siren_types:[{id:0,name:""}],contacts:[{id:0,name:""}],companies:[{id:0,name:""}]}},mounted:function(){this.fetchData()},methods:{submit:function(){var e=this,t="sirens",n="POST";"0"!==this.$route.params.id&&(t=t+"/"+this.$route.params.id,n="PUT");var s=this.siren;Object(l.a)({url:t,method:n,mode:"cors",data:a()(s)}).then(function(){e.close()})},close:function(){this.$router.push("/sirens")},onSelect:function(e,t){this.siren[t]=e,this.siren[t+"_id"]=e.id},delete:function(){},fetchData:function(){var e=this;Object(l.a)({url:"sirens/"+this.$route.params.id,method:"GET"}).then(function(t){e.siren=t.data.siren,e.siren_types=t.data.siren_types,e.contacts=t.data.contacts,e.companies=t.data.companies,e.setSelect("siren","siren_types","siren_type","siren_type_id"),e.setSelect("siren","contacts","contact","contact_id"),e.setSelect("siren","companies","company","company_id"),e.isLoaded=!0})},setSelect:function(e,t,n,s){var i=this;this[e][n]=this[t].find(function(t){return t.id===i[e][s]})}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mw768"},[n("form",{attrs:{model:e.siren,id:"siren"}},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half"},[n("vue-input",{attrs:{type:"text",label:"",placeholder:"Серийный номер",iconLeft:"tag"},model:{value:e.siren.num_pass,callback:function(t){e.$set(e.siren,"num_pass",t)},expression:"siren.num_pass"}})],1),e._v(" "),n("div",{staticClass:"column is-half"},[n("vue-select",{attrs:{list:e.siren_types,"selected-item":e.siren.siren_type,label:"Тип сирены","item-name":"siren_type",icon:"tag"},on:{select:e.onSelect}})],1)]),e._v(" "),n("vue-input",{attrs:{type:"text",label:"",placeholder:"Адрес",iconLeft:"address-card"},model:{value:e.siren.address,callback:function(t){e.$set(e.siren,"address",t)},expression:"siren.address"}}),e._v(" "),n("vue-select",{attrs:{list:e.contacts,"selected-item":e.siren.contact,label:"Контактное лицо","item-name":"contact",icon:"user"},on:{select:e.onSelect}}),e._v(" "),n("vue-select",{attrs:{list:e.companies,"selected-item":e.siren.company,label:"Организация","item-name":"company",icon:"building"},on:{select:e.onSelect}}),e._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half"},[n("vue-input",{attrs:{label:"",placeholder:"Широта",iconLeft:"tag"},model:{value:e.siren.latitude,callback:function(t){e.$set(e.siren,"latitude",t)},expression:"siren.latitude"}})],1),e._v(" "),n("div",{staticClass:"column is-half"},[n("vue-input",{attrs:{label:"",placeholder:"Долгота",iconLeft:"tag"},model:{value:e.siren.longitude,callback:function(t){e.$set(e.siren,"longitude",t)},expression:"siren.longitude"}})],1)]),e._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:e.siren.note,callback:function(t){e.$set(e.siren,"note",t)},expression:"siren.note"}}),e._v(" "),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:e.submit}})],1),e._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Закрыть"},on:{click:e.close}})],1),e._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},m=[],p={render:u,staticRenderFns:m},v=p,f=n("VU/8"),b=s,_=f(d,v,!1,b,"data-v-0bf8b416",null);t.default=_.exports},pbVd:function(e,t,n){var s=n("/qRW");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("7ac5c8ce",s,!0)}});
//# sourceMappingURL=13.7deb4e4f9e9c41f343b9.js.map