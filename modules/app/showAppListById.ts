import * as core from '../core';
import { ShowAppListByIdParams, ShowAppListById } from '../types/contact';

import { WORKPLUS_APP_STORE } from '../constants';

/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ShowAppListById} [options]
 * @returns {void}
 */
export default function showAppListById(options: ShowAppListById): void {
  const args: ShowAppListByIdParams = {
    org_id: options.orgId,
  };
  return core.execSync<ShowAppListByIdParams>(WORKPLUS_APP_STORE, 'showAppListById', [args]);
}
