import { inWorkPlus, isValidHost, scriptGenerator } from './utils';
import CordovaImportInstance from './cordovaImportInstance';

export default function cordovaImportInit(host?: string): void {
  try {
    if (!inWorkPlus()) return;

    if (host) {
      if (!isValidHost(host)) {
        throw new Error('Please enter a valid host, such as //workplus.io/');
      }
    }

    const lib = new CordovaImportInstance(host);
    const importUri = lib.getImportUri();
    scriptGenerator(importUri);
  } catch (error) {
    throw new Error(error);
  }
}
