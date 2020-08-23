/** 聊天会话 */

export default {
  title: '* 聊天',
  module: 'session',
  active: false,
  apis: [
    {
      title: '打开用户聊天页面',
      description: '传入`userId`、`domianId`，打开到 WorkPlus 与该用户的聊天页面。',
      action: 'showUserChatViewByUser',
      params: {
        userId: '用户的userId',
        domainId: '用户的domainId',
      },
    },
    {
      title: '打开群组聊天页面',
      description: '通过`群组id`打开该群组的聊天页面，并且可以自定义发送应用所支持的消息。',
      action: 'openDiscussionById',
      params: {
        discussionId: '0629aad170784c9e810985c443fb0bd6',
        body_type: 'SHARE',
        body: {
          display_avatar: '媒体id',
          share_type: 'LINK',
          share_message: {
            avatar: 'http://www.icon',
            digest: '这里显示摘要',
            url: 'www.baidu.com',
          },
        },
      },
    },
    {
      title: '创建群组',
      description: '通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息。',
      action: 'createDiscussionChat',
      params: {},
    },
    {
      title: '打开群组选人界面',
      description: '根据`群组id`, 打开群组成员界面, 并进行选择。',
      action: 'selectDiscussionMembers',
      params: {
        discussionId: '7e41cf3691344b28a9dd2035bac47',
        membersSelected: [],
      },
    },
  ],
};
