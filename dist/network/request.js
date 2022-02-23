"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequest = exports.request = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 原生 Ajax 请求
 * @description 纯 http 请求，不带业务
 * @param {RequestOptions>} [options]
 * @module network
 * @returns {RequestRes}
 */
function request(options) {
    return core.exec(constants_1.WORKPLUS_NETWORK, 'request', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.request = request;
/**
 * 带 auth 信息的原生 Ajax 请求
 * @description 会将token塞入header和带有授权业务的http请求，参数和结果参照HTTP请求的接口
 * @param {RequestOptions>} [options]
 * @module network
 * @returns {RequestRes}
 */
function authRequest(options) {
    return core.exec(constants_1.WORKPLUS_NETWORK, 'authRequest', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.authRequest = authRequest;
