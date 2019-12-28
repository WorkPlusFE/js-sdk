import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption } from '../types/auth';

export default function faceBizValid(options?: AuthOption<void, void>): Promise<void> {
  return core.exec<void, void, unknown>(
    WORKPLUS_AUTH,
    'faceBioAuth',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
