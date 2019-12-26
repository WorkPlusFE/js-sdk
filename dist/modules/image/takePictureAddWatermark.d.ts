import { ImageOptions, WaterMark } from '../types/image';
/**
 * 图片添加水印接口(Workplus 3.6.0版本以上使用)
 * @description 拍照，生成水印图片返回
 * @param {ImageOptions<[WaterMark], void>} options
 * @returns {Promise<void>}
 */
declare function takePictureAddWatermark(options: ImageOptions<[WaterMark], void>): Promise<void>;
export default takePictureAddWatermark;
