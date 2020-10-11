import * as core from '../core';
import { ContactOption, SelectContactsParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {SelectContactsParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function selectContacts(
  options?: SelectContactsParams & ContactOption<unknown>,
): Promise<unknown> {
  const args: SelectContactsParams = {
    filterSenior: options?.filterSenior || 1,
    maxCount: options?.maxCount || -1,
    selectedUsers: options?.selectedUsers || [],
    selectedEmployees: options?.selectedEmployees || [],
  };
  return core.exec<SelectContactsParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'selectContacts',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
