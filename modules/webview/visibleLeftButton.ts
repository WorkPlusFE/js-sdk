// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, VisibleLeftButtonParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function visibleLeftButton(
  options?: WebviewOption<VisibleLeftButtonParams, void>,
): Promise<void> {
  return core.exec<VisibleLeftButtonParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'visibleLeftButton',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
