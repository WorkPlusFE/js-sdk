import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 清除右侧按钮
 * @description 清除右侧按钮事件和显示
 * @module webview
 * @returns 无
 */
function clearRightButtons(): void {
  return core.execSync<[]>(WORKPLUS_WEBVIEW, 'clearRightButtons', []);
}

export default clearRightButtons;
