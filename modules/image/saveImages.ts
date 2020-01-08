import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { SaveImageItem } from '../types/image';

export interface SaveImagesOptions extends SaveImageItem, ExecOptions<never, never> {}

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImagesOptions} options
 * @returns {void}
 */
function saveImages(options: SaveImagesOptions): void {
  const { success, fail, ...data } = options;
  return core.execSync<SaveImageItem>(WORKPLUS_IMAGE, 'saveImages', [data]);
}

export default saveImages;
