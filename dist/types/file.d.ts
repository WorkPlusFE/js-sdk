export interface FileOptions<S> {
    /** 成功回调 */
    success?: (res: S) => void;
    /** 失败回调 */
    fail?: (err: unknown) => void;
}
export interface SelectFileRes {
    /** 文件在本机的路径 */
    filePath: string;
}
export interface OpenEmailAttachment {
    /** 文件路径 */
    uri: string;
    /** 文件类型 */
    type: string;
}
export interface EmailAttachmentDirRes {
    /** 邮件附件路径 */
    message: string;
    /** 接口状态码 */
    status: string;
}
declare type FileLimit = {
    /** 多选时数量的限制 */
    max_select_count?: number;
    /** 单个文件选择大小限制(byte),-1表示不限制 */
    single_select_size?: number;
    /** 所有文件选择大小限制(byte),-1表示不限制 */
    total_select_size?: number;
};
export interface ChooseFilesParams {
    /** 单选, 多选 */
    multiple?: boolean;
    /** 文件条件 */
    file_limit?: FileLimit;
    /** 已选文件列表 filePath */
    file_keys?: string[];
}
export interface ChooseFiles {
    /** 单选, 多选 */
    multiple?: boolean;
    /** 文件条件 */
    fileLimit?: {
        /** 多选时数量的限制 */
        maxSelectCount?: number;
        /** 单个文件选择大小限制(byte),-1表示不限制 */
        singleSelectSize?: number;
        /** 所有文件选择大小限制(byte),-1表示不限制 */
        totalSelectSize?: number;
    };
    /** 已选文件列表 filePath */
    fileKeys?: string[];
}
export interface ChooseFilesRes {
    /** 文件在本机的路径 */
    filePath: string;
    /** 该文件在后台的媒体mediaId */
    mediaId: string;
    /** 文件名字 */
    name: string;
}
export interface FilePathParams {
    /** 文件本机路径 */
    path: string;
}
export interface FileExistRes {
    /** 文件是否存在 */
    exist: boolean;
}
export interface ShowFileParams {
    /** 可选参数，文件路径, 若传入该参数, 则优先以该路径为主; 支持本地以及 http url 地址 */
    filePath: string;
    /** 必传，文件名称 */
    fileName: string;
    /** 可选参数, 文件大小 */
    fileSize?: number;
    /** 可选参数, 媒体id */
    mediaId?: string;
    /** 必传，指定文件是否是图片
     * 若为 true, 客户端则强制打开图片预览界面, false 则通过 fileName后缀来判断文件类型, 非图片则使用文件详情界面
     */
    isImage: boolean;
}
export interface GetUserFilePathParams {
    /** 表示 WorkPlus 定义的路径，目前支持`file`, `dropbox`类型, 分别获取下载文件目录, 跟网盘目录 */
    system?: 'file' | 'dropbox' | '';
    /** 轻应用自定义的用户目录，如传入参数`"custom" : "abc"`, app 将创建`sdcard_root/app_file/username/abc`的文件目录, 并返回路径给调用者 */
    custom?: string;
}
export {};
