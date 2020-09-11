"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto gererated by scripts/create-api.js
var core = require("../core");
var constants_1 = require("../constants");
function wxPay(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_PAY, 'wxPay', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = wxPay;
