import { ExecOptions, CommonApiRes } from '../types/core';
export interface AssembleAuthUrlParams {
    /** WorkPlus 媒体id */
    media_ids?: [string];
    /** 普通的url */
    urls?: [string];
}
export interface AssembleAuthUrlRes {
    code: number;
    message: string;
    result: AssembleAuthUrlParams;
}
export declare type AssembleAuthUrlOptions = AssembleAuthUrlParams & ExecOptions<AssembleAuthUrlRes, CommonApiRes>;
/**
 * url 鉴权处理
 * @description 该接口主要用于 url 做签名参数处理, 使 WorkPlus 平台的 url 可以合法访问。
 * @param {AssembleAuthUrlParams} [options]
 * @module network
 * @returns 转换后的链接
 */
declare function assembleAuthUrl(options: AssembleAuthUrlOptions): Promise<AssembleAuthUrlRes>;
export default assembleAuthUrl;
