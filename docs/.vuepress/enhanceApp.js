import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Prism from 'vue-prism-component';
import CodeWrapper from '@w6s/vuepress-code-wrapper';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(CodeWrapper, { host: 'https://sdk.workplus.io/js-sdk' });
}
