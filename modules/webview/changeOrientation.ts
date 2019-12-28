// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, ChangeOrientationParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function changeOrientation(
  options?: WebviewOption<ChangeOrientationParams, void>,
): Promise<void> {
  return core.exec<ChangeOrientationParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'changeOrientation',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
