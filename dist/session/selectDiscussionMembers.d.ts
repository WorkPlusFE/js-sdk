import { ContactOption, SelectDiscussionMembersParams, SelectDiscussionMembersRes } from '../types/contact';
/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
export default function selectDiscussionMembers(options?: ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>): Promise<SelectDiscussionMembersRes>;
