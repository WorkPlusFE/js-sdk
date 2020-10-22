"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 显示搜索栏
 * @description 让原生头部变成一个搜索框。
 * @param {ShowSearch} [options]
 * @module webview
 * @version 4.10.0+
 * @returns  {Promise<ShowSearchRes>}
 */
function showSearchBar(options) {
    var args = {
        visible: true,
        hint: (options === null || options === void 0 ? void 0 : options.hint) || '',
        cancel_mode: (options === null || options === void 0 ? void 0 : options.cancelMode) || 'reset',
    };
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'searchBar', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = showSearchBar;
