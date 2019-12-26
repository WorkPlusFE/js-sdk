"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
/**
 * 获取设备信息
 * @description 获取当前设备和 APP 的一些信息
 * @param {DeviceOptions<[], DeviceInfoRes>} [options]
 * @returns {Promise<DeviceInfoRes>}
 */
function getDeviceInfo(options) {
    var _a, _b, _c, _d;
    return core.exec('WorkPlus_DeviceInfo', 'getDeviceInfo', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = getDeviceInfo;
