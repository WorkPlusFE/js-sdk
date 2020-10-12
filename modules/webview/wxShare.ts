import * as core from '../core';
import { WxShareParams, WxShare } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WxShare} options
 * @module webview
 * @returns 无
 */
function wxShare(options: WxShare): void {
  const args: WxShareParams = {
    app_id: options.appId,
    title: options.title,
    type: options.type,
    description: options.description,
    thumb: options.thumb,
    scene: options.scene,
    data: options.data,
  };
  return core.execSync<WxShareParams>(WORKPLUS_WEBVIEW, 'wxShare', [args]);
}

export default wxShare;
