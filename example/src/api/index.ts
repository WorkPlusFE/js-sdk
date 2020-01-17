import Image from './image';
// import Webview from './webview';

export default [Image] as {
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
