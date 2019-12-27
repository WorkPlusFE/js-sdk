import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecSyncOptions } from '../types/core';
import { ShowImagesItem } from '@modules/types/image';

/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ExecSyncOptions<ShowImagesItem[]>} options
 * @returns {void}
 */
function showImages(options: ExecSyncOptions<ShowImagesItem[]>): void {
  return core.execSync(WORKPLUS_IMAGE, 'showImages', options.data);
}

export default showImages;
