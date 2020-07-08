import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';

export type cleanImagesOptions = ExecOptions<void, void>;

/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，可调用该方法进行清除
 * @param {cleanImagesOptions} options
 * @module image
 * @returns 无
 */
function cleanCompressImage(options?: cleanImagesOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_IMAGE,
    'cleanCompressImage',
    [],
    options?.success,
    options?.fail,
    false,
  );
}

export default cleanCompressImage;
