import { SDKOptions } from '../types/sdk';
export declare const init: (options?: SDKOptions | undefined) => boolean;
export declare const ready: (fn?: Function | undefined) => Promise<void>;
/**
 * 执行 Cordova 的事件调用
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
export declare const exec: <A, S, F>(service: string, action: string, args: A[], success?: ((data: S) => void) | undefined, fail?: ((err: F) => void) | undefined) => Promise<S>;
