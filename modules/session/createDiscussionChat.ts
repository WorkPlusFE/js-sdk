import * as core from '../core';
import { ContactOption } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function createDiscussionChat(
  options?: ContactOption<[], unknown>,
): Promise<unknown> {
  return core.exec<[], unknown, unknown>(
    WORKPLUS_CONTACT,
    'createDiscussionChat',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
