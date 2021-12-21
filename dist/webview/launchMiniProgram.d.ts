import { ExecOptions } from '../types/core';
export interface LaunchMiniProgramParams {
    user_name: string;
    path: string;
    miniprogram_type: 0 | 1 | 2;
}
export declare type LaunchMiniProgramOptions = LaunchMiniProgramParams & ExecOptions<void, void>;
/**
 * 调用小程序
 * @description 该接口用来调用小程序，获取小程序返回信息
 * @param {LaunchMiniProgramOptions} [options]
 * @module webview
 * @returns 无
 */
declare function launchMiniProgram(options: LaunchMiniProgramOptions): Promise<void>;
export default launchMiniProgram;
