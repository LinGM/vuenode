import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import Article from '@/components/article/article'
import ArticleDetail from '@/components/article-detail/article-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path:'/article',
      name:'Article',
      component:Article,
      children:[
        {
          path:':id',
          component:ArticleDetail
        }
      ]
    }
  ]
})
