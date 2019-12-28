export interface EventlogOptions<D, S> {
  /** 传参 */
  data: D;
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: unknown) => void;
}

export interface TodayUseDurationRes {
  /** 毫秒单位, 当天使用时长 */
  duration: number;
}

export type EventLogType = 'LOCAL_EMAIL_LOGIN_CLICK' | 'LOCAL_EMAIL_WRITE';

export interface EventLogsParams {
  /** 日志类型 */
  type: EventLogType;
  /** 时间戳，不传或小于0时, 则去除对应的条件 */
  from: number;
  /** 时间戳 */
  to: number;
}

interface LogItem {
  begin: number;
  build_no: string;
  bundle: string;
  client_domain_id: string;
  client_id: string;
  client_name: string;
  type: string;
}

export interface EventLogsRes {
  /** 日志集合 */
  logs: LogItem[];
}
