import * as core from '../core';
import { WORKPLUS_PAY } from '../constants';
import { ExecOptions } from '../types/core';
import {
  WxChooseInvoiceParams,
  WxChooseInvoiceItem,
} from '../types/pay';

export type WxChooseInvoiceOptions = WxChooseInvoiceParams &
  ExecOptions<WxChooseInvoiceItem[], void>;

/**
 * 微信选择发票
 * @description 使用发票前，请先判断是否已安微信
 * @param {WxChooseInvoiceOptions} [options]
 * @returns {Promise<WxChooseInvoiceItem[]>}
 */
export default function chooseWxInvoice(
  options: WxChooseInvoiceOptions,
): Promise<WxChooseInvoiceItem[]> {

  const params = {
    app_id: options.app_id,
    card_sign: options.card_sign,
    sign_type: options.sign_type,
    timestamp: options.timestamp,
    nonce_str: options.nonce_str,
    can_multi_select: options.can_multi_select,
  }
  console.log(params)
  return core.exec<WxChooseInvoiceParams, WxChooseInvoiceItem[], never>(
    WORKPLUS_PAY,
    'wechatInvoice',
    [params],
    options?.success,
    options?.fail,
    false,
  );
}
