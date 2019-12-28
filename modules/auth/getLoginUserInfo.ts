import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption, GetLoginUserInfoRes } from '../types/auth';

/**
 * 获取当前登录用户最基本详情，包括token，用户信息
 *
 * @export
 * @param {AuthOption<void, GetLoginUserInfoRes>} [options]
 * @returns
 */
export default function getLoginUserInfo(
  options?: AuthOption<void, GetLoginUserInfoRes>,
): Promise<GetLoginUserInfoRes> {
  return core.exec<void, GetLoginUserInfoRes, unknown>(
    WORKPLUS_AUTH,
    'getLoginUserInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
