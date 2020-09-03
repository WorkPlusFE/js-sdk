import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { CopyTextParams } from '../types/webview';

interface CopyTextOptions extends ExecOptions<void, void>, CopyTextParams {}

/**
 * 复制文本
 * @description 复制文本
 * @param {CopyTextOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
function copyText(options: CopyTextOptions): void {
  return core.execSync(WORKPLUS_WEBVIEW, 'copyText', [options.text]);
}

export default copyText;
