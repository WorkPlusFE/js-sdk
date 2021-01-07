import { isFunction } from '../shared/is';
import {
  FileTransfer,
  FileUploadOptions,
  FileUploadResult,
  FileTransferError,
} from '../types/cordova-plugin-file';

interface UploadOptions {
  fileURL: string;
  server: string;
  success?: Function;
  fail?: Function;
  progress?: Function;
  trustAllHosts?: boolean;
}

declare let FileTransfer: {
  new (): FileTransfer;
};

class FileUpload {
  fileTransferInstance: FileTransfer;
  fileUploadOptions: FileUploadOptions;

  constructor(options: FileUploadOptions) {
    this.fileTransferInstance = new FileTransfer();
    this.fileUploadOptions = options;
  }

  upload(options: UploadOptions): Promise<FileUploadResult> {
    return new Promise((resolve, reject) => {
      const success = (res: FileUploadResult): void => {
        if (res.responseCode === 200) {
          if (options.success && isFunction(options.success)) {
            options.success(res);
          }
          return resolve(res);
        }
        return reject(res);
      };
      const failure = (err: FileTransferError): void => {
        if (options.fail && isFunction(options.fail)) {
          options.fail(err);
        }
        reject(err);
      };
      this.fileTransferInstance.onprogress = (progressEvent: ProgressEvent): void => {
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
  abort(): void {
    this.fileTransferInstance.abort();
  }
}

export default FileUpload;
