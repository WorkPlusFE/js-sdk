import chooseFiles from './chooseFiles';
import isFileExist from './isFileExist';
import openFileDetail from './openFileDetail';
import readFile from './readFile';
import download from './download';
import upload from './upload';
import getFilePath from './getUserFilePath';

export default {
  /** 选择文件 */
  chooseFiles,
  /** 判断文件是否存在 */
  isFileExist,
  /** 打开文件详情 */
  openFileDetail,
  /** 本地打开文件 */
  readFile,
  /** 文件下载 */
  download,
  /** 文件上传 */
  upload,
  /** 获取文件目录 */
  getFilePath,
};
