import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { WaterMark, PhotoInfoAndMediaId } from '../types/image';
import { ExecOptions } from '../types/core';

export interface WaterMarkOptions extends WaterMark, ExecOptions<PhotoInfoAndMediaId, never> {}

export interface WaterMarkParams {
  content: string;
  color: string;
  font_size: number | string;
  mark_disable: boolean;
  time_enable: boolean;
  location_enable: boolean;
}

/**
 * 调起拍照，并添加水印
 * @description 拍照生成水印图片返回
 * @param {WaterMarkOptions} options
 * @module image
 * @returns 带有mediaId的图片信息
 * @version 3.6.0版本以上使用
 */
function takePhotoAndAddWaterMark(options: WaterMarkOptions): Promise<PhotoInfoAndMediaId> {
  const { success, fail, ...data } = options;
  const params = {
    content: data.content,
    font_size: data.fontSize,
    color: data.color,
    mark_disable: data.markDisable,
    time_enable: data.timeEnable,
    location_enable: data.locationEnable,
  };

  return core.exec<WaterMarkParams, PhotoInfoAndMediaId, never>(
    WORKPLUS_IMAGE,
    'takePhotoAndAddWaterMark',
    [params],
    success,
    fail,
    false,
  );
}

export default takePhotoAndAddWaterMark;
