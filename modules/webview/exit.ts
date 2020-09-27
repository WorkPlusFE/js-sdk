import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

/**
 * 退出webview
 * @description 关闭整个webview
 * @param {ExitOptions} [options]
 * @module webview
 * @returns 无
 */
function exit(): void {
  return core.execSync<void>(WORKPLUS_WEBVIEW, 'exit', []);
}

export default exit;
