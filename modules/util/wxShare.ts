// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, WxShareParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WebviewOption<WxShareParams, void>} [options]
 * @returns {Promise<void>}
 */
export default function wxShare(options?: WebviewOption<WxShareParams, void>): Promise<void> {
  return core.exec<WxShareParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'wxShare',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
