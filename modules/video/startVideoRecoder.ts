import * as core from '../core';
import { WORKPLUS_AUDIO_AND_VIDEO } from '../constants';
import { ExecOptions } from '../types/core';
import { StartVideoRecoderRes, StartVideoRecoderParams } from '../types/video';

export type Options = StartVideoRecoderParams & ExecOptions<StartVideoRecoderRes, void>;

/**
 * @description 视频录制
 * @param {Options} options
 * @module video
 * @returns {voiceRecordRes}
 */
export default function startVideoRecoder(options: Options): Promise<StartVideoRecoderRes> {
  const { success, fail, ...args } = options;
  return core.exec<StartVideoRecoderParams, StartVideoRecoderRes, void>(
    WORKPLUS_AUDIO_AND_VIDEO,
    'startVideoRecoder',
    [args],
    success,
    fail,
    false,
  );
}
