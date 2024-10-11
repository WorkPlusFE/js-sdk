import Session from './session';
import Contact from './contact';


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
  Session,
  Contact,
] as ApiModule[];
