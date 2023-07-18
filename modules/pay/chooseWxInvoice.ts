import * as core from '../core';
import { WORKPLUS_PAY } from '../constants';
import { ExecOptions } from '../types/core';
import { WxChooseInvoiceParams, WxChooseInvoiceItem } from '../types/pay';

export type WxChooseInvoiceOptions = WxChooseInvoiceParams &
  ExecOptions<WxChooseInvoiceItem[], void>;

/**
 * 微信选择发票
 * @description 使用发票前，请先判断是否已安微信
 * @param {WxChooseInvoiceOptions} [options]
 * @returns {Promise<WxChooseInvoiceItem[]>}
 */
export default function chooseWxInvoice(
  options?: WxChooseInvoiceOptions,
): Promise<WxChooseInvoiceItem[]> {
  const params: WxChooseInvoiceParams = {};
  const keys = ['card_sign', 'sign_type', 'timestamp', 'nonce_str'];
  let keyNum = 0;

  if (options) {
    Object.keys(options).forEach(key=> {
      params[key] = options[key]
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
  return core.exec<WxChooseInvoiceParams, WxChooseInvoiceItem[], never>(
    WORKPLUS_PAY,
    'wechatInvoice',
    [params],
    options?.success,
    options?.fail,
    false,
  );
}
