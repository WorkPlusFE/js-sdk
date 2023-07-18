"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 微信选择发票
 * @description 使用发票前，请先判断是否已安微信
 * @param {WxChooseInvoiceOptions} [options]
 * @returns {Promise<WxChooseInvoiceItem[]>}
 */
function chooseWxInvoice(options) {
    var params = {};
    var keys = ['card_sign', 'sign_type', 'timestamp', 'nonce_str'];
    var keyNum = 0;
    if (options) {
        Object.keys(options).forEach(function (key) {
            params[key] = options[key];
            if (keys.includes(key)) {
                keyNum++;
            }
        });
        if (keyNum !== 0 && keyNum !== 4) {
            return Promise.reject({
                code: -1,
                message: '缺少必要参数',
            });
        }
    }
    console.log(params);
    return core.exec(constants_1.WORKPLUS_PAY, 'wechatInvoice', [params], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = chooseWxInvoice;
