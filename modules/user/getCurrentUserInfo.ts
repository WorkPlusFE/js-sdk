import * as core from '../core';
import { ContactOption, CurrentUserInfoParams, CurrentUserInfoRes } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
export default function getCurrentUserInfo(
  options?: ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>,
): Promise<CurrentUserInfoRes> {
  return core.exec<CurrentUserInfoParams, CurrentUserInfoRes, unknown>(
    WORKPLUS_CONTACT,
    'getCurrentUserInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
