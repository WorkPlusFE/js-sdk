import takePicture from './takePicture';
import takePhotoAndAddWaterMark from './takePhotoAndAddWaterMark';
import saveImages from './saveImages';
import showImages from './showImages';
import chooseImages from './chooseImages';
import actionForLongPressImage from './actionForLongPressImage';
import cleanCompressImage from './cleanCompressImage';
import toBase64 from './toBase64';

export default {
  /** 拍照返回接口 */
  takePicture,
  /** 图片添加水印接口 */
  takePhotoAndAddWaterMark,
  /** 传输图片地址，保存图片 */
  saveImages,
  /** 批量预览图片 */
  showImages,
  /** 新增选择图片接口 */
  chooseImages,
  /** 长按图片弹出框 */
  actionForLongPressImage,
  /** 清除压缩后的图片 */
  cleanCompressImage,
  /** 图片转 base64 */
  toBase64,
};
