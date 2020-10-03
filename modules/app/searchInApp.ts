import * as core from '../core';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开搜索页面
 * @returns {void}
 */
export default function searchInApp(): void {
  return core.execSync<[]>(WORKPLUS_CONTACT, 'searchInApp', []);
}
