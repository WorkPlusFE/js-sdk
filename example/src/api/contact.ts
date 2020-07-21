/** 邮箱 */

export default {
  title: '联系人',
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
  ],
};
