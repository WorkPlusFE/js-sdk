import takePicture from './takePicture';
import takePhotoAndAddWaterMark from './takePhotoAndAddWaterMark';
import saveImages from './saveImages';
import showImages from './showImages';
import chooseImages from './chooseImages';
import actionForLongPressImage from './actionForLongPressImage';
import cleanCompressImage from './cleanCompressImage';
import toBase64 from './toBase64';
declare const _default: {
    /** 拍照返回接口 */
    takePicture: typeof takePicture;
    /** 图片添加水印接口 */
    takePhotoAndAddWaterMark: typeof takePhotoAndAddWaterMark;
    /** 传输图片地址，保存图片 */
    saveImages: typeof saveImages;
    /** 批量预览图片 */
    showImages: typeof showImages;
    /** 新增选择图片接口 */
    chooseImages: typeof chooseImages;
    /** 长按图片弹出框 */
    actionForLongPressImage: typeof actionForLongPressImage;
    /** 清除压缩后的图片 */
    cleanCompressImage: typeof cleanCompressImage;
    /** 图片转 base64 */
    toBase64: typeof toBase64;
};
export default _default;
