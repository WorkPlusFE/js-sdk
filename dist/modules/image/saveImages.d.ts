import { ExecSyncOptions } from '../types/core';
import { SaveImageItem } from '../types/image';
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ExecSyncOptions<SaveImageItem[]>} options
 * @returns {void}
 */
declare function saveImages(options: ExecSyncOptions<SaveImageItem[]>): void;
export default saveImages;
