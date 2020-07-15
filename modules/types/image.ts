import { ExecOptions } from './core';

export interface PhotoInfo {
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
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: void) => void;
}

export interface ShowImagesItem {
  /** 图片在本机的地址 */
  urls?: string[];
  /** 图片的mediaId */
  medias?: string[];
  /** 表示从第几张打开，0表示第一张 */
  position?: string | number;
}

export interface SaveImageItem {
  /** 图片mediaId */
  mediaId?: string[];
  /** 图片url地址 */
  url?: string;
  /** base64数据 */
  imageData?: string;
}

export interface ImageDataItem {
  /** base64数据 */
  imageData: string;
}

export interface PhotoInfoAndMediaId extends PhotoInfo {
  /** 返回后台的mediaId */
  mediaId: string;
}

export interface ChooseImagesParams {
  /** 是否是多选，ture(多选)  fals(单选) */
  multiple: boolean;
  /** 是否对图像进行剪裁 true(剪裁)  false(不剪裁)  */
  editable?: boolean;
  /** 图片在本机的地址 */
  imageKeys?: string[];
  file_limit?: {
    /** 多选时数量的限制 */
    max_select_count?: number;
    /** 单个文件选择大小限制(byte), -1表示不限制 */
    single_select_size?: number;
    /** 所有文件选择大小限制(byte), -1表示不限制 */
    total_select_size?: number;
  };
}

export interface ChooseImages {
  /** 是否是多选，ture(多选)  fals(单选) */
  multiple: boolean;
  /** 是否对图像进行剪裁 true(剪裁)  false(不剪裁)  */
  editable?: boolean;
  /** 图片在本机的地址 */
  imageKeys?: string[];
  fileLimit?: {
    /** 多选时数量的限制 */
    maxSelectCount?: number;
    /** 单个文件选择大小限制(byte), -1表示不限制 */
    singleSelectSize?: number;
    /** 所有文件选择大小限制(byte), -1表示不限制 */
    totalSelectSize?: number;
  };
}

export interface WaterMark {
  /** 水印内容 */
  content: string;
  /** 水印字号大小 */
  fontSize: number | string;
  /** 水印颜色 */
  color: string;
  /** 屏蔽水印，false:不屏蔽。true：屏蔽 */
  markDisable: boolean;
  /** 水印添加时间：false：不添加。true：添加 */
  timeEnable: boolean;
  /** 水印添加位置：false：不添加。true：添加 */
  locationEnable: boolean;
}

export interface ImageKeys {
  /** 图片在本机的地址 */
  imageKeys?: string[];
  /** 相册选择时，默认只可选择图片， 传入 1 表示需支持视频选择 */
  medias?: number | string;
}

export type PhotoInfoOptions = ExecOptions<PhotoInfo, never>;
