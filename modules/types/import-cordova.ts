interface CordovaJsType {
  IOS: string;
  android: string;
  local: string;
}

export interface ImportCordovaConfig {
  SDK_NAME: string;
  SDK_HOST: string | null;
  cordovajs: {
    [key in Platform]: string;
  };
  pcSDKUri: string;
}

export type Platform = 'iOS' | 'android' | 'local';
