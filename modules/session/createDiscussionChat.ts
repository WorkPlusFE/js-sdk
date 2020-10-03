import * as core from '../core';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {[]} [options]
 * @returns {void}
 */
export default function createDiscussionChat(): void {
  return core.execSync<[]>(WORKPLUS_CONTACT, 'createDiscussionChat', []);
}
