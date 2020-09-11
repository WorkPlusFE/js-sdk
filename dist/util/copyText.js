"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 复制文本
 * @description 复制文本
 * @param {CopyTextOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
function copyText(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'copyText', [options.text]);
}
exports.default = copyText;
