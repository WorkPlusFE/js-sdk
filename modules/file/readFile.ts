import * as core from '../core';
import { WORKPLUS_FILE } from "../constants";
import { FileOptions, FilePathParams } from '../types/file';

/**
 * 本地打开文件
 * @description 原生打开文件(pdf, excel, word, ppt 等)
 * @param {FileOptions<FilePathParams[], void>} [options]
 * @returns {Promise<void>}
 */
export default function readFile(options?: FileOptions<FilePathParams[], void>): Promise<void> {
  return core.exec<FilePathParams, void, unknown>(
    WORKPLUS_FILE,
    'readFile',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
