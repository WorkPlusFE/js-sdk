import * as core from '../core';
import { WORKPLUS_EVENTLOG } from '../constants';
import { EventlogOptions, TodayUseDurationRes } from "../types/eventlog";

export default function getTodayUseDuration(options?: EventlogOptions<[], TodayUseDurationRes>):Promise<TodayUseDurationRes> {
  return core.exec<[], TodayUseDurationRes, unknown>(
    WORKPLUS_EVENTLOG,
    'getTodayUseDuration',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
