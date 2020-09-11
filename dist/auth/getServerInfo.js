"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取当前app请求后台api地址
 * @description 获取当前app请求后台api地址
 * @param {ServerInfoOptions} [options]
 * @module auth
 * @returns api_url
 */
function getServerInfo(options) {
    return core.exec(constants_1.WORKPLUS_AUTH, 'getServerInfo', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getServerInfo;
