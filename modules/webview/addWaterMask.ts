// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, AddWaterMaskParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function addWaterMask(
  options?: WebviewOption<AddWaterMaskParams, void>,
): Promise<void> {
  return core.exec<AddWaterMaskParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'addWaterMask',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
