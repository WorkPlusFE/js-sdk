"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 锁定网页顶部栏
 * @description 锁定顶部栏，使得顶部栏按钮无效
 * @param {NavigationParams} mode
 * @module webview
 * @returns 无
 */
function navigation(mode) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'navigation', [mode]);
}
exports.default = navigation;
