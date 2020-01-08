import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { PhotoInfo, ImageKeys } from '../types/image';

export interface SelectImagesOptions extends ImageKeys, ExecOptions<PhotoInfo[], never> {}

/**
 * 选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {SelectImagesOptions} options
 * @returns {Promise<PhotoInfo[]>}
 */
function selectImages(options: SelectImagesOptions): Promise<PhotoInfo[]> {
  const { success, fail, ...data } = options;
  return core.exec<ImageKeys, PhotoInfo[], never>(
    WORKPLUS_IMAGE,
    'selectImages',
    [data],
    options?.success,
    options?.fail,
  );
}

export default selectImages;
