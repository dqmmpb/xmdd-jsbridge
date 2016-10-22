# jsBridge接口定义

# 修订记录

| 版本 | 日期 | 修订内容 | 作者 | 审核 |
| --- | --- | --- | --- | --- |
| 3.1 | 2016-06-29 | 添加定义右上角按钮功能，添加打开新窗口已加载网页功能。 | 赵骏 |   |
|     | 2016-07-04 | getShareParamHandler定义分享途径 | 赵骏 |   |
|     | 2016-07-19 | [**singleImageBack**](#singleImageBack) 返回base64的换行符在不同设备下不同，新增通用正则表达式解决换行符 |   |   |
| 3.4 | 2016-09-19 | addCar定义页面点击新增车辆，并返回车辆ID | 胡斐 |   |


# **一、接口约定**

1、数据类型约定
所有数据通过json格式进行传输，json数据value值限定为字符串
比如
```json
{"success":true}
应该写成{"success":"true"}
{"money":3.2}
应该写成{"money":"3.2"}
```

2、回调约定
```
回调结果即使为nil或null，同样需要回调responseCallback
```

# **二、客户端jsBridge接口说明**

| 接口名 | <span id="setOptionMenu">**setOptionMenu**</span> |
| --- | --- |
| 功能 | 设置右上角菜单按钮 |
| 请求参数示例 | ["1"]请求参数为数组对象类型//type = 1表示类型为分享的按钮，多个功能按钮的情况下个版本考虑 |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 需要分享的页面调用一次 |


| 接口名 | <span id="getUserToken">**getUserToken**</span> |
| --- | --- |
| 功能 | 传递用户token |
| 请求参数示例 | null |
| 回调结果示例 | <code>{"token": "0h7wvc7s2bvv","phone": "15869163333"}</code>返回含token和手机号的json格式的字符串 若没有登录则返回nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 需要获取用户token和手机号的地方调用 |


| 接口名 | <span id="sendToastMsg">**sendToastMsg**</span> |
| --- | --- |
| 功能 | 发送需显示的弱提示框信息 |
| 请求参数示例 | <code>{"message":"网络错误"}</code> |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 需要弹出弱提示框的地方调用 |


| 接口名 | <span id="getCurrentPosition">**getCurrentPosition**</span> |
| --- | --- |
| 功能 | 传递地理位置信息 |
| 请求参数示例 | null |
| 回调结果示例 | <code>{"province":"浙江省", "city":"杭州市", "district":"滨江区", "longitude":"180.123", "latitude":"23.456"}</code>为json格式的字符串类型  |
| 执行调用 | 需要地理位置的页面进行调用 |


| 接口名 | <span id="callForNetworkState">**callForNetworkState**</span> |
| --- | --- |
| 功能 | 获取当前网络状态 |
| 请求参数示例 | null |
| 回调结果示例 | <code>{"state":"1"} </code>为含有网络状态的json格式的字符串类型state = 0代表无网络state = 1代表运营商网络state = 2代表无线网络 |
| 执行调用 | 需要获取网络状态的页面调用 |


| 接口名 | <span id="getPhoneCall">**getPhoneCall**</span> |
| --- | --- |
| 功能 | 拨打电话 |
| 请求参数示例 | <code>{"phoneNum":"17715246321"}</code> |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 需要拨打电话号码的时候调用 |


| 接口名 | <span id="callShowImage">**callShowImage**</span> |
| --- | --- |
| 功能 | 点击显示大图 |
| 请求参数示例 | <code>{"imgUrl": "http://192.168.1.70:82/xmappweb/resources/images/onefen1011/footer-logo.png"}</code>请求参数为含有图片url的json对象 |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 需要浮现的图片调用一次 |


| 接口名 | <span id="selectSingleImage">**selectSingleImage**</span> |
| --- | --- |
| 功能 | 由app切换到用户图片选择目录 |
| 请求参数示例 | <code>{"imgId":"banner-img", "width":"0", "height":"0", "type":"0", "uploadUrl":"http://dev.xiaomadada.com/paaweb/general/fileupload"}</code> imgId-用来唯一标识页面显示图片的位置width、height-宽度、高度，根据该宽度、高度生成缩略图，若宽度、高度为0则返回原图type-图片上传类型区分，调用上传接口时作为请求参数uploadUrl-图片上传url |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 需要上传单张图片调用一次 |


| 接口名 | <span id="thirdPartyPageNotify">**thirdPartyPageNotify**</span> |
| --- | --- |
| 功能 | 通知安卓客户端当前页面是否属于第三方页面 |
| 请求参数示例 | <code>{"isThirdPartyPage":"false"}</code>  |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 服务端网页每次加载时先调用该接口（该接口目前只有android端有实现，调用之前先判断客户端是否属于android端） |


| 接口名 | <span id="modal">**modal**</span> |
| --- | --- |
| 功能 | 弹出modal模态窗口 |
| 请求参数示例 | <code>{"modalId": "modal1", "title":"警告", "text":"用户名不存在","type":  "0", "buttons": [{"text": "取消", "value": 0}, {"text": "确定", "value": 1}, {"text": "待定", "value": 2  }]}</code> title-模态窗口标题text-模态窗口内容type-模态窗口类型   0-温馨提示   1-提交成功   2-提交失败buttons-模态窗口显示的按钮，Array，为1～3个，至少传递1个button    name-按钮名称    text-按钮显示的文本    value-按钮值 |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 服务端网页需要弹出alert、confirm等提示框时调用，回调函数统一调用 [modalHandler](#modalHandler) |


| 接口名 | <span id="navi">**navi**</span> |
| --- | --- |
| 功能 | 导航 |
| 请求参数示例 | <code>{"distination": "120.2,30.2", "name":"AAAA"}</code> distination-经纬度，","分割，如117.500244, 40.417801 经纬度小数点不超过6位name-目的地的名称  |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 调用导航 |


| 接口名 | <span id="login">**login**</span> |
| --- | --- |
| 功能 | 弹出登录窗口 |
| 请求参数示例 | <code>{"triggerId": "btn1"}</code> triggerId-事件ID |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 服务端网页需要调用弹出登录页面，回调函数统一调用 [loginHandler](#loginHandler) |


| 接口名 | <span id="barNavBtn">**barNavBtn**</span> |
| --- | --- |
| 功能 | 定义右上角内容 |
| 请求参数示例 | <code>{"position": "right", "triggerId": "btnMap", "icon": "xm-icon-map", "title": "附近", "type": "0"}</code>Icon-按钮图标名称/路径Title-按钮文本内容,position-按钮在工具栏的位置，默认右边type-按钮类型-1-清除定义的按钮0-纯文本   1-纯图标2-图标+文本，图标在左，文本在右   3-文本+图标，文本在左，图标在右 triggerId-事件ID |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 服务端网页需要调用弹出登录页面，回调函数统一调用 [barNavBtnHandler](#barNavBtnHandler) |


| 接口名 | <span id="openView">**openView**</span> |
| --- | --- |
| 功能 | 打开新的View加载url指定的页面 |
| 请求参数示例 | <code>{"url": "http://www.xiaomadada.com"}</code> url-url地址 |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 服务端网页需要调用打开一个新的webview页面加载url指定的地址 |


| 接口名 | <span id="addCar">**addCar**</span> |
| --- | --- |
| 功能 | app新增车辆 |
| 请求参数示例 | <code>{"triggerId": "btnAddCar"}</code> triggered- 点击事件ID |
| 回调结果示例 | nil或null，其中nil为ios端，null为anroid端 |
| 执行调用 | 回调函数统一调用addCarlHandler |


# **三、服务端网页jsBridge接口说明**

| 接口名 | <span id="returnBackHandler">**returnBackHandler**</span> |
| --- | --- |
| 功能 | 页面返回 |
| 请求参数示例 | nil或null，其中nil为ios端，null为anroid端 |
| 回调结果示例 | <code>{"isFirstPage": "true"}</code> isFirstPage为true表示当前页面是首级页面，由app切换到发现列表页面；为false表示当前页面是次级页面，由js切换到其它页面 |
| 执行调用 | 点击左上角返回调用一次，调用之前先调用辅助接口 [**thirdPartyPageTest**](#thirdPartyPageTest) |


| 接口名 | <span id="getShareParamHandler">**getShareParamHandler**</span> |
| --- | --- |
| 功能 | 获取页面分享相关参数 |
| 请求参数示例 | nil或null，其中nil为ios端，null为anroid端 |
| 回调结果示例 | <code>{"title": "凤凰汽车&amp;小马达达送你1分钱洗车", "desc": "西博车展专享优惠，活动期间更有全年洗车礼包！", "linkUrl": "http://www.xiaomadada.com/paaweb/general/onefen?ch=1011&amp;fr=weshare", "imgUrl": "http://7xjclc.com2.z0.glb.clouddn.com/1011.png", "imgUrlWb": http://7xjclc.com2.z0.glb.clouddn.com/1011-wb.png, "buttons": [1, 2, 3, 4]}</code> title-分享标题desc-分享描述linkUrl-分享链接imgUrl-图标链接imgUrlWb-新浪微博图标专用链接buttons-分享途径（1.微信朋友，2.微信朋友圈，3.微博，4.QQ） |
| 执行调用 | 点击右上角分享调用一次 |


| 接口名 | <span id="singleImageBack">**singleImageBack**</span> |
| --- | --- |
| 功能 | 图片上传之后返回结果 |
| 请求参数示例 | <code>{"imageCodeStr": "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAA", "imageUrl":" http://7xjclc.com2.z0.glb.clouddn.com/1011.png", "imgId":" banner-img"}</code> imageCodeStr-图片BASE64编码，以data:image/jpeg;base64,为前缀imageUrl-图片上传之后的url地址imgId-把接口 [**selectSingleImage**](#selectSingleImage) 请求的imgId再返回 备注：安卓返回的base64编码和ios返回的base64编码不一致Android app 3.1之前：以\s作为换行标识Android app 3.1之后：以\r\n作为换行标识Ios：以\r\n作为换行标识因此，返回的base64编码需要做正则表达式匹配，过滤掉上述字符，考虑到通用性，统一将\s\|\r\|\n\|\r\n全部过滤掉,js正则表达式为<code>imageCodeStr= imageCodeStr.replace(/\s\|\r\|\n\|\r\n/g,'')</code>; 若图片上传失败imageCodeStr和imageUrl置为空字符串<code>{"imageCodeStr":"","imageUrl":"","imgId":" banner-img"}</code> |
| 回调结果示例 | null |
| 执行调用 | 图片上传之后调用一次 |


| 接口名 | <span id="singleImageBefore">**singleImageBefore**</span> |
| --- | --- |
| 功能 | 告知图片开始上传 |
| 请求参数示例 | <code>{"imgId":" banner-img"}</code> imgId-把接口 [**selectSingleImage**](#selectSingleImage) 请求的imgId再返回  |
| 回调结果示例 | null |
| 执行调用 | 图片开始上传前调用一次 |

| 接口名 | <span id="modalHandler">**modalHandler**</span> |
| --- | --- |
| 功能 | 模态窗口弹出，用户点击的结果 |
| 请求参数示例 | nil或null，其中nil为ios端，null为anroid端 |
| 回调结果示例 | <code>{"value":0, "modalId": "modal1"}</code> value-用户点击的按钮（0,1,2）modalId-模态窗口事件ID |
| 执行调用 | 用户点击了模态窗口的button后执行回调 |


| 接口名 | <span id="loginHandler">**loginHandler**</span> |
| --- | --- |
| 功能 | 弹出登录窗口后，登录成功的回调函数 |
| 请求参数示例 | nil或null，其中nil为ios端，null为anroid端 |
| 回调结果示例 | <code>{"token": "0h7wvc7s2bvv", "phone": "15869163333", "triggerId": "btn1"}</code> 返回含token和手机号的json格式的字符串，triggerId为触发login操作的事件idtriggerId将在login调用时提交，原封不动传回来即可 token-用户tokenphone-用户手机号triggerId-登录事件ID |
| 执行调用 | 弹出登录窗口后，登录成功执行回调 |


| 接口名 | <span id="barNavBtnHandler">**barNavBtnHandler**</span> |
| --- | --- |
| 功能 | 点击工具栏定义按钮的回调事件 |
| 请求参数示例 | nil或null，其中nil为ios端，null为anroid端 |
| 回调结果示例 | <code>{"triggerId": "btn1"}</code> 返回triggerId为触发显示 [**barNavBtn**](#barNavBtn)操作的事件idtriggerId将在初始化定义按钮的 [**barNavBtn**](#barNavBtn) 时提交，原封不动传回来即可 triggerId- [**barNavBtn**](#barNavBtn) 事件ID |
| 执行调用 | 弹出登录窗口后，登录成功执行回调 |

| 接口名 | <span id="addCarHandler">**addCarHandler**</span> |
| --- | --- |
| 功能 | 新增车辆之后的回调事件 |
| 请求参数示例 | nil或null，其中nil为ios端，null为anroid端 |
| 回调结果示例 | <code>{"carId":0, "triggerId": " btnAddCar "}</code> carId – app回调的车辆IDtriggerId– 点击新增车辆按钮事件ID  |
| 执行调用 | 用户新增车辆后执行回调 |


# **四、服务端网页js辅助接口**

辅助接口指非jsBridge方式调用的js方法。因jsBridge的回调是异步的，考虑到发现可能会嵌入第三方页面，app在调用jsBridge的handler之前，可以通过辅助接口预先进行一些判断。

| 接口名 | <span id="thirdPartyPageTest">**thirdPartyPageTest**</span> |
| --- | --- |
| 功能 | 判断该页面是否为第三方页面 |
| 请求参数 | nil或null，其中nil为ios端，null为anroid端 |
| 返回结果 | <code>{"isThirdPartyPage":"false"}</code> |
| 执行调用 | 调用 [**returnBackHandler**](#returnBackHandler) 之前先调用该接口（该接口目前只有ios端在使用） |


# **五、android和ios端第三方网页判断差异性**

由于android端部分版本无法像ios端直接调用服务端网页js方法并获得返回值，所以在第三方网页判断上存在如下差异

1、android端

由服务端网页通过 **thirdPartyPageNotify** 接口主动通知android端

2、ios端

由ios端通过 **thirdPartyPageTest** 接口主动从服务端网页获得
