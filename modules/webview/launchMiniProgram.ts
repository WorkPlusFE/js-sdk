import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';

export interface LaunchMiniProgramParams {
  user_name: string;
  path: string;
  /* 0 正式版，1 开发版，2 体验版 */
  miniprogram_type: 0 | 1 | 2;
}

export type LaunchMiniProgramOptions = LaunchMiniProgramParams & ExecOptions<void, void>;

/**
 * 调用小程序
 * @description 该接口用来调用小程序，获取小程序返回信息
 * @param {LaunchMiniProgramOptions} [options]
 * @module webview
 * @returns 无
 */
function launchMiniProgram(options: LaunchMiniProgramOptions): Promise<void> {
  const { success, fail, ...data } = options;
  return core.exec<LaunchMiniProgramParams, void, void>(
    WORKPLUS_WEBVIEW,
    'launchMiniProgram',
    [data],
    success,
    fail,
  );
}

export default launchMiniProgram;
