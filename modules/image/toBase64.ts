import { isAndroid } from '../shared/platform';
import { isFunction } from '../shared/is';
import { FileEntry, FileError, Entry } from '../types/cordova-plugin-file';

interface ToBase64Options {
  /** 图片在本机的地址 */
  filePath: string;
  /** 转换成功后触发的回调方法 */
  success?: Function;
  /** 转换失败后触发的回调方法 */
  fail?: Function;
}

declare global {
  interface Window {
    /**
     * Look up file system Entry referred to by local URL.
     * @param string url       URL referring to a local file or directory
     * @param successCallback  invoked with Entry object corresponding to URL
     * @param errorCallback    invoked if error occurs retrieving file system entry
     */
    resolveLocalFileSystemURL(
      url: string,
      successCallback: (entry: Entry) => void,
      errorCallback?: (error: FileError) => void,
    ): void;
  }
}

const resolveFn = (fileUrl: string): Promise<FileEntry> =>
  new Promise((resolve, reject) => {
    window.resolveLocalFileSystemURL(
      fileUrl,
      function(fileEntry: Entry) {
        resolve(fileEntry as FileEntry);
      },
      function(err: FileError) {
        reject(err);
      },
    );
  });

const resolveURI = (fileUrl: string): Promise<File> =>
  new Promise((resolve, reject) => {
    if (isAndroid()) {
      fileUrl = `file://${fileUrl}`;
    }
    resolveFn(fileUrl)
      .then(fileEntry => {
        fileEntry.file(
          function(file: File) {
            resolve(file);
          },
          function(err: unknown) {
            reject(err);
          },
        );
      })
      .catch(err => {
        reject(err);
      });
  });

const readDataUrl = (file: File): Promise<unknown> =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = (evt: unknown): void => {
      resolve(evt);
    };
    reader.readAsDataURL(file);
  });

/**
 * 图片转 base64
 * @param {ToBase64Options} options
 * @returns
 */
export default function toBase64(options: ToBase64Options): Promise<unknown> {
  return resolveURI(options.filePath)
    .then(readDataUrl)
    .then(function(result: unknown) {
      if (options.success && isFunction(options.success)) {
        options.success(result);
      }
      return Promise.resolve(result);
    })
    .catch(function(err: unknown) {
      if (options.fail && isFunction(options.fail)) {
        options.fail(err);
      }
      return Promise.reject(err);
    });
}
