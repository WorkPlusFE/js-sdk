// 常用

export default {
  title: '常用方法',
  module: 'util',
  active: false,
  icon: 'photo-o',
  apis: [{
    title: '扫描二维码',
    description: '',
    action: 'scanner',
    params: {},
  }, {
    title: '语音转文本',
    description: '执行时会弹出原生界面，录音完毕后，返回文本信息。',
    action: 'voiceToText',
    params: {},
  }, {
    title: '复制文本',
    description: '把文本内容复制到粘贴板中。',
    action: 'copyText',
    params: {
      text: 'open.workplus.io'
    },
  }],
};
