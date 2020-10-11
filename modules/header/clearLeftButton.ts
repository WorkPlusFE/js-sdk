import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 清除左侧按钮
 * @description 清除左侧按钮事件和显示
 * @module webview
 * @returns 无
 */
function clearLeftButton(): void {
  return core.execSync<[]>(WORKPLUS_WEBVIEW, 'clearLeftButton', []);
}

export default clearLeftButton;
