'use strict';

$(function () {

  var _self = this;

  $.jsBridgeInit(this, function (bridge) {



    if (bridge) {
      // 绑定返回事件
      bridge.returnBackHandler({
        isFirstPage: true
      }, _self, function () {

      });

      // 定义分享参数
      bridge.getShareParamHandler({
        title: '浙商银行汽车卡申请',
        desc: '车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！',
        linkUrl: 'http://www.xiaomadada.com/credit/ccamobile?f=share',
        imgUrl: 'http://7xjclc.com2.z0.glb.clouddn.com/1012.png',
        imgUrlWb: 'http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png',
        buttons: [1, 2, 3, 4]
      });

      // 定义右上角按钮点击事件回调
      bridge.barNavBtnHandler(_self, function (response) {
        if (response.triggerId === 'btnShare') {
          $('#info').html(JSON.stringify(response));
          bridge.callShareAction();
        } else if (response.triggerId === 'btnNear') {
          $('#info').html(JSON.stringify(response));
          console.log('调用地图');
        } else if (response.triggerId === 'btnRefresh') {
          $('#info').html(JSON.stringify(response));
          location.reload();
        }
      });

      // 定义右上角按钮显示样式
      bridge.barNavBtn({
        position: 'right',
        triggerId: 'btnShare',
        icon: '',
        title: '分享',
        type: '0'  // '-1'为不显示右上角按钮
      });

      // 定义登录成功回调
      bridge.loginHandler(_self, function (response) {
        if (response.triggerId === 'btnLogin') {
          $('#info').html(JSON.stringify(response));
        } else if (response.triggerId === 'btnGo') {
          $('#info').html(JSON.stringify(response));
        } else if (response.triggerId === 'btnAddCar') {
          $('#info').html(JSON.stringify(response));
           bridge.addCar('btnAddCar', function (addcarresponse) {
          });
        }
      });

      // 定义添加爱车回调
      bridge.addCarHandler(_self, function (response) {
        if (response.triggerId === 'btnAddCar') {
          if (response.carId) {
            $('#info').html(JSON.stringify(response));
          }
        }
      });

      // 定义模态窗口回调
      bridge.modalHandler(_self, function (response) {
        if (response.modalId === 'modal') {
          $('#info').html(JSON.stringify(response));
        }
      });

      // 注册上传图片前的回调
      bridge.singleImageBefore(_self, function (response) {
        $('#info').html(JSON.stringify(response));
      });

      // 注册选择图片后的回调
      bridge.singleImageBack(_self, function (response) {
        $('#info').html(JSON.stringify(response));
        if (response.imgId === 'uploadImg') {
          if (response.imageUrl) {
            $('.img-uploadImg').attr('src', response.imageCodeStr);
          }
        }
      });

      $('.btn-login').click(function () {
        bridge.getUserToken('btnLogin', _self, function (response) {
          $('#info').html(JSON.stringify(response));
        });
      });

      $('.btn-go').click(function () {
        bridge.getUserToken('btnGo', _self, function (response) {
          $('#info').html(JSON.stringify(response));
          setTimeout(function () {
            location.href = 'second.html';
          });
        });
      });

      // 调用modal弹框
      $('.btn-modal').click(function () {
        bridge.modal({
          modalId: 'modal',
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
        });
      });

      // 调用navi导航
      $('.btn-navi').click(function () {
        bridge.navi({
          distination: '117.500244,40.417801',
          name: '小马达达国际研发中心'
        }, _self);
      });

      // 定义右上角按钮为附近操作
      $('.btn-barNavBtn').click(function () {
        bridge.barNavBtn({
          position: 'right',
          triggerId: 'btnNear',
          icon: 'http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png',
          title: '附近',
          type: '0'
        });
      });

      // 定义右上角按钮为刷新操作
      $('.btn-barRefreshBtn').click(function () {
        bridge.barNavBtn({
          position: 'right',
          triggerId: 'btnRefresh',
          icon: 'http://7xjclc.com1.z0.glb.clouddn.com/%E5%AF%BC%E8%88%AA@3x.png',
          title: '刷新',
          type: '0'
        });
      });

      // 清除右上角按钮
      $('.btn-barClearBtn').click(function () {
        bridge.barNavBtn({
          position: 'right',
          triggerId: 'btnClear',
          icon: 'xm-icon-map',
          title: '',
          type: '-1'
        });
      });

      // 重新获取分享相关参数并定义右上角分享按钮
      $('.btn-share').click(function () {
        // 定义右上角按钮显示样式
        bridge.barNavBtn({
          position: 'right',
          triggerId: 'btnShare',
          icon: '',
          title: '分享',
          type: '0'
        });
        bridge.getShareParamHandler({
          title: '浙商银行汽车卡申请',
          desc: '车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！',
          linkUrl: 'http://www.xiaomadada.com/credit/ccamobile?f=share',
          imgUrl: 'http://7xjclc.com2.z0.glb.clouddn.com/1012.png',
          imgUrlWb: 'http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png',
          buttons: [1, 2, 3, 4]
        });
      });

      // 重新获取分享相关参数，直接调用分享
      $('.btn-custom-share').click(function () {
        bridge.getShareParamHandler({
          title: '浙商银行汽车卡申请',
          desc: '车主福利，汽车卡来袭！属于车主的信用卡，各种优惠等您来享！',
          linkUrl: 'http://www.xiaomadada.com/credit/ccamobile?f=share',
          imgUrl: 'http://7xjclc.com2.z0.glb.clouddn.com/1012.png',
          imgUrlWb: 'http://7xjclc.com2.z0.glb.clouddn.com/1012-wb.png',
          buttons: [1, 2, 4]
        });
        bridge.callShareAction();
      });

      // 打开新的webview
      $('.btn-openView').click(function () {
        bridge.openView('http://www.xiaomadada.com');
      });

      // 弹出弱提示
      $('.btn-toast').click(function () {
        bridge.toastMsg('提示成功');
      });

      // 获取地理位置
      $('.btn-position').click(function () {
        bridge.getCurrentPosition(_self, function (response) {
          $('#info').html(JSON.stringify(response));
        });
      });

      // 获取当前网络状态
      $('.btn-netState').click(function () {
        bridge.callForNetworkState(_self, function (response) {
          $('#info').html(JSON.stringify(response));
        });
      });

      // 拨打电话
      $('.btn-callPhone').click(function () {
        bridge.getPhoneCall({
          phoneNum: '13819493700'
        }, _self, function (response) {
          $('#info').html(JSON.stringify(response));
        });
      });

      // 添加爱车
      $('.btn-addCar').click(function () {
        bridge.getUserToken('btnAddCar', _self, function (response) {
          $('#info').html(JSON.stringify(response));
          bridge.addCar('btnAddCar', function (addcarresponse) {
          });
        });
      });

      // 上传图片
      $('.btn-uploadImg').click(function () {
        bridge.selectSingleImage({
          imgId: 'uploadImg',
          type: '2',
          width: '200',
          height: '200',
          uploadUrl: 'http://dev01.xiaomadada.com/paa/rest/api/fileupload'
        }, _self, function (response) {
          $('#info').html(JSON.stringify(response));
        });
      });

      // 通知安卓客户端是否为第三方页面
      $('.btn-notify').click(function () {
        bridge.thirdPartyPageNotify({
          isThirdPartyPage: false
        });
      });
    }

  });

});
