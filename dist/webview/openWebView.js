"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开一个网页
 * @description 传入地址，打开 WorkPlus 网页
 * @param {OpenWebView} options
 * @module webview
 * @returns 无
 */
function openWebView(options) {
    var args = {
        url: options.url,
        title: options.title,
        use_android_webview: (options === null || options === void 0 ? void 0 : options.useAndroidWebview) || false,
        use_system_webview: (options === null || options === void 0 ? void 0 : options.useSystemWebview) || false,
        display_mode: (options === null || options === void 0 ? void 0 : options.displayMode) || '',
    };
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'openWebView', [args]);
}
exports.default = openWebView;
