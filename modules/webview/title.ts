import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WORKPLUS_WEBVIEW } from '../constants';

export interface TitleOptions extends ExecOptions<void, void> {
  /** 标题 */
  title: string;
}

/**
 * 更换头部title
 * @description 设置Webview的头部标题
 * @param {TitleOptions} options
 * @module webview
 * @returns 无
 */
function title(options: TitleOptions): Promise<void> {
  const { success, fail, title } = options;
  return core.exec<string, void, void>(WORKPLUS_WEBVIEW, 'title', [title], success, fail);
}

export default title;
