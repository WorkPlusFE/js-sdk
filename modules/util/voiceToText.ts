import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { VoiceToTextRes } from '../types/webview';

export type VoiceToTextOptions = ExecOptions<VoiceToTextRes, void>;

/**
 * 语音转文本
 * @description 语音转文本
 * @param {VoiceToTextOptions} [options]
 * @module webview
 * @returns {Promise<VoiceToTextRes>}
 */
function voiceToText(options?: VoiceToTextOptions): Promise<VoiceToTextRes> {
  return core.exec<void, VoiceToTextRes, void>(
    WORKPLUS_WEBVIEW,
    'voiceToText',
    [],
    options?.success,
    options?.fail,
    false,
  );
}

export default voiceToText;
