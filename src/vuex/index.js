//vuex最核心管理对象模块: store
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import category from './modules/category'
import categorys from './modules/categoryList'
import home from './modules/homeData'
import recommend from './modules/recommend'
import initSearch from './modules/search'

//声明使用Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
  mutations, //总的mutations
  actions, //总的 actions
  getters,
  modules: {
    category,
    categorys,
    home,
    recommend,
    initSearch
  }
})