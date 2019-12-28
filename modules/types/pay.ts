export interface PayOption<D, R> {
  data: D[];
  success: (res: R) => void;
  fail: (err: unknown) => void;
}

export interface WxPayParams {
  /** sdk appId */
  app_id: string;
  /** sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类 */
  request_data: string;
}

export interface WxPayRes {
  /** 微信支付回调结果 */
  code: string;
  message: string;
}
