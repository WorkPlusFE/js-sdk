import { parse, stringify } from 'query-string';
import scanner from './scanner';
import share from '../webview/share';
import registerShakeListener from '../webview/registerShakeListener';
import unregisterShakeListener from '../webview/unregisterShakeListener';
import wxShare from '../webview/wxShare';

export default {
  scanner,
  share,
  registerShakeListener,
  unregisterShakeListener,
  wxShare,
  parse,
  stringify,
};
