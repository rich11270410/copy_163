import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './vuex'
import 'lib-flexible/flexible.js'
import './mock/mockServer'
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue'
import Split from './components/Split/Split.vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload, {loading})   // 内部定义了一个全局指令: lazy



Vue.config.productionTip = false

//注册全局组件标签
Vue.component('HeaderSlot', HeaderSlot)
Vue.component('Split', Split)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
