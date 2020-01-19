import * as core from '../core';
import { ExecOptions } from '../types/core';
import { ToActivityParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export type ActivityOptions = ToActivityParams & ExecOptions<void, void>;

/**
 * 跳转到workplus特定页面
 * @description 跳转到workplus特定页面
 * @param {ActivityOptions} options
 * @module webview
 * @returns 无
 */
function toActivity(options: ActivityOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<ToActivityParams, void, void>(
    WORKPLUS_WEBVIEW,
    'toActivity',
    [params],
    success,
    fail,
  );
}

export default toActivity;
