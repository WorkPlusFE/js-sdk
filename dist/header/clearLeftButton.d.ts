import { ExecOptions } from '../types/core';
export declare type ClearLeftButtonOptions = ExecOptions<void, void>;
/**
 * 清除左侧按钮
 * @description 清除左侧按钮事件和显示
 * @param {ClearLeftButtonOptions} [options]
 * @module webview
 * @returns 无
 */
declare function clearLeftButton(options?: ClearLeftButtonOptions): Promise<void>;
export default clearLeftButton;
