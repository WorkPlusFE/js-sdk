import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { SaveImageItem } from '../types/image';

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImageItem} options
 * @module image
 * @returns 无
 */
function saveImages(options: SaveImageItem): void {
  return core.execSync(WORKPLUS_IMAGE, 'showImages', [options]);
}

export default saveImages;
