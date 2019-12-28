import * as core from '../core';
import { ContactOption, SelectContactsCacheRes } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 获取选人缓存数据
 *
 * @export
 * @param {ContactOption<[], SelectContactsCacheRes>} [options]
 * @returns {Promise<SelectContactsCacheRes>}
 */
export default function selectContactsCache(
  options?: ContactOption<[], SelectContactsCacheRes>,
): Promise<SelectContactsCacheRes> {
  return core.exec<[], SelectContactsCacheRes, unknown>(
    WORKPLUS_CONTACT,
    'selectContactsCache',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
