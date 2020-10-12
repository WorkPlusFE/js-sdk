import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { FileOptions, ChooseFiles, ChooseFilesParams, ChooseFilesRes } from '../types/file';

export type ChooseFilesOptions = ChooseFiles & FileOptions<ChooseFilesRes[]>;

/**
 * 文件选择接口(返回带mediaId方式)
 * @description 打开WorkPlus文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带mediaId
 * @param {ChooseFilesOptions} [options]
 * @returns {Promise<ChooseFilesRes[]>}
 */
export default function chooseFiles(options?: ChooseFilesOptions): Promise<ChooseFilesRes[]> {
  const args: ChooseFilesParams = {
    multiple: options?.multiple || true,
    file_keys: options?.fileKeys || [],
    file_limit: {
      max_select_count: options?.fileLimit?.maxSelectCount || 9,
      single_select_size: options?.fileLimit?.singleSelectSize || -1,
      total_select_size: options?.fileLimit?.totalSelectSize || -1,
    },
  };

  return core.exec<ChooseFilesParams, ChooseFilesRes[], unknown>(
    WORKPLUS_FILE,
    'chooseFiles',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
