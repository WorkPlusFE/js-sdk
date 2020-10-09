import { FileOptions, FilePathParams, FileExistRes } from '../types/file';
export declare type FileExistOptions = FilePathParams & FileOptions<FileExistRes>;
/**
 * 判断文件是否存在
 * @description 判断指定路径的文件是否存在
 * @param {FileExistOptions} [options]
 * @returns {Promise<FileExistRes>}
 */
export default function isFileExist(options: FileExistOptions): Promise<FileExistRes>;
