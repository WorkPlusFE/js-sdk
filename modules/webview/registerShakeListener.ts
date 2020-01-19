import * as core from '../core';
import { NotResOptions } from '../types/core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 注册摇一摇监听
 * @description 前端需要实现 onWorkplusShake 方法, 摇一摇后将会触发该方法
 * @param {NotResOptions} [options]
 * @module webview
 * @returns 无
 */
function registerShakeListener(options?: NotResOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_WEBVIEW,
    'registerShakeListener',
    [],
    options?.success,
    options?.fail,
  );
}

export default registerShakeListener;
