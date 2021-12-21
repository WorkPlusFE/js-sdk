import * as core from '../core';
import { WORKPLUS_AUDIO_AND_VIDEO } from '../constants';
import { ExecOptions } from '../types/core';
import { TranslateAudiodRes, TranslateAudiodParams } from '../types/record';

export type Options = TranslateAudiodParams & ExecOptions<TranslateAudiodRes, void>;

/**
 * @description 音频转mp3格式
 * @param {Options} options
 * @module record
 * @returns {voiceRecordRes}
 */
export default function translateAudio(options: Options): Promise<TranslateAudiodRes> {
  return core.exec<TranslateAudiodParams, TranslateAudiodRes, void>(
    WORKPLUS_AUDIO_AND_VIDEO,
    'translateAudio',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
