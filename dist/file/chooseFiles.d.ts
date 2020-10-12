import { FileOptions, ChooseFiles, ChooseFilesRes } from '../types/file';
export declare type ChooseFilesOptions = ChooseFiles & FileOptions<ChooseFilesRes[]>;
/**
 * 文件选择接口(返回带mediaId方式)
 * @description 打开WorkPlus文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带mediaId
 * @param {ChooseFilesOptions} [options]
 * @returns {Promise<ChooseFilesRes[]>}
 */
export default function chooseFiles(options?: ChooseFilesOptions): Promise<ChooseFilesRes[]>;
