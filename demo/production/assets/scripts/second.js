"use strict";$(function(){connectWebViewJavascriptBridge(function(n){var e=[];n.callHandler("setOptionMenu",e,function(n){}),n.registerHandler("returnBackHandler",function(n,e){var r={};r.isFirstPage="true",e(r)})})});