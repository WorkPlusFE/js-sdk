"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../../core");
var constants_1 = require("../../constants");
/**
 * 获取设备信息
 * @description 获取当前设备和 APP 的一些信息
 * @param {DeviceOptions<[], DeviceInfoRes>} [options]
 * @returns {Promise<DeviceInfoRes>}
 */
function getDeviceInfo(options) {
    return core.exec(constants_1.WORKPLUS_DEVICE, 'getDeviceInfo', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getDeviceInfo;
