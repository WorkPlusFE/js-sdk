"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前登录用户的某个组织里的雇员信息
 *
 * @export
 * @param {ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
function getCurrentEmployeeInfo(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getCurrentEmployeeInfo', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getCurrentEmployeeInfo;
