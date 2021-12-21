import { ExecOptions, CommonApiRes } from '../types/core';
export interface CheckApiParams {
    /** 插件名称 */
    service: string;
    /** 插件方法 */
    method: string;
}
export declare type CheckApiOptions = CheckApiParams & ExecOptions<CommonApiRes, void>;
/**
 * 接口检测
 * @description 检验是否存在 Cordova 插件和方法
 * @param {ConfigOptions} [options]
 * @module config
 * @returns {CommonApiRes}
 */
export default function checkApi(options: CheckApiOptions): Promise<CommonApiRes>;
