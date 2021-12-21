export interface VoiceRecordRes {
    /** 调用返回信息 */
    message: number;
    /** 如果当前设备计步器不可用，返回-10001 */
    code?: number;
    /** 录音信息 */
    info: {
        voice_path: string;
    };
}
export interface TranslateAudiodRes {
    /** 调用返回信息 */
    message: number;
    /** 如果当前设备计步器不可用，返回-10001 */
    code?: number;
    /** 转换数据 */
    info: {
        video_path: string;
    };
}
export interface TranslateAudiodParams {
    /** 转换地址 */
    file_path: string;
}
