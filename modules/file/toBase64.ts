import { isAndroid } from '../shared/platform';
import { isFunction } from '../shared/is';

interface ToBase64Options {
  /** 图片在本机的地址 */
  filePath: string;
  /** 转换成功后触发的回调方法 */
  success?: Function;
  /** 转换失败后触发的回调方法 */
  fail?: Function;
}

const resolveLocalFileSystemURL = (fileUrl: string) =>
  new Promise((resolve, reject) => {
    window.resolveLocalFileSystemURL(
      fileUrl,
      function(fileEntry: any) {
        resolve(fileEntry);
      },
      function(err: any) {
        reject(err);
      },
    );
  });

const resolveURI = (fileUrl: string) =>
  new Promise((resolve, reject) => {
    if (isAndroid()) {
      fileUrl = `file://${fileUrl}`;
    }
    resolveLocalFileSystemURL(fileUrl)
      .then((fileEntry: any) => {
        fileEntry.file(
          function(file: any) {
            resolve(file);
          },
          function(err: any) {
            reject(err);
          },
        );
      })
      .catch(err => {
        reject(err);
      });
  });

const readDataUrl = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = (evt: any) => {
      resolve(evt);
    };
    reader.readAsDataURL(file);
  });

/**
 * 图片转 base64
 * @param {ToBase64Options} options
 * @returns
 */
export default function toBase64(options: ToBase64Options) {
  return resolveURI(options.filePath)
    .then(readDataUrl)
    .then(function(result) {
      if (options.success && isFunction(options.success)) {
        options.success(result);
      }
      return Promise.resolve(result);
    })
    .catch(function(err) {
      if (options.fail && isFunction(options.fail)) {
        options.fail(err);
      }
      return Promise.reject(err);
    });
}
