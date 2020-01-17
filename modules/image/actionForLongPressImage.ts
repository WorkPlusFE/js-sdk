import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageDataItem } from '../types/image';
import { ExecOptions } from '../types/core';

export type LongPressOptions = ImageDataItem & ExecOptions<void, void>;

/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {LongPressOptions} options
 * @module image
 * @returns 无
 */
function actionForLongPressImage(options: LongPressOptions): Promise<void> {
  return core.exec<ImageDataItem, void, void>(WORKPLUS_IMAGE, 'actionForLongPressImage', [options]);
}

export default actionForLongPressImage;
