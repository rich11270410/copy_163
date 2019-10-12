/**
 * 用于管理recommend识物页面的状态数据的模块
 */
import {
  reqRecommendTabs,
  reqRecommendTData

} from '../../api'


import {
  RECEIVE_RECOMMENDTABS,
  RECEIVE_RECOMMENDDATA,
} from '../mutation-types'

const state = {
  tabIndex: 0, // 当前被选中的分类下标
  recommendTabs: [], // 识物页面导航列表
  recommendTData: [] //推荐懒加载的数据
}

const mutations = {

  [RECEIVE_RECOMMENDTABS](state, {recommendTabs}) {
    state.recommendTabs = recommendTabs
  },

  [RECEIVE_RECOMMENDDATA](state, {recommendTData}) {
    state.recommendTData = recommendTData
  },

}

const actions = {
  // // 更新当前下标的同步action
  // updateTabIndex({
  //   commit
  // }, tabIndex) {
  //   commit(UPDATE_INDEX, tabIndex)
  // },
  // 识物--获取导航列表的异步action
  async getRecommendTabs({commit}) {
    const result = await reqRecommendTabs()
    if (result.code === '200') {
      const recommendTabs = result.data
      commit(RECEIVE_RECOMMENDTABS, {recommendTabs})
    }
  },
  //识物--获取懒加载数据的异步action
  async getRecommendTData({commit}) {
    const result = await reqRecommendTData()
    if (result.code === '200') {
      const recommendTData = result.data
      commit(RECEIVE_RECOMMENDDATA, {recommendTData})
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
