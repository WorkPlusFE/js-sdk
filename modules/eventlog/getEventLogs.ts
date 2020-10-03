import * as core from '../core';
import { WORKPLUS_EVENTLOG } from '../constants';
import { EventlogOptions, EventLogsParams, EventLogsRes } from '../types/eventlog';

/**
 * 获取事件日志数据
 * @description 根据传参条件, 返回对应的事件日志数据
 * @param {EventLogsParams & EventlogOptions<EventLogsRes>} [options]
 * @returns {Promise<EventLogsRes>}
 */
export default function getEventLogs(
  options: EventLogsParams & EventlogOptions<EventLogsRes>,
): Promise<EventLogsRes> {
  const { success, fail, ...args } = options;
  return core.exec<EventLogsParams, EventLogsRes, unknown>(
    WORKPLUS_EVENTLOG,
    'getEventLogs',
    [args],
    success,
    fail,
  );
}
