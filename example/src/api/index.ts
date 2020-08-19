import Image from './image';
import Webview from './webview';
import Auth from './auth';
import Location from './location';
import Email from './email';
import Network from './network';
import Device from './device';
import Contact from './contact';
import File from './file';
import App from './app';
import Notification from './notification';
import Event from './event';
import Util from './utils';

interface ApiModule {
  title: string;
  module: string;
  active: boolean;
  icon: string;
  apis: ApiItem[];
}

interface ApiItem {
  title: string;
  action: string;
  description: string;
  params: Common.PlainObject;
}

export default [
  Auth,
  Image,
  File,
  Contact,
  Webview,
  Location,
  Network,
  Device,
  App,
  Util,
  Notification,
  Event,
  Email,
] as ApiModule[];
