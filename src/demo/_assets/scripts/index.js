'use strict';

$(function() {

  function initApp() {
    var ua = (navigator.userAgent || navigator.vendor || window.opera);
    if (ua != null) {
      var uaName = ua.toLowerCase();
      if (/ip(hone|od|ad|os)/i.test(uaName)) {
        if(/micromessenger/i.test(uaName)){
          $('.btn-wechat').click(function () {
            location.href = 'xmdd://';
          });
        } else {
          try {

            // location.href= 'xmdd://';
            /*          var ifr = document.createElement('iframe');
             ifr.src = 'xmdd://';
             ifr.style.display = 'none';
             document.body.appendChild(ifr);
             setTimeout(function(){
             document.body.removeChild(ifr);

             if(/micromessenger/i.test(uaName)){
             location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd';
             } else {
             location.href = 'https://itunes.apple.com/cn/app/xiao-ma-da-da-xi-che-zhi-yao1fen/id991665445&mt=8';
             }

             }, 30);*/

          } catch(e) {
            console.log(e);
          }
        }

      } else {
        if(/micromessenger/i.test(uaName)){
          $('.btn-wechat').click(function () {
            location.href = 'xmdd://';
          });
        } else{
          //location.href = 'xmdd://';
          var ifr = document.createElement('iframe');
          ifr.src = 'xmdd://';
          ifr.style.display = 'none';
          document.body.appendChild(ifr);
          setTimeout(function(){
            document.body.removeChild(ifr);
            if(/micromessenger/i.test(uaName)){
              location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd';
            } else{
              location.href = 'http://www.xiaomadada.com/paaweb/general/download';
            }
          }, 30);
        }
      }
    }
  }

  initApp();


  /*function initWechat() {
    var domain = '';
    var linkUrl = '';
    var imgUrl = '', imgUrlWb = '', title = '', quanTitle = '', desc = '';

    var ch = '1052';
    var fr = 'wechat';
    var sel = $('#sel').val();
    if(sel){
      sel = encodeURI(sel);
    }

    console.log(location.href);
    $.get('http://dev.xiaomadada.com/paaweb/general/v2/getJddkData', {
      url: location.href,
      channel: ch,
      from: fr,
      extra: sel
    }, function(data) {
      domain = data.domain;
      linkUrl = data.linkurl;
      imgUrl = data.imgurl;
      imgUrlWb = data.imgurlWb;
      title = data.title;
      quanTitle = data.quanTitle;
      if (quanTitle == null) {
        quanTitle = title;
      }
      desc = data.desc;

      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appid, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
        // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function() {
        wx.onMenuShareTimeline({
          title: quanTitle, // 分享标题
          link: linkUrl, // 分享链接
          imgUrl: imgUrl, // 分享图标
          success: function() {
          },
          cancel: function() {
          }
        });
        wx.error(function(res) {
          //			alert('errorMSG:' + res.errMsg);
        });
        wx.onMenuShareAppMessage({
          title: title, // 分享标题
          link: linkUrl, // 分享链接
          imgUrl: imgUrl, // 分享图标
          desc: desc,
          success: function() {
          },
          cancel: function() {
          }
        });
        wx.onMenuShareWeibo({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: linkUrl, // 分享链接
          imgUrl: imgUrlWb, // 分享图标
          success: function() {

          },
          cancel: function() {

          }
        });
        wx.onMenuShareQQ({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: linkUrl, // 分享链接
          imgUrl: imgUrl, // 分享图标
          success: function() {

          },
          cancel: function() {
          }
        });

      });
    });
  }



  initWechat();*/



  function checkOS(){
    try{
      var ua = (navigator.userAgent || navigator.vendor || window.opera);
      if (ua != null) {
        var uaName = ua.toLowerCase();
        if (/ip(hone|od|ad|os)/i.test(uaName)) {
          if(/micromessenger/i.test(uaName)){
            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd';
          } else {
            location.href = 'https://itunes.apple.com/cn/app/xiao-ma-da-da-xi-che-zhi-yao1fen/id991665445&mt=8';
          }

        } else {
          if(/micromessenger/i.test(uaName)){
            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.huika.o2o.android.xmdd';
          } else{
            location.href = 'http://www.xiaomadada.com/paaweb/general/download';
          }
        }
      }
    }catch(e){
      console.log(e);
    }
  }

  connectWebViewJavascriptBridge(function(bridge) {

    // 绑定返回事件
    bridge.registerHandler('returnBackHandler', function(data, responseCallback) {
      var backParam = {};
      backParam.isFirstPage = 'true';
      responseCallback(backParam);
    });

    bridge.registerHandler('modalHandler', function(data, responseCallback) {

      if(typeof data === 'string')
        data = JSON.parse(data);

      var modalId = data.modalId;
      if(modalId === 'modalUpdate1') {
        var result = data.value;
        if(result === 1) {
          checkOS();
        }
      }

      var modalParam = {};
      modalParam.value = 0;
      modalParam.modalId = 'modal1';

      responseCallback(modalParam);
    });

    bridge.registerHandler('loginHandler', function(data, responseCallback) {
      // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
      if(typeof data === 'string')
        data = JSON.parse(data);

      var token = data.token;
      var phone = data.phone;
      var triggerId = data.triggerId;
      $('#token').val(token);
      $('#trigger').val(triggerId);
      $('#respData').val(data);

      /*      setTimeout(function(){
       window.location.href = 'second.html';
       }, 300);*/

      var loginParam = {};
      loginParam.triggerId = 'btnlogin';
      responseCallback(loginParam);
    });

    // 定义右上角按钮回调
    bridge.registerHandler('barNavBtnHandler', function(data, responseCallback) {
      if(typeof data === 'string')
        data = JSON.parse(data);
      // alert(data.triggerId);

      bridge.callHandler('getUserToken', null, function(response) {
        if (response == null) {
          var loginParams = {
            triggerId: 'btnLogin'
          };
          bridge.callHandler('login', loginParams, function(lresponse) {});
          return;
        }
        if(typeof response === 'string')
          response = JSON.parse(response);
        var rData = response;
        var token = rData.token;
        var phone = rData.phone;
        var triggerId = rData.triggerId;
        $('#token').val(token);
        $('#trigger').val(triggerId);
        $('#respData').val(rData);

        /*        setTimeout(function(){
         window.location.href = 'second.html';
         }, 300);*/

      }); //jsbrige.call 结束

      var barNavParam = {};
      barNavParam.triggerId = 'true';
      responseCallback(barNavParam);
    });



    /* bridge.callHandler('getUserToken', null, function(response) {

     if (response == null) {

     // 设置登录表单
     var jsBridgeForm = $.jsBridge({
     id: 'jsBridgeForm',
     method: 'GET',
     action: 'xmdd://j',
     inputs: [{
     name: 't',
     value: 'login'
     }]
     });

     $.submitJsBridgeForm(jsBridgeForm); //跳转到登录

     return;
     }

     var res = JSON.parse(response);
     var token = res.token;
     var phone = res.phone;
     $('#token').val(token);

     //window.location.href = 'second.html';

     }); //jsbrige.call 结束*/


    $('.btn-getoken').bind('click', function (event) {
      bridge.callHandler('getUserToken', null, function(response) {

        if (response == null) {

          // 设置登录表单
          var jsBridgeForm = $.jsBridge({
            id: 'jsBridgeForm',
            method: 'GET',
            action: 'xmdd://j',
            inputs: [{
              name: 't',
              value: 'login'
            }]
          });

          $.submitJsBridgeForm(jsBridgeForm); //跳转到登录

          return;
        }

        var rData = JSON.parse(response);
        var token = rData.token;
        var phone = rData.phone;
        var triggerId = rData.triggerId;
        $('#token').val(token);
        $('#trigger').val(triggerId);
        $('#respData').val(rData);

        window.location.href = 'second.html';

      }); //jsbrige.call 结束
    });

    $('.btn-go').bind('click', function (event) {
      bridge.callHandler('getUserToken', null, function(response) {
        if (response == null) {

          // 设置登录表单
          var jsBridgeForm = $.jsBridge({
            id: 'jsBridgeForm',
            method: 'GET',
            action: 'xmdd://j',
            inputs: [{
              name: 't',
              value: 'login'
            }]
          });

          $.submitJsBridgeForm(jsBridgeForm); //跳转到登录

          return;
        }

        var res = JSON.parse(response);
        var token = res.token;
        var phone = res.phone;
        $('#token').val(token);
        $('#trigger').val('');

        //window.location.href = 'second.html';

      }); //jsbrige.call 结束
    });

    // 定义右上角按钮回调
    bridge.registerHandler('barNavBtnHandler', function(data, responseCallback) {
      if(typeof data === 'string')
        data = JSON.parse(data);
      // alert(data.triggerId);

      if(data.triggerId === 'btnMap') {
        bridge.callHandler('getUserToken', null, function(response) {
          if (response == null) {
            var loginParams = {
              triggerId: 'btnLogin'
            };
            bridge.callHandler('login', loginParams, function(lresponse) {});
            return;
          }
          if(typeof response === 'string')
            response = JSON.parse(response);
          var rData = response;
          var token = rData.token;
          var phone = rData.phone;
          var triggerId = rData.triggerId;
          $('#token').val(token);
          $('#trigger').val(triggerId);
          $('#respData').val(rData);

          /*        setTimeout(function(){
           window.location.href = 'second.html';
           }, 300);*/

        }); //jsbrige.call 结束
      } else if(data.triggerId === 'btnRefresh') {
        window.location.reload();
      }

      var barNavParam = {};
      barNavParam.triggerId = 'true';
      responseCallback(barNavParam);
    });

    //定义右上角按钮
    $('.btn-barNavBtn').click(function () {
      var btnParams = {
        position: 'right',
        triggerId: 'btnMap',
        icon: 'http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png',
        title: '附近',
        type: '0'
      };
      bridge.callHandler('barNavBtn', btnParams, function(response) {});
    });

    //定义右上角按钮
    $('.btn-barRefreshBtn').click(function () {
      var btnParams = {
        position: 'right',
        triggerId: 'btnRefresh',
        icon: 'http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png',
        title: '刷新',
        type: '0'
      };
      bridge.callHandler('barNavBtn', btnParams, function(response) {});
    });

    //清除右上角按钮
    $('.btn-barNavBtn2').click(function () {
      var btnParams = {
        position: 'right',
        triggerId: 'btnMap',
        icon: 'xm-icon-map',
        title: '',
        type: '-1'
      };
      bridge.callHandler('barNavBtn', btnParams, function(response) {});
    });

    // 获取分享相关参数
    $('.btn-share').bind('click', function (event) {
      var menuArr = [];
      menuArr.push('1');
      bridge.callHandler('setOptionMenu', menuArr, function (response) {

      });

      bridge.registerHandler('getShareParamHandler', function(data, responseCallback) {
        var shareParam = {};
        shareParam.title = '浙商银行汽车卡申请';
        shareParam.desc = '车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！';
        shareParam.linkUrl = 'http://www.xiaomadada.com/credit/ccamobile?f=share';
        shareParam.imgUrl = 'http://7xjclc.com2.z0.glb.clouddn.com/1012.png';
        shareParam.imgUrlWb = 'http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png';
        shareParam.buttons = [1, 2, 3, 4];
        responseCallback(shareParam);
      });
    });

    //打开新的webview
    $('.btn-openView').click(function () {
      var btnParams = {
        url: 'http://www.xiaomadada.com'
      };
      bridge.callHandler('openView', btnParams, function(response) {});
    });

    //弱提示
    function alertMsg(msgText) {
      var msgObj = {};
      msgObj.message = msgText;
      bridge.callHandler('sendToastMsg', msgObj, function(
        response) {

      });
    }
    $('.btn-toast').click(function () {
      alertMsg('成功');
    });
    //获取地理位置
    $('.btn-position').click(function () {
      bridge.callHandler('getCurrentPosition', null, function (response) {
        alertMsg(response);
      });
    });
    //获取当前网络状态
    $('.btn-netState').click(function () {
      bridge.callHandler('callForNetworkState', null, function (response) {
        alertMsg(response);
      });
    });
    //拨打电话
    $('.btn-callPhone').click(function () {
      var phoneNumber = {};
      phoneNumber.phoneNum = '110';
      JSON.stringify(phoneNumber);
      bridge.callHandler('getPhoneCall', phoneNumber, function (response) {
      });
    });

    //上传图片
    var imgResponsiveClickHandler = function(event) {
      var target = event.currentTarget;
      var data = {};
      data.imgId = target.id;
      data.type = '2';
      data.width = '200';
      data.height = '200';
      data.uploadUrl = 'http://dev01.xiaomadada.com/paa/rest/api/fileupload';
      bridge.callHandler('selectSingleImage', data, function(response) {
      });
    };

    bridge.registerHandler('singleImageBefore',
      function(data, responseCallback) {
        var imageObj = JSON.parse(data);
        var thisId = '#' + imageObj.imgId;
        responseCallback(null);
      });

    bridge.registerHandler('singleImageBack',
      function(data, responseCallback) {
        if(typeof data === 'string') {
          data = JSON.parse(data);
        }
        if (data.imageUrl !== null && data.imageUrl !== '') {
          alertMsg('上传成功');
          // alert(data.imageUrl);
          $('.img-uploadImg').attr('src', data.imageCodeStr);

        } else {
          alertMsg('上传失败');
        }
        responseCallback(null);
      });
    $('.btn-uploadImg').bind('click', imgResponsiveClickHandler);

    // 调用modal弹框
    $('.btn-modal').bind('click', function (event) {

      var modalParams = {
        modalId: 'modal1',
        title: '警告',
        text: '用户名不存在',
        type: '0',
        buttons: [
          {
            text: '取0消',
            value: 0
          },
          {
            text: '确1定',
            value: 1
          },
          {
            text: '待2定',
            value: 2
          }
        ]
      };

      bridge.callHandler('modal', modalParams, function(response) {

      }); //jsbrige.call 结束
    });

    // 调用navi导航
    $('.btn-navi').bind('click', function (event) {

      var naviParams = {
        distination: '117.500244,40.417801',
        name: '小马达达国际研发中心'
      };

      bridge.callHandler('navi', naviParams, function(response) {

      }); //jsbrige.call 结束
    });

    $('.btn-login').bind('click', function (event) {

      bridge.callHandler('getUserToken', null, function(response) {
        if (response == null) {
          var loginParams = {
            triggerId: 'btnLogin'
          };
          bridge.callHandler('login', loginParams, function(lresponse) {});
          return;
        }

        var rData = JSON.parse(response);
        var token = rData.token;
        var phone = rData.phone;
        var triggerId = rData.triggerId;
        $('#token').val(token);
        $('#trigger').val(triggerId);
        $('#respData').val(rData);

        /*        setTimeout(function(){
         window.location.href = 'second.html';
         }, 300);*/

      }); //jsbrige.call 结束
    });

    $('.btn-custom-share').click(function () {
      bridge.registerHandler('getShareParamHandler', function(data, responseCallback) {
        var shareParam = {};
        shareParam.title = '浙商银行汽车卡申请';
        shareParam.desc = '车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！';
        shareParam.linkUrl = 'http://www.baidu.com';
        shareParam.imgUrl = 'http://7xjclc.com2.z0.glb.clouddn.com/1012.png';
        shareParam.imgUrlWb = 'http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png';
        shareParam.buttons = [1, 2, 3, 4];
        responseCallback(shareParam);
      });

      bridge.callHandler('callShareAction', {}, function(Sresponse) {});
    });

    $('.btn-update-guide').click(function () {

      var u = navigator.userAgent;

      // 调用modal弹框

      var version = window.navigator.userAgent;

      var modalParams = {
        modalId: 'modalUpdate1',
        title: '温馨提示',
        text: '您的版本太低啦，赶快升级最新版本享受更多优质服务！',
        type: '0',
        buttons: [
          {
            text: '忽略',
            value: 0
          },
          {
            text: '前去更新',
            value: 1
          }
        ]
      };

      bridge.callHandler('modal', modalParams, function(response) {
      }); //jsbrige.call 结束
    });

  });

});
