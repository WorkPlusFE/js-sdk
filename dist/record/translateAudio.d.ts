import { ExecOptions } from '../types/core';
import { TranslateAudiodRes, TranslateAudiodParams } from '../types/record';
export declare type Options = TranslateAudiodParams & ExecOptions<TranslateAudiodRes, void>;
/**
 * @description 音频转mp3格式
 * @param {Options} options
 * @module record
 * @returns {voiceRecordRes}
 */
export default function translateAudio(options: Options): Promise<TranslateAudiodRes>;
