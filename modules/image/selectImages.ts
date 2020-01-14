import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { PhotoInfo, ImageKeys } from '../types/image';

export type SelectImagesOptions = ImageKeys & ExecOptions<PhotoInfo[], void>;

/**
 * 调起相册，选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {SelectImagesOptions} options
 * @module image
 * @type 异步
 * @returns 选择后的图片信息
 */
function selectImages(options: SelectImagesOptions): Promise<PhotoInfo[]> {
  const { success, fail, ...data } = options;
  return core.exec<ImageKeys, PhotoInfo[], void>(
    WORKPLUS_IMAGE,
    'selectImages',
    [data],
    success,
    fail,
  );
}

export default selectImages;
