import { ExecOptions } from '../types/core';
import { VisibleLeftButtonParams } from '../types/webview';
export declare type VisibleLeftButtonOptions = VisibleLeftButtonParams & ExecOptions<void, void>;
/**
 * 是否隐藏或显示左侧的按钮和关闭字样
 * @description 是否隐藏或显示左侧的按钮和关闭字样
 * @param {VisibleLeftButtonOptions} options
 * @module webview
 * @returns 无
 */
declare function visibleLeftButton(options: VisibleLeftButtonOptions): Promise<void>;
export default visibleLeftButton;
