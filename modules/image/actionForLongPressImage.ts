import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { ImageDataItem } from '../types/image';

export interface LongPressOptions extends ImageDataItem, ExecOptions<never, never> {}

/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {LongPressOptions} options
 * @returns {void}
 */
function actionForLongPressImage(options: LongPressOptions): void {
  const { success, fail, ...data } = options;
  return core.execSync<ImageDataItem>(WORKPLUS_IMAGE, 'actionForLongPressImage', [data]);
}

export default actionForLongPressImage;
