import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { NotResOptions } from '../types/core';

/**
 * 退出当前WorkPlus账号
 * @description 退出当前WorkPlus账号，重新登录
 * @param {NotResOptions} [options]
 * @module auth
 * @returns 无
 */
export default function onAccessTokenOverdue(options?: NotResOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_AUTH,
    'onAccessTokenOverdue',
    [],
    options?.success,
    options?.fail,
  );
}
