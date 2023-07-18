"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 支付宝选择发票
 * @description 使用发票前，请先判断是否已安装支付宝
 * @param {AliChooseInvoiceOptions} [options]
 * @returns {Promise<AliChooseInvoiceResult>}
 */
function chooseAliInvoice(options) {
    var encodeIsvUrl = window.encodeURIComponent(options.isvUrl);
    var alipayUrl = "/www/invoiceSelect.htm?scene=INVOICE_EXPENSE&einvMerchantId=" + options.einvMerchantId + "&serverRedirectUrl=" + encodeIsvUrl;
    var params = {
        url: alipayUrl,
    };
    console.log(params);
    return core.exec(constants_1.WORKPLUS_PAY, 'aliPayInvoice', [params], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = chooseAliInvoice;
