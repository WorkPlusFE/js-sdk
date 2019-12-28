// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, WxShareParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function wxShare(options?: WebviewOption<WxShareParams, void>): Promise<void> {
  return core.exec<WxShareParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'wxShare',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
