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
// This file is auto gererated by scripts/create-api.js
var core = require("../core");
var constants_1 = require("../constants");
function wxPay(options) {
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_PAY, 'wxPay', [args], success, fail);
}
exports.default = wxPay;
