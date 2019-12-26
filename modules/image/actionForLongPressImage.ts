import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ImageOptions, ImageDataItem } from '../types/image';

/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageOptions<ImageDataItem[], any>} [options]
 * @returns {Promise<void>}
 */
function actionForLongPressImage(options: ImageOptions<ImageDataItem[], void>): Promise<void> {
  return core.exec<ImageDataItem, void, void>(
    WORKPLUS_IMAGE,
    'actionForLongPressImage',
    options.data,
    options?.success,
    options?.fail,
  );
}

export default actionForLongPressImage;
