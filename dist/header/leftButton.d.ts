import { ExecOptions } from '../types/core';
export interface LeftButtonOptions extends ExecOptions<void, void> {
    /** 执行的JS全局函数名 */
    method: string;
}
/**
 * 更换左侧按钮动作
 * @description 传入一个全局的函数名，点击左侧按钮时时执行
 * @param {LeftButtonOptions} options
 * @module webview
 * @returns 无
 */
declare function leftButton(options: LeftButtonOptions): Promise<void>;
export default leftButton;
