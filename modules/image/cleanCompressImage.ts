import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';

/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，可调用该方法进行清除
 * @module image
 * @returns 无
 */
function cleanCompressImage(): void {
  return core.execSync(
    WORKPLUS_IMAGE,
    'cleanCompressImage',
    [],
  );
}

export default cleanCompressImage;
