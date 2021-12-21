export interface StartVideoRecoderRes {
    /** 调用返回信息 */
    message: number;
    /** 如果当前设备计步器不可用，返回-10001 */
    code?: number;
    /** 录制信息 */
    info: {
        video_path: string;
        video_duration: string;
        video_size: string;
        video_thumbnail: string;
    };
}
export declare type Quality = '0' | '1' | '2';
export interface StartVideoRecoderParams {
    duration: number;
    quality: Quality;
    sync_system_album: boolean;
    front: boolean;
}
export interface PlayVideoRes {
    [key: string]: unknown;
}
export interface PlayVideoParams {
    url: string;
}
