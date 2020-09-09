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
  }, {
    title: '打开应用聊天界面',
    description: '通过应用 id 和 orgId，打开该组织下某个应用聊天界面。',
    action: 'showAppChatViewById',
    params: {
      appId: 'eb66ba3d-1d83-4104-8119-c6fc3b12cdca',
      domainId: 'workplus',
      orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
      sessionType: 'service',
    },
  },
  {
    title: '打开搜索页面',
    description: '打开 WorkPlus 的搜索页面。',
    action: 'searchInApp',
    params: {
    },
  },
  {
    title: '打开 App 列表页面',
    description: '根据组织 id 打开该组织下的应用列表页面。',
    action: 'showAppListById',
    params: {
      orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
    },
  }],
};
