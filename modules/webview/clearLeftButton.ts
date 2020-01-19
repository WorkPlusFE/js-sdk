import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WORKPLUS_WEBVIEW } from '../constants';

export type ClearLeftButtonOptions = ExecOptions<void, void>;

/**
 * 清除左侧按钮
 * @description 清除左侧按钮事件和显示
 * @param {ClearLeftButtonOptions} [options]
 * @module webview
 * @returns 无
 */
function clearLeftButton(options?: ClearLeftButtonOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_WEBVIEW,
    'clearLeftButton',
    [],
    options?.success,
    options?.fail,
  );
}

export default clearLeftButton;
