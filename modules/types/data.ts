export interface DataParams {
  /** app的Id */
  app_id: string;
  /** 具体自定义的存储数据的key值 */
  key: string;
  /** 具体自定义的存储数据的value值 */
  value?: string;
  /** 拓展 */
  [key: string]: unknown;
}

export interface GetDataRes {
  /** app的Id */
  app_id: string;
  /** 具体自定义的存储数据的key值 */
  key: string;
  /** 具体自定义的存储数据的value值 */
  value: string;
}
