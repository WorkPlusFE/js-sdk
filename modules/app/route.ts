import * as core from '../core';
import { WORKPLUS_APP_STORE } from '../constants';
import { ExecOptions } from '../types/core';
import { AppRouteParams, AppRouteOriginParams, AppRouteRes } from '../types/app';

export type AppRouteOptions = AppRouteParams & ExecOptions<AppRouteRes, void>;

/**
 * 路由跳转
 * @description 根据参数跳转到指定的 App。
 * @param {AppRouteParams} [options]
 * @module app
 * @version 3.18.0
 */
export default function biometric(options: AppRouteOptions): Promise<AppRouteRes> {
  const { success, fail, ...data } = options;
  const params: AppRouteOriginParams = {
    scheme_url: data.schemeUrl,
  };

  return core.exec<AppRouteOriginParams, AppRouteRes, void>(
    WORKPLUS_APP_STORE,
    'route',
    [params],
    success,
    fail,
    false,
  );
}
