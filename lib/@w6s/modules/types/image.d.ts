export interface TakePhotoResp {
    /** 压缩后图像存在本地的地址 */
    imageURL: string;
    /** 原图像存在本地的地址 */
    key: string;
    /** 相对于图像的信息 */
    imageInfo: ImageInfo;
}
export interface ImageInfo {
    /** 图像高度 */
    height: string;
    /** 图像宽度 */
    width: string;
    /** 图像大小 */
    size: string;
}
export interface ImageOptions<D, S> {
    /** 传参 */
    data: D;
    /** 成功回调 */
    success: (res: S) => void;
    /** 失败回调 */
    fail: (err: any) => void;
}
export interface ImagesOptions {
    /** 图片在本机的地址 */
    imageKeys?: string[];
    /** 成功回调 */
    success?: (res: TakePhotoResp[]) => void;
    /** 失败回调 */
    fail?: (err: any) => void;
}
export interface ShowImagesItem {
    /** 图片在本机的地址 */
    urls: string[];
    /** 图片的mediaId */
    medias: string[];
    /** 表示从第几张打开 */
    position: string;
}
export interface SaveImageItem {
    /** 图片mediaId */
    mediaId: string[];
    /** 图片url地址 */
    url: string;
}
export interface ImageDataItem {
    /** base64数据 */
    imageData: string;
}
export interface TakePicture {
    /**
     * 表示是否进行裁剪:
     * true 进行裁剪返回，
     * false 不裁剪直接返回
     * */
    editable: boolean;
}
export interface TakePictureItem extends TakePhotoResp {
    /** 返回后台的mediaId */
    mediaId: string;
}
export interface ChooseImages {
    /** 是否是多选，ture(多选)  fals(单选) */
    multiple: boolean;
    /** 图片在本机的地址 */
    imageKeys: string[];
    /** 是否对图像进行剪裁 true(剪裁)  false(不剪裁)  */
    editable: boolean;
    file_limit: {
        /** 多选时数量的限制 */
        max_select_count: number;
        /** 单个文件选择大小限制(byte), -1表示不限制 */
        single_select_size: number;
        /** 所有文件选择大小限制(byte), -1表示不限制 */
        total_select_size: number;
    };
}
export interface WaterMark {
    /** 水印内容 */
    content: string;
    /** 水印字号大小 */
    font_size: string;
    /** 水印颜色 */
    color: string;
}
