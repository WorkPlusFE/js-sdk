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
      title: '生物认证',
      description: '需要设备具备指纹或者FACE_ID解锁功能，解锁后触发回调，适用于对安全性要求较高的操作。',
      action: 'biometric',
      params: {},
    },
  ],
};
