webpackJsonp([4],{LJ26:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("mvHQ"),i=e.n(a),o=e("VBGv"),s=e("m8uU"),c=e("jado"),l=e("FxBo"),r=e("OOvn"),d={name:"KindItem",components:{"bulma-input":o.a,"bulma-button":s.a},mixins:[l.a],data:function(){return{title:"",kind:c.a}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,n="kinds",e="POST";"0"!==this.$route.params.id&&(n=n+"/"+this.$route.params.id,e="PUT");var a=this.kind;Object(r.a)({url:n,method:e,mode:"cors",data:i()(a)}).then(function(){t.close()})},close:function(){this.$router.push("/kinds")},delete:function(){},fetchData:function(){this.fetchItem("kinds",["kind"])}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container mw768"},[e("form",{attrs:{model:t.kind,id:"kind"}},[e("bulma-input",{attrs:{label:"",placeholder:"Наименование типа тренировки",iconLeft:"tag"},model:{value:t.kind.name,callback:function(n){t.$set(t.kind,"name",n)},expression:"kind.name"}}),t._v(" "),e("bulma-input",{attrs:{label:"",placeholder:"Сокращенное наименование",iconLeft:"tag"},model:{value:t.kind.short_name,callback:function(n){t.$set(t.kind,"short_name",n)},expression:"kind.short_name"}}),t._v(" "),e("bulma-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.kind.note,callback:function(n){t.$set(t.kind,"note",n)},expression:"kind.note"}}),t._v(" "),e("div",{staticClass:"field is-grouped is-grouped-centered"},[e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),e("div",{staticClass:"control"},[e("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var m=e("VU/8")(d,u,!1,function(t){e("f3+e")},"data-v-039dd9d6",null);n.default=m.exports},"f3+e":function(t,n){},jado:function(t,n,e){"use strict";n.a={id:0,name:"",short_name:"",note:""}}});
//# sourceMappingURL=4.106c6bf2a01f7b76900f.js.map