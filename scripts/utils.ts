import * as fs from 'fs';

/**
 * 根据后缀查找所有匹配文件
 * @param {string} dir  文件目录
 * @param {string} ext 后缀名
 * @param {function} callback 回调函数
 */
export const findAllExtension = (dir: string, ext: RegExp, callback: (filename: string) => void) => {
  if (dir && !fs.existsSync(dir)) {
    return console.error(`${dir} is not exist.`);
  }

  fs.readdirSync(dir).forEach((path: string) => {
    const filePath = `${dir}/${path}`;
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findAllExtension(filePath, ext, callback);
      } else if (ext.test(path)) {
        callback(filePath);
      }
    } catch (error) {
      console.error(error);
    }
  });
};
