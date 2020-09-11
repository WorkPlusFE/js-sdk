"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scanner_1 = require("./scanner");
var voiceToText_1 = require("./voiceToText");
var copyText_1 = require("./copyText");
exports.default = {
    /** 扫描二维码 */
    scanner: scanner_1.default,
    /** 语音转文本 */
    voiceToText: voiceToText_1.default,
    /** 复制文本 */
    copyText: copyText_1.default,
};
