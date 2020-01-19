import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { OpenLocalURLParams } from '../types/webview';

export type OpenLocalURLOptions = OpenLocalURLParams & ExecOptions<void, void>;

/**
 * 打开WorkPlus里已有的html
 * @description 传入相对地址，打开WorkPlus里已有的网页
 * @param {OpenLocalURLOptions} [options]
 * @module webview
 * @returns 无
 */
function openLocalURL(options: OpenLocalURLOptions): Promise<void> {
  const { success, fail, ...data } = options;
  return core.exec<OpenLocalURLParams, void, void>(
    WORKPLUS_WEBVIEW,
    'openLocalURL',
    [data],
    success,
    fail,
  );
}

export default openLocalURL;
