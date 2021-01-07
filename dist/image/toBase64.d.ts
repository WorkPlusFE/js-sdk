import { FileError, Entry } from '../types/cordova-plugin-file';
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
        resolveLocalFileSystemURL(url: string, successCallback: (entry: Entry) => void, errorCallback?: (error: FileError) => void): void;
    }
}
/**
 * 图片转 base64
 * @param {ToBase64Options} options
 * @returns
 */
export default function toBase64(options: ToBase64Options): Promise<unknown>;
export {};
