import Image from './image';
import Webview from './webview';
import Auth from './auth';
import Location from './location';

export default [Image, Webview, Auth, Location] as {
  title: string;
  module: string;
  active: boolean;
  icon: string;
  apis: {
    title: string;
    action: string;
    description: string;
    params: Common.PlainObject;
  }[];
}[];
