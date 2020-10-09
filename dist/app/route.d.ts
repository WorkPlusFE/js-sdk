import { ExecOptions } from '../types/core';
import { AppRouteParams, AppRouteRes } from '../types/app';
export declare type AppRouteOptions = AppRouteParams & ExecOptions<AppRouteRes, void>;
/**
 * 路由跳转
 * @description 根据参数跳转到指定的 App。
 * @param {AppRouteParams} [options]
 * @module app
 * @version 3.18.0
 */
export default function route(options: AppRouteOptions): Promise<AppRouteRes>;
