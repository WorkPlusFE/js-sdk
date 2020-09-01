import { ImportCordovaConfig, Platform } from '../types/import-cordova';
import config from './config';
import {
  getCordovaJsUriByPlatform,
  inIframe,
  isHttpsProtocol,
  isAndroidPlatform,
  isX5Webview,
  isiOSPlatform,
} from './utils';

export default class CordovaImportInstance {
  private config: ImportCordovaConfig;
  constructor(options: ImportCordovaConfig) {
    this.config = Object.assign(JSON.parse(JSON.stringify(config)), options);
  }

  get userAgent(): string {
    return window.navigator.userAgent.toLowerCase();
  }

  /**
   * 返回注入的地址
   *
   * 默认使用 local模式，
   * 当检测到是 https协议 (安卓) 或在 iframe 中打开时，
   * 若iOS或安卓的 cordovajs 地址存在，强制使用 http 模式
   */
  getImportUri(): string {
    const platform = this.getCurrentPlatformByUserAgent();
    if (this.mustUseHttpModel()) {
      const httpUri = getCordovaJsUriByPlatform(this.config, platform);
      if (!httpUri && process.env.NODE_ENV === 'development') {
        console.warn('当前应用环境适合使 http(s):// 方式加载 cordova.js，请设置对应平台的 cordova.js 访问地址！');
      }
      if (httpUri) return httpUri;
    }

    return this.config.cordovajs.local;
  }

  mustUseHttpModel(): boolean {
    if (inIframe()) return true;
    if (isHttpsProtocol() && isAndroidPlatform(this.userAgent) && !isX5Webview()) return true;
    return false;
  }

  getCurrentPlatformByUserAgent(): Platform {
    if (isiOSPlatform(this.userAgent)) {
      return 'iOS';
    }
    if (isAndroidPlatform(this.userAgent)) {
      return 'android';
    }
    return 'local';
  }
}
