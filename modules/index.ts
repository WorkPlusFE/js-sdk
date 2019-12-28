import SDKStorage from './storage';
import * as core from './core';
import image from './image';
import * as SDKContact from './contact';
import SDKLocation from './location';
import SDKDevice from './device';
import SDKEventLog from './eventlog';
import SDKFile from './file';
import SDKNetwork from './network';
import SDKUtil from './util';

export * from './eventlistener';

export const version = '0.0.1';
export const native = {};
export const Storage = SDKStorage;
export { image };

export const contact = SDKContact;
export const location = SDKLocation;
export const device = SDKDevice;
export const eventlog = SDKEventLog;
export const file = SDKFile;
export const network = SDKNetwork;
export const util = SDKUtil;

export const init = core.init;
export const ready = core.ready;
export const exec = core.exec;
export const execSync = core.execSync;
export const error = core.error;
