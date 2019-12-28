// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function removeWaterMask(options?: WebviewOption<void, void>): Promise<void> {
  return core.exec<void, void, unknown>(
    WORKPLUS_WEBVIEW,
    'removeWaterMask',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
