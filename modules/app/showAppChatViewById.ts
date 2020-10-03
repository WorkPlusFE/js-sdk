import * as core from '../core';
import { ShowAppChatViewParams } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ShowAppChatViewParams} [options]
 * @returns {void}
 */
export default function showAppChatViewById(options: ShowAppChatViewParams): void {
  return core.execSync<ShowAppChatViewParams>(WORKPLUS_CONTACT, 'showAppChatView', [options]);
}
