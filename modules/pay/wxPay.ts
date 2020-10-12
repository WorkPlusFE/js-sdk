// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { PayOption, WxPayParams, WxPay, WxPayRes } from '../types/pay';
import { WORKPLUS_PAY } from '../constants';

/**
 * 微信支付
 * @description 提供微信支付的能力。
 * @param {WxPay>} options
 * @module wxPay
 */
export default function wxPay(options: WxPay & PayOption<WxPayRes>): Promise<WxPayRes> {
  const args: WxPayParams = {
    app_id: options.appId,
    request_data: options.requestData,
  };
  return core.exec<WxPayParams, WxPayRes, unknown>(
    WORKPLUS_PAY,
    'wxPay',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
