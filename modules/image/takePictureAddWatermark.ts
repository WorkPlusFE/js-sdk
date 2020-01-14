import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { WaterMark, PhotoInfoAndMediaId } from '../types/image';
import { ExecOptions } from '../types/core';

export interface WaterMarkOptions extends WaterMark, ExecOptions<PhotoInfoAndMediaId, never> {}

/**
 * 调起拍照，并添加水印
 * @description 拍照生成水印图片返回
 * @param {WaterMarkOptions} options
 * @module image
 * @type 异步
 * @returns 带有mediaId的图片信息
 * @version 3.6.0版本以上使用
 */
function takePictureAddWatermark(options: WaterMarkOptions): Promise<PhotoInfoAndMediaId> {
  const { success, fail, ...data } = options;
  return core.exec<WaterMark, PhotoInfoAndMediaId, never>(
    WORKPLUS_IMAGE,
    'takePictureAddWatermark',
    [data],
    success,
    fail,
  );
}

export default takePictureAddWatermark;
