import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 注销摇一摇监听
 * @description 注销摇一摇监听
 * @param {NotResOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
function unregisterShakeListener(): void {
  return core.execSync<[]>(WORKPLUS_WEBVIEW, 'unregisterShakeListener', []);
}

export default unregisterShakeListener;
