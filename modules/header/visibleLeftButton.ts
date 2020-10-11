import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { VisibleLeftButtonParams } from '../types/webview';

/**
 * 是否隐藏或显示左侧的按钮和关闭字样
 * @description 是否隐藏或显示左侧的按钮和关闭字样
 * @param {VisibleLeftButtonOptions} options
 * @module webview
 * @returns 无
 */
function visibleLeftButton(options: VisibleLeftButtonParams): void {
  return core.execSync<VisibleLeftButtonParams>(WORKPLUS_WEBVIEW, 'visibleLeftButton', [options]);
}

export default visibleLeftButton;
