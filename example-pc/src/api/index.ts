import Session from './session';
import Contact from './contact';
import device from './device';
import image from './image';


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
  Contact,
  Session,
  image,
  device,
] as ApiModule[];
