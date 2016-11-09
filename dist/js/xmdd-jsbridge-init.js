'use strict';

function JsBridge(bridge) {
  this.bridge = bridge;
  this.init.apply(this, arguments);
}

/**
 * 右上角Menu蓝
 * @param message
 */
JsBridge.prototype.setOptionMenu = function(menuArray) {
  var bridge = this.bridge;
  bridge.callHandler('setOptionMenu', menuArray, function (response) {});
};

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
 * 登录成功后回调 response中包含token phone triggerId
 * @param caller
 * @param callback
 */
JsBridge.prototype.loginHandler = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.registerHandler('loginHandler', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }

    var loginParam = {};
    loginParam.triggerId = 'btnLogin';
    responseCallback(loginParam);
  });
};

/**
 * 唤起登录
 * @param triggerId
 * @param caller
 * @param callback
 */
JsBridge.prototype.login = function(triggerId, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var bridge = this.bridge;
  var loginParams = {
    triggerId: triggerId
  };
  bridge.callHandler('login', loginParams, function (response) {});

  if(caller && typeof callback === 'function') {
    callback.apply(caller, Array.prototype.concat(triggerId, args));
  }
};

/**
 * 添加爱车成功后回调
 * @param caller
 * @param callback
 */
JsBridge.prototype.addCarHandler = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.registerHandler('addCarHandler', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    /*        var token = response.token;
     var phone = response.phone;
     var triggerId = response.triggerId;*/

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }

    var addCarParam = {};
    addCarParam.triggerId = 'btnAddCar';
    responseCallback(addCarParam);
  });
};

/**
 * 唤起添加爱车
 * @param triggerId
 * @param caller
 * @param callback
 */
JsBridge.prototype.addCar = function(triggerId, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var bridge = this.bridge;
  var addCarParams = {
    triggerId: triggerId
  };
  bridge.callHandler('addCar', addCarParams, function (response) {});

  if(caller && typeof callback === 'function') {
    callback.apply(caller, Array.prototype.concat(triggerId, args));
  }
};
/**
 * 左上角返回按钮
 * @param backParams
 * @param caller
 * @param callback
 */
JsBridge.prototype.returnBackHandler = function(backParams, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var bridge = this.bridge;
  // 定义返回
  bridge.registerHandler('returnBackHandler', function(response, responseCallback) {

    if(caller && typeof callback === 'function') {
      callback.apply(caller, args);
    }
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
 * @param btnRightParams
 */
JsBridge.prototype.barNavBtn = function(btnRightParams) {
  var bridge = this.bridge;
  // 定义右上角按钮
  /*  var btnRightParams = {
   position: 'right',
   triggerId: triggerId,
   icon: '',
   title: title,
   type: '0' // '-1' 表示清除
   };*/
  bridge.callHandler('barNavBtn', btnRightParams, function(response) {});
};

/**
 * 唤起分享框
 */
JsBridge.prototype.callShareAction = function() {
  var bridge = this.bridge;
  bridge.callHandler('callShareAction', null, function(response) {});
};

/**
 * 右上角按钮事件回调
 * @param caller
 * @param callback
 */
JsBridge.prototype.barNavBtnHandler = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.registerHandler('barNavBtnHandler', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 模态窗口回调
 * @param caller
 * @param callback
 */
JsBridge.prototype.modalHandler = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.registerHandler('modalHandler', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }

    var modalParam = {};
    modalParam.value = 0;
    modalParam.modalId = 'modal';
    responseCallback(modalParam);
  });
};


/**
 * 选择图片前回调
 * @param caller
 * @param callback
 */
JsBridge.prototype.singleImageBefore = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.registerHandler('singleImageBefore', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }

    responseCallback(null);
  });
};


/**
 * 选择图片后回调
 * @param caller
 * @param callback
 */
JsBridge.prototype.singleImageBack = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.registerHandler('singleImageBack', function (response, responseCallback) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
    responseCallback(null);
  });
};

/**
 * 打开模态窗口
 * @param modalParams
 */
JsBridge.prototype.modal = function(modalParams) {
  var bridge = this.bridge;
  bridge.callHandler('modal', modalParams, function(response) {});
};

/**
 * 只提供给安卓客户端判断使用，通知安卓客户端是否为第三方页面
 * @param modalParams
 */
JsBridge.prototype.thirdPartyPageNotify = function(notifyParams) {
  var bridge = this.bridge;
/*  var notifyParams = {
    isThirdPartyPage: false
  };*/
  bridge.callHandler('thirdPartyPageNotify', notifyParams, function(response) {});
};


/**
 * 获取定位
 * @param caller
 * @param callback
 */
JsBridge.prototype.getCurrentPosition = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.callHandler('getCurrentPosition', null, function (response) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 获取当前网络状态
 * @param caller
 * @param callback
 */
JsBridge.prototype.callForNetworkState = function(caller, callback) {
  var args = Array.prototype.slice.call(arguments, 2);
  var bridge = this.bridge;
  bridge.callHandler('callForNetworkState', null, function (response) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 获取用户信息，如未登录则弹出登录框，登录后执行回调函数
 * @param triggerId
 * @param caller
 * @param callback
 */
JsBridge.prototype.getUserToken = function(triggerId, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
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

    response.triggerId = triggerId;

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 调用导航
 * @param naviParams
 * @param caller
 * @param callback
 */
JsBridge.prototype.navi = function(naviParams, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var bridge = this.bridge;
  bridge.callHandler('navi', naviParams, function (response) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 调用电话
 * @param phoneParams
 * @param caller
 * @param callback
 */
JsBridge.prototype.getPhoneCall = function(phoneParams, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var bridge = this.bridge;
  bridge.callHandler('getPhoneCall', phoneParams, function (response) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
    }
  });
};

/**
 * 调用选择图片
 * @param selectSingleImageParams
 * @param caller
 * @param callback
 */
JsBridge.prototype.selectSingleImage = function(selectSingleImageParams, caller, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var bridge = this.bridge;
  bridge.callHandler('selectSingleImage', selectSingleImageParams, function (response) {
    // 注： ios直接返回的是object对象，android返回的是json的字符串，需要调用JSON.parse();
    if (typeof response === 'string')
      response = JSON.parse(response);

    if(caller && typeof callback === 'function') {
      callback.apply(caller, Array.prototype.concat(response, args));
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
  /**
   * 初始化jsBridgeInit方法
   * @param caller
   * @param callback
   */
  $.jsBridgeInit = function init(caller, callback) {
    var args = Array.prototype.slice.call(arguments, 2);
    var regExp = /(?:(?:XmddApp\()(?:\w+)|(?:Xmdd))+[\/]{0,1}([\d.]+)(?:\))?/i; //兼容旧版本
    if(regExp.test(navigator.userAgent)) {
      connectWebViewJavascriptBridge(function (bridge) {
        if(caller && typeof callback === 'function') {
          callback.apply(caller, Array.prototype.concat(new JsBridge(bridge), args));
        }
      });
    } else {
      if(caller && typeof callback === 'function') {
        callback.apply(caller, Array.prototype.concat(undefined, args));
      }
    }
  };
})(jQuery);
