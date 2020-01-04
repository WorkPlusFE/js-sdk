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

/** 同步执行的传参 */
export interface ExecSyncOptions<T> {
  data: T;
}

export interface MockOptions {
  [key: string]: { [key: string]: Function };
}
