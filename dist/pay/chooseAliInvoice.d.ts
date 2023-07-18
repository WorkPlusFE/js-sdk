import { ExecOptions } from '../types/core';
import { AliChooseInvoiceParams, AliChooseInvoiceResult } from '../types/pay';
export declare type AliChooseInvoiceOptions = AliChooseInvoiceParams & ExecOptions<AliChooseInvoiceResult, void>;
/**
 * 支付宝选择发票
 * @description 使用发票前，请先判断是否已安装支付宝
 * @param {AliChooseInvoiceOptions} [options]
 * @returns {Promise<AliChooseInvoiceResult>}
 */
export default function chooseAliInvoice(options: AliChooseInvoiceOptions): Promise<AliChooseInvoiceResult>;
