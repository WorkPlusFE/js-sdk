interface UploadOptions {
    fileURL: string;
    server: string;
    success?: Function;
    fail?: Function;
    progress?: Function;
    trustAllHosts?: boolean;
}
declare class FileUpload {
    fileTransferInstance: FileTransfer;
    fileUploadOptions: FileUploadOptions;
    constructor(options: FileUploadOptions);
    upload(options: UploadOptions): Promise<FileUploadResult>;
    abort(): void;
}
export default FileUpload;
