import Vue from 'vue';
// @ts-ignore
import VueClipboard from 'vue-clipboard2';
// @ts-ignore
import JsonViewer from 'vue-json-viewer';
import 'vue-json-viewer/style.css';

if (process.env.NODE_ENV === 'development') {
  import VConsole from 'vconsole';
  new VConsole();
}

import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';

Vue.use(VueClipboard);
Vue.use(JsonViewer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
