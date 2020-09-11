"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取IP地址
 * @description 获取当前连接状态下的IP地址
 * @param {DeviceOptions<[], IpAddressRes>} [options]
 * @returns {Promise<IpAddressRes>}
 */
function getIpAddress(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_DEVICE, 'getIpAddress', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getIpAddress;
