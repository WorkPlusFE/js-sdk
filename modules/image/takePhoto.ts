import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { PhotoInfo, PhotoInfoOptions } from '../types/image';

/**
 * 调起摄像头拍照
 * @description 调起摄像头拍照后，返回图片
 * @param {PhotoInfoOptions} [options] cordova 传参
 * @module image
 * @returns 图片信息
 */
function takePhoto(options?: PhotoInfoOptions): Promise<PhotoInfo> {
  return core.exec<[], PhotoInfo, never>(
    WORKPLUS_IMAGE,
    'takePhoto',
    [],
    options?.success,
    options?.fail,
  );
}

export default takePhoto;
