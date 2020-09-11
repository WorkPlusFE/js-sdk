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
 * 路由跳转
 * @description 根据参数跳转到指定的 App。
 * @param {AppRouteParams} [options]
 * @module app
 * @version 3.18.0
 */
function route(options) {
    var success = options.success, fail = options.fail, data = __rest(options, ["success", "fail"]);
    var params = {
        scheme_url: data.schemeUrl,
    };
    return core.exec(constants_1.WORKPLUS_APP_STORE, 'route', [params], success, fail, false);
}
exports.default = route;
