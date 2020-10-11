import { NavigationParams } from '../types/webview';
/**
 * 锁定网页顶部栏
 * @description 锁定顶部栏，使得顶部栏按钮无效
 * @param {NavigationParams} mode
 * @module webview
 * @returns 无
 */
declare function navigation(mode: NavigationParams): void;
export default navigation;
