import * as core from '../core';
import { ContactOption, OpenDiscussionByIdParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {ContactOption<OpenDiscussionByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function openDiscussionById(
  options?: ContactOption<OpenDiscussionByIdParams, unknown>,
): Promise<unknown> {
  return core.exec<OpenDiscussionByIdParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'openDiscussionById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
