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

    {
      title: '获取 Api 地址',
      description: '获取当前 App 请求的后台 api 地址。',
      action: 'getServerInfo',
      params: {},
    },
    {
      title: '获取租户 ID',
      description: '获取当前租户 id，即域 id',
      action: 'getTenantID',
      params: {},
    },
  ],
};
