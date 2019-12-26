import { ImageOptions } from '../types/image';
/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
 * @param {ImageOptions<[], void>} [options]
 * @returns {Promise<void>}
 */
declare function cleanCompressImage(options?: ImageOptions<[], void>): Promise<void>;
export default cleanCompressImage;
