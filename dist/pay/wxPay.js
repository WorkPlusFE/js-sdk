"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto gererated by scripts/create-api.js
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 微信支付
 * @description 提供微信支付的能力。
 * @param {WxPay>} options
 * @module wxPay
 */
function wxPay(options) {
    var args = {
        app_id: options.appId,
        request_data: options.requestData,
    };
    return core.exec(constants_1.WORKPLUS_PAY, 'wxPay', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = wxPay;
