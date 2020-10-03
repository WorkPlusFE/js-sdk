import * as core from '../core';
import { ContactOption } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 获取手机通讯录联系人的列表
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function getMobileContacts(options?: ContactOption<unknown>): Promise<unknown> {
  return core.exec<[], unknown, unknown>(
    WORKPLUS_CONTACT,
    'getMobileContacts',
    [],
    options?.success,
    options?.fail,
  );
}
