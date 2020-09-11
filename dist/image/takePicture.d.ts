import { PhotoInfoAndMediaId } from '../types/image';
import { ExecOptions } from '../types/core';
export interface PictureOptions extends ExecOptions<PhotoInfoAndMediaId, never> {
    /** 返回是否进行裁剪: true 裁剪 false 不裁剪 */
    editable: boolean;
}
/**
 * 调起拍照，返回mediaId的图片
 * @description 拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {PictureOptions} options
 * @module image
 * @version 3.1.3以上版本支持
 * @returns 带有mediaId的图片信息
 */
declare function takePicture(options: PictureOptions): Promise<PhotoInfoAndMediaId>;
export default takePicture;
