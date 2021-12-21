import { ExecOptions } from '../types/core';
import { PopNotificationParams, PopNotificationRes } from '../types/dialog';
export declare type Options = PopNotificationParams & ExecOptions<PopNotificationRes, void>;
/**
 * @description 消息通知
 * @param {Options}
 * @module dialog
 * @returns {PopNotificationRes}
 */
export declare function popNotification(options: Options): Promise<PopNotificationRes>;
