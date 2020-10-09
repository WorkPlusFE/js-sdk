import { ExecOptions } from '../types/core';
import { OpenLocalURLParams } from '../types/webview';
export declare type OpenLocalURLOptions = OpenLocalURLParams & ExecOptions<void, void>;
/**
 * 打开WorkPlus里已有的html
 * @description 传入相对地址，打开WorkPlus里已有的网页
 * @param {OpenLocalURLOptions} [options]
 * @module webview
 * @returns 无
 */
declare function openLocalURL(options: OpenLocalURLOptions): Promise<void>;
export default openLocalURL;
