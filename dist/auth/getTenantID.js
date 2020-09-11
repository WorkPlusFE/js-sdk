"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前租户id，即域id
 * @description 获取当前租户id，即域id
 * @param {TenantIdOptions} [options]
 * @module auth
 * @returns 域ID
 */
function getTenantID(options) {
    return core.exec(constants_1.WORKPLUS_AUTH, 'getTenantID', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getTenantID;
