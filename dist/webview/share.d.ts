import { ExecOptions } from '../types/core';
import { ShareParams } from '../types/webview';
export declare type ShareOptions = ShareParams & ExecOptions<void, void>;
/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {ShareOptions} options 传参
 * @module webview
 * @returns 无
 */
declare function share(options: ShareOptions): Promise<void>;
export default share;
