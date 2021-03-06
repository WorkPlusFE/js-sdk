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
 * 打开WorkPlus里已有的html
 * @description 传入相对地址，打开WorkPlus里已有的网页
 * @param {OpenLocalURLOptions} [options]
 * @module webview
 * @returns 无
 */
function openLocalURL(options) {
    var success = options.success, fail = options.fail, data = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'openLocalURL', [data], success, fail);
}
exports.default = openLocalURL;
