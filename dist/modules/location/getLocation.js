"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
/**
 * 获取定位信息
 * @description 返回手机设备当前的地理位置信息
 * @param {LocationOptions<[], getLocationRes>} [options]
 * @returns
 */
function takePhoto(options) {
    var _a, _b, _c, _d;
    return core.exec('WorkPlus_Location', 'getLocation', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = takePhoto;
