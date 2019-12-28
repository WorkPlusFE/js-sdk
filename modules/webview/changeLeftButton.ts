// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, ChangeLeftButtonParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function changeLeftButton(
  options?: WebviewOption<ChangeLeftButtonParams, void>,
): Promise<void> {
  return core.exec<ChangeLeftButtonParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'changeLeftButton',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
