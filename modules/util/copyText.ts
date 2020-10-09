import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 复制文本
 * @description 复制文本
 * @param {string}
 * @module webview
 * @returns {void}
 */
function copyText(text: string): void {
  return core.execSync(WORKPLUS_WEBVIEW, 'copyText', [{ text }]);
}

export default copyText;
