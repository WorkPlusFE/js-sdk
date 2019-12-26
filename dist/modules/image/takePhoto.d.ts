import { TakePhoto, ImageOptions } from '../types/image';
/**
 * 拍照返回
 * @description 拍照，压缩图片后直接返回图片
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
declare function takePhoto(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
export default takePhoto;
