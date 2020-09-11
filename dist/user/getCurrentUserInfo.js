"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
function getCurrentUserInfo(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getCurrentUserInfo', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getCurrentUserInfo;
