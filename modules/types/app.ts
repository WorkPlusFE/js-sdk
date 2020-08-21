export interface AppRouteParams {
  /** url scheme, 用于启动应用  */
  schemeUrl: string;
}

export interface AppRouteOriginParams {
  /** url scheme, 用于启动应用  */
  scheme_url: string;
}

export interface AppRouteRes {
  /** 状态码 */
  code: number;
  /** 状态描述 */
  message: string;
}
