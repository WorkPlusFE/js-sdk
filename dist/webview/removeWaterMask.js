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
function removeWaterMask() {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'removeWaterMask', []);
}
exports.default = removeWaterMask;
