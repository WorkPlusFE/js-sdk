import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 移除水印
 * @description 移除水印
 * @param {RemoveWaterMask} [options]
 * @module webview
 * @returns 无
 */
function removeWaterMask(): void {
  return core.execSync<[]>(WORKPLUS_WEBVIEW, 'removeWaterMask', []);
}

export default removeWaterMask;
