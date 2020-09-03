import * as core from '../core';
import { ContactOption, ShowUserInfoByUsernameParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ContactOption<ShowUserInfoByUsernameParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserInfoByUsername(
  options?: ContactOption<ShowUserInfoByUsernameParams, unknown>,
): Promise<unknown> {
  return core.exec<ShowUserInfoByUsernameParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'showUserInfoByUsername',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
