"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 更换右侧按钮动作
 * @description 设置右侧按钮的选项
 * @param {RightButtonsOptions} options
 * @module webview
 * @returns 无
 */
function rightButtons(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'rightButtons', options.items);
}
exports.default = rightButtons;
