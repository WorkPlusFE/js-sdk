import { inWorkPlus, scriptGenerator } from './utils';
import { ImportCordovaConfig } from '../types/import-cordova';
import CordovaImportInstance from './cordovaImportInstance';

export default function cordovaImportInit(config: ImportCordovaConfig): void {
  try {
    if (!inWorkPlus()) return;

    const lib = new CordovaImportInstance(config);
    const importUri = lib.getImportUri();
    scriptGenerator(importUri);
  } catch (error) {
    throw new Error(error);
  }
}
