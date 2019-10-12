import {
  reqInitSearch,
  reqSearchResult
} from '../../api'

import {
  RECEIVE_INITSEARCH,
  RECEIVE_SEARCHRESULT
} from '../mutation-types'

const state = {
  search: {},
  searchResult: []
}

const mutations = {
  [RECEIVE_INITSEARCH](state, {search}) {
    state.search = search
  },
  [RECEIVE_SEARCHRESULT](state, {searchResult}) {
    state.searchResult = searchResult
    console.log(searchResult)
  }
}

const actions = {

  async getSearch({commit}) {
    const result = await reqInitSearch()
    if (result.code === '200') {
      const search = result.data
      commit(RECEIVE_INITSEARCH, {search})
    }
  },

  async getSearchResult({commit}, keywordPrefix) {
    const result = await reqSearchResult(keywordPrefix)
    if (result.code === '200') {
      const searchResult = result.data

      commit(RECEIVE_SEARCHRESULT, {searchResult})
          
    }
  },

}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}