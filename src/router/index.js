import Vue from 'vue'
import Router from 'vue-router'
import ListPost from '@/components/ListPost'
import Post from '@/components/Post'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: ListPost
    },
    {
      path: '/post',
      component: Post
    }
  ]
})
router.beforeEach((to, from, next) =>{
  console.log(to);
  console.log(from);
  console.log(next);
  next()
})
export default router