import { ExecSyncOptions } from '../types/core';
import { ShowImagesItem } from '@modules/types/image';
/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ExecSyncOptions<ShowImagesItem[]>} options
 * @returns {void}
 */
declare function showImages(options: ExecSyncOptions<ShowImagesItem[]>): void;
export default showImages;
