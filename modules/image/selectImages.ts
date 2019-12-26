import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { TakePhoto, ImageOptions, ImageKeys } from '../types/image';

/**
 * 选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {ImageOptions<string[], TakePhoto[]>} options
 * @returns {Promise<TakePhoto[]>}
 */
function selectImages(options: ImageOptions<string[], TakePhoto[]>): Promise<TakePhoto[]> {
  return core.exec<ImageKeys, TakePhoto[], never>(
    WORKPLUS_IMAGE,
    'selectImages',
    [{ imageKeys: options.data }],
    options?.success,
    options?.fail,
  );
}

export default selectImages;
