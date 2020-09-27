import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 注册摇一摇监听
 * @description 前端需要实现 onWorkplusShake 方法, 摇一摇后将会触发该方法
 * @param {NotResOptions} [options]
 * @module webview
 * @returns 无
 */
function registerShakeListener(): void {
  return core.execSync<[]>(WORKPLUS_WEBVIEW, 'registerShakeListener', []);
}

export default registerShakeListener;
