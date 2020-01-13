import { parse, stringify } from 'query-string';
import scanner from './scanner';
import share from './share';
import registerShakeListener from './registerShakeListener';
import unregisterShakeListener from './unregisterShakeListener';
import wxShare from './wxShare';

export default {
  scanner,
  share,
  registerShakeListener,
  unregisterShakeListener,
  wxShare,
  parse,
  stringify,
};
