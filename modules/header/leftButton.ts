import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

export interface LeftButtonOptions {
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
function leftButton(options: LeftButtonOptions): void {
  return core.execSync<string>(WORKPLUS_WEBVIEW, 'leftButton', [options.method]);
}

export default leftButton;
