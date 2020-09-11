"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前连接Wifi信息
 * @description 获取当前连接Wifi信息, 包括 bssid, 名字等
 * @param {GetWifiOptions>} [options]
 * @module network
 * @returns 当前连接的Wifi信息
 */
function getWifiInfo(options) {
    return core.exec(constants_1.WORKPLUS_NETWORK, 'getWifiInfo', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getWifiInfo;
