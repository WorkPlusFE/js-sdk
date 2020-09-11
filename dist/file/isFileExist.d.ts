import { FileOptions, FilePathParams, FileExistRes } from '../types/file';
/**
 * 判断文件是否存在
 * @description 判断指定路径的文件是否存在
 * @param {FileOptions<FilePathParams[], FileExistRes>} [options]
 * @returns {Promise<FileExistRes>}
 */
export default function isFileExist(options?: FileOptions<FilePathParams[], FileExistRes>): Promise<FileExistRes>;
