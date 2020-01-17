export default {
  title: '网页',
  module: 'webview',
  active: false,
  icon: 'graphic',
  apis: [
    {
      title: '打开WorkPlus里已有的html',
      action: 'openLocalURL',
      params: {
        localURL: '',
      },
    },
    {
      title: '打开一个网页',
      action: 'openWebView',
      params: {
        url: '打开的网址url',
        title: '打开网页的标题',
        use_android_webview: true, // 是否使用 android 原生 webview 打开, 否则使用workplus 订制的 webview
        display_mode: 'FULL_SCREEN', // 全屏打开 webview(即不包含原生标题栏), 默认非全屏
      },
    },
    {
      title: '锁定网页顶部栏',
      action: 'navigation',
      params: {
        lock: true,
      },
    },
    {
      title: '更换左侧按钮动作',
      action: 'leftButton',
      params: {},
    },
    {
      title: '更换右侧按钮动作',
      action: 'rightButtons',
      params: {},
    },
    {
      title: '更换头部title',
      action: 'title',
      params: {
        title: '标题',
      },
    },
    {
      title: '清除左侧按钮',
      action: 'clearLeftButton',
      params: {},
    },
    {
      title: '清除右侧按钮',
      action: 'clearRightButtons',
      params: {},
    },
    {
      title: '退出webview',
      action: 'exit',
      params: {},
    },
    {
      title: '弹出分享对话框',
      action: 'share',
      params: {
        url: 'http://www.baidu.com',
        title: '百度一下',
        cover_media_id: '分享图标mediaId',
        scope: 0,
        summary: 'abc',
        dicrectly: 'w6s_contact',
      },
    },
    {
      title: '跳转到workkplus特定页面',
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
      action: 'visibleLeftButton',
      params: {
        showBack: true,
        showClose: true,
      },
    },
    {
      title: '更换左侧侧按钮和定义动作',
      action: 'changeLeftButton',
      params: {
        data: [
          {
            disable: 'false',
            icon: '图标',
            title: '标题',
            action: '动作 list等',
            value: '',
          },
        ],
      },
    },
    {
      title: '控制屏幕旋转',
      action: 'changeOrientation',
      params: {
        landscape: true,
        lock: false,
      },
    },
    {
      title: '添加水印',
      action: 'addWaterMask',
      params: {
        textColor: '#000000', // 字体颜色
        orgId: 'XXX', // 组织id，传值则以这个组织下的雇员名显示内容，可不传，默认当前组织
        alpha: 1.0, // 水印文字透明度 0-1.0之间，可不传， 默认1.0
        verticalPadding: 40, // 水印文字上下的垂直高度（密度），可不传，默认40
        fontSize: 16, // 字体大小，可不传，默认16
      },
    },
    {
      title: '移除水印',
      action: 'removeWaterMask',
      params: {},
    },
    {
      title: '注册摇一摇监听',
      action: 'registerShakeListener',
      params: {},
    },
    {
      title: '微信分享(会话/朋友圈)',
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
      action: 'voiceToText',
      params: {},
    },
  ],
};
