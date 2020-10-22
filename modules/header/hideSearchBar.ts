import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

export interface HideSearchBar {
  visible: boolean;
}

/**
 * 隐藏搜索栏
 * @description 针对 "显示搜索栏" 接口，用于隐藏搜索栏。
 * @module webview
 * @version 4.10.0+
 */
export default function hideSearchBar(): void {
  const args: HideSearchBar = {
    visible: false,
  };
  return core.execSync<HideSearchBar>(WORKPLUS_WEBVIEW, 'searchBar', [args]);
}
