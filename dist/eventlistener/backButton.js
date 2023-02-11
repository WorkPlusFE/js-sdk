"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unbindBackButtonEvent = exports.bindBackButtonEvent = void 0;
var constants_1 = require("../constants");
var core_1 = require("../core");
/**
 * 绑定安卓物理返回按钮事件
 * @description 该方法只需要执行一次，一旦绑定，返回按钮的原始事件将失效，然后返回逻辑都需要在回调方法中处理
 * @param {Function} callback
 */
function bindBackButtonEvent(callback) {
    core_1.deviceready().then(function () {
        var action = 'back';
        var backButtonEvent = function (channel) {
            if (channel.action === action && typeof callback === 'function') {
                callback();
            }
        };
        /* eslint @typescript-eslint/no-empty-function: 0 */
        cordova.exec(function () { }, function () { }, constants_1.WORKPLUS_WEBVIEW, 'overrideBack', [true]);
        cordova.exec(backButtonEvent, function () { }, constants_1.WORKPLUS_WEBVIEW, 'messageChannel', []);
    });
}
exports.bindBackButtonEvent = bindBackButtonEvent;
/**
 * 解除安卓物理返回按钮事件
 */
function unbindBackButtonEvent() {
    /* eslint @typescript-eslint/no-empty-function: 0 */
    core_1.deviceready().then(function () {
        cordova.exec(function () { }, function () { }, constants_1.WORKPLUS_WEBVIEW, 'overrideBack', [false]);
    });
}
exports.unbindBackButtonEvent = unbindBackButtonEvent;
