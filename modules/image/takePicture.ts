import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { PhotoInfoAndMediaId } from '../types/image';
import { ExecOptions } from '../types/core';

export interface PictureOptions extends ExecOptions<PhotoInfoAndMediaId, never> {
  /** 返回是否进行裁剪: true 裁剪 false 不裁剪 */
  editable: boolean;
}

/**
 * 拍照返回，返回mediaId
 * @description 拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {PictureOptions} options
 * @returns {Promise<PhotoInfoAndMediaId>}
 * @version 3.1.3以上版本支持
 */
function takePicture(options: PictureOptions): Promise<PhotoInfoAndMediaId> {
  const { success, fail, ...data } = options;
  return core.exec<PictureOptions, PhotoInfoAndMediaId, never>(
    WORKPLUS_IMAGE,
    'takePicture',
    [data],
    success,
    fail,
  );
}

export default takePicture;
