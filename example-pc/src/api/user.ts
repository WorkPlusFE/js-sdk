
/** 用户 */

export default {
  title: '用户',
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
  ],
};
