import Dialog from './dialog';
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
import Util from './utils';
import User from './user';
import Session from './session';
import Header from './header';
import Listener from './listener';
import Record from './record';
import Video from './video';

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
  Contact,
  Dialog,
  Webview,
  Header,
  Image,
  File,
  Network,
  Location,
  Device,
  Video,
  Record,
  App,
  Session,
  Email,
  Listener,
  Util,
] as ApiModule[];
