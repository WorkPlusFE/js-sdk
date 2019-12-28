// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, ShareParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {WebviewOption<ShareParams, void>} [options]
 * @returns {Promise<void>}
 */
export default function share(options?: WebviewOption<ShareParams, void>): Promise<void> {
  return core.exec<ShareParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'share',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
