/** 环境检测 */

export const detectInWorkPlus = () => {
  return window?.navigator.userAgent.includes('workplus');
};

export const isAndroid = () => {
  return window?.navigator.userAgent.includes('android');
};

export const isiPhone = () => {
  return window?.navigator.userAgent.includes('iPhone');
};
