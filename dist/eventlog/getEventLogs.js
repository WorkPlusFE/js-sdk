"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取事件日志数据
 * @description 根据传参条件, 返回对应的事件日志数据
 * @param {EventlogOptions<EventLogsParams[], EventLogsRes>} [options]
 * @returns {Promise<EventLogsRes>}
 */
function getEventLogs(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_EVENTLOG, 'getEventLogs', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getEventLogs;
