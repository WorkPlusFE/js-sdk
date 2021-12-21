import scanner from './scanner';
import voiceToText from './voiceToText';
import copyText from './copyText';
import tel from './tel';
import vibrate from './vibrate';
import generateBarcode from './generateBarcode';
import generateQrcode from './generateQrcode';
declare const _default: {
    /** 扫描二维码 */
    scanner: typeof scanner;
    /** 语音转文本 */
    voiceToText: typeof voiceToText;
    /** 复制文本 */
    copyText: typeof copyText;
    /** 打电话 */
    tel: typeof tel;
    /** 震动 */
    vibrate: typeof vibrate;
    /** 生成条形码 */
    generateBarcode: typeof generateBarcode;
    /** 生成二维码 */
    generateQrcode: typeof generateQrcode;
};
export default _default;
