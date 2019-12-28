import SDKStorage from './storage';
import * as core from './core';
import * as SDKUtils from './utils';
import image from './image';
import * as SDKContact from './contact';
export * from './eventlistener';
export declare const version = "0.0.1";
export declare const native: {};
export declare const Storage: typeof SDKStorage;
export declare const utils: typeof SDKUtils;
export { image };
export declare const contact: typeof SDKContact;
export declare const location: {
    getLocation: typeof import("./location/getLocation").default;
    openSignIn: typeof import("./location/openSignIn").default;
    closeSignIn: typeof import("./location/closeSignIn").default;
};
export declare const device: {
    getDeviceInfo: typeof import("./device/getDeviceInfo").default;
    getIpAddress: typeof import("./device/getIpAddress").default;
    getPedometerData: typeof import("./device/getPedometerData").default;
};
export declare const eventlog: {
    getEventLogs: typeof import("./eventlog/getEventLogs").default;
    getTodayUseDuration: typeof import("./eventlog/getTodayUseDuration").default;
};
export declare const file: {
    chooseFiles: typeof import("./file/chooseFiles").default;
    getEmailAttachmentDir: typeof import("./file/getEmailAttachmentDir").default;
    isFileExist: typeof import("./file/isFileExist").default;
    openEmailAttachment: typeof import("./file/openEmailAttachment").default;
    openFileDetail: typeof import("./file/openFileDetail").default;
    readFile: typeof import("./file/readFile").default;
    selectFile: typeof import("./file/selectFile").default;
    selectFiles: typeof import("./file/selectFiles").default;
};
export declare const network: {
    getWifiInfo: typeof import("./network/getWifiInfo").default;
};
export declare const init: (options?: import("./types/core").CoreOptions | undefined) => boolean;
export declare const ready: (fn?: Function | undefined) => Promise<void>;
export declare const exec: typeof core.exec;
export declare const execSync: typeof core.execSync;
export declare const error: (fn: (err: unknown) => void) => void;
