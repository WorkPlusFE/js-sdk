"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDeviceInfo_1 = require("./getDeviceInfo");
var getIpAddress_1 = require("./getIpAddress");
var getPedometerData_1 = require("./getPedometerData");
var getAppInfo_1 = require("./getAppInfo");
exports.default = {
    /** 获取设备信息 */
    getDeviceInfo: getDeviceInfo_1.default,
    /** 获取 IP 地址 */
    getIpAddress: getIpAddress_1.default,
    /** 获取运动数据 */
    getPedometerData: getPedometerData_1.default,
    /** 获取 App 信息 */
    getAppInfo: getAppInfo_1.default,
};
