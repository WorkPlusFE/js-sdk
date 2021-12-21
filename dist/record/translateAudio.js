"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * @description 音频转mp3格式
 * @param {Options} options
 * @module record
 * @returns {voiceRecordRes}
 */
function translateAudio(options) {
    return core.exec(constants_1.WORKPLUS_AUDIO_AND_VIDEO, 'translateAudio', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = translateAudio;
