import * as core from '../core';
import { ContactOption } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开搜索页面
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function searchInApp(options?: ContactOption<[], unknown>): Promise<unknown> {
  return core.exec<[], unknown, unknown>(
    WORKPLUS_CONTACT,
    'searchInApp',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
