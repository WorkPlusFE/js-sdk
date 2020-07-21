import Image from './image';
import Webview from './webview';
import Auth from './auth';
import Location from './location';
import Email from './email';
import Network from './network';
import Device from './device';

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

export default [Image, Webview, Auth, Location, Email, Network, Device] as ApiModule[];
