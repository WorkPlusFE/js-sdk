/** 图片 */

export default {
  title: '图像',
  module: 'image',
  active: false,
  icon: 'photo-o',
  apis: [
    {
      title: '拍照',
      description: '打开手机相机进行拍照，并返回照片地址，包括压缩后的。',
      action: 'takePhoto',
      params: {},
    },
    {
      title: '拍照并编辑',
      description: '拍照后可对图片进行编辑裁剪。',
      action: 'takePhotoWithEdit',
      params: {},
    },
    {
      title: '选择单张图片',
      description: '调用图片相册，选择图片（单张）并压缩返回。',
      action: 'selectImage',
      params: {},
    },
    {
      title: '选择单张图片并截图返回',
      description: '调用图片相册，选择图片并截取返回。',
      action: 'selectImageWithEdit',
      params: {},
    },
    {
      title: '选择多张图片',
      description: '调用图片相册，选择多张图片并压缩返回，并且支持传入已选图片进行复选。',
      action: 'selectImages',
      params: {},
    },
    {
      title: '清除压缩后的图片',
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
          'https://workplus.io/images/aboutme01.png',
          'https://workplus.io/images/aboutme02.png',
          'https://workplus.io/images/aboutme03.png',
        ],
        position: 0,
      },
    },
    {
      title: '[Custom]图片保存',
      description: '传入图片地址，保存到手机本地。',
      action: 'saveImages',
      params: {
        url: 'https://workplus.io/images/aboutme03.png',
      },
    },
    {
      title: '[Custom]长按图片弹出框',
      description: '弹出框包括"识别二维码", "保存图片"等选项',
      action: 'actionForLongPressImage',
      params: {
        imageData: '',
      },
    },
    {
      title: '拍照并自动上传',
      description:
        '根据传入参数，决定是否对拍照后照片进行裁剪编辑, 同时会将图片上传到媒体中心并返回 mediaId。',
      action: 'takePicture',
      params: {
        editable: true,
      },
    },
    {
      title: '选择图片并自动上传',
      description:
        '调用手机相册，支持图片多选及单选，支持编辑剪裁(仅限于单选)，并且支持图片复选，选择完后会自动上传到媒体中心并返回相应的媒体id。',
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
      title: '[Custom]图片添加水印',
      description: '调起手机相册进行拍照，生成水印图片并返回。',
      action: 'takePhotoAndAddWaterMark',
      params: {
        content: 'WorkPlus',
        fontSize: 14,
        color: '#FF5858',
        markDisable: false,
        timeEnable: true,
        locationEsnable: true,
      },
    },
  ],
};
