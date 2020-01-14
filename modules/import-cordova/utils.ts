import { isString } from '../shared/is';
import { ImportCordovaConfig, Platform } from '../types/import-cordova';
import config from './config';

// 是否为 https 模式
export const isHttpsProtocol = (): boolean => window.location.protocol === 'https:';

// 是否在 iframe 中打开
export const inIframe = (): boolean => self.frameElement && self.frameElement.tagName == 'IFRAME';

export const isiOSPlatform = (userAgent: string): boolean => userAgent.indexOf('iphone') > -1;
export const isAndroidPlatform = (userAgent: string): boolean => userAgent.indexOf('android') > -1;
export const isX5Webview = (userAgent?: string): boolean =>
  /x5webkit|mqqbrowser|tbs/.test(userAgent as string);

export const getCordovaJsUriByPlatform = (
  config: ImportCordovaConfig,
  platform: Platform,
): string => `${config.SDK_HOST}${config.cordovajs[platform]}`;

export const inWorkPlus = (): boolean => navigator.userAgent.indexOf('workplus') > -1;

export const scriptGenerator = (uri: string): void => {
  const cordovaScriptElement = document.createElement('script');
  cordovaScriptElement.setAttribute('type', 'text/javascript');
  cordovaScriptElement.setAttribute('src', uri);
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(cordovaScriptElement);
};

export const isValidHost = (uri: string): boolean => {
  if (!isString(uri)) return false;
  if (uri.indexOf('http') === 0) return false;
  if (uri.indexOf('//') !== 0) return false;
  if (uri.indexOf('.') === -1) return false;
  if (uri[uri.length - 1] !== '/') return false;
  return true;
};

export const getSDKScriptTagSrc = (): string => {
  const scripts = document.getElementsByTagName('script');

  let matchScriptSrc = '';
  for (let i = 0; i < scripts.length; i += 1) {
    const script = scripts[i];
    if (script.src && script.src.indexOf(`/${config.SDK_NAME}`) > -1) {
      matchScriptSrc = script.src;
      break;
    }
  }
  return matchScriptSrc;
};

export const getAssetDomainUrl = (): string | undefined => {
  const currentScriptSrc = getSDKScriptTagSrc();
  if (currentScriptSrc) {
    return currentScriptSrc.split(config.SDK_NAME)[0];
  }
};
