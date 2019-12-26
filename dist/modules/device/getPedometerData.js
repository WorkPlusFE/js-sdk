"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
/**
 * 获取设备的运动数据
 * @description 获取设备当天凌晨0点至当前时间的运动数据 (从版本3.12.1起提供)
 * @param {DeviceOptions<[], PedometerDataRes>} [options]
 * @returns {Promise<PedometerDataRes>}
 */
function getPedometerData(options) {
    var _a, _b, _c, _d;
    return core.exec('WorkPlus_DeviceInfo', 'getPedometerData', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = getPedometerData;
