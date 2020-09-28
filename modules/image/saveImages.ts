import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';
import { SaveImageItem } from '../types/image';
import { ExecOptions } from '../types/core';

export type  SaveImagesOptions = SaveImageItem & ExecOptions<string, void>;

/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImagesOptions} options
 * @module image
 * @returns 无
 */
function saveImages(options: SaveImagesOptions): Promise<string> {
  const { success, fail, ...arg } = options;
  return core.exec<SaveImageItem, string, void>(
    WORKPLUS_IMAGE, 
    'saveImages', 
    [arg],
    success,
    fail,
    false,
  );
}

export default saveImages;
