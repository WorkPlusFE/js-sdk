import { OpenWebViewParams } from '../types/webview';
import { ExecOptions } from '../types/core';
export declare type OpenWebViewOptions = OpenWebViewParams & ExecOptions<void, void>;
/**
 * 打开一个网页
 * @description 传入地址，打开WorkPlus网页
 * @param {OpenWebViewOptions} options
 * @module webview
 * @returns 无
 */
declare function openWebView(options: OpenWebViewOptions): Promise<void>;
export default openWebView;
