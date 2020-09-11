"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开邮箱
 * @description 跳转到我的邮箱，未登陆就跳转到登陆页
 * @param {NotResOptions} [options]
 * @module email
 * @returns 无
 */
function openEmail(options) {
    return core.exec(constants_1.WORKPLUS_EMAIL, 'openEmail', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = openEmail;
