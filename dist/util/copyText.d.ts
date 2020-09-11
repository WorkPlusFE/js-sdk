import { ExecOptions } from '../types/core';
import { CopyTextParams } from '../types/webview';
interface CopyTextOptions extends ExecOptions<void, void>, CopyTextParams {
}
/**
 * 复制文本
 * @description 复制文本
 * @param {CopyTextOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
declare function copyText(options: CopyTextOptions): void;
export default copyText;
