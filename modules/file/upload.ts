import { isFunction } from '../shared/is';

interface UploadOptions {
  fileURL: string;
  server: string;
  success?: Function;
  fail?: Function;
  progress?: Function;
  trustAllHosts?: boolean;
}

class FileUpload {
  fileTransferInstance: FileTransfer;
  fileUploadOptions: FileUploadOptions;

  constructor(options: FileUploadOptions) {
    this.fileTransferInstance = new FileTransfer();
    this.fileUploadOptions = options;
  }

  upload(options: UploadOptions) {
    return new Promise((resolve, reject) => {
      const success = (res: any) => {
        if (res.responseCode === 200) {
          if (options.success && isFunction(options.success)) {
            options.success(res);
          }
          return resolve(res);
        }
        return reject(res);
      };
      const failure = (err: any) => {
        if (options.fail && isFunction(options.fail)) {
          options.fail(err);
        }
        reject(err);
      };
      this.fileTransferInstance.onprogress = (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        if (options.progress && isFunction(options.progress)) {
          options.progress(loaded, total);
        }
      };

      this.fileTransferInstance.upload(
        options.fileURL,
        encodeURI(options.server),
        success,
        failure,
        this.fileUploadOptions,
        options.trustAllHosts,
      );
    });
  }
  abort() {
    this.fileTransferInstance.abort();
  }
}

export default FileUpload;
