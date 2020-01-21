/** 邮箱 */

export default {
  title: '邮箱',
  module: 'email',
  active: false,
  icon: 'envelop-o',
  apis: [
    {
      title: '写邮件',
      description: '跳转到写邮件的页面',
      action: 'writeEmail',
      params: {
        emails: 'test@163.com',
      },
    },
    {
      title: '打开邮箱',
      description: '跳转到我的邮箱（未登陆就跳转到登陆页）',
      action: 'openEmail',
      params: {},
    },
  ],
};
