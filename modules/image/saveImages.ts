import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { SaveImageItem } from '../types/image';
import { ExecOptions } from '../types/core';

export type SaveImagesOptions = SaveImageItem & ExecOptions<void, void>;

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImagesOptions} options
 * @module image
 * @returns 无
 */
function saveImages(options: SaveImagesOptions): Promise<void> {
  const { success, fail, ...data } = options;
  return core.exec<SaveImageItem, void, void>(WORKPLUS_IMAGE, 'saveImages', [data], success, fail);
}

export default saveImages;
