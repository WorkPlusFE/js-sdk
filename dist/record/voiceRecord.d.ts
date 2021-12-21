import { ExecOptions } from '../types/core';
import { VoiceRecordRes } from '../types/record';
export declare type Options = ExecOptions<VoiceRecordRes, void>;
/**
 * @description 语音录制
 * @param {Options} options
 * @module record
 * @returns {voiceRecordRes}
 */
export default function voiceRecord(options: Options): Promise<VoiceRecordRes>;
