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
// import Notification from './notification';
// import Event from './event';
import Util from './utils';
import User from "./user";
import Session from "./session";
import Header from './header';

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
  User,
  Image,
  File,
  Contact,
  Webview,
  Header,
  Session,
  Location,
  Network,
  Device,
  App,
  Util,
  // Notification,
  // Event,
  Email,
] as ApiModule[];
