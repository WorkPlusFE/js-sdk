import { ImageOptions, ImageDataItem } from '../types/image';
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageOptions<ImageDataItem[], any>} [options]
 * @returns {Promise<void>}
 */
declare function actionForLongPressImage(options: ImageOptions<ImageDataItem[], void>): Promise<void>;
export default actionForLongPressImage;
