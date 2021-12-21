"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * @description 语音录制
 * @param {Options} options
 * @module record
 * @returns {voiceRecordRes}
 */
function voiceRecord(options) {
    return core.exec(constants_1.WORKPLUS_AUDIO_AND_VIDEO, 'voiceRecord', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = voiceRecord;
