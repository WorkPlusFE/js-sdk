"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 更换左侧按钮动作
 * @description 传入一个全局的函数名，点击左侧按钮时时执行
 * @param {LeftButtonOptions} options
 * @module webview
 * @returns 无
 */
function leftButton(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'leftButton', [options.method]);
}
exports.default = leftButton;
