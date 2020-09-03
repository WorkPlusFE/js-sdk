import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { NavigationParams } from '../types/webview';

export interface NavigationOptions extends ExecOptions<void, void> {
  mode: NavigationParams;
}

/**
 * 锁定网页顶部栏
 * @description 锁定顶部栏，使得顶部栏按钮无效
 * @param {NavigationOptions} options
 * @module webview
 * @returns 无
 */
function navigation(options: NavigationOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<NavigationParams, void, void>(
    WORKPLUS_WEBVIEW,
    'navigation',
    [params.mode],
    success,
    fail,
  );
}

export default navigation;
