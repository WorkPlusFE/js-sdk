import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { NavigationParams } from '../types/webview';

/**
 * 锁定网页顶部栏
 * @description 锁定顶部栏，使得顶部栏按钮无效
 * @param {NavigationParams} mode
 * @module webview
 * @returns 无
 */
function navigation(mode: NavigationParams): void {
  return core.execSync<NavigationParams>(WORKPLUS_WEBVIEW, 'navigation', [mode]);
}

export default navigation;
