export interface ConfigAuthParams {
  /** 申请下来的access_key  */
  access_key: string;
  /** 六位随机数 */
  nonce: string;
  /** 时间戳 */
  timestamp: string | number;
  /** 签名, 具体签名算法请参考文档 */
  signature: string;
  /** debug 模式，仅在调试包可用，正式包无效 */
  debug?: boolean;
}

export interface ConfigAuthRes {
  code: 0 | -1 | -2;
  message?: string;
}
