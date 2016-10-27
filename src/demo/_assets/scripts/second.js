'use strict';

$(function() {

  $.jsBridgeInit(function(bridge) {

    // 绑定返回事件
    bridge.returnBackHandler({
      isFirstPage: false
    }, function () {
      location.href = 'index.html';
    });
  });

});
