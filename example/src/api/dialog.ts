/** 图片 */

export default {
  title: '弹框',
  module: 'dialog',
  active: false,
  apis: [
    {
      title: '确认框',
      description: '弹出原生的确认框，可以通过控制按钮实现 Alert 和 Confirm 两种形态的弹出框。',
      action: 'showModal',
      params: {
        title: '标题',
        content: '内容',
        show_cancel: true,
        cancel_text: '取消',
        confirm_text: '确认',
      },
    },
    {
      title: 'ActionSheet',
      description: '从底部弹出原生的 ActionSheet，可以自定义各按钮的文本，但”取消“按钮是固定的。',
      action: 'showActionSheet',
      params: {
        item_list: ['选项A', '选项B', '选项C'],
      },
    },
    {
      title: '轻提示',
      description: '弹出原生的轻提示弹框 Toast，可以自定义文本及显示时长，默认3秒后隐藏。',
      action: 'showToast',
      params: {
        title: '这是一个toast',
        duration: 5000, // 毫秒数
      },
    },
    {
      title: '消息通知',
      description: '弹出原生的消息通知',
      action: 'popNotification',
      params: {
        type: 'default', // 选填-通知栏默认的样式
        title: '这是一个通知标题', // 必填
        text: '这是一个通知内容', // 必填,
      },
    },
    {
      title: 'Loading',
      description: '弹出原生的 Loading，可以添加文本，但需要手动关闭。(例子3秒后自动关闭)',
      action: 'showLoading',
      params: {
        title: '加载中...',
        block: true,
      },
    },
  ],
};
