interface ToBase64Options {
    /** 图片在本机的地址 */
    filePath: string;
    /** 转换成功后触发的回调方法 */
    success?: Function;
    /** 转换失败后触发的回调方法 */
    fail?: Function;
}
/**
 * 图片转 base64
 * @param {ToBase64Options} options
 * @returns
 */
export default function toBase64(options: ToBase64Options): Promise<unknown>;
export {};
