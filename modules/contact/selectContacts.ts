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
  options: SelectContactsParams & ContactOption<unknown>,
): Promise<unknown> {
  const { success, fail, ...args } = options;
  return core.exec<SelectContactsParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'selectContacts',
    [args],
    success,
    fail,
  );
}
