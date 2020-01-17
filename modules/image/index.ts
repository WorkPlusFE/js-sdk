import takePhoto from './takePhoto';
import takePhotoWithEdit from './takePhotoWithEdit';
import takePicture from './takePicture';
import takePhotoAndAddWaterMark from './takePhotoAndAddWaterMark';
import selectImage from './selectImage';
import selectImages from './selectImages';
import selectImageWithEdit from './selectImageWithEdit';
import saveImages from './saveImages';
import showImages from './showImages';
import chooseImages from './chooseImages';
import actionForLongPressImage from './actionForLongPressImage';
import cleanCompressImage from './cleanCompressImage';

export default {
  /** 拍照返回 */
  takePhoto,
  /** 拍照返回并且可编辑 */
  takePhotoWithEdit,
  /** 拍照返回接口 */
  takePicture,
  /** 图片添加水印接口 */
  takePhotoAndAddWaterMark,
  /** 选择图片（单张） */
  selectImage,
  /** 选择图片（多张） */
  selectImages,
  /** 选择图片并截图返回（单张） */
  selectImageWithEdit,
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
};
