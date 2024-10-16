import { ContactOption, ShowUserChatViewByUserParams } from '../types/contact';
/**
 * 轻应用输入 userId，domianId, 跳转到 WorkPlus 与该用户的聊天页面
 *
 * @export
 * @param {ShowUserChatViewByUserParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserChatViewByUser(options: ShowUserChatViewByUserParams & ContactOption<unknown>): Promise<unknown>;
