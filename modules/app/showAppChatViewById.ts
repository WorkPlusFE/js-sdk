import * as core from '../core';
import { ShowAppChatViewParams, ShowAppChatView } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ShowAppChatView} [options]
 * @returns {void}
 */
export default function showAppChatViewById(options: ShowAppChatView): void {
  const args: ShowAppChatViewParams = {
    app_id: options.appId,
    domain_id: options.domainId,
    org_id: options.orgId,
    session_type: options.sessionType,
  };
  return core.execSync<ShowAppChatViewParams>(WORKPLUS_CONTACT, 'showAppChatView', [args]);
}
