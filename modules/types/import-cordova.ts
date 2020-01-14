interface CordovaJsType {
  IOS: string;
  android: string;
  local: string;
}
export interface ImportCordovaConfig {
  SDK_NAME: string;
  SDK_HOST: string | null;
  cordovajs: unknown;
  pcSDKUri: string;
}
