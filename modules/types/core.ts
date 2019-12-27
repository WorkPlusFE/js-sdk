export interface CoreOptions {
  /** use cache */
  cache: boolean;

  /** use debug */
  debug: boolean;
}

/** 同步执行的传参 */
export interface ExecSyncOptions<T> {
  data: T;
}
