"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scanner_1 = require("./scanner");
var voiceToText_1 = require("./voiceToText");
var copyText_1 = require("./copyText");
var tel_1 = require("./tel");
var vibrate_1 = require("./vibrate");
var generateBarcode_1 = require("./generateBarcode");
var generateQrcode_1 = require("./generateQrcode");
exports.default = {
    /** 扫描二维码 */
    scanner: scanner_1.default,
    /** 语音转文本 */
    voiceToText: voiceToText_1.default,
    /** 复制文本 */
    copyText: copyText_1.default,
    /** 打电话 */
    tel: tel_1.default,
    /** 震动 */
    vibrate: vibrate_1.default,
    /** 生成条形码 */
    generateBarcode: generateBarcode_1.default,
    /** 生成二维码 */
    generateQrcode: generateQrcode_1.default,
};
