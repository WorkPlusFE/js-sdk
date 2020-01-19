/** 认证 */

export default {
  title: '认证',
  module: 'auth',
  active: false,
  icon: 'lock',
  apis: [
    {
      title: '获取临时ticket',
      description: '为当前登录用户获取一个临时性的ticket',
      action: 'getUserTicket',
      params: {},
    },
    {
      title: '获取accessToken',
      description: '获取当前登录用户的accessToken',
      action: 'getAccessToken',
      params: {},
    },
    {
      title: '获取当前app请求后台api地址',
      description: '获取当前app请求后台api地址',
      action: 'getServerInfo',
      params: {},
    },
    {
      title: '退出当前WorkPlus账号',
      description: '退出当前WorkPlus账号，重新登录',
      action: 'onAccessTokenOverdue',
      params: {},
    },
    {
      title: '获取当前的域Id',
      description: '获取当前租户id，即域id',
      action: 'getTenantID',
      params: {},
    },
    {
      title: '获取当前登录用户最基本详情',
      description: '获取当前登录用户最基本详情，包括token，用户信息',
      action: 'getLoginUserInfo',
      params: {},
    },
    {
      title: '人脸识别',
      description: '唤起人脸识别验证(具体 sdk 根据当前打包配置)',
      action: 'faceBizValid',
      params: {},
    },
  ],
};
