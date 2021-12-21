// 常用

export default {
  title: '常用方法',
  module: 'util',
  active: false,
  icon: 'photo-o',
  apis: [
    {
      title: '扫描二维码',
      description: '调用相机扫描二维码。',
      action: 'scanner',
      params: {},
    },
    {
      title: '语音转文本',
      description: '执行时会弹出原生界面，录音完毕后，返回文本信息。',
      action: 'voiceToText',
      params: {},
    },
    {
      title: '复制文本',
      description: '把文本内容复制到粘贴板中。',
      action: 'copyText',
      params: {
        text: 'open.workplus.io',
      },
    },
    {
      title: '打电话',
      description: '打电话',
      action: 'tel',
      params: {
        number: '10086',
      },
    },
    {
      title: '震动',
      description: '震动',
      action: 'vibrate',
      params: {},
    },
    {
      title: '条形码生成',
      description: '条形码生成',
      action: 'generateBarcode',
      params: {
        content: 'www.baidu.com', // 填-条形码内容
        width: 500, // 选填-条形码宽度
        height: 125, // 选填-条形码高度
      },
    },
    {
      title: '二维码生成',
      description: '二维码生成',
      action: 'generateQrcode',
      params: {
        content: '二维码内容', // 必填-二维码内容
        width: 500, // 选填-二维码宽度
        height: 125, // 选填-二维码高度
      },
    },
  ],
};
