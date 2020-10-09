import { ImageDataItem } from '../types/image';
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageDataItem} options
 * @module image
 * @returns 无
 */
declare function actionForLongPressImage(options: ImageDataItem): void;
export default actionForLongPressImage;
