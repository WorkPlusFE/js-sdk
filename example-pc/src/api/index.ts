import Session from './session';
import Contact from './contact';
import Device from './device';
import Image from './image';
import Auth from './auth';
import User from './user';


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
  Session,
  Image,
  Device,
] as ApiModule[];
