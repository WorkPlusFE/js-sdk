import { CoreOptions } from '../types/core';
export declare const init: (options?: CoreOptions | undefined) => boolean;
export declare const ready: (fn?: Function | undefined) => Promise<void>;
export declare const error: (fn: (err: unknown) => void) => void;
/**
 * 以异步的方式执行 Cordova 的事件，用于获取数据类型的 API
 * @template A 参数类型
 * @template S 成功回调的返回类型
 * @template F 失败回调的返回类型
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @param {Array<A>} args 调用的参数
 * @param {(data: S) => void} [success] 成功回调
 * @param {(err: F) => void} [failed] 失败回调
 * @returns {Promise<S>}
 */
export declare function exec<A, S, F>(service: string, action: string, args: Array<A>, success?: (data: S) => void, fail?: (err: F) => void): Promise<S>;
/**
 * 以同步的方式执行 Cordova 的事件, 用于某些永不触发回调的 API
 * @template A
 * @param {string} service 调用的服务类名
 * @param {string} action  调用的方法名
 * @param {Array<A>} args  调用的参数
 */
export declare function execSync<A>(service: string, action: string, args: Array<A>): void;
