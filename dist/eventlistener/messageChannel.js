"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindMessageChannel = void 0;
var constants_1 = require("../constants");
/**
 * 页面事件监听
 * @description ios/android 统一 resume/pause/back 事件的监听方式
 */
function bindMessageChannel(callback) {
    cordova.exec(function (result) {
        callback && callback(result);
    }, function () { }, constants_1.WORKPLUS_WEBVIEW, 'messageChannel', []);
}
exports.bindMessageChannel = bindMessageChannel;
