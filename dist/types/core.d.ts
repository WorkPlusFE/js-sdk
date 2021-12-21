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
    [key: string]: {
        [key: string]: Function;
    };
}
/** Cordova 调用传参 */
export interface ExecOptions<S, F> {
    /** 成功回调 */
    success?: (res: S) => void;
    /** 失败回调 */
    fail?: (err: F) => void;
}
/** 无返回 */
export declare type NotResOptions = ExecOptions<void, void>;
export interface CommonApiRes {
    /** 状态码 */
    code: number | string;
    /** 状态描述 */
    message: string;
}
