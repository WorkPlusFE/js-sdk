import * as core from '../core';
import { WORKPLUS_EVENTLOG } from '../constants';
import { EventlogOptions, EventLogsParams, EventLogsRes } from '../types/eventlog';

/**
 * 获取事件日志数据
 * @description 根据传参条件, 返回对应的事件日志数据
 * @param {EventlogOptions<EventLogsParams[], EventLogsRes>} [options]
 * @returns {Promise<EventLogsRes>}
 */
export default function getEventLogs(
  options?: EventlogOptions<EventLogsParams[], EventLogsRes>,
): Promise<EventLogsRes> {
  return core.exec<EventLogsParams, EventLogsRes, unknown>(
    WORKPLUS_EVENTLOG,
    'getEventLogs',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
