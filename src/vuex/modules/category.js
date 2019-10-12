import {reqCategory} from '../../api'

import {
  RECEIVE_CATEGORY
} from '../mutation-types'

const state = {
   cate: {}
}

const mutations = {
  [RECEIVE_CATEGORY](state, {cate}) {
    state.cate = cate
  }
}

const actions = {
  //异步获取Category数据
  async getCategory({commit}) {
    const result = await reqCategory()
    if (result.code === 0) {
      const cate = result.data
      commit(RECEIVE_CATEGORY, {cate})
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