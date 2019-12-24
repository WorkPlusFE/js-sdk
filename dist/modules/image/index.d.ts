/** 图像相关 API */
import { TakePhoto, ImageOptions, ShowImagesItem, SaveImageItem, ImageDataItem, TakePicture, TakePictureArgs, ChooseImages, WaterMark } from '../types/image';
/**
 * 拍照返回
 * @description 拍照，压缩图片后直接返回图片
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
export declare function takePhoto(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
/**
 * 拍照返回并且可编辑
 * @description 拍照，截图返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
export declare function takePhotoWithEdit(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
/**
 * 选择图片（单张）
 * @description 调用图片相册，选择图片并压缩返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
export declare function selectImage(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
/**
 * 选择图片并截图返回（单张）
 * @description 调用图片相册，选择图片并截取返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
export declare function selectImageWithEdit(options?: ImageOptions<[], TakePhoto>): Promise<TakePhoto>;
/**
 * 选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {ImagesOptions} [options]
 * @returns
 */
export declare function selectImages(options: ImageOptions<string[], TakePhoto[]>): Promise<TakePhoto[]>;
/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
 * @param {ImageOptions<[], void>} [options]
 * @returns {Promise<void>}
 */
export declare function cleanCompressImage(options?: ImageOptions<[], void>): Promise<void>;
/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ImageOptions<ShowImagesItem[], void>} options
 * @returns {Promise<void>}
 */
export declare function showImages(options: ImageOptions<ShowImagesItem[], void>): Promise<void>;
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ImageOptions<SaveImageItem[], void>} options
 * @returns {Promise<void>}
 */
export declare function saveImages(options: ImageOptions<SaveImageItem[], void>): Promise<void>;
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageOptions<ImageDataItem[], any>} [options]
 * @returns {Promise<void>}
 */
export declare function actionForLongPressImage(options: ImageOptions<ImageDataItem[], void>): Promise<void>;
/**
 * 新增拍照返回接口(返回带mediaId方式) (Workplus 3.1.3版本以上使用)
 * @description 新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {ImageOptions<[TakePicture], TakePictureItem>} [options]
 * @returns
 */
export declare function takePicture(options: ImageOptions<[TakePictureArgs], TakePicture>): Promise<TakePicture>;
/**
 * 新增选择图片接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
 * @description 调用图片相册，根据用户参数决定是否选择多张图片或单张图片，
 * 支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,
 * 选择完后会进行后台上传，返回值中带有上传后的mediaId
 * @param {ImageOptions<[ChooseImages], TakePicture[]>} options
 * @returns {Promise<TakePicture[]>}
 */
export declare function chooseImages(options: ImageOptions<[ChooseImages], TakePicture[]>): Promise<TakePicture[]>;
/**
 * 图片添加水印接口(Workplus 3.6.0版本以上使用)
 * @description 拍照，生成水印图片返回
 * @param {ImageOptions<[WaterMark], void>} options
 * @returns {Promise<void>}
 */
export declare function takePictureAddWatermark(options: ImageOptions<[WaterMark], void>): Promise<void>;
