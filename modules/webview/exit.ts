import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WORKPLUS_WEBVIEW } from '../constants';

export type ExitOptions = ExecOptions<void, void>;

/**
 * 退出webview
 * @description 关闭整个webview
 * @param {ExitOptions} [options]
 * @module webview
 * @returns 无
 */
function exit(options?: ExitOptions): Promise<void> {
  return core.exec<void, void, void>(WORKPLUS_WEBVIEW, 'exit', [], options?.success, options?.fail);
}

export default exit;
