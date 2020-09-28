import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotInWorkPlus from '../views/NotInWorkPlus.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/api/:service/:action',
    name: 'api',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApiDetail.vue'),
  },

  // webview
  {
    path: '/webview/changeOrientation',
    name: 'changeOrientation',
    component: () => import(/* webpackChunkName: "webview" */ '../views/webview/ChangeOrientation.vue'),
  },
  {
    path: '/webview/waterMask',
    name: 'waterMask',
    component: () => import(/* webpackChunkName: "webview" */ '../views/webview/WaterMask.vue'),
  },
  {
    path: '/webview/shake',
    name: 'shake',
    component: () => import(/* webpackChunkName: "webview" */ '../views/webview/Shake.vue'),
  },

  // image
  {
    path: '/image/base64',
    name: 'base64',
    component: () => import(/* webpackChunkName: "image" */ '../views/image/Base64.vue'),
  },
  {
    path: '/image/takePhotoAndAddWaterMark',
    name: 'takePhotoAndAddWaterMark',
    component: () => import(/* webpackChunkName: "image" */ '../views/image/TakePhotoAndAddWaterMark.vue'),
  },
  {
    path: '/image/SaveImages',
    name: 'saveImages',
    component: () => import(/* webpackChunkName: "image" */ '../views/image/SaveImages.vue'),
  },

  {
    path: '/not',
    name: 'notInWorkPlus',
    component: NotInWorkPlus,
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});

const isWorkPlus = () => {
  if (process.env.NODE_ENV === 'development') return true;
  return window.navigator.userAgent.toLowerCase().indexOf('workplus') > -1;
};

router.beforeEach((to, from, next) => {
  if (!isWorkPlus()
    && to.name !== 'notInWorkPlus'
    && from.name !== 'notInWorkPlus') {
    next({ name: 'notInWorkPlus' });
  } else {
    next();
  }
});

export default router;
