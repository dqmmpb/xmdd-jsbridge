'use strict';

$(function() {

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

      var loginParam = {};
      loginParam.triggerId = 'btnlogin';
      responseCallback(loginParam);
    });

    bridge.registerHandler('addCarHandler', function(data, responseCallback) {

      if(typeof data === 'string')
        data = JSON.parse(data);

      var triggerId = data.triggerId;
      if(triggerId === 'btnAddCar') {
        var carId = data.carId;
        $('#info').html(JSON.stringify(data));
      }


      var addCarParam = {};
      addCarParam.triggerId = 'btnAddCar';
      responseCallback(addCarParam);
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
        var triggerId = data.triggerId;
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


    $('.btn-getoken').bind('click', function (event) {
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

        window.location.href = 'second.html';

      }); //jsbrige.call 结束
    });

    $('.btn-go').bind('click', function (event) {
      bridge.callHandler('getUserToken', null, function(response) {
        if (response == null) {
          var loginParams = {
            triggerId: 'btnLogin'
          };
          bridge.callHandler('login', loginParams, function(lresponse) {});
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
            text: '好的',
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

    $('.btn-custom-share').bind('click', function (event) {
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

    $('.btn-update-guide').bind('click', function (event) {

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

    // 点击跳转新增车辆



    $('.btn-addCar').bind('click', function (event) {
      var carParams = {
        triggerId: 'btnAddCar'
      };
      bridge.callHandler('addCar', carParams, function(response) {
      }); //jsbrige.call 结束
    });
  });

});
