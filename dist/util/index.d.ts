import scanner from './scanner';
import voiceToText from './voiceToText';
import copyText from './copyText';
declare const _default: {
    /** 扫描二维码 */
    scanner: typeof scanner;
    /** 语音转文本 */
    voiceToText: typeof voiceToText;
    /** 复制文本 */
    copyText: typeof copyText;
};
export default _default;
