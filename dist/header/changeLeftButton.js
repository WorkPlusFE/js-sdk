"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 更换左侧按钮和定义动作
 * @description 设置左侧按钮的选项
 * @param {ChangeLeftButtonOptions} options
 * @module webview
 * @returns 无
 */
function changeLeftButton(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'changeLeftButton', [options.items]);
}
exports.default = changeLeftButton;
