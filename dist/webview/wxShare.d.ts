import { ExecOptions } from '../types/core';
import { WxShareParams } from '../types/webview';
export declare type WxShareOptions = WxShareParams & ExecOptions<void, void>;
/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WxShareOptions} options
 * @module webview
 * @returns 无
 */
declare function wxShare(options: WxShareOptions): Promise<void>;
export default wxShare;
