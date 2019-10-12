import {
  reqHomeData
} from '../../api'

import {
  RECEIVE_HOMEDATA,
} from '../mutation-types'

const state = {
  homeData: []
}

const mutations = {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  }
}

const actions = {
  //异步获取homeData数据
  async getHomeData ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {
        homeData
      })
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