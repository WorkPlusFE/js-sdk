/** 认证 */

export default {
  title: '认证',
  module: 'auth',
  active: false,
  apis: [
    {
      title: '获取临时 Ticket',
      description: '为当前登录用户获取一个临时性的 Ticket。',
      action: 'getUserTicket',
      params: {},
    },
  ],
};
