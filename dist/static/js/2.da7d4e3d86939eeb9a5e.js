webpackJsonp([2],{LpXx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),n=a.n(s),o=a("VBGv"),l=a("m8uU"),i=a("bOdI"),c=a.n(i),u={name:"BulmaSwitch",props:{disabled:{type:Boolean,default:!1},isFullwidth:{type:Boolean,default:!1},type:String,size:String,checked:{type:Boolean,default:!1},name:String,label:{type:[String,Boolean],default:!1}},data:function(){return{value:null}},beforeMount:function(){this.value=this.checked},mounted:function(){this.$emit("input",this.value=!!this.checked)},computed:{getLabel:function(){return this.label},classObject:function(){var t;return t={},c()(t,"is-"+this.type,this.type),c()(t,"is-"+this.size,this.size),c()(t,"checked",this.value),t}},watch:{value:function(t){this.$emit("input",t)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[t.getLabel?a("label",{key:"SwitchLabel",staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),a("p",{staticClass:"control"},[a("label",{staticClass:"switch",class:t.classObject},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(e){var a=t.value,s=e.target,n=!!s.checked;if(Array.isArray(a)){var o=t._i(a,null);s.checked?o<0&&(t.value=a.concat([null])):o>-1&&(t.value=a.slice(0,o).concat(a.slice(o+1)))}else t.value=n}}})])])])},staticRenderFns:[]};var d=a("VU/8")(u,r,!1,function(t){a("WOE2")},"data-v-219b429c",null).exports,p=a("jado"),m=a("FxBo"),v=a("OOvn"),h={name:"PostItem",components:{"bulma-input":o.a,"bulma-button":l.a,"bulma-switch":d},mixins:[m.a],data:function(){return{title:"",post:p.a}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this,e="posts",a="POST";"0"!==this.$route.params.id&&(e=e+"/"+this.$route.params.id,a="PUT");var s=this.post;Object(v.a)({url:e,method:a,mode:"cors",data:n()(s)}).then(function(){t.close()})},close:function(){this.$router.push("/posts")},delete:function(){},fetchData:function(){this.fetchItem("posts",["post"])}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mw768"},[a("form",{attrs:{model:t.post,id:"post"}},[a("bulma-input",{attrs:{label:"",placeholder:"Наименование должности",iconLeft:"tag"},model:{value:t.post.name,callback:function(e){t.$set(t.post,"name",e)},expression:"post.name"}}),t._v(" "),a("bulma-switch",{attrs:{checked:t.post.go,label:"Должность по гражданской обороне"},model:{value:t.post.go,callback:function(e){t.$set(t.post,"go",e)},expression:"post.go"}}),t._v(" "),a("bulma-input",{attrs:{label:"",placeholder:"Заметка",iconLeft:"comment"},model:{value:t.post.note,callback:function(e){t.$set(t.post,"note",e)},expression:"post.note"}}),t._v(" "),a("div",{staticClass:"field is-grouped is-grouped-centered"},[a("div",{staticClass:"control"},[a("bulma-button",{attrs:{text:"Сохранить",color:"primary"},on:{click:t.submit}})],1),t._v(" "),a("div",{staticClass:"control"},[a("bulma-button",{attrs:{text:"Закрыть"},on:{click:t.close}})],1),t._v(" "),a("div",{staticClass:"control"},[a("bulma-button",{attrs:{text:"Удалить",color:"danger",onclick:"return confirm('Вы действительно хотите удалить эту запись?');"}})],1)])],1)])},staticRenderFns:[]};var b=a("VU/8")(h,f,!1,function(t){a("uvsw")},"data-v-4179eb4f",null);e.default=b.exports},WOE2:function(t,e){},jado:function(t,e,a){"use strict";e.a={id:0,name:"",short_name:"",note:""}},uvsw:function(t,e){}});
//# sourceMappingURL=2.da7d4e3d86939eeb9a5e.js.map