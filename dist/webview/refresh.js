"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endPullRefresh = exports.startPullRefresh = exports.onPullRefresh = exports.configPullRefresh = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 下拉刷新-配置
 * @param {configPullRefreshOptions} [options]
 * @module webview
 * @returns {ConfigPullRefreshRes}
 */
function configPullRefresh(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'configPullRefresh', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.configPullRefresh = configPullRefresh;
/**
 * 下拉刷新-监听
 * @param {onPullRefreshOptions} [options]
 * @module webview
 * @returns {OnPullRefreshRes}
 */
function onPullRefresh(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'onPullRefresh', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.onPullRefresh = onPullRefresh;
/**
 * 下拉刷新-主动触发
 * @param {startPullRefreshOptions} [options]
 * @module webview
 * @returns {StartPullRefreshRes}
 */
function startPullRefresh(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'startPullRefresh', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.startPullRefresh = startPullRefresh;
/**
 * 下拉刷新-停止
 * @param {EndPullRefreshResOptions} [options]
 * @module webview
 * @returns {EndPullRefreshRes}
 */
function endPullRefresh(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'endPullRefresh', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.endPullRefresh = endPullRefresh;
