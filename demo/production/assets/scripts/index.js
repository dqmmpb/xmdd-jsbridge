"use strict";$(function(){$.jsBridgeInit(function(t){t&&(t.returnBackHandler({isFirstPage:!0},function(){}),t.getShareParamHandler({title:"浙商银行汽车卡申请",desc:"车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！",linkUrl:"http://www.xiaomadada.com/credit/ccamobile?f=share",imgUrl:"http://7xjclc.com2.z0.glb.clouddn.com/1012.png",imgUrlWb:"http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png",buttons:[1,2,3,4]}),t.barNavBtnHandler(function(n){"btnShare"===n.triggerId?($("#info").html(JSON.stringify(n)),t.callShareAction()):"btnNear"===n.triggerId?($("#info").html(JSON.stringify(n)),console.log("调用地图")):"btnRefresh"===n.triggerId&&($("#info").html(JSON.stringify(n)),location.reload())}),t.barNavBtn({position:"right",triggerId:"btnShare",icon:"",title:"分享",type:"0"}),t.loginHandler(function(n){"btnLogin"===n.triggerId?$("#info").html(JSON.stringify(n)):"btnGo"===n.triggerId?$("#info").html(JSON.stringify(n)):"btnAddCar"===n.triggerId&&($("#info").html(JSON.stringify(n)),t.addCar("btnAddCar",function(t){}))}),t.addCarHandler(function(t){"btnAddCar"===t.triggerId&&t.carId&&$("#info").html(JSON.stringify(t))}),t.modalHandler(function(t){"modal"===t.modalId&&$("#info").html(JSON.stringify(t))}),t.singleImageBefore(function(t){$("#info").html(JSON.stringify(t))}),t.singleImageBack(function(t){$("#info").html(JSON.stringify(t)),"uploadImg"===t.imgId&&t.imageUrl&&$(".img-uploadImg").attr("src",t.imageCodeStr)}),$(".btn-login").click(function(){t.getUserToken("btnLogin",function(t){$("#info").html(JSON.stringify(t))})}),$(".btn-go").click(function(){t.getUserToken("btnGo",function(t){$("#info").html(JSON.stringify(t)),setTimeout(function(){location.href="second.html"})})}),$(".btn-modal").click(function(){t.modal({modalId:"modal",title:"警告",text:"用户名不存在",type:"0",buttons:[{text:"好的",value:0},{text:"确1定",value:1},{text:"待2定",value:2}]})}),$(".btn-navi").click(function(){t.navi({distination:"117.500244,40.417801",name:"小马达达国际研发中心"})}),$(".btn-barNavBtn").click(function(){t.barNavBtn({position:"right",triggerId:"btnNear",icon:"http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png",title:"附近",type:"0"})}),$(".btn-barRefreshBtn").click(function(){t.barNavBtn({position:"right",triggerId:"btnRefresh",icon:"http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png",title:"刷新",type:"0"})}),$(".btn-barClearBtn").click(function(){t.barNavBtn({position:"right",triggerId:"btnClear",icon:"xm-icon-map",title:"",type:"-1"})}),$(".btn-share").click(function(){t.barNavBtn({position:"right",triggerId:"btnShare",icon:"",title:"分享",type:"0"}),t.getShareParamHandler({title:"浙商银行汽车卡申请",desc:"车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！",linkUrl:"http://www.xiaomadada.com/credit/ccamobile?f=share",imgUrl:"http://7xjclc.com2.z0.glb.clouddn.com/1012.png",imgUrlWb:"http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png",buttons:[1,2,3,4]})}),$(".btn-custom-share").click(function(){t.getShareParamHandler({title:"浙商银行汽车卡申请",desc:"车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！",linkUrl:"http://www.xiaomadada.com/credit/ccamobile?f=share",imgUrl:"http://7xjclc.com2.z0.glb.clouddn.com/1012.png",imgUrlWb:"http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png",buttons:[1,2,4]}),t.callShareAction()}),$(".btn-openView").click(function(){t.openView("http://www.xiaomadada.com")}),$(".btn-toast").click(function(){t.toastMsg("提示成功")}),$(".btn-position").click(function(){t.getCurrentPosition(function(t){$("#info").html(JSON.stringify(t))})}),$(".btn-netState").click(function(){t.callForNetworkState(function(t){$("#info").html(JSON.stringify(t))})}),$(".btn-callPhone").click(function(){t.getPhoneCall({phoneNum:"13819493700"},function(t){$("#info").html(JSON.stringify(t))})}),$(".btn-addCar").click(function(){t.getUserToken("btnAddCar",function(n){$("#info").html(JSON.stringify(n)),t.addCar("btnAddCar",function(t){})})}),$(".btn-uploadImg").click(function(){t.selectSingleImage({imgId:"uploadImg",type:"2",width:"200",height:"200",uploadUrl:"http://dev01.xiaomadada.com/paa/rest/api/fileupload"},function(t){$("#info").html(JSON.stringify(t))})}),$(".btn-notify").click(function(){t.thirdPartyPageNotify({isThirdPartyPage:!1})}))})});