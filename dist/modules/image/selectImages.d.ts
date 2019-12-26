import { TakePhoto, ImageOptions } from '../types/image';
/**
 * 选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {ImageOptions<string[], TakePhoto[]>} options
 * @returns {Promise<TakePhoto[]>}
 */
declare function selectImages(options: ImageOptions<string[], TakePhoto[]>): Promise<TakePhoto[]>;
export default selectImages;
