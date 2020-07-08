/** 图片 */

export default {
  title: '图像',
  module: 'image',
  active: false,
  icon: 'photo-o',
  apis: [
    {
      title: '拍照返回',
      description: '拍照，压缩图片后直接返回图片',
      action: 'takePhoto',
      params: {},
    },
    {
      title: '拍照返回并且可编辑',
      description: '拍照，截图返回',
      action: 'takePhotoWithEdit',
      params: {},
    },
    {
      title: '选择图片（单张）',
      description: '调用图片相册，选择图片并压缩返回',
      action: 'selectImage',
      params: {},
    },
    {
      title: '选择图片并截图返回（单张）',
      description: '调用图片相册，选择图片并截取返回',
      action: 'selectImageWithEdit',
      params: {},
    },
    {
      title: '选择多张图片',
      description: '调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输',
      action: 'selectImages',
      params: {},
    },
    {
      title: '清除压缩后的图片',
      description: '拍照或选择照片后都会生成压缩图片，调用这个方法去清除',
      action: 'cleanCompressImage',
      params: {},
    },
    {
      title: '批量预览图片',
      description: '传输图片地址，预览图片',
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
      title: '保存图片',
      description: '传输图片地址，保存图片',
      action: 'saveImages',
      params: {
        url: 'https://workplus.io/images/aboutme03.png',
      },
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
      title: '拍照返回接口',
      description:
        '新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId',
      action: 'takePicture',
      params: {
        editable: true,
      },
    },
    {
      title: '选择图片接口',
      description:
        '调用图片相册，根据用户参数决定是否选择多张图片或单张图片，支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,选择完后会进行后台上传，返回值中带有上传后的mediaId',
      action: 'chooseImages',
      params: {
        multiple: true,
        imageKeys: [''],
        editable: true,
        file_limit: {
          max_select_count: 12,
          single_select_size: -1,
          total_select_size: -1,
        },
      },
    },
    {
      title: '图片添加水印接口',
      description: '拍照，生成水印图片返回',
      action: 'takePhotoAndAddWaterMark',
      params: {
        content: 'WorkPlus',
        font_size: '14',
        color: '#FF5858',
        mark_disable: false, // 屏蔽水印，false:不屏蔽。true：屏蔽
        time_enable: true, // 水印添加时间：false：不添加。true：添加
        location_enable: true, //水印添加位置：false：不添加。true：添加
      },
    },
  ],
};
