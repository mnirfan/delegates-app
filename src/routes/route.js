import Vue from 'vue'
import Router from 'vue-router'
import authMid from '../middlewares/auth'

const Login = () => import(/* webpackChunkName: "login" */ '../components/user/Login.vue');
const Home = () => import(/* webpackChunkName: "home" */ '../components/home/Home.vue')
const Account = () => import(/* webpackChunkName: "account" */ '../components/user/Account.vue');
const Event = () => import(/* webpackChunkName: "event" */ '../components/event/Event.vue');
const Announcement = () => import(/* webpackChunkName: "announcement" */ '../components/announcement/Default.vue');
const AnnouncementDetail = () => import(/* webpackChunkName: "announcement" */ '../components/announcement/Detail.vue');
const AnnouncementNew = () => import(/* webpackChunkName: "announcement" */ '../components/announcement/New.vue');
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', beforeEnter: authMid.requireAuth, component: Home },
    { path: '/login', name: 'Login', beforeEnter: authMid.requireNotAuth, component: Login },
    { path: '/account', name: 'Account', beforeEnter: authMid.requireAuth, component: Account },
    { path: '/event', name: 'Event', beforeEnter: authMid.requireAuth, component: Event },
    { path: '/announcement', name: 'Announcement', beforeEnter: authMid.requireAuth, component: Announcement },
    { path: '/announcement/new', name: 'AnnouncementNew', beforeEnter: authMid.requireAuth, component: AnnouncementNew },
    { path: '/announcement/:id', name: 'AnnouncementDetail', beforeEnter: authMid.requireAuth, component: AnnouncementDetail },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})