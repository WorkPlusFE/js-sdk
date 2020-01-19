import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { ButtonsItem } from '../types/webview';

export interface ChangeLeftButtonOptions extends ExecOptions<void, void> {
  items: ButtonsItem[];
}

/**
 * 更换左侧按钮和定义动作
 * @description 设置左侧按钮的选项
 * @param {ChangeLeftButtonOptions} options
 * @module webview
 * @returns 无
 */
function changeLeftButton(options: ChangeLeftButtonOptions): Promise<void> {
  const { success, fail, items } = options;
  return core.exec<ButtonsItem[], void, void>(
    WORKPLUS_WEBVIEW,
    'changeLeftButton',
    [items],
    success,
    fail,
  );
}

export default changeLeftButton;
