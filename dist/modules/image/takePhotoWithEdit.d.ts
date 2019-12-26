import { TakePhoto, ImageOptions } from '../types/image';
/**
 * 拍照返回并且可编辑
 * @description 拍照，截图返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
declare function takePhotoWithEdit(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
export default takePhotoWithEdit;
