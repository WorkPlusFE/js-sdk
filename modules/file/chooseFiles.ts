import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { FileOptions, ChooseFilesParams, ChooseFilesRes } from '../types/file';

export type ChooseFilesOptions = ChooseFilesParams & FileOptions<ChooseFilesRes[]>;

/**
 * 文件选择接口(返回带mediaId方式)
 * @description 打开WorkPlus文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带mediaId
 * @param {ChooseFilesOptions} [options]
 * @returns {Promise<ChooseFilesRes[]>}
 */
export default function chooseFiles(options: ChooseFilesOptions): Promise<ChooseFilesRes[]> {
  const { success, fail, ...args } = options;
  return core.exec<ChooseFilesParams, ChooseFilesRes[], unknown>(
    WORKPLUS_FILE,
    'chooseFiles',
    [args],
    success,
    fail,
  );
}
