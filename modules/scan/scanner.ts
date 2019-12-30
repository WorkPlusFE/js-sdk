// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { ScanOption, ScannerParams } from '../types/scan';
import { WORKPLUS_SCAN } from '../constants';

export default function scanner(options?: ScanOption<ScannerParams, void>): Promise<void> {
  return core.exec<ScannerParams, void, unknown>(
    WORKPLUS_SCAN,
    'scanner',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
