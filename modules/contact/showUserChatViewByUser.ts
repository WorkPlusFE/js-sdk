import * as core from '../core';
import { ContactOption, ShowUserChatViewByUserParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 轻应用输入userId，domianId, 跳转到workplus与该用户的聊天页面
 *
 * @export
 * @param {ContactOption<ShowUserChatViewByUserParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserChatViewByUser(
  options?: ContactOption<ShowUserChatViewByUserParams, unknown>,
): Promise<unknown> {
  return core.exec<ShowUserChatViewByUserParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'showUserChatViewByUser',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
