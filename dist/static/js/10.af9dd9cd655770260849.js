webpackJsonp([10],{"6sow":function(e,t){},xJsL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("GE6z"),s=n("MeX/"),o=n("SQ6o"),r=n("mtWM"),i=n.n(r),l={name:"login",components:{"vue-input":a.a,"vue-button":s.a},data:function(){return{name:"",pass:"",error:!1}},methods:{login:function(){var e=this.$router,t="/edds/api/login",n={username:this.name,password:this.pass};var a=o.a.right_page;i()({url:t,method:"POST",data:n}).then(function(t){t.data.token&&""!==t.data.token&&(o.a.login(t.data),e.push({name:a}))})},close:function(){this.$router.push("/")},onKeyup:function(e){"Enter"===e.event.key&&this.login()}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container w300"},[e._m(0),e._v(" "),e.$route.query.redirect?n("p",[e._v("\n    You need to login first.\n  ")]):e._e(),e._v(" "),n("vue-input",{attrs:{label:"",placeholder:"Имя пользователя",iconLeft:"user"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("vue-input",{attrs:{type:"password",label:"",placeholder:"Пароль",iconLeft:"lock"},on:{keyup:e.onKeyup},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),e._v(" "),n("div",{staticClass:"field is-grouped pt10"},[n("vue-button",{staticClass:"pl20",attrs:{text:"Вход",color:"primary"},on:{click:e.login}}),e._v(" "),n("vue-button",{staticClass:"pl20",attrs:{text:"Закрыть",color:"light"},on:{click:e.close}})],1),e._v(" "),e.error?n("p",{staticClass:"error"},[e._v("Bad login information")]):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content has-text-centered"},[t("h2",[this._v("Авторизация")])])}]};var c=n("VU/8")(l,u,!1,function(e){n("6sow")},null,null);t.default=c.exports}});
//# sourceMappingURL=10.af9dd9cd655770260849.js.map