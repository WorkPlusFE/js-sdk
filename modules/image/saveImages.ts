import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { SaveImageItem } from '../types/image';

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImageItem} options
 * @module image
 * @type 同步
 * @returns 无
 */
function saveImages(options: SaveImageItem): void {
  return core.execSync<SaveImageItem>(WORKPLUS_IMAGE, 'saveImages', [options]);
}

export default saveImages;
