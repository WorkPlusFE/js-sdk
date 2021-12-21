export interface StartVideoRecoderRes {
  /** 调用返回信息 */
  message: number;
  /** 如果当前设备计步器不可用，返回-10001 */
  code?: number;
  /** 录制信息 */
  info: {
    video_path: string;
    video_duration: string;
    video_size: string; // 返回视频大小，单位是K
    video_thumbnail: string; //首帧图片base64数据
  };
}

export type Quality = '0' | '1' | '2'; // 视频录制清晰度, "0" > 高清; "1" > 一般; "2" > 流畅(默认为一般)

export interface StartVideoRecoderParams {
  duration: number; // 视频录制最大录制时长,单位秒(默认为10秒)
  quality: Quality;
  sync_system_album: boolean; // 控制是否同步到系统相册, 可不填, 默认为false
  front: boolean; // 控制摄像头是否为前置摄像头, 可不填, 默认为false
}

export interface PlayVideoRes {
  [key: string]: unknown;
}

export interface PlayVideoParams {
  url: string;
}
