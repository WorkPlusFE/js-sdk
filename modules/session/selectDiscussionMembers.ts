import * as core from '../core';
import {
  ContactOption,
  SelectDiscussionMembersParams,
  SelectDiscussionMembersParamsOrigin,
  SelectDiscussionMembersRes,
} from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {SelectDiscussionMembersParams & ContactOption<SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
export default function selectDiscussionMembers(
  options: SelectDiscussionMembersParams & ContactOption<SelectDiscussionMembersRes>,
): Promise<SelectDiscussionMembersRes> {
  const args: SelectDiscussionMembersParamsOrigin = {
    discussion_id: options.discussionId,
    members_selected: options?.membersSelected || [],
  };
  return core.exec<SelectDiscussionMembersParamsOrigin, SelectDiscussionMembersRes, unknown>(
    WORKPLUS_CONTACT,
    'selectDiscussionMembers',
    [args],
    options?.success,
    options?.fail,
  );
}
