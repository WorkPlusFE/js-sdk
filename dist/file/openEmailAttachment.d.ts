import { FileOptions, OpenEmailAttachment } from '../types/file';
/**
 * 打开邮件附件
 * @description 打开指定路径的文件, 并预览
 * @param {FileOptions<OpenEmailAttachment[], void>} [options]
 * @returns {Promise<void>}
 */
export default function openEmailAttachment(options?: FileOptions<OpenEmailAttachment[], void>): Promise<void>;
