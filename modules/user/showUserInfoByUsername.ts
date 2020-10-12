import * as core from '../core';
import { ContactOption, ShowUserInfoByUsernameParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ShowUserInfoByUsernameParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserInfoByUsername(
  options: ShowUserInfoByUsernameParams & ContactOption<unknown>,
): Promise<unknown> {
  const { success, fail, ...args } = options;
  return core.exec<ShowUserInfoByUsernameParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'showUserInfoByUsername',
    [args],
    success,
    fail,
    false,
  );
}
