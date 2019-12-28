// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, VoiceToTextRes } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function voiceToText(
  options?: WebviewOption<void, VoiceToTextRes>,
): Promise<VoiceToTextRes> {
  return core.exec<void, VoiceToTextRes, unknown>(
    WORKPLUS_WEBVIEW,
    'voiceToText',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
