import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WORKPLUS_WEBVIEW } from '../constants';

export type ClearRightButtonsOptions = ExecOptions<void, void>;

/**
 * 清除右侧按钮
 * @description 清除右侧按钮事件和显示
 * @param {ClearLeftButtonOptions} [options]
 * @module webview
 * @returns 无
 */
function clearRightButtons(options?: ClearRightButtonsOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_WEBVIEW,
    'clearRightButtons',
    [],
    options?.success,
    options?.fail,
  );
}

export default clearRightButtons;
