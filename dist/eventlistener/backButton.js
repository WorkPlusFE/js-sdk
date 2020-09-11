"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindBackButtonEvent = void 0;
/**
 * 绑定安卓物理返回按钮事件
 * @description 该方法只需要执行一次，一旦绑定，返回按钮的原始事件将失效，然后返回逻辑都需要在回调方法中处理
 * @param {Function} callback
 */
function bindBackButtonEvent(callback) {
    var action = 'backbutton';
    var backButtonEvent = function (channel) {
        if (channel.action === action && typeof callback === 'function') {
            callback();
        }
    };
    /* eslint @typescript-eslint/no-empty-function: 0 */
    cordova.exec(function () { }, function () { }, 'CoreAndroid', 'overrideBackbutton', [true]);
    cordova.exec(backButtonEvent, function () { }, 'CoreAndroid', 'messageChannel', []);
}
exports.bindBackButtonEvent = bindBackButtonEvent;
