export interface PayOption<R> {
  success?: (res: R) => void;
  fail?: (err: unknown) => void;
}

export interface WxPayParams {
  /** sdk appId */
  app_id: string;
  /** sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类 */
  request_data: string;
}

export interface WxPay {
  /** sdk appId */
  appId: string;
  /** sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类 */
  requestData: string;
}

export interface WxPayRes {
  /** 微信支付回调结果 */
  code: string;
  message: string;
}

export interface WxChooseInvoiceParams {
  /** appId */
  app_id: string;
  /** 签名类型 */
  sign_type: string;
  /** 签名 */
  card_sign: string;
  /** 当前时间戳 */
  timestamp: number;
  /** 随机字符串 */
  nonce_str: string;
  /** 当传1，为多选。不传安卓默认单选 */
  can_multi_select?: string;
}

export interface WxChooseInvoiceItem {
  card_id: string;
  encrypt_code: string;
  app_id: string;
}

export interface AliChooseInvoiceParams {
  url:string
}

export interface AliChooseInvoiceResult{
  code: string
  msg: string
}