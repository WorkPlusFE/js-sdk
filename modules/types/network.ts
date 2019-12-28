export interface NetworkOptions<D, S> {
  /** 传参 */
  data: D;
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: unknown) => void;
}

export interface WifiRes {
  /** wifi 接入点标识 */
  bssid: string;
  /** wifi 名称 */
  name: string;
}
