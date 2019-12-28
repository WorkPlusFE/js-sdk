import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption } from '../types/auth';

/**
 * 通过轻应用告知当前accessToken过期，workplus推出当前登录状态
 *
 * @export
 * @param {AuthOption<void, void>} [options]
 * @returns
 */
export default function onAccessTokenOverdue(options?: AuthOption<void, void>): Promise<void> {
  return core.exec<void, void, unknown>(
    WORKPLUS_AUTH,
    'onAccessTokenOverdue',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
