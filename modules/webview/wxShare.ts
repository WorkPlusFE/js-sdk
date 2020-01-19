import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WxShareParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export type WxShareOptions = WxShareParams & ExecOptions<void, void>;

/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WxShareOptions} options
 * @module webview
 * @returns 无
 */
function wxShare(options: WxShareOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<WxShareParams, void, void>(WORKPLUS_WEBVIEW, 'wxShare', [params], success, fail);
}

export default wxShare;
