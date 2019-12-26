import { ImageOptions, TakePicture, TakePictureArgs } from '../types/image';
/**
 * 新增拍照返回接口(返回带mediaId方式) (Workplus 3.1.3版本以上使用)
 * @description 新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {ImageOptions<[TakePictureArgs], TakePicture>} options
 * @returns {Promise<TakePicture>}
 */
declare function takePicture(options: ImageOptions<[TakePictureArgs], TakePicture>): Promise<TakePicture>;
export default takePicture;
