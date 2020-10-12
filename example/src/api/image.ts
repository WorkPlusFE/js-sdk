/** 图片 */

export default {
  title: '图像',
  module: 'image',
  active: false,
  apis: [
    {
      title: '拍照',
      description:
        '根据传入参数，决定是否对拍照后照片进行裁剪编辑, 同时会将图片上传到媒体中心并返回 mediaId。',
      action: 'takePicture',
      params: {
        editable: true,
      },
    },
    {
      title: '选择照片',
      description:
        '调用手机相册，支持图片多选及单选，支持编辑剪裁(仅限于单选)，并且支持图片复选，选择完后会自动上传到媒体中心并返回相应的 mediaId。',
      action: 'chooseImages',
      params: {
        multiple: true,
        fileLimit: {
          maxSelectCount: 12,
          singleSelectSize: -1,
          totalSelectSize: -1,
        },
      },
    },
    {
      title: '清除缓存',
      description: '拍照或选择照片后都会生成压缩图片，可调用该方法进行清除。',
      action: 'cleanCompressImage',
      params: {},
    },
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
    {
      title: '图片保存',
      description: '传入图片地址，保存到手机本地。',
      action: 'saveImages',
      params: {},
    },
    {
      title: '长按图片弹出框',
      description: '弹出框包括"识别二维码", "保存图片"等选项',
      action: 'actionForLongPressImage',
      params: {
        imageData: '',
      },
    },
    {
      title: '转 Base64',
      description: '转 Base64。',
      action: 'toBase64',
      params: {},
    },
    {
      title: '图片添加水印',
      description: '调起手机相册进行拍照，生成水印图片并返回。（水印在左下角）',
      action: 'takePhotoAndAddWaterMark',
      params: {},
    },
  ],
};
