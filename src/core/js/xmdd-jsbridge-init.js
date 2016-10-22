'use strict';

function JsBridge(bridge) {
  this.bridge = bridge;
  this.init.apply(this, arguments);
}

/**
 * 提示框
 * @param message
 */
JsBridge.prototype.toastMsg = function(message) {
  var bridge = this.bridge;
  var msgObj = {
    message: message
  };
  bridge.callHandler('sendToastMsg', msgObj, function(response) {});
};

/**
 * 打开新窗口
 * @param url
 */
JsBridge.prototype.openView = function(url) {
  var bridge = this.bridge;
  var openViewObj = {
    url: url
  };
  bridge.callHandler('openView', openViewObj, function(response) {});
};

/**
 * 登录成功后回调
 * @param callback
 */
JsBridge.prototype.loginHandler = function(callback) {
  var bridge = this.bridge;
  bridge.registerHandler('loginHandler', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    /*        var token = response.token;
     var phone = response.phone;
     var triggerId = response.triggerId;*/

    if(typeof callback === 'function') {
      var args = Array.prototype.slice.call(arguments, 1);
      callback.apply(this, Array.prototype.concat(response, args));
    }

    var loginParam = {};
    loginParam.triggerId = 'btnLogin';
    responseCallback(loginParam);
  });
};

/**
 * 唤起登录
 * @param triggerId
 * @param callback
 */
JsBridge.prototype.login = function(triggerId, callback) {
  var bridge = this.bridge;
  var loginParams = {
    triggerId: triggerId
  };
  bridge.callHandler('login', loginParams, function (response) {});

  if(typeof callback === 'function') {
    var args = Array.prototype.slice.call(arguments, 2);
    callback.apply(this, Array.prototype.concat(triggerId, args));
  }
};

/**
 * 左上角返回按钮
 * @param backParams
 */
JsBridge.prototype.returnBackHandler = function(backParams) {
  var bridge = this.bridge;
  // 定义返回
  bridge.registerHandler('returnBackHandler', function(response, responseCallback) {
    /*    var backParam = {};
     backParam.isFirstPage = true;*/
    responseCallback(backParams);
  });
};

/**
 * 分享参数设置
 * @param shareParams
 */
JsBridge.prototype.getShareParamHandler = function(shareParams) {
  var bridge = this.bridge;
  bridge.registerHandler('getShareParamHandler', function(response, responseCallback) {
    /*    var shareParam = {};
     shareParam.title = '超值洗车季卡限时秒杀，快！';
     shareParam.desc = '拼手速的时候到了，准备开抢>>';
     shareParam.linkUrl = 'http://' + location.host + '/1075/share.html?fr=weshare';
     shareParam.imgUrl = 'https://o78yed0m9.qnssl.com/1075.png';
     shareParam.imgUrlWb = 'https://o78yed0m9.qnssl.com/1075-wb.png';
     shareParam.buttons = [1, 2, 3, 4];*/
    responseCallback(shareParams);
  });
};

/**
 * 定义右上角按钮
 * @param triggerId
 * @param title
 */
JsBridge.prototype.barNavBtn = function(btnRightParams) {
  var bridge = this.bridge;
  // 定义右上角按钮
  /*  var btnRightParams = {
   position: 'right',
   triggerId: triggerId,
   icon: '',
   title: title,
   type: '0'
   };*/
  bridge.callHandler('barNavBtn', btnRightParams, function(response) {});
};

/**
 * 获取用户信息，如未登录则弹出登录框，登录后执行回调函数
 * @param triggerId
 * @param callback
 */
JsBridge.prototype.getUserToken = function(triggerId, callback) {
  var _self = this;
  var bridge = this.bridge;
  bridge.callHandler('getUserToken', null, function (response) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if (response == null) {
      _self.login(triggerId);
      return;
    }
    /*var rData = response;
     var token = rData.token;
     var phone = rData.phone;
     */

    response.triggerId = triggerId;

    if(typeof callback === 'function') {
      var args = Array.prototype.slice.call(arguments, 2);
      callback.apply(this, Array.prototype.concat(response, args));
    }

  });

};

/**
 * 唤起分享框
 */
JsBridge.prototype.callShareAction = function() {
  var bridge = this.bridge;
  bridge.callHandler('callShareAction', {}, function(response) {});
};

/**
 * 右上角按钮事件回调
 * @param callback
 */
JsBridge.prototype.barNavBtnHandler = function(callback) {
  var bridge = this.bridge;
  bridge.registerHandler('barNavBtnHandler', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(typeof callback === 'function') {
      var args = Array.prototype.slice.call(arguments, 1);
      callback.apply(this, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 初始化JsBridge对象
 */
JsBridge.prototype.init = function() {
  // 左上角返回按钮 默认设置
  this.returnBackHandler({
    isFirstPage: true
  });
};

(function($){
  $.jsBridgeInit = function init(callback) {
    var args = Array.prototype.slice.call(arguments, 1);
    var regExp = /(?:(?:XmddApp\()(?:\w+)|(?:Xmdd))+[\/]{0,1}([\d.]+)(?:\))?/i; //兼容旧版本
    if(regExp.test(navigator.userAgent)) {
      connectWebViewJavascriptBridge(function (bridge) {
        if(typeof callback === 'function') {
          callback.apply(this, Array.prototype.concat(new JsBridge(bridge), args));
        }
      });
    } else {
      callback.apply(this, Array.prototype.concat(undefined, args));
    }
  };
})(jQuery);
