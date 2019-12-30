// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 注销摇一摇监听
 * @param {WebviewOption<void, void>} [options]
 * @returns {Promise<void>}
 */
export default function unregisterShakeListener(
  options?: WebviewOption<void, void>,
): Promise<void> {
  return core.exec<void, void, unknown>(
    WORKPLUS_WEBVIEW,
    'unregisterShakeListener',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
