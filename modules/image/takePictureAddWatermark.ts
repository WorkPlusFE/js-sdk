import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageOptions, WaterMark } from '../types/image';

/**
 * 图片添加水印接口(Workplus 3.6.0版本以上使用)
 * @description 拍照，生成水印图片返回
 * @param {ImageOptions<[WaterMark], void>} options
 * @returns {Promise<void>}
 */
function takePictureAddWatermark(options: ImageOptions<[WaterMark], void>): Promise<void> {
  return core.exec<WaterMark, void, void>(
    WORKPLUS_IMAGE,
    'takePictureAddWatermark',
    options.data,
    options?.success,
    options?.fail,
  );
}

export default takePictureAddWatermark;
