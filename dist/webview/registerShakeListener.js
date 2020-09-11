"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 注册摇一摇监听
 * @description 前端需要实现 onWorkplusShake 方法, 摇一摇后将会触发该方法
 * @param {NotResOptions} [options]
 * @module webview
 * @returns 无
 */
function registerShakeListener(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'registerShakeListener', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = registerShakeListener;
