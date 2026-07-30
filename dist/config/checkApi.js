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
 * 接口检测
 * @description 检验是否存在 Cordova 插件和方法，该方面不能直接检查 SDK 的方法，需要使用原始 Cordova 接口文档的接口命名参数。
 * @param {ConfigOptions} [options]
 * @module config
 * @returns {CommonApiRes}
 */
function checkApi(options) {
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_CONFIG, 'checkApi', [args], success, fail);
}
exports.default = checkApi;
