"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取设备的运动数据
 * @description 获取设备当天凌晨0点至当前时间的运动数据 (从版本3.12.1起提供)
 * @param {DeviceOptions<[], PedometerDataRes>} [options]
 * @returns {Promise<PedometerDataRes>}
 */
function getPedometerData(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_DEVICE, 'getPedometerData', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getPedometerData;
