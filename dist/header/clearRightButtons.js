"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 清除右侧按钮
 * @description 清除右侧按钮事件和显示
 * @module webview
 * @returns 无
 */
function clearRightButtons() {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'clearRightButtons', []);
}
exports.default = clearRightButtons;
