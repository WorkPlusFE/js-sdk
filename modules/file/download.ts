type DownloadOptions = {
  headers: {
    [p: string]: any;
  };
};

interface Download {
  /** URL of the server to download the file, as encoded by encodeURI(). */
  source: string;
  /** Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.  */
  target: string;
  /** A callback that is passed a FileEntry object. (Function) */
  success: Function;
  /**  A callback that executes if an error occurs when retrieving the FileEntry. Invoked with a FileTransferError object. (Function) */
  fail: Function;
  /** Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. */
  trustAllHosts?: boolean;
  /** Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc). */
  options?: DownloadOptions;
}

/**
 * 文件下载
 * @param {Download} options
 * @returns
 */
export default function FileDownload(options: Download) {
  return new Promise((resolve, reject) => {
    const fileTransfer = new (window as any).FileTransfer();
    const successCallback = (entry: any) => {
      options?.success(entry);
      resolve(entry);
    };
    const errorCallback = (error: any) => {
      options?.fail(error);
      reject(error);
    };

    fileTransfer.download(
      encodeURI(options.source),
      options.target,
      successCallback,
      errorCallback,
      options.trustAllHosts ?? false,
      options.options ?? {},
    );
  });
}
