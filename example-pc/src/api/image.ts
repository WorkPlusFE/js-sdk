/** 图片 */

export default {
  title: '图像',
  module: 'image',
  active: false,
  apis: [
    {
      title: '图片预览',
      description: '传入图片地址进行图片预览，支持传入 position 表示从第几张开始预览。',
      action: 'showImages',
      params: {
        urls: [
          'https://open.workplus.io/static/pics/j-2.jpeg',
          'https://open.workplus.io/static/pics/j-1.jpg',
          'https://open.workplus.io/static/pics/j-3.jpeg',
        ],
        position: 0,
      },
    },
  ],
};
