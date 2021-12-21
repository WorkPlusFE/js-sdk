import { ExecOptions } from '../types/core';
import { StartVideoRecoderRes, StartVideoRecoderParams } from '../types/video';
export declare type Options = StartVideoRecoderParams & ExecOptions<StartVideoRecoderRes, void>;
/**
 * @description 视频录制
 * @param {Options} options
 * @module video
 * @returns {voiceRecordRes}
 */
export default function startVideoRecoder(options: Options): Promise<StartVideoRecoderRes>;
