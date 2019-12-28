export interface UitlOptions<D, S> {
  /** 传参 */
  data: D;
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: unknown) => void;
}

export interface ScannerParams {
  /** 扫码是否需要考虑处理内部业务, 如扫码登录pc 端, 扫码进群等, 
   * 若不传则默认只关注二维码内容, 直接返回扫码结果 
   * */
  type?: 'native';
}