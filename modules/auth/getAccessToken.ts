import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption, GetAccessTokenRes } from '../types/auth';

/**
 * 获取当前登录用户的accessToken
 *
 * @export
 * @param {AuthOption<void, GetAccessTokenRes>} [options]
 * @returns
 */
export default function getAccessToken(
  options?: AuthOption<void, GetAccessTokenRes>,
): Promise<GetAccessTokenRes> {
  return core.exec<void, GetAccessTokenRes, unknown>(
    WORKPLUS_AUTH,
    'getAccessToken',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
