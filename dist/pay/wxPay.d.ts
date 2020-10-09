import { PayOption, WxPayParams, WxPayRes } from '../types/pay';
export default function wxPay(options: WxPayParams & PayOption<WxPayRes>): Promise<WxPayRes>;
