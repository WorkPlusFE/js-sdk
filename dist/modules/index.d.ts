import SDKStorage from './storage';
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
export declare const init: (options?: import("./types/sdk").SDKOptions | undefined) => boolean;
export declare const ready: (fn?: Function | undefined) => Promise<void>;
export declare const exec: <A, S, F>(service: string, action: string, args: A[], success?: ((data: S) => void) | undefined, fail?: ((err: F) => void) | undefined) => Promise<S>;
