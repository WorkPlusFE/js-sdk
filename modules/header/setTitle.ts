import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 更换头部title
 * @description 设置Webview的头部标题
 * @param {string} title
 * @module webview
 * @returns 无
 */
function setTitle(title: string): void {
  return core.execSync(WORKPLUS_WEBVIEW, 'title', [title]);
}

export default setTitle;
