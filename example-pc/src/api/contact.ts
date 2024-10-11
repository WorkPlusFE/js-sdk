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
      },
    },
  ],
};
