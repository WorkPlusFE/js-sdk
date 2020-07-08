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
