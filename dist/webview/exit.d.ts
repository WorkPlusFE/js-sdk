import { ExecOptions } from '../types/core';
export declare type ExitOptions = ExecOptions<void, void>;
/**
 * 退出webview
 * @description 关闭整个webview
 * @param {ExitOptions} [options]
 * @module webview
 * @returns 无
 */
declare function exit(options?: ExitOptions): Promise<void>;
export default exit;
