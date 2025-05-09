import * as core from '../core';
import { ContactOption, ShowUserChatViewByUserParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 轻应用输入userId，domianId, 跳转到workplus与该用户的聊天页面
 *
 * @export
 * @param {ShowUserChatViewByUserParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserChatViewByUser(
  options: ShowUserChatViewByUserParams & ContactOption<unknown>,
): Promise<unknown> {
  const { success, fail, ...args } = options;
  if (!core.isPCPlatform) {
    delete args.newWindow;
  }
  return core.exec<ShowUserChatViewByUserParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'showUserChatViewByUser',
    [args],
    success,
    fail,
    false,
  );
}
