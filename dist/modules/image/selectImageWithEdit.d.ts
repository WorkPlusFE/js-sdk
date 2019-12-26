import { TakePhoto, ImageOptions } from '../types/image';
/**
 * 选择图片并截图返回（单张）
 * @description 调用图片相册，选择图片并截取返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
export declare function selectImageWithEdit(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
export default selectImageWithEdit;
