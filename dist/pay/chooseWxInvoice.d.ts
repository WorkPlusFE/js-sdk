import { ExecOptions } from '../types/core';
import { WxChooseInvoiceParams, WxChooseInvoiceItem } from '../types/pay';
export declare type WxChooseInvoiceOptions = WxChooseInvoiceParams & ExecOptions<WxChooseInvoiceItem[], void>;
/**
 * 微信选择发票
 * @description 使用发票前，请先判断是否已安微信
 * @param {WxChooseInvoiceOptions} [options]
 * @returns {Promise<WxChooseInvoiceItem[]>}
 */
export default function chooseWxInvoice(options?: WxChooseInvoiceOptions): Promise<WxChooseInvoiceItem[]>;
