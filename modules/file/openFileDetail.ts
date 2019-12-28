import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { FileOptions, ShowFileParams } from '../types/file';

/**
 * 打开文件详情
 * @description 通过指定 mediaId, fileName 等参数, 打开文件详情界面
 * @param {FileOptions<ShowFileParams[], void>} [options]
 * @returns {Promise<void>}
 */
export default function openFileDetail(
  options?: FileOptions<ShowFileParams[], void>,
): Promise<void> {
  return core.exec<ShowFileParams, void, unknown>(
    WORKPLUS_FILE,
    'showFile',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
