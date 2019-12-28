// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, RightButtonsParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function rightButtons(
  options?: WebviewOption<RightButtonsParams[], void>,
): Promise<void> {
  return core.exec<RightButtonsParams[], void, unknown>(
    WORKPLUS_WEBVIEW,
    'rightButtons',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
