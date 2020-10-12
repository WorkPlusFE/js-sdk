import { PayOption, WxPay, WxPayRes } from '../types/pay';
/**
 * 微信支付
 * @description 提供微信支付的能力。
 * @param {WxPay>} options
 * @module wxPay
 */
export default function wxPay(options: WxPay & PayOption<WxPayRes>): Promise<WxPayRes>;
