import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { PhotoInfo } from '../types/image';
import { ExecOptions } from '../types/core';

export type TakePhotoOptions = ExecOptions<PhotoInfo, never>;

/**
 * 拍照
 * @description 拍照后返回压缩图片
 * @param {TakePhotoOptions} [options] cordova 传参
 * @returns 图片对象
 */
function takePhoto(options?: TakePhotoOptions): Promise<PhotoInfo> {
  return core.exec<[], PhotoInfo, never>(
    WORKPLUS_IMAGE,
    'takePhoto',
    [],
    options?.success,
    options?.fail,
  );
}

export default takePhoto;
