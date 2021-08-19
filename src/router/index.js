import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main';
import Sub from '../views/Sub';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/main", component: Main } ,
    { path: "/sub", component: Sub } ,
  ]
});

export default router; 