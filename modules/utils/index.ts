export * from './shared/is';

/**
 * 休眠函数
 * @param time 时间，单位毫秒
 */
export const sleep = function(time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};

/**
 * 加载Script
 * @export
 * @param {string} url
 */
export const loadScript = (url: string): Promise<HTMLScriptElement> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.addEventListener('load', () => resolve(script), false);
    script.addEventListener('error', () => reject(script), false);
    document.head.appendChild(script);
  });
};
