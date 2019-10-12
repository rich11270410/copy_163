import {reqCategoryList} from '../../api'
import {RECEIVE_CATEGORYS} from '../mutation-types'

const state = {
   cates: [] // 分类数据
}

const mutations = {
  [RECEIVE_CATEGORYS](state, {cates}) {
    state.cates = cates
  }
}

const actions = {
  async getCategoryList({commit}) {
    const result = await reqCategoryList()
    if (result.code === 0) {
      const cates = result.data
      commit(RECEIVE_CATEGORYS, {cates})
    } 
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}