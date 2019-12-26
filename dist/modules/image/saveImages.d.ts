import { ImageOptions, SaveImageItem } from '../types/image';
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ImageOptions<SaveImageItem[], void>} options
 * @returns {Promise<void>}
 */
declare function saveImages(options: ImageOptions<SaveImageItem[], void>): Promise<void>;
export default saveImages;
