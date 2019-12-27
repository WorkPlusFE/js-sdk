import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecSyncOptions } from '../types/core';
import { SaveImageItem } from '../types/image';

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ExecSyncOptions<SaveImageItem[]>} options
 * @returns {void}
 */
function saveImages(options: ExecSyncOptions<SaveImageItem[]>): void {
  return core.execSync<SaveImageItem>(WORKPLUS_IMAGE, 'saveImages', options.data);
}

export default saveImages;
