"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_NETWORK, 'request', [args], success, fail);
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
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_NETWORK, 'authRequest', [args], success, fail);
}
exports.authRequest = authRequest;
