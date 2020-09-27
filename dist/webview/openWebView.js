"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开一个网页
 * @description 传入地址，打开 WorkPlus 网页
 * @param {OpenWebViewParams} options
 * @module webview
 * @returns 无
 */
function openWebView(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'openWebView', [options]);
}
exports.default = openWebView;
