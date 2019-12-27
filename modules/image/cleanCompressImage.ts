import * as core from '../core';
import { WORKPLUS_IMAGE } from '../constants';

/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
 * @param {ExecSyncOptions<[]>} [options]
 * @returns
 */
function cleanCompressImage(): void {
  return core.execSync(WORKPLUS_IMAGE, 'cleanCompressImage', []);
}

export default cleanCompressImage;
