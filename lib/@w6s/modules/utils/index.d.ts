export * from './is';
/**
 * 休眠函数
 * @param time 时间，单位毫秒
 */
export declare const sleep: (time: number) => Promise<void>;
/**
 * 加载Script
 * @export
 * @param {string} url
 */
export declare const loadScript: (url: string) => Promise<HTMLScriptElement>;
