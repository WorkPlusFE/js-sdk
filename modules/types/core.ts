export interface CoreOptions {
  /** 调试模式 */
  debug?: boolean;

  /** 配置 cordovajs 不同平台的访问地址 */
  cordovajs?: CordovaJsUri;

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

export interface CordovaJsUri {
  /** iOS cordova.js 的完整地址 */
  iOS?: string;
  /** 安卓 cordova.js 的完整地址 */
  android?: string;
}

/** Cordova 调用传参 */
export interface ExecOptions<S, F> {
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: F) => void;
}

/** 无返回 */
export type NotResOptions = ExecOptions<void, void>;
