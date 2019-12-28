import * as core from '../core';
import { WORKPLUS_FILE } from "../constants";
import { FileOptions, OpenEmailAttachment } from '../types/file';

/**
 * 打开邮件附件
 * @description 打开指定路径的文件, 并预览
 * @param {FileOptions<OpenEmailAttachment[], void>} [options]
 * @returns {Promise<void>}
 */
export default function openEmailAttachment(options?: FileOptions<OpenEmailAttachment[], void>): Promise<void> {
  return core.exec<OpenEmailAttachment, void, unknown>(
    WORKPLUS_FILE,
    'openEmailAttachment',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
