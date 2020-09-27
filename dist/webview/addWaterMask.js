"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 添加水印
 * @description 给页面添加水印
 * @param {AddWaterMaskParams} options
 * @module webview
 * @returns 无
 */
function addWaterMask(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'addWaterMask', [options]);
}
exports.default = addWaterMask;
