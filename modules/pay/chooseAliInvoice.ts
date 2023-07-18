import * as core from '../core';
import { WORKPLUS_PAY } from '../constants';
import { ExecOptions } from '../types/core';
import {
  AliChooseInvoiceParams,
  AliChooseInvoiceResult,
  AliChooseInvoiceUrlParams,
} from '../types/pay';

export type AliChooseInvoiceOptions = AliChooseInvoiceParams &
  ExecOptions<AliChooseInvoiceResult, void>;

/**
 * 支付宝选择发票
 * @description 使用发票前，请先判断是否已安装支付宝
 * @param {AliChooseInvoiceOptions} [options]
 * @returns {Promise<AliChooseInvoiceResult>}
 */
export default function chooseAliInvoice(
  options: AliChooseInvoiceOptions,
): Promise<AliChooseInvoiceResult> {
  const encodeIsvUrl = window.encodeURIComponent(options.isvUrl);
  const alipayUrl = `/www/invoiceSelect.htm?scene=INVOICE_EXPENSE&einvMerchantId=${options.einvMerchantId}&serverRedirectUrl=${encodeIsvUrl}`;
  const params = {
    url: alipayUrl,
  };
  console.log(params);
  return core.exec<AliChooseInvoiceUrlParams, AliChooseInvoiceResult, never>(
    WORKPLUS_PAY,
    'aliPayInvoice',
    [params],
    options?.success,
    options?.fail,
    false,
  );
}
