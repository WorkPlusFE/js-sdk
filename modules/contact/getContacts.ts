import * as core from '../core';
import { ContactOption, ContactsParams, ContactsRes } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<ContactsParams, ContactsRes>} [options]
 * @returns {Promise<ContactsRes>}
 */
export default function getContacts(
  options?: ContactOption<ContactsParams, ContactsRes>,
): Promise<ContactsRes> {
  return core.exec<ContactsParams, ContactsRes, unknown>(
    WORKPLUS_CONTACT,
    'getContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
