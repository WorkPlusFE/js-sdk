import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageOptions, SaveImageItem } from '../types/image';

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ImageOptions<SaveImageItem[], void>} options
 * @returns {Promise<void>}
 */
function saveImages(options: ImageOptions<SaveImageItem[], void>): Promise<void> {
  return core.exec<SaveImageItem, void, void>(
    WORKPLUS_IMAGE,
    'saveImages',
    options.data,
    options?.success,
    options?.fail,
  );
}

export default saveImages;
