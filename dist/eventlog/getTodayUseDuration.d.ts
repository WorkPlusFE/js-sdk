import { EventlogOptions, TodayUseDurationRes } from '../types/eventlog';
/**
 * 获取当前登陆用户今天在线时长
 * @param {EventlogOptions<[], TodayUseDurationRes>} [options]
 * @returns {Promise<TodayUseDurationRes>}
 */
export default function getTodayUseDuration(options?: EventlogOptions<[], TodayUseDurationRes>): Promise<TodayUseDurationRes>;
