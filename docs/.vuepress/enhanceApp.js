import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CodeWrapper from '@w6s/vuepress-code-wrapper';

const host = process.env.NODE_ENV === 'production' ?
  'https://open.workplus.io/sdk-demo/' :
  'http://192.168.0.103:8081';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(CodeWrapper, { host });
}
