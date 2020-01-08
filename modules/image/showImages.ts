import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { ExecOptions } from '../types/core';
import { ShowImagesItem } from '@modules/types/image';

export interface ShowImagesOptions extends ShowImagesItem, ExecOptions<never, never> {}

/**
 * 批量预览图片
 * @description 传输图片地址，预览图片
 * @param {ShowImagesItem} options
 * @returns {void}
 * @version 3.1.3版本以上支持
 */
function showImages(options: ShowImagesOptions): void {
  return core.execSync(WORKPLUS_IMAGE, 'showImages', [options]);
}

export default showImages;
