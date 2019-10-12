//路由管理模块  路由懒加载
// import Home from '../pages/Home/Home.vue'
// import Category from '../pages/Category/Category.vue'
// import Topic from '../pages/Topic/Topic.vue'
// import ShopCart from '../pages/ShopCart/ShopCart.vue'
// import Profile from '../pages/Profile/Profile.vue'
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const Topic = () => import('../pages/Topic/Topic.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

// import SearchGoods from '../pages/Home/compontents/SearchGoods/SearchGoods.vue'
// import TopicFind from '../pages/Topic/TopicFind/TopicFind.vue'
// import Recognition from '../pages/Topic/Recognition/Recognition.vue'
// import Login from '../pages/Profile/Login/Login.vue'
// import Register from '../pages/Profile/Register/Register.vue'
const SearchGoods = () => import('../pages/Home/compontents/SearchGoods/SearchGoods.vue')
const TopicFind = () => import('../pages/Topic/TopicFind/TopicFind.vue')
const Recognition = () => import('../pages/Topic/Recognition/Recognition.vue')
const Login = () => import('../pages/Profile/Login/Login.vue')
const Register = () => import('../pages/Profile/Register/Register.vue')

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
    },
    children:[
      {
        path: '/topic/find',
        component: TopicFind,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/topic/recognition',
        component: Recognition,
        meta: {
          showFooter: true
        }
      },
      {
        path: '',
        redirect: '/topic/find'
      }
    ]
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    children: [{
        path: '/profile/login',
        component: Login,
      },
      {
        path: '/profile/register',
        component: Register,
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]