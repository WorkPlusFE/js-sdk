import Vue from 'vue';
// @ts-ignore
import VueHighlightJS from 'vue-highlightjs';
// @ts-ignore
import VueClipboard from 'vue-clipboard2';

import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';

Vue.use(VueClipboard);
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
