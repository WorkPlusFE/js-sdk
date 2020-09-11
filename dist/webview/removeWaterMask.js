"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 移除水印
 * @description 移除水印
 * @param {RemoveWaterMask} [options]
 * @module webview
 * @returns 无
 */
function removeWaterMask(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'removeWaterMask', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = removeWaterMask;
