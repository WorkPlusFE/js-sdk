import * as core from '../core';
import { ContactOption, ShowAppListByIdParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ContactOption<ShowAppListByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showAppListById(
  options?: ContactOption<ShowAppListByIdParams, unknown>,
): Promise<unknown> {
  return core.exec<ShowAppListByIdParams, unknown, unknown>(
    WORKPLUS_CONTACT,
    'showAppListById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
