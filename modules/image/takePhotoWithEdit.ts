import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { PhotoInfo } from '../types/image';
import { ExecOptions } from '../types/core';

export type TakePhotoOptions = ExecOptions<PhotoInfo, never>;

/**
 * 拍照后返回截图
 * @description 拍照后返回截图
 * @param {TakePhotoOptions} [options]
 * @returns {Promise<PhotoInfo>}
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
