import { ExecOptions } from '../types/core';
export interface RequestParams {
    /** 必须，请求的url */
    url: string;
    /** 请求的参数 */
    data?: object;
    /** 请求的 header */
    header?: object;
    /** 超时时间，单位为毫秒，默认值 30000 毫秒 */
    timeout?: number;
    /** HTTP的请求方法，只支持 GET/HEAD/POST/PUT/DELETE */
    method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE';
}
export interface RequestRes {
    /** 返回的结果 */
    data: object | ArrayBuffer;
    /** 请求响应返回的的 header */
    header: object;
    /** HTTP的状态码 */
    statusCode: number;
}
export declare type RequestOptions = RequestParams & ExecOptions<RequestRes, RequestRes>;
/**
 * 原生 Ajax 请求
 * @description 纯 http 请求，不带业务
 * @param {RequestOptions>} [options]
 * @module network
 * @returns {RequestRes}
 */
export declare function request(options: RequestOptions): Promise<RequestRes>;
/**
 * 带 auth 信息的原生 Ajax 请求
 * @description 会将token塞入header和带有授权业务的http请求，参数和结果参照HTTP请求的接口
 * @param {RequestOptions>} [options]
 * @module network
 * @returns {RequestRes}
 */
export declare function authRequest(options: RequestOptions): Promise<RequestRes>;
