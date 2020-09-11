import { NotResOptions } from '../types/core';
/**
 * 注册摇一摇监听
 * @description 前端需要实现 onWorkplusShake 方法, 摇一摇后将会触发该方法
 * @param {NotResOptions} [options]
 * @module webview
 * @returns 无
 */
declare function registerShakeListener(options?: NotResOptions): Promise<void>;
export default registerShakeListener;
