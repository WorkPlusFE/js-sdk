import { NotResOptions } from '../types/core';
/**
 * 关闭自动签到
 * @description 仅适用于移动考勤关闭外勤，调用此接口，关闭的组织为当前用户选择的组织
 * @param {NotResOptions} [options]
 * @module location
 * @returns 无
 */
export default function closeSignIn(options?: NotResOptions): Promise<void>;
