"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 更换头部title
 * @description 设置Webview的头部标题
 * @param {string} title
 * @module webview
 * @returns 无
 */
function setTitle(title) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'title', [title]);
}
exports.default = setTitle;
