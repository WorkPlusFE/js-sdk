import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.component(VueQrcode.name, VueQrcode);
}