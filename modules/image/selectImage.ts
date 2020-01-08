import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { PhotoInfo } from '../types/image';

export type SelectImageOptions = ExecOptions<PhotoInfo, never>;

/**
 * 选择图片（单张）
 * @description 调用图片相册，选择图片并压缩返回
 * @param {SelectImageOptions} [options]
 * @returns {Promise<PhotoInfo>}
 */
function selectImage(options?: SelectImageOptions): Promise<PhotoInfo> {
  return core.exec<[], PhotoInfo, never>(
    WORKPLUS_IMAGE,
    'selectImage',
    [],
    options?.success,
    options?.fail,
  );
}

export default selectImage;
