import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { OpenWebViewParams, OpenWebView } from '../types/webview';

/**
 * 打开一个网页
 * @description 传入地址，打开 WorkPlus 网页
 * @param {OpenWebView} options
 * @module webview
 * @returns 无
 */
function openWebView(options: OpenWebView): void {
  const args: OpenWebViewParams = {
    url: options.url,
    title: options.title,
    use_android_webview: options?.useAndroidWebview || false,
    use_system_webview: options?.useSystemWebview || false,
    display_mode: options?.displayMode || '',
    mute_config: options?.muteConfig || [],
  };

  if (options?.orientation) {
    args.orientation = options?.orientation;
  }

  return core.execSync<OpenWebViewParams>(WORKPLUS_WEBVIEW, 'openWebView', [args]);
}

export default openWebView;
