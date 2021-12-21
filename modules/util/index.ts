import scanner from './scanner';
import voiceToText from './voiceToText';
import copyText from './copyText';
import tel from './tel';
import vibrate from './vibrate';
import generateBarcode from './generateBarcode';
import generateQrcode from './generateQrcode';

export default {
  /** 扫描二维码 */
  scanner,
  /** 语音转文本 */
  voiceToText,
  /** 复制文本 */
  copyText,
  /** 打电话 */
  tel,
  /** 震动 */
  vibrate,
  /** 生成条形码 */
  generateBarcode,
  /** 生成二维码 */
  generateQrcode,
};
