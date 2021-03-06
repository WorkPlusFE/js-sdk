import * as core from '../core';
import { WORKPLUS_FILE } from '../constants';
import { FilePathParams } from '../types/file';

/**
 * 本地打开文件
 * @description 原生打开文件(pdf, excel, word, ppt 等)
 * @param {FilePathParams} [options]
 * @returns {void}
 */
export default function readFile(options: FilePathParams): void {
  return core.execSync<FilePathParams>(WORKPLUS_FILE, 'readFile', [options]);
}
