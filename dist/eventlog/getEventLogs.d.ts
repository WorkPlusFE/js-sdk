import { EventlogOptions, EventLogsParams, EventLogsRes } from '../types/eventlog';
/**
 * 获取事件日志数据
 * @description 根据传参条件, 返回对应的事件日志数据
 * @param {EventLogsParams & EventlogOptions<EventLogsRes>} [options]
 * @returns {Promise<EventLogsRes>}
 */
export default function getEventLogs(options: EventLogsParams & EventlogOptions<EventLogsRes>): Promise<EventLogsRes>;
