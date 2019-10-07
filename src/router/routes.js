//路由管理模块
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Topic from '../pages/Topic/Topic.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

import SearchGoods from '../pages/Home/compontents/SearchGoods/SearchGoods.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    path: '/search',
    component: SearchGoods
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/topic',
    component: Topic,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/home'
  }
]