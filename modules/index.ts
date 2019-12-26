import SDKStorage from './storage';
import * as core from './core';
import * as SDKUtils from './utils';
import * as SDKImage from './image';
import * as SDKContact from './contact';
export * from './eventlistener';

export const version = '0.0.1';
export const native = {};
export const Storage = SDKStorage;
export const utils = SDKUtils;
export const image = SDKImage;
export const contact = SDKContact;
export const init = core.init;
export const ready = core.ready;
export const exec = core.exec;
