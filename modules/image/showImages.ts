import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ShowImagesItem } from '../types/image';

/**
 * 批量预览图片
 * @description 传输图片地址，预览图片
 * @param {ShowImagesItem} options
 * @module image
 * @type 同步
 * @version 3.1.3版本以上
 */
function showImages(options: ShowImagesItem): void {
  return core.execSync(WORKPLUS_IMAGE, 'showImages', [options]);
}

export default showImages;
