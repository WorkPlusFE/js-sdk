"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取定位信息
 * @description 返回手机设备当前的地理位置信息
 * @param {LocationOptions} [options]
 * @module location
 * @returns 定位信息
 */
function getLocation(options) {
    return core.exec(constants_1.WORKPLUS_LOCATION, 'getLocation', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getLocation;
