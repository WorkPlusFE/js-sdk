import { ExecSyncOptions } from '../types/core';
import { ImageDataItem } from '../types/image';
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ExecSyncOptions<ImageDataItem[]>} options
 * @returns {void}
 */
declare function actionForLongPressImage(options: ExecSyncOptions<ImageDataItem[]>): void;
export default actionForLongPressImage;
