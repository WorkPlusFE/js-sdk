import { WxShare } from '../types/webview';
/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WxShare} options
 * @module webview
 * @returns 无
 */
declare function wxShare(options: WxShare): void;
export default wxShare;
