import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { PhotoInfo } from '../types/image';

export type ImageOptions = ExecOptions<PhotoInfo, never>;

/**
 * 调起相册，选择图片并截图返回（单张）
 * @description 调用图片相册，选择图片并截取返回
 * @param {ImageOptions} [options]
 * @module image
 * @type 异步
 * @returns 图片信息
 */
function selectImageWithEdit(options?: ImageOptions): Promise<PhotoInfo> {
  return core.exec<[], PhotoInfo, never>(
    WORKPLUS_IMAGE,
    'selectImageWithEdit',
    [],
    options?.success,
    options?.fail,
  );
}

export default selectImageWithEdit;
