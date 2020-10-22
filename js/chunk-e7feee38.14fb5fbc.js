(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7feee38"],{"0fdf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forgot"},[a("van-nav-bar",{attrs:{title:"找回密码","left-text":"返回","left-arrow":""},on:{"click-left":e.back}}),a("div",{staticClass:"forgot-box"},[e.isNext?a("div",[a("van-form",{on:{submit:e.commit}},[a("van-field",{attrs:{type:"text",label:"手机号",placeholder:"注册时手机号","left-icon":"phone-o",maxlength:"11"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),a("van-field",{attrs:{type:e.isEye?"text":"password",label:"新密码",placeholder:"字母数字_组合(6-16位)","left-icon":"lock","right-icon":e.isEye?"eye-o":"closed-eye",maxlength:"16"},on:{"click-right-icon":e.viewPassword},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),a("div",{staticClass:"register-btn"},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1):a("div",[a("van-form",[a("van-field",{attrs:{type:"text",label:"邮箱",placeholder:"邮箱地址"},model:{value:e.first.email,callback:function(t){e.$set(e.first,"email",t)},expression:"first.email"}}),a("van-field",{key:"code",attrs:{type:"text",label:"验证码",placeholder:"6位验证码"},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small",type:"info",disabled:e.isSend},on:{click:e.sendCode}},[e._v(e._s(e.text))])]},proxy:!0}],null,!1,1646899276),model:{value:e.first.code,callback:function(t){e.$set(e.first,"code",t)},expression:"first.code"}}),a("div",{staticClass:"register-btn"},[a("van-button",{attrs:{block:"",type:"info","native-type":"submit"},on:{click:e.next}},[e._v("下一步")])],1)],1)],1)])],1)},i=[],o=(a("584c"),a("e3a8")),n={data:function(){return{isNext:!1,first:{email:"",code:""},userInfo:{phone:"",password:""},isEye:!1,text:"发送验证码",isSend:!1}},methods:{back:function(){this.isNext?this.isNext=!1:this.$router.go(-1)},viewPassword:function(){this.isEye=!this.isEye},next:function(){var e=this;o["a"].validUserForm(this.first)&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/checkValidCode",data:{appkey:this.appkey,validCode:this.first.code}}).then((function(t){e.$toast.clear(),"K001"==t.data.code?e.isNext=!0:e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()})))},sendCode:function(){var e=this;if(o["a"].validUserForm({email:this.first.email})){var t=60;this.text=t+"秒后重新发送",this.isSend=!0;var a=setInterval((function(){0==t?(clearInterval(a),a=null,e.text="发送验证码",e.isSend=!1):(t--,e.text=t+"秒后重新发送")}),1e3);this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/emailValidCode",data:{appkey:this.appkey,email:this.first.email}}).then((function(t){e.$toast.clear(),e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}},commit:function(){var e=this;o["a"].validUserForm(this.userInfo)&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/retrievePassword",data:{appkey:this.appkey,phone:this.userInfo.phone,password:this.userInfo.password}}).then((function(t){e.$toast.clear(),"L001"==t.data.code?e.$router.push({name:"Login"}):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()})))}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);t["default"]=c.exports},"584c":function(e,t,a){},e3a8:function(e,t,a){"use strict";a("e7e5");var s=a("d399");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}var r=function(){function e(){i(this,e),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,6}$/,msg:"用户名格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,16}$/,msg:"密码需要使用大写字母、小写字母、数字及特殊符号中至少三种的组合"},oldPassword:{reg:/^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,16}$/,msg:"旧密码格式不正确且需要使用大写字母、小写字母、数字及特殊符号中至少三种的组合"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return n(e,[{key:"validUserForm",value:function(e){for(var t in e)if(!this.validUserFormReg[t].reg.test(e[t]))return Object(s["a"])(this.validUserFormReg[t].msg),!1;return!0}}]),e}();t["a"]=new r}}]);
//# sourceMappingURL=chunk-e7feee38.14fb5fbc.js.map