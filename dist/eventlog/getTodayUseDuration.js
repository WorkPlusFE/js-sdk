"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前登陆用户今天在线时长
 * @param {EventlogOptions<TodayUseDurationRes>} [options]
 * @returns {Promise<TodayUseDurationRes>}
 */
function getTodayUseDuration(options) {
    return core.exec(constants_1.WORKPLUS_EVENTLOG, 'getTodayUseDuration', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getTodayUseDuration;
