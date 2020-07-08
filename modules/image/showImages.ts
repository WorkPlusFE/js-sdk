import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ShowImagesItem } from '../types/image';

/**
 * 图片预览
 * @description 传输图片地址，预览图片，支持传入 position 表示从第几张开始预览
 * @param {ShowImagesItem} options
 * @module image
 * @version 3.1.3版本以上
 */
function showImages(options: ShowImagesItem): void {
  return core.execSync(WORKPLUS_IMAGE, 'showImages', [options]);
}

export default showImages;
