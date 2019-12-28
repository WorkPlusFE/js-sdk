// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, ToActivityParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function toActivity(options?: WebviewOption<ToActivityParams, void>): Promise<void> {
  return core.exec<ToActivityParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'toActivity',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
