import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ShareParams } from '../types/webview';

/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {ShareParams} options 传参
 * @module webview
 * @returns 无
 */
function share(options: ShareParams): void {
  return core.execSync<ShareParams>(WORKPLUS_WEBVIEW, 'share', [options]);
}

export default share;
