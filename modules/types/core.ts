export interface CoreOptions {
  /** 调试模式 */
  debug?: boolean;

  /** import-cordova 配置host */
  host?: string;

  /** 接口超时时间，单位毫秒 */
  timeout?: number;

  /** Mock 服务开启 */
  mock?: boolean;

  /** Mock 服务数据 */
  mockData?: MockOptions;
}

export interface MockOptions {
  [key: string]: { [key: string]: Function };
}

/** Cordova 调用传参 */
export interface ExecOptions<S, F> {
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: F) => void;
}
