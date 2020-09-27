"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {ShareParams} options 传参
 * @module webview
 * @returns 无
 */
function share(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'share', [options]);
}
exports.default = share;
