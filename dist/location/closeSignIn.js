"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 关闭自动签到
 * @description 仅适用于移动考勤关闭外勤，调用此接口，关闭的组织为当前用户选择的组织
 * @param {NotResOptions} [options]
 * @module location
 * @returns 无
 */
function closeSignIn(options) {
    return core.exec(constants_1.WORKPLUS_LOCATION, 'disableOrgSignIn', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = closeSignIn;
