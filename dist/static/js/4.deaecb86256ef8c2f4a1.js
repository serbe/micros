webpackJsonp([4],{"kS/X":function(t,e){},ktxx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),o=n("GE6z"),s=n("MeX/"),c=n("OOvn"),r={name:"kind",components:{"vue-input":o.a,"vue-button":s.a},data:function(){return{title:"",kind:{id:0,name:"",short_name:"",note:""}}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="kinds",n="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,n="PUT");var i=this.kind;Object(c.a)({url:e,method:n,mode:"cors",data:a()(i)}).then(function(){t.close()})},close:function(){this.$router.push("/kinds")},delete:function(){},fetchData:function(){var t=this;Object(c.a)({url:"kinds/"+this.$route.params.id,method:"GET"}).then(function(e){t.kind=e.data.kind,t.isLoaded=!0})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mw768"},[n("form",{attrs:{model:t.kind,id:"kind"}},[n("vue-input",{attrs:{label:"",placeholder:"Наименование типа тренировки",icon:"tag"},model:{value:t.kind.name,callback:function(e){t.$set(t.kind,"name",e)},expression:"kind.name"}}),t._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Сокращенное наименование",icon:"tag"},model:{value:t.kind.short_name,callback:function(e){t.$set(t.kind,"short_name",e)},expression:"kind.short_name"}}),t._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Заметка",icon:"comment"},model:{value:t.kind.note,callback:function(e){t.$set(t.kind,"note",e)},expression:"kind.note"}}),t._v(" "),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),n("div",{staticClass:"control"},[n("vue-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var u=n("VU/8")(r,d,!1,function(t){n("kS/X")},"data-v-a9608900",null);e.default=u.exports}});
//# sourceMappingURL=4.deaecb86256ef8c2f4a1.js.map