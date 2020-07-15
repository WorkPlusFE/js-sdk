import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Prism from 'vue-prism-component';
import CodeWrapper from '@w6s/vuepress-code-wrapper';

const host = process.env.NODE_ENV === 'production' ?
  'https://sdk.workplus.io/js-sdk' :
  'http://172.16.1.66:8080';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(CodeWrapper, { host });
}
