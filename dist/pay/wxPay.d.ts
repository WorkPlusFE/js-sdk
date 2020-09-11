import { PayOption, WxPayParams, WxPayRes } from '../types/pay';
export default function wxPay(options?: PayOption<WxPayParams, WxPayRes>): Promise<WxPayRes>;
