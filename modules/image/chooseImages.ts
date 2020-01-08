import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageOptions, PhotoInfoAndMediaId, ChooseImages } from '../types/image';

/**
 * 新增选择图片接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
 * @description 调用图片相册，根据用户参数决定是否选择多张图片或单张图片，
 * 支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,
 * 选择完后会进行后台上传，返回值中带有上传后的mediaId
 * @param {ImageOptions<[ChooseImages], PhotoInfoAndMediaId[]>} options
 * @returns {Promise<PhotoInfoAndMediaId[]>}
 */
function chooseImages(
  options: ImageOptions<[ChooseImages], PhotoInfoAndMediaId[]>,
): Promise<PhotoInfoAndMediaId[]> {
  return core.exec<ChooseImages, PhotoInfoAndMediaId[], void>(
    WORKPLUS_IMAGE,
    'chooseImages',
    options.data,
    options?.success,
    options?.fail,
  );
}

export default chooseImages;
