import Vue from 'vue'
import Router from 'vue-router'
import ListPost from '@/components/ListPost'
import Post from '@/components/Post'
import Login from '@/components/Login'
import CreatePost from '@/components/admin/CreatePost'
// import {role} from '@/const/role'
// import store from '@/store/index'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: ListPost
    },
    {
      path: '/post',
      component: Post
    },
    {
      path: '/create',
      component: CreatePost
    },
    {
      path: '/login',
      component: Login
    },
    { 
      path: '*', 
      redirect: '/home'
    }
  ]
})
router.beforeEach((to, from, next) =>{
  const adminPages = ['/create','/edit'];
  const authRequired = adminPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if(adminPages.includes(to.path)) {
    if (authRequired && loggedIn) {
      next();
    } else {
      return next('/login');
    }
  } else {
    next();
  }
})
export default router