import * as core from '../core';
import { WxShareParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WxShareParams} options
 * @module webview
 * @returns 无
 */
function wxShare(options: WxShareParams): void {
  return core.execSync<WxShareParams>(WORKPLUS_WEBVIEW, 'wxShare', [options]);
}

export default wxShare;
