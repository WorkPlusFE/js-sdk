import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';

// @ts-ignore
import VueHighlightJS from 'vue-highlightjs';
// @ts-ignore
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
