export interface CoreOptions {
  /** 调试模式 */
  debug?: boolean;

  /** import-cordova 配置host */
  host?: string;
}

/** 同步执行的传参 */
export interface ExecSyncOptions<T> {
  data: T;
}
