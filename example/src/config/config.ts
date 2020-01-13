export default [
  {
    name: 'WorkPlus_WebView',
    showApi: false,
    api: [
      {
        name: '打开WorkPlus里已有的html',
        api_key: 'openLocalURL',
        params: [{
          localURL: '',
        }],
      },
      {
        name: '打开一个网页',
        api_key: 'openWebView',
        params: [{
          url: '打开的网址url',
          title: '打开网页的标题',
          use_android_webview: true, // 是否使用 android 原生 webview 打开, 否则使用workplus 订制的 webview
          display_mode: 'FULL_SCREEN', // 全屏打开 webview(即不包含原生标题栏), 默认非全屏
        }],
      },
      {
        name: '锁定网页顶部栏',
        api_key: 'navigation',
        params: ['lock'],
      },
      {
        name: '更换左侧按钮动作',
        api_key: 'leftButton',
        params: [],
      },
      {
        name: '更换右侧按钮动作',
        api_key: 'rightButtons',
        params: [],
      },
      {
        name: '更换头部title',
        api_key: 'title',
        params: ['title'],
      },
      {
        name: '清除左侧按钮',
        api_key: 'clearLeftButton',
        params: [],
      },
      {
        name: '清除右侧按钮',
        api_key: 'clearRightButtons',
        params: [],
      },
      {
        name: '退出webview',
        api_key: 'exit',
        params: [],
      },
      {
        name: '弹出分享对话框',
        api_key: 'share',
        params: [{
          url: 'http://www.baidu.com',
          title: '百度一下',
          cover_media_id: '分享图标mediaId',
          scope: 0,
          summary: 'abc',
          dicrectly: 'w6s_contact',
        }],
      },
      {
        name: '跳转到workkplus特定页面',
        api_key: 'toActivity',
        params: [{
          activity: 'toMain',
          client_id: '用户id',
          next_url: 'www.baidu.com',
          access_token: '123456789',
          username: '用户注册username',
          name: '用户名字',
        }],
      },
      {
        name: '是否隐藏或显示左侧的按钮和关闭字样',
        api_key: 'visibleLeftButton',
        params: [{
          showBack: true,
          showClose: true,
        }],
      },
      {
        name: '更换左侧侧按钮和定义动作',
        api_key: 'changeLeftButton',
        params: [
          [
            {
              disable: 'false',
              icon: '图标',
              title: '标题',
              action: '动作 list等',
              value: '',
            },
          ],
        ],
      },
      {
        name: '控制屏幕旋转',
        api_key: 'changeOrientation',
        params: [{
          landscape: true,
          lock: false,
        }],
      },
      {
        name: '添加水印',
        api_key: 'addWaterMask',
        params: [
          {
            textColor: '#000000', // 字体颜色
            orgId: 'XXX', // 组织id，传值则以这个组织下的雇员名显示内容，可不传，默认当前组织
            alpha: 1.0, // 水印文字透明度 0-1.0之间，可不传， 默认1.0
            verticalPadding: 40, // 水印文字上下的垂直高度（密度），可不传，默认40
            fontSize: 16, // 字体大小，可不传，默认16
          },
        ],
      },
      {
        name: '移除水印',
        api_key: 'removeWaterMask',
        params: [],
      },
      {
        name: '注册摇一摇监听',
        api_key: 'registerShakeListener',
        params: [],
      },
      {
        name: '微信分享(会话/朋友圈)',
        api_key: 'wxShare',
        params: [
          {
            app_id: 'wx63f4a539bf345965',
            title: '这是一个标题',
            type: 'webpage',
            description: '这是概要，你信不信',
            thumb: 'base64://xxxxx==',
            scene: 0,
            data: { url: 'https://www.baidu.com' },
          },
        ],
      },
      {
        name: '语音转文本',
        api_key: 'voiceToText',
        params: [],
      },
    ],
  },
];
