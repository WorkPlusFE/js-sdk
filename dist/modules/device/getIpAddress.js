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
    var _a, _b, _c, _d;
    return core.exec(constants_1.WORKPLUS_DEVICE, 'getIpAddress', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = getIpAddress;
