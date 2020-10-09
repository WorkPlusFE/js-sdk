import { SaveImageItem } from '../types/image';
import { ExecOptions } from '../types/core';
export declare type SaveImagesOptions = SaveImageItem & ExecOptions<string, void>;
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImagesOptions} options
 * @module image
 * @returns 无
 */
declare function saveImages(options: SaveImagesOptions): Promise<string>;
export default saveImages;
