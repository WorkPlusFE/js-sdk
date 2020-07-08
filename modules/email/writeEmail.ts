import * as core from '../core';
import { WORKPLUS_EMAIL } from '../constants';
import { ExecOptions } from '../types/core';
import { WriteEmailParams } from '../types/email';

export type WriteEmailOptions = WriteEmailParams & ExecOptions<void, void>;

/**
 * 写邮件
 * @description 跳转到写邮件的页面
 * @param {WriteEmailOptions} [options]
 * @module email
 * @returns 无
 */
function writeEmail(options: WriteEmailOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<WriteEmailParams, void, void>(
    WORKPLUS_EMAIL,
    'writeEmail',
    [params],
    success,
    fail,
    false,
  );
}

export default writeEmail;
