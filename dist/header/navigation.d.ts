import { ExecOptions } from '../types/core';
import { NavigationParams } from '../types/webview';
export interface NavigationOptions extends ExecOptions<void, void> {
    mode: NavigationParams;
}
/**
 * 锁定网页顶部栏
 * @description 锁定顶部栏，使得顶部栏按钮无效
 * @param {NavigationOptions} options
 * @module webview
 * @returns 无
 */
declare function navigation(options: NavigationOptions): Promise<void>;
export default navigation;
