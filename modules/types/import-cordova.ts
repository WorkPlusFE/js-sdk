export interface ImportCordovaConfig {
  cordovajs: {
    [key in Platform]: string;
  };
  pcSDKUri: string;
}

export type Platform = 'iOS' | 'android' | 'local';

export interface ImportCordovaOptions {
  iOS?: string;
  android?: string;
}
