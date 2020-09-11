import { ExecOptions } from '../types/core';
export declare type ClearRightButtonsOptions = ExecOptions<void, void>;
/**
 * 清除右侧按钮
 * @description 清除右侧按钮事件和显示
 * @param {ClearLeftButtonOptions} [options]
 * @module webview
 * @returns 无
 */
declare function clearRightButtons(options?: ClearRightButtonsOptions): Promise<void>;
export default clearRightButtons;
