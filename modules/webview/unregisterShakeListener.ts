import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { NotParamsOptions } from '../types/core';

/**
 * 注销摇一摇监听
 * @description 注销摇一摇监听
 * @param {NotParamsOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
function unregisterShakeListener(options?: NotParamsOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_WEBVIEW,
    'unregisterShakeListener',
    [],
    options?.success,
    options?.fail,
  );
}

export default unregisterShakeListener;
