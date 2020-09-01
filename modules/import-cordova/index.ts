import { inWorkPlus, scriptGenerator } from './utils';
import { ImportCordovaOptions } from '../types/import-cordova';
import CordovaImportInstance from './cordovaImportInstance';

export default function cordovaImportInit(options?: ImportCordovaOptions): void {
  try {
    if (!inWorkPlus()) return;

    const lib = new CordovaImportInstance(options);
    const importUri = lib.getImportUri();
    scriptGenerator(importUri);
  } catch (error) {
    throw new Error(error);
  }
}
