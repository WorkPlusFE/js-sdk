import * as core from '../core';
import { ContactOption, GetUserInfoByUserIdParams, GetUserInfoByUserIdRes } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过用户域id和用户id获取这个用户的详细信息
 *
 * @export
 * @param {GetUserInfoByUserIdParams & ContactOption<GetUserInfoByUserIdRes>} [options]
 * @returns {Promise<GetUserInfoByUserIdRes>}
 */
export default function getUserInfoByUserId(
  options: GetUserInfoByUserIdParams & ContactOption<GetUserInfoByUserIdRes>,
): Promise<GetUserInfoByUserIdRes> {
  const { success, fail, ...args } = options;
  return core.exec<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes, unknown>(
    WORKPLUS_CONTACT,
    'getUserInfoByUserId',
    [args],
    success,
    fail,
  );
}
