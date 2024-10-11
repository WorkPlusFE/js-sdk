"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openDiscussionById_1 = require("./openDiscussionById");
var createDiscussionChat_1 = require("./createDiscussionChat");
var showUserChatViewByUser_1 = require("./showUserChatViewByUser");
exports.default = {
    /** 打开用户聊天页面 */
    showUserChatViewByUser: showUserChatViewByUser_1.default,
    /** 打开群组聊天页面 */
    openDiscussionById: openDiscussionById_1.default,
    /** 创建群组 */
    createDiscussionChat: createDiscussionChat_1.default,
};
