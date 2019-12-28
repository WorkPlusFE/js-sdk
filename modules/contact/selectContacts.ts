import * as core from '../core';
import { ContactOption, SelectContactsParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {ContactOption<SelectContactsParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function selectContacts(
  options?: ContactOption<SelectContactsParams, unknown>,
): Promise<unknown> {
  return core.exec<SelectContactsParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'selectContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
