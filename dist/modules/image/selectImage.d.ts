import { TakePhoto, ImageOptions } from '../types/image';
/**
 * 选择图片（单张）
 * @description 调用图片相册，选择图片并压缩返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
declare function selectImage(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
export default selectImage;
