import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { OpenWebViewParams } from '../types/webview';
import { ExecOptions } from '../types/core';

export type OpenWebViewOptions = OpenWebViewParams & ExecOptions<void, void>;

/**
 * 打开一个网页
 * @description 传入地址，打开WorkPlus网页
 * @param {OpenWebViewOptions} options
 * @module webview
 * @returns 无
 */
function openWebView(options: OpenWebViewOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<OpenWebViewParams, void, void>(
    WORKPLUS_WEBVIEW,
    'openWebView',
    [params],
    success,
    fail,
  );
}

export default openWebView;
