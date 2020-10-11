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

  // header
  {
    path: '/header/setTitle',
    name: 'setTitle',
    component: () => import(/* webpackChunkName: "header" */ '../views/header/SetTitle.vue'),
  },
  {
    path: '/header/navigation',
    name: 'navigation',
    component: () => import(/* webpackChunkName: "header" */ '../views/header/Navigation.vue'),
  },

  // util
  {
    path: '/util/copyText',
    name: 'copyText',
    component: () => import(/* webpackChunkName: "util" */ '../views/util/CopyText.vue'),
  },

  // session
  {
    path: '/session/showUserChatViewByUser',
    name: 'showUserChatViewByUser',
    component: () => import(/* webpackChunkName: "session" */ '../views/session/ShowUserChatViewByUser.vue'),
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
    path: '/image/saveImages',
    name: 'saveImages',
    component: () => import(/* webpackChunkName: "image" */ '../views/image/SaveImages.vue'),
  },
  {
    path: '/image/actionForLongPressImage',
    name: 'actionForLongPressImage',
    component: () => import(/* webpackChunkName: "image" */ '../views/image/ActionForLongPressImage.vue'),
  },

  // file
  {
    path: '/file/openFileDetail',
    name: 'openFileDetail',
    component: () => import(/* webpackChunkName: "file" */ '../views/file/OpenFileDetail.vue'),
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
