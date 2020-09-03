import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { ButtonsItem } from '../types/webview';

export interface RightButtonsOptions extends ExecOptions<void, void> {
  /** 右侧按钮列表 */
  items: ButtonsItem[];
}

/**
 * 更换右侧按钮动作
 * @description 设置右侧按钮的选项
 * @param {RightButtonsOptions} options
 * @module webview
 * @returns 无
 */
function rightButtons(options: RightButtonsOptions): Promise<void> {
  const { success, fail } = options;
  return core.exec<ButtonsItem[], void, void>(
    WORKPLUS_WEBVIEW,
    'rightButtons',
    [options.items],
    success,
    fail,
  );
}

export default rightButtons;
