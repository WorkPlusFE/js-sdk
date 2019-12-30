import * as core from '../core';
import { WebviewOption } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 注册摇一摇监听
 * @description 前端需要实现 onWorkplusShake 方法, 摇一摇后将会触发该方法
 * @param {WebviewOption<void, void>} [options]
 * @returns {Promise<void>}
 */
export default function registerShakeListener(options?: WebviewOption<void, void>): Promise<void> {
  return core.exec<void, void, unknown>(
    WORKPLUS_WEBVIEW,
    'registerShakeListener',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
