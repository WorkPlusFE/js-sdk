export interface LocationOptions<D, S> {
  /** 传参 */
  data: D;
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: void) => void;
}

export interface LocationRes {
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 具体地址信息 */
  address: string;
  /** 城市 */
  city: string;
  /** 区 */
  district: string;
  /** 街道 */
  street: string;
  /** 地址名字 */
  aoiName: string;
}