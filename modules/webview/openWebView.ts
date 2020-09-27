import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { OpenWebViewParams } from '../types/webview';

/**
 * 打开一个网页
 * @description 传入地址，打开 WorkPlus 网页
 * @param {OpenWebViewParams} options
 * @module webview
 * @returns 无
 */
function openWebView(options: OpenWebViewParams): void {
  return core.execSync<OpenWebViewParams>(WORKPLUS_WEBVIEW, 'openWebView', [options]);
}

export default openWebView;
