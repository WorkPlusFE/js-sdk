import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { ShareParams } from '../types/webview';

export type ShareOptions = ShareParams & ExecOptions<void, void>;

/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {ShareOptions} options 传参
 * @module webview
 * @returns 无
 */
function share(options: ShareOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<ShareParams, void, void>(WORKPLUS_WEBVIEW, 'share', [params], success, fail);
}

export default share;
