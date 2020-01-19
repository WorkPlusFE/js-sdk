export default {
  title: '网页',
  module: 'webview',
  active: false,
  icon: 'graphic',
  apis: [
    {
      title: '打开WorkPlus里已有的html',
      description: '传入相对地址，打开WorkPlus里已有的网页',
      action: 'openLocalURL',
      params: {
        localURL: '',
      },
    },
    {
      title: '打开一个网页',
      description: '传入地址，打开WorkPlus网页',
      action: 'openWebView',
      params: {
        url: 'https://www.baidu.com',
        title: '百度',
        use_android_webview: true,
        display_mode: '',
      },
    },
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
        items: [{ icon: -1, title: '完成', action: 'js', value: 'rightButtons' }],
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
      title: '退出webview',
      description: '退出webview',
      action: 'exit',
      params: {},
    },
    {
      title: '弹出分享对话框',
      description: '弹出分享对话框，跳转分享',
      action: 'share',
      params: {
        url: 'http://www.baidu.com',
        title: '百度一下',
        cover_media_id: '',
        scope: 0,
        summary: '点击打开百度首页',
        // dicrectly: '',
      },
    },
    {
      title: '跳转到workkplus特定页面',
      description: '跳转到workkplus特定页面',
      action: 'toActivity',
      params: {
        activity: 'toMain',
        client_id: '用户id',
        next_url: 'www.baidu.com',
        access_token: '123456789',
        usertitle: '用户注册username',
        title: '用户名字',
      },
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
        items: [{ icon: -1, title: '返回', action: 'js', value: 'back' }],
      },
    },
    {
      title: '控制屏幕旋转',
      description: '根据参数控制屏幕横屏显示或者竖屏显示',
      action: 'changeOrientation',
      params: {
        landscape: true,
        lock: false,
      },
    },
    {
      title: '添加水印',
      description: '给页面添加水印',
      action: 'addWaterMask',
      params: {
        textColor: '#000000',
        orgId: 'XXX',
        alpha: 1.0,
        verticalPadding: 40,
        fontSize: 16,
      },
    },
    {
      title: '移除水印',
      description: '移除水印',
      action: 'removeWaterMask',
      params: {},
    },
    {
      title: '注册摇一摇监听',
      description:
        '前端需要实现全局 onWorkplusShake() 方法, 在该处执行自己的业务, 摇一摇后将在该方法回调',
      action: 'registerShakeListener',
      params: {},
    },
    {
      title: '注销摇一摇监听',
      description: '注销摇一摇监听',
      action: 'unregisterShakeListener',
      params: {},
    },
    {
      title: '微信分享(会话/朋友圈)',
      description: '根据接口直接调起微信分享页面',
      action: 'wxShare',
      params: {
        app_id: 'wx63f4a539bf345965',
        title: '这是一个标题',
        type: 'webpage',
        description: '这是概要，你信不信',
        thumb: 'base64://xxxxx==',
        scene: 0,
        data: { url: 'https://www.baidu.com' },
      },
    },
    {
      title: '语音转文本',
      description: '语音转文本',
      action: 'voiceToText',
      params: {},
    },
  ],
};
