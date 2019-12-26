import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { TakePhoto, ImageOptions } from '../types/image';

/**
 * 拍照返回并且可编辑
 * @description 拍照，截图返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
function takePhotoWithEdit(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto> {
  return core.exec<[], TakePhoto, void>(
    WORKPLUS_IMAGE,
    'takePhotoWithEdit',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export default takePhotoWithEdit;
