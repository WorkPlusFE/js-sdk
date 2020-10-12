"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {CurrentUserInfoParams & ContactOption<CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
function getCurrentUserInfo(options) {
    var args = {
        needEmpInfo: (options === null || options === void 0 ? void 0 : options.needEmpInfo) || false,
    };
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getCurrentUserInfo', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getCurrentUserInfo;
