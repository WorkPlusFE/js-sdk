import { inWorkPlus, isValidHost, scriptGenerator } from './utils';
import CordovaImportLib from './cordovaImportInstance';

export const cordovaImportInit = function(host?: string): void {
  try {
    if (!inWorkPlus()) return;

    if (host) {
      if (!isValidHost(host)) {
        throw new Error('Please enter a valid host, such as //workplus.io/');
      }
    }

    const lib = new CordovaImportLib(host);
    const importUri = lib.getImportUri();
    scriptGenerator(importUri);
  } catch (error) {
    throw new Error(error);
  }
};
