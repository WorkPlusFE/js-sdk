// 应用

export default {
  title: '* 应用',
  module: 'app',
  active: false,
  apis: [{
    title: '路由跳转',
    description: '根据参数跳转到指定的 App，只在 schemeUrl 为 workplus:// 才有效。',
    action: 'route',
    params: {
      schemeUrl: 'workplus://meeting?type=zoom&action=join',
    },
  }],
};
