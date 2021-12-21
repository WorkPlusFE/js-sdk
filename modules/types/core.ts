export interface CordovaJsUri {
  /** iOS cordova.js 的完整地址 */
  iOS?: string;
  /** 安卓 cordova.js 的完整地址 */
  android?: string;
}

export interface CoreOptions {
  /** 配置 cordovajs 不同平台的访问地址（鉴权模式下可忽略该配置） */
  cordovajs?: CordovaJsUri;

  /** 若为true， 将强制以 http 的方式注入 cordovajs （鉴权模式下可忽略该配置）*/
  useHttp?: boolean;

  /** 鉴权模式，如果接口需要鉴权，必须开启该选项 */
  auth?: boolean;

  /** 调试模式 */
  debug?: boolean;

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

/** 无返回 */
export type NotResOptions = ExecOptions<void, void>;

// 通用返回信息
export interface CommonApiRes {
  /** 状态码 */
  code: number | string;
  /** 状态描述 */
  message: string;
}

// 0	success	通用调用成功
// -1	wrong	通用调用失败
// -2	cancel	取消操作
// -3	no auth	没有鉴权就直接使用
// -10	invalid arguments	传入参数异常
// -20	no system permissions	通用没有系统权限等, 如拍照, 地理位置,
// -999	service not found	找不到该cordova service定义
// -1000	action not found	找不到该cordova 方法
