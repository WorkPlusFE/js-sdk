import { ImportCordovaConfig } from '../types/import-cordova';

const config: ImportCordovaConfig = {
  // 不同平台的 CordovaJs
  cordovajs: {
    // 必须是完整的路径，默认使用local模式
    local: 'applocal://cordova.min.js',
    iOS: '',
    android: '',
  },

  // 是否使用 http 模式，若为 true，将强制使用 http 模式
  useHttp: false,

  // =.=!
  pcSDKUri: '',
};

export default config;
