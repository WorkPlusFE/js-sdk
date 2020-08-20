/** 邮箱 */

export default {
  title: '* 联系人',
  module: 'contact',
  active: false,
  icon: 'envelop-o',
  apis: [
    {
      title: '单选联系人',
      description: '打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。',
      action: 'getSingleContact',
      params: {
        hideMe: true,
        filterSenior: 1,
      },
    },
    {
      title: '多选联系人',
      description: '打开当前组织的联系人列表，多选联系人(兼容2.0数据)。',
      action: 'getContacts',
      params: {
        hideMe: true,
        filterSenior: 1,
        selectedContacts: ['联系人列表信息，用于复选'],
      },
    },
    {
      title: '获取登录用户详情',
      description: '获取当前登录用户详细信息，包括某个组织下的雇员信息。',
      action: 'getCurrentUserInfo',
      params: {
        needEmpInfo: true,
      },
    },
    {
      title: '获取用户的雇员信息',
      description: '通过传入组织id，获取当前用户的雇员信息，默认为当前所在组织。',
      action: 'getCurrentEmployeeInfo',
      params: {
        orgCode: '组织id',
      },
    },
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
      title: '获取手机通讯录',
      description: '获取手机通讯录联系人的列表。',
      action: 'getMobileContacts',
      params: {
      },
    },
    {
      title: '获取用户信息',
      description: '通过用户的`domainId`和`userId`获取该用户的详细信息。',
      action: 'getUserInfoByUserId',
      params: {
        userId: '用户的userId',
        domainId: '用户的domainId',
      },
    },
    {
      title: '打开用户详情页面',
      description: '通过用户`username`打开该用户信息的详情页面。',
      action: 'showUserInfoByUsername',
      params: {
        username: '用户的username',
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
      params: {
      },
    },
    {
      title: '打开应用聊天界面',
      description: '通过`应用id`和`orgId`，打开该组织下某个应用聊天界面。',
      action: 'showAppChatViewById',
      params: {
        appId: 'eb66ba3d-1d83-4104-8119-c6fc3b12cdca',
        domainId: 'workplus',
        orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
        sessionType: 'service',
      },
    },
    {
      title: '打开搜索页面',
      description: '打开 WorkPlus 的搜索页面。',
      action: 'searchInApp',
      params: {
      },
    },
    {
      title: '打开App列表页面',
      description: '根据`组织id`打开该组织下的应用列表页面。',
      action: 'showAppListById',
      params: {
        orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
      },
    },
    {
      title: '打开通用选择人员界面',
      description: '该接口打开通用的选择界面，此界面能选择组织内的雇员信息, 用户的星标联系人等。',
      action: 'selectContacts',
      params: {
        filterSenior: 1,
        maxCount: 9,
        selectedUsers: [], // 已选择的users
        selectedEmployees: [], // 已选择的employees
      },
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
    {
      title: '获取选人缓存数据',
      description: '适用于由原生选人界面跳转到 H5 端，然后 H5 端获取选人数据的场景。',
      action: 'selectContactsCache',
      params: {
      },
    },
  ],
};
