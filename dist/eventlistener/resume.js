"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindResumeEvent = void 0;
var bind_1 = require("./bind");
var is_1 = require("../shared/is");
var platform_1 = require("../shared/platform");
/**
 * 页面不可见时触发事件
 * @description 该方法只需要执行一次，一旦绑定，原始事件将失效，然后返回逻辑都需要在回调方法中处理
 * @param {Function} callback
 */
function bindResumeEvent(callback) {
    if (!platform_1.detectInWorkPlus())
        return;
    var action = 'resume';
    var resumeEvent = function (channel) {
        if (channel.action === action && is_1.isFunction(callback)) {
            callback();
        }
    };
    if (platform_1.isIPhone()) {
        bind_1.on(action, function (ev) {
            if (is_1.isFunction(callback))
                return callback(ev);
        }, false);
    }
    if (platform_1.isAndroid()) {
        /* eslint @typescript-eslint/no-empty-function: 0 */
        cordova.exec(resumeEvent, function () { }, 'CoreAndroid', 'messageChannel', []);
    }
}
exports.bindResumeEvent = bindResumeEvent;
