import * as core from '../core';
import { WORKPLUS_EVENTLOG } from '../constants';
import { 
  EventlogOptions, 
  EventLogsParams, 
  EventLogsRes,  
} from "../types/eventlog";

export default function getEventLogs(options?: EventlogOptions<EventLogsParams[], EventLogsRes>):Promise<EventLogsRes> {
  return core.exec<EventLogsParams, EventLogsRes, unknown>(
    WORKPLUS_EVENTLOG,
    'getEventLogs',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
