import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryEdit from '../views/CategoryEdit.vue'
import Login from '../views/Login.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroesEdit from '../views/HeroesEdit.vue'
import HeroesList from '../views/HeroesList.vue'
import ArticlesEdit from '../views/ArticlesEdit.vue'
import ArticlesList from '../views/ArticlesList.vue'
import AdsEdit from '../views/AdsEdit.vue'
import AdsList from '../views/AdsList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      // 新建分类
      {
        path: '/categories/create',
        component: CategoryEdit,
        meta:'新建分类'
      }, {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true,
        meta:'编辑分类'
      },
      {
        path: '/categories/list',
        component: CategoryList,
        meta:'分类列表'
      },
      // 新建物品
      {
        path: '/items/create',
        component: ItemEdit,
        meta:'新建物品'
      }, {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true,
        meta:'编辑物品'
      },
      {
        path: '/items/list',
        component: ItemList,
        meta:'物品列表'
      },
      // 新建英雄
      {
        path: '/heroes/create',
        component: HeroesEdit,
        meta:'新建英雄'
      }, {
        path: '/heroes/edit/:id',
        component: HeroesEdit,
        props: true,
        meta:'编辑英雄'
      },
      {
        path: '/heroes/list',
        component: HeroesList,
        meta:'英雄列表'
      },
      // 新建文章
      {
        path: '/articles/create',
        component: ArticlesEdit,
        meta:'新建文章'
      }, {
        path: '/articles/edit/:id',
        component: ArticlesEdit,
        props: true,
        meta:'编辑文章'
      },
      {
        path: '/articles/list',
        component: ArticlesList,
        meta:'文章列表'
      },
      // 新建广告位
      {
        path: '/ads/create',
        component: AdsEdit,
        meta:'新建广告位'
      }, {
        path: '/ads/edit/:id',
        component: AdsEdit,
        props: true,
        meta:'编辑广告位'
      },
      {
        path: '/ads/list',
        component: AdsList,
        meta:'广告位列表'
      },
      // 新建管理员
      {
        path: '/admin_users/create',
        component: AdminUserEdit,
        meta:'新建管理员'
      }, {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
        props: true,
        meta:'编辑管理员'
      },
      {
        path: '/admin_users/list',
        component: AdminUserList,
        meta:'管理员列表'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to);
  
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router