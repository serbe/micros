webpackJsonp([5],{KziL:function(t,e){},Zhd6:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("mvHQ"),n=o.n(a),s=o("VBGv"),c=o("m8uU"),i={id:0,name:"",note:""},r=o("OOvn"),l={name:"ScopeItem",components:{"bulma-input":s.a,"bulma-button":c.a},data:function(){return{title:"",scope:i}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="scopes",o="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,o="PUT");var a=this.scope;Object(r.a)({url:e,method:o,mode:"cors",data:n()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/scopes")},delete:function(){},fetchData:function(){var t=this;Object(r.a)({url:"scopes/"+this.$route.params.id,method:"GET"}).then(function(e){t.scope=e.data.scope,t.isLoaded=!0})}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mw768"},[o("form",{attrs:{model:t.scope,id:"scope"}},[o("bulma-input",{attrs:{label:"",placeholder:"Наименование сферы дефтельности",icon:"tag"},model:{value:t.scope.name,callback:function(e){t.$set(t.scope,"name",e)},expression:"scope.name"}}),t._v(" "),o("bulma-input",{attrs:{label:"",placeholder:"Заметка",icon:"comment"},model:{value:t.scope.note,callback:function(e){t.$set(t.scope,"note",e)},expression:"scope.note"}}),t._v(" "),o("div",{staticClass:"field is-grouped is-grouped-centered"},[o("div",{staticClass:"control"},[o("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),o("div",{staticClass:"control"},[o("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),o("div",{staticClass:"control"},[o("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var d=o("VU/8")(l,u,!1,function(t){o("KziL")},"data-v-b9f139fa",null);e.default=d.exports}});
//# sourceMappingURL=5.f0e1467fcda2a2300044.js.map