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
var core = require("../core");
var constants_1 = require("../constants");
/**
 * url 鉴权处理
 * @description 该接口主要用于 url 做签名参数处理, 使 WorkPlus 平台的 url 可以合法访问。
 * @param {AssembleAuthUrlParams} [options]
 * @module network
 * @returns 转换后的链接
 */
function assembleAuthUrl(options) {
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_NETWORK, 'assembleAuthUrl', [args], success, fail);
}
exports.default = assembleAuthUrl;
