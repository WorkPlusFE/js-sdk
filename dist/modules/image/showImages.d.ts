import { ImageOptions, ShowImagesItem } from '../types/image';
/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ImageOptions<ShowImagesItem[], void>} options
 * @returns {Promise<void>}
 */
declare function showImages(options: ImageOptions<ShowImagesItem[], void>): Promise<void>;
export default showImages;
