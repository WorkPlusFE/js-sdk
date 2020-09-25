
/** 用户 */

export default {
  title: '* 用户',
  module: 'user',
  active: false,
  apis: [
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
      description: '通过传入组织id，获取当前用户的雇员信息，若不设置，默认为当前所在组织。',
      action: 'getCurrentEmployeeInfo',
      params: {},
    },
    {
      title: '获取用户信息',
      description: '通过用户的`domainId`和`userId`获取该用户的详细信息。',
      action: 'getUserInfoByUserId',
      params: {
        userId: '用户的userId',
        domainId: '用户的domainId',
      },
      disable: true,
    },
    {
      title: '打开用户详情页面',
      description: '通过用户`username`打开该用户信息的详情页面。',
      action: 'showUserInfoByUsername',
      params: {
        username: '用户的username',
      },
      disable: true,
    },
  ],
};
