"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * @description 视频录制
 * @param {Options} options
 * @module video
 * @returns {voiceRecordRes}
 */
function startVideoRecoder(options) {
    return core.exec(constants_1.WORKPLUS_AUDIO_AND_VIDEO, 'startVideoRecoder', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = startVideoRecoder;
