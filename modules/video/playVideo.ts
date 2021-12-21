import * as core from '../core';
import { WORKPLUS_AUDIO_AND_VIDEO } from '../constants';
import { ExecOptions } from '../types/core';
import { PlayVideoRes, PlayVideoParams } from '../types/video';

export type Options = PlayVideoParams & ExecOptions<PlayVideoRes, void>;

/**
 * @description 视频录制
 * @param {Options} options
 * @module video
 * @returns {PlayVideoRes}
 */
export default function playVideo(options: Options): Promise<PlayVideoRes> {
  return core.exec<PlayVideoParams, PlayVideoRes, void>(
    WORKPLUS_AUDIO_AND_VIDEO,
    'playVideo',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
