import { NotResOptions } from '../types/core';
/**
 * 注销摇一摇监听
 * @description 注销摇一摇监听
 * @param {NotResOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
declare function unregisterShakeListener(options?: NotResOptions): Promise<void>;
export default unregisterShakeListener;
