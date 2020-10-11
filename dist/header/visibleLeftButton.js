"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 是否隐藏或显示左侧的按钮和关闭字样
 * @description 是否隐藏或显示左侧的按钮和关闭字样
 * @param {VisibleLeftButtonOptions} options
 * @module webview
 * @returns 无
 */
function visibleLeftButton(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'visibleLeftButton', [options]);
}
exports.default = visibleLeftButton;
