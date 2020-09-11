"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取设备信息
 * @description 获取当前设备和 APP 的一些信息
 * @param {DeviceOptions<[], DeviceInfoRes>} [options]
 * @returns {Promise<DeviceInfoRes>}
 */
function getDeviceInfo(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_DEVICE, 'getDeviceInfo', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getDeviceInfo;
