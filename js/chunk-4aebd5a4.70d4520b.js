(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aebd5a4"],{1276:function(t,e,i){"use strict";var s=i("d784"),a=i("44e7"),n=i("825a"),l=i("1d80"),r=i("4840"),o=i("8aa5"),c=i("50c4"),u=i("14c3"),g=i("9263"),d=i("d039"),h=[].push,f=Math.min,p=4294967295,v=!d((function(){return!RegExp(p,"y")}));s("split",2,(function(t,e,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var s=String(l(this)),n=void 0===i?p:i>>>0;if(0===n)return[];if(void 0===t)return[s];if(!a(t))return e.call(s,t,n);var r,o,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,d+"g");while(r=g.call(v,s)){if(o=v.lastIndex,o>f&&(u.push(s.slice(f,r.index)),r.length>1&&r.index<s.length&&h.apply(u,r.slice(1)),c=r[0].length,f=o,u.length>=n))break;v.lastIndex===r.index&&v.lastIndex++}return f===s.length?!c&&v.test("")||u.push(""):u.push(s.slice(f)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var a=l(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a,i):s.call(String(a),e,i)},function(t,a){var l=i(s,t,this,a,s!==e);if(l.done)return l.value;var g=n(t),d=String(this),h=r(g,RegExp),m=g.unicode,x=(g.ignoreCase?"i":"")+(g.multiline?"m":"")+(g.unicode?"u":"")+(v?"y":"g"),k=new h(v?g:"^(?:"+g.source+")",x),I=void 0===a?p:a>>>0;if(0===I)return[];if(0===d.length)return null===u(k,d)?[d]:[];var C=0,b=0,y=[];while(b<d.length){k.lastIndex=v?b:0;var w,_=u(k,v?d:d.slice(b));if(null===_||(w=f(c(k.lastIndex+(v?0:b)),d.length))===C)b=o(d,b,m);else{if(y.push(d.slice(C,b)),y.length===I)return y;for(var S=1;S<=_.length-1;S++)if(y.push(_[S]),y.length===I)return y;b=C=w}}return y.push(d.slice(C)),y}]}),!v)},2086:function(t,e,i){},3837:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my"},[i("div",{staticClass:"my-box",style:{backgroundImage:"url("+t.userInfo.userBg+")"}},[i("div",{staticClass:"change-bg clearfix"},[t.isLogin?i("div",{staticClass:"fr cbg"},[i("div",[t._v("更换背景")]),i("van-uploader",{staticClass:"upload-box",attrs:{"max-size":t.maxSize,"after-read":t.uploadFile}})],1):t._e()]),i("div",{staticClass:"user-info"},[t.isLogin?i("div",[i("div",{staticClass:"clearfix"},[i("div",{staticClass:"my-img fl"},[i("img",{staticClass:"auto-img",attrs:{src:t.userInfo.userImg,alt:""}})])]),i("div",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nickName))]),i("div",{staticClass:"text"},[t._v("简介："+t._s(""==t.userInfo.desc?"这人很懒":t.userInfo.desc))])]):i("div",{staticClass:"login-text",on:{click:function(e){return t.goPage("Login")}}},[i("svg",{staticClass:"icon",attrs:{t:"1594438315578",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2086",width:"32",height:"32"}},[i("path",{attrs:{d:"M652.3 562.7C741.6 513.3 802 418.2 802 309c0-160.2-129.8-290-290-290S222 148.8 222 309c0 109.2 60.4 204.3 149.7 253.7C184 622.2 48 797.7 48 1005h58c0-224.2 181.8-406 406-406s406 181.8 406 406h58c0-207.3-136-382.8-323.7-442.3zM280 309c0-128.1 103.9-232 232-232s232 103.9 232 232-103.9 232-232 232-232-103.9-232-232z","p-id":"2087"}})]),i("p",[t._v("登录")])])])]),i("div",[i("van-cell-group",t._l(t.litsData,(function(e,s){return i("van-cell",{key:s,attrs:{title:e.title,"is-link":""},on:{click:function(i){return t.goPage(e.routeName)}}})})),1)],1)])},a=[],n=(i("ac1f"),i("5319"),i("1276"),i("2086"),{data:function(){return{maxSize:1048576,litsData:[{title:"账号管理",routeName:"Account"},{title:"地址管理",routeName:"MyAddress"},{title:"我的收藏",routeName:"Like"},{title:"安全中心",routeName:"Secure"}],userInfo:{},isLogin:!1}},created:function(){this.getUserInfo(),localStorage.getItem("__Tk")&&(this.isLogin=!0)},methods:{goPage:function(t){"Login"===t||this.isLogin?this.$router.push({name:t}):this.$toast("请先登录")},getUserInfo:function(){var t=this,e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findMy",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),"A001"==e.data.code&&(t.userInfo=e.data.result[0])})).catch((function(e){t.$toast.clear()}))},uploadFile:function(t){var e=this,i=t.content.replace(/^data:image\/[A-Za-z]+;base64,/,""),s=t.file.type.split("/")[1],a=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updateUserBg",data:{appkey:this.appkey,tokenString:a,imgType:s,serverBase64Img:i}}).then((function(t){e.$toast.clear(),"I001"==t.data.code?e.userInfo.userBg=t.data.userBg:e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}}),l=n,r=i("2877"),o=Object(r["a"])(l,s,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-4aebd5a4.70d4520b.js.map