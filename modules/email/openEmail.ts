// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { EmailOption } from '../types/email';
import { WORKPLUS_EMAIL } from '../constants';

export default function openEmail(options?: EmailOption<void, void>): Promise<void> {
  return core.exec<void, void, unknown>(
    WORKPLUS_EMAIL,
    'openEmail',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
