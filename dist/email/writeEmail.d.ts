import { ExecOptions } from '../types/core';
import { WriteEmailParams } from '../types/email';
export declare type WriteEmailOptions = WriteEmailParams & ExecOptions<void, void>;
/**
 * 写邮件
 * @description 跳转到写邮件的页面
 * @param {WriteEmailOptions} [options]
 * @module email
 * @returns 无
 */
declare function writeEmail(options: WriteEmailOptions): Promise<void>;
export default writeEmail;
