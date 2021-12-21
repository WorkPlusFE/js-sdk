import * as core from '../core';
import { WORKPLUS_AUDIO_AND_VIDEO } from '../constants';
import { ExecOptions } from '../types/core';
import { VoiceRecordRes } from '../types/record';

export type Options = ExecOptions<VoiceRecordRes, void>;

/**
 * @description 语音录制
 * @param {Options} options
 * @module record
 * @returns {voiceRecordRes}
 */
export default function voiceRecord(options: Options): Promise<VoiceRecordRes> {
  return core.exec<[], VoiceRecordRes, void>(
    WORKPLUS_AUDIO_AND_VIDEO,
    'voiceRecord',
    [],
    options?.success,
    options?.fail,
    false,
  );
}
