import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { VisibleLeftButtonParams } from '../types/webview';

export type VisibleLeftButtonOptions = VisibleLeftButtonParams & ExecOptions<void, void>;

/**
 * 是否隐藏或显示左侧的按钮和关闭字样
 * @description 是否隐藏或显示左侧的按钮和关闭字样
 * @param {VisibleLeftButtonOptions} options
 * @module webview
 * @returns 无
 */
function visibleLeftButton(options: VisibleLeftButtonOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<VisibleLeftButtonParams, void, void>(
    WORKPLUS_WEBVIEW,
    'visibleLeftButton',
    [params],
    success,
    fail,
  );
}

export default visibleLeftButton;
