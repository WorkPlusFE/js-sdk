import { ExecOptions } from '../types/core';
import { VoiceToTextRes } from '../types/webview';
export declare type VoiceToTextOptions = ExecOptions<VoiceToTextRes, void>;
/**
 * 语音转文本
 * @description 语音转文本
 * @param {VoiceToTextOptions} [options]
 * @module webview
 * @returns {Promise<VoiceToTextRes>}
 */
declare function voiceToText(options?: VoiceToTextOptions): Promise<VoiceToTextRes>;
export default voiceToText;
