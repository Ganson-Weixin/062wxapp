(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"4b10":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},"824c":function(t,e,n){"use strict";var r=n("a3e6"),a=n.n(r);a.a},"8f6b":function(t,e,n){"use strict";n.r(e);var r=n("4b10"),a=n("b8a2");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("824c");var i,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=o.exports},a3e6:function(t,e,n){},b8a2:function(t,e,n){"use strict";n.r(e);var r=n("f8ce"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},c642:function(t,e,n){"use strict";(function(t){n("ce04"),n("921b");r(n("66fd"));var e=r(n("8f6b"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f8ce:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("5c94"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,a,u,i){try{var c=t[u](i),o=c.value}catch(s){return void n(s)}c.done?e(o):Promise.resolve(o).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function c(t){i(u,r,a,c,o,"next",t)}function o(t){i(u,r,a,c,o,"throw",t)}c(void 0)}))}}var o={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=c(r.default.mark((function e(){var n,u,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:u=e.sent,this.user=u.data,this.tableName=n,i=a.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onShow:function(){var e=c(r.default.mark((function e(){var n,u,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:u=e.sent,this.user=u.data,this.tableName=n,i=a.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onPageTap:function(e){t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}})}}};e.default=o}).call(this,n("543d")["default"])}},[["c642","common/runtime","common/vendor"]]]);