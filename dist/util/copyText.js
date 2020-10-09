"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 复制文本
 * @description 复制文本
 * @param {string}
 * @module webview
 * @returns {void}
 */
function copyText(text) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'copyText', [{ text: text }]);
}
exports.default = copyText;
