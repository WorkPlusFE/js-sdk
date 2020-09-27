import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ChangeOrientationParams } from '../types/webview';

/**
 * 控制屏幕旋转
 * @description 根据参数控制屏幕横屏显示或者竖屏显示
 * @param {ChangeOrientationParams} options
 * @module webview
 * @version 3.1.3+
 * @returns {Promise<void>}
 */
function changeOrientation(options: ChangeOrientationParams): void {
  return core.execSync<ChangeOrientationParams>(WORKPLUS_WEBVIEW, 'changeOrientation', [options]);
}

export default changeOrientation;
