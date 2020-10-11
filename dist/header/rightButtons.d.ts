import { ButtonsItem } from '../types/webview';
export interface RightButtonsOptions {
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
declare function rightButtons(options: RightButtonsOptions): void;
export default rightButtons;
