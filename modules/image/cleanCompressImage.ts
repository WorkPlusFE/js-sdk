import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageOptions } from '../types/image';

/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
 * @param {ImageOptions<[], void>} [options]
 * @returns {Promise<void>}
 */
function cleanCompressImage(options?: ImageOptions<[], void>): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_IMAGE,
    'cleanCompressImage',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export default cleanCompressImage;
