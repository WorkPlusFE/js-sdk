import chooseFiles from './chooseFiles';
import isFileExist from './isFileExist';
import openFileDetail from './openFileDetail';
import readFile from './readFile';
import download from './download';
import upload from './upload';
declare const _default: {
    /** 选择文件 */
    chooseFiles: typeof chooseFiles;
    /** 判断文件是否存在 */
    isFileExist: typeof isFileExist;
    /** 打开文件详情 */
    openFileDetail: typeof openFileDetail;
    /** 本地打开文件 */
    readFile: typeof readFile;
    /** 文件下载 */
    download: typeof download;
    /** 文件上传 */
    upload: typeof upload;
};
export default _default;
