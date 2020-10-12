import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { FileOptions, FilePathParams, FileExistRes } from '../types/file';

export type FileExistOptions = FilePathParams & FileOptions<FileExistRes>;

/**
 * 判断文件是否存在
 * @description 判断指定路径的文件是否存在
 * @param {FileExistOptions} [options]
 * @returns {Promise<FileExistRes>}
 */
export default function isFileExist(options: FileExistOptions): Promise<FileExistRes> {
  const { success, fail, ...args } = options;
  return core.exec<FilePathParams, FileExistRes, unknown>(
    WORKPLUS_FILE,
    'isFileExist',
    [args],
    success,
    fail,
    false,
  );
}
