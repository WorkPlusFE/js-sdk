// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { EmailOption, WriteEmailParams } from '../types/email';
import { WORKPLUS_EMAIL } from '../constants';

export default function writeEmail(options?: EmailOption<WriteEmailParams, void>): Promise<void> {
  return core.exec<WriteEmailParams, void, unknown>(
    WORKPLUS_EMAIL,
    'writeEmail',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
