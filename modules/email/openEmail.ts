import * as core from '../core';
import { WORKPLUS_EMAIL } from '../constants';
import { NotResOptions } from '../types/core';

/**
 * 打开邮箱
 * @description 跳转到我的邮箱，未登陆就跳转到登陆页
 * @param {NotResOptions} [options]
 * @module email
 * @returns 无
 */
function openEmail(options?: NotResOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_EMAIL,
    'openEmail',
    [],
    options?.success,
    options?.fail,
  );
}

export default openEmail;
