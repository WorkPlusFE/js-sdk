import * as core from '../core';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {boolean} [newWindow] 仅对 PC 客户端有效
 * @returns {void}
 */
export default function createDiscussionChat({ newWindow }: { newWindow?: boolean }): void {
  const options = core.isPCPlatform && typeof newWindow !== 'undefined' ? [ { newWindow }] : [];
  return core.execSync(WORKPLUS_CONTACT, 'createDiscussionChat', options);
}
