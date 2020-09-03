import * as core from '../core';
import { ContactOption, GetUserInfoByUserIdParams, GetUserInfoByUserIdRes } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过用户域id和用户id获取这个用户的详细信息
 *
 * @export
 * @param {ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>} [options]
 * @returns {Promise<GetUserInfoByUserIdRes>}
 */
export default function getUserInfoByUserId(
  options?: ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>,
): Promise<GetUserInfoByUserIdRes> {
  return core.exec<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes, unknown>(
    WORKPLUS_CONTACT,
    'getUserInfoByUserId',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
