"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 语音转文本
 * @description 语音转文本
 * @param {VoiceToTextOptions} [options]
 * @module webview
 * @returns {Promise<VoiceToTextRes>}
 */
function voiceToText(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'voiceToText', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = voiceToText;
