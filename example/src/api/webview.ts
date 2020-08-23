export default {
  title: '* 网页',
  module: 'webview',
  active: false,
  icon: 'other-pay',
  apis: [
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
  ],
};
