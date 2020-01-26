import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { PhotoInfoAndMediaId, ChooseImages } from '../types/image';

export type ChooseImagesOptions = ChooseImages & ExecOptions<PhotoInfoAndMediaId[], void>;

/**
 * 调用图片相册，选择图片
 * @description 调用图片相册，根据用户参数决定是否选择多张图片或单张图片，
 * 支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,
 * 选择完后会进行后台上传，返回值中带有上传后的mediaId
 * @param {ChooseImagesOptions>} options
 * @module image
 * @version 3.1.3版本以上
 * @returns 带有mediaId的图片信息
 */
function chooseImages(options: ChooseImagesOptions): Promise<PhotoInfoAndMediaId[]> {
  const { success, fail, ...data } = options;
  return core.exec<ChooseImages, PhotoInfoAndMediaId[], void>(
    WORKPLUS_IMAGE,
    'chooseImages',
    [data],
    success,
    fail,
    false,
  );
}

export default chooseImages;
