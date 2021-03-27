// 网页头部

export default {
  title: '网页头部',
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
      description: '设置左侧按钮回调，传入一个全局的 JS 函数名。执行方法后，点击左上角返回按钮，全局方法将被执行（弹出一个提示框），原始返回行为将无效。',
      action: 'leftButton',
      params: {
        method: 'leftButtonBackEvent',
      },
    },
    {
      title: '更换右侧按钮动作',
      description: '更换右侧按钮，参数为一个选项列表。执行方法后，右上角按钮将变成“点我”，点击后，绑定的全局方法将被执行（弹出一个提示框）。该接口参数较多，详情请查阅官方文档！',
      action: 'rightButtons',
      params: {
        items: [
          [{
            icon: -1, title: '点我', action: 'js', value: 'rightButtonsEvent',
          }],
          [{
            icon: -1, title: '🐳', action: 'js', value: 'rightButtonsEvent',
          }]
        ],
      },
    },
    {
      title: '更换头部title',
      description: '更换webview的导航栏标题',
      action: 'setTitle',
      params: '这是新的标题-1',
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
          icon: -1, title: '<-返回', action: 'js', value: 'leftButtonBackEvent',
        }],
      },
    },
    {
      title: '显示搜索栏',
      description: '让原生头部变成一个搜索框，v4.10.0 版本开始支持。',
      action: 'showSearchBar',
      params: {
        hint: '请输入关键字',
      },
    },
  ],
};
