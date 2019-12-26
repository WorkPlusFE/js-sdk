import SDKStorage from './storage';
import * as core from './core';
import * as SDKUtils from './utils';
import image from './image';
import * as SDKContact from './contact';
import SDKLocation from "./location";
import SDKDevice from './device';

export * from './eventlistener';

export const version = '0.0.1';
export const native = {};
export const Storage = SDKStorage;
export const utils = SDKUtils;
export { image };
export const contact = SDKContact;
export const location = SDKLocation;
export const device = SDKDevice;
export const init = core.init;
export const ready = core.ready;
export const exec = core.exec;
