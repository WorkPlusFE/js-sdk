import { ImportCordovaConfig, Platform } from '../types/import-cordova';
export declare const isHttpsProtocol: () => boolean;
export declare const inIframe: () => boolean;
export declare const isiOSPlatform: (userAgent: string) => boolean;
export declare const isAndroidPlatform: (userAgent: string) => boolean;
export declare const isX5Webview: (userAgent?: string | undefined) => boolean;
export declare const getCordovaJsUriByPlatform: (config: ImportCordovaConfig, platform: Platform) => string;
export declare const inWorkPlus: () => boolean;
export declare const scriptGenerator: (uri: string) => void;
