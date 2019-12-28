import * as core from '../core';
import { WORKPLUS_FILE } from "../constants";
import { FileOptions, SelectFileRes } from '../types/file';

/**
 * 单选文件
 * @description 打开WorkPlus文件选择管理器，选择单个文件返回
 * @param {FileOptions<[], SelectFileRes>} [options]
 * @returns {Promise<SelectFileRes>}
 */
export default function selectFile(options?: FileOptions<[], SelectFileRes>): Promise<SelectFileRes> {
  return core.exec<[], SelectFileRes, unknown>(
    WORKPLUS_FILE,
    'selectFile',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
