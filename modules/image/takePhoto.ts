import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { TakePhoto, ImageOptions } from '../types/image';

/**
 * 拍照返回
 * @description 拍照，压缩图片后直接返回图片
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
function takePhoto(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto> {
  return core.exec<[], TakePhoto, never>(
    WORKPLUS_IMAGE,
    'takePhoto',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export default takePhoto;
