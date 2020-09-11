"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 清除右侧按钮
 * @description 清除右侧按钮事件和显示
 * @param {ClearLeftButtonOptions} [options]
 * @module webview
 * @returns 无
 */
function clearRightButtons(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'clearRightButtons', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = clearRightButtons;
