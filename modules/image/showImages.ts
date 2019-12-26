import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageOptions, ShowImagesItem } from '../types/image';

/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ImageOptions<ShowImagesItem[], void>} options
 * @returns {Promise<void>}
 */
function showImages(options: ImageOptions<ShowImagesItem[], void>): Promise<void> {
  return core.exec<ShowImagesItem, void, void>(
    WORKPLUS_IMAGE,
    'showImages',
    options.data,
    options?.success,
    options?.fail,
  );
}

export default showImages;
