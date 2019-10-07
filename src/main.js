import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'lib-flexible/flexible.js'
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue'
import Split from './components/Split/Split.vue'


Vue.config.productionTip = false

//注册全局组件标签
Vue.component('HeaderSlot', HeaderSlot)
Vue.component('Split', Split)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
