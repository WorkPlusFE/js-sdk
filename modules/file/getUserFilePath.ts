import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { FileOptions, GetUserFilePathParams, FileExistRes } from '../types/file';

export type FileExistOptions = GetUserFilePathParams & FileOptions<unknown>;

/**
 * 获取文件目录路径
 * @description 获取设备的文件存在目录，包括下载文件夹及网盘（如果有）及用户自定义目录。
 * @param {FileExistOptions} [options]
 * @returns {Promise<unknown>}
 */
export default function isFileExist(options: FileExistOptions): Promise<unknown> {
  const { success, fail, ...args } = options;
  return core.exec<GetUserFilePathParams, unknown, unknown>(
    WORKPLUS_FILE,
    'getUserFilePath',
    [args],
    success,
    fail,
  );
}
