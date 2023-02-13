"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindPauseEvent = void 0;
var bind_1 = require("./bind");
var is_1 = require("../shared/is");
var platform_1 = require("../shared/platform");
var core_1 = require("../core");
/**
 * 页面离开
 * @description 当页面不可见时，WorkPlus 会产生回调，开发者可以监听此pause事件，并处理特定的业务逻辑
 * @param {Function} callback
 */
function bindPauseEvent(callback) {
    if (!platform_1.detectInWorkPlus())
        return;
    core_1.deviceready().then(function () {
        var action = 'pause';
        var pauseEvent = function (channel) {
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
            cordova.exec(pauseEvent, function () { }, 'CoreAndroid', 'messageChannel', []);
        }
    });
}
exports.bindPauseEvent = bindPauseEvent;
