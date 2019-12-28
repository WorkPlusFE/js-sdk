import * as core from '../core';
import { ContactOption, ShowAppChatViewParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ContactOption<ShowAppChatViewParams[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showAppChatViewById(
  options?: ContactOption<ShowAppChatViewParams[], unknown>,
): Promise<unknown> {
  return core.exec<ShowAppChatViewParams[], unknown, unknown>(
    WORKPLUS_CONTACT,
    'showAppChatView',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
