// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, OpenWebViewParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function openWebView(
  options?: WebviewOption<OpenWebViewParams, void>,
): Promise<void> {
  return core.exec<OpenWebViewParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'openWebView',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
