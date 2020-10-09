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
declare function changeLeftButton(options: ChangeLeftButtonOptions): Promise<void>;
export default changeLeftButton;
