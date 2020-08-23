// 网页头部

export default {
  title: '* 网页头部',
  module: 'header',
  active: false,
  apis: [
    {
      title: '锁定网页顶部栏',
      description: '锁定顶部栏，使得顶部栏按钮无效，参数为字符串lock和unlock',
      action: 'navigation',
      params: {
        lock: true,
      },
    },
    {
      title: '更换左侧按钮动作',
      description: '设置左侧按钮回调，传入一个全局的JS函数名',
      action: 'leftButton',
      params: {
        method: 'back',
      },
    },
    {
      title: '更换右侧按钮动作',
      description: '更换右侧按钮，参数为一个选项列表',
      action: 'rightButtons',
      params: {
        items: [{
          icon: -1, title: '完成', action: 'js', value: 'rightButtons',
        }],
      },
    },
    {
      title: '更换头部title',
      description: '更换webview的导航栏标题',
      action: 'title',
      params: {
        title: '标题',
      },
    },
    {
      title: '清除左侧按钮',
      description: '清除左侧按钮',
      action: 'clearLeftButton',
      params: {},
    },
    {
      title: '清除右侧按钮',
      description: '清除右侧按钮',
      action: 'clearRightButtons',
      params: {},
    },
    {
      title: '是否隐藏或显示左侧的按钮和关闭字样',
      description: '是否隐藏或显示左侧的按钮和关闭字样',
      action: 'visibleLeftButton',
      params: {
        showBack: false,
        showClose: true,
      },
    },
    {
      title: '更换左侧侧按钮和定义动作',
      description: '更换左侧的按钮动作',
      action: 'changeLeftButton',
      params: {
        items: [{
          icon: -1, title: '返回', action: 'js', value: 'back',
        }],
      },
    },
  ],
};
