// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, NavigationParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function navigation(options?: WebviewOption<NavigationParams, void>): Promise<void> {
  return core.exec<NavigationParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'navigation',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
