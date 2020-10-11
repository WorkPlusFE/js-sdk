import * as core from '../core';
import { ContactOption, ContactsParams, ContactsRes } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

export type ContactsOptions = ContactsParams & ContactOption<ContactsRes>;

/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactsOptions} [options]
 * @returns {Promise<ContactsRes>}
 */
export default function getContacts(options?: ContactsOptions): Promise<ContactsRes> {
  const args: ContactsParams = {
    selectedContacts: options?.selectedContacts || [],
    hideMe: options?.hideMe || false,
    filterSenior: options?.filterSenior || 1,
  };
  return core.exec<ContactsParams, ContactsRes, unknown>(
    WORKPLUS_CONTACT,
    'getContacts',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
