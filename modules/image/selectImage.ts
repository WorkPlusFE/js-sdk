import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { PhotoInfo } from '../types/image';

export type SelectImageOptions = ExecOptions<PhotoInfo, void>;

/**
 * 调起相册，选择图片（单张）
 * @description 调用图片相册，选择图片并压缩返回
 * @param {SelectImageOptions} [options]
 * @module image
 * @returns 图片信息
 */
function selectImage(options?: SelectImageOptions): Promise<PhotoInfo> {
  return core.exec<[], PhotoInfo, void>(
    WORKPLUS_IMAGE,
    'selectImage',
    [],
    options?.success,
    options?.fail,
    false,
  );
}

export default selectImage;
