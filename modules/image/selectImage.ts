import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { TakePhoto, ImageOptions } from '../types/image';

/**
 * 选择图片（单张）
 * @description 调用图片相册，选择图片并压缩返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
function selectImage(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto> {
  return core.exec<[], TakePhoto, never>(
    WORKPLUS_IMAGE,
    'selectImage',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export default selectImage;
