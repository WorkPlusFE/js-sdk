export default {
  title: '网页',
  module: 'webview',
  active: false,
  icon: 'other-pay',
  apis: [
    {
      title: '打开一个网页',
      description: '传入地址，打开WorkPlus网页',
      action: 'openWebView',
      params: {
        url: 'https://workplus.io',
        title: 'WorkPlus',
        use_android_webview: true,
        display_mode: '',
      },
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
        url: 'https://workplus.io',
        title: 'WorkPlus',
        cover_media_id: '',
        scope: 0,
        summary: '点击打开 WorkPlus 官网',
        // dicrectly: '',
      },
    },
    {
      title: '屏幕旋转',
      action: 'changeOrientation',
      params: {},
    },
    {
      title: '网页水印',
      action: 'addWaterMask',
      params: {},
    },
    {
      title: '摇一摇',
      action: 'registerShakeListener',
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
      disable: true,
    },
  ],
};
