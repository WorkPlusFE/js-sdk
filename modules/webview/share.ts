import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ShareParams, Share } from '../types/webview';

/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {Share} options 传参
 * @module webview
 * @returns 无
 */
function share(options: Share): void {
  const args: ShareParams = {
    url: options.url,
    title: options.title,
    cover_media_id: options?.coverMediaId || '',
    cover_url: options?.coverUrl || '',
    scope: options.scope,
    summary: options.summary,
    dicrectly: options?.dicrectly || '',
    direct_session: options?.directSession,
  };
  return core.execSync<ShareParams>(WORKPLUS_WEBVIEW, 'share', [args]);
}

export default share;
