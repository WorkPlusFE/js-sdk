"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDeviceInfo_1 = require("./getDeviceInfo");
var getIpAddress_1 = require("./getIpAddress");
var getPedometerData_1 = require("./getPedometerData");
exports.default = {
    getDeviceInfo: getDeviceInfo_1.default,
    getIpAddress: getIpAddress_1.default,
    getPedometerData: getPedometerData_1.default,
};
