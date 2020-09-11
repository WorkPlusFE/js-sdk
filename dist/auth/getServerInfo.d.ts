import { ExecOptions } from '../types/core';
import { GetServerInfoRes } from '../types/auth';
export declare type ServerInfoOptions = ExecOptions<GetServerInfoRes, void>;
/**
 * 获取当前app请求后台api地址
 * @description 获取当前app请求后台api地址
 * @param {ServerInfoOptions} [options]
 * @module auth
 * @returns api_url
 */
export default function getServerInfo(options?: ServerInfoOptions): Promise<GetServerInfoRes>;
