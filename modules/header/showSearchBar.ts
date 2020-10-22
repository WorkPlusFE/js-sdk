import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ShowSearch, ShowSearchBarParams, ShowSearchRes } from '../types/webview';
import { ExecOptions } from '../types/core';

/**
 * 显示搜索栏
 * @description 让原生头部变成一个搜索框。
 * @param {ShowSearch} [options]
 * @module webview
 * @version 4.10.0+
 * @returns  {Promise<ShowSearchRes>}
 */
export default function showSearchBar(
  options?: ShowSearch & ExecOptions<ShowSearchRes, void>,
): Promise<ShowSearchRes> {
  const args: ShowSearchBarParams = {
    visible: true,
    hint: options?.hint || '',
    cancel_mode: options?.cancelMode || 'reset',
  };
  return core.exec<ShowSearchBarParams, ShowSearchRes, never>(
    WORKPLUS_WEBVIEW,
    'searchBar',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
