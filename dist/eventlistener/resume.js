"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindResumeEvent = void 0;
var bind_1 = require("./bind");
var is_1 = require("../shared/is");
var platform_1 = require("../shared/platform");
/**
 * 页面返回
 * @description 当页面重新可见并可交互时，WorkPlus 会产生回调，开发者可监听此resume事件，并处理特定的业务逻辑
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
