// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function leftButton(options?: WebviewOption<string, void>): Promise<void> {
  return core.exec<string, void, unknown>(
    WORKPLUS_WEBVIEW,
    'leftButton',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
