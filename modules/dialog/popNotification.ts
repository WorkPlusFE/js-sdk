import * as core from '../core';
import { WORKPLUS_NOTIFICATION } from '../constants';
import { ExecOptions } from '../types/core';
import { PopNotificationParams, PopNotificationRes } from '../types/dialog';

export type Options = PopNotificationParams & ExecOptions<PopNotificationRes, void>;

/**
 * @description 消息通知
 * @param {Options}
 * @module dialog
 * @returns {PopNotificationRes}
 */
export function popNotification(options: Options): Promise<PopNotificationRes> {
  return core.exec<PopNotificationParams, PopNotificationRes, void>(
    WORKPLUS_NOTIFICATION,
    'pop',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
