// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { PayOption, WxPayParams, WxPayRes } from '../types/pay';
import { WORKPLUS_PAY } from '../constants';

export default function wxPay(options: WxPayParams & PayOption<WxPayRes>): Promise<WxPayRes> {
  const { success, fail, ...args } = options;
  return core.exec<WxPayParams, WxPayRes, unknown>(WORKPLUS_PAY, 'wxPay', [args], success, fail);
}
