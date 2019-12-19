export * from './is';

/**
 * 休眠函数
 * @param time 时间，单位毫秒
 */
export const sleep = function(time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};
