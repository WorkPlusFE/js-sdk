import { NotResOptions } from '../types/core';
/**
 * 打开邮箱
 * @description 跳转到我的邮箱，未登陆就跳转到登陆页
 * @param {NotResOptions} [options]
 * @module email
 * @returns 无
 */
declare function openEmail(options?: NotResOptions): Promise<void>;
export default openEmail;
