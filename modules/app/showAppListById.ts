import * as core from '../core';
import { ShowAppListByIdParams } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ShowAppListByIdParams} [options]
 * @returns {void}
 */
export default function showAppListById(options: ShowAppListByIdParams): void {
  return core.execSync<ShowAppListByIdParams>(WORKPLUS_CONTACT, 'showAppListById', [options]);
}
