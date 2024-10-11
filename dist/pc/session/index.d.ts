import openDiscussionById from './openDiscussionById';
import createDiscussionChat from './createDiscussionChat';
import showUserChatViewByUser from './showUserChatViewByUser';
declare const _default: {
    /** 打开用户聊天页面 */
    showUserChatViewByUser: typeof showUserChatViewByUser;
    /** 打开群组聊天页面 */
    openDiscussionById: typeof openDiscussionById;
    /** 创建群组 */
    createDiscussionChat: typeof createDiscussionChat;
};
export default _default;
