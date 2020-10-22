import { ShowSearch, ShowSearchRes } from '../types/webview';
import { ExecOptions } from '../types/core';
/**
 * 显示搜索栏
 * @description 让原生头部变成一个搜索框。
 * @param {ShowSearch} [options]
 * @module webview
 * @version 4.10.0+
 * @returns  {Promise<ShowSearchRes>}
 */
export default function showSearchBar(options?: ShowSearch & ExecOptions<ShowSearchRes, void>): Promise<ShowSearchRes>;
