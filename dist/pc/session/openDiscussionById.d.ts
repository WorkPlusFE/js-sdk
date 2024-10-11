import { OpenDiscussionByIdParams, ContactOption } from '../types/contact';
/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {OpenDiscussionByIdParams} [options]
 * @returns {Promise<unknown>}
 */
export default function openDiscussionById(options: OpenDiscussionByIdParams & ContactOption<unknown>): Promise<unknown>;
