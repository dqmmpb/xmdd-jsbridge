"use strict";$(function(){function n(){var n=navigator.userAgent||navigator.vendor||window.opera;if(null!=n){var t=n.toLowerCase();if(/ip(hone|od|ad|os)/i.test(t))if(/micromessenger/i.test(t))$(".btn-wechat").click(function(){location.href="xmdd://"});else try{}catch(e){console.log(e)}else if(/micromessenger/i.test(t))$(".btn-wechat").click(function(){location.href="xmdd://"});else{var a=document.createElement("iframe");a.src="xmdd://",a.style.display="none",document.body.appendChild(a),setTimeout(function(){document.body.removeChild(a),/micromessenger/i.test(t)?location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd":location.href="http://www.xiaomadada.com/paaweb/general/download"},30)}}}function t(){try{var n=navigator.userAgent||navigator.vendor||window.opera;if(null!=n){var t=n.toLowerCase();/ip(hone|od|ad|os)/i.test(t)?/micromessenger/i.test(t)?location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd":location.href="https://itunes.apple.com/cn/app/xiao-ma-da-da-xi-che-zhi-yao1fen/id991665445&mt=8":/micromessenger/i.test(t)?location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd":location.href="http://www.xiaomadada.com/paaweb/general/download"}}catch(e){console.log(e)}}n(),connectWebViewJavascriptBridge(function(n){function e(t){var e={};e.message=t,n.callHandler("sendToastMsg",e,function(n){})}n.registerHandler("returnBackHandler",function(n,t){var e={};e.isFirstPage="true",t(e)}),n.registerHandler("modalHandler",function(n,e){"string"==typeof n&&(n=JSON.parse(n));var a=n.modalId;if("modalUpdate1"===a){var r=n.value;1===r&&t()}var i={};i.value=0,i.modalId="modal1",e(i)}),n.registerHandler("loginHandler",function(n,t){"string"==typeof n&&(n=JSON.parse(n));var e=n.token,a=(n.phone,n.triggerId);$("#token").val(e),$("#trigger").val(a),$("#respData").val(n);var r={};r.triggerId="btnlogin",t(r)}),n.registerHandler("barNavBtnHandler",function(t,e){"string"==typeof t&&(t=JSON.parse(t)),n.callHandler("getUserToken",null,function(t){if(null==t){var e={triggerId:"btnLogin"};return void n.callHandler("login",e,function(n){})}"string"==typeof t&&(t=JSON.parse(t));var a=t,r=a.token,i=(a.phone,a.triggerId);$("#token").val(r),$("#trigger").val(i),$("#respData").val(a)});var a={};a.triggerId="true",e(a)}),$(".btn-getoken").bind("click",function(t){n.callHandler("getUserToken",null,function(n){if(null==n){var t=$.jsBridge({id:"jsBridgeForm",method:"GET",action:"xmdd://j",inputs:[{name:"t",value:"login"}]});return void $.submitJsBridgeForm(t)}var e=JSON.parse(n),a=e.token,r=(e.phone,e.triggerId);$("#token").val(a),$("#trigger").val(r),$("#respData").val(e),window.location.href="second.html"})}),$(".btn-go").bind("click",function(t){n.callHandler("getUserToken",null,function(n){if(null==n){var t=$.jsBridge({id:"jsBridgeForm",method:"GET",action:"xmdd://j",inputs:[{name:"t",value:"login"}]});return void $.submitJsBridgeForm(t)}var e=JSON.parse(n),a=e.token;e.phone;$("#token").val(a),$("#trigger").val("")})}),n.registerHandler("barNavBtnHandler",function(t,e){"string"==typeof t&&(t=JSON.parse(t)),"btnMap"===t.triggerId?n.callHandler("getUserToken",null,function(t){if(null==t){var e={triggerId:"btnLogin"};return void n.callHandler("login",e,function(n){})}"string"==typeof t&&(t=JSON.parse(t));var a=t,r=a.token,i=(a.phone,a.triggerId);$("#token").val(r),$("#trigger").val(i),$("#respData").val(a)}):"btnRefresh"===t.triggerId&&window.location.reload();var a={};a.triggerId="true",e(a)}),$(".btn-barNavBtn").click(function(){var t={position:"right",triggerId:"btnMap",icon:"http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png",title:"附近",type:"0"};n.callHandler("barNavBtn",t,function(n){})}),$(".btn-barRefreshBtn").click(function(){var t={position:"right",triggerId:"btnRefresh",icon:"http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png",title:"刷新",type:"0"};n.callHandler("barNavBtn",t,function(n){})}),$(".btn-barNavBtn2").click(function(){var t={position:"right",triggerId:"btnMap",icon:"xm-icon-map",title:"",type:"-1"};n.callHandler("barNavBtn",t,function(n){})}),$(".btn-share").bind("click",function(t){var e=[];e.push("1"),n.callHandler("setOptionMenu",e,function(n){}),n.registerHandler("getShareParamHandler",function(n,t){var e={};e.title="浙商银行汽车卡申请",e.desc="车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！",e.linkUrl="http://www.xiaomadada.com/credit/ccamobile?f=share",e.imgUrl="http://7xjclc.com2.z0.glb.clouddn.com/1012.png",e.imgUrlWb="http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png",e.buttons=[1,2,3,4],t(e)})}),$(".btn-openView").click(function(){var t={url:"http://www.xiaomadada.com"};n.callHandler("openView",t,function(n){})}),$(".btn-toast").click(function(){e("成功")}),$(".btn-position").click(function(){n.callHandler("getCurrentPosition",null,function(n){e(n)})}),$(".btn-netState").click(function(){n.callHandler("callForNetworkState",null,function(n){e(n)})}),$(".btn-callPhone").click(function(){var t={};t.phoneNum="110",JSON.stringify(t),n.callHandler("getPhoneCall",t,function(n){})});var a=function(t){var e=t.currentTarget,a={};a.imgId=e.id,a.type="2",a.width="200",a.height="200",a.uploadUrl="http://dev01.xiaomadada.com/paa/rest/api/fileupload",n.callHandler("selectSingleImage",a,function(n){})};n.registerHandler("singleImageBefore",function(n,t){var e=JSON.parse(n);"#"+e.imgId;t(null)}),n.registerHandler("singleImageBack",function(n,t){"string"==typeof n&&(n=JSON.parse(n)),null!==n.imageUrl&&""!==n.imageUrl?(e("上传成功"),$(".img-uploadImg").attr("src",n.imageCodeStr)):e("上传失败"),t(null)}),$(".btn-uploadImg").bind("click",a),$(".btn-modal").bind("click",function(t){var e={modalId:"modal1",title:"警告",text:"用户名不存在",type:"0",buttons:[{text:"取0消",value:0},{text:"确1定",value:1},{text:"待2定",value:2}]};n.callHandler("modal",e,function(n){})}),$(".btn-navi").bind("click",function(t){var e={distination:"117.500244,40.417801",name:"小马达达国际研发中心"};n.callHandler("navi",e,function(n){})}),$(".btn-login").bind("click",function(t){n.callHandler("getUserToken",null,function(t){if(null==t){var e={triggerId:"btnLogin"};return void n.callHandler("login",e,function(n){})}var a=JSON.parse(t),r=a.token,i=(a.phone,a.triggerId);$("#token").val(r),$("#trigger").val(i),$("#respData").val(a)})}),$(".btn-custom-share").click(function(){n.registerHandler("getShareParamHandler",function(n,t){var e={};e.title="浙商银行汽车卡申请",e.desc="车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！",e.linkUrl="http://www.baidu.com",e.imgUrl="http://7xjclc.com2.z0.glb.clouddn.com/1012.png",e.imgUrlWb="http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png",e.buttons=[1,2,3,4],t(e)}),n.callHandler("callShareAction",{},function(n){})}),$(".btn-update-guide").click(function(){var t=(navigator.userAgent,window.navigator.userAgent,{modalId:"modalUpdate1",title:"温馨提示",text:"您的版本太低啦，赶快升级最新版本享受更多优质服务！",type:"0",buttons:[{text:"忽略",value:0},{text:"前去更新",value:1}]});n.callHandler("modal",t,function(n){})})})});