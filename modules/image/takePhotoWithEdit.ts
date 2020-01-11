import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { PhotoInfo } from '../types/image';
import { ExecOptions } from '../types/core';

export type TakePhotoOptions = ExecOptions<PhotoInfo, never>;

/**
 * 调起拍照，返回截图
 * @description 拍照后返回截图
 * @param {TakePhotoOptions} [options]
 * @module image
 * @type 异步
 * @returns 图片信息
 */
function takePhotoWithEdit(options?: TakePhotoOptions): Promise<PhotoInfo> {
  return core.exec<[], PhotoInfo, never>(
    WORKPLUS_IMAGE,
    'takePhotoWithEdit',
    [],
    options?.success,
    options?.fail,
  );
}

export default takePhotoWithEdit;
